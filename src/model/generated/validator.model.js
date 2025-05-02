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
exports.Validator = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var account_model_1 = require("./account.model");
var poolValidator_model_1 = require("./poolValidator.model");
var Validator = function () {
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
    var _commission_decorators;
    var _commission_initializers = [];
    var _commission_extraInitializers = [];
    var _blocked_decorators;
    var _blocked_initializers = [];
    var _blocked_extraInitializers = [];
    var _nodeCount28d_decorators;
    var _nodeCount28d_initializers = [];
    var _nodeCount28d_extraInitializers = [];
    var _commission28d_decorators;
    var _commission28d_initializers = [];
    var _commission28d_extraInitializers = [];
    var _blockProduction28d_decorators;
    var _blockProduction28d_initializers = [];
    var _blockProduction28d_extraInitializers = [];
    var _slashes84d_decorators;
    var _slashes84d_initializers = [];
    var _slashes84d_extraInitializers = [];
    var _peerCommission28d_decorators;
    var _peerCommission28d_initializers = [];
    var _peerCommission28d_extraInitializers = [];
    var _grade_decorators;
    var _grade_initializers = [];
    var _grade_extraInitializers = [];
    var _pools_decorators;
    var _pools_initializers = [];
    var _pools_extraInitializers = [];
    var Validator = _classThis = /** @class */ (function () {
        function Validator_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.account = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _account_initializers, void 0));
            this.commission = (__runInitializers(this, _account_extraInitializers), __runInitializers(this, _commission_initializers, void 0));
            this.blocked = (__runInitializers(this, _commission_extraInitializers), __runInitializers(this, _blocked_initializers, void 0));
            this.nodeCount28d = (__runInitializers(this, _blocked_extraInitializers), __runInitializers(this, _nodeCount28d_initializers, void 0));
            this.commission28d = (__runInitializers(this, _nodeCount28d_extraInitializers), __runInitializers(this, _commission28d_initializers, void 0));
            this.blockProduction28d = (__runInitializers(this, _commission28d_extraInitializers), __runInitializers(this, _blockProduction28d_initializers, void 0));
            this.slashes84d = (__runInitializers(this, _blockProduction28d_extraInitializers), __runInitializers(this, _slashes84d_initializers, void 0));
            this.peerCommission28d = (__runInitializers(this, _slashes84d_extraInitializers), __runInitializers(this, _peerCommission28d_initializers, void 0));
            this.grade = (__runInitializers(this, _peerCommission28d_extraInitializers), __runInitializers(this, _grade_initializers, void 0));
            this.pools = (__runInitializers(this, _grade_extraInitializers), __runInitializers(this, _pools_initializers, void 0));
            __runInitializers(this, _pools_extraInitializers);
            Object.assign(this, props);
        }
        return Validator_1;
    }());
    __setFunctionName(_classThis, "Validator");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _account_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return account_model_1.Account; }, { nullable: true })];
        _commission_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: true })];
        _blocked_decorators = [(0, typeorm_store_1.BooleanColumn)({ nullable: true })];
        _nodeCount28d_decorators = [(0, typeorm_store_1.IntColumn)({ array: true, nullable: false })];
        _commission28d_decorators = [(0, typeorm_store_1.IntColumn)({ array: true, nullable: false })];
        _blockProduction28d_decorators = [(0, typeorm_store_1.IntColumn)({ array: true, nullable: false })];
        _slashes84d_decorators = [(0, typeorm_store_1.BooleanColumn)({ array: true, nullable: false })];
        _peerCommission28d_decorators = [(0, typeorm_store_1.IntColumn)({ array: true, nullable: false })];
        _grade_decorators = [(0, typeorm_store_1.Column)("varchar", { length: 1, nullable: true })];
        _pools_decorators = [(0, typeorm_store_1.OneToMany)(function () { return poolValidator_model_1.PoolValidator; }, function (e) { return e.validator; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _account_decorators, { kind: "field", name: "account", static: false, private: false, access: { has: function (obj) { return "account" in obj; }, get: function (obj) { return obj.account; }, set: function (obj, value) { obj.account = value; } }, metadata: _metadata }, _account_initializers, _account_extraInitializers);
        __esDecorate(null, null, _commission_decorators, { kind: "field", name: "commission", static: false, private: false, access: { has: function (obj) { return "commission" in obj; }, get: function (obj) { return obj.commission; }, set: function (obj, value) { obj.commission = value; } }, metadata: _metadata }, _commission_initializers, _commission_extraInitializers);
        __esDecorate(null, null, _blocked_decorators, { kind: "field", name: "blocked", static: false, private: false, access: { has: function (obj) { return "blocked" in obj; }, get: function (obj) { return obj.blocked; }, set: function (obj, value) { obj.blocked = value; } }, metadata: _metadata }, _blocked_initializers, _blocked_extraInitializers);
        __esDecorate(null, null, _nodeCount28d_decorators, { kind: "field", name: "nodeCount28d", static: false, private: false, access: { has: function (obj) { return "nodeCount28d" in obj; }, get: function (obj) { return obj.nodeCount28d; }, set: function (obj, value) { obj.nodeCount28d = value; } }, metadata: _metadata }, _nodeCount28d_initializers, _nodeCount28d_extraInitializers);
        __esDecorate(null, null, _commission28d_decorators, { kind: "field", name: "commission28d", static: false, private: false, access: { has: function (obj) { return "commission28d" in obj; }, get: function (obj) { return obj.commission28d; }, set: function (obj, value) { obj.commission28d = value; } }, metadata: _metadata }, _commission28d_initializers, _commission28d_extraInitializers);
        __esDecorate(null, null, _blockProduction28d_decorators, { kind: "field", name: "blockProduction28d", static: false, private: false, access: { has: function (obj) { return "blockProduction28d" in obj; }, get: function (obj) { return obj.blockProduction28d; }, set: function (obj, value) { obj.blockProduction28d = value; } }, metadata: _metadata }, _blockProduction28d_initializers, _blockProduction28d_extraInitializers);
        __esDecorate(null, null, _slashes84d_decorators, { kind: "field", name: "slashes84d", static: false, private: false, access: { has: function (obj) { return "slashes84d" in obj; }, get: function (obj) { return obj.slashes84d; }, set: function (obj, value) { obj.slashes84d = value; } }, metadata: _metadata }, _slashes84d_initializers, _slashes84d_extraInitializers);
        __esDecorate(null, null, _peerCommission28d_decorators, { kind: "field", name: "peerCommission28d", static: false, private: false, access: { has: function (obj) { return "peerCommission28d" in obj; }, get: function (obj) { return obj.peerCommission28d; }, set: function (obj, value) { obj.peerCommission28d = value; } }, metadata: _metadata }, _peerCommission28d_initializers, _peerCommission28d_extraInitializers);
        __esDecorate(null, null, _grade_decorators, { kind: "field", name: "grade", static: false, private: false, access: { has: function (obj) { return "grade" in obj; }, get: function (obj) { return obj.grade; }, set: function (obj, value) { obj.grade = value; } }, metadata: _metadata }, _grade_initializers, _grade_extraInitializers);
        __esDecorate(null, null, _pools_decorators, { kind: "field", name: "pools", static: false, private: false, access: { has: function (obj) { return "pools" in obj; }, get: function (obj) { return obj.pools; }, set: function (obj, value) { obj.pools = value; } }, metadata: _metadata }, _pools_initializers, _pools_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Validator = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Validator = _classThis;
}();
exports.Validator = Validator;
