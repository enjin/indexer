'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.clearPrime =
    exports.setPrime =
    exports.changeKey =
    exports.resetMembers =
    exports.swapMember =
    exports.removeMember =
    exports.addMember =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.addMember = {
    name: 'TechnicalMembership.add_member',
    /**
     * Add a member `who` to the set.
     *
     * May only be called from `T::AddOrigin`.
     */
    matrixEnjinV603: new support_1.CallType(
        'TechnicalMembership.add_member',
        support_1.sts.struct({
            who: matrixEnjinV603.MultiAddress,
        })
    ),
}
exports.removeMember = {
    name: 'TechnicalMembership.remove_member',
    /**
     * Remove a member `who` from the set.
     *
     * May only be called from `T::RemoveOrigin`.
     */
    matrixEnjinV603: new support_1.CallType(
        'TechnicalMembership.remove_member',
        support_1.sts.struct({
            who: matrixEnjinV603.MultiAddress,
        })
    ),
}
exports.swapMember = {
    name: 'TechnicalMembership.swap_member',
    /**
     * Swap out one member `remove` for another `add`.
     *
     * May only be called from `T::SwapOrigin`.
     *
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    matrixEnjinV603: new support_1.CallType(
        'TechnicalMembership.swap_member',
        support_1.sts.struct({
            remove: matrixEnjinV603.MultiAddress,
            add: matrixEnjinV603.MultiAddress,
        })
    ),
}
exports.resetMembers = {
    name: 'TechnicalMembership.reset_members',
    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     *
     * May only be called from `T::ResetOrigin`.
     */
    matrixEnjinV603: new support_1.CallType(
        'TechnicalMembership.reset_members',
        support_1.sts.struct({
            members: support_1.sts.array(function () {
                return matrixEnjinV603.AccountId32
            }),
        })
    ),
}
exports.changeKey = {
    name: 'TechnicalMembership.change_key',
    /**
     * Swap out the sending member for some other key `new`.
     *
     * May only be called from `Signed` origin of a current member.
     *
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    matrixEnjinV603: new support_1.CallType(
        'TechnicalMembership.change_key',
        support_1.sts.struct({
            new: matrixEnjinV603.MultiAddress,
        })
    ),
}
exports.setPrime = {
    name: 'TechnicalMembership.set_prime',
    /**
     * Set the prime member. Must be a current member.
     *
     * May only be called from `T::PrimeOrigin`.
     */
    matrixEnjinV603: new support_1.CallType(
        'TechnicalMembership.set_prime',
        support_1.sts.struct({
            who: matrixEnjinV603.MultiAddress,
        })
    ),
}
exports.clearPrime = {
    name: 'TechnicalMembership.clear_prime',
    /**
     * Remove the prime member if it exists.
     *
     * May only be called from `T::PrimeOrigin`.
     */
    matrixEnjinV603: new support_1.CallType('TechnicalMembership.clear_prime', support_1.sts.unit()),
}
