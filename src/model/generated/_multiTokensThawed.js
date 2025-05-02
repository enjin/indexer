"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensThawed = void 0;
var marshal = require("./marshal");
var MultiTokensThawed = /** @class */ (function () {
    function MultiTokensThawed(props, json) {
        this.isTypeOf = 'MultiTokensThawed';
        Object.assign(this, props);
        if (json != null) {
            this._extrinsic = json.extrinsic == null ? undefined : marshal.string.fromJSON(json.extrinsic);
        }
    }
    Object.defineProperty(MultiTokensThawed.prototype, "extrinsic", {
        get: function () {
            return this._extrinsic;
        },
        set: function (value) {
            this._extrinsic = value;
        },
        enumerable: false,
        configurable: true
    });
    MultiTokensThawed.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            extrinsic: this.extrinsic,
        };
    };
    return MultiTokensThawed;
}());
exports.MultiTokensThawed = MultiTokensThawed;
