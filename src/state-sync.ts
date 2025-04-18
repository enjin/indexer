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
import { Block, CommonContext } from './contexts'
import Rpc from './utils/rpc'
import { Bytes, Runtime } from '@subsquid/substrate-runtime'
import * as fs from 'fs'
import * as readline from 'readline'
import * as path from 'path'
import * as mappings from './mappings'
import { encodeAddress, safeString } from './utils/tools'
import { In } from 'typeorm'
import { ParentBlockHeader } from '@subsquid/substrate-processor'
import { isNonFungible } from './processors/multi-tokens/utils/helpers'
import { hexToString } from '@polkadot/util'
import { addAccountsToSet, saveAccounts } from './processors/balances/save'

function getProjectRoot(): string {
    let currentDir = process.cwd()
    // Keep going up the directory tree until we find package.json or hit the root
    while (currentDir !== path.parse(currentDir).root) {
        if (fs.existsSync(path.join(currentDir, 'package.json'))) {
            return currentDir
        }
        currentDir = path.dirname(currentDir)
    }
    // If package.json is not found, return the current working directory
    return process.cwd()
}

// TODO: If the file is not found, we should try to fetch from the RPC node
async function getSpecMetadata(network: string, specVersion: number): Promise<Bytes> {
    const path = getProjectRoot()
    const fileStream = fs.createReadStream(`${path}/typegen/${network}.jsonl`)
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    })

    for await (const line of rl) {
        if (!line.trim()) continue
        try {
            const jsonObject = JSON.parse(line)
            if (jsonObject.specVersion === specVersion) {
                return jsonObject.metadata
            }
        } catch (error) {
            throw new Error(`Error parsing JSON line: ${error}`)
        }
    }

    throw new Error(`No metadata found for specVersion ${specVersion}`)
}

const BATCH_SIZE = 1000

function isNotNull<T>(input: null | undefined | T): input is T {
    return input != null && input !== undefined
}

export async function populateBlock(ctx: CommonContext) {
    const api = Rpc.getInstance().client
    const finalizedBlock = await api.getFinalizedBlock()

    const runtimeVersion = {
        specName: 'matrix-enjin',
        specVersion: 1014,
        implName: 'matrix-enjin',
        implVersion: 1,
    }

    const metadata = await getSpecMetadata('enjin-matrix', 1014)
    const runtime = new Runtime(runtimeVersion, metadata, undefined, ctx._chain.rpc)

    const block: Block = {
        id: finalizedBlock.hash,
        height: finalizedBlock.number,
        hash: finalizedBlock.hash,
        parentHash: finalizedBlock.parent,
        ...runtimeVersion,
        _runtime: runtime,
        _runtimeOfPrevBlock: runtime,
        getParent(): ParentBlockHeader {
            return {
                hash: '0x0',
                height: 0,
                _runtime: runtime,
            }
        },
    }

    ctx.log.info(`Syncing block ${finalizedBlock.number} with hash ${finalizedBlock.hash}`)

    await populateBlockInternal(ctx, block)
}

async function populateBlockInternal(ctx: CommonContext, block: Block) {
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
    await syncAttribute(ctx, block)
    ctx.log.info(`Successfully imported ${await ctx.store.count(Attribute)} attributes`)

    ctx.log.info('Syncing balances...')
    await syncBalance(ctx, block)
    ctx.log.info(`Successfully synced balances of ${await ctx.store.count(Account)} accounts`)

    console.timeEnd('populateGenesis')
}

