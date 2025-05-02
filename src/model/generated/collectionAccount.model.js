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
exports.CollectionAccount = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var marshal = require("./marshal");
var _collectionApproval_1 = require("./_collectionApproval");
var account_model_1 = require("./account.model");
var collection_model_1 = require("./collection.model");
var CollectionAccount = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _isFrozen_decorators;
    var _isFrozen_initializers = [];
    var _isFrozen_extraInitializers = [];
    var _approvals_decorators;
    var _approvals_initializers = [];
    var _approvals_extraInitializers = [];
    var _accountCount_decorators;
    var _accountCount_initializers = [];
    var _accountCount_extraInitializers = [];
    var _account_decorators;
    var _account_initializers = [];
    var _account_extraInitializers = [];
    var _collection_decorators;
    var _collection_initializers = [];
    var _collection_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var CollectionAccount = _classThis = /** @class */ (function () {
        function CollectionAccount_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.isFrozen = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _isFrozen_initializers, void 0));
            this.approvals = (__runInitializers(this, _isFrozen_extraInitializers), __runInitializers(this, _approvals_initializers, void 0));
            this.accountCount = (__runInitializers(this, _approvals_extraInitializers), __runInitializers(this, _accountCount_initializers, void 0));
            this.account = (__runInitializers(this, _accountCount_extraInitializers), __runInitializers(this, _account_initializers, void 0));
            this.collection = (__runInitializers(this, _account_extraInitializers), __runInitializers(this, _collection_initializers, void 0));
            this.createdAt = (__runInitializers(this, _collection_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
            __runInitializers(this, _updatedAt_extraInitializers);
            Object.assign(this, props);
        }
        return CollectionAccount_1;
    }());
    __setFunctionName(_classThis, "CollectionAccount");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _isFrozen_decorators = [(0, typeorm_store_1.BooleanColumn)({ nullable: false })];
        _approvals_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.map(function (val) { return val.toJSON(); }); }, from: function (obj) { return obj == null ? undefined : marshal.fromList(obj, function (val) { return new _collectionApproval_1.CollectionApproval(undefined, marshal.nonNull(val)); }); } }, nullable: true })];
        _accountCount_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        _account_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return account_model_1.Account; }, { nullable: true })];
        _collection_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return collection_model_1.Collection; }, { nullable: true })];
        _createdAt_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.DateTimeColumn)({ nullable: false })];
        _updatedAt_decorators = [(0, typeorm_store_1.DateTimeColumn)({ nullable: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _isFrozen_decorators, { kind: "field", name: "isFrozen", static: false, private: false, access: { has: function (obj) { return "isFrozen" in obj; }, get: function (obj) { return obj.isFrozen; }, set: function (obj, value) { obj.isFrozen = value; } }, metadata: _metadata }, _isFrozen_initializers, _isFrozen_extraInitializers);
        __esDecorate(null, null, _approvals_decorators, { kind: "field", name: "approvals", static: false, private: false, access: { has: function (obj) { return "approvals" in obj; }, get: function (obj) { return obj.approvals; }, set: function (obj, value) { obj.approvals = value; } }, metadata: _metadata }, _approvals_initializers, _approvals_extraInitializers);
        __esDecorate(null, null, _accountCount_decorators, { kind: "field", name: "accountCount", static: false, private: false, access: { has: function (obj) { return "accountCount" in obj; }, get: function (obj) { return obj.accountCount; }, set: function (obj, value) { obj.accountCount = value; } }, metadata: _metadata }, _accountCount_initializers, _accountCount_extraInitializers);
        __esDecorate(null, null, _account_decorators, { kind: "field", name: "account", static: false, private: false, access: { has: function (obj) { return "account" in obj; }, get: function (obj) { return obj.account; }, set: function (obj, value) { obj.account = value; } }, metadata: _metadata }, _account_initializers, _account_extraInitializers);
        __esDecorate(null, null, _collection_decorators, { kind: "field", name: "collection", static: false, private: false, access: { has: function (obj) { return "collection" in obj; }, get: function (obj) { return obj.collection; }, set: function (obj, value) { obj.collection = value; } }, metadata: _metadata }, _collection_initializers, _collection_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CollectionAccount = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CollectionAccount = _classThis;
}();
exports.CollectionAccount = CollectionAccount;
