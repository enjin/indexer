import { EventItem } from '../../../contexts'
import { BalancesTransfer, Event as EventModel, Extrinsic } from '../../../model'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'

export async function transfer(item: EventItem): Promise<EventModel | undefined> {
    const data = mappings.balances.events.transfer(item)

    if (!data) return undefined

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                from: data.from,
                to: data.to,
                amount: data.amount,
                extrinsic: item.extrinsic.id,
                callName: item.call?.name ?? item.extrinsic.call?.name ?? null,
            },
        })
    }

    return new EventModel({
        id: item.id,
        name: BalancesTransfer.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new BalancesTransfer({
            from: data.from,
            to: data.to,
            amount: data.amount,
        }),
    })
}
