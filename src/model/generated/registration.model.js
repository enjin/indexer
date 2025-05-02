"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registration = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var marshal = require("./marshal");
var account_model_1 = require("./account.model");
var _judgement_1 = require("./_judgement");
var Registration = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _deposit_decorators;
    var _deposit_initializers = [];
    var _deposit_extraInitializers = [];
    var _account_decorators;
    var _account_initializers = [];
    var _account_extraInitializers = [];
    var _judgements_decorators;
    var _judgements_initializers = [];
    var _judgements_extraInitializers = [];
    var _currentJudgement_decorators;
    var _currentJudgement_initializers = [];
    var _currentJudgement_extraInitializers = [];
    var _additional_decorators;
    var _additional_initializers = [];
    var _additional_extraInitializers = [];
    var _display_decorators;
    var _display_initializers = [];
    var _display_extraInitializers = [];
    var _legal_decorators;
    var _legal_initializers = [];
    var _legal_extraInitializers = [];
    var _web_decorators;
    var _web_initializers = [];
    var _web_extraInitializers = [];
    var _riot_decorators;
    var _riot_initializers = [];
    var _riot_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _pgpFingerprint_decorators;
    var _pgpFingerprint_initializers = [];
    var _pgpFingerprint_extraInitializers = [];
    var _image_decorators;
    var _image_initializers = [];
    var _image_extraInitializers = [];
    var _twitter_decorators;
    var _twitter_initializers = [];
    var _twitter_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var Registration = _classThis = /** @class */ (function () {
        function Registration_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.deposit = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _deposit_initializers, void 0));
            this.account = (__runInitializers(this, _deposit_extraInitializers), __runInitializers(this, _account_initializers, void 0));
            this.judgements = (__runInitializers(this, _account_extraInitializers), __runInitializers(this, _judgements_initializers, void 0));
            this.currentJudgement = (__runInitializers(this, _judgements_extraInitializers), __runInitializers(this, _currentJudgement_initializers, void 0));
            this.additional = (__runInitializers(this, _currentJudgement_extraInitializers), __runInitializers(this, _additional_initializers, void 0));
            this.display = (__runInitializers(this, _additional_extraInitializers), __runInitializers(this, _display_initializers, void 0));
            this.legal = (__runInitializers(this, _display_extraInitializers), __runInitializers(this, _legal_initializers, void 0));
            this.web = (__runInitializers(this, _legal_extraInitializers), __runInitializers(this, _web_initializers, void 0));
            this.riot = (__runInitializers(this, _web_extraInitializers), __runInitializers(this, _riot_initializers, void 0));
            this.email = (__runInitializers(this, _riot_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.pgpFingerprint = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _pgpFingerprint_initializers, void 0));
            this.image = (__runInitializers(this, _pgpFingerprint_extraInitializers), __runInitializers(this, _image_initializers, void 0));
            this.twitter = (__runInitializers(this, _image_extraInitializers), __runInitializers(this, _twitter_initializers, void 0));
            this.createdAt = (__runInitializers(this, _twitter_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            __runInitializers(this, _createdAt_extraInitializers);
            Object.assign(this, props);
        }
        return Registration_1;
    }());
    __setFunctionName(_classThis, "Registration");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _deposit_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _account_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return account_model_1.Account; }, { nullable: true })];
        _judgements_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.map(function (val) { return val.toJSON(); }); }, from: function (obj) { return obj == null ? undefined : marshal.fromList(obj, function (val) { return new _judgement_1.Judgement(undefined, marshal.nonNull(val)); }); } }, nullable: true })];
        _currentJudgement_decorators = [(0, typeorm_store_1.Column)("varchar", { length: 10, nullable: false })];
        _additional_decorators = [(0, typeorm_store_1.JSONColumn)({ nullable: true })];
        _display_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: true })];
        _legal_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: true })];
        _web_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: true })];
        _riot_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: true })];
        _email_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: true })];
        _pgpFingerprint_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: true })];
        _image_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: true })];
        _twitter_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: true })];
        _createdAt_decorators = [(0, typeorm_store_1.DateTimeColumn)({ nullable: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _deposit_decorators, { kind: "field", name: "deposit", static: false, private: false, access: { has: function (obj) { return "deposit" in obj; }, get: function (obj) { return obj.deposit; }, set: function (obj, value) { obj.deposit = value; } }, metadata: _metadata }, _deposit_initializers, _deposit_extraInitializers);
        __esDecorate(null, null, _account_decorators, { kind: "field", name: "account", static: false, private: false, access: { has: function (obj) { return "account" in obj; }, get: function (obj) { return obj.account; }, set: function (obj, value) { obj.account = value; } }, metadata: _metadata }, _account_initializers, _account_extraInitializers);
        __esDecorate(null, null, _judgements_decorators, { kind: "field", name: "judgements", static: false, private: false, access: { has: function (obj) { return "judgements" in obj; }, get: function (obj) { return obj.judgements; }, set: function (obj, value) { obj.judgements = value; } }, metadata: _metadata }, _judgements_initializers, _judgements_extraInitializers);
        __esDecorate(null, null, _currentJudgement_decorators, { kind: "field", name: "currentJudgement", static: false, private: false, access: { has: function (obj) { return "currentJudgement" in obj; }, get: function (obj) { return obj.currentJudgement; }, set: function (obj, value) { obj.currentJudgement = value; } }, metadata: _metadata }, _currentJudgement_initializers, _currentJudgement_extraInitializers);
        __esDecorate(null, null, _additional_decorators, { kind: "field", name: "additional", static: false, private: false, access: { has: function (obj) { return "additional" in obj; }, get: function (obj) { return obj.additional; }, set: function (obj, value) { obj.additional = value; } }, metadata: _metadata }, _additional_initializers, _additional_extraInitializers);
        __esDecorate(null, null, _display_decorators, { kind: "field", name: "display", static: false, private: false, access: { has: function (obj) { return "display" in obj; }, get: function (obj) { return obj.display; }, set: function (obj, value) { obj.display = value; } }, metadata: _metadata }, _display_initializers, _display_extraInitializers);
        __esDecorate(null, null, _legal_decorators, { kind: "field", name: "legal", static: false, private: false, access: { has: function (obj) { return "legal" in obj; }, get: function (obj) { return obj.legal; }, set: function (obj, value) { obj.legal = value; } }, metadata: _metadata }, _legal_initializers, _legal_extraInitializers);
        __esDecorate(null, null, _web_decorators, { kind: "field", name: "web", static: false, private: false, access: { has: function (obj) { return "web" in obj; }, get: function (obj) { return obj.web; }, set: function (obj, value) { obj.web = value; } }, metadata: _metadata }, _web_initializers, _web_extraInitializers);
        __esDecorate(null, null, _riot_decorators, { kind: "field", name: "riot", static: false, private: false, access: { has: function (obj) { return "riot" in obj; }, get: function (obj) { return obj.riot; }, set: function (obj, value) { obj.riot = value; } }, metadata: _metadata }, _riot_initializers, _riot_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _pgpFingerprint_decorators, { kind: "field", name: "pgpFingerprint", static: false, private: false, access: { has: function (obj) { return "pgpFingerprint" in obj; }, get: function (obj) { return obj.pgpFingerprint; }, set: function (obj, value) { obj.pgpFingerprint = value; } }, metadata: _metadata }, _pgpFingerprint_initializers, _pgpFingerprint_extraInitializers);
        __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: function (obj) { return "image" in obj; }, get: function (obj) { return obj.image; }, set: function (obj, value) { obj.image = value; } }, metadata: _metadata }, _image_initializers, _image_extraInitializers);
        __esDecorate(null, null, _twitter_decorators, { kind: "field", name: "twitter", static: false, private: false, access: { has: function (obj) { return "twitter" in obj; }, get: function (obj) { return obj.twitter; }, set: function (obj, value) { obj.twitter = value; } }, metadata: _metadata }, _twitter_initializers, _twitter_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Registration = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Registration = _classThis;
}();
exports.Registration = Registration;
