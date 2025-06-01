import assert from "assert"
import * as marshal from "./marshal"

export class Marketplace {
    private _protocolFee!: number
    private _listingActiveDelay!: number
    private _listingDeposit!: bigint
    private _maxRoundingError!: bigint
    private _maxSaltLength!: number
    private _minimumBidIncreasePercentage!: number

    constructor(props?: Partial<Omit<Marketplace, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._protocolFee = marshal.float.fromJSON(json.protocolFee)
            this._listingActiveDelay = marshal.int.fromJSON(json.listingActiveDelay)
            this._listingDeposit = marshal.bigint.fromJSON(json.listingDeposit)
            this._maxRoundingError = marshal.bigint.fromJSON(json.maxRoundingError)
            this._maxSaltLength = marshal.int.fromJSON(json.maxSaltLength)
            this._minimumBidIncreasePercentage = marshal.float.fromJSON(json.minimumBidIncreasePercentage)
        }
    }

    get protocolFee(): number {
        assert(this._protocolFee != null, 'uninitialized access')
        return this._protocolFee
    }

    set protocolFee(value: number) {
        this._protocolFee = value
    }

    get listingActiveDelay(): number {
        assert(this._listingActiveDelay != null, 'uninitialized access')
        return this._listingActiveDelay
    }

    set listingActiveDelay(value: number) {
        this._listingActiveDelay = value
    }

    get listingDeposit(): bigint {
        assert(this._listingDeposit != null, 'uninitialized access')
        return this._listingDeposit
    }

    set listingDeposit(value: bigint) {
        this._listingDeposit = value
    }

    get maxRoundingError(): bigint {
        assert(this._maxRoundingError != null, 'uninitialized access')
        return this._maxRoundingError
    }

    set maxRoundingError(value: bigint) {
        this._maxRoundingError = value
    }

    get maxSaltLength(): number {
        assert(this._maxSaltLength != null, 'uninitialized access')
        return this._maxSaltLength
    }

    set maxSaltLength(value: number) {
        this._maxSaltLength = value
    }

    get minimumBidIncreasePercentage(): number {
        assert(this._minimumBidIncreasePercentage != null, 'uninitialized access')
        return this._minimumBidIncreasePercentage
    }

    set minimumBidIncreasePercentage(value: number) {
        this._minimumBidIncreasePercentage = value
    }

    toJSON(): object {
        return {
            protocolFee: this.protocolFee,
            listingActiveDelay: this.listingActiveDelay,
            listingDeposit: marshal.bigint.toJSON(this.listingDeposit),
            maxRoundingError: marshal.bigint.toJSON(this.maxRoundingError),
            maxSaltLength: this.maxSaltLength,
            minimumBidIncreasePercentage: this.minimumBidIncreasePercentage,
        }
    }
}
