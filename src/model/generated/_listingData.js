"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromJsonListingData = fromJsonListingData;
var _fixedPriceData_1 = require("./_fixedPriceData");
var _auctionData_1 = require("./_auctionData");
var _offerData_1 = require("./_offerData");
function fromJsonListingData(json) {
    switch (json === null || json === void 0 ? void 0 : json.isTypeOf) {
        case 'FixedPriceData': return new _fixedPriceData_1.FixedPriceData(undefined, json);
        case 'AuctionData': return new _auctionData_1.AuctionData(undefined, json);
        case 'OfferData': return new _offerData_1.OfferData(undefined, json);
        default: throw new TypeError('Unknown json object passed as ListingData');
    }
}
