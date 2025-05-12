'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.maxUsernameLength =
    exports.maxSuffixLength =
    exports.pendingUsernameExpiration =
    exports.byteDeposit =
    exports.maxRegistrars =
    exports.maxAdditionalFields =
    exports.maxSubAccounts =
    exports.subAccountDeposit =
    exports.fieldDeposit =
    exports.basicDeposit =
        void 0
var support_1 = require('../support')
exports.basicDeposit = {
    /**
     *  The amount held on deposit for a registered identity
     */
    matrixEnjinV1000: new support_1.ConstantType('Identity.BasicDeposit', support_1.sts.bigint()),
}
exports.fieldDeposit = {
    /**
     *  The amount held on deposit per additional field for a registered identity.
     */
    matrixEnjinV1000: new support_1.ConstantType('Identity.FieldDeposit', support_1.sts.bigint()),
}
exports.subAccountDeposit = {
    /**
     *  The amount held on deposit for a registered subaccount. This should account for the fact
     *  that one storage item's value will increase by the size of an account ID, and there will
     *  be another trie item whose value is the size of an account ID plus 32 bytes.
     */
    matrixEnjinV1000: new support_1.ConstantType('Identity.SubAccountDeposit', support_1.sts.bigint()),
}
exports.maxSubAccounts = {
    /**
     *  The maximum number of sub-accounts allowed per identified account.
     */
    matrixEnjinV1000: new support_1.ConstantType('Identity.MaxSubAccounts', support_1.sts.number()),
}
exports.maxAdditionalFields = {
    /**
     *  Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
     *  required to access an identity, but can be pretty high.
     */
    matrixEnjinV1000: new support_1.ConstantType('Identity.MaxAdditionalFields', support_1.sts.number()),
}
exports.maxRegistrars = {
    /**
     *  Maxmimum number of registrars allowed in the system. Needed to bound the complexity
     *  of, e.g., updating judgements.
     */
    matrixEnjinV1000: new support_1.ConstantType('Identity.MaxRegistrars', support_1.sts.number()),
}
exports.byteDeposit = {
    /**
     *  The amount held on deposit per encoded byte for a registered identity.
     */
    matrixEnjinV1012: new support_1.ConstantType('Identity.ByteDeposit', support_1.sts.bigint()),
}
exports.pendingUsernameExpiration = {
    /**
     *  The number of blocks within which a username grant must be accepted.
     */
    matrixEnjinV1012: new support_1.ConstantType('Identity.PendingUsernameExpiration', support_1.sts.number()),
}
exports.maxSuffixLength = {
    /**
     *  The maximum length of a suffix.
     */
    matrixEnjinV1012: new support_1.ConstantType('Identity.MaxSuffixLength', support_1.sts.number()),
}
exports.maxUsernameLength = {
    /**
     *  The maximum length of a username, including its suffix and any system-added delimiters.
     */
    matrixEnjinV1012: new support_1.ConstantType('Identity.MaxUsernameLength', support_1.sts.number()),
}
