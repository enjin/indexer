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
exports.TokenAccount = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var marshal = require("./marshal");
var _tokenNamedReserve_1 = require("./_tokenNamedReserve");
var _tokenLock_1 = require("./_tokenLock");
var _tokenApproval_1 = require("./_tokenApproval");
var account_model_1 = require("./account.model");
var collection_model_1 = require("./collection.model");
var token_model_1 = require("./token.model");
var TokenAccount = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _totalBalance_decorators;
    var _totalBalance_initializers = [];
    var _totalBalance_extraInitializers = [];
    var _balance_decorators;
    var _balance_initializers = [];
    var _balance_extraInitializers = [];
    var _reservedBalance_decorators;
    var _reservedBalance_initializers = [];
    var _reservedBalance_extraInitializers = [];
    var _lockedBalance_decorators;
    var _lockedBalance_initializers = [];
    var _lockedBalance_extraInitializers = [];
    var _namedReserves_decorators;
    var _namedReserves_initializers = [];
    var _namedReserves_extraInitializers = [];
    var _locks_decorators;
    var _locks_initializers = [];
    var _locks_extraInitializers = [];
    var _approvals_decorators;
    var _approvals_initializers = [];
    var _approvals_extraInitializers = [];
    var _isFrozen_decorators;
    var _isFrozen_initializers = [];
    var _isFrozen_extraInitializers = [];
    var _account_decorators;
    var _account_initializers = [];
    var _account_extraInitializers = [];
    var _collection_decorators;
    var _collection_initializers = [];
    var _collection_extraInitializers = [];
    var _token_decorators;
    var _token_initializers = [];
    var _token_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var TokenAccount = _classThis = /** @class */ (function () {
        function TokenAccount_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.totalBalance = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _totalBalance_initializers, void 0));
            this.balance = (__runInitializers(this, _totalBalance_extraInitializers), __runInitializers(this, _balance_initializers, void 0));
            this.reservedBalance = (__runInitializers(this, _balance_extraInitializers), __runInitializers(this, _reservedBalance_initializers, void 0));
            this.lockedBalance = (__runInitializers(this, _reservedBalance_extraInitializers), __runInitializers(this, _lockedBalance_initializers, void 0));
            this.namedReserves = (__runInitializers(this, _lockedBalance_extraInitializers), __runInitializers(this, _namedReserves_initializers, void 0));
            this.locks = (__runInitializers(this, _namedReserves_extraInitializers), __runInitializers(this, _locks_initializers, void 0));
            this.approvals = (__runInitializers(this, _locks_extraInitializers), __runInitializers(this, _approvals_initializers, void 0));
            this.isFrozen = (__runInitializers(this, _approvals_extraInitializers), __runInitializers(this, _isFrozen_initializers, void 0));
            this.account = (__runInitializers(this, _isFrozen_extraInitializers), __runInitializers(this, _account_initializers, void 0));
            this.collection = (__runInitializers(this, _account_extraInitializers), __runInitializers(this, _collection_initializers, void 0));
            this.token = (__runInitializers(this, _collection_extraInitializers), __runInitializers(this, _token_initializers, void 0));
            this.createdAt = (__runInitializers(this, _token_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
            __runInitializers(this, _updatedAt_extraInitializers);
            Object.assign(this, props);
        }
        return TokenAccount_1;
    }());
    __setFunctionName(_classThis, "TokenAccount");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _totalBalance_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _balance_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _reservedBalance_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _lockedBalance_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _namedReserves_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.map(function (val) { return val.toJSON(); }); }, from: function (obj) { return obj == null ? undefined : marshal.fromList(obj, function (val) { return new _tokenNamedReserve_1.TokenNamedReserve(undefined, marshal.nonNull(val)); }); } }, nullable: true })];
        _locks_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.map(function (val) { return val.toJSON(); }); }, from: function (obj) { return obj == null ? undefined : marshal.fromList(obj, function (val) { return new _tokenLock_1.TokenLock(undefined, marshal.nonNull(val)); }); } }, nullable: true })];
        _approvals_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.map(function (val) { return val.toJSON(); }); }, from: function (obj) { return obj == null ? undefined : marshal.fromList(obj, function (val) { return new _tokenApproval_1.TokenApproval(undefined, marshal.nonNull(val)); }); } }, nullable: true })];
        _isFrozen_decorators = [(0, typeorm_store_1.BooleanColumn)({ nullable: false })];
        _account_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return account_model_1.Account; }, { nullable: true })];
        _collection_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return collection_model_1.Collection; }, { nullable: true })];
        _token_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return token_model_1.Token; }, { nullable: true })];
        _createdAt_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.DateTimeColumn)({ nullable: false })];
        _updatedAt_decorators = [(0, typeorm_store_1.DateTimeColumn)({ nullable: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _totalBalance_decorators, { kind: "field", name: "totalBalance", static: false, private: false, access: { has: function (obj) { return "totalBalance" in obj; }, get: function (obj) { return obj.totalBalance; }, set: function (obj, value) { obj.totalBalance = value; } }, metadata: _metadata }, _totalBalance_initializers, _totalBalance_extraInitializers);
        __esDecorate(null, null, _balance_decorators, { kind: "field", name: "balance", static: false, private: false, access: { has: function (obj) { return "balance" in obj; }, get: function (obj) { return obj.balance; }, set: function (obj, value) { obj.balance = value; } }, metadata: _metadata }, _balance_initializers, _balance_extraInitializers);
        __esDecorate(null, null, _reservedBalance_decorators, { kind: "field", name: "reservedBalance", static: false, private: false, access: { has: function (obj) { return "reservedBalance" in obj; }, get: function (obj) { return obj.reservedBalance; }, set: function (obj, value) { obj.reservedBalance = value; } }, metadata: _metadata }, _reservedBalance_initializers, _reservedBalance_extraInitializers);
        __esDecorate(null, null, _lockedBalance_decorators, { kind: "field", name: "lockedBalance", static: false, private: false, access: { has: function (obj) { return "lockedBalance" in obj; }, get: function (obj) { return obj.lockedBalance; }, set: function (obj, value) { obj.lockedBalance = value; } }, metadata: _metadata }, _lockedBalance_initializers, _lockedBalance_extraInitializers);
        __esDecorate(null, null, _namedReserves_decorators, { kind: "field", name: "namedReserves", static: false, private: false, access: { has: function (obj) { return "namedReserves" in obj; }, get: function (obj) { return obj.namedReserves; }, set: function (obj, value) { obj.namedReserves = value; } }, metadata: _metadata }, _namedReserves_initializers, _namedReserves_extraInitializers);
        __esDecorate(null, null, _locks_decorators, { kind: "field", name: "locks", static: false, private: false, access: { has: function (obj) { return "locks" in obj; }, get: function (obj) { return obj.locks; }, set: function (obj, value) { obj.locks = value; } }, metadata: _metadata }, _locks_initializers, _locks_extraInitializers);
        __esDecorate(null, null, _approvals_decorators, { kind: "field", name: "approvals", static: false, private: false, access: { has: function (obj) { return "approvals" in obj; }, get: function (obj) { return obj.approvals; }, set: function (obj, value) { obj.approvals = value; } }, metadata: _metadata }, _approvals_initializers, _approvals_extraInitializers);
        __esDecorate(null, null, _isFrozen_decorators, { kind: "field", name: "isFrozen", static: false, private: false, access: { has: function (obj) { return "isFrozen" in obj; }, get: function (obj) { return obj.isFrozen; }, set: function (obj, value) { obj.isFrozen = value; } }, metadata: _metadata }, _isFrozen_initializers, _isFrozen_extraInitializers);
        __esDecorate(null, null, _account_decorators, { kind: "field", name: "account", static: false, private: false, access: { has: function (obj) { return "account" in obj; }, get: function (obj) { return obj.account; }, set: function (obj, value) { obj.account = value; } }, metadata: _metadata }, _account_initializers, _account_extraInitializers);
        __esDecorate(null, null, _collection_decorators, { kind: "field", name: "collection", static: false, private: false, access: { has: function (obj) { return "collection" in obj; }, get: function (obj) { return obj.collection; }, set: function (obj, value) { obj.collection = value; } }, metadata: _metadata }, _collection_initializers, _collection_extraInitializers);
        __esDecorate(null, null, _token_decorators, { kind: "field", name: "token", static: false, private: false, access: { has: function (obj) { return "token" in obj; }, get: function (obj) { return obj.token; }, set: function (obj, value) { obj.token = value; } }, metadata: _metadata }, _token_initializers, _token_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TokenAccount = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TokenAccount = _classThis;
}();
exports.TokenAccount = TokenAccount;
