/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import { encodeAddress } from '@polkadot/util-crypto'
import { In } from 'typeorm'
import axios from 'axios'
import { hexToString } from '@polkadot/util'
import { CommonContext, BlockHeader } from './mappings/types/contexts'
import { storage } from './types/generated'
import config from './config'
import {
    Account,
    Attribute,
    Balance,
    Collection,
    CollectionAccount,
    CollectionApproval,
    CollectionFlags,
    CollectionSocials,
    CollectionStats,
    FreezeState,
    MarketPolicy,
    MintPolicy,
    Royalty,
    Token,
    TokenAccount,
    TokenApproval,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
    TokenLock,
    TokenNamedReserve,
    TransferPolicy,
} from './model'
import { safeString } from './common/tools'
import { addAccountsToSet, saveAccounts } from './mappings/balances/processor'
import { UnknownVersionError } from './common/errors'
import { processMetadata } from './jobs/process-metadata'
import { isNonFungible } from './mappings/multiTokens/utils/helpers'
import { getCapType, getFreezeState } from './mappings/multiTokens/events'

const BATCH_SIZE = 1000

class Errors {
    public static accountNotFound() {
        return new Error('account not found.')
    }
}

function isNotNull<T>(input: null | undefined | T): input is T {
    return input != null && input !== undefined
}

async function getAccountMap(ctx: CommonContext, accounts: (string | null | undefined)[] | (string | null | undefined)[][]) {
    const uniqueAccounts = new Set<string>(accounts.flat().filter(isNotNull))
    const map = new Map<string, Account>()
    const existingAccounts = await ctx.store.findBy(Account, { id: In([...uniqueAccounts]) })
    existingAccounts.forEach((a) => map.set(a.id, a))
    const accountsPromise = Array.from(uniqueAccounts).map(async (a) => {
        const mapHasAccount = map.get(a)
        if (mapHasAccount) {
            return mapHasAccount
        }
        const account = new Account({
            id: a,
            address: encodeAddress(a, config.prefix as number),
            balance: new Balance({
                transferable: 0n,
                free: 0n,
                reserved: 0n,
                frozen: 0n,
                miscFrozen: 0n,
                feeFrozen: 0n,
            }),
            verified: false,
            nonce: 0,
        })

        await ctx.store.insert(account)
        return account
    })

    const accountsArr = await Promise.all(accountsPromise)
    accountsArr.forEach((a) => map.set(a.id, a))

    return map
}

async function getBlock(height: number) {
    const query = `query Block($height: Int){
        result: batch( fromBlock:$height, limit:1, includeAllBlocks:true){
          header{
            id
            height
            hash
            specId
            stateRoot
            parentHash
            timestamp
          }
        }
      }`

    const { data } = await axios.post<{ data: { result: { header: BlockHeader }[] } }>(config.dataSource.archive, {
        query,
        variables: {
            height,
        },
    })

    if (data.data.result.length === 0) {
        throw new Error(`Can not start processor because block:${height} is not present in archive db, Please sync ingest first.`)
    }

    return data.data.result[0].header
}

function getCollectionStorage(block: BlockHeader) {
    if (storage.multiTokens.collections.matrixEnjinV603.is(block)) {
        return storage.multiTokens.collections.matrixEnjinV603
    }

    throw new UnknownVersionError('MultiTokens.Collections')
}

function getTokenStorage(block: BlockHeader) {
    if (storage.multiTokens.tokens.matrixEnjinV603.is(block)) {
        return storage.multiTokens.tokens.matrixEnjinV603
    }

    if (storage.multiTokens.tokens.v600.is(block)) {
        return storage.multiTokens.tokens.v600
    }

    if (storage.multiTokens.tokens.v500.is(block)) {
        return storage.multiTokens.tokens.v500
    }

    throw new UnknownVersionError('MultiTokens.Tokens')
}

function getCollectionAccountStorage(block: BlockHeader) {
    if (storage.multiTokens.collectionAccounts.matrixEnjinV603.is(block)) {
        return storage.multiTokens.collectionAccounts.matrixEnjinV603
    }

    throw new UnknownVersionError('MultiTokens.CollectionAccounts')
}

function getTokenAccountStorage(block: BlockHeader) {
    if (storage.multiTokens.tokenAccounts.matrixEnjinV603.is(block)) {
        return storage.multiTokens.tokenAccounts.matrixEnjinV603
    }

    throw new UnknownVersionError('MultiTokens.TokenAccounts')
}

function getAttributeStorage(block: BlockHeader) {
    if (storage.multiTokens.attributes.matrixEnjinV603.is(block)) {
        return storage.multiTokens.attributes.matrixEnjinV603
    }

    throw new UnknownVersionError('MultiTokens.Attributes')
}

function getAccountStorage(block: BlockHeader) {
    if (storage.system.account.matrixEnjinV603.is(block)) {
        return storage.system.account.matrixEnjinV603
    }

    if (storage.system.account.v602.is(block)) {
        return storage.system.account.v602
    }

    if (storage.system.account.v500.is(block)) {
        return storage.system.account.v500
    }

    throw new UnknownVersionError('System.Account')
}

