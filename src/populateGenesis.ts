/* eslint-disable no-restricted-syntax */
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { CommonContext } from './mappings/types/contexts'
import * as Storage from './types/generated/storage'
import config from './config'
import { Collection, MintPolicy, TransferPolicy, CollectionStats, MarketPolicy, Royalty } from './model'
import { getOrCreateAccount } from './mappings/util/entities'
import * as efinityV2 from './types/generated/efinityV2'
import * as efinityV3000 from './types/generated/efinityV3000'

const GENSIS_HASH = config.genesisHash
const BATCH_SIZE = 100

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

function getAttributeStorage(ctx: CommonContext, block: SubstrateBlock) {
    const attributeStorage = new Storage.MultiTokensAttributesStorage(ctx, block)

    if (attributeStorage.isEfinityV2) {
        return attributeStorage.asEfinityV2
    }

    throw new Error('Unsupported version')
}

async function syncCollection(ctx: CommonContext, block: SubstrateBlock) {
    const pagedCollections = getCollectionStorage(ctx, block).getPairsPaged(BATCH_SIZE)

    for await (const collectionPairs of pagedCollections) {
        const collectionsPromise = collectionPairs.map(
            async ([id, data]: [bigint, efinityV2.Collection | efinityV3000.Collection]) => {
                const owner = await getOrCreateAccount(ctx, data.owner)
                let market = null
                if ('market' in data.policy && data.policy.market.royalty) {
                    const account = await getOrCreateAccount(ctx, data.policy.market.royalty.beneficiary)

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

export async function populateGenesis(ctx: CommonContext, block: SubstrateBlock) {
    console.info('syncing collections...')
    await syncCollection(ctx, block)
    console.info('collections are synced.')

    throw new Error('Not implemented')
}
