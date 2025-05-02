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
exports.Event = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var extrinsic_model_1 = require("./extrinsic.model");
var _eventData_1 = require("./_eventData");
var Event = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _extrinsic_decorators;
    var _extrinsic_initializers = [];
    var _extrinsic_extraInitializers = [];
    var _data_decorators;
    var _data_initializers = [];
    var _data_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _collectionId_decorators;
    var _collectionId_initializers = [];
    var _collectionId_extraInitializers = [];
    var _tokenId_decorators;
    var _tokenId_initializers = [];
    var _tokenId_extraInitializers = [];
    var Event = _classThis = /** @class */ (function () {
        function Event_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.extrinsic = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _extrinsic_initializers, void 0));
            this.data = (__runInitializers(this, _extrinsic_extraInitializers), __runInitializers(this, _data_initializers, void 0));
            this.name = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.collectionId = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _collectionId_initializers, void 0));
            this.tokenId = (__runInitializers(this, _collectionId_extraInitializers), __runInitializers(this, _tokenId_initializers, void 0));
            __runInitializers(this, _tokenId_extraInitializers);
            Object.assign(this, props);
        }
        return Event_1;
    }());
    __setFunctionName(_classThis, "Event");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _extrinsic_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return extrinsic_model_1.Extrinsic; }, { nullable: true })];
        _data_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.toJSON(); }, from: function (obj) { return obj == null ? undefined : (0, _eventData_1.fromJsonEventData)(obj); } }, nullable: true })];
        _name_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.StringColumn)({ nullable: false })];
        _collectionId_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.StringColumn)({ nullable: true })];
        _tokenId_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.StringColumn)({ nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _extrinsic_decorators, { kind: "field", name: "extrinsic", static: false, private: false, access: { has: function (obj) { return "extrinsic" in obj; }, get: function (obj) { return obj.extrinsic; }, set: function (obj, value) { obj.extrinsic = value; } }, metadata: _metadata }, _extrinsic_initializers, _extrinsic_extraInitializers);
        __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: function (obj) { return "data" in obj; }, get: function (obj) { return obj.data; }, set: function (obj, value) { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _collectionId_decorators, { kind: "field", name: "collectionId", static: false, private: false, access: { has: function (obj) { return "collectionId" in obj; }, get: function (obj) { return obj.collectionId; }, set: function (obj, value) { obj.collectionId = value; } }, metadata: _metadata }, _collectionId_initializers, _collectionId_extraInitializers);
        __esDecorate(null, null, _tokenId_decorators, { kind: "field", name: "tokenId", static: false, private: false, access: { has: function (obj) { return "tokenId" in obj; }, get: function (obj) { return obj.tokenId; }, set: function (obj, value) { obj.tokenId = value; } }, metadata: _metadata }, _tokenId_initializers, _tokenId_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Event = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Event = _classThis;
}();
exports.Event = Event;
