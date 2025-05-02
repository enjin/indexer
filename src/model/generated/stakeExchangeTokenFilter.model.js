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
exports.StakeExchangeTokenFilter = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var account_model_1 = require("./account.model");
var stakeExchangeOffer_model_1 = require("./stakeExchangeOffer.model");
var StakeExchangeTokenFilter = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _value_decorators;
    var _value_initializers = [];
    var _value_extraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _account_decorators;
    var _account_initializers = [];
    var _account_extraInitializers = [];
    var _offer_decorators;
    var _offer_initializers = [];
    var _offer_extraInitializers = [];
    var StakeExchangeTokenFilter = _classThis = /** @class */ (function () {
        function StakeExchangeTokenFilter_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.value = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _value_initializers, void 0));
            this.type = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _type_initializers, void 0));
            this.account = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _account_initializers, void 0));
            this.offer = (__runInitializers(this, _account_extraInitializers), __runInitializers(this, _offer_initializers, void 0));
            __runInitializers(this, _offer_extraInitializers);
            Object.assign(this, props);
        }
        return StakeExchangeTokenFilter_1;
    }());
    __setFunctionName(_classThis, "StakeExchangeTokenFilter");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _value_decorators = [(0, typeorm_store_1.StringColumn)({ array: true, nullable: true })];
        _type_decorators = [(0, typeorm_store_1.Column)("varchar", { length: 9, nullable: false })];
        _account_decorators = [(0, typeorm_store_1.Index)({ unique: true }), (0, typeorm_store_1.OneToOne)(function () { return account_model_1.Account; }, { nullable: true }), (0, typeorm_store_1.JoinColumn)()];
        _offer_decorators = [(0, typeorm_store_1.Index)({ unique: true }), (0, typeorm_store_1.OneToOne)(function () { return stakeExchangeOffer_model_1.StakeExchangeOffer; }, { nullable: true }), (0, typeorm_store_1.JoinColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _value_decorators, { kind: "field", name: "value", static: false, private: false, access: { has: function (obj) { return "value" in obj; }, get: function (obj) { return obj.value; }, set: function (obj, value) { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
        __esDecorate(null, null, _account_decorators, { kind: "field", name: "account", static: false, private: false, access: { has: function (obj) { return "account" in obj; }, get: function (obj) { return obj.account; }, set: function (obj, value) { obj.account = value; } }, metadata: _metadata }, _account_initializers, _account_extraInitializers);
        __esDecorate(null, null, _offer_decorators, { kind: "field", name: "offer", static: false, private: false, access: { has: function (obj) { return "offer" in obj; }, get: function (obj) { return obj.offer; }, set: function (obj, value) { obj.offer = value; } }, metadata: _metadata }, _offer_initializers, _offer_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StakeExchangeTokenFilter = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StakeExchangeTokenFilter = _classThis;
}();
exports.StakeExchangeTokenFilter = StakeExchangeTokenFilter;
