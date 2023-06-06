/* eslint-disable no-restricted-syntax */
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { u8aToHex, u8aToString } from '@polkadot/util'
import { encodeAddress } from '@polkadot/util-crypto'
import { In } from 'typeorm'
import ora from 'ora'
import { CommonContext } from './mappings/types/contexts'
import * as Storage from './types/generated/storage'
import config from './config'
import {
    Collection,
    MintPolicy,
    TransferPolicy,
    CollectionStats,
    MarketPolicy,
    Royalty,
    Account,
    Balance,
    CollectionAccount,
    Token,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
    TokenBehaviorHasRoyalty,
    TokenAccount,
    TokenNamedReserve,
    TokenLock,
    TokenApproval,
    Attribute,
    Metadata,
} from './model'
import * as efinityV2 from './types/generated/efinityV2'
import * as efinityV3000 from './types/generated/efinityV3000'
import { getCapType, getFreezeState } from './mappings/multiTokens/events/token_created'
import { isNonFungible } from './mappings/multiTokens/utils/helpers'
import { safeString } from './common/tools'
import { getMetadata } from './mappings/util/metadata'

const GENSIS_HASH = config.genesisHash
const BATCH_SIZE = 1000

const spinner = ora()

class Errors {
    public static accountNotFound() {
        return new Error('account not found.')
    }
}

async function getAccountsMap(
    ctx: CommonContext,
    accounts: (Uint8Array | null | undefined)[] | (Uint8Array | null | undefined)[][]
) {
    const uniqueAccounts = new Set<string>(
        accounts
            .flat()
            .filter((a) => a !== null && a !== undefined)
            .map((a) => u8aToHex(a))
    )
    const map = new Map<string, Account>()
    const existingAccounts = await ctx.store.findBy(Account, { id: In([...uniqueAccounts]) })
    existingAccounts.forEach((a) => map.set(a.id, a))
    const accountsPromise = Array.from(uniqueAccounts).map(async (a) => {
        const mapHasaccount = map.get(a)
        if (mapHasaccount) {
            return mapHasaccount
        }
        const account = new Account({
            id: a,
            address: encodeAddress(a, config.prefix as number),
            balance: new Balance({
                transferable: 0n,
                free: 0n,
                reserved: 0n,
                miscFrozen: 0n,
                feeFrozen: 0n,
            }),
            nonce: 0,
            tokenValues: 0n,
        })

        await ctx.store.insert(Account, account as any)
        return account
    })
    ;(await Promise.all(accountsPromise)).forEach((a) => map.set(a.id, a))

    return map
}

function getCollectionStorage(ctx: CommonContext, block: SubstrateBlock) {
    const collectionStorage = new Storage.MultiTokensCollectionsStorage(ctx, block)

    if (collectionStorage.isEfinityV2) {
        return collectionStorage.asEfinityV2
    }

    if (collectionStorage.isEfinityV3000) {
        return collectionStorage.asEfinityV3000
    }

    throw new Error('Unsupported version')
}

function getCollectionAccountsStorage(ctx: CommonContext, block: SubstrateBlock) {
    const balanceAccountStorage = new Storage.MultiTokensCollectionAccountsStorage(ctx, block)

    if (balanceAccountStorage.isEfinityV2) {
        return balanceAccountStorage.asEfinityV2
    }

    throw new Error('Unsupported version')
}

function getTokensStorage(ctx: CommonContext, block: SubstrateBlock) {
    const tokensStorage = new Storage.MultiTokensTokensStorage(ctx, block)

    if (tokensStorage.isEfinityV3014) {
        return tokensStorage.asEfinityV3014
    }

    throw new Error('Unsupported version')
}

function getTokenAccountsStorage(ctx: CommonContext, block: SubstrateBlock) {
    const tokenAccountsStorage = new Storage.MultiTokensTokenAccountsStorage(ctx, block)

    if (tokenAccountsStorage.isEfinityV3014) {
        return tokenAccountsStorage.asEfinityV3014
    }

    throw new Error('Unsupported version')
}

function getAttributeStorage(ctx: CommonContext, block: SubstrateBlock) {
    const attributeStorage = new Storage.MultiTokensAttributesStorage(ctx, block)

    if (attributeStorage.asEfinityV2) {
        return attributeStorage.asEfinityV2
    }

    throw new Error('Unsupported version')
}

