import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenGroupAttributeRemoved } from '~/model'
import { safeString } from '~/util/tools'
import { TokenGroupAttributeRemoved } from '~/pallet/multi-tokens/events/types'

export function tokenGroupAttributeRemoved(event: EventItem): TokenGroupAttributeRemoved {
    return match(event)
        .returnType<TokenGroupAttributeRemoved>()
        .when(
            () => multiTokens.tokenGroupAttributeRemoved.matrixEnjinV1022.is(event),
            () => multiTokens.tokenGroupAttributeRemoved.matrixEnjinV1022.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function tokenGroupAttributeRemovedEventModel(
    item: EventItem,
    data: TokenGroupAttributeRemoved
): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenGroupAttributeRemoved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensTokenGroupAttributeRemoved({
            tokenGroupId: data.tokenGroupId,
            key: safeString(data.key),
        }),
    })
}