async function syncCollection(ctx: CommonContext, block: BlockHeader) {
    for await (const collectionPairs of getCollectionStorage(block).getPairsPaged(BATCH_SIZE, block)) {
        const accountMap = await getAccountMap(
            ctx,
            collectionPairs.map(([, data]) => {
                if (!data) {
                    throw new Error('Collection Data not found')
                }
                return [data.owner, 'market' in data.policy ? data.policy.market?.royalty?.beneficiary : null]
            })
        )
        const collectionPromise = collectionPairs.map(async ([id, data]) => {
            if (!data) {
                throw new Error('Collection Data not found')
            }

            const owner = accountMap.get(data.owner)
            let market = null
            if ('market' in data.policy && data.policy.market.royalty) {
                const account = accountMap.get(data.policy.market.royalty.beneficiary)

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
                    maxTokenCount: data.policy.mint.maxTokenCount,
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
                flags: new CollectionFlags({
                    featured: false,
                    hiddenForLegalReasons: false,
                }),
                verifiedAt: null,
                socials: new CollectionSocials({
                    discord: null,
                    twitter: null,
                    instagram: null,
                    medium: null,
                    tiktok: null,
                    website: null,
                }),
                hidden: false,
                burnPolicy: null,
                attributePolicy: null,
                attributeCount: data.attributeCount,
                totalDeposit: data.totalDeposit,
                createdAt: new Date(block.timestamp ?? 0),
                collectionId: id,
            })
        })

        await Promise.all(collectionPromise)
            .then(async (collections) => {
                await ctx.store.insert(collections)
                return collections
            })
            .then((r) => {
                r.forEach((t) => {
                    processMetadata(t.id, 'collection')
                })
            })
    }
}

async function syncCollectionAccount(ctx: CommonContext, block: BlockHeader) {
    for await (const pairs of getCollectionAccountStorage(block).getPairsPaged(BATCH_SIZE, block)) {
        const accountMap = await getAccountMap(
            ctx,
            pairs.map(([k]) => k[1])
        )

        const collectionAccounts = pairs.map(([k, data]) => {
            if (!data) {
                throw new Error('Collection Account Data not found')
            }
            const collectionId = k[0].toString()
            const accountId = k[1]
            const account = accountMap.get(accountId)

            if (!account) throw Errors.accountNotFound()

            let approvals = null

            if (data.approvals && data.approvals.length > 0) {
                approvals = data.approvals.map((approval) => {
                    return new CollectionApproval({
                        account: approval[0],
                        expiration: approval[1],
                    })
                })
            }

            return new CollectionAccount({
                id: `${collectionId}-${accountId}`,
                isFrozen: data.isFrozen,
                approvals,
                accountCount: data.accountCount,
                account,
                collection: new Collection({ id: collectionId }),
                createdAt: new Date(block.timestamp ?? 0),
                updatedAt: new Date(block.timestamp ?? 0),
            })
        })

        await ctx.store.insert(collectionAccounts)
    }

    return true
}

async function syncToken(ctx: CommonContext, block: BlockHeader) {
    for await (const collectionPairs of getTokenStorage(block).getPairsPaged(BATCH_SIZE, block)) {
        const tokens = []
        for (const [key, data] of collectionPairs) {
            // eslint-disable-next-line no-continue
            if (!data) continue

            const collectionId = key[0].toString()
            const tokenId = key[1].toString()
            // eslint-disable-next-line no-await-in-loop
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
                            beneficiary: data.marketBehavior.value.beneficiary,
                            percentage: data.marketBehavior.value.percentage,
                        }),
                    })
                }
            }

            const freezeState = data.freezeState ? getFreezeState(data.freezeState) : undefined

            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (data.sufficiency.__kind === 'Insufficient') {
                unitPrice = data.sufficiency.unitPrice
                minimumBalance = BigInt(Math.max(1, Number(10n ** 16n / unitPrice)))
            }

            const token = new Token({
                id: `${collectionId}-${tokenId}`,
                tokenId: BigInt(tokenId),
                collection,
                attributeCount: data.attributeCount,
                supply: data.supply,
                isFrozen: freezeState === FreezeState.Permanent || freezeState === FreezeState.Temporary,
                cap: data.cap ? getCapType(data.cap) : null,
                behavior,
                freezeState,
                listingForbidden: 'listingForbidden' in data ? data.listingForbidden : false,
                minimumBalance,
                unitPrice,
                createdAt: new Date(block.timestamp ?? 0),
                mintDeposit: data.mintDeposit,
            })

            token.nonFungible = isNonFungible(token)
            tokens.push(token)

            processMetadata(token.id, 'token')
        }

        await ctx.store.insert(tokens)
    }
}

