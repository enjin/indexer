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
exports.PoolValidator = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var nominationPool_model_1 = require("./nominationPool.model");
var validator_model_1 = require("./validator.model");
var PoolValidator = function () {
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
    var _validator_decorators;
    var _validator_initializers = [];
    var _validator_extraInitializers = [];
    var PoolValidator = _classThis = /** @class */ (function () {
        function PoolValidator_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.pool = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _pool_initializers, void 0));
            this.validator = (__runInitializers(this, _pool_extraInitializers), __runInitializers(this, _validator_initializers, void 0));
            __runInitializers(this, _validator_extraInitializers);
            Object.assign(this, props);
        }
        return PoolValidator_1;
    }());
    __setFunctionName(_classThis, "PoolValidator");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _pool_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return nominationPool_model_1.NominationPool; }, { nullable: true })];
        _validator_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return validator_model_1.Validator; }, { nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _pool_decorators, { kind: "field", name: "pool", static: false, private: false, access: { has: function (obj) { return "pool" in obj; }, get: function (obj) { return obj.pool; }, set: function (obj, value) { obj.pool = value; } }, metadata: _metadata }, _pool_initializers, _pool_extraInitializers);
        __esDecorate(null, null, _validator_decorators, { kind: "field", name: "validator", static: false, private: false, access: { has: function (obj) { return "validator" in obj; }, get: function (obj) { return obj.validator; }, set: function (obj, value) { obj.validator = value; } }, metadata: _metadata }, _validator_initializers, _validator_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PoolValidator = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PoolValidator = _classThis;
}();
exports.PoolValidator = PoolValidator;
