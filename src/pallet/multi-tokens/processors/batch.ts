import { In } from 'typeorm'
import { BlockHeader } from '@subsquid/substrate-processor'
import { CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { Account, Balance, Collection, CollectionAccount, Token, TokenAccount } from '~/model'
import { events } from '~/type'
import { isNonFungible } from '~/util/helpers'
import { encodeAddress } from '~/util/tools'

// Keys: token `${collectionId}-${tokenId}`; tokenAccount `${accountId}-${collectionId}-${tokenId}`
const tokenSupplyDelta = new Map<string, bigint>()
const tokenAccountDelta = new Map<string, { balanceDelta: bigint; totalDelta: bigint; updatedAt: number }>()

const collectionAccountsToEnsure = new Map<string, { collectionId: string; accountId: string; timestamp: number }>()
const tokenAccountsToEnsure = new Map<
    string,
    {
        id: string
        accountId: string
        collectionId: string
        tokenId: string
        timestamp: number
    }
>()

export function collect(eventItem: EventItem): void {
    try {
        if (eventItem.name === events.multiTokens.minted.name) {
            const data = mappings.multiTokens.events.minted(eventItem)
            const tokenId = `${data.collectionId}-${data.tokenId}`
            tokenSupplyDelta.set(tokenId, (tokenSupplyDelta.get(tokenId) ?? 0n) + data.amount)

            const taId = `${data.recipient}-${data.collectionId}-${data.tokenId}`
            const prev = tokenAccountDelta.get(taId)
            tokenAccountDelta.set(taId, {
                balanceDelta: (prev?.balanceDelta ?? 0n) + data.amount,
                totalDelta: (prev?.totalDelta ?? 0n) + data.amount,
                updatedAt: eventItem.block?.timestamp ?? Date.now(),
            })
            return
        }
        if (eventItem.name === events.multiTokens.transferred.name) {
            const data = mappings.multiTokens.events.transferred(eventItem)
            const fromId = `${data.from}-${data.collectionId}-${data.tokenId}`
            const toId = `${data.to}-${data.collectionId}-${data.tokenId}`
            const ts = eventItem.block?.timestamp ?? Date.now()
            const prevFrom = tokenAccountDelta.get(fromId)
            tokenAccountDelta.set(fromId, {
                balanceDelta: (prevFrom?.balanceDelta ?? 0n) - data.amount,
                totalDelta: (prevFrom?.totalDelta ?? 0n) - data.amount,
                updatedAt: ts,
            })
            const prevTo = tokenAccountDelta.get(toId)
            tokenAccountDelta.set(toId, {
                balanceDelta: (prevTo?.balanceDelta ?? 0n) + data.amount,
                totalDelta: (prevTo?.totalDelta ?? 0n) + data.amount,
                updatedAt: ts,
            })
            return
        }
        if (eventItem.name === events.multiTokens.burned.name) {
            const data = mappings.multiTokens.events.burned(eventItem)
            const tokenId = `${data.collectionId}-${data.tokenId}`
            tokenSupplyDelta.set(tokenId, (tokenSupplyDelta.get(tokenId) ?? 0n) - data.amount)

            const taId = `${data.accountId}-${data.collectionId}-${data.tokenId}`
            const prev = tokenAccountDelta.get(taId)
            tokenAccountDelta.set(taId, {
                balanceDelta: (prev?.balanceDelta ?? 0n) - data.amount,
                totalDelta: (prev?.totalDelta ?? 0n) - data.amount,
                updatedAt: eventItem.block?.timestamp ?? Date.now(),
            })
            return
        }
        if (eventItem.name === events.multiTokens.tokenAccountCreated.name) {
            const d = mappings.multiTokens.events.tokenAccountCreated(eventItem)
            const id = `${d.accountId}-${d.collectionId}-${d.tokenId}`
            tokenAccountsToEnsure.set(id, {
                id,
                accountId: d.accountId,
                collectionId: d.collectionId.toString(),
                tokenId: d.tokenId.toString(),
                timestamp: eventItem.block?.timestamp ?? Date.now(),
            })
            // ensure collection-account as well
            const caId = `${d.collectionId}-${d.accountId}`
            collectionAccountsToEnsure.set(caId, {
                collectionId: d.collectionId.toString(),
                accountId: d.accountId,
                timestamp: eventItem.block?.timestamp ?? Date.now(),
            })
            return
        }
        if (eventItem.name === events.multiTokens.collectionAccountCreated.name) {
            const d = mappings.multiTokens.events.collectionAccountCreated(eventItem)
            const id = `${d.collectionId}-${d.accountId}`
            collectionAccountsToEnsure.set(id, {
                collectionId: d.collectionId.toString(),
                accountId: d.accountId,
                timestamp: eventItem.block?.timestamp ?? Date.now(),
            })
            return
        }
    } catch (e) {
        // best-effort collector; do not throw
    }
}

export async function processBatch(ctx: CommonContext, lastBlock: BlockHeader): Promise<void> {
    const tokenIds = Array.from(tokenSupplyDelta.keys())
    const tokenAccountDeltaIds = Array.from(tokenAccountDelta.keys())
    const ensureCollectionAccountIds = Array.from(collectionAccountsToEnsure.keys())
    const ensureTokenAccountIds = Array.from(tokenAccountsToEnsure.keys())

    if (
        tokenIds.length === 0 &&
        tokenAccountDeltaIds.length === 0 &&
        ensureCollectionAccountIds.length === 0 &&
        ensureTokenAccountIds.length === 0
    ) {
        return
    }

    // Preload required accounts and collections/tokens for ensures
    const collectionIds = Array.from(new Set(ensureCollectionAccountIds.map((k) => k.split('-')[0])))
    const tokenEntityIds = Array.from(
        new Set(ensureTokenAccountIds.map((k) => `${k.split('-')[1]}-${k.split('-')[2]}`))
    )

    const [collections, tokens] = await Promise.all([
        collectionIds.length ? ctx.store.find(Collection, { where: { id: In(collectionIds) } }) : Promise.resolve([]),
        tokenEntityIds.length ? ctx.store.find(Token, { where: { id: In(tokenEntityIds) } }) : Promise.resolve([]),
    ])

    const collectionsById = new Map<string, Collection>(collections.map((c) => [c.id, c]))
    const tokensById = new Map<string, Token>(tokens.map((t) => [t.id, t]))

    // Resolve from buffer if not found
    for (const id of collectionIds) {
        if (!collectionsById.has(id)) {
            // @ts-ignore
            const buffered = (ctx.store as any).resolveFromBuffer?.(Collection, id) as Collection | undefined
            if (buffered) collectionsById.set(id, buffered)
        }
    }
    for (const id of tokenEntityIds) {
        if (!tokensById.has(id)) {
            // @ts-ignore
            const buffered = (ctx.store as any).resolveFromBuffer?.(Token, id) as Token | undefined
            if (buffered) tokensById.set(id, buffered)
        }
    }

    // Ensure CollectionAccount rows
    if (ensureCollectionAccountIds.length > 0) {
        const existing = await ctx.store.find(CollectionAccount, { where: { id: In(ensureCollectionAccountIds) } })
        const existSet = new Set(existing.map((e) => e.id))
        const toInsert: CollectionAccount[] = []
        for (const id of ensureCollectionAccountIds) {
            if (existSet.has(id)) continue
            const spec = collectionAccountsToEnsure.get(id)!
            // Ensure Account shell exists to satisfy FK
            const existingAccount = await ctx.store.findOne(Account, { where: { id: spec.accountId } })
            const accountEntity =
                existingAccount ??
                new Account({
                    id: spec.accountId,
                    address: encodeAddress(spec.accountId),
                    nonce: 0,
                    verified: false,
                    balance: new Balance({
                        transferable: 0n,
                        free: 0n,
                        reserved: 0n,
                        frozen: 0n,
                        miscFrozen: 0n,
                        feeFrozen: 0n,
                    }),
                })
            if (!existingAccount) {
                await ctx.store.save(accountEntity)
            }
            const collection = collectionsById.get(spec.collectionId) ?? new Collection({ id: spec.collectionId })
            toInsert.push(
                new CollectionAccount({
                    id,
                    isFrozen: false,
                    approvals: null,
                    accountCount: 0,
                    account: accountEntity,
                    collection,
                    createdAt: new Date(spec.timestamp),
                    updatedAt: new Date(spec.timestamp),
                })
            )
        }
        if (toInsert.length > 0) await ctx.store.save(toInsert)
    }

    // Ensure TokenAccount rows
    if (ensureTokenAccountIds.length > 0) {
        const existing = await ctx.store.find(TokenAccount, { where: { id: In(ensureTokenAccountIds) } })
        const existSet = new Set(existing.map((e) => e.id))
        const toInsert: TokenAccount[] = []
        const tokensToInsert: Token[] = []
        const collectionsToInsert: Collection[] = []
        for (const id of ensureTokenAccountIds) {
            if (existSet.has(id)) continue
            const spec = tokenAccountsToEnsure.get(id)!
            const account = new Account({ id: spec.accountId })
            const tokenIdStr = `${spec.collectionId}-${spec.tokenId}`
            let token = tokensById.get(tokenIdStr)
            if (!token) {
                // Ensure collection exists (minimal stub) for the token FK
                const existingCollection = collectionsById.get(spec.collectionId)
                let collectionForToken = existingCollection
                if (!collectionForToken) {
                    collectionForToken = new Collection({
                        id: spec.collectionId,
                        collectionId: BigInt(spec.collectionId),
                        owner: new Account({
                            id: '0x0000000000000000000000000000000000000000000000000000000000000000',
                        }),
                        mintPolicy: null as any,
                        marketPolicy: null as any,
                        transferPolicy: null as any,
                        attributeCount: 0,
                        totalDeposit: 0n,
                        isTransferPending: false,
                        name: null as any,
                        metadata: null as any,
                        createdAt: new Date(spec.timestamp),
                        flags: { featured: false, hiddenForLegalReasons: false } as any,
                        socials: {
                            discord: null,
                            twitter: null,
                            instagram: null,
                            medium: null,
                            tiktok: null,
                            website: null,
                        } as any,
                        hidden: false,
                        stats: null as any,
                    })
                    collectionsById.set(spec.collectionId, collectionForToken)
                    collectionsToInsert.push(collectionForToken)
                }
                // Create minimal Token stub to satisfy FK; will be updated later by token processors
                token = new Token({
                    id: tokenIdStr,
                    tokenId: BigInt(spec.tokenId),
                    supply: 0n,
                    isFrozen: false,
                    freezeState: null as any,
                    cap: null as any,
                    behavior: null as any,
                    listingForbidden: false,
                    nativeMetadata: null as any,
                    unitPrice: null,
                    minimumBalance: 1n,
                    mintDeposit: 0n,
                    attributeCount: 0,
                    accountDepositCount: 0,
                    anyoneCanInfuse: false,
                    infusion: 0n,
                    name: null as any,
                    nonFungible: false,
                    metadata: null as any,
                    updatedAt: null as any,
                    createdAt: new Date(spec.timestamp),
                    collection: new Collection({ id: spec.collectionId }),
                })
                tokensById.set(tokenIdStr, token)
                tokensToInsert.push(token)
            }
            const collection = new Collection({ id: spec.collectionId })
            toInsert.push(
                new TokenAccount({
                    id,
                    balance: 0n,
                    reservedBalance: 0n,
                    totalBalance: 0n,
                    lockedBalance: 0n,
                    namedReserves: null,
                    locks: null,
                    approvals: null,
                    isFrozen: false,
                    account,
                    collection,
                    token,
                    createdAt: new Date(spec.timestamp),
                    updatedAt: new Date(spec.timestamp),
                })
            )
        }
        // Persist created collections then tokens to satisfy FK
        if (collectionsToInsert.length > 0) await ctx.store.save(collectionsToInsert)
        // Persist created tokens first to satisfy FK
        if (tokensToInsert.length > 0) await ctx.store.save(tokensToInsert)
        if (toInsert.length > 0) await ctx.store.save(toInsert)
    }

    // Load tokens for supply deltas (merge with preloaded)
    if (tokenIds.length > 0) {
        const missingTokenIds = tokenIds.filter((id) => !tokensById.has(id))
        if (missingTokenIds.length) {
            const more = await ctx.store.find(Token, { where: { id: In(missingTokenIds) } })
            for (const t of more) tokensById.set(t.id, t)
        }
        for (const id of tokenIds) {
            if (!tokensById.has(id)) {
                // @ts-ignore
                const buffered = (ctx.store as any).resolveFromBuffer?.(Token, id) as Token | undefined
                if (buffered) tokensById.set(id, buffered)
            }
        }
    }

    const tokenAccountIdsForDelta = Array.from(tokenAccountDelta.keys())

    const tokenAccountsById = new Map<string, TokenAccount>()
    if (tokenAccountIdsForDelta.length > 0) {
        const found = await ctx.store.find(TokenAccount, { where: { id: In(tokenAccountIdsForDelta) } })
        for (const ta of found) tokenAccountsById.set(ta.id, ta)
        for (const id of tokenAccountIdsForDelta) {
            if (!tokenAccountsById.has(id)) {
                // @ts-ignore resolveFromBuffer is provided by buffered-store proxy
                const buffered = (ctx.store as any).resolveFromBuffer?.(TokenAccount, id) as TokenAccount | undefined
                if (buffered) tokenAccountsById.set(id, buffered)
            }
        }
    }

    // Apply token supply deltas
    const tokensToSave: Token[] = []
    for (const [id, delta] of tokenSupplyDelta.entries()) {
        const token = tokensById.get(id)
        if (!token) continue
        token.supply = (token.supply ?? 0n) + delta
        // token.nonFungible = isNonFungible(token)
        tokensToSave.push(token)
    }

    if (tokensToSave.length > 0) {
        await ctx.store.save(tokensToSave)
    }

    // Apply token account deltas
    const tokenAccountsToSave: TokenAccount[] = []
    for (const [id, d] of tokenAccountDelta.entries()) {
        const ta = tokenAccountsById.get(id)
        if (!ta) continue
        ta.balance = (ta.balance ?? 0n) + d.balanceDelta
        ta.totalBalance = (ta.totalBalance ?? 0n) + d.totalDelta
        ta.updatedAt = new Date(d.updatedAt ?? Date.now())
        tokenAccountsToSave.push(ta)
    }

    if (tokenAccountsToSave.length > 0) {
        await ctx.store.save(tokenAccountsToSave)
    }

    tokenSupplyDelta.clear()
    tokenAccountDelta.clear()
    collectionAccountsToEnsure.clear()
    tokenAccountsToEnsure.clear()
}