async function syncCollection(ctx: CommonContext, block: SubstrateBlock) {
    for await (const collectionPairs of getCollectionStorage(ctx, block).getPairsPaged(BATCH_SIZE)) {
        const accountMap = await getAccountsMap(
            ctx,
            collectionPairs.map(([, data]: [bigint, efinityV2.Collection | efinityV3000.Collection]) => [
                data.owner,
                'market' in data.policy ? data.policy.market?.royalty?.beneficiary : null,
            ])
        )
        const collectionsPromise = collectionPairs.map(
            async ([id, data]: [bigint, efinityV2.Collection | efinityV3000.Collection]) => {
                const owner = accountMap.get(u8aToHex(data.owner))
                let market = null
                if ('market' in data.policy && data.policy.market.royalty) {
                    const account = accountMap.get(u8aToHex(data.policy.market.royalty.beneficiary))

                    if (!account) throw Errors.accountNotFound()

                    market = new MarketPolicy({
                        royalty: new Royalty({
                            beneficiary: account.id,
                            percentage: data.policy.market.royalty.percentage,
                        }),
                    })
                }

                return new Collection({
                    id: id.toString(),
                    owner,
                    mintPolicy: new MintPolicy({
                        maxTokenCount: data.tokenCount,
                        maxTokenSupply: data.policy.mint.maxTokenSupply,
                        forceSingleMint: data.policy.mint.forceSingleMint,
                    }),
                    marketPolicy: market,
                    transferPolicy: new TransferPolicy({
                        isFrozen: data.policy.transfer.isFrozen,
                    }),
                    stats: new CollectionStats({
                        lastSale: null,
                        floorPrice: null,
                        highestSale: null,
                        tokenCount: Number(data.tokenCount),
                        salesCount: 0,
                        supply: 0n,
                        marketCap: 0n,
                        volume: 0n,
                    }),
                    burnPolicy: null,
                    attributePolicy: null,
                    attributeCount: data.attributeCount,
                    totalDeposit: data.totalDeposit,
                    createdAt: new Date(block.timestamp),
                    collectionId: id,
                })
            }
        )

        await Promise.all(collectionsPromise).then((collections) => ctx.store.insert(Collection, collections as any))
    }
}

async function syncCollectionAccounts(ctx: CommonContext, block: SubstrateBlock) {
    for await (const pairs of getCollectionAccountsStorage(ctx, block).getPairsPaged(BATCH_SIZE)) {
        const accountMap = await getAccountsMap(
            ctx,
            pairs.map(([k]) => k[1])
        )

        const collectionAccounts = pairs.map(([k, data]) => {
            const collectionId = k[0].toString()
            const accountId = u8aToHex(k[1])
            const account = accountMap.get(accountId)

            if (!account) throw Errors.accountNotFound()

            return new CollectionAccount({
                id: `${collectionId}-${accountId}`,
                isFrozen: data.isFrozen,
                approvals: null,
                accountCount: data.accountCount,
                account,
                collection: new Collection({ id: collectionId }),
                createdAt: new Date(block.timestamp),
                updatedAt: new Date(block.timestamp),
            })
        })

        await ctx.store.insert(CollectionAccount, collectionAccounts as any)
    }
}

async function syncTokens(ctx: CommonContext, block: SubstrateBlock) {
    for await (const pairs of getTokensStorage(ctx, block).getPairsPaged(BATCH_SIZE)) {
        await getAccountsMap(
            ctx,
            pairs.map(([, d]: [any, any]) => d?.marketBehavior?.value?.beneficiary)
        )
        const tokensPromise = pairs.map(async ([k, data]) => {
            const collectionId = k[0]
            const tokenId = k[1]
            const collection = await ctx.store.findOneOrFail(Collection, { where: { id: collectionId.toString() } })

            let behavior = null

            if ('marketBehavior' in data && data.marketBehavior) {
                if (data.marketBehavior.__kind === TokenBehaviorType.IsCurrency) {
                    behavior = new TokenBehaviorIsCurrency({
                        type: TokenBehaviorType.IsCurrency,
                    })
                } else {
                    behavior = new TokenBehaviorHasRoyalty({
                        type: TokenBehaviorType.HasRoyalty,
                        royalty: new Royalty({
                            beneficiary: u8aToHex(data.marketBehavior.value.beneficiary),
                            percentage: data.marketBehavior.value.percentage,
                        }),
                    })
                }
            }

            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (data.sufficiency.__kind === 'Insufficient') {
                unitPrice = data.sufficiency.unitPrice
                minimumBalance = BigInt(Math.max(1, Number(10n ** 16n / unitPrice)))
            }

            const token = new Token({
                id: `${collectionId}-${tokenId}`,
                tokenId,
                collection,
                attributeCount: data.attributeCount,
                supply: data.supply,
                isFrozen: false,
                cap: data.cap ? getCapType(data.cap) : null,
                behavior,
                freezeState: data.freezeState ? getFreezeState(data.freezeState) : undefined,
                listingForbidden: 'listingForbidden' in data ? data.listingForbidden : false,
                minimumBalance,
                unitPrice,
                createdAt: new Date(block.timestamp),
                mintDeposit: data.mintDeposit,
            })

            token.nonFungible = isNonFungible(token)

            return token
        })

        await Promise.all(tokensPromise).then((tokens) => ctx.store.insert(Token, tokens as any))
    }
}

