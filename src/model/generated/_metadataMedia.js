"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataMedia = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MetadataMedia = /** @class */ (function () {
    function MetadataMedia(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._url = marshal.string.fromJSON(json.url);
            this._alt = json.alt == null ? undefined : marshal.string.fromJSON(json.alt);
            this._type = json.type == null ? undefined : marshal.string.fromJSON(json.type);
        }
    }
    Object.defineProperty(MetadataMedia.prototype, "url", {
        get: function () {
            (0, assert_1.default)(this._url != null, 'uninitialized access');
            return this._url;
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MetadataMedia.prototype, "alt", {
        get: function () {
            return this._alt;
        },
        set: function (value) {
            this._alt = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MetadataMedia.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    MetadataMedia.prototype.toJSON = function () {
        return {
            url: this.url,
            alt: this.alt,
            type: this.type,
        };
    };
    return MetadataMedia;
}());
exports.MetadataMedia = MetadataMedia;
