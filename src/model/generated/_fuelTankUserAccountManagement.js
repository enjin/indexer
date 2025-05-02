"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuelTankUserAccountManagement = void 0;
var marshal = require("./marshal");
var FuelTankUserAccountManagement = /** @class */ (function () {
    function FuelTankUserAccountManagement(props, json) {
        Object.assign(this, props);
        if (json != null) {
            this._tankReservesExistentialDeposit = json.tankReservesExistentialDeposit == null ? undefined : marshal.boolean.fromJSON(json.tankReservesExistentialDeposit);
            this._tankReservesAccountCreationDeposit = json.tankReservesAccountCreationDeposit == null ? undefined : marshal.boolean.fromJSON(json.tankReservesAccountCreationDeposit);
        }
    }
    Object.defineProperty(FuelTankUserAccountManagement.prototype, "tankReservesExistentialDeposit", {
        get: function () {
            return this._tankReservesExistentialDeposit;
        },
        set: function (value) {
            this._tankReservesExistentialDeposit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuelTankUserAccountManagement.prototype, "tankReservesAccountCreationDeposit", {
        get: function () {
            return this._tankReservesAccountCreationDeposit;
        },
        set: function (value) {
            this._tankReservesAccountCreationDeposit = value;
        },
        enumerable: false,
        configurable: true
    });
    FuelTankUserAccountManagement.prototype.toJSON = function () {
        return {
            tankReservesExistentialDeposit: this.tankReservesExistentialDeposit,
            tankReservesAccountCreationDeposit: this.tankReservesAccountCreationDeposit,
        };
    };
    return FuelTankUserAccountManagement;
}());
exports.FuelTankUserAccountManagement = FuelTankUserAccountManagement;
