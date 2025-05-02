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
exports.Claim = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var account_model_1 = require("./account.model");
var Claim = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _account_decorators;
    var _account_initializers = [];
    var _account_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _efiSum_decorators;
    var _efiSum_initializers = [];
    var _efiSum_extraInitializers = [];
    var _enjSum_decorators;
    var _enjSum_initializers = [];
    var _enjSum_extraInitializers = [];
    var _count_decorators;
    var _count_initializers = [];
    var _count_extraInitializers = [];
    var Claim = _classThis = /** @class */ (function () {
        function Claim_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.account = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _account_initializers, void 0));
            this.amount = (__runInitializers(this, _account_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
            this.efiSum = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _efiSum_initializers, void 0));
            this.enjSum = (__runInitializers(this, _efiSum_extraInitializers), __runInitializers(this, _enjSum_initializers, void 0));
            this.count = (__runInitializers(this, _enjSum_extraInitializers), __runInitializers(this, _count_initializers, void 0));
            __runInitializers(this, _count_extraInitializers);
            Object.assign(this, props);
        }
        return Claim_1;
    }());
    __setFunctionName(_classThis, "Claim");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _account_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return account_model_1.Account; }, { nullable: true })];
        _amount_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _efiSum_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _enjSum_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _count_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _account_decorators, { kind: "field", name: "account", static: false, private: false, access: { has: function (obj) { return "account" in obj; }, get: function (obj) { return obj.account; }, set: function (obj, value) { obj.account = value; } }, metadata: _metadata }, _account_initializers, _account_extraInitializers);
        __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
        __esDecorate(null, null, _efiSum_decorators, { kind: "field", name: "efiSum", static: false, private: false, access: { has: function (obj) { return "efiSum" in obj; }, get: function (obj) { return obj.efiSum; }, set: function (obj, value) { obj.efiSum = value; } }, metadata: _metadata }, _efiSum_initializers, _efiSum_extraInitializers);
        __esDecorate(null, null, _enjSum_decorators, { kind: "field", name: "enjSum", static: false, private: false, access: { has: function (obj) { return "enjSum" in obj; }, get: function (obj) { return obj.enjSum; }, set: function (obj, value) { obj.enjSum = value; } }, metadata: _metadata }, _enjSum_initializers, _enjSum_extraInitializers);
        __esDecorate(null, null, _count_decorators, { kind: "field", name: "count", static: false, private: false, access: { has: function (obj) { return "count" in obj; }, get: function (obj) { return obj.count; }, set: function (obj, value) { obj.count = value; } }, metadata: _metadata }, _count_initializers, _count_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Claim = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Claim = _classThis;
}();
exports.Claim = Claim;
