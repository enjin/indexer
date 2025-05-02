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
exports.ClaimDetails = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var ClaimDetails = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _exchangeRate_decorators;
    var _exchangeRate_initializers = [];
    var _exchangeRate_extraInitializers = [];
    var _delayClaimsPeriod_decorators;
    var _delayClaimsPeriod_initializers = [];
    var _delayClaimsPeriod_extraInitializers = [];
    var _totalUnclaimedAmount_decorators;
    var _totalUnclaimedAmount_initializers = [];
    var _totalUnclaimedAmount_extraInitializers = [];
    var ClaimDetails = _classThis = /** @class */ (function () {
        function ClaimDetails_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.exchangeRate = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _exchangeRate_initializers, void 0));
            this.delayClaimsPeriod = (__runInitializers(this, _exchangeRate_extraInitializers), __runInitializers(this, _delayClaimsPeriod_initializers, void 0));
            this.totalUnclaimedAmount = (__runInitializers(this, _delayClaimsPeriod_extraInitializers), __runInitializers(this, _totalUnclaimedAmount_initializers, void 0));
            __runInitializers(this, _totalUnclaimedAmount_extraInitializers);
            Object.assign(this, props);
        }
        return ClaimDetails_1;
    }());
    __setFunctionName(_classThis, "ClaimDetails");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _exchangeRate_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: true })];
        _delayClaimsPeriod_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: true })];
        _totalUnclaimedAmount_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _exchangeRate_decorators, { kind: "field", name: "exchangeRate", static: false, private: false, access: { has: function (obj) { return "exchangeRate" in obj; }, get: function (obj) { return obj.exchangeRate; }, set: function (obj, value) { obj.exchangeRate = value; } }, metadata: _metadata }, _exchangeRate_initializers, _exchangeRate_extraInitializers);
        __esDecorate(null, null, _delayClaimsPeriod_decorators, { kind: "field", name: "delayClaimsPeriod", static: false, private: false, access: { has: function (obj) { return "delayClaimsPeriod" in obj; }, get: function (obj) { return obj.delayClaimsPeriod; }, set: function (obj, value) { obj.delayClaimsPeriod = value; } }, metadata: _metadata }, _delayClaimsPeriod_initializers, _delayClaimsPeriod_extraInitializers);
        __esDecorate(null, null, _totalUnclaimedAmount_decorators, { kind: "field", name: "totalUnclaimedAmount", static: false, private: false, access: { has: function (obj) { return "totalUnclaimedAmount" in obj; }, get: function (obj) { return obj.totalUnclaimedAmount; }, set: function (obj, value) { obj.totalUnclaimedAmount = value; } }, metadata: _metadata }, _totalUnclaimedAmount_initializers, _totalUnclaimedAmount_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ClaimDetails = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ClaimDetails = _classThis;
}();
exports.ClaimDetails = ClaimDetails;
