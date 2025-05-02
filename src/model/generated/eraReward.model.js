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
exports.EraReward = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var nominationPool_model_1 = require("./nominationPool.model");
var era_model_1 = require("./era.model");
var _commissionPayment_1 = require("./_commissionPayment");
var poolMemberRewards_model_1 = require("./poolMemberRewards.model");
var EraReward = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _pool_decorators;
    var _pool_initializers = [];
    var _pool_extraInitializers = [];
    var _era_decorators;
    var _era_initializers = [];
    var _era_extraInitializers = [];
    var _rate_decorators;
    var _rate_initializers = [];
    var _rate_extraInitializers = [];
    var _changeInRate_decorators;
    var _changeInRate_initializers = [];
    var _changeInRate_extraInitializers = [];
    var _active_decorators;
    var _active_initializers = [];
    var _active_extraInitializers = [];
    var _commission_decorators;
    var _commission_initializers = [];
    var _commission_extraInitializers = [];
    var _bonus_decorators;
    var _bonus_initializers = [];
    var _bonus_extraInitializers = [];
    var _reinvested_decorators;
    var _reinvested_initializers = [];
    var _reinvested_extraInitializers = [];
    var _apy_decorators;
    var _apy_initializers = [];
    var _apy_extraInitializers = [];
    var _averageApy_decorators;
    var _averageApy_initializers = [];
    var _averageApy_extraInitializers = [];
    var _memberRewards_decorators;
    var _memberRewards_initializers = [];
    var _memberRewards_extraInitializers = [];
    var EraReward = _classThis = /** @class */ (function () {
        function EraReward_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.pool = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _pool_initializers, void 0));
            this.era = (__runInitializers(this, _pool_extraInitializers), __runInitializers(this, _era_initializers, void 0));
            this.rate = (__runInitializers(this, _era_extraInitializers), __runInitializers(this, _rate_initializers, void 0));
            this.changeInRate = (__runInitializers(this, _rate_extraInitializers), __runInitializers(this, _changeInRate_initializers, void 0));
            this.active = (__runInitializers(this, _changeInRate_extraInitializers), __runInitializers(this, _active_initializers, void 0));
            this.commission = (__runInitializers(this, _active_extraInitializers), __runInitializers(this, _commission_initializers, void 0));
            this.bonus = (__runInitializers(this, _commission_extraInitializers), __runInitializers(this, _bonus_initializers, void 0));
            this.reinvested = (__runInitializers(this, _bonus_extraInitializers), __runInitializers(this, _reinvested_initializers, void 0));
            this.apy = (__runInitializers(this, _reinvested_extraInitializers), __runInitializers(this, _apy_initializers, void 0));
            this.averageApy = (__runInitializers(this, _apy_extraInitializers), __runInitializers(this, _averageApy_initializers, void 0));
            this.memberRewards = (__runInitializers(this, _averageApy_extraInitializers), __runInitializers(this, _memberRewards_initializers, void 0));
            __runInitializers(this, _memberRewards_extraInitializers);
            Object.assign(this, props);
        }
        return EraReward_1;
    }());
    __setFunctionName(_classThis, "EraReward");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _pool_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return nominationPool_model_1.NominationPool; }, { nullable: true })];
        _era_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return era_model_1.Era; }, { nullable: true })];
        _rate_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _changeInRate_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _active_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _commission_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.toJSON(); }, from: function (obj) { return obj == null ? undefined : new _commissionPayment_1.CommissionPayment(undefined, obj); } }, nullable: true })];
        _bonus_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _reinvested_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _apy_decorators = [(0, typeorm_store_1.FloatColumn)({ nullable: false })];
        _averageApy_decorators = [(0, typeorm_store_1.FloatColumn)({ nullable: false })];
        _memberRewards_decorators = [(0, typeorm_store_1.OneToMany)(function () { return poolMemberRewards_model_1.PoolMemberRewards; }, function (e) { return e.reward; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _pool_decorators, { kind: "field", name: "pool", static: false, private: false, access: { has: function (obj) { return "pool" in obj; }, get: function (obj) { return obj.pool; }, set: function (obj, value) { obj.pool = value; } }, metadata: _metadata }, _pool_initializers, _pool_extraInitializers);
        __esDecorate(null, null, _era_decorators, { kind: "field", name: "era", static: false, private: false, access: { has: function (obj) { return "era" in obj; }, get: function (obj) { return obj.era; }, set: function (obj, value) { obj.era = value; } }, metadata: _metadata }, _era_initializers, _era_extraInitializers);
        __esDecorate(null, null, _rate_decorators, { kind: "field", name: "rate", static: false, private: false, access: { has: function (obj) { return "rate" in obj; }, get: function (obj) { return obj.rate; }, set: function (obj, value) { obj.rate = value; } }, metadata: _metadata }, _rate_initializers, _rate_extraInitializers);
        __esDecorate(null, null, _changeInRate_decorators, { kind: "field", name: "changeInRate", static: false, private: false, access: { has: function (obj) { return "changeInRate" in obj; }, get: function (obj) { return obj.changeInRate; }, set: function (obj, value) { obj.changeInRate = value; } }, metadata: _metadata }, _changeInRate_initializers, _changeInRate_extraInitializers);
        __esDecorate(null, null, _active_decorators, { kind: "field", name: "active", static: false, private: false, access: { has: function (obj) { return "active" in obj; }, get: function (obj) { return obj.active; }, set: function (obj, value) { obj.active = value; } }, metadata: _metadata }, _active_initializers, _active_extraInitializers);
        __esDecorate(null, null, _commission_decorators, { kind: "field", name: "commission", static: false, private: false, access: { has: function (obj) { return "commission" in obj; }, get: function (obj) { return obj.commission; }, set: function (obj, value) { obj.commission = value; } }, metadata: _metadata }, _commission_initializers, _commission_extraInitializers);
        __esDecorate(null, null, _bonus_decorators, { kind: "field", name: "bonus", static: false, private: false, access: { has: function (obj) { return "bonus" in obj; }, get: function (obj) { return obj.bonus; }, set: function (obj, value) { obj.bonus = value; } }, metadata: _metadata }, _bonus_initializers, _bonus_extraInitializers);
        __esDecorate(null, null, _reinvested_decorators, { kind: "field", name: "reinvested", static: false, private: false, access: { has: function (obj) { return "reinvested" in obj; }, get: function (obj) { return obj.reinvested; }, set: function (obj, value) { obj.reinvested = value; } }, metadata: _metadata }, _reinvested_initializers, _reinvested_extraInitializers);
        __esDecorate(null, null, _apy_decorators, { kind: "field", name: "apy", static: false, private: false, access: { has: function (obj) { return "apy" in obj; }, get: function (obj) { return obj.apy; }, set: function (obj, value) { obj.apy = value; } }, metadata: _metadata }, _apy_initializers, _apy_extraInitializers);
        __esDecorate(null, null, _averageApy_decorators, { kind: "field", name: "averageApy", static: false, private: false, access: { has: function (obj) { return "averageApy" in obj; }, get: function (obj) { return obj.averageApy; }, set: function (obj, value) { obj.averageApy = value; } }, metadata: _metadata }, _averageApy_initializers, _averageApy_extraInitializers);
        __esDecorate(null, null, _memberRewards_decorators, { kind: "field", name: "memberRewards", static: false, private: false, access: { has: function (obj) { return "memberRewards" in obj; }, get: function (obj) { return obj.memberRewards; }, set: function (obj, value) { obj.memberRewards = value; } }, metadata: _metadata }, _memberRewards_initializers, _memberRewards_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EraReward = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EraReward = _classThis;
}();
exports.EraReward = EraReward;
