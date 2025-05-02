"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromJsonListingState = fromJsonListingState;
var _fixedPriceState_1 = require("./_fixedPriceState");
var _auctionState_1 = require("./_auctionState");
var _offerState_1 = require("./_offerState");
function fromJsonListingState(json) {
    switch (json === null || json === void 0 ? void 0 : json.isTypeOf) {
        case 'FixedPriceState': return new _fixedPriceState_1.FixedPriceState(undefined, json);
        case 'AuctionState': return new _auctionState_1.AuctionState(undefined, json);
        case 'OfferState': return new _offerState_1.OfferState(undefined, json);
        default: throw new TypeError('Unknown json object passed as ListingState');
    }
}
