import { Store } from '@subsquid/typeorm-store'

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

    function bufferedFindOneLike(
        method: 'findOne' | 'findOneBy' | 'findOneOrFail' | 'findOneByOrFail',
        entityClass: Function,
        whereOrOptions: any
    ) {
        const where = method.includes('By') ? whereOrOptions : whereOrOptions?.where
        const id: string | undefined = where?.id
        const relationsRequested = !method.includes('By') && Boolean(whereOrOptions?.relations)
        const performDbRead = async () => {
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
                        if (ok) return Promise.resolve(ent)
                    }
                }
            }
        }
        if (id) {
            if (
                pendingDeletesByClass.get(entityClass)?.has(id) ||
                pendingDeletesByName.get(entityClass.name)?.has(id)
            ) {
                if (method.endsWith('OrFail')) throw new Error('EntityNotFoundError: buffered delete')
                return Promise.resolve(null)
            }
            // Always prefer pending upserts for id lookups to see in-block writes
            const pendingByClass = pendingUpsertsByClass.get(entityClass)?.get(id)
            if (pendingByClass) return Promise.resolve(pendingByClass)
            const pendingByName = pendingUpsertsByName.get(entityClass.name)?.get(id)
            if (pendingByName) return Promise.resolve(pendingByName)
            // When relations are requested, otherwise fetch from DB
            if (!relationsRequested) {
                const cached = cacheGet(entityClass, id)
                if (cached) return Promise.resolve(cached)
            }
        }
        return performDbRead()
    }

    async function doFlush(): Promise<void> {
        let i = 0
        while (i < ops.length) {
            const op = ops[i]
            if ((op.method === 'save' || op.method === 'insert') && op.entityTypeKey) {
                const runEntities: unknown[] = []
                let j = i
                while (
                    j < ops.length &&
                    ops[j].method === op.method &&
                    ops[j].entityTypeKey &&
                    ops[j].entityTypeKey === op.entityTypeKey
                ) {
                    const args0 = ops[j].args[0]
                    if (Array.isArray(args0)) runEntities.push(...args0)
                    else runEntities.push(args0)
                    j++
                }

                const uniqueEntities = dedupeEntitiesById(runEntities)

                for (let start = 0; start < uniqueEntities.length; start += chunkSize) {
                    const chunk = uniqueEntities.slice(start, start + chunkSize)
                    // @ts-ignore dynamic method
                    await (original as any)[op.method](chunk)
                }

                i = j
                continue
            }

            // @ts-ignore dynamic method
            await (original as any)[op.method](...op.args)
            i++
        }

        // After flushing, clear pending ops and per-block buffers
        ops.length = 0
        pendingUpsertsByName.clear()
        pendingDeletesByName.clear()
        pendingUpsertsByClass.clear()
        pendingDeletesByClass.clear()
    }

    const proxy = new Proxy(original as Store, {
        get(target, prop, receiver) {
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
                    return Promise.resolve()
                }
            }

            if (prop === 'remove') {
                return (...args: unknown[]) => {
                    const { typeKey, classKey, ids } = getIdsFromRemoveArgs(args)
                    removeFromPending(typeKey, classKey, ids)
                    if (classKey && ids.length) ids.forEach((id) => cacheDelete(classKey, id))
                    ops.push({ method: 'remove', args, entityTypeKey: typeKey })
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
    }

    async function flush(): Promise<void> {
        await doFlush()
    }

    return { store: proxy, reset, flush }
}
