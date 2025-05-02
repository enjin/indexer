"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionApproval = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var CollectionApproval = /** @class */ (function () {
    function CollectionApproval(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._accountId = marshal.string.fromJSON(json.accountId);
            this._expiration = json.expiration == null ? undefined : marshal.int.fromJSON(json.expiration);
        }
    }
    Object.defineProperty(CollectionApproval.prototype, "accountId", {
        get: function () {
            (0, assert_1.default)(this._accountId != null, 'uninitialized access');
            return this._accountId;
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionApproval.prototype, "expiration", {
        get: function () {
            return this._expiration;
        },
        set: function (value) {
            this._expiration = value;
        },
        enumerable: false,
        configurable: true
    });
    CollectionApproval.prototype.toJSON = function () {
        return {
            accountId: this.accountId,
            expiration: this.expiration,
        };
    };
    return CollectionApproval;
}());
exports.CollectionApproval = CollectionApproval;
