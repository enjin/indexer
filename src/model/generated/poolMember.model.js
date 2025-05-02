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
exports.PoolMember = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var marshal = require("./marshal");
var nominationPool_model_1 = require("./nominationPool.model");
var account_model_1 = require("./account.model");
var tokenAccount_model_1 = require("./tokenAccount.model");
var poolMemberRewards_model_1 = require("./poolMemberRewards.model");
var _unbondingEras_1 = require("./_unbondingEras");
var era_model_1 = require("./era.model");
var PoolMember = function () {
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
    var _account_decorators;
    var _account_initializers = [];
    var _account_extraInitializers = [];
    var _bonded_decorators;
    var _bonded_initializers = [];
    var _bonded_extraInitializers = [];
    var _tokenAccount_decorators;
    var _tokenAccount_initializers = [];
    var _tokenAccount_extraInitializers = [];
    var _rewards_decorators;
    var _rewards_initializers = [];
    var _rewards_extraInitializers = [];
    var _unbondingEras_decorators;
    var _unbondingEras_initializers = [];
    var _unbondingEras_extraInitializers = [];
    var _joinedEra_decorators;
    var _joinedEra_initializers = [];
    var _joinedEra_extraInitializers = [];
    var PoolMember = _classThis = /** @class */ (function () {
        function PoolMember_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.pool = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _pool_initializers, void 0));
            this.account = (__runInitializers(this, _pool_extraInitializers), __runInitializers(this, _account_initializers, void 0));
            this.bonded = (__runInitializers(this, _account_extraInitializers), __runInitializers(this, _bonded_initializers, void 0));
            this.tokenAccount = (__runInitializers(this, _bonded_extraInitializers), __runInitializers(this, _tokenAccount_initializers, void 0));
            this.rewards = (__runInitializers(this, _tokenAccount_extraInitializers), __runInitializers(this, _rewards_initializers, void 0));
            this.unbondingEras = (__runInitializers(this, _rewards_extraInitializers), __runInitializers(this, _unbondingEras_initializers, void 0));
            this.joinedEra = (__runInitializers(this, _unbondingEras_extraInitializers), __runInitializers(this, _joinedEra_initializers, void 0));
            __runInitializers(this, _joinedEra_extraInitializers);
            Object.assign(this, props);
        }
        return PoolMember_1;
    }());
    __setFunctionName(_classThis, "PoolMember");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _pool_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return nominationPool_model_1.NominationPool; }, { nullable: true })];
        _account_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return account_model_1.Account; }, { nullable: true })];
        _bonded_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _tokenAccount_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return tokenAccount_model_1.TokenAccount; }, { nullable: true })];
        _rewards_decorators = [(0, typeorm_store_1.OneToMany)(function () { return poolMemberRewards_model_1.PoolMemberRewards; }, function (e) { return e.member; })];
        _unbondingEras_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.map(function (val) { return val.toJSON(); }); }, from: function (obj) { return obj == null ? undefined : marshal.fromList(obj, function (val) { return new _unbondingEras_1.UnbondingEras(undefined, marshal.nonNull(val)); }); } }, nullable: true })];
        _joinedEra_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return era_model_1.Era; }, { nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _pool_decorators, { kind: "field", name: "pool", static: false, private: false, access: { has: function (obj) { return "pool" in obj; }, get: function (obj) { return obj.pool; }, set: function (obj, value) { obj.pool = value; } }, metadata: _metadata }, _pool_initializers, _pool_extraInitializers);
        __esDecorate(null, null, _account_decorators, { kind: "field", name: "account", static: false, private: false, access: { has: function (obj) { return "account" in obj; }, get: function (obj) { return obj.account; }, set: function (obj, value) { obj.account = value; } }, metadata: _metadata }, _account_initializers, _account_extraInitializers);
        __esDecorate(null, null, _bonded_decorators, { kind: "field", name: "bonded", static: false, private: false, access: { has: function (obj) { return "bonded" in obj; }, get: function (obj) { return obj.bonded; }, set: function (obj, value) { obj.bonded = value; } }, metadata: _metadata }, _bonded_initializers, _bonded_extraInitializers);
        __esDecorate(null, null, _tokenAccount_decorators, { kind: "field", name: "tokenAccount", static: false, private: false, access: { has: function (obj) { return "tokenAccount" in obj; }, get: function (obj) { return obj.tokenAccount; }, set: function (obj, value) { obj.tokenAccount = value; } }, metadata: _metadata }, _tokenAccount_initializers, _tokenAccount_extraInitializers);
        __esDecorate(null, null, _rewards_decorators, { kind: "field", name: "rewards", static: false, private: false, access: { has: function (obj) { return "rewards" in obj; }, get: function (obj) { return obj.rewards; }, set: function (obj, value) { obj.rewards = value; } }, metadata: _metadata }, _rewards_initializers, _rewards_extraInitializers);
        __esDecorate(null, null, _unbondingEras_decorators, { kind: "field", name: "unbondingEras", static: false, private: false, access: { has: function (obj) { return "unbondingEras" in obj; }, get: function (obj) { return obj.unbondingEras; }, set: function (obj, value) { obj.unbondingEras = value; } }, metadata: _metadata }, _unbondingEras_initializers, _unbondingEras_extraInitializers);
        __esDecorate(null, null, _joinedEra_decorators, { kind: "field", name: "joinedEra", static: false, private: false, access: { has: function (obj) { return "joinedEra" in obj; }, get: function (obj) { return obj.joinedEra; }, set: function (obj, value) { obj.joinedEra = value; } }, metadata: _metadata }, _joinedEra_initializers, _joinedEra_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PoolMember = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PoolMember = _classThis;
}();
exports.PoolMember = PoolMember;
