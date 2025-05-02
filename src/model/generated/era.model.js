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
exports.Era = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var Era = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _index_decorators;
    var _index_initializers = [];
    var _index_extraInitializers = [];
    var _startAt_decorators;
    var _startAt_initializers = [];
    var _startAt_extraInitializers = [];
    var _startBlock_decorators;
    var _startBlock_initializers = [];
    var _startBlock_extraInitializers = [];
    var _endAt_decorators;
    var _endAt_initializers = [];
    var _endAt_extraInitializers = [];
    var _endBlock_decorators;
    var _endBlock_initializers = [];
    var _endBlock_extraInitializers = [];
    var _nodeCount_decorators;
    var _nodeCount_initializers = [];
    var _nodeCount_extraInitializers = [];
    var Era = _classThis = /** @class */ (function () {
        function Era_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.index = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _index_initializers, void 0));
            this.startAt = (__runInitializers(this, _index_extraInitializers), __runInitializers(this, _startAt_initializers, void 0));
            this.startBlock = (__runInitializers(this, _startAt_extraInitializers), __runInitializers(this, _startBlock_initializers, void 0));
            this.endAt = (__runInitializers(this, _startBlock_extraInitializers), __runInitializers(this, _endAt_initializers, void 0));
            this.endBlock = (__runInitializers(this, _endAt_extraInitializers), __runInitializers(this, _endBlock_initializers, void 0));
            this.nodeCount = (__runInitializers(this, _endBlock_extraInitializers), __runInitializers(this, _nodeCount_initializers, void 0));
            __runInitializers(this, _nodeCount_extraInitializers);
            Object.assign(this, props);
        }
        return Era_1;
    }());
    __setFunctionName(_classThis, "Era");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _index_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        _startAt_decorators = [(0, typeorm_store_1.DateTimeColumn)({ nullable: false })];
        _startBlock_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        _endAt_decorators = [(0, typeorm_store_1.DateTimeColumn)({ nullable: true })];
        _endBlock_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: true })];
        _nodeCount_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _index_decorators, { kind: "field", name: "index", static: false, private: false, access: { has: function (obj) { return "index" in obj; }, get: function (obj) { return obj.index; }, set: function (obj, value) { obj.index = value; } }, metadata: _metadata }, _index_initializers, _index_extraInitializers);
        __esDecorate(null, null, _startAt_decorators, { kind: "field", name: "startAt", static: false, private: false, access: { has: function (obj) { return "startAt" in obj; }, get: function (obj) { return obj.startAt; }, set: function (obj, value) { obj.startAt = value; } }, metadata: _metadata }, _startAt_initializers, _startAt_extraInitializers);
        __esDecorate(null, null, _startBlock_decorators, { kind: "field", name: "startBlock", static: false, private: false, access: { has: function (obj) { return "startBlock" in obj; }, get: function (obj) { return obj.startBlock; }, set: function (obj, value) { obj.startBlock = value; } }, metadata: _metadata }, _startBlock_initializers, _startBlock_extraInitializers);
        __esDecorate(null, null, _endAt_decorators, { kind: "field", name: "endAt", static: false, private: false, access: { has: function (obj) { return "endAt" in obj; }, get: function (obj) { return obj.endAt; }, set: function (obj, value) { obj.endAt = value; } }, metadata: _metadata }, _endAt_initializers, _endAt_extraInitializers);
        __esDecorate(null, null, _endBlock_decorators, { kind: "field", name: "endBlock", static: false, private: false, access: { has: function (obj) { return "endBlock" in obj; }, get: function (obj) { return obj.endBlock; }, set: function (obj, value) { obj.endBlock = value; } }, metadata: _metadata }, _endBlock_initializers, _endBlock_extraInitializers);
        __esDecorate(null, null, _nodeCount_decorators, { kind: "field", name: "nodeCount", static: false, private: false, access: { has: function (obj) { return "nodeCount" in obj; }, get: function (obj) { return obj.nodeCount; }, set: function (obj, value) { obj.nodeCount = value; } }, metadata: _metadata }, _nodeCount_initializers, _nodeCount_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Era = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Era = _classThis;
}();
exports.Era = Era;
