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
exports.FuelTankAccountRules = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var fuelTank_model_1 = require("./fuelTank.model");
var _accountRule_1 = require("./_accountRule");
var FuelTankAccountRules = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _tank_decorators;
    var _tank_initializers = [];
    var _tank_extraInitializers = [];
    var _rule_decorators;
    var _rule_initializers = [];
    var _rule_extraInitializers = [];
    var FuelTankAccountRules = _classThis = /** @class */ (function () {
        function FuelTankAccountRules_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.tank = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _tank_initializers, void 0));
            this.rule = (__runInitializers(this, _tank_extraInitializers), __runInitializers(this, _rule_initializers, void 0));
            __runInitializers(this, _rule_extraInitializers);
            Object.assign(this, props);
        }
        return FuelTankAccountRules_1;
    }());
    __setFunctionName(_classThis, "FuelTankAccountRules");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _tank_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return fuelTank_model_1.FuelTank; }, { nullable: true })];
        _rule_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj.toJSON(); }, from: function (obj) { return obj == null ? undefined : (0, _accountRule_1.fromJsonAccountRule)(obj); } }, nullable: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _tank_decorators, { kind: "field", name: "tank", static: false, private: false, access: { has: function (obj) { return "tank" in obj; }, get: function (obj) { return obj.tank; }, set: function (obj, value) { obj.tank = value; } }, metadata: _metadata }, _tank_initializers, _tank_extraInitializers);
        __esDecorate(null, null, _rule_decorators, { kind: "field", name: "rule", static: false, private: false, access: { has: function (obj) { return "rule" in obj; }, get: function (obj) { return obj.rule; }, set: function (obj, value) { obj.rule = value; } }, metadata: _metadata }, _rule_initializers, _rule_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FuelTankAccountRules = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FuelTankAccountRules = _classThis;
}();
exports.FuelTankAccountRules = FuelTankAccountRules;
