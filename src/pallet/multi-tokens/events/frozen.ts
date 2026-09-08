import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensFrozen } from '~/model'
import { Freeze } from '~/pallet/multi-tokens/events/types'

export function frozen(event: EventItem): Freeze {
    return match(event)
        .returnType<Freeze>()
        .when(
            () => multiTokens.frozen.matrixEnjinV603.is(event),
            () => multiTokens.frozen.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.frozen.enjinV1070.is(event),
            () => multiTokens.frozen.enjinV1070.decode(event)
        )
        .when(
            () => multiTokens.frozen.matrixV1040.is(event),
            () => multiTokens.frozen.matrixV1040.decode(event)
        )
        .when(
            () => multiTokens.frozen.v1070.is(event),
            () => multiTokens.frozen.v1070.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function frozenEventModel(item: EventItem, data: Freeze): EventModel {
    let tokenId: null | string = null
    let rawTokenId: bigint | undefined
    let tokenGroupId: bigint | undefined
    let attributeKey: string | undefined
    let accountId: string | undefined

    if (data.freezeType.__kind === 'Token' || data.freezeType.__kind === 'TokenAccount') {
        tokenId = `${data.collectionId}-${data.freezeType.tokenId}`
        rawTokenId = data.freezeType.tokenId
    } else if (data.freezeType.__kind === 'Attribute') {
        rawTokenId = data.freezeType.tokenId
        attributeKey = data.freezeType.key
        if (rawTokenId !== undefined) tokenId = `${data.collectionId}-${rawTokenId}`
    } else if (data.freezeType.__kind === 'TokenGroupAttribute') {
        tokenGroupId = data.freezeType.tokenGroupId
        attributeKey = data.freezeType.key
    }

    if (data.freezeType.__kind === 'CollectionAccount') accountId = data.freezeType.value
    if (data.freezeType.__kind === 'TokenAccount') accountId = data.freezeType.accountId

    return new EventModel({
        id: item.id,
        name: MultiTokensFrozen.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: tokenId,
        data: new MultiTokensFrozen({
            kind: data.freezeType.__kind,
            collectionId: data.collectionId,
            tokenId: rawTokenId,
            tokenGroupId,
            attributeKey,
            targetAccount: accountId,
        }),
    })
}
