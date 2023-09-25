import assert from "assert"
import * as marshal from "./marshal"

export class FuelTankUserAccountManagement {
    private _tankReservesExistentialDeposit!: boolean | undefined | null
    private _tankReservesAccountCreationDeposit!: boolean | undefined | null

    constructor(props?: Partial<Omit<FuelTankUserAccountManagement, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._tankReservesExistentialDeposit = json.tankReservesExistentialDeposit == null ? undefined : marshal.boolean.fromJSON(json.tankReservesExistentialDeposit)
            this._tankReservesAccountCreationDeposit = json.tankReservesAccountCreationDeposit == null ? undefined : marshal.boolean.fromJSON(json.tankReservesAccountCreationDeposit)
        }
    }

    get tankReservesExistentialDeposit(): boolean | undefined | null {
        return this._tankReservesExistentialDeposit
    }

    set tankReservesExistentialDeposit(value: boolean | undefined | null) {
        this._tankReservesExistentialDeposit = value
    }

    get tankReservesAccountCreationDeposit(): boolean | undefined | null {
        return this._tankReservesAccountCreationDeposit
    }

    set tankReservesAccountCreationDeposit(value: boolean | undefined | null) {
        this._tankReservesAccountCreationDeposit = value
    }

    toJSON(): object {
        return {
            tankReservesExistentialDeposit: this.tankReservesExistentialDeposit,
            tankReservesAccountCreationDeposit: this.tankReservesAccountCreationDeposit,
        }
    }
}
