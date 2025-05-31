import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as enjinV101 from '../enjinV101'

export const registered =  {
    name: 'Registrar.Registered',
    enjinV100: new EventType(
        'Registrar.Registered',
        sts.struct({
            paraId: enjinV100.Id,
            manager: enjinV100.AccountId32,
        })
    ),
}

export const deregistered =  {
    name: 'Registrar.Deregistered',
    enjinV100: new EventType(
        'Registrar.Deregistered',
        sts.struct({
            paraId: enjinV100.Id,
        })
    ),
}

export const reserved =  {
    name: 'Registrar.Reserved',
    enjinV100: new EventType(
        'Registrar.Reserved',
        sts.struct({
            paraId: enjinV100.Id,
            who: enjinV100.AccountId32,
        })
    ),
}

export const swapped =  {
    name: 'Registrar.Swapped',
    enjinV101: new EventType(
        'Registrar.Swapped',
        sts.struct({
            paraId: enjinV101.Id,
            otherId: enjinV101.Id,
        })
    ),
}
