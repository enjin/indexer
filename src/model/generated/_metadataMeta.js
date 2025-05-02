"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataMeta = void 0;
var assert_1 = require("assert");
var marshal = require("./marshal");
var MetadataMeta = /** @class */ (function () {
    function MetadataMeta(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._version = marshal.float.fromJSON(json.version);
            this._language = json.language == null ? undefined : marshal.string.fromJSON(json.language);
            this._sensitiveContent = json.sensitiveContent == null ? undefined : marshal.string.fromJSON(json.sensitiveContent);
        }
    }
    Object.defineProperty(MetadataMeta.prototype, "version", {
        get: function () {
            (0, assert_1.default)(this._version != null, 'uninitialized access');
            return this._version;
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MetadataMeta.prototype, "language", {
        get: function () {
            return this._language;
        },
        set: function (value) {
            this._language = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MetadataMeta.prototype, "sensitiveContent", {
        get: function () {
            return this._sensitiveContent;
        },
        set: function (value) {
            this._sensitiveContent = value;
        },
        enumerable: false,
        configurable: true
    });
    MetadataMeta.prototype.toJSON = function () {
        return {
            version: this.version,
            language: this.language,
            sensitiveContent: this.sensitiveContent,
        };
    };
    return MetadataMeta;
}());
exports.MetadataMeta = MetadataMeta;
