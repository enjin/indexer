'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.dummy =
    exports.keyChanged =
    exports.membersReset =
    exports.membersSwapped =
    exports.memberRemoved =
    exports.memberAdded =
        void 0
var support_1 = require('../support')
exports.memberAdded = {
    name: 'TechnicalMembership.MemberAdded',
    /**
     * The given member was added; see the transaction for who.
     */
    matrixEnjinV603: new support_1.EventType('TechnicalMembership.MemberAdded', support_1.sts.unit()),
}
exports.memberRemoved = {
    name: 'TechnicalMembership.MemberRemoved',
    /**
     * The given member was removed; see the transaction for who.
     */
    matrixEnjinV603: new support_1.EventType('TechnicalMembership.MemberRemoved', support_1.sts.unit()),
}
exports.membersSwapped = {
    name: 'TechnicalMembership.MembersSwapped',
    /**
     * Two members were swapped; see the transaction for who.
     */
    matrixEnjinV603: new support_1.EventType('TechnicalMembership.MembersSwapped', support_1.sts.unit()),
}
exports.membersReset = {
    name: 'TechnicalMembership.MembersReset',
    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    matrixEnjinV603: new support_1.EventType('TechnicalMembership.MembersReset', support_1.sts.unit()),
}
exports.keyChanged = {
    name: 'TechnicalMembership.KeyChanged',
    /**
     * One of the members' keys changed.
     */
    matrixEnjinV603: new support_1.EventType('TechnicalMembership.KeyChanged', support_1.sts.unit()),
}
exports.dummy = {
    name: 'TechnicalMembership.Dummy',
    /**
     * Phantom member, never used.
     */
    matrixEnjinV603: new support_1.EventType('TechnicalMembership.Dummy', support_1.sts.unit()),
}
