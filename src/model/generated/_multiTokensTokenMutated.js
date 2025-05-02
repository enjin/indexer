"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensTokenMutated = void 0;
var marshal = require("./marshal");
var MultiTokensTokenMutated = /** @class */ (function () {
    function MultiTokensTokenMutated(props, json) {
        this.isTypeOf = 'MultiTokensTokenMutated';
        Object.assign(this, props);
        if (json != null) {
            this._extrinsic = json.extrinsic == null ? undefined : marshal.string.fromJSON(json.extrinsic);
        }
    }
    Object.defineProperty(MultiTokensTokenMutated.prototype, "extrinsic", {
        get: function () {
            return this._extrinsic;
        },
        set: function (value) {
            this._extrinsic = value;
        },
        enumerable: false,
        configurable: true
    });
    MultiTokensTokenMutated.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            extrinsic: this.extrinsic,
        };
    };
    return MultiTokensTokenMutated;
}());
exports.MultiTokensTokenMutated = MultiTokensTokenMutated;
