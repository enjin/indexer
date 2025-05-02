'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.announcementDepositFactor =
    exports.announcementDepositBase =
    exports.maxPending =
    exports.maxProxies =
    exports.proxyDepositFactor =
    exports.proxyDepositBase =
        void 0
var support_1 = require('../support')
exports.proxyDepositBase = {
    /**
     *  The base amount of currency needed to reserve for creating a proxy.
     *
     *  This is held for an additional storage item whose value size is
     *  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
     */
    matrixEnjinV1012: new support_1.ConstantType('Proxy.ProxyDepositBase', support_1.sts.bigint()),
}
exports.proxyDepositFactor = {
    /**
     *  The amount of currency needed per proxy added.
     *
     *  This is held for adding 32 bytes plus an instance of `ProxyType` more into a
     *  pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
     *  into account `32 + proxy_type.encode().len()` bytes of data.
     */
    matrixEnjinV1012: new support_1.ConstantType('Proxy.ProxyDepositFactor', support_1.sts.bigint()),
}
exports.maxProxies = {
    /**
     *  The maximum amount of proxies allowed for a single account.
     */
    matrixEnjinV1012: new support_1.ConstantType('Proxy.MaxProxies', support_1.sts.number()),
}
exports.maxPending = {
    /**
     *  The maximum amount of time-delayed announcements that are allowed to be pending.
     */
    matrixEnjinV1012: new support_1.ConstantType('Proxy.MaxPending', support_1.sts.number()),
}
exports.announcementDepositBase = {
    /**
     *  The base amount of currency needed to reserve for creating an announcement.
     *
     *  This is held when a new storage item holding a `Balance` is created (typically 16
     *  bytes).
     */
    matrixEnjinV1012: new support_1.ConstantType('Proxy.AnnouncementDepositBase', support_1.sts.bigint()),
}
exports.announcementDepositFactor = {
    /**
     *  The amount of currency needed per announcement made.
     *
     *  This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
     *  into a pre-existing storage value.
     */
    matrixEnjinV1012: new support_1.ConstantType('Proxy.AnnouncementDepositFactor', support_1.sts.bigint()),
}