async function syncTokenAccount(ctx: CommonContext, block: BlockHeader) {
    for await (const pairs of getTokenAccountStorage(block).getPairsPaged(BATCH_SIZE, block)) {
        const accountMap = await getAccountMap(
            ctx,
            pairs.map(([k]) => k[2])
        )

        const tokenAccounts = pairs.map(([k, data]) => {
            if (!data) {
                throw new Error('Token Account Data not found')
            }
            const collectionId = k[0]
            const tokenId = k[1]
            const accountId = k[2]
            const account = accountMap.get(accountId)

            if (!account) throw Errors.accountNotFound()

            let namedReserves = null
            if (data.namedReserves && data.namedReserves.length > 0) {
                namedReserves = data.namedReserves.map((namedReserve) => {
                    return new TokenNamedReserve({
                        pallet: namedReserve[0],
                        amount: namedReserve[1],
                    })
                })
            }

            let locks = null
            if (data.locks && data.locks.length > 0) {
                locks = data.locks.map((lock) => {
                    return new TokenLock({
                        pallet: lock[0],
                        amount: lock[1],
                    })
                })
            }

            let approvals = null
            if (data.approvals && data.approvals.length > 0) {
                approvals = data.approvals.map((approval) => {
                    return new TokenApproval({
                        account: approval[0],
                        amount: approval[1].amount,
                        expiration: approval[1].expiration,
                    })
                })
            }

            return new TokenAccount({
                id: `${accountId}-${collectionId}-${tokenId}`,
                balance: data.balance,
                reservedBalance: data.reservedBalance,
                totalBalance: data.balance + data.reservedBalance,
                lockedBalance: data.lockedBalance,
                namedReserves,
                locks,
                approvals,
                isFrozen: data.isFrozen,
                account,
                collection: new Collection({ id: collectionId.toString() }),
                token: new Token({ id: `${collectionId}-${tokenId}` }),
                createdAt: new Date(block.timestamp ?? 0),
                updatedAt: new Date(block.timestamp ?? 0),
            })
        })

        await ctx.store.insert(tokenAccounts)
    }

    return true
}

async function syncAttribute(ctx: CommonContext, block: BlockHeader) {
    for await (const pairs of getAttributeStorage(block).getPairsPaged(BATCH_SIZE, block)) {
        const attributePromise = pairs.map(async ([k, data]) => {
            if (!data) {
                throw new Error('Attribute Data not found')
            }
            const collectionId = k[0]
            const tokenId = k[1]
            const key = safeString(hexToString(k[2]))
            const value = safeString(hexToString(data.value))
            const id = tokenId !== undefined ? `${collectionId}-${tokenId}` : collectionId.toString()

            const attributeId = `${id}-${k[2]}`

            if (tokenId !== undefined) {
                return new Attribute({
                    id: attributeId,
                    token: new Token({ id }),
                    key,
                    value,
                    deposit: data.deposit,
                    collection: new Collection({ id: collectionId.toString() }),
                    createdAt: new Date(block.timestamp ?? 0),
                    updatedAt: new Date(block.timestamp ?? 0),
                })
            }

            return new Attribute({
                id: attributeId,
                key,
                value,
                deposit: data.deposit,
                collection: new Collection({ id }),
                createdAt: new Date(block.timestamp ?? 0),
                updatedAt: new Date(block.timestamp ?? 0),
            })
        })

        await Promise.all(attributePromise).then((attributes) => ctx.store.insert(attributes))
    }

    return true
}

async function syncBalance(ctx: CommonContext, block: BlockHeader) {
    const batchSize = 100
    for await (const keys of getAccountStorage(block).getKeysPaged(batchSize, block)) {
        await getAccountMap(ctx, keys)
        addAccountsToSet(keys)
        await saveAccounts(ctx, block)
    }

    return true
}

async function populateBlockInternal(ctx: CommonContext, block: BlockHeader) {
    console.time('populateGenesis')
    ctx.log.info('Syncing collections...')
    await syncCollection(ctx, block)
    ctx.log.info(`Successfully imported ${await ctx.store.count(Collection)} collections`)

    ctx.log.info('Syncing tokens...')
    await syncToken(ctx, block)
    ctx.log.info(`Successfully imported ${await ctx.store.count(Token)} tokens`)

    ctx.log.info('Syncing token accounts...')
    await syncTokenAccount(ctx, block)
    ctx.log.info(`Successfully imported ${await ctx.store.count(TokenAccount)} token accounts`)

    ctx.log.info('Syncing collection accounts...')
    await syncCollectionAccount(ctx, block)
    ctx.log.info(`Successfully imported ${await ctx.store.count(CollectionAccount)} collection accounts`)

    ctx.log.info('Syncing attributes...')
    await Promise.all([syncAttribute(ctx, block), syncBalance(ctx, block)])
    ctx.log.info(`Successfully imported ${await ctx.store.count(Attribute)} attributes`)
    ctx.log.info(`Successfully synced balances of ${await ctx.store.count(Account)} accounts`)

    console.timeEnd('populateGenesis')
}

export async function populateBlock(ctx: CommonContext, block: number) {
    const blockHeader = await getBlock(block)
    ctx.log.info(`Syncing block ${block} with hash ${blockHeader.hash}`)
    await populateBlockInternal(ctx, blockHeader)
}
