'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.deliveryFeeFactor = exports.downwardMessageQueueHeads = exports.downwardMessageQueues = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.downwardMessageQueues = {
    /**
     *  The downward messages addressed for a certain para.
     */
    enjinV100: new support_1.StorageType(
        'Dmp.DownwardMessageQueues',
        'Default',
        [enjinV100.Id],
        support_1.sts.array(function () {
            return enjinV100.InboundDownwardMessage
        })
    ),
}
exports.downwardMessageQueueHeads = {
    /**
     *  A mapping that stores the downward message queue MQC head for each para.
     *
     *  Each link in this chain has a form:
     *  `(prev_head, B, H(M))`, where
     *  - `prev_head`: is the previous head hash or zero if none.
     *  - `B`: is the relay-chain block number in which a message was appended.
     *  - `H(M)`: is the hash of the message being appended.
     */
    enjinV100: new support_1.StorageType('Dmp.DownwardMessageQueueHeads', 'Default', [enjinV100.Id], enjinV100.H256),
}
exports.deliveryFeeFactor = {
    /**
     *  The number to multiply the base delivery fee by.
     */
    enjinV100: new support_1.StorageType('Dmp.DeliveryFeeFactor', 'Default', [enjinV100.Id], enjinV100.FixedU128),
}
