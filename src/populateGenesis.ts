/* eslint-disable no-restricted-syntax */
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { u8aToHex } from '@polkadot/util'
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
} from './model'
import * as efinityV2 from './types/generated/efinityV2'
import * as efinityV3000 from './types/generated/efinityV3000'

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
    const balanceAccountStorage = new Storage.MultiTokensCollectionsStorage(ctx, block)

    if (balanceAccountStorage.isEfinityV2) {
        return balanceAccountStorage.asEfinityV2
    }

    if (balanceAccountStorage.isEfinityV3000) {
        return balanceAccountStorage.asEfinityV3000
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

    if (tokensStorage.isEfinityV3012) {
        return tokensStorage.asEfinityV3012
    }

    if (tokensStorage.isEfinityV3000) {
        return tokensStorage.asEfinityV3000
    }

    if (tokensStorage.isEfinityV2) {
        return tokensStorage.asEfinityV2
    }

    throw new Error('Unsupported version')
}

function getAttributeStorage(ctx: CommonContext, block: SubstrateBlock) {
    const attributeStorage = new Storage.MultiTokensAttributesStorage(ctx, block)

    if (attributeStorage.isEfinityV2) {
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
        const tokens = pairs.map(([k, data]) => {
            const collectionId = k[0]
            const tokenId = k[1]
            const collection = new Collection({ id: collectionId.toString() })

            

            return new Token({
                id: `${collectionId}-${tokenId}`,
                tokenId,
                collection,
                attributeCount: data.attributeCount,
                isFrozen: data.isFrozen,
                
                

                

            })
        })
    }
}

export async function populateGenesis(ctx: CommonContext, block: SubstrateBlock) {
    spinner.info('Syncing collections...')
    await syncCollection(ctx, block)
    spinner.succeed(`Successfully imported ${await ctx.store.count(Collection)} collections`)

    spinner.start('Syncing collection accounts...')
    await syncCollectionAccounts(ctx, block)
    spinner.succeed(`Successfully imported ${await ctx.store.count(CollectionAccount)} collections`)

    spinner.start('Syncing tokens...')
    await syncTokens(ctx, block)

    throw new Error('Not implemented')
}
