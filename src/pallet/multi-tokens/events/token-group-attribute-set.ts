import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenGroupAttributeSet } from '~/model'
import { safeString } from '~/util/tools'
import { TokenGroupAttributeSet } from '~/pallet/multi-tokens/events/types'
import { hexToString } from '@polkadot/util'

export function tokenGroupAttributeSet(event: EventItem): TokenGroupAttributeSet {
    return match(event)
        .returnType<TokenGroupAttributeSet>()
        .when(
            () => multiTokens.tokenGroupAttributeSet.matrixEnjinV1022.is(event),
            () => multiTokens.tokenGroupAttributeSet.matrixEnjinV1022.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function tokenGroupAttributeSetEventModel(
    item: EventItem,
    data: TokenGroupAttributeSet
): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenGroupAttributeSet.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensTokenGroupAttributeSet({
            tokenGroupId: data.tokenGroupId,
            key: safeString(data.key),
            value: safeString(hexToString(data.value)),
        }),
    })
}
