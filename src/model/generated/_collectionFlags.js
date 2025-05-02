"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionFlags = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var CollectionFlags = /** @class */ (function () {
    function CollectionFlags(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._hiddenForLegalReasons = marshal.boolean.fromJSON(json.hiddenForLegalReasons);
            this._featured = marshal.boolean.fromJSON(json.featured);
        }
    }
    Object.defineProperty(CollectionFlags.prototype, "hiddenForLegalReasons", {
        get: function () {
            (0, assert_1.default)(this._hiddenForLegalReasons != null, 'uninitialized access');
            return this._hiddenForLegalReasons;
        },
        set: function (value) {
            this._hiddenForLegalReasons = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionFlags.prototype, "featured", {
        get: function () {
            (0, assert_1.default)(this._featured != null, 'uninitialized access');
            return this._featured;
        },
        set: function (value) {
            this._featured = value;
        },
        enumerable: false,
        configurable: true
    });
    CollectionFlags.prototype.toJSON = function () {
        return {
            hiddenForLegalReasons: this.hiddenForLegalReasons,
            featured: this.featured,
        };
    };
    return CollectionFlags;
}());
exports.CollectionFlags = CollectionFlags;
