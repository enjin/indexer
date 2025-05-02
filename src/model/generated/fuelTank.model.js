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
exports.FuelTank = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var account_model_1 = require("./account.model");
var fuelTankUserAccounts_model_1 = require("./fuelTankUserAccounts.model");
var _fuelTankUserAccountManagement_1 = require("./_fuelTankUserAccountManagement");
var fuelTankAccountRules_model_1 = require("./fuelTankAccountRules.model");
var fuelTankRuleSet_model_1 = require("./fuelTankRuleSet.model");
var FuelTank = function () {
    var _classDecorators = [(0, typeorm_store_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _tankAccount_decorators;
    var _tankAccount_initializers = [];
    var _tankAccount_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _owner_decorators;
    var _owner_initializers = [];
    var _owner_extraInitializers = [];
    var _providesDeposit_decorators;
    var _providesDeposit_initializers = [];
    var _providesDeposit_extraInitializers = [];
    var _isFrozen_decorators;
    var _isFrozen_initializers = [];
    var _isFrozen_extraInitializers = [];
    var _accountCount_decorators;
    var _accountCount_initializers = [];
    var _accountCount_extraInitializers = [];
    var _coveragePolicy_decorators;
    var _coveragePolicy_initializers = [];
    var _coveragePolicy_extraInitializers = [];
    var _userAccounts_decorators;
    var _userAccounts_initializers = [];
    var _userAccounts_extraInitializers = [];
    var _userAccountManagement_decorators;
    var _userAccountManagement_initializers = [];
    var _userAccountManagement_extraInitializers = [];
    var _accountRules_decorators;
    var _accountRules_initializers = [];
    var _accountRules_extraInitializers = [];
    var _ruleSets_decorators;
    var _ruleSets_initializers = [];
    var _ruleSets_extraInitializers = [];
    var FuelTank = _classThis = /** @class */ (function () {
        function FuelTank_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.tankAccount = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _tankAccount_initializers, void 0));
            this.name = (__runInitializers(this, _tankAccount_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.owner = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _owner_initializers, void 0));
            this.providesDeposit = (__runInitializers(this, _owner_extraInitializers), __runInitializers(this, _providesDeposit_initializers, void 0));
            this.isFrozen = (__runInitializers(this, _providesDeposit_extraInitializers), __runInitializers(this, _isFrozen_initializers, void 0));
            this.accountCount = (__runInitializers(this, _isFrozen_extraInitializers), __runInitializers(this, _accountCount_initializers, void 0));
            this.coveragePolicy = (__runInitializers(this, _accountCount_extraInitializers), __runInitializers(this, _coveragePolicy_initializers, void 0));
            this.userAccounts = (__runInitializers(this, _coveragePolicy_extraInitializers), __runInitializers(this, _userAccounts_initializers, void 0));
            this.userAccountManagement = (__runInitializers(this, _userAccounts_extraInitializers), __runInitializers(this, _userAccountManagement_initializers, void 0));
            this.accountRules = (__runInitializers(this, _userAccountManagement_extraInitializers), __runInitializers(this, _accountRules_initializers, void 0));
            this.ruleSets = (__runInitializers(this, _accountRules_extraInitializers), __runInitializers(this, _ruleSets_initializers, void 0));
            __runInitializers(this, _ruleSets_extraInitializers);
            Object.assign(this, props);
        }
        return FuelTank_1;
    }());
    __setFunctionName(_classThis, "FuelTank");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _tankAccount_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return account_model_1.Account; }, { nullable: true })];
        _name_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: false })];
        _owner_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return account_model_1.Account; }, { nullable: true })];
        _providesDeposit_decorators = [(0, typeorm_store_1.BooleanColumn)({ nullable: false })];
        _isFrozen_decorators = [(0, typeorm_store_1.BooleanColumn)({ nullable: false })];
        _accountCount_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        _coveragePolicy_decorators = [(0, typeorm_store_1.Column)("varchar", { length: 14, nullable: true })];
        _userAccounts_decorators = [(0, typeorm_store_1.OneToMany)(function () { return fuelTankUserAccounts_model_1.FuelTankUserAccounts; }, function (e) { return e.tank; })];
        _userAccountManagement_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.toJSON(); }, from: function (obj) { return obj == null ? undefined : new _fuelTankUserAccountManagement_1.FuelTankUserAccountManagement(undefined, obj); } }, nullable: true })];
        _accountRules_decorators = [(0, typeorm_store_1.OneToMany)(function () { return fuelTankAccountRules_model_1.FuelTankAccountRules; }, function (e) { return e.tank; })];
        _ruleSets_decorators = [(0, typeorm_store_1.OneToMany)(function () { return fuelTankRuleSet_model_1.FuelTankRuleSet; }, function (e) { return e.tank; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _tankAccount_decorators, { kind: "field", name: "tankAccount", static: false, private: false, access: { has: function (obj) { return "tankAccount" in obj; }, get: function (obj) { return obj.tankAccount; }, set: function (obj, value) { obj.tankAccount = value; } }, metadata: _metadata }, _tankAccount_initializers, _tankAccount_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _owner_decorators, { kind: "field", name: "owner", static: false, private: false, access: { has: function (obj) { return "owner" in obj; }, get: function (obj) { return obj.owner; }, set: function (obj, value) { obj.owner = value; } }, metadata: _metadata }, _owner_initializers, _owner_extraInitializers);
        __esDecorate(null, null, _providesDeposit_decorators, { kind: "field", name: "providesDeposit", static: false, private: false, access: { has: function (obj) { return "providesDeposit" in obj; }, get: function (obj) { return obj.providesDeposit; }, set: function (obj, value) { obj.providesDeposit = value; } }, metadata: _metadata }, _providesDeposit_initializers, _providesDeposit_extraInitializers);
        __esDecorate(null, null, _isFrozen_decorators, { kind: "field", name: "isFrozen", static: false, private: false, access: { has: function (obj) { return "isFrozen" in obj; }, get: function (obj) { return obj.isFrozen; }, set: function (obj, value) { obj.isFrozen = value; } }, metadata: _metadata }, _isFrozen_initializers, _isFrozen_extraInitializers);
        __esDecorate(null, null, _accountCount_decorators, { kind: "field", name: "accountCount", static: false, private: false, access: { has: function (obj) { return "accountCount" in obj; }, get: function (obj) { return obj.accountCount; }, set: function (obj, value) { obj.accountCount = value; } }, metadata: _metadata }, _accountCount_initializers, _accountCount_extraInitializers);
        __esDecorate(null, null, _coveragePolicy_decorators, { kind: "field", name: "coveragePolicy", static: false, private: false, access: { has: function (obj) { return "coveragePolicy" in obj; }, get: function (obj) { return obj.coveragePolicy; }, set: function (obj, value) { obj.coveragePolicy = value; } }, metadata: _metadata }, _coveragePolicy_initializers, _coveragePolicy_extraInitializers);
        __esDecorate(null, null, _userAccounts_decorators, { kind: "field", name: "userAccounts", static: false, private: false, access: { has: function (obj) { return "userAccounts" in obj; }, get: function (obj) { return obj.userAccounts; }, set: function (obj, value) { obj.userAccounts = value; } }, metadata: _metadata }, _userAccounts_initializers, _userAccounts_extraInitializers);
        __esDecorate(null, null, _userAccountManagement_decorators, { kind: "field", name: "userAccountManagement", static: false, private: false, access: { has: function (obj) { return "userAccountManagement" in obj; }, get: function (obj) { return obj.userAccountManagement; }, set: function (obj, value) { obj.userAccountManagement = value; } }, metadata: _metadata }, _userAccountManagement_initializers, _userAccountManagement_extraInitializers);
        __esDecorate(null, null, _accountRules_decorators, { kind: "field", name: "accountRules", static: false, private: false, access: { has: function (obj) { return "accountRules" in obj; }, get: function (obj) { return obj.accountRules; }, set: function (obj, value) { obj.accountRules = value; } }, metadata: _metadata }, _accountRules_initializers, _accountRules_extraInitializers);
        __esDecorate(null, null, _ruleSets_decorators, { kind: "field", name: "ruleSets", static: false, private: false, access: { has: function (obj) { return "ruleSets" in obj; }, get: function (obj) { return obj.ruleSets; }, set: function (obj, value) { obj.ruleSets = value; } }, metadata: _metadata }, _ruleSets_initializers, _ruleSets_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FuelTank = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FuelTank = _classThis;
}();
exports.FuelTank = FuelTank;
