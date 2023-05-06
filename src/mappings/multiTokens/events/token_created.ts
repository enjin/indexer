import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenCreatedEvent } from '../../../types/generated/events'
import {
    CapType,
    Collection,
    Event as EventModel,
    Extrinsic,
    Metadata,
    MultiTokensTokenCreated,
    Royalty,
    Token,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
    TokenCapSingleMint,
    TokenCapSupply,
} from '../../../model'
import { Call, Event } from '../../../types/generated/support'
import {
    DefaultMintParams_CreateToken,
    TokenCap,
    TokenCap_Supply,
    TokenMarketBehavior,
    TokenMarketBehavior_HasRoyalty,
    MultiTokensCall_mint,
} from '../../../types/generated/efinityV3012'
import { MultiTokensCall_mint as MultiTokensCall_mint_rV3012 } from '../../../types/generated/rocfinityV3012'
import {
    DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_v500,
    MultiTokensCall_mint as MultiTokensCall_mint_v500,
    SufficiencyParam_Sufficient,
} from '../../../types/generated/v500'
import { getMetadata } from '../../util/metadata'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { EfinityUtilityBatchCall, MultiTokensBatchMintCall, MultiTokensMintCall } from '../../../types/generated/calls'

interface CallData {
    recipient: Uint8Array
    collectionId: bigint
    tokenId: bigint
    initialSupply: bigint
    minimumBalance: bigint
    unitPrice: bigint | null
    cap: TokenCapSupply | TokenCapSingleMint | null
    behavior: TokenBehaviorIsCurrency | TokenBehaviorHasRoyalty | null
    listingForbidden: boolean
}

interface EventData {
    collectionId: bigint
    tokenId: bigint
    issuer: Uint8Array
    initialSupply: bigint
}

function getCapType(cap: TokenCap): TokenCapSupply | TokenCapSingleMint {
    if (cap.__kind === CapType.Supply.toString()) {
        return new TokenCapSupply({
            type: CapType.Supply,
            supply: (cap as TokenCap_Supply).value,
        })
    }

    return new TokenCapSingleMint({
        type: CapType.SingleMint,
    })
}

