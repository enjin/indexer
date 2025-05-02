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
exports.CounterOffer = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var account_model_1 = require("./account.model");
var listing_model_1 = require("./listing.model");
var CounterOffer = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _sellerPrice_decorators;
    var _sellerPrice_initializers = [];
    var _sellerPrice_extraInitializers = [];
    var _buyerPrice_decorators;
    var _buyerPrice_initializers = [];
    var _buyerPrice_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _account_decorators;
    var _account_initializers = [];
    var _account_extraInitializers = [];
    var _listing_decorators;
    var _listing_initializers = [];
    var _listing_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _lastAction_decorators;
    var _lastAction_initializers = [];
    var _lastAction_extraInitializers = [];
    var CounterOffer = _classThis = /** @class */ (function () {
        function CounterOffer_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.sellerPrice = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _sellerPrice_initializers, void 0));
            this.buyerPrice = (__runInitializers(this, _sellerPrice_extraInitializers), __runInitializers(this, _buyerPrice_initializers, void 0));
            this.amount = (__runInitializers(this, _buyerPrice_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
            this.account = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _account_initializers, void 0));
            this.listing = (__runInitializers(this, _account_extraInitializers), __runInitializers(this, _listing_initializers, void 0));
            this.createdAt = (__runInitializers(this, _listing_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            this.lastAction = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _lastAction_initializers, void 0));
            __runInitializers(this, _lastAction_extraInitializers);
            Object.assign(this, props);
        }
        return CounterOffer_1;
    }());
    __setFunctionName(_classThis, "CounterOffer");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _sellerPrice_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: true })];
        _buyerPrice_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: true })];
        _amount_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _account_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return account_model_1.Account; }, { nullable: true })];
        _listing_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return listing_model_1.Listing; }, { nullable: true })];
        _createdAt_decorators = [(0, typeorm_store_1.DateTimeColumn)({ nullable: false })];
        _lastAction_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return account_model_1.Account; }, { nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _sellerPrice_decorators, { kind: "field", name: "sellerPrice", static: false, private: false, access: { has: function (obj) { return "sellerPrice" in obj; }, get: function (obj) { return obj.sellerPrice; }, set: function (obj, value) { obj.sellerPrice = value; } }, metadata: _metadata }, _sellerPrice_initializers, _sellerPrice_extraInitializers);
        __esDecorate(null, null, _buyerPrice_decorators, { kind: "field", name: "buyerPrice", static: false, private: false, access: { has: function (obj) { return "buyerPrice" in obj; }, get: function (obj) { return obj.buyerPrice; }, set: function (obj, value) { obj.buyerPrice = value; } }, metadata: _metadata }, _buyerPrice_initializers, _buyerPrice_extraInitializers);
        __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
        __esDecorate(null, null, _account_decorators, { kind: "field", name: "account", static: false, private: false, access: { has: function (obj) { return "account" in obj; }, get: function (obj) { return obj.account; }, set: function (obj, value) { obj.account = value; } }, metadata: _metadata }, _account_initializers, _account_extraInitializers);
        __esDecorate(null, null, _listing_decorators, { kind: "field", name: "listing", static: false, private: false, access: { has: function (obj) { return "listing" in obj; }, get: function (obj) { return obj.listing; }, set: function (obj, value) { obj.listing = value; } }, metadata: _metadata }, _listing_initializers, _listing_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _lastAction_decorators, { kind: "field", name: "lastAction", static: false, private: false, access: { has: function (obj) { return "lastAction" in obj; }, get: function (obj) { return obj.lastAction; }, set: function (obj, value) { obj.lastAction = value; } }, metadata: _metadata }, _lastAction_initializers, _lastAction_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CounterOffer = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CounterOffer = _classThis;
}();
exports.CounterOffer = CounterOffer;
