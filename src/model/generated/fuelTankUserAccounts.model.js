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
exports.FuelTankUserAccounts = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var fuelTank_model_1 = require("./fuelTank.model");
var account_model_1 = require("./account.model");
var FuelTankUserAccounts = function () {
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
    var _account_decorators;
    var _account_initializers = [];
    var _account_extraInitializers = [];
    var _tankDeposit_decorators;
    var _tankDeposit_initializers = [];
    var _tankDeposit_extraInitializers = [];
    var _userDeposit_decorators;
    var _userDeposit_initializers = [];
    var _userDeposit_extraInitializers = [];
    var FuelTankUserAccounts = _classThis = /** @class */ (function () {
        function FuelTankUserAccounts_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.tank = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _tank_initializers, void 0));
            this.account = (__runInitializers(this, _tank_extraInitializers), __runInitializers(this, _account_initializers, void 0));
            this.tankDeposit = (__runInitializers(this, _account_extraInitializers), __runInitializers(this, _tankDeposit_initializers, void 0));
            this.userDeposit = (__runInitializers(this, _tankDeposit_extraInitializers), __runInitializers(this, _userDeposit_initializers, void 0));
            __runInitializers(this, _userDeposit_extraInitializers);
            Object.assign(this, props);
        }
        return FuelTankUserAccounts_1;
    }());
    __setFunctionName(_classThis, "FuelTankUserAccounts");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _tank_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return fuelTank_model_1.FuelTank; }, { nullable: true })];
        _account_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return account_model_1.Account; }, { nullable: true })];
        _tankDeposit_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        _userDeposit_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _tank_decorators, { kind: "field", name: "tank", static: false, private: false, access: { has: function (obj) { return "tank" in obj; }, get: function (obj) { return obj.tank; }, set: function (obj, value) { obj.tank = value; } }, metadata: _metadata }, _tank_initializers, _tank_extraInitializers);
        __esDecorate(null, null, _account_decorators, { kind: "field", name: "account", static: false, private: false, access: { has: function (obj) { return "account" in obj; }, get: function (obj) { return obj.account; }, set: function (obj, value) { obj.account = value; } }, metadata: _metadata }, _account_initializers, _account_extraInitializers);
        __esDecorate(null, null, _tankDeposit_decorators, { kind: "field", name: "tankDeposit", static: false, private: false, access: { has: function (obj) { return "tankDeposit" in obj; }, get: function (obj) { return obj.tankDeposit; }, set: function (obj, value) { obj.tankDeposit = value; } }, metadata: _metadata }, _tankDeposit_initializers, _tankDeposit_extraInitializers);
        __esDecorate(null, null, _userDeposit_decorators, { kind: "field", name: "userDeposit", static: false, private: false, access: { has: function (obj) { return "userDeposit" in obj; }, get: function (obj) { return obj.userDeposit; }, set: function (obj, value) { obj.userDeposit = value; } }, metadata: _metadata }, _userDeposit_initializers, _userDeposit_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FuelTankUserAccounts = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FuelTankUserAccounts = _classThis;
}();
exports.FuelTankUserAccounts = FuelTankUserAccounts;
