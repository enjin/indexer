'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.pages = exports.serviceHead = exports.bookStateFor = void 0
var support_1 = require('../support')
var enjinV101 = require('../enjinV101')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.bookStateFor = {
    /**
     *  The index of the first and last (non-empty) pages.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'MessageQueue.BookStateFor',
        'Default',
        [matrixEnjinV1012.AggregateMessageOrigin],
        matrixEnjinV1012.BookState
    ),
    /**
     *  The index of the first and last (non-empty) pages.
     */
    enjinV101: new support_1.StorageType(
        'MessageQueue.BookStateFor',
        'Default',
        [enjinV101.AggregateMessageOrigin],
        enjinV101.BookState
    ),
}
exports.serviceHead = {
    /**
     *  The origin at which we should begin servicing.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'MessageQueue.ServiceHead',
        'Optional',
        [],
        matrixEnjinV1012.AggregateMessageOrigin
    ),
    /**
     *  The origin at which we should begin servicing.
     */
    enjinV101: new support_1.StorageType('MessageQueue.ServiceHead', 'Optional', [], enjinV101.AggregateMessageOrigin),
}
exports.pages = {
    /**
     *  The map of page indices to pages.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'MessageQueue.Pages',
        'Optional',
        [matrixEnjinV1012.AggregateMessageOrigin, support_1.sts.number()],
        matrixEnjinV1012.Page
    ),
    /**
     *  The map of page indices to pages.
     */
    enjinV101: new support_1.StorageType(
        'MessageQueue.Pages',
        'Optional',
        [enjinV101.AggregateMessageOrigin, support_1.sts.number()],
        enjinV101.Page
    ),
}
