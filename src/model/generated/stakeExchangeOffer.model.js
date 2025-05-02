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
exports.StakeExchangeOffer = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var account_model_1 = require("./account.model");
var stakeExchangeTokenFilter_model_1 = require("./stakeExchangeTokenFilter.model");
var StakeExchangeOffer = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _offerId_decorators;
    var _offerId_initializers = [];
    var _offerId_extraInitializers = [];
    var _state_decorators;
    var _state_initializers = [];
    var _state_extraInitializers = [];
    var _account_decorators;
    var _account_initializers = [];
    var _account_extraInitializers = [];
    var _total_decorators;
    var _total_initializers = [];
    var _total_extraInitializers = [];
    var _rate_decorators;
    var _rate_initializers = [];
    var _rate_extraInitializers = [];
    var _minAverageRewardRate_decorators;
    var _minAverageRewardRate_initializers = [];
    var _minAverageRewardRate_extraInitializers = [];
    var _tokenFilter_decorators;
    var _tokenFilter_initializers = [];
    var _tokenFilter_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _createdBlock_decorators;
    var _createdBlock_initializers = [];
    var _createdBlock_extraInitializers = [];
    var StakeExchangeOffer = _classThis = /** @class */ (function () {
        function StakeExchangeOffer_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.offerId = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _offerId_initializers, void 0));
            this.state = (__runInitializers(this, _offerId_extraInitializers), __runInitializers(this, _state_initializers, void 0));
            this.account = (__runInitializers(this, _state_extraInitializers), __runInitializers(this, _account_initializers, void 0));
            this.total = (__runInitializers(this, _account_extraInitializers), __runInitializers(this, _total_initializers, void 0));
            this.rate = (__runInitializers(this, _total_extraInitializers), __runInitializers(this, _rate_initializers, void 0));
            this.minAverageRewardRate = (__runInitializers(this, _rate_extraInitializers), __runInitializers(this, _minAverageRewardRate_initializers, void 0));
            this.tokenFilter = (__runInitializers(this, _minAverageRewardRate_extraInitializers), __runInitializers(this, _tokenFilter_initializers, void 0));
            this.createdAt = (__runInitializers(this, _tokenFilter_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            this.createdBlock = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _createdBlock_initializers, void 0));
            __runInitializers(this, _createdBlock_extraInitializers);
            Object.assign(this, props);
        }
        return StakeExchangeOffer_1;
    }());
    __setFunctionName(_classThis, "StakeExchangeOffer");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _offerId_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _state_decorators = [(0, typeorm_store_1.Column)("varchar", { length: 9, nullable: false })];
        _account_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return account_model_1.Account; }, { nullable: true })];
        _total_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _rate_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _minAverageRewardRate_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _tokenFilter_decorators = [(0, typeorm_store_1.OneToOne)(function () { return stakeExchangeTokenFilter_model_1.StakeExchangeTokenFilter; }, function (e) { return e.offer; })];
        _createdAt_decorators = [(0, typeorm_store_1.DateTimeColumn)({ nullable: false })];
        _createdBlock_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _offerId_decorators, { kind: "field", name: "offerId", static: false, private: false, access: { has: function (obj) { return "offerId" in obj; }, get: function (obj) { return obj.offerId; }, set: function (obj, value) { obj.offerId = value; } }, metadata: _metadata }, _offerId_initializers, _offerId_extraInitializers);
        __esDecorate(null, null, _state_decorators, { kind: "field", name: "state", static: false, private: false, access: { has: function (obj) { return "state" in obj; }, get: function (obj) { return obj.state; }, set: function (obj, value) { obj.state = value; } }, metadata: _metadata }, _state_initializers, _state_extraInitializers);
        __esDecorate(null, null, _account_decorators, { kind: "field", name: "account", static: false, private: false, access: { has: function (obj) { return "account" in obj; }, get: function (obj) { return obj.account; }, set: function (obj, value) { obj.account = value; } }, metadata: _metadata }, _account_initializers, _account_extraInitializers);
        __esDecorate(null, null, _total_decorators, { kind: "field", name: "total", static: false, private: false, access: { has: function (obj) { return "total" in obj; }, get: function (obj) { return obj.total; }, set: function (obj, value) { obj.total = value; } }, metadata: _metadata }, _total_initializers, _total_extraInitializers);
        __esDecorate(null, null, _rate_decorators, { kind: "field", name: "rate", static: false, private: false, access: { has: function (obj) { return "rate" in obj; }, get: function (obj) { return obj.rate; }, set: function (obj, value) { obj.rate = value; } }, metadata: _metadata }, _rate_initializers, _rate_extraInitializers);
        __esDecorate(null, null, _minAverageRewardRate_decorators, { kind: "field", name: "minAverageRewardRate", static: false, private: false, access: { has: function (obj) { return "minAverageRewardRate" in obj; }, get: function (obj) { return obj.minAverageRewardRate; }, set: function (obj, value) { obj.minAverageRewardRate = value; } }, metadata: _metadata }, _minAverageRewardRate_initializers, _minAverageRewardRate_extraInitializers);
        __esDecorate(null, null, _tokenFilter_decorators, { kind: "field", name: "tokenFilter", static: false, private: false, access: { has: function (obj) { return "tokenFilter" in obj; }, get: function (obj) { return obj.tokenFilter; }, set: function (obj, value) { obj.tokenFilter = value; } }, metadata: _metadata }, _tokenFilter_initializers, _tokenFilter_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _createdBlock_decorators, { kind: "field", name: "createdBlock", static: false, private: false, access: { has: function (obj) { return "createdBlock" in obj; }, get: function (obj) { return obj.createdBlock; }, set: function (obj, value) { obj.createdBlock = value; } }, metadata: _metadata }, _createdBlock_initializers, _createdBlock_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StakeExchangeOffer = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StakeExchangeOffer = _classThis;
}();
exports.StakeExchangeOffer = StakeExchangeOffer;
