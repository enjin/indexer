"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTokensFrozen = void 0;
var marshal = require("./marshal");
var MultiTokensFrozen = /** @class */ (function () {
    function MultiTokensFrozen(props, json) {
        this.isTypeOf = 'MultiTokensFrozen';
        Object.assign(this, props);
        if (json != null) {
            this._extrinsic = json.extrinsic == null ? undefined : marshal.string.fromJSON(json.extrinsic);
        }
    }
    Object.defineProperty(MultiTokensFrozen.prototype, "extrinsic", {
        get: function () {
            return this._extrinsic;
        },
        set: function (value) {
            this._extrinsic = value;
        },
        enumerable: false,
        configurable: true
    });
    MultiTokensFrozen.prototype.toJSON = function () {
        return {
            isTypeOf: this.isTypeOf,
            extrinsic: this.extrinsic,
        };
    };
    return MultiTokensFrozen;
}());
exports.MultiTokensFrozen = MultiTokensFrozen;