async function syncTokenAccounts(ctx: CommonContext, block: SubstrateBlock) {
    for await (const pairs of getTokenAccountsStorage(ctx, block).getPairsPaged(BATCH_SIZE)) {
        const accountMap = await getAccountsMap(
            ctx,
            pairs.map(([k]) => k[2])
        )

        const tokenAccounts = pairs.map(([k, data]) => {
            const collectionId = k[0]
            const tokenId = k[1]
            const accountId = u8aToHex(k[2])
            const account = accountMap.get(accountId)

            if (!account) throw Errors.accountNotFound()

            let namedReserves = null
            if (data.namedReserves && data.namedReserves.length > 0) {
                namedReserves = data.namedReserves.map((namedReserve) => {
                    return new TokenNamedReserve({
                        pallet: u8aToString(namedReserve[0]),
                        amount: namedReserve[1],
                    })
                })
            }

            let locks = null
            if (data.locks && data.locks.length > 0) {
                locks = data.locks.map((lock) => {
                    return new TokenLock({
                        pallet: u8aToString(lock[0]),
                        amount: lock[1],
                    })
                })
            }

            let approvals = null
            if (data.approvals && data.approvals.length > 0) {
                approvals = data.approvals.map((approval) => {
                    return new TokenApproval({
                        account: u8aToHex(approval[0]),
                        amount: approval[1].amount,
                        expiration: approval[1].expiration,
                    })
                })
            }

            return new TokenAccount({
                id: `${accountId}-${collectionId}-${tokenId}`,
                balance: data.balance,
                reservedBalance: data.reservedBalance,
                lockedBalance: data.lockedBalance,
                namedReserves,
                locks,
                approvals,
                isFrozen: data.isFrozen,
                account,
                collection: new Collection({ id: collectionId.toString() }),
                token: new Token({ id: `${collectionId}-${tokenId}` }),
                createdAt: new Date(block.timestamp),
                updatedAt: new Date(block.timestamp),
            })
        })

        await ctx.store.insert(TokenAccount, tokenAccounts as any)
    }
}

async function syncAttributes(ctx: CommonContext, block: SubstrateBlock) {
    for await (const pairs of getAttributeStorage(ctx, block).getPairsPaged(BATCH_SIZE)) {
        const attributePromise = pairs.map(async ([k, data]) => {
            const collectionId = k[0]
            const tokenId = k[1]
            const key = safeString(Buffer.from(k[2]).toString())
            const value = safeString(Buffer.from(data.value).toString())
            const id = tokenId ? `${collectionId}-${tokenId}` : collectionId.toString()

            const attributeId = `${id}-${Buffer.from(key).toString('hex')}`

            if (tokenId) {
                const attribute = new Attribute({
                    id: attributeId,
                    token: new Token({ id }),
                    key,
                    value,
                    deposit: data.deposit,
                    collection: new Collection({ id: collectionId.toString() }),
                    createdAt: new Date(block.timestamp),
                })

                if (key === 'uri') {
                    const token = new Token({ id, metadata: new Metadata() })
                    token.metadata = await getMetadata(token.metadata as Metadata, attribute)
                    await ctx.store.save(token)
                }

                return attribute
            }

            const attribute = new Attribute({
                id: attributeId,
                key,
                value,
                deposit: data.deposit,
                collection: new Collection({ id }),
                createdAt: new Date(block.timestamp),
            })

            if (key === 'uri') {
                const collection = new Collection({ id, metadata: new Metadata() })
                collection.metadata = await getMetadata(collection.metadata as Metadata, attribute)
                await ctx.store.save(collection)
            }

            return attribute
        })

        await Promise.all(attributePromise).then((attributes) => ctx.store.insert(Attribute, attributes as any))
    }
}

export async function populateGenesis(ctx: CommonContext, block: SubstrateBlock) {
    console.time('populateGenesis')
    spinner.info('Syncing collections...')
    await syncCollection(ctx, block)
    spinner.succeed(`Successfully imported ${await ctx.store.count(Collection)} collections`)

    spinner.start('Syncing collection accounts...')
    await syncCollectionAccounts(ctx, block)
    spinner.succeed(`Successfully imported ${await ctx.store.count(CollectionAccount)} collection accounts`)

    spinner.start('Syncing tokens...')
    await syncTokens(ctx, block)
    spinner.succeed(`Successfully imported ${await ctx.store.count(Token)} tokens`)

    spinner.start('Syncing token accounts...')
    await syncTokenAccounts(ctx, block)
    spinner.succeed(`Successfully imported ${await ctx.store.count(TokenAccount)} token accounts`)

    spinner.start('Syncing attributes...')
    spinner.text = 'Syncing attributes... (This could take a while)'
    spinner.spinner = {
        interval: 80,
        frames: [
            ' 🧑⚽️       🧑 ',
            '🧑  ⚽️      🧑 ',
            '🧑   ⚽️     🧑 ',
            '🧑    ⚽️    🧑 ',
            '🧑     ⚽️   🧑 ',
            '🧑      ⚽️  🧑 ',
            '🧑       ⚽️🧑  ',
            '🧑      ⚽️  🧑 ',
            '🧑     ⚽️   🧑 ',
            '🧑    ⚽️    🧑 ',
            '🧑   ⚽️     🧑 ',
            '🧑  ⚽️      🧑 ',
        ],
    }
    await syncAttributes(ctx, block)
    spinner.succeed(`Successfully imported ${await ctx.store.count(Attribute)} attributes`)

    console.timeEnd('populateGenesis')

    throw new Error('Not implemented')
}
