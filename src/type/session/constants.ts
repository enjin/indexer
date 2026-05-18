import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const keyDeposit = {
    /**
     *  The amount to be held when setting keys.
     */
    enjinV1070: new ConstantType('Session.KeyDeposit', sts.bigint()),
}
