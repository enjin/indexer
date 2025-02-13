import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const paraDeposit = {
    /**
     *  The deposit to be paid to run a parathread.
     *  This should include the cost for storing the genesis head and validation code.
     */
    enjinV100: new ConstantType('Registrar.ParaDeposit', sts.bigint()),
}

export const dataDepositPerByte = {
    /**
     *  The deposit to be paid per byte stored on chain.
     */
    enjinV100: new ConstantType('Registrar.DataDepositPerByte', sts.bigint()),
}
