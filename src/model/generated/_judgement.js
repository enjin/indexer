"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Judgement = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var _judgementType_1 = require("./_judgementType");
var Judgement = /** @class */ (function () {
    function Judgement(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._index = marshal.int.fromJSON(json.index);
            this._value = marshal.enumFromJson(json.value, _judgementType_1.JudgementType);
            this._createdAt = marshal.datetime.fromJSON(json.createdAt);
        }
    }
    Object.defineProperty(Judgement.prototype, "index", {
        get: function () {
            (0, assert_1.default)(this._index != null, 'uninitialized access');
            return this._index;
        },
        set: function (value) {
            this._index = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Judgement.prototype, "value", {
        get: function () {
            (0, assert_1.default)(this._value != null, 'uninitialized access');
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Judgement.prototype, "createdAt", {
        get: function () {
            (0, assert_1.default)(this._createdAt != null, 'uninitialized access');
            return this._createdAt;
        },
        set: function (value) {
            this._createdAt = value;
        },
        enumerable: false,
        configurable: true
    });
    Judgement.prototype.toJSON = function () {
        return {
            index: this.index,
            value: this.value,
            createdAt: marshal.datetime.toJSON(this.createdAt),
        };
    };
    return Judgement;
}());
exports.Judgement = Judgement;
