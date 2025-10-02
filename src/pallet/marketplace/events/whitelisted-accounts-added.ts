import { marketplace } from '~/type/events'
import { EventItem } from '~/contexts'
import { match } from 'ts-pattern'
import { WhitelistedAccountsAdded } from './types'
import { UnsupportedEventError } from '~/util/errors'
import { Event as EventModel, Extrinsic, MarketplaceWhitelistedAccountsAdded } from '~/model'

export function whitelistedAccountsAdded(event: EventItem): WhitelistedAccountsAdded {
    return match(event)
        .returnType<WhitelistedAccountsAdded>()
        .when(
            () => marketplace.whitelistedAccountsAdded.matrixEnjinV1022.is(event),
            () => marketplace.whitelistedAccountsAdded.matrixEnjinV1022.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function whitelistedAccountsAddedEventModel(item: EventItem, data: WhitelistedAccountsAdded) {
    return new EventModel({
        id: item.id,
        name: MarketplaceWhitelistedAccountsAdded.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MarketplaceWhitelistedAccountsAdded({
            listing: data.listingId,
            accounts: data.accounts.map((account) => account.accountId),
        }),
    })
}
