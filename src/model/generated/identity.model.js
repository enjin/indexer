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
exports.Identity = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var account_model_1 = require("./account.model");
var registration_model_1 = require("./registration.model");
var Identity = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _account_decorators;
    var _account_initializers = [];
    var _account_extraInitializers = [];
    var _isSub_decorators;
    var _isSub_initializers = [];
    var _isSub_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _info_decorators;
    var _info_initializers = [];
    var _info_extraInitializers = [];
    var _super_decorators;
    var _super_initializers = [];
    var _super_extraInitializers = [];
    var _sub_decorators;
    var _sub_initializers = [];
    var _sub_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var Identity = _classThis = /** @class */ (function () {
        function Identity_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.account = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _account_initializers, void 0));
            this.isSub = (__runInitializers(this, _account_extraInitializers), __runInitializers(this, _isSub_initializers, void 0));
            this.name = (__runInitializers(this, _isSub_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.info = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _info_initializers, void 0));
            this.super = (__runInitializers(this, _info_extraInitializers), __runInitializers(this, _super_initializers, void 0));
            this.sub = (__runInitializers(this, _super_extraInitializers), __runInitializers(this, _sub_initializers, void 0));
            this.createdAt = (__runInitializers(this, _sub_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            __runInitializers(this, _createdAt_extraInitializers);
            Object.assign(this, props);
        }
        return Identity_1;
    }());
    __setFunctionName(_classThis, "Identity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _account_decorators = [(0, typeorm_store_1.Index)({ unique: true }), (0, typeorm_store_1.OneToOne)(function () { return account_model_1.Account; }, { nullable: true }), (0, typeorm_store_1.JoinColumn)()];
        _isSub_decorators = [(0, typeorm_store_1.BooleanColumn)({ nullable: false })];
        _name_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: true })];
        _info_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return registration_model_1.Registration; }, { nullable: true })];
        _super_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return Identity; }, { nullable: true })];
        _sub_decorators = [(0, typeorm_store_1.OneToMany)(function () { return Identity; }, function (e) { return e.super; })];
        _createdAt_decorators = [(0, typeorm_store_1.DateTimeColumn)({ nullable: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _account_decorators, { kind: "field", name: "account", static: false, private: false, access: { has: function (obj) { return "account" in obj; }, get: function (obj) { return obj.account; }, set: function (obj, value) { obj.account = value; } }, metadata: _metadata }, _account_initializers, _account_extraInitializers);
        __esDecorate(null, null, _isSub_decorators, { kind: "field", name: "isSub", static: false, private: false, access: { has: function (obj) { return "isSub" in obj; }, get: function (obj) { return obj.isSub; }, set: function (obj, value) { obj.isSub = value; } }, metadata: _metadata }, _isSub_initializers, _isSub_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _info_decorators, { kind: "field", name: "info", static: false, private: false, access: { has: function (obj) { return "info" in obj; }, get: function (obj) { return obj.info; }, set: function (obj, value) { obj.info = value; } }, metadata: _metadata }, _info_initializers, _info_extraInitializers);
        __esDecorate(null, null, _super_decorators, { kind: "field", name: "super", static: false, private: false, access: { has: function (obj) { return "super" in obj; }, get: function (obj) { return obj.super; }, set: function (obj, value) { obj.super = value; } }, metadata: _metadata }, _super_initializers, _super_extraInitializers);
        __esDecorate(null, null, _sub_decorators, { kind: "field", name: "sub", static: false, private: false, access: { has: function (obj) { return "sub" in obj; }, get: function (obj) { return obj.sub; }, set: function (obj, value) { obj.sub = value; } }, metadata: _metadata }, _sub_initializers, _sub_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Identity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Identity = _classThis;
}();
exports.Identity = Identity;
