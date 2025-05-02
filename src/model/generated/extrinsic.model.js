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
exports.Extrinsic = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var account_model_1 = require("./account.model");
var _fee_1 = require("./_fee");
var event_model_1 = require("./event.model");
var _fuelTankData_1 = require("./_fuelTankData");
var Extrinsic = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _hash_decorators;
    var _hash_initializers = [];
    var _hash_extraInitializers = [];
    var _blockNumber_decorators;
    var _blockNumber_initializers = [];
    var _blockNumber_extraInitializers = [];
    var _blockHash_decorators;
    var _blockHash_initializers = [];
    var _blockHash_extraInitializers = [];
    var _success_decorators;
    var _success_initializers = [];
    var _success_extraInitializers = [];
    var _pallet_decorators;
    var _pallet_initializers = [];
    var _pallet_extraInitializers = [];
    var _method_decorators;
    var _method_initializers = [];
    var _method_extraInitializers = [];
    var _args_decorators;
    var _args_initializers = [];
    var _args_extraInitializers = [];
    var _signer_decorators;
    var _signer_initializers = [];
    var _signer_extraInitializers = [];
    var _nonce_decorators;
    var _nonce_initializers = [];
    var _nonce_extraInitializers = [];
    var _tip_decorators;
    var _tip_initializers = [];
    var _tip_extraInitializers = [];
    var _fee_decorators;
    var _fee_initializers = [];
    var _fee_extraInitializers = [];
    var _error_decorators;
    var _error_initializers = [];
    var _error_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _events_decorators;
    var _events_initializers = [];
    var _events_extraInitializers = [];
    var _participants_decorators;
    var _participants_initializers = [];
    var _participants_extraInitializers = [];
    var _fuelTank_decorators;
    var _fuelTank_initializers = [];
    var _fuelTank_extraInitializers = [];
    var Extrinsic = _classThis = /** @class */ (function () {
        function Extrinsic_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.hash = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _hash_initializers, void 0));
            this.blockNumber = (__runInitializers(this, _hash_extraInitializers), __runInitializers(this, _blockNumber_initializers, void 0));
            this.blockHash = (__runInitializers(this, _blockNumber_extraInitializers), __runInitializers(this, _blockHash_initializers, void 0));
            this.success = (__runInitializers(this, _blockHash_extraInitializers), __runInitializers(this, _success_initializers, void 0));
            this.pallet = (__runInitializers(this, _success_extraInitializers), __runInitializers(this, _pallet_initializers, void 0));
            this.method = (__runInitializers(this, _pallet_extraInitializers), __runInitializers(this, _method_initializers, void 0));
            this.args = (__runInitializers(this, _method_extraInitializers), __runInitializers(this, _args_initializers, void 0));
            this.signer = (__runInitializers(this, _args_extraInitializers), __runInitializers(this, _signer_initializers, void 0));
            this.nonce = (__runInitializers(this, _signer_extraInitializers), __runInitializers(this, _nonce_initializers, void 0));
            this.tip = (__runInitializers(this, _nonce_extraInitializers), __runInitializers(this, _tip_initializers, void 0));
            this.fee = (__runInitializers(this, _tip_extraInitializers), __runInitializers(this, _fee_initializers, void 0));
            this.error = (__runInitializers(this, _fee_extraInitializers), __runInitializers(this, _error_initializers, void 0));
            this.createdAt = (__runInitializers(this, _error_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            this.events = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _events_initializers, void 0));
            this.participants = (__runInitializers(this, _events_extraInitializers), __runInitializers(this, _participants_initializers, void 0));
            this.fuelTank = (__runInitializers(this, _participants_extraInitializers), __runInitializers(this, _fuelTank_initializers, void 0));
            __runInitializers(this, _fuelTank_extraInitializers);
            Object.assign(this, props);
        }
        return Extrinsic_1;
    }());
    __setFunctionName(_classThis, "Extrinsic");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _hash_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.StringColumn)({ nullable: false })];
        _blockNumber_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.IntColumn)({ nullable: false })];
        _blockHash_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: false })];
        _success_decorators = [(0, typeorm_store_1.BooleanColumn)({ nullable: false })];
        _pallet_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: false })];
        _method_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: false })];
        _args_decorators = [(0, typeorm_store_1.JSONColumn)({ nullable: true })];
        _signer_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return account_model_1.Account; }, { nullable: true })];
        _nonce_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        _tip_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: true })];
        _fee_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.toJSON(); }, from: function (obj) { return obj == null ? undefined : new _fee_1.Fee(undefined, obj); } }, nullable: true })];
        _error_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: true })];
        _createdAt_decorators = [(0, typeorm_store_1.DateTimeColumn)({ nullable: false })];
        _events_decorators = [(0, typeorm_store_1.OneToMany)(function () { return event_model_1.Event; }, function (e) { return e.extrinsic; })];
        _participants_decorators = [(0, typeorm_store_1.StringColumn)({ array: true, nullable: false })];
        _fuelTank_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.toJSON(); }, from: function (obj) { return obj == null ? undefined : new _fuelTankData_1.FuelTankData(undefined, obj); } }, nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _hash_decorators, { kind: "field", name: "hash", static: false, private: false, access: { has: function (obj) { return "hash" in obj; }, get: function (obj) { return obj.hash; }, set: function (obj, value) { obj.hash = value; } }, metadata: _metadata }, _hash_initializers, _hash_extraInitializers);
        __esDecorate(null, null, _blockNumber_decorators, { kind: "field", name: "blockNumber", static: false, private: false, access: { has: function (obj) { return "blockNumber" in obj; }, get: function (obj) { return obj.blockNumber; }, set: function (obj, value) { obj.blockNumber = value; } }, metadata: _metadata }, _blockNumber_initializers, _blockNumber_extraInitializers);
        __esDecorate(null, null, _blockHash_decorators, { kind: "field", name: "blockHash", static: false, private: false, access: { has: function (obj) { return "blockHash" in obj; }, get: function (obj) { return obj.blockHash; }, set: function (obj, value) { obj.blockHash = value; } }, metadata: _metadata }, _blockHash_initializers, _blockHash_extraInitializers);
        __esDecorate(null, null, _success_decorators, { kind: "field", name: "success", static: false, private: false, access: { has: function (obj) { return "success" in obj; }, get: function (obj) { return obj.success; }, set: function (obj, value) { obj.success = value; } }, metadata: _metadata }, _success_initializers, _success_extraInitializers);
        __esDecorate(null, null, _pallet_decorators, { kind: "field", name: "pallet", static: false, private: false, access: { has: function (obj) { return "pallet" in obj; }, get: function (obj) { return obj.pallet; }, set: function (obj, value) { obj.pallet = value; } }, metadata: _metadata }, _pallet_initializers, _pallet_extraInitializers);
        __esDecorate(null, null, _method_decorators, { kind: "field", name: "method", static: false, private: false, access: { has: function (obj) { return "method" in obj; }, get: function (obj) { return obj.method; }, set: function (obj, value) { obj.method = value; } }, metadata: _metadata }, _method_initializers, _method_extraInitializers);
        __esDecorate(null, null, _args_decorators, { kind: "field", name: "args", static: false, private: false, access: { has: function (obj) { return "args" in obj; }, get: function (obj) { return obj.args; }, set: function (obj, value) { obj.args = value; } }, metadata: _metadata }, _args_initializers, _args_extraInitializers);
        __esDecorate(null, null, _signer_decorators, { kind: "field", name: "signer", static: false, private: false, access: { has: function (obj) { return "signer" in obj; }, get: function (obj) { return obj.signer; }, set: function (obj, value) { obj.signer = value; } }, metadata: _metadata }, _signer_initializers, _signer_extraInitializers);
        __esDecorate(null, null, _nonce_decorators, { kind: "field", name: "nonce", static: false, private: false, access: { has: function (obj) { return "nonce" in obj; }, get: function (obj) { return obj.nonce; }, set: function (obj, value) { obj.nonce = value; } }, metadata: _metadata }, _nonce_initializers, _nonce_extraInitializers);
        __esDecorate(null, null, _tip_decorators, { kind: "field", name: "tip", static: false, private: false, access: { has: function (obj) { return "tip" in obj; }, get: function (obj) { return obj.tip; }, set: function (obj, value) { obj.tip = value; } }, metadata: _metadata }, _tip_initializers, _tip_extraInitializers);
        __esDecorate(null, null, _fee_decorators, { kind: "field", name: "fee", static: false, private: false, access: { has: function (obj) { return "fee" in obj; }, get: function (obj) { return obj.fee; }, set: function (obj, value) { obj.fee = value; } }, metadata: _metadata }, _fee_initializers, _fee_extraInitializers);
        __esDecorate(null, null, _error_decorators, { kind: "field", name: "error", static: false, private: false, access: { has: function (obj) { return "error" in obj; }, get: function (obj) { return obj.error; }, set: function (obj, value) { obj.error = value; } }, metadata: _metadata }, _error_initializers, _error_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _events_decorators, { kind: "field", name: "events", static: false, private: false, access: { has: function (obj) { return "events" in obj; }, get: function (obj) { return obj.events; }, set: function (obj, value) { obj.events = value; } }, metadata: _metadata }, _events_initializers, _events_extraInitializers);
        __esDecorate(null, null, _participants_decorators, { kind: "field", name: "participants", static: false, private: false, access: { has: function (obj) { return "participants" in obj; }, get: function (obj) { return obj.participants; }, set: function (obj, value) { obj.participants = value; } }, metadata: _metadata }, _participants_initializers, _participants_extraInitializers);
        __esDecorate(null, null, _fuelTank_decorators, { kind: "field", name: "fuelTank", static: false, private: false, access: { has: function (obj) { return "fuelTank" in obj; }, get: function (obj) { return obj.fuelTank; }, set: function (obj, value) { obj.fuelTank = value; } }, metadata: _metadata }, _fuelTank_initializers, _fuelTank_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Extrinsic = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Extrinsic = _classThis;
}();
exports.Extrinsic = Extrinsic;
