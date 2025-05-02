"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionSocials = void 0;
var marshal = require("./marshal");
var CollectionSocials = /** @class */ (function () {
    function CollectionSocials(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._twitter = json.twitter == null ? undefined : marshal.string.fromJSON(json.twitter);
            this._discord = json.discord == null ? undefined : marshal.string.fromJSON(json.discord);
            this._instagram = json.instagram == null ? undefined : marshal.string.fromJSON(json.instagram);
            this._website = json.website == null ? undefined : marshal.string.fromJSON(json.website);
            this._medium = json.medium == null ? undefined : marshal.string.fromJSON(json.medium);
            this._tiktok = json.tiktok == null ? undefined : marshal.string.fromJSON(json.tiktok);
        }
    }
    Object.defineProperty(CollectionSocials.prototype, "twitter", {
        get: function () {
            return this._twitter;
        },
        set: function (value) {
            this._twitter = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionSocials.prototype, "discord", {
        get: function () {
            return this._discord;
        },
        set: function (value) {
            this._discord = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionSocials.prototype, "instagram", {
        get: function () {
            return this._instagram;
        },
        set: function (value) {
            this._instagram = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionSocials.prototype, "website", {
        get: function () {
            return this._website;
        },
        set: function (value) {
            this._website = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionSocials.prototype, "medium", {
        get: function () {
            return this._medium;
        },
        set: function (value) {
            this._medium = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionSocials.prototype, "tiktok", {
        get: function () {
            return this._tiktok;
        },
        set: function (value) {
            this._tiktok = value;
        },
        enumerable: false,
        configurable: true
    });
    CollectionSocials.prototype.toJSON = function () {
        return {
            twitter: this.twitter,
            discord: this.discord,
            instagram: this.instagram,
            website: this.website,
            medium: this.medium,
            tiktok: this.tiktok,
        };
    };
    return CollectionSocials;
}());
exports.CollectionSocials = CollectionSocials;