async function getBehavior(
    ctx: CommonContext,
    behavior: TokenMarketBehavior
): Promise<TokenBehaviorIsCurrency | TokenBehaviorHasRoyalty> {
    if (behavior.__kind === TokenBehaviorType.IsCurrency.toString()) {
        return new TokenBehaviorIsCurrency({
            type: TokenBehaviorType.IsCurrency,
        })
    }

    const account = await getOrCreateAccount(ctx, (behavior as TokenMarketBehavior_HasRoyalty).value.beneficiary)
    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: (behavior as TokenMarketBehavior_HasRoyalty).value.percentage,
        }),
    })
}

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getCallData(ctx: CommonContext, call: Call, event: EventData): Promise<CallData> {
    if (call.name === 'EfinityUtility.batch') {
        const data = new EfinityUtilityBatchCall(ctx, call)

        if (data.isV500) {
            const { calls } = data.asV500
            const recipientCall = calls.find(
                (r) =>
                    r.__kind === 'MultiTokens' &&
                    r.value.__kind === 'mint' &&
                    r.value.collectionId === event.collectionId &&
                    r.value.params.tokenId === event.tokenId &&
                    r.value.params.__kind === 'CreateToken'
            )

            if (recipientCall) {
                const mintCall = recipientCall.value as MultiTokensCall_mint_v500
                const recipient = mintCall.recipient.value as Uint8Array
                const params = mintCall.params as DefaultMintParamsCreateToken_v500
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                let unitPrice: bigint | null = 10_000_000_000_000_000n
                let minimumBalance = 1n

                if (params.sufficiency.__kind === 'Sufficient') {
                    minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                    unitPrice = null
                }

                return {
                    recipient,
                    collectionId: mintCall.collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance,
                    unitPrice,
                    cap,
                    behavior,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }

        if (data.isEfinityV3012) {
            const { calls } = data.asEfinityV3012
            const recipientCall = calls.find(
                (r) =>
                    r.__kind === 'MultiTokens' &&
                    r.value.__kind === 'mint' &&
                    r.value.collectionId === event.collectionId &&
                    r.value.params.tokenId === event.tokenId &&
                    r.value.params.__kind === 'CreateToken'
            )

            if (recipientCall) {
                const mintCall = recipientCall.value as MultiTokensCall_mint
                const recipient = mintCall.recipient.value as Uint8Array
                const params = mintCall.params as DefaultMintParams_CreateToken
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null

                return {
                    recipient,
                    collectionId: mintCall.collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance: BigInt(Math.max(1, Number(10n ** 16n / params.unitPrice))),
                    unitPrice: params.unitPrice,
                    cap,
                    behavior,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }

        if (data.isRocfinityV3012) {
            const { calls } = data.asRocfinityV3012
            const recipientCall = calls.find(
                (r) =>
                    r.__kind === 'MultiTokens' &&
                    r.value.__kind === 'mint' &&
                    r.value.collectionId === event.collectionId &&
                    r.value.params.tokenId === event.tokenId &&
                    r.value.params.__kind === 'CreateToken'
            )

            if (recipientCall) {
                const mintCall = recipientCall.value as MultiTokensCall_mint_rV3012
                const recipient = mintCall.recipient.value as Uint8Array
                const params = mintCall.params as DefaultMintParams_CreateToken
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null

                return {
                    recipient,
                    collectionId: mintCall.collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance: BigInt(Math.max(1, Number(10n ** 16n / params.unitPrice))),
                    unitPrice: params.unitPrice,
                    cap,
                    behavior,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }
    }

    if (call.name === 'MultiTokens.batch_mint') {
        const data = new MultiTokensBatchMintCall(ctx, call)

        if (data.isV500) {
            const { collectionId, recipients } = data.asV500
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParamsCreateToken_v500
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                let unitPrice: bigint | null = 10_000_000_000_000_000n
                let minimumBalance = 1n

                if (params.sufficiency.__kind === 'Sufficient') {
                    minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                    unitPrice = null
                }

                return {
                    recipient,
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance,
                    unitPrice,
                    cap,
                    behavior,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        } else if (data.isEfinityV2) {
            const { collectionId, recipients } = data.asEfinityV2
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParams_CreateToken
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null

                return {
                    recipient,
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance: BigInt(Math.max(1, Number(10n ** 16n / params.unitPrice))),
                    unitPrice: params.unitPrice,
                    cap,
                    behavior,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        } else if (data.isEfinityV3000) {
            const { collectionId, recipients } = data.asEfinityV3000
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParams_CreateToken
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null

                return {
                    recipient,
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance: BigInt(Math.max(1, Number(10n ** 16n / params.unitPrice))),
                    unitPrice: params.unitPrice,
                    cap,
                    behavior,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        } else if (data.isEfinityV3012) {
            const { collectionId, recipients } = data.asEfinityV3012
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParams_CreateToken
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null

                return {
                    recipient,
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance: BigInt(Math.max(1, Number(10n ** 16n / params.unitPrice))),
                    unitPrice: params.unitPrice,
                    cap,
                    behavior,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        } else {
            throw new UnknownVersionError(data.constructor.name)
        }
    }

    const data = new MultiTokensMintCall(ctx, call)

    if (data.isV500) {
        const { collectionId } = data.asV500
        const recipient = data.asV500.recipient.value as Uint8Array
        const params = data.asV500.params as DefaultMintParamsCreateToken_v500
        const cap = params.cap ? getCapType(params.cap) : null
        const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
        let unitPrice: bigint | null = 10_000_000_000_000_000n
        let minimumBalance = 1n

        if (params.sufficiency.__kind === 'Sufficient') {
            minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
            unitPrice = null
        }

        return {
            recipient,
            collectionId,
            tokenId: params.tokenId,
            initialSupply: params.initialSupply,
            minimumBalance,
            unitPrice,
            cap,
            behavior,
            listingForbidden: params.listingForbidden ?? false,
        }
    }

    if (data.isEfinityV3012) {
        const { collectionId } = data.asEfinityV3012
        const recipient = data.asEfinityV3012.recipient.value as Uint8Array
        const params = data.asEfinityV3012.params as DefaultMintParams_CreateToken
        const cap = params.cap ? getCapType(params.cap) : null
        const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null

        return {
            recipient,
            collectionId,
            tokenId: params.tokenId,
            initialSupply: params.initialSupply,
            minimumBalance: BigInt(Math.max(1, Number(10n ** 16n / params.unitPrice))),
            unitPrice: params.unitPrice,
            cap,
            behavior,
            listingForbidden: params.listingForbidden ?? false,
        }
    }

    if (data.isEfinityV3000) {
        const { collectionId } = data.asEfinityV3000
        const recipient = data.asEfinityV3000.recipient.value as Uint8Array
        const params = data.asEfinityV3000.params as DefaultMintParams_CreateToken
        const cap = params.cap ? getCapType(params.cap) : null
        const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null

        return {
            recipient,
            collectionId,
            tokenId: params.tokenId,
            initialSupply: params.initialSupply,
            minimumBalance: BigInt(Math.max(1, Number(10n ** 16n / params.unitPrice))),
            unitPrice: params.unitPrice,
            cap,
            behavior,
            listingForbidden: params.listingForbidden ?? false,
        }
    }

    if (data.isEfinityV2) {
        const { collectionId } = data.asEfinityV2
        const recipient = data.asEfinityV2.recipient.value as Uint8Array
        const params = data.asEfinityV2.params as DefaultMintParams_CreateToken
        const cap = params.cap ? getCapType(params.cap) : null
        const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null

        return {
            recipient,
            collectionId,
            tokenId: params.tokenId,
            initialSupply: params.initialSupply,
            minimumBalance: BigInt(Math.max(1, Number(10n ** 16n / params.unitPrice))),
            unitPrice: params.unitPrice,
            cap,
            behavior,
            listingForbidden: params.listingForbidden ?? false,
        }
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensTokenCreatedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, tokenId, issuer, initialSupply } = data.asEfinityV2
        return { collectionId, tokenId, issuer, initialSupply }
    }
    if (data.isEfinityV3012) {
        const { collectionId, tokenId, issuer, initialSupply } = data.asEfinityV3012
        if (issuer.__kind === 'Signed') {
            return { collectionId, tokenId, issuer: issuer.value, initialSupply }
        }
        return { collectionId, tokenId, issuer: new Uint8Array(32).fill(0), initialSupply }
    }
    throw new UnknownVersionError(data.constructor.name)
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export async function tokenCreated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.TokenCreated', { event: { args: true; call: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)

    if (item.event.call) {
        const callData = await getCallData(ctx, item.event.call, eventData)
        if (!eventData || !callData) return undefined

        const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
            where: { id: eventData.collectionId.toString() },
            relations: {
                attributes: true,
            },
        })

        // TODO: Far from ideal but we will do this only until we don't have the metadata processor
        let metadata: Metadata | null | undefined = null
        const collectionUri = collection.attributes.find((e) => e.key === 'uri')
        if (collectionUri && (collectionUri.value.includes('{id}.json') || collectionUri.value.includes('%7Bid%7D.json'))) {
            metadata = await getMetadata(new Metadata(), collectionUri)
            if (metadata) {
                const collectionWithTokens = await ctx.store.findOneOrFail<Collection>(Collection, {
                    where: { id: eventData.collectionId.toString() },
                    relations: {
                        tokens: true,
                    },
                })

                const otherTokens: Token[] = collectionWithTokens.tokens.map((e) => {
                    e.metadata = metadata
                    return e
                })

                if (otherTokens.length > 0) {
                    await ctx.store.save(otherTokens)
                }
            }
        }

        const token = new Token({
            id: `${eventData.collectionId}-${eventData.tokenId}`,
            tokenId: eventData.tokenId,
            supply: 0n, // Supply is updated on Mint/Burn events
            cap: callData.cap,
            behavior: callData.behavior,
            isFrozen: false,
            minimumBalance: callData.minimumBalance,
            unitPrice: callData.unitPrice,
            mintDeposit: 0n, // TODO: Fixed for now
            attributeCount: 0,
            collection,
            metadata: null,
            nonFungible: false,
            listingForbidden: callData.listingForbidden,
            createdAt: new Date(block.timestamp),
        })

        await ctx.store.insert(Token, token as any)

        return new EventModel({
            id: item.event.id,
            extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
            collectionId: eventData.collectionId.toString(),
            tokenId: `${eventData.collectionId.toString()}-${eventData.tokenId.toString()}`,
            data: new MultiTokensTokenCreated({
                collectionId: eventData.collectionId,
                tokenId: eventData.tokenId,
                issuer: u8aToHex(eventData.issuer),
                initialSupply: eventData.initialSupply,
            }),
        })
    }

    return undefined
}
