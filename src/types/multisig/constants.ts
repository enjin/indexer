import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const depositBase = {
    /**
     *  The base amount of currency needed to reserve for creating a multisig execution or to
     *  store a dispatch call for later.
     *
     *  This is held for an additional storage item whose value size is
     *  `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
     *  `32 + sizeof(AccountId)` bytes.
     */
    matrixEnjinV603: new ConstantType('Multisig.DepositBase', sts.bigint()),
}

export const depositFactor = {
    /**
     *  The amount of currency needed per unit threshold when creating a multisig execution.
     *
     *  This is held for adding 32 bytes more into a pre-existing storage value.
     */
    matrixEnjinV603: new ConstantType('Multisig.DepositFactor', sts.bigint()),
}

export const maxSignatories = {
    /**
     *  The maximum amount of signatories allowed in the multisig.
     */
    matrixEnjinV603: new ConstantType('Multisig.MaxSignatories', sts.number()),
}
