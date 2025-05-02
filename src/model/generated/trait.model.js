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
exports.Trait = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var collection_model_1 = require("./collection.model");
var traitToken_model_1 = require("./traitToken.model");
var Trait = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _collection_decorators;
    var _collection_initializers = [];
    var _collection_extraInitializers = [];
    var _traitType_decorators;
    var _traitType_initializers = [];
    var _traitType_extraInitializers = [];
    var _value_decorators;
    var _value_initializers = [];
    var _value_extraInitializers = [];
    var _count_decorators;
    var _count_initializers = [];
    var _count_extraInitializers = [];
    var _tokens_decorators;
    var _tokens_initializers = [];
    var _tokens_extraInitializers = [];
    var Trait = _classThis = /** @class */ (function () {
        function Trait_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.collection = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _collection_initializers, void 0));
            this.traitType = (__runInitializers(this, _collection_extraInitializers), __runInitializers(this, _traitType_initializers, void 0));
            this.value = (__runInitializers(this, _traitType_extraInitializers), __runInitializers(this, _value_initializers, void 0));
            this.count = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _count_initializers, void 0));
            this.tokens = (__runInitializers(this, _count_extraInitializers), __runInitializers(this, _tokens_initializers, void 0));
            __runInitializers(this, _tokens_extraInitializers);
            Object.assign(this, props);
        }
        return Trait_1;
    }());
    __setFunctionName(_classThis, "Trait");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _collection_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return collection_model_1.Collection; }, { nullable: true })];
        _traitType_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: false })];
        _value_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: false })];
        _count_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _tokens_decorators = [(0, typeorm_store_1.OneToMany)(function () { return traitToken_model_1.TraitToken; }, function (e) { return e.trait; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _collection_decorators, { kind: "field", name: "collection", static: false, private: false, access: { has: function (obj) { return "collection" in obj; }, get: function (obj) { return obj.collection; }, set: function (obj, value) { obj.collection = value; } }, metadata: _metadata }, _collection_initializers, _collection_extraInitializers);
        __esDecorate(null, null, _traitType_decorators, { kind: "field", name: "traitType", static: false, private: false, access: { has: function (obj) { return "traitType" in obj; }, get: function (obj) { return obj.traitType; }, set: function (obj, value) { obj.traitType = value; } }, metadata: _metadata }, _traitType_initializers, _traitType_extraInitializers);
        __esDecorate(null, null, _value_decorators, { kind: "field", name: "value", static: false, private: false, access: { has: function (obj) { return "value" in obj; }, get: function (obj) { return obj.value; }, set: function (obj, value) { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
        __esDecorate(null, null, _count_decorators, { kind: "field", name: "count", static: false, private: false, access: { has: function (obj) { return "count" in obj; }, get: function (obj) { return obj.count; }, set: function (obj, value) { obj.count = value; } }, metadata: _metadata }, _count_initializers, _count_extraInitializers);
        __esDecorate(null, null, _tokens_decorators, { kind: "field", name: "tokens", static: false, private: false, access: { has: function (obj) { return "tokens" in obj; }, get: function (obj) { return obj.tokens; }, set: function (obj, value) { obj.tokens = value; } }, metadata: _metadata }, _tokens_initializers, _tokens_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Trait = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Trait = _classThis;
}();
exports.Trait = Trait;
