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
exports.TokenRarity = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var collection_model_1 = require("./collection.model");
var token_model_1 = require("./token.model");
var TokenRarity = function () {
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
    var _token_decorators;
    var _token_initializers = [];
    var _token_extraInitializers = [];
    var _score_decorators;
    var _score_initializers = [];
    var _score_extraInitializers = [];
    var _rank_decorators;
    var _rank_initializers = [];
    var _rank_extraInitializers = [];
    var TokenRarity = _classThis = /** @class */ (function () {
        function TokenRarity_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.collection = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _collection_initializers, void 0));
            this.token = (__runInitializers(this, _collection_extraInitializers), __runInitializers(this, _token_initializers, void 0));
            this.score = (__runInitializers(this, _token_extraInitializers), __runInitializers(this, _score_initializers, void 0));
            this.rank = (__runInitializers(this, _score_extraInitializers), __runInitializers(this, _rank_initializers, void 0));
            __runInitializers(this, _rank_extraInitializers);
            Object.assign(this, props);
        }
        return TokenRarity_1;
    }());
    __setFunctionName(_classThis, "TokenRarity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _collection_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return collection_model_1.Collection; }, { nullable: true })];
        _token_decorators = [(0, typeorm_store_1.Index)({ unique: true }), (0, typeorm_store_1.OneToOne)(function () { return token_model_1.Token; }, { nullable: true }), (0, typeorm_store_1.JoinColumn)()];
        _score_decorators = [(0, typeorm_store_1.FloatColumn)({ nullable: false })];
        _rank_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _collection_decorators, { kind: "field", name: "collection", static: false, private: false, access: { has: function (obj) { return "collection" in obj; }, get: function (obj) { return obj.collection; }, set: function (obj, value) { obj.collection = value; } }, metadata: _metadata }, _collection_initializers, _collection_extraInitializers);
        __esDecorate(null, null, _token_decorators, { kind: "field", name: "token", static: false, private: false, access: { has: function (obj) { return "token" in obj; }, get: function (obj) { return obj.token; }, set: function (obj, value) { obj.token = value; } }, metadata: _metadata }, _token_initializers, _token_extraInitializers);
        __esDecorate(null, null, _score_decorators, { kind: "field", name: "score", static: false, private: false, access: { has: function (obj) { return "score" in obj; }, get: function (obj) { return obj.score; }, set: function (obj, value) { obj.score = value; } }, metadata: _metadata }, _score_initializers, _score_extraInitializers);
        __esDecorate(null, null, _rank_decorators, { kind: "field", name: "rank", static: false, private: false, access: { has: function (obj) { return "rank" in obj; }, get: function (obj) { return obj.rank; }, set: function (obj, value) { obj.rank = value; } }, metadata: _metadata }, _rank_initializers, _rank_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TokenRarity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TokenRarity = _classThis;
}();
exports.TokenRarity = TokenRarity;
