import { EventItem } from '~/contexts'
import { AccountTokenEvent, BalancesTransfer, Event as EventModel, Extrinsic } from '~/model'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'

export function transfer(item: EventItem): [EventModel, AccountTokenEvent | SnsEvent | undefined] | undefined {
    const data = mappings.balances.events.transfer(item)

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            from: data.from,
            to: data.to,
            amount: data.amount,
            extrinsic: item.extrinsic?.id,
            callName: item.call?.name ?? item.extrinsic?.call?.name ?? null,
        },
    }

    return [
        new EventModel({
            id: item.id,
            name: BalancesTransfer.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            data: new BalancesTransfer({
                from: data.from,
                to: data.to,
                amount: data.amount,
            }),
        }),
        item.extrinsic ? snsEvent : undefined,
    ]
}
