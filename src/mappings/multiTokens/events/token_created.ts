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
    FreezeState,
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
    DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_v500,
    FreezeState as FreezeState_v500,
    SufficiencyParam_Sufficient,
    TokenMarketBehavior,
} from '../../../types/generated/v500'
import { DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_v600 } from '../../../types/generated/v600'
import {
    TokenCap,
    DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_Enjin_v603,
} from '../../../types/generated/matrixEnjinV603'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import {
    FuelTanksDispatchAndTouchCall,
    FuelTanksDispatchCall,
    MultiTokensBatchMintCall,
    MultiTokensForceMintCall,
    MultiTokensMintCall,
} from '../../../types/generated/calls'
import { processMetadata } from '../../../jobs/process-metadata'

export function getCapType(cap: TokenCap) {
    if (cap.__kind === CapType.Supply) {
        return new TokenCapSupply({
            type: CapType.Supply,
            supply: cap.value,
        })
    }

    // TODO: add collapsing
    return new TokenCapSingleMint({
        type: CapType.SingleMint,
    })
}

export function getFreezeState(state: FreezeState_v500): FreezeState | null {
    switch (state.__kind) {
        case 'Permanent':
            return FreezeState.Permanent
        case 'Temporary':
            return FreezeState.Temporary
        case 'Never':
            return FreezeState.Never
        default:
            return null
    }
}

export function isTokenFrozen(freezeState: FreezeState | null | undefined): boolean {
    return freezeState === FreezeState.Permanent || freezeState === FreezeState.Temporary
}

