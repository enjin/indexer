'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.totalIssuanceForced =
    exports.thawed =
    exports.frozen =
    exports.unlocked =
    exports.locked =
    exports.rescinded =
    exports.issued =
    exports.upgraded =
    exports.restored =
    exports.suspended =
    exports.burned =
    exports.minted =
    exports.slashed =
    exports.withdraw =
    exports.deposit =
    exports.reserveRepatriated =
    exports.unreserved =
    exports.reserved =
    exports.balanceSet =
    exports.transfer =
    exports.dustLost =
    exports.endowed =
        void 0
var support_1 = require('../support')
var v100 = require('../v100')
var v104 = require('../v104')
var matrixV500 = require('../matrixV500')
var matrixV602 = require('../matrixV602')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.endowed = {
    name: 'Balances.Endowed',
    /**
     * An account was created with some free balance.
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Endowed',
        support_1.sts.struct({
            account: matrixEnjinV603.AccountId32,
            freeBalance: support_1.sts.bigint(),
        })
    ),
}
exports.dustLost = {
    name: 'Balances.DustLost',
    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.DustLost',
        support_1.sts.struct({
            account: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.transfer = {
    name: 'Balances.Transfer',
    /**
     * Transfer succeeded.
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Transfer',
        support_1.sts.struct({
            from: matrixEnjinV603.AccountId32,
            to: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.balanceSet = {
    name: 'Balances.BalanceSet',
    /**
     * A balance was set by root.
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.BalanceSet',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            free: support_1.sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    matrixV500: new support_1.EventType(
        'Balances.BalanceSet',
        support_1.sts.struct({
            who: matrixV500.AccountId32,
            free: support_1.sts.bigint(),
            reserved: support_1.sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    matrixV602: new support_1.EventType(
        'Balances.BalanceSet',
        support_1.sts.struct({
            who: matrixV602.AccountId32,
            free: support_1.sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v100: new support_1.EventType(
        'Balances.BalanceSet',
        support_1.sts.struct({
            who: v100.AccountId32,
            free: support_1.sts.bigint(),
            reserved: support_1.sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v104: new support_1.EventType(
        'Balances.BalanceSet',
        support_1.sts.struct({
            who: v104.AccountId32,
            free: support_1.sts.bigint(),
        })
    ),
}
exports.reserved = {
    name: 'Balances.Reserved',
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Reserved',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.unreserved = {
    name: 'Balances.Unreserved',
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Unreserved',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.reserveRepatriated = {
    name: 'Balances.ReserveRepatriated',
    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.ReserveRepatriated',
        support_1.sts.struct({
            from: matrixEnjinV603.AccountId32,
            to: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
            destinationStatus: matrixEnjinV603.BalanceStatus,
        })
    ),
}
exports.deposit = {
    name: 'Balances.Deposit',
    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Deposit',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.withdraw = {
    name: 'Balances.Withdraw',
    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Withdraw',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.slashed = {
    name: 'Balances.Slashed',
    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Slashed',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.minted = {
    name: 'Balances.Minted',
    /**
     * Some amount was minted into an account.
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Minted',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.burned = {
    name: 'Balances.Burned',
    /**
     * Some amount was burned from an account.
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Burned',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.suspended = {
    name: 'Balances.Suspended',
    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Suspended',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.restored = {
    name: 'Balances.Restored',
    /**
     * Some amount was restored into an account.
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Restored',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.upgraded = {
    name: 'Balances.Upgraded',
    /**
     * An account was upgraded.
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Upgraded',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.issued = {
    name: 'Balances.Issued',
    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Issued',
        support_1.sts.struct({
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.rescinded = {
    name: 'Balances.Rescinded',
    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Rescinded',
        support_1.sts.struct({
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.locked = {
    name: 'Balances.Locked',
    /**
     * Some balance was locked.
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Locked',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.unlocked = {
    name: 'Balances.Unlocked',
    /**
     * Some balance was unlocked.
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Unlocked',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.frozen = {
    name: 'Balances.Frozen',
    /**
     * Some balance was frozen.
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Frozen',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.thawed = {
    name: 'Balances.Thawed',
    /**
     * Some balance was thawed.
     */
    matrixEnjinV603: new support_1.EventType(
        'Balances.Thawed',
        support_1.sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.totalIssuanceForced = {
    name: 'Balances.TotalIssuanceForced',
    /**
     * The `TotalIssuance` was forcefully changed.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Balances.TotalIssuanceForced',
        support_1.sts.struct({
            old: support_1.sts.bigint(),
            new: support_1.sts.bigint(),
        })
    ),
}
