import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const basicDeposit = {
    /**
     *  The amount held on deposit for a registered identity
     */
    matrixEnjinV1000: new ConstantType('Identity.BasicDeposit', sts.bigint()),
}

export const fieldDeposit = {
    /**
     *  The amount held on deposit per additional field for a registered identity.
     */
    matrixEnjinV1000: new ConstantType('Identity.FieldDeposit', sts.bigint()),
}

export const subAccountDeposit = {
    /**
     *  The amount held on deposit for a registered subaccount. This should account for the fact
     *  that one storage item's value will increase by the size of an account ID, and there will
     *  be another trie item whose value is the size of an account ID plus 32 bytes.
     */
    matrixEnjinV1000: new ConstantType('Identity.SubAccountDeposit', sts.bigint()),
}

export const maxSubAccounts = {
    /**
     *  The maximum number of sub-accounts allowed per identified account.
     */
    matrixEnjinV1000: new ConstantType('Identity.MaxSubAccounts', sts.number()),
}

export const maxAdditionalFields = {
    /**
     *  Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
     *  required to access an identity, but can be pretty high.
     */
    matrixEnjinV1000: new ConstantType('Identity.MaxAdditionalFields', sts.number()),
}

export const maxRegistrars = {
    /**
     *  Maxmimum number of registrars allowed in the system. Needed to bound the complexity
     *  of, e.g., updating judgements.
     */
    matrixEnjinV1000: new ConstantType('Identity.MaxRegistrars', sts.number()),
}

export const byteDeposit = {
    /**
     *  The amount held on deposit per encoded byte for a registered identity.
     */
    matrixEnjinV1012: new ConstantType('Identity.ByteDeposit', sts.bigint()),
}

export const pendingUsernameExpiration = {
    /**
     *  The number of blocks within which a username grant must be accepted.
     */
    matrixEnjinV1012: new ConstantType('Identity.PendingUsernameExpiration', sts.number()),
}

export const maxSuffixLength = {
    /**
     *  The maximum length of a suffix.
     */
    matrixEnjinV1012: new ConstantType('Identity.MaxSuffixLength', sts.number()),
}

export const maxUsernameLength = {
    /**
     *  The maximum length of a username, including its suffix and any system-added delimiters.
     */
    matrixEnjinV1012: new ConstantType('Identity.MaxUsernameLength', sts.number()),
}

export const usernameDeposit = {
    /**
     *  The amount held on deposit per registered username. This value should change only in
     *  runtime upgrades with proper migration of existing deposits.
     */
    matrixV1030: new ConstantType('Identity.UsernameDeposit', sts.bigint()),
}

export const usernameGracePeriod = {
    /**
     *  The number of blocks that must pass to enable the permanent deletion of a username by
     *  its respective authority.
     */
    matrixV1030: new ConstantType('Identity.UsernameGracePeriod', sts.number()),
}
