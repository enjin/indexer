import { marketplace } from '~/type/events'
import { EventItem } from '~/contexts'
import { match } from 'ts-pattern'
import { WhitelistedAccountsRemoved } from './types'
import { UnsupportedEventError } from '~/util/errors'
import { Event as EventModel, Extrinsic, MarketplaceWhitelistedAccountsRemoved } from '~/model'

export function whitelistedAccountsRemoved(event: EventItem): WhitelistedAccountsRemoved {
    return match(event)
        .returnType<WhitelistedAccountsRemoved>()
        .when(
            () => marketplace.whitelistedAccountsAdded.matrixEnjinV1022.is(event),
            () => marketplace.whitelistedAccountsAdded.matrixEnjinV1022.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function whitelistedAccountsRemovedEventModel(item: EventItem, data: WhitelistedAccountsRemoved) {
    return new EventModel({
        id: item.id,
        name: MarketplaceWhitelistedAccountsRemoved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MarketplaceWhitelistedAccountsRemoved({
            listing: data.listingId,
            accounts: data.accounts.map((account) => account.accountId),
        }),
    })
}