async function getBehavior(
    ctx: CommonContext,
    behavior: TokenMarketBehavior
): Promise<TokenBehaviorIsCurrency | TokenBehaviorHasRoyalty> {
    if (behavior.__kind === TokenBehaviorType.IsCurrency) {
        return new TokenBehaviorIsCurrency({
            type: TokenBehaviorType.IsCurrency,
        })
    }

    const account = await getOrCreateAccount(ctx, behavior.value.beneficiary)
    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: behavior.value.percentage,
        }),
    })
}

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getCallData(ctx: CommonContext, call: Call, event: ReturnType<typeof getEventData>) {
    if (call.name === 'MultiTokens.batch_mint') {
        const data = new MultiTokensBatchMintCall(ctx, call)

        if (data.isMatrixEnjinV603) {
            const { collectionId, recipients } = data.asMatrixEnjinV603
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParamsCreateToken_Enjin_v603
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }

        if (data.isV600) {
            const { collectionId, recipients } = data.asV600
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParamsCreateToken_v600
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }

        if (data.isV500) {
            const { collectionId, recipients } = data.asV500
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParamsCreateToken_v500
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }

        throw new UnknownVersionError(data.constructor.name)
    }

    if (call.name === 'FuelTanks.dispatch_and_touch' || call.name === 'FuelTanks.dispatch') {
        let data: FuelTanksDispatchCall | FuelTanksDispatchAndTouchCall
        if (call.name === 'FuelTanks.dispatch') {
            data = new FuelTanksDispatchCall(ctx, call)
        } else {
            data = new FuelTanksDispatchAndTouchCall(ctx, call)
        }

        if (
            data.isMatrixEnjinV1000 &&
            data.asMatrixEnjinV1000.call.__kind === 'MultiTokens' &&
            (data.asMatrixEnjinV1000.call.value.__kind === 'mint' || data.asMatrixEnjinV1000.call.value.__kind === 'force_mint')
        ) {
            const { collectionId } = data.asMatrixEnjinV1000.call.value
            const recipient = data.asMatrixEnjinV1000.call.value.recipient.value as Uint8Array
            const params = data.asMatrixEnjinV1000.call.value.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (
            data.isMatrixEnjinV603 &&
            data.asMatrixEnjinV603.call.__kind === 'MultiTokens' &&
            (data.asMatrixEnjinV603.call.value.__kind === 'mint' || data.asMatrixEnjinV603.call.value.__kind === 'force_mint')
        ) {
            const { collectionId } = data.asMatrixEnjinV603.call.value
            const recipient = data.asMatrixEnjinV603.call.value.recipient.value as Uint8Array
            const params = data.asMatrixEnjinV603.call.value.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (
            data.isV1003 &&
            data.asV1003.call.__kind === 'MultiTokens' &&
            (data.asV1003.call.value.__kind === 'mint' || data.asV1003.call.value.__kind === 'force_mint')
        ) {
            const { collectionId } = data.asV1003.call.value
            const recipient = data.asV1003.call.value.recipient.value as Uint8Array
            const params = data.asV1003.call.value.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (
            data.isV1000 &&
            data.asV1000.call.__kind === 'MultiTokens' &&
            (data.asV1000.call.value.__kind === 'mint' || data.asV1000.call.value.__kind === 'force_mint')
        ) {
            const { collectionId } = data.asV1000.call.value
            const recipient = data.asV1000.call.value.recipient.value as Uint8Array
            const params = data.asV1000.call.value.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (
            data.isMatrixEnjinV1000 &&
            data.asMatrixEnjinV1000.call.__kind === 'MultiTokens' &&
            data.asMatrixEnjinV1000.call.value.__kind === 'batch_mint'
        ) {
            const { collectionId, recipients } = data.asMatrixEnjinV1000.call.value
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParamsCreateToken_Enjin_v603
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }

        if (
            data.isMatrixEnjinV603 &&
            data.asMatrixEnjinV603.call.__kind === 'MultiTokens' &&
            data.asMatrixEnjinV603.call.value.__kind === 'batch_mint'
        ) {
            const { collectionId, recipients } = data.asMatrixEnjinV603.call.value
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParamsCreateToken_Enjin_v603
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }

        if (data.isV1003 && data.asV1003.call.__kind === 'MultiTokens' && data.asV1003.call.value.__kind === 'batch_mint') {
            const { collectionId, recipients } = data.asV1003.call.value
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParamsCreateToken_Enjin_v603
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }

        if (data.isV1000 && data.asV1000.call.__kind === 'MultiTokens' && data.asV1000.call.value.__kind === 'batch_mint') {
            const { collectionId, recipients } = data.asV1000.call.value
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const recipient = recipientCall.accountId
                const params = recipientCall.params as DefaultMintParamsCreateToken_Enjin_v603
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }

        throw new UnknownVersionError(data.constructor.name)
    }

    let data: MultiTokensMintCall | MultiTokensForceMintCall
    if (call.name === 'MultiTokens.force_mint') {
        data = new MultiTokensForceMintCall(ctx, call)

        if (data.isMatrixEnjinV603) {
            const { collectionId } = data.asMatrixEnjinV603
            const recipient = data.asMatrixEnjinV603.recipient.value as Uint8Array
            const params = data.asMatrixEnjinV603.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (data.isV1003) {
            const { collectionId } = data.asV1003
            const recipient = data.asV1003.recipient.value as Uint8Array
            const params = data.asV1003.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }
    } else {
        data = new MultiTokensMintCall(ctx, call)

        if (data.isMatrixEnjinV603) {
            const { collectionId } = data.asMatrixEnjinV603
            const recipient = data.asMatrixEnjinV603.recipient.value as Uint8Array
            const params = data.asMatrixEnjinV603.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (data.isV600) {
            const { collectionId } = data.asV600
            const recipient = data.asV600.recipient.value as Uint8Array
            const params = data.asV600.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (data.isV500) {
            const { collectionId } = data.asV500
            const recipient = data.asV500.recipient.value as Uint8Array
            const params = data.asV500.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
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
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensTokenCreatedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        const { collectionId, tokenId, issuer, initialSupply } = data.asMatrixEnjinV603
        if (issuer.__kind === 'Signed') {
            return { collectionId, tokenId, issuer: issuer.value, initialSupply }
        }
        return { collectionId, tokenId, issuer: new Uint8Array(32).fill(0), initialSupply }
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.TokenCreated', { event: { args: true; call: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenCreated({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            issuer: u8aToHex(data.issuer),
            initialSupply: data.initialSupply,
        }),
    })
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export async function tokenCreated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.TokenCreated', { event: { args: true; call: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)

    if (skipSave && item.event.call) {
        ctx.store.update(
            Token,
            { id: `${eventData.collectionId}-${eventData.tokenId}` },
            { createdAt: new Date(block.timestamp) }
        )
        return getEvent(item, eventData)
    }

    if (item.event.call) {
        const [callData, collection] = await Promise.all([
            getCallData(ctx, item.event.call, eventData),
            ctx.store.findOneOrFail(Collection, {
                where: { id: eventData.collectionId.toString() },
            }),
        ])

        if (!eventData || !callData) return undefined

        const token = new Token({
            id: `${eventData.collectionId}-${eventData.tokenId}`,
            tokenId: eventData.tokenId,
            supply: 0n, // Supply is updated on Mint/Burn events
            cap: callData.cap,
            behavior: callData.behavior,
            isFrozen: isTokenFrozen(callData.freezeState),
            freezeState: callData.freezeState,
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

        processMetadata(token.id, 'token')

        return getEvent(item, eventData)
    }

    return undefined
}
