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
exports.FuelTankRuleSet = void 0;
var typeorm_store_1 = require("@subsquid/typeorm-store");
var fuelTank_model_1 = require("./fuelTank.model");
var _maxFuelBurnPerTransaction_1 = require("./_maxFuelBurnPerTransaction");
var _userFuelBudget_1 = require("./_userFuelBudget");
var _tankFuelBudget_1 = require("./_tankFuelBudget");
var _requireToken_1 = require("./_requireToken");
var permittedExtrinsics_model_1 = require("./permittedExtrinsics.model");
var FuelTankRuleSet = function () {
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
    var _tank_decorators;
    var _tank_initializers = [];
    var _tank_extraInitializers = [];
    var _isFrozen_decorators;
    var _isFrozen_initializers = [];
    var _isFrozen_extraInitializers = [];
    var _isPermittedExtrinsicsEmpty_decorators;
    var _isPermittedExtrinsicsEmpty_initializers = [];
    var _isPermittedExtrinsicsEmpty_extraInitializers = [];
    var _isPermittedExtrinsicsNull_decorators;
    var _isPermittedExtrinsicsNull_initializers = [];
    var _isPermittedExtrinsicsNull_extraInitializers = [];
    var _requireSignature_decorators;
    var _requireSignature_initializers = [];
    var _requireSignature_extraInitializers = [];
    var _whitelistedCallers_decorators;
    var _whitelistedCallers_initializers = [];
    var _whitelistedCallers_extraInitializers = [];
    var _whitelistedCollections_decorators;
    var _whitelistedCollections_initializers = [];
    var _whitelistedCollections_extraInitializers = [];
    var _whitelistedPallets_decorators;
    var _whitelistedPallets_initializers = [];
    var _whitelistedPallets_extraInitializers = [];
    var _maxFuelBurnPerTransaction_decorators;
    var _maxFuelBurnPerTransaction_initializers = [];
    var _maxFuelBurnPerTransaction_extraInitializers = [];
    var _userFuelBudget_decorators;
    var _userFuelBudget_initializers = [];
    var _userFuelBudget_extraInitializers = [];
    var _tankFuelBudget_decorators;
    var _tankFuelBudget_initializers = [];
    var _tankFuelBudget_extraInitializers = [];
    var _requireToken_decorators;
    var _requireToken_initializers = [];
    var _requireToken_extraInitializers = [];
    var _permittedCalls_decorators;
    var _permittedCalls_initializers = [];
    var _permittedCalls_extraInitializers = [];
    var _minimumInfusion_decorators;
    var _minimumInfusion_initializers = [];
    var _minimumInfusion_extraInitializers = [];
    var _permittedExtrinsics_decorators;
    var _permittedExtrinsics_initializers = [];
    var _permittedExtrinsics_extraInitializers = [];
    var FuelTankRuleSet = _classThis = /** @class */ (function () {
        function FuelTankRuleSet_1(props) {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.index = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _index_initializers, void 0));
            this.tank = (__runInitializers(this, _index_extraInitializers), __runInitializers(this, _tank_initializers, void 0));
            this.isFrozen = (__runInitializers(this, _tank_extraInitializers), __runInitializers(this, _isFrozen_initializers, void 0));
            this.isPermittedExtrinsicsEmpty = (__runInitializers(this, _isFrozen_extraInitializers), __runInitializers(this, _isPermittedExtrinsicsEmpty_initializers, void 0));
            this.isPermittedExtrinsicsNull = (__runInitializers(this, _isPermittedExtrinsicsEmpty_extraInitializers), __runInitializers(this, _isPermittedExtrinsicsNull_initializers, void 0));
            this.requireSignature = (__runInitializers(this, _isPermittedExtrinsicsNull_extraInitializers), __runInitializers(this, _requireSignature_initializers, void 0));
            this.whitelistedCallers = (__runInitializers(this, _requireSignature_extraInitializers), __runInitializers(this, _whitelistedCallers_initializers, void 0));
            this.whitelistedCollections = (__runInitializers(this, _whitelistedCallers_extraInitializers), __runInitializers(this, _whitelistedCollections_initializers, void 0));
            this.whitelistedPallets = (__runInitializers(this, _whitelistedCollections_extraInitializers), __runInitializers(this, _whitelistedPallets_initializers, void 0));
            this.maxFuelBurnPerTransaction = (__runInitializers(this, _whitelistedPallets_extraInitializers), __runInitializers(this, _maxFuelBurnPerTransaction_initializers, void 0));
            this.userFuelBudget = (__runInitializers(this, _maxFuelBurnPerTransaction_extraInitializers), __runInitializers(this, _userFuelBudget_initializers, void 0));
            this.tankFuelBudget = (__runInitializers(this, _userFuelBudget_extraInitializers), __runInitializers(this, _tankFuelBudget_initializers, void 0));
            this.requireToken = (__runInitializers(this, _tankFuelBudget_extraInitializers), __runInitializers(this, _requireToken_initializers, void 0));
            this.permittedCalls = (__runInitializers(this, _requireToken_extraInitializers), __runInitializers(this, _permittedCalls_initializers, void 0));
            this.minimumInfusion = (__runInitializers(this, _permittedCalls_extraInitializers), __runInitializers(this, _minimumInfusion_initializers, void 0));
            this.permittedExtrinsics = (__runInitializers(this, _minimumInfusion_extraInitializers), __runInitializers(this, _permittedExtrinsics_initializers, void 0));
            __runInitializers(this, _permittedExtrinsics_extraInitializers);
            Object.assign(this, props);
        }
        return FuelTankRuleSet_1;
    }());
    __setFunctionName(_classThis, "FuelTankRuleSet");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_store_1.PrimaryColumn)()];
        _index_decorators = [(0, typeorm_store_1.IntColumn)({ nullable: false })];
        _tank_decorators = [(0, typeorm_store_1.Index)(), (0, typeorm_store_1.ManyToOne)(function () { return fuelTank_model_1.FuelTank; }, { nullable: true })];
        _isFrozen_decorators = [(0, typeorm_store_1.BooleanColumn)({ nullable: false })];
        _isPermittedExtrinsicsEmpty_decorators = [(0, typeorm_store_1.BooleanColumn)({ nullable: false })];
        _isPermittedExtrinsicsNull_decorators = [(0, typeorm_store_1.BooleanColumn)({ nullable: false })];
        _requireSignature_decorators = [(0, typeorm_store_1.StringColumn)({ nullable: true })];
        _whitelistedCallers_decorators = [(0, typeorm_store_1.StringColumn)({ array: true, nullable: true })];
        _whitelistedCollections_decorators = [(0, typeorm_store_1.StringColumn)({ array: true, nullable: true })];
        _whitelistedPallets_decorators = [(0, typeorm_store_1.StringColumn)({ array: true, nullable: true })];
        _maxFuelBurnPerTransaction_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.toJSON(); }, from: function (obj) { return obj == null ? undefined : new _maxFuelBurnPerTransaction_1.MaxFuelBurnPerTransaction(undefined, obj); } }, nullable: true })];
        _userFuelBudget_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.toJSON(); }, from: function (obj) { return obj == null ? undefined : new _userFuelBudget_1.UserFuelBudget(undefined, obj); } }, nullable: true })];
        _tankFuelBudget_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.toJSON(); }, from: function (obj) { return obj == null ? undefined : new _tankFuelBudget_1.TankFuelBudget(undefined, obj); } }, nullable: true })];
        _requireToken_decorators = [(0, typeorm_store_1.Column)("jsonb", { transformer: { to: function (obj) { return obj == null ? undefined : obj.toJSON(); }, from: function (obj) { return obj == null ? undefined : new _requireToken_1.RequireToken(undefined, obj); } }, nullable: true })];
        _permittedCalls_decorators = [(0, typeorm_store_1.StringColumn)({ array: true, nullable: true })];
        _minimumInfusion_decorators = [(0, typeorm_store_1.BigIntColumn)({ nullable: true })];
        _permittedExtrinsics_decorators = [(0, typeorm_store_1.OneToMany)(function () { return permittedExtrinsics_model_1.PermittedExtrinsics; }, function (e) { return e.ruleSet; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _index_decorators, { kind: "field", name: "index", static: false, private: false, access: { has: function (obj) { return "index" in obj; }, get: function (obj) { return obj.index; }, set: function (obj, value) { obj.index = value; } }, metadata: _metadata }, _index_initializers, _index_extraInitializers);
        __esDecorate(null, null, _tank_decorators, { kind: "field", name: "tank", static: false, private: false, access: { has: function (obj) { return "tank" in obj; }, get: function (obj) { return obj.tank; }, set: function (obj, value) { obj.tank = value; } }, metadata: _metadata }, _tank_initializers, _tank_extraInitializers);
        __esDecorate(null, null, _isFrozen_decorators, { kind: "field", name: "isFrozen", static: false, private: false, access: { has: function (obj) { return "isFrozen" in obj; }, get: function (obj) { return obj.isFrozen; }, set: function (obj, value) { obj.isFrozen = value; } }, metadata: _metadata }, _isFrozen_initializers, _isFrozen_extraInitializers);
        __esDecorate(null, null, _isPermittedExtrinsicsEmpty_decorators, { kind: "field", name: "isPermittedExtrinsicsEmpty", static: false, private: false, access: { has: function (obj) { return "isPermittedExtrinsicsEmpty" in obj; }, get: function (obj) { return obj.isPermittedExtrinsicsEmpty; }, set: function (obj, value) { obj.isPermittedExtrinsicsEmpty = value; } }, metadata: _metadata }, _isPermittedExtrinsicsEmpty_initializers, _isPermittedExtrinsicsEmpty_extraInitializers);
        __esDecorate(null, null, _isPermittedExtrinsicsNull_decorators, { kind: "field", name: "isPermittedExtrinsicsNull", static: false, private: false, access: { has: function (obj) { return "isPermittedExtrinsicsNull" in obj; }, get: function (obj) { return obj.isPermittedExtrinsicsNull; }, set: function (obj, value) { obj.isPermittedExtrinsicsNull = value; } }, metadata: _metadata }, _isPermittedExtrinsicsNull_initializers, _isPermittedExtrinsicsNull_extraInitializers);
        __esDecorate(null, null, _requireSignature_decorators, { kind: "field", name: "requireSignature", static: false, private: false, access: { has: function (obj) { return "requireSignature" in obj; }, get: function (obj) { return obj.requireSignature; }, set: function (obj, value) { obj.requireSignature = value; } }, metadata: _metadata }, _requireSignature_initializers, _requireSignature_extraInitializers);
        __esDecorate(null, null, _whitelistedCallers_decorators, { kind: "field", name: "whitelistedCallers", static: false, private: false, access: { has: function (obj) { return "whitelistedCallers" in obj; }, get: function (obj) { return obj.whitelistedCallers; }, set: function (obj, value) { obj.whitelistedCallers = value; } }, metadata: _metadata }, _whitelistedCallers_initializers, _whitelistedCallers_extraInitializers);
        __esDecorate(null, null, _whitelistedCollections_decorators, { kind: "field", name: "whitelistedCollections", static: false, private: false, access: { has: function (obj) { return "whitelistedCollections" in obj; }, get: function (obj) { return obj.whitelistedCollections; }, set: function (obj, value) { obj.whitelistedCollections = value; } }, metadata: _metadata }, _whitelistedCollections_initializers, _whitelistedCollections_extraInitializers);
        __esDecorate(null, null, _whitelistedPallets_decorators, { kind: "field", name: "whitelistedPallets", static: false, private: false, access: { has: function (obj) { return "whitelistedPallets" in obj; }, get: function (obj) { return obj.whitelistedPallets; }, set: function (obj, value) { obj.whitelistedPallets = value; } }, metadata: _metadata }, _whitelistedPallets_initializers, _whitelistedPallets_extraInitializers);
        __esDecorate(null, null, _maxFuelBurnPerTransaction_decorators, { kind: "field", name: "maxFuelBurnPerTransaction", static: false, private: false, access: { has: function (obj) { return "maxFuelBurnPerTransaction" in obj; }, get: function (obj) { return obj.maxFuelBurnPerTransaction; }, set: function (obj, value) { obj.maxFuelBurnPerTransaction = value; } }, metadata: _metadata }, _maxFuelBurnPerTransaction_initializers, _maxFuelBurnPerTransaction_extraInitializers);
        __esDecorate(null, null, _userFuelBudget_decorators, { kind: "field", name: "userFuelBudget", static: false, private: false, access: { has: function (obj) { return "userFuelBudget" in obj; }, get: function (obj) { return obj.userFuelBudget; }, set: function (obj, value) { obj.userFuelBudget = value; } }, metadata: _metadata }, _userFuelBudget_initializers, _userFuelBudget_extraInitializers);
        __esDecorate(null, null, _tankFuelBudget_decorators, { kind: "field", name: "tankFuelBudget", static: false, private: false, access: { has: function (obj) { return "tankFuelBudget" in obj; }, get: function (obj) { return obj.tankFuelBudget; }, set: function (obj, value) { obj.tankFuelBudget = value; } }, metadata: _metadata }, _tankFuelBudget_initializers, _tankFuelBudget_extraInitializers);
        __esDecorate(null, null, _requireToken_decorators, { kind: "field", name: "requireToken", static: false, private: false, access: { has: function (obj) { return "requireToken" in obj; }, get: function (obj) { return obj.requireToken; }, set: function (obj, value) { obj.requireToken = value; } }, metadata: _metadata }, _requireToken_initializers, _requireToken_extraInitializers);
        __esDecorate(null, null, _permittedCalls_decorators, { kind: "field", name: "permittedCalls", static: false, private: false, access: { has: function (obj) { return "permittedCalls" in obj; }, get: function (obj) { return obj.permittedCalls; }, set: function (obj, value) { obj.permittedCalls = value; } }, metadata: _metadata }, _permittedCalls_initializers, _permittedCalls_extraInitializers);
        __esDecorate(null, null, _minimumInfusion_decorators, { kind: "field", name: "minimumInfusion", static: false, private: false, access: { has: function (obj) { return "minimumInfusion" in obj; }, get: function (obj) { return obj.minimumInfusion; }, set: function (obj, value) { obj.minimumInfusion = value; } }, metadata: _metadata }, _minimumInfusion_initializers, _minimumInfusion_extraInitializers);
        __esDecorate(null, null, _permittedExtrinsics_decorators, { kind: "field", name: "permittedExtrinsics", static: false, private: false, access: { has: function (obj) { return "permittedExtrinsics" in obj; }, get: function (obj) { return obj.permittedExtrinsics; }, set: function (obj, value) { obj.permittedExtrinsics = value; } }, metadata: _metadata }, _permittedExtrinsics_initializers, _permittedExtrinsics_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FuelTankRuleSet = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FuelTankRuleSet = _classThis;
}();
exports.FuelTankRuleSet = FuelTankRuleSet;
