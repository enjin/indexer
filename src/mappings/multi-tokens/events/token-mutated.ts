import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenMutated } from '@enjin/indexer/model'

export type TokenMutatedEvent = {
    collectionId: bigint
    tokenId: bigint
    mutation: {
        behavior: {
            __kind: string // SomeMutation or NoMutation
            value?: {
                __kind: string // IsCurrency or HasRoyalty
                value?:
                    | {
                          beneficiaries: {
                              beneficiary: string
                              percentage: number
                          }[]
                      }
                    | {
                          beneficiary: string
                          percentage: number
                      }
            }
        }
        name?: {
            // Does not exist in v603 and below
            __kind: string // SomeMutation or NoMutation
            value?: string
        }
        anyoneCanInfuse?: {
            // Does not exist in v603 and below
            __kind: string // SomeMutation or NoMutation
            value?: boolean
        }
        listingForbidden: {
            __kind: string // SomeMutation or NoMutation
            value?: boolean
        }
    }
}

export function tokenMutated(event: EventItem): TokenMutated {
    return match(event)
        .returnType<TokenMutated>()
        .when(multiTokens.tokenMutated.matrixEnjinV1012.is, multiTokens.tokenMutated.matrixEnjinV1012.decode)
        .when(multiTokens.tokenMutated.matrixEnjinV603.is, multiTokens.tokenMutated.matrixEnjinV603.decode)
        .when(multiTokens.tokenMutated.matrixV1010.is, multiTokens.tokenMutated.matrixV1010.decode)
        .when(multiTokens.tokenMutated.matrixV500.is, multiTokens.tokenMutated.matrixV500.decode)
        .when(multiTokens.tokenMutated.enjinV1032.is, multiTokens.tokenMutated.enjinV1032.decode)
        .when(multiTokens.tokenMutated.enjinV100.is, multiTokens.tokenMutated.enjinV100.decode)
        .when(multiTokens.tokenMutated.v1050.is, multiTokens.tokenMutated.v1050.decode)
        .when(multiTokens.tokenMutated.v1030.is, multiTokens.tokenMutated.v1030.decode)
        .when(multiTokens.tokenMutated.v100.is, multiTokens.tokenMutated.v100.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function tokenMutatedEventModel(item: EventItem, data: TokenMutated): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenMutated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenMutated(),
    })
}
