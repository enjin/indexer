import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenGroupDestroyed } from '~/model'
import { TokenGroupDestroyed } from '~/pallet/multi-tokens/events/types'

export function tokenGroupDestroyed(event: EventItem): TokenGroupDestroyed {
    return match(event)
        .returnType<TokenGroupDestroyed>()
        .when(
            () => multiTokens.tokenGroupDestroyed.matrixEnjinV1022.is(event),
            () => multiTokens.tokenGroupDestroyed.matrixEnjinV1022.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function tokenGroupDestroyedEventModel(item: EventItem, data: TokenGroupDestroyed): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenGroupDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensTokenGroupDestroyed({
            tokenGroupId: data.tokenGroupId,
        }),
    })
}
