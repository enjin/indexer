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
exports.ClaimRequest = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var ClaimRequest = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _who_decorators;
    var _who_initializers = [];
    var _who_extraInitializers = [];
    var _acountType_decorators;
    var _acountType_initializers = [];
    var _acountType_extraInitializers = [];
    var _hash_decorators;
    var _hash_initializers = [];
    var _hash_extraInitializers = [];
    var _amountClaimable_decorators;
    var _amountClaimable_initializers = [];
    var _amountClaimable_extraInitializers = [];
    var _amountBurned_decorators;
    var _amountBurned_initializers = [];
    var _amountBurned_extraInitializers = [];
    var _isEfiToken_decorators;
    var _isEfiToken_initializers = [];
    var _isEfiToken_extraInitializers = [];
    var _extrinsicIndex_decorators;
    var _extrinsicIndex_initializers = [];
    var _extrinsicIndex_extraInitializers = [];
    var _isClaimed_decorators;
    var _isClaimed_initializers = [];
    var _isClaimed_extraInitializers = [];
    var _isRejected_decorators;
    var _isRejected_initializers = [];
    var _isRejected_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _createdBlock_decorators;
    var _createdBlock_initializers = [];
    var _createdBlock_extraInitializers = [];
    var ClaimRequest = _classThis = /** @class */ (function () {
        function ClaimRequest_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.who = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _who_initializers, void 0));
            this.acountType = (__runInitializers(this, _who_extraInitializers), __runInitializers(this, _acountType_initializers, void 0));
            this.hash = (__runInitializers(this, _acountType_extraInitializers), __runInitializers(this, _hash_initializers, void 0));
            this.amountClaimable = (__runInitializers(this, _hash_extraInitializers), __runInitializers(this, _amountClaimable_initializers, void 0));
            this.amountBurned = (__runInitializers(this, _amountClaimable_extraInitializers), __runInitializers(this, _amountBurned_initializers, void 0));
            this.isEfiToken = (__runInitializers(this, _amountBurned_extraInitializers), __runInitializers(this, _isEfiToken_initializers, void 0));
            this.extrinsicIndex = (__runInitializers(this, _isEfiToken_extraInitializers), __runInitializers(this, _extrinsicIndex_initializers, void 0));
            this.isClaimed = (__runInitializers(this, _extrinsicIndex_extraInitializers), __runInitializers(this, _isClaimed_initializers, void 0));
            this.isRejected = (__runInitializers(this, _isClaimed_extraInitializers), __runInitializers(this, _isRejected_initializers, void 0));
            this.createdAt = (__runInitializers(this, _isRejected_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            this.createdBlock = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _createdBlock_initializers, void 0));
            __runInitializers(this, _createdBlock_extraInitializers);
            Object.assign(this, props);
        }
        return ClaimRequest_1;
    }());
    __setFunctionName(_classThis, "ClaimRequest");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _who_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: false })];
        _acountType_decorators = [(0, typeorm_store_1.Column)("varchar", { length: 9, nullable: false })];
        _hash_decorators = [(0, typeorm_store_1.Index)({ unique: true }), (0, typeorm_store_1.StringColumn)({ nullable: true })];
        _amountClaimable_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _amountBurned_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _isEfiToken_decorators = [(0, typeorm_store_1.BooleanColumn)({ nullable: false })];
        _extrinsicIndex_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: true })];
        _isClaimed_decorators = [(0, typeorm_store_1.BooleanColumn)({ nullable: false })];
        _isRejected_decorators = [(0, typeorm_store_1.BooleanColumn)({ nullable: false })];
        _createdAt_decorators = [(0, typeorm_store_1.DateTimeColumn)({ nullable: false })];
        _createdBlock_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _who_decorators, { kind: "field", name: "who", static: false, private: false, access: { has: function (obj) { return "who" in obj; }, get: function (obj) { return obj.who; }, set: function (obj, value) { obj.who = value; } }, metadata: _metadata }, _who_initializers, _who_extraInitializers);
        __esDecorate(null, null, _acountType_decorators, { kind: "field", name: "acountType", static: false, private: false, access: { has: function (obj) { return "acountType" in obj; }, get: function (obj) { return obj.acountType; }, set: function (obj, value) { obj.acountType = value; } }, metadata: _metadata }, _acountType_initializers, _acountType_extraInitializers);
        __esDecorate(null, null, _hash_decorators, { kind: "field", name: "hash", static: false, private: false, access: { has: function (obj) { return "hash" in obj; }, get: function (obj) { return obj.hash; }, set: function (obj, value) { obj.hash = value; } }, metadata: _metadata }, _hash_initializers, _hash_extraInitializers);
        __esDecorate(null, null, _amountClaimable_decorators, { kind: "field", name: "amountClaimable", static: false, private: false, access: { has: function (obj) { return "amountClaimable" in obj; }, get: function (obj) { return obj.amountClaimable; }, set: function (obj, value) { obj.amountClaimable = value; } }, metadata: _metadata }, _amountClaimable_initializers, _amountClaimable_extraInitializers);
        __esDecorate(null, null, _amountBurned_decorators, { kind: "field", name: "amountBurned", static: false, private: false, access: { has: function (obj) { return "amountBurned" in obj; }, get: function (obj) { return obj.amountBurned; }, set: function (obj, value) { obj.amountBurned = value; } }, metadata: _metadata }, _amountBurned_initializers, _amountBurned_extraInitializers);
        __esDecorate(null, null, _isEfiToken_decorators, { kind: "field", name: "isEfiToken", static: false, private: false, access: { has: function (obj) { return "isEfiToken" in obj; }, get: function (obj) { return obj.isEfiToken; }, set: function (obj, value) { obj.isEfiToken = value; } }, metadata: _metadata }, _isEfiToken_initializers, _isEfiToken_extraInitializers);
        __esDecorate(null, null, _extrinsicIndex_decorators, { kind: "field", name: "extrinsicIndex", static: false, private: false, access: { has: function (obj) { return "extrinsicIndex" in obj; }, get: function (obj) { return obj.extrinsicIndex; }, set: function (obj, value) { obj.extrinsicIndex = value; } }, metadata: _metadata }, _extrinsicIndex_initializers, _extrinsicIndex_extraInitializers);
        __esDecorate(null, null, _isClaimed_decorators, { kind: "field", name: "isClaimed", static: false, private: false, access: { has: function (obj) { return "isClaimed" in obj; }, get: function (obj) { return obj.isClaimed; }, set: function (obj, value) { obj.isClaimed = value; } }, metadata: _metadata }, _isClaimed_initializers, _isClaimed_extraInitializers);
        __esDecorate(null, null, _isRejected_decorators, { kind: "field", name: "isRejected", static: false, private: false, access: { has: function (obj) { return "isRejected" in obj; }, get: function (obj) { return obj.isRejected; }, set: function (obj, value) { obj.isRejected = value; } }, metadata: _metadata }, _isRejected_initializers, _isRejected_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _createdBlock_decorators, { kind: "field", name: "createdBlock", static: false, private: false, access: { has: function (obj) { return "createdBlock" in obj; }, get: function (obj) { return obj.createdBlock; }, set: function (obj, value) { obj.createdBlock = value; } }, metadata: _metadata }, _createdBlock_initializers, _createdBlock_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ClaimRequest = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ClaimRequest = _classThis;
}();
exports.ClaimRequest = ClaimRequest;
