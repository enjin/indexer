"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferPolicy = void 0;
var marshal = require("./marshal");
var TransferPolicy = /** @class */ (function () {
    function TransferPolicy(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._isFrozen = json.isFrozen == null ? undefined : marshal.boolean.fromJSON(json.isFrozen);
        }
    }
    Object.defineProperty(TransferPolicy.prototype, "isFrozen", {
        get: function () {
            return this._isFrozen;
        },
        set: function (value) {
            this._isFrozen = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferPolicy.prototype.toJSON = function () {
        return {
            isFrozen: this.isFrozen,
        };
    };
    return TransferPolicy;
}());
exports.TransferPolicy = TransferPolicy;
