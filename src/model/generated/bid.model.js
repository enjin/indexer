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
exports.Bid = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var account_model_1 = require("./account.model");
var listing_model_1 = require("./listing.model");
var Bid = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _bidder_decorators;
    var _bidder_initializers = [];
    var _bidder_extraInitializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _price_extraInitializers = [];
    var _listing_decorators;
    var _listing_initializers = [];
    var _listing_extraInitializers = [];
    var _height_decorators;
    var _height_initializers = [];
    var _height_extraInitializers = [];
    var _extrinsicHash_decorators;
    var _extrinsicHash_initializers = [];
    var _extrinsicHash_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var Bid = _classThis = /** @class */ (function () {
        function Bid_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.bidder = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _bidder_initializers, void 0));
            this.price = (__runInitializers(this, _bidder_extraInitializers), __runInitializers(this, _price_initializers, void 0));
            this.listing = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _listing_initializers, void 0));
            this.height = (__runInitializers(this, _listing_extraInitializers), __runInitializers(this, _height_initializers, void 0));
            this.extrinsicHash = (__runInitializers(this, _height_extraInitializers), __runInitializers(this, _extrinsicHash_initializers, void 0));
            this.createdAt = (__runInitializers(this, _extrinsicHash_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            __runInitializers(this, _createdAt_extraInitializers);
            Object.assign(this, props);
        }
        return Bid_1;
    }());
    __setFunctionName(_classThis, "Bid");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _bidder_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return account_model_1.Account; }, { nullable: true })];
        _price_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _listing_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return listing_model_1.Listing; }, { nullable: true })];
        _height_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        _extrinsicHash_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: true })];
        _createdAt_decorators = [(0, typeorm_store_1.DateTimeColumn)({ nullable: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _bidder_decorators, { kind: "field", name: "bidder", static: false, private: false, access: { has: function (obj) { return "bidder" in obj; }, get: function (obj) { return obj.bidder; }, set: function (obj, value) { obj.bidder = value; } }, metadata: _metadata }, _bidder_initializers, _bidder_extraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
        __esDecorate(null, null, _listing_decorators, { kind: "field", name: "listing", static: false, private: false, access: { has: function (obj) { return "listing" in obj; }, get: function (obj) { return obj.listing; }, set: function (obj, value) { obj.listing = value; } }, metadata: _metadata }, _listing_initializers, _listing_extraInitializers);
        __esDecorate(null, null, _height_decorators, { kind: "field", name: "height", static: false, private: false, access: { has: function (obj) { return "height" in obj; }, get: function (obj) { return obj.height; }, set: function (obj, value) { obj.height = value; } }, metadata: _metadata }, _height_initializers, _height_extraInitializers);
        __esDecorate(null, null, _extrinsicHash_decorators, { kind: "field", name: "extrinsicHash", static: false, private: false, access: { has: function (obj) { return "extrinsicHash" in obj; }, get: function (obj) { return obj.extrinsicHash; }, set: function (obj, value) { obj.extrinsicHash = value; } }, metadata: _metadata }, _extrinsicHash_initializers, _extrinsicHash_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Bid = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Bid = _classThis;
}();
exports.Bid = Bid;
