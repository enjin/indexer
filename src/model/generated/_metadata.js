"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = void 0;
var marshal = require("./marshal");
var _metadataMedia_1 = require("./_metadataMedia");
var _metadataMeta_1 = require("./_metadataMeta");
var _metadataOriginType_1 = require("./_metadataOriginType");
var Metadata = /** @class */ (function () {
    function Metadata(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._name = json.name == null ? undefined : marshal.string.fromJSON(json.name);
            this._description = json.description == null ? undefined : marshal.string.fromJSON(json.description);
            this._externalUrl = json.externalUrl == null ? undefined : marshal.string.fromJSON(json.externalUrl);
            this._keywords = json.keywords == null ? undefined : marshal.fromList(json.keywords, function (val) { return val == null ? undefined : marshal.string.fromJSON(val); });
            this._fallbackImage = json.fallbackImage == null ? undefined : marshal.string.fromJSON(json.fallbackImage);
            this._media = json.media == null ? undefined : marshal.fromList(json.media, function (val) { return val == null ? undefined : new _metadataMedia_1.MetadataMedia(undefined, val); });
            this._meta = json.meta == null ? undefined : new _metadataMeta_1.MetadataMeta(undefined, json.meta);
            this._originUrl = json.originUrl == null ? undefined : marshal.string.fromJSON(json.originUrl);
            this._originType = json.originType == null ? undefined : marshal.enumFromJson(json.originType, _metadataOriginType_1.MetadataOriginType);
            this._lastUpdated = json.lastUpdated == null ? undefined : marshal.datetime.fromJSON(json.lastUpdated);
            this._attributes = json.attributes;
        }
    }
    Object.defineProperty(Metadata.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "externalUrl", {
        get: function () {
            return this._externalUrl;
        },
        set: function (value) {
            this._externalUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "keywords", {
        get: function () {
            return this._keywords;
        },
        set: function (value) {
            this._keywords = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "fallbackImage", {
        get: function () {
            return this._fallbackImage;
        },
        set: function (value) {
            this._fallbackImage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "media", {
        get: function () {
            return this._media;
        },
        set: function (value) {
            this._media = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        set: function (value) {
            this._meta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "originUrl", {
        get: function () {
            return this._originUrl;
        },
        set: function (value) {
            this._originUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "originType", {
        get: function () {
            return this._originType;
        },
        set: function (value) {
            this._originType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "lastUpdated", {
        get: function () {
            return this._lastUpdated;
        },
        set: function (value) {
            this._lastUpdated = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "attributes", {
        get: function () {
            return this._attributes;
        },
        set: function (value) {
            this._attributes = value;
        },
        enumerable: false,
        configurable: true
    });
    Metadata.prototype.toJSON = function () {
        return {
            name: this.name,
            description: this.description,
            externalUrl: this.externalUrl,
            keywords: this.keywords,
            fallbackImage: this.fallbackImage,
            media: this.media == null ? undefined : this.media.map(function (val) { return val == null ? undefined : val.toJSON(); }),
            meta: this.meta == null ? undefined : this.meta.toJSON(),
            originUrl: this.originUrl,
            originType: this.originType,
            lastUpdated: this.lastUpdated == null ? undefined : marshal.datetime.toJSON(this.lastUpdated),
            attributes: this.attributes,
        };
    };
    return Metadata;
}());
exports.Metadata = Metadata;
