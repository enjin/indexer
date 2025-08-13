import { Store } from '@subsquid/typeorm-store'
import { Logger } from '~/util/logger'
import { In } from 'typeorm'
import { PoolMember, Listing, Collection, Token, ListingSale } from '~/model'

interface EntityLikeWithId {
    id: string
}

// A lightweight operation record to preserve relative ordering and enable batching of contiguous ops
interface BufferedOp {
    method: 'save' | 'insert' | 'remove'
    args: unknown[]
    entityTypeKey?: string
}

export interface BufferedStoreController {
    store: Store
    reset: () => void
    flush: () => Promise<void>
}

export interface BufferedStoreOptions {
    chunkSize?: number
    cacheClasses?: Array<{ cls: Function; maxEntries?: number }>
}

function safeStringify(input: unknown): string {
    try {
        return JSON.stringify(input, (_k, v) => (typeof v === 'bigint' ? v.toString() : v))
    } catch {
        return '[Unserializable]'
    }
}

function getCtor(obj: unknown): Function | undefined {
    return (obj as unknown as { constructor?: Function })?.constructor
}

function getCtorName(obj: unknown): string | undefined {
    return (obj as unknown as { constructor?: { name?: string } })?.constructor?.name
}

function getEntityTypeKeyFromArg(arg: unknown): string | undefined {
    if (!arg) return undefined
    if (Array.isArray(arg)) {
        if (arg.length === 0) return undefined
        const first = arg[0]
        const ctorName = getCtorName(first)
        if (ctorName && arg.every((e) => getCtorName(e) === ctorName)) return ctorName
        return undefined
    }
    return getCtorName(arg)
}

function getCtorFromArg(arg: unknown): Function | undefined {
    if (!arg) return undefined
    if (Array.isArray(arg)) {
        if (arg.length === 0) return undefined
        const first = arg[0]
        const ctor = getCtor(first)
        if (ctor && arg.every((e) => getCtor(e) === ctor)) return ctor
        return undefined
    }
    return getCtor(arg)
}

function getIdsFromRemoveArgs(args: unknown[]): { typeKey?: string; classKey?: Function; ids: string[] } {
    if (args.length === 0) return { ids: [] }

    const first = args[0]
    if (typeof first === 'object' && first !== null) {
        const typeKey = getEntityTypeKeyFromArg(first)
        const classKey = getCtorFromArg(first)
        if (Array.isArray(first)) {
            const ids = (first as unknown as EntityLikeWithId[]).map((e) => e.id)
            return { typeKey, classKey, ids }
        }
        const id = (first as unknown as EntityLikeWithId).id
        return { typeKey, classKey, ids: id ? [id] : [] }
    }

    if (typeof first === 'function') {
        const classKey = first as Function
        const typeKey = classKey.name
        const second = args[1]
        if (Array.isArray(second)) return { typeKey, classKey, ids: second as string[] }
        if (typeof second === 'string') return { typeKey, classKey, ids: [second] }
        return { typeKey, classKey, ids: [] }
    }

    return { ids: [] }
}

function dedupeEntitiesById(entities: unknown[]): unknown[] {
    const idToEntity = new Map<string, unknown>()
    const nonIdEntities: unknown[] = []
    for (const ent of entities) {
        const id = (ent as Partial<EntityLikeWithId>).id
        if (typeof id === 'string' && id.length > 0) {
            idToEntity.set(id, ent)
        } else {
            nonIdEntities.push(ent)
        }
    }
    return nonIdEntities.concat(Array.from(idToEntity.values()))
}

