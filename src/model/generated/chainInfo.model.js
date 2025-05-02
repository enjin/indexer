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
exports.ChainInfo = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var _marketplace_1 = require("./_marketplace");
var ChainInfo = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _specVersion_decorators;
    var _specVersion_initializers = [];
    var _specVersion_extraInitializers = [];
    var _transactionVersion_decorators;
    var _transactionVersion_initializers = [];
    var _transactionVersion_extraInitializers = [];
    var _genesisHash_decorators;
    var _genesisHash_initializers = [];
    var _genesisHash_extraInitializers = [];
    var _blockHash_decorators;
    var _blockHash_initializers = [];
    var _blockHash_extraInitializers = [];
    var _blockNumber_decorators;
    var _blockNumber_initializers = [];
    var _blockNumber_extraInitializers = [];
    var _existentialDeposit_decorators;
    var _existentialDeposit_initializers = [];
    var _existentialDeposit_extraInitializers = [];
    var _timestamp_decorators;
    var _timestamp_initializers = [];
    var _timestamp_extraInitializers = [];
    var _validator_decorators;
    var _validator_initializers = [];
    var _validator_extraInitializers = [];
    var _marketplace_decorators;
    var _marketplace_initializers = [];
    var _marketplace_extraInitializers = [];
    var ChainInfo = _classThis = /** @class */ (function () {
        function ChainInfo_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.specVersion = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _specVersion_initializers, void 0));
            this.transactionVersion = (__runInitializers(this, _specVersion_extraInitializers), __runInitializers(this, _transactionVersion_initializers, void 0));
            this.genesisHash = (__runInitializers(this, _transactionVersion_extraInitializers), __runInitializers(this, _genesisHash_initializers, void 0));
            this.blockHash = (__runInitializers(this, _genesisHash_extraInitializers), __runInitializers(this, _blockHash_initializers, void 0));
            this.blockNumber = (__runInitializers(this, _blockHash_extraInitializers), __runInitializers(this, _blockNumber_initializers, void 0));
            this.existentialDeposit = (__runInitializers(this, _blockNumber_extraInitializers), __runInitializers(this, _existentialDeposit_initializers, void 0));
            this.timestamp = (__runInitializers(this, _existentialDeposit_extraInitializers), __runInitializers(this, _timestamp_initializers, void 0));
            this.validator = (__runInitializers(this, _timestamp_extraInitializers), __runInitializers(this, _validator_initializers, void 0));
            this.marketplace = (__runInitializers(this, _validator_extraInitializers), __runInitializers(this, _marketplace_initializers, void 0));
            __runInitializers(this, _marketplace_extraInitializers);
            Object.assign(this, props);
        }
        return ChainInfo_1;
    }());
    __setFunctionName(_classThis, "ChainInfo");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _specVersion_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        _transactionVersion_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        _genesisHash_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: false })];
        _blockHash_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: false })];
        _blockNumber_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.IntColumn)({ nullable: false })];
        _existentialDeposit_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _timestamp_decorators = [(0, typeorm_store_1.DateTimeColumn)({ nullable: false })];
        _validator_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.StringColumn)({ nullable: true })];
        _marketplace_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.toJSON(); }, from: function (obj) { return obj == null ? undefined : new _marketplace_1.Marketplace(undefined, obj); } }, nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _specVersion_decorators, { kind: "field", name: "specVersion", static: false, private: false, access: { has: function (obj) { return "specVersion" in obj; }, get: function (obj) { return obj.specVersion; }, set: function (obj, value) { obj.specVersion = value; } }, metadata: _metadata }, _specVersion_initializers, _specVersion_extraInitializers);
        __esDecorate(null, null, _transactionVersion_decorators, { kind: "field", name: "transactionVersion", static: false, private: false, access: { has: function (obj) { return "transactionVersion" in obj; }, get: function (obj) { return obj.transactionVersion; }, set: function (obj, value) { obj.transactionVersion = value; } }, metadata: _metadata }, _transactionVersion_initializers, _transactionVersion_extraInitializers);
        __esDecorate(null, null, _genesisHash_decorators, { kind: "field", name: "genesisHash", static: false, private: false, access: { has: function (obj) { return "genesisHash" in obj; }, get: function (obj) { return obj.genesisHash; }, set: function (obj, value) { obj.genesisHash = value; } }, metadata: _metadata }, _genesisHash_initializers, _genesisHash_extraInitializers);
        __esDecorate(null, null, _blockHash_decorators, { kind: "field", name: "blockHash", static: false, private: false, access: { has: function (obj) { return "blockHash" in obj; }, get: function (obj) { return obj.blockHash; }, set: function (obj, value) { obj.blockHash = value; } }, metadata: _metadata }, _blockHash_initializers, _blockHash_extraInitializers);
        __esDecorate(null, null, _blockNumber_decorators, { kind: "field", name: "blockNumber", static: false, private: false, access: { has: function (obj) { return "blockNumber" in obj; }, get: function (obj) { return obj.blockNumber; }, set: function (obj, value) { obj.blockNumber = value; } }, metadata: _metadata }, _blockNumber_initializers, _blockNumber_extraInitializers);
        __esDecorate(null, null, _existentialDeposit_decorators, { kind: "field", name: "existentialDeposit", static: false, private: false, access: { has: function (obj) { return "existentialDeposit" in obj; }, get: function (obj) { return obj.existentialDeposit; }, set: function (obj, value) { obj.existentialDeposit = value; } }, metadata: _metadata }, _existentialDeposit_initializers, _existentialDeposit_extraInitializers);
        __esDecorate(null, null, _timestamp_decorators, { kind: "field", name: "timestamp", static: false, private: false, access: { has: function (obj) { return "timestamp" in obj; }, get: function (obj) { return obj.timestamp; }, set: function (obj, value) { obj.timestamp = value; } }, metadata: _metadata }, _timestamp_initializers, _timestamp_extraInitializers);
        __esDecorate(null, null, _validator_decorators, { kind: "field", name: "validator", static: false, private: false, access: { has: function (obj) { return "validator" in obj; }, get: function (obj) { return obj.validator; }, set: function (obj, value) { obj.validator = value; } }, metadata: _metadata }, _validator_initializers, _validator_extraInitializers);
        __esDecorate(null, null, _marketplace_decorators, { kind: "field", name: "marketplace", static: false, private: false, access: { has: function (obj) { return "marketplace" in obj; }, get: function (obj) { return obj.marketplace; }, set: function (obj, value) { obj.marketplace = value; } }, metadata: _metadata }, _marketplace_initializers, _marketplace_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ChainInfo = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ChainInfo = _classThis;
}();
exports.ChainInfo = ChainInfo;