async function syncCollection(ctx: CommonContext, block: Block) {
    const iterable = (await mappings.multiTokens.storage.collections(block, { batchSize: BATCH_SIZE })) ?? []

    for await (const collectionPairs of iterable) {
        const accountMap = await getAccountMap(
            ctx,
            collectionPairs.map(([, data]) => {
                if (!data) {
                    throw new Error('Collection Data not found')
                }
                return [data.owner, null] // 'market' in data.policy ? data.policy.market.royalty?.beneficiary : null]
            })
        )

        const collections = collectionPairs.map(([id, data]) => {
            if (!data) {
                throw new Error('Collection Data not found')
            }

            const owner = accountMap.get(data.owner)
            // let market = null
            // if ('market' in data.policy && data.policy.market.royalty) {
            //     const account = accountMap.get(data.policy.market.royalty.beneficiary)
            //
            //     if (!account) throw new Error('Market beneficiary not found')
            //
            //     market = new MarketPolicy({
            //         royalty: new Royalty({
            //             beneficiary: account.id,
            //             percentage: 0, //data.policy.market.royalty.percentage,
            //         }),
            //     })
            // }

            return new Collection({
                id: id.toString(),
                owner,
                mintPolicy: new MintPolicy({
                    maxTokenCount: data.policy.mint.maxTokenCount,
                    maxTokenSupply: data.policy.mint.maxTokenSupply,
                    forceSingleMint: data.policy.mint.forceSingleMint ?? data.policy.mint.forceCollapsingSupply,
                }),
                marketPolicy: null, // market,
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
                    // verified: false,
                }),
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

        await ctx.store.insert(collections)

        //
        // await Promise.all(collections)
        //     .then(async (collections) => {
        //         await ctx.store.insert(collections)
        //         return collections
        //     })
        //     .then((r) => {
        //         r.forEach((t) => {
        //             // processMetadata(t.id, 'collection')
        //             console.log('Dispatch process metadata for collection ' + t.id)
        //         })
        //     })
    }
}

async function syncToken(ctx: CommonContext, block: Block) {
    const iterable = (await mappings.multiTokens.storage.tokens(block, { batchSize: BATCH_SIZE })) ?? []

    for await (const tokenPairs of iterable) {
        const tokens = []

        for (const [key, data] of tokenPairs) {
            if (!data) continue

            const collectionId = key[0].toString()
            const tokenId = key[1].toString()

            const collection = await ctx.store.findOneOrFail(Collection, { where: { id: collectionId.toString() } })

            const behavior = null
            // if ('marketBehavior' in data && data.marketBehavior) {
            //     if (data.marketBehavior.__kind === TokenBehaviorType.IsCurrency) {
            //         behavior = new TokenBehaviorIsCurrency({
            //             type: TokenBehaviorType.IsCurrency,
            //         })
            //     } else {
            //         behavior = new TokenBehaviorHasRoyalty({
            //             type: TokenBehaviorType.HasRoyalty,
            //             royalty: new Royalty({
            //                 beneficiary: data.marketBehavior.value.beneficiary,
            //                 percentage: data.marketBehavior.value.percentage,
            //             }),
            //         })
            //     }
            // }

            const freezeState = null //data.freezeState ? getFreezeState(data.freezeState) : undefined
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minBalance = 1n

            if ('sufficiency' in data) {
                unitPrice = data.sufficiency?.__kind === 'Insufficient' ? data.sufficiency.unitPrice : 1n
                minBalance = BigInt(Math.max(1, Number(10n ** 16n / unitPrice)))
            }

            const token = new Token({
                id: `${collectionId}-${tokenId}`,
                tokenId: BigInt(tokenId),
                supply: data.supply,
                cap: null, // data.cap ? getCapType(data.cap) : null,
                behavior,
                isFrozen: false, //freezeState === FreezeState.Permanent || freezeState === FreezeState.Temporary,
                freezeState: null, // params.freezeState != undefined ? FreezeState[params.freezeState.__kind] : null,
                minimumBalance: minBalance,
                unitPrice,
                mintDeposit: data.mintDeposit ?? 1n,
                attributeCount: data.attributeCount,
                collection,
                metadata: null,
                listingForbidden: 'listingForbidden' in data ? data.listingForbidden : false,
                accountDepositCount: 0,
                anyoneCanInfuse: false,
                nativeMetadata: null,
                infusion: 0n,
                createdAt: new Date(block.timestamp ?? 0),
            })

            token.nonFungible = isNonFungible(token)
            tokens.push(token)
            // processMetadata(token.id, 'token')
        }

        await ctx.store.insert(tokens)
    }
}

//
async function syncCollectionAccount(ctx: CommonContext, block: Block) {
    const iterable = (await mappings.multiTokens.storage.collectionAccounts(block, { batchSize: BATCH_SIZE })) ?? []

    for await (const collectionAccountPairs of iterable) {
        const accountMap = await getAccountMap(
            ctx,
            collectionAccountPairs.map(([k]) => k[1])
        )

        const collectionAccounts = collectionAccountPairs.map(([k, data]) => {
            if (!data) {
                throw new Error('Collection Account Data not found')
            }
            const collectionId = k[0].toString()
            const accountId = k[1]
            const account = accountMap.get(accountId)

            // if (!account) throw Errors.accountNotFound()

            let approvals = null

            if (data.approvals && data.approvals.length > 0) {
                approvals = data.approvals.map((approval) => {
                    return new CollectionApproval({
                        accountId: approval[0],
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

async function syncTokenAccount(ctx: CommonContext, block: Block) {
    const iterable = (await mappings.multiTokens.storage.tokenAccounts(block, { batchSize: BATCH_SIZE })) ?? []

    for await (const tokenAccountPairs of iterable) {
        const accountMap = await getAccountMap(
            ctx,
            tokenAccountPairs.map(([k]) => k[2])
        )

        const tokenAccounts = tokenAccountPairs.map(([k, data]) => {
            if (!data) {
                throw new Error('Token Account Data not found')
            }
            const collectionId = k[0]
            const tokenId = k[1]
            const accountId = k[2]
            const account = accountMap.get(accountId)

            // if (!account) throw Errors.accountNotFound()

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
                        accountId: approval[0],
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

async function syncAttribute(ctx: CommonContext, block: Block) {
    const iterable = (await mappings.multiTokens.storage.attributes(block, { batchSize: BATCH_SIZE })) ?? []

    for await (const attributePairs of iterable) {
        const attributePromise = attributePairs.map(async ([k, data]) => {
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

async function syncBalance(ctx: CommonContext, block: Block) {
    const iterable = await mappings.system.storage.accounts(block, { batchSize: BATCH_SIZE })

    for await (const keys of iterable) {
        await getAccountMap(ctx, keys)
        addAccountsToSet(keys)
        await saveAccounts(ctx, block)
    }

    return true
}

async function getAccountMap(
    ctx: CommonContext,
    accounts: (string | null | undefined)[] | (string | null | undefined)[][]
) {
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
            address: encodeAddress(a),
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