export function createBufferedStore(
    original: Store,
    optionsOrChunkSize?: number | BufferedStoreOptions
): BufferedStoreController {
    const log = new Logger('sqd:buffered-store')
    const chunkSize =
        typeof optionsOrChunkSize === 'number' ? optionsOrChunkSize : (optionsOrChunkSize?.chunkSize ?? 1000)
    const cacheConfig =
        typeof optionsOrChunkSize === 'object' && optionsOrChunkSize?.cacheClasses
            ? optionsOrChunkSize.cacheClasses
            : []

    const ops: BufferedOp[] = []

    // Pending upserts and deletions visible to reads before flush
    const pendingUpsertsByName: Map<string, Map<string, unknown>> = new Map()
    const pendingDeletesByName: Map<string, Set<string>> = new Map()
    const pendingUpsertsByClass: Map<Function, Map<string, unknown>> = new Map()
    const pendingDeletesByClass: Map<Function, Set<string>> = new Map()

    // Hot cache (LRU-ish) for selected classes across blocks
    const hotCacheByClass: Map<Function, { map: Map<string, unknown>; max: number }> = new Map()
    for (const { cls, maxEntries } of cacheConfig) {
        hotCacheByClass.set(cls, { map: new Map(), max: Math.max(1, maxEntries ?? 10000) })
    }

    function cacheGet(cls: Function, id: string): unknown | undefined {
        const bucket = hotCacheByClass.get(cls)
        if (!bucket) return undefined
        const value = bucket.map.get(id)
        if (value !== undefined) {
            // refresh recency: move to end
            bucket.map.delete(id)
            bucket.map.set(id, value)
        }
        return value
    }

    function cacheSet(cls: Function, id: string, value: unknown) {
        const bucket = hotCacheByClass.get(cls)
        if (!bucket) return
        if (bucket.map.has(id)) bucket.map.delete(id)
        bucket.map.set(id, value)
        // evict oldest if over capacity
        while (bucket.map.size > bucket.max) {
            const oldestKey = bucket.map.keys().next().value as string | undefined
            if (oldestKey === undefined) break
            bucket.map.delete(oldestKey)
        }
    }

    function cacheDelete(cls: Function, id: string) {
        const bucket = hotCacheByClass.get(cls)
        if (!bucket) return
        bucket.map.delete(id)
    }

    function upsertIntoPending(typeKey: string | undefined, classKey: Function | undefined, value: unknown) {
        if (!value) return
        const entity = value as EntityLikeWithId
        if (!entity.id) return
        if (typeKey) {
            let map = pendingUpsertsByName.get(typeKey)
            if (!map) {
                map = new Map()
                pendingUpsertsByName.set(typeKey, map)
            }
            map.set(entity.id, value)
            pendingDeletesByName.get(typeKey)?.delete(entity.id)
        }
        if (classKey) {
            let map = pendingUpsertsByClass.get(classKey)
            if (!map) {
                map = new Map()
                pendingUpsertsByClass.set(classKey, map)
            }
            map.set(entity.id, value)
            pendingDeletesByClass.get(classKey)?.delete(entity.id)
        }
    }

    function removeFromPending(typeKey: string | undefined, classKey: Function | undefined, ids: string[]) {
        if (typeKey && ids.length) {
            const up = pendingUpsertsByName.get(typeKey)
            up && ids.forEach((id) => up.delete(id))
            let del = pendingDeletesByName.get(typeKey)
            if (!del) {
                del = new Set()
                pendingDeletesByName.set(typeKey, del)
            }
            ids.forEach((id) => del!.add(id))
        }
        if (classKey && ids.length) {
            const up = pendingUpsertsByClass.get(classKey)
            up && ids.forEach((id) => up.delete(id))
            let del = pendingDeletesByClass.get(classKey)
            if (!del) {
                del = new Set()
                pendingDeletesByClass.set(classKey, del)
            }
            ids.forEach((id) => del!.add(id))
            // also drop from hot cache
            const bucket = hotCacheByClass.get(classKey)
            if (bucket) ids.forEach((id) => bucket.map.delete(id))
        }
    }

    function needsRelationHydration(entity: any, relationsSpec: any): boolean {
        if (!relationsSpec || typeof relationsSpec !== 'object') return false
        for (const key of Object.keys(relationsSpec)) {
            const spec = relationsSpec[key]
            const cur = entity?.[key]
            if (spec === true) {
                if (cur == null) return true
                continue
            }
            if (typeof spec === 'object') {
                if (Array.isArray(cur)) {
                    if (cur.length === 0) return true
                    // check first element recursively
                    if (needsRelationHydration(cur[0], spec)) return true
                } else {
                    if (cur == null) return true
                    if (needsRelationHydration(cur, spec)) return true
                }
            }
        }
        return false
    }

    async function hydrateEntityFromDb(
        method: 'findOne' | 'findOneBy' | 'findOneOrFail' | 'findOneByOrFail',
        entityClass: Function,
        whereOrOptions: any,
        id: string,
        current: any
    ): Promise<any> {
        try {
            // @ts-ignore
            const fresh = await (original as any)[method].call(original, entityClass, whereOrOptions)
            if (fresh) {
                // update caches and pending with hydrated entity
                upsertIntoPending(entityClass.name, entityClass, fresh)
                cacheSet(entityClass, id, fresh)
                return fresh
            }
        } catch (e) {
            // fall through to current
        }
        return current
    }

    function bufferedFindOneLike(
        method: 'findOne' | 'findOneBy' | 'findOneOrFail' | 'findOneByOrFail',
        entityClass: Function,
        whereOrOptions: any
    ) {
        const where = method.includes('By') ? whereOrOptions : whereOrOptions?.where
        const id: string | undefined = where?.id
        const relationsRequested = !method.includes('By') && Boolean(whereOrOptions?.relations)
        const performDbRead = async () => {
            log.debug(
                `DB ${String(method)} ${entityClass?.name} where=${safeStringify(whereOrOptions)} relations=${relationsRequested}`
            )
            // @ts-ignore
            const res = await (original as any)[method].call(original, entityClass, whereOrOptions)
            if (id && res) cacheSet(entityClass, id, res)
            return res
        }
        // Do NOT flush here to avoid referential FK issues caused by partial flushes
        if (where && typeof where === 'object') {
            // Prefer pending upserts if they satisfy the where conditions (even when relations are requested)
            const pendingMap = pendingUpsertsByClass.get(entityClass) || pendingUpsertsByName.get(entityClass.name)
            if (pendingMap && pendingMap.size > 0) {
                const entries = Array.from(pendingMap.values())
                // id match already handled below; here handle non-id simple equality (e.g., offerId)
                const keys = Object.keys(where).filter((k) => k !== 'id')
                if (keys.length > 0) {
                    for (const ent of entries) {
                        let ok = true
                        for (const k of keys) {
                            // @ts-ignore
                            if ((ent as any)[k] !== (where as any)[k]) {
                                ok = false
                                break
                            }
                        }
                        if (ok) {
                            log.debug(
                                `BUFFER ${String(method)} ${entityClass?.name} matched by fields=${safeStringify(keys)} where=${safeStringify(where)}`
                            )
                            if (relationsRequested && id) {
                                if (needsRelationHydration(ent, whereOrOptions?.relations)) {
                                    return hydrateEntityFromDb(method, entityClass, whereOrOptions, id, ent)
                                }
                            }
                            return Promise.resolve(ent)
                        }
                    }
                }
            }
        }
        if (id) {
            if (
                pendingDeletesByClass.get(entityClass)?.has(id) ||
                pendingDeletesByName.get(entityClass.name)?.has(id)
            ) {
                log.debug(`BUFFER tombstone hit for ${entityClass?.name} id=${id}`)
                if (method.endsWith('OrFail')) throw new Error('EntityNotFoundError: buffered delete')
                return Promise.resolve(null)
            }
            // Always prefer pending upserts for id lookups to see in-block writes
            const pendingByClass = pendingUpsertsByClass.get(entityClass)?.get(id)
            if (pendingByClass) {
                log.debug(`BUFFER ${String(method)} ${entityClass?.name} id=${id}`)
                if (relationsRequested) {
                    if (needsRelationHydration(pendingByClass, whereOrOptions?.relations)) {
                        return hydrateEntityFromDb(method, entityClass, whereOrOptions, id, pendingByClass)
                    }
                }
                return Promise.resolve(pendingByClass)
            }
            const pendingByName = pendingUpsertsByName.get(entityClass.name)?.get(id)
            if (pendingByName) {
                log.debug(`BUFFER ${String(method)} ${entityClass?.name} id=${id}`)
                if (relationsRequested) {
                    if (needsRelationHydration(pendingByName, whereOrOptions?.relations)) {
                        return hydrateEntityFromDb(method, entityClass, whereOrOptions, id, pendingByName)
                    }
                }
                return Promise.resolve(pendingByName)
            }
            // When relations are requested, otherwise fetch from DB
            if (!relationsRequested) {
                const cached = cacheGet(entityClass, id)
                if (cached) {
                    log.debug(`CACHE ${String(method)} ${entityClass?.name} id=${id}`)
                    return Promise.resolve(cached)
                }
            }
        }
        return performDbRead()
    }

    const proxy = new Proxy(original as Store, {
        get(target, prop, receiver) {
            // Exposed helpers for buffered access
            if (prop === 'resolveFromBuffer') {
                return (entityClass: Function, id: string) => {
                    const fromClass = pendingUpsertsByClass.get(entityClass)?.get(id)
                    if (fromClass) return fromClass
                    const fromName = pendingUpsertsByName.get(entityClass.name)?.get(id)
                    if (fromName) return fromName
                    const cached = cacheGet(entityClass, id)
                    return cached ?? undefined
                }
            }

            // Buffer writes
            if (prop === 'save' || prop === 'insert') {
                return (...args: unknown[]) => {
                    const method = prop as 'save' | 'insert'
                    const entityTypeKey = getEntityTypeKeyFromArg(args[0])
                    const classKey = getCtorFromArg(args[0])
                    const arg0 = args[0]
                    if (Array.isArray(arg0)) {
                        for (const e of arg0) upsertIntoPending(entityTypeKey, classKey, e)
                    } else {
                        upsertIntoPending(entityTypeKey, classKey, arg0)
                    }
                    // update hot cache too
                    if (classKey) {
                        if (Array.isArray(arg0)) {
                            for (const e of arg0 as EntityLikeWithId[]) cacheSet(classKey, e.id, e)
                        } else if ((arg0 as EntityLikeWithId)?.id) {
                            cacheSet(classKey, (arg0 as EntityLikeWithId).id, arg0)
                        }
                    }

                    ops.push({ method, args, entityTypeKey })
                    log.debug(
                        `BUFFER enqueue ${method} ${entityTypeKey ?? 'unknown'} count=${Array.isArray(arg0) ? arg0.length : 1}`
                    )
                    return Promise.resolve()
                }
            }

            if (prop === 'remove') {
                return (...args: unknown[]) => {
                    const { typeKey, classKey, ids } = getIdsFromRemoveArgs(args)
                    removeFromPending(typeKey, classKey, ids)
                    if (classKey && ids.length) ids.forEach((id) => cacheDelete(classKey, id))
                    ops.push({ method: 'remove', args, entityTypeKey: typeKey })
                    log.debug(
                        `BUFFER enqueue remove ${typeKey ?? classKey?.name ?? 'unknown'} ids=${ids.length > 3 ? ids.slice(0, 3).join(',') + '...' : ids.join(',')}`
                    )
                    return Promise.resolve()
                }
            }

            // Read methods with buffer awareness
            if (prop === 'findOne' || prop === 'findOneBy' || prop === 'findOneOrFail' || prop === 'findOneByOrFail') {
                return (entityClass: Function, whereOrOptions: any) =>
                    bufferedFindOneLike(prop as any, entityClass, whereOrOptions)
            }

            const value = Reflect.get(target, prop, receiver)
            if (typeof value === 'function') return value.bind(target)
            return value
        },
    }) as Store

    function reset() {
        ops.length = 0
        pendingUpsertsByName.clear()
        pendingDeletesByName.clear()
        pendingUpsertsByClass.clear()
        pendingDeletesByClass.clear()
        // do NOT clear hot cache here; it should persist across blocks
        log.debug('BUFFER reset')
    }

    async function doFlush(): Promise<void> {
        // Pre-flush Accounts to satisfy FK dependencies (e.g., Collection.owner_id)
        // Collect and remove all Account save/insert ops, flush them first
        const preflushEntitiesByType = (typeName: string): unknown[] => {
            const collected: unknown[] = []
            const remaining: BufferedOp[] = []
            for (const op of ops) {
                if ((op.method === 'save' || op.method === 'insert') && op.entityTypeKey === typeName) {
                    const arg0 = op.args[0]
                    if (Array.isArray(arg0)) collected.push(...arg0)
                    else collected.push(arg0)
                    continue
                }
                remaining.push(op)
            }
            // replace ops with remaining
            ops.length = 0
            ops.push(...remaining)
            return collected
        }

        const accountEntities = preflushEntitiesByType('Account')
        if (accountEntities.length > 0) {
            const uniqueAccounts = dedupeEntitiesById(accountEntities)
            log.debug(`FLUSH save Account x${uniqueAccounts.length}`)
            for (let start = 0; start < uniqueAccounts.length; start += chunkSize) {
                const chunk = uniqueAccounts.slice(start, start + chunkSize)
                // @ts-ignore dynamic method
                await (original as any)['save'](chunk)
            }
        }

        // Pre-flush Collections before Tokens to satisfy Token.collection FK
        const collectionEntities = preflushEntitiesByType('Collection')
        if (collectionEntities.length > 0) {
            const uniqueCollections = dedupeEntitiesById(collectionEntities)
            log.debug(`FLUSH save Collection x${uniqueCollections.length}`)
            for (let start = 0; start < uniqueCollections.length; start += chunkSize) {
                const chunk = uniqueCollections.slice(start, start + chunkSize)
                // @ts-ignore dynamic method
                await (original as any)['save'](chunk)
            }
        }

        // Pre-flush Tokens without listing relations; defer setting best/recent listings until after Listings are saved
        const tokenEntities = preflushEntitiesByType('Token') as Token[]
        const deferredTokenListingUpdates: Array<{
            id: string
            bestId?: string
            recentId?: string
            lastSaleId?: string
        }> = []
        if (tokenEntities.length > 0) {
            const uniqueTokens = dedupeEntitiesById(tokenEntities) as Token[]
            for (const t of uniqueTokens) {
                const bestId = (t as any)?.bestListing?.id as string | undefined
                const recentId = (t as any)?.recentListing?.id as string | undefined
                const lastSaleId = (t as any)?.lastSale?.id as string | undefined
                if (bestId || recentId) {
                    deferredTokenListingUpdates.push({ id: t.id, bestId, recentId, lastSaleId })
                    ;(t as any).bestListing = undefined
                    ;(t as any).recentListing = undefined
                    ;(t as any).lastSale = undefined
                }
                // Also handle case when only lastSale is set
                if (!bestId && !recentId && lastSaleId) {
                    deferredTokenListingUpdates.push({ id: t.id, lastSaleId })
                    ;(t as any).lastSale = undefined
                }
            }
            log.debug(`FLUSH save Token (phase1) x${uniqueTokens.length}`)
            for (let start = 0; start < uniqueTokens.length; start += chunkSize) {
                const chunk = uniqueTokens.slice(start, start + chunkSize)
                // @ts-ignore dynamic method
                await (original as any)['save'](chunk)
            }
            // Re-enqueue token listing updates to be applied after main ops
        }

        let i = 0
        const deferredRemoves: BufferedOp[] = []
        while (i < ops.length) {
            const op = ops[i]
            if ((op.method === 'save' || op.method === 'insert') && op.entityTypeKey) {
                const runEntities: unknown[] = []
                let j = i
                while (
                    j < ops.length &&
                    (ops[j].method === 'save' || ops[j].method === 'insert') &&
                    ops[j].entityTypeKey &&
                    ops[j].entityTypeKey === op.entityTypeKey
                ) {
                    const args0 = ops[j].args[0]
                    if (Array.isArray(args0)) runEntities.push(...args0)
                    else runEntities.push(args0)
                    j++
                }

                // Deduplicate by id to avoid ON CONFLICT DO UPDATE affecting same row twice
                const uniqueEntities = dedupeEntitiesById(runEntities)
                const targetMethod = 'save' // force upsert to be idempotent even if original op was insert
                log.debug(`FLUSH ${targetMethod} ${op.entityTypeKey} x${uniqueEntities.length}`)

                for (let start = 0; start < uniqueEntities.length; start += chunkSize) {
                    const chunk = uniqueEntities.slice(start, start + chunkSize)
                    // @ts-ignore dynamic method
                    await (original as any)[targetMethod](chunk)
                }

                i = j
                continue
            }

            if (op.method === 'remove') {
                // Defer removes until after all saves/inserts to maintain FK safety
                deferredRemoves.push(op)
                i++
                continue
            }

            log.debug(`FLUSH ${op.method}`)
            // @ts-ignore dynamic method
            await (original as any)[op.method](...op.args)
            i++
        }

        // Now process deferred removes in original order
        for (const rm of deferredRemoves) {
            // FK safety: if removing TokenAccount(s), first null out PoolMember.tokenAccount for those ids
            if (rm.entityTypeKey === 'TokenAccount') {
                const { ids } = getIdsFromRemoveArgs(rm.args)
                if (ids.length > 0) {
                    const members = await (original as any).find(PoolMember, {
                        where: { tokenAccount: { id: In(ids) } },
                    })
                    if (members.length > 0) {
                        for (const m of members) m.tokenAccount = null
                        await (original as any).save(members)
                    }
                }
            }

            log.debug(`FLUSH remove`)
            // @ts-ignore dynamic method
            await (original as any)[rm.method](...rm.args)
        }

        // After flushing main ops and removes, apply deferred token listing relations now that Listings are saved
        if (typeof (original as any)['save'] === 'function' && deferredTokenListingUpdates.length > 0) {
            const updates: Token[] = []
            for (const upd of deferredTokenListingUpdates) {
                // Load existing token to preserve required fields
                const existing = await (original as any).findOneBy(Token, { id: upd.id })
                if (!existing) continue
                if (upd.bestId) (existing as any).bestListing = new Listing({ id: upd.bestId })
                if (upd.recentId) (existing as any).recentListing = new Listing({ id: upd.recentId })
                if (upd.lastSaleId) (existing as any).lastSale = new ListingSale({ id: upd.lastSaleId })
                updates.push(existing)
            }
            if (updates.length > 0) {
                log.debug(`FLUSH save Token (phase2 listings) x${updates.length}`)
                for (let start = 0; start < updates.length; start += chunkSize) {
                    const chunk = updates.slice(start, start + chunkSize)
                    // @ts-ignore dynamic method
                    await (original as any)['save'](chunk)
                }
            }
        }

        // After flushing, clear pending ops and per-block buffers
        ops.length = 0
        pendingUpsertsByName.clear()
        pendingDeletesByName.clear()
        pendingUpsertsByClass.clear()
        pendingDeletesByClass.clear()
        log.debug('BUFFER flushed')
    }

    async function flush(): Promise<void> {
        await doFlush()
    }

    return { store: proxy, reset, flush }
}
