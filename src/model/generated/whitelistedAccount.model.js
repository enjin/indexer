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
exports.WhitelistedAccount = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var account_model_1 = require("./account.model");
var listing_model_1 = require("./listing.model");
var WhitelistedAccount = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _allowance_decorators;
    var _allowance_initializers = [];
    var _allowance_extraInitializers = [];
    var _amountUsed_decorators;
    var _amountUsed_initializers = [];
    var _amountUsed_extraInitializers = [];
    var _deposit_decorators;
    var _deposit_initializers = [];
    var _deposit_extraInitializers = [];
    var _account_decorators;
    var _account_initializers = [];
    var _account_extraInitializers = [];
    var _listing_decorators;
    var _listing_initializers = [];
    var _listing_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var WhitelistedAccount = _classThis = /** @class */ (function () {
        function WhitelistedAccount_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.allowance = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _allowance_initializers, void 0));
            this.amountUsed = (__runInitializers(this, _allowance_extraInitializers), __runInitializers(this, _amountUsed_initializers, void 0));
            this.deposit = (__runInitializers(this, _amountUsed_extraInitializers), __runInitializers(this, _deposit_initializers, void 0));
            this.account = (__runInitializers(this, _deposit_extraInitializers), __runInitializers(this, _account_initializers, void 0));
            this.listing = (__runInitializers(this, _account_extraInitializers), __runInitializers(this, _listing_initializers, void 0));
            this.createdAt = (__runInitializers(this, _listing_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
            __runInitializers(this, _updatedAt_extraInitializers);
            Object.assign(this, props);
        }
        return WhitelistedAccount_1;
    }());
    __setFunctionName(_classThis, "WhitelistedAccount");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _allowance_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        _amountUsed_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        _deposit_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _account_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return account_model_1.Account; }, { nullable: true })];
        _listing_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return listing_model_1.Listing; }, { nullable: true })];
        _createdAt_decorators = [(0, typeorm_store_1.DateTimeColumn)({ nullable: false })];
        _updatedAt_decorators = [(0, typeorm_store_1.DateTimeColumn)({ nullable: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _allowance_decorators, { kind: "field", name: "allowance", static: false, private: false, access: { has: function (obj) { return "allowance" in obj; }, get: function (obj) { return obj.allowance; }, set: function (obj, value) { obj.allowance = value; } }, metadata: _metadata }, _allowance_initializers, _allowance_extraInitializers);
        __esDecorate(null, null, _amountUsed_decorators, { kind: "field", name: "amountUsed", static: false, private: false, access: { has: function (obj) { return "amountUsed" in obj; }, get: function (obj) { return obj.amountUsed; }, set: function (obj, value) { obj.amountUsed = value; } }, metadata: _metadata }, _amountUsed_initializers, _amountUsed_extraInitializers);
        __esDecorate(null, null, _deposit_decorators, { kind: "field", name: "deposit", static: false, private: false, access: { has: function (obj) { return "deposit" in obj; }, get: function (obj) { return obj.deposit; }, set: function (obj, value) { obj.deposit = value; } }, metadata: _metadata }, _deposit_initializers, _deposit_extraInitializers);
        __esDecorate(null, null, _account_decorators, { kind: "field", name: "account", static: false, private: false, access: { has: function (obj) { return "account" in obj; }, get: function (obj) { return obj.account; }, set: function (obj, value) { obj.account = value; } }, metadata: _metadata }, _account_initializers, _account_extraInitializers);
        __esDecorate(null, null, _listing_decorators, { kind: "field", name: "listing", static: false, private: false, access: { has: function (obj) { return "listing" in obj; }, get: function (obj) { return obj.listing; }, set: function (obj, value) { obj.listing = value; } }, metadata: _metadata }, _listing_initializers, _listing_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WhitelistedAccount = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WhitelistedAccount = _classThis;
}();
exports.WhitelistedAccount = WhitelistedAccount;
