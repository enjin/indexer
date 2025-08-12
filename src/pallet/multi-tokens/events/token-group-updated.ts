import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenGroupsUpdated } from '~/model'
import { TokenGroupUpdated } from '~/pallet/multi-tokens/events/types'

export function tokenGroupUpdated(event: EventItem): TokenGroupUpdated {
    return match(event)
        .returnType<TokenGroupUpdated>()
        .when(
            () => multiTokens.tokenGroupsUpdated.matrixEnjinV1022.is(event),
            () => multiTokens.tokenGroupsUpdated.matrixEnjinV1022.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function tokenGroupUpdatedEventModel(item: EventItem, data: TokenGroupUpdated): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenGroupsUpdated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        data: new MultiTokensTokenGroupsUpdated({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            tokenGroups: data.tokenGroups,
        }),
    })
}
