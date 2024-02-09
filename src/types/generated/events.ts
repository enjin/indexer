import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as matrixEnjinV603 from './matrixEnjinV603'
import * as v100 from './v100'
import * as v101 from './v101'
import * as v102 from './v102'
import * as v103 from './v103'
import * as matrixEnjinV1000 from './matrixEnjinV1000'
import * as v104 from './v104'
import * as v105 from './v105'
import * as v106 from './v106'
import * as v110 from './v110'
import * as v120 from './v120'
import * as v1021 from './v1021'
import * as v1023 from './v1023'

export class AssignedSlotsPermanentSlotAssignedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssignedSlots.PermanentSlotAssigned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A para was assigned a permanent parachain slot
     */
    get isV100(): boolean {
        return this._chain.getEventHash('AssignedSlots.PermanentSlotAssigned') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A para was assigned a permanent parachain slot
     */
    get asV100(): number {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssignedSlotsTemporarySlotAssignedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssignedSlots.TemporarySlotAssigned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A para was assigned a temporary parachain slot
     */
    get isV100(): boolean {
        return this._chain.getEventHash('AssignedSlots.TemporarySlotAssigned') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A para was assigned a temporary parachain slot
     */
    get asV100(): number {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsAuctionClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.AuctionClosed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An auction ended. All funds become unreserved.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Auctions.AuctionClosed') === 'b43a4f04c143465b1befbba20a53ad22053012b22824f10dc981cf180e36e10d'
    }

    /**
     * An auction ended. All funds become unreserved.
     */
    get asV100(): {auctionIndex: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsAuctionStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.AuctionStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An auction started. Provides its index and the block number where it will begin to
     * close and the first lease period of the quadruplet that is auctioned.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Auctions.AuctionStarted') === '8b2d1722dc0088981b41be544b21195e4f399c63086aae153946e56fab444698'
    }

    /**
     * An auction started. Provides its index and the block number where it will begin to
     * close and the first lease period of the quadruplet that is auctioned.
     */
    get asV100(): {auctionIndex: number, leasePeriod: number, ending: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsBidAcceptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.BidAccepted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new bid has been accepted as the current winner.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Auctions.BidAccepted') === 'd351ff1617e3b6a9ea0a145957d1071c8f96f30490cd8f8cb5287a3bc9c81fa6'
    }

    /**
     * A new bid has been accepted as the current winner.
     */
    get asV100(): {bidder: Uint8Array, paraId: number, amount: bigint, firstSlot: number, lastSlot: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsReserveConfiscatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.ReserveConfiscated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
     * but no parachain slot has been leased.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Auctions.ReserveConfiscated') === '2ceaebb4a3710db29f1123153ea5f645630fdb49f4e00078ea741df82c007592'
    }

    /**
     * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
     * but no parachain slot has been leased.
     */
    get asV100(): {paraId: number, leaser: Uint8Array, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Funds were reserved for a winning bid. First balance is the extra amount reserved.
     * Second is the total.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Auctions.Reserved') === 'be3d717bc6827d9da650f48f75e515ba62d3161c7eb0137129ab2057c11e2367'
    }

    /**
     * Funds were reserved for a winning bid. First balance is the extra amount reserved.
     * Second is the total.
     */
    get asV100(): {bidder: Uint8Array, extraReserved: bigint, totalAmount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsUnreservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.Unreserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Auctions.Unreserved') === '1fbdeb84319a91e9d51edbf87a246fb5d72d27c6481f5903412fb369e7274cbe'
    }

    /**
     * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
     */
    get asV100(): {bidder: Uint8Array, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsWinningOffsetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.WinningOffset')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Auctions.WinningOffset') === 'e9bebdc1a926c4f6ea932110731c67970957cf98defb8800d5f773934139ecde'
    }

    /**
     * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
     */
    get asV100(): {auctionIndex: number, blockNumber: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesBalanceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.BalanceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A balance was set by root.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '8c52e43e845654720e1db5c5bd166f80eb777baf474e93ce4d20fd385601a8fb'
    }

    /**
     * A balance was set by root.
     */
    get asMatrixEnjinV603(): {who: Uint8Array, free: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
    }

    /**
     * A balance was set by root.
     */
    get asV100(): {who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '8c52e43e845654720e1db5c5bd166f80eb777baf474e93ce4d20fd385601a8fb'
    }

    /**
     * A balance was set by root.
     */
    get asV104(): {who: Uint8Array, free: bigint} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesBurnedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Burned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was burned from an account.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Burned') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was burned from an account.
     */
    get asMatrixEnjinV603(): {who: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesDepositEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Deposit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asMatrixEnjinV603(): {who: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesDustLostEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.DustLost')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get asMatrixEnjinV603(): {account: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesEndowedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Endowed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was created with some free balance.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
    }

    /**
     * An account was created with some free balance.
     */
    get asMatrixEnjinV603(): {account: Uint8Array, freeBalance: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesFrozenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Frozen')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was frozen.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Frozen') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was frozen.
     */
    get asMatrixEnjinV603(): {who: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesIssuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Issued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Issued') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    get asMatrixEnjinV603(): {amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesLockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Locked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was locked.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Locked') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was locked.
     */
    get asMatrixEnjinV603(): {who: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesMintedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Minted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was minted into an account.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Minted') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was minted into an account.
     */
    get asMatrixEnjinV603(): {who: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesRescindedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Rescinded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Rescinded') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    get asMatrixEnjinV603(): {amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesReserveRepatriatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.ReserveRepatriated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get asMatrixEnjinV603(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: matrixEnjinV603.BalanceStatus} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asMatrixEnjinV603(): {who: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesRestoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Restored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was restored into an account.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Restored') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was restored into an account.
     */
    get asMatrixEnjinV603(): {who: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get asMatrixEnjinV603(): {who: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesSuspendedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Suspended')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Suspended') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    get asMatrixEnjinV603(): {who: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesThawedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Thawed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was thawed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Thawed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was thawed.
     */
    get asMatrixEnjinV603(): {who: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transfer succeeded.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
    }

    /**
     * Transfer succeeded.
     */
    get asMatrixEnjinV603(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesUnlockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Unlocked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was unlocked.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Unlocked') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was unlocked.
     */
    get asMatrixEnjinV603(): {who: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesUnreservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Unreserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asMatrixEnjinV603(): {who: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesUpgradedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Upgraded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was upgraded.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Upgraded') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * An account was upgraded.
     */
    get asMatrixEnjinV603(): {who: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesWithdrawEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Withdraw')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get asMatrixEnjinV603(): {who: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyAwardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyAwarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty is awarded to a beneficiary.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Bounties.BountyAwarded') === '5314a4c20f133eee477b8b4ce9998238defda69cb2db9344567309c8e6badd90'
    }

    /**
     * A bounty is awarded to a beneficiary.
     */
    get asMatrixEnjinV603(): {index: number, beneficiary: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyBecameActiveEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyBecameActive')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty proposal is funded and became active.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Bounties.BountyBecameActive') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty proposal is funded and became active.
     */
    get asMatrixEnjinV603(): {index: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyCanceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty is cancelled.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Bounties.BountyCanceled') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty is cancelled.
     */
    get asMatrixEnjinV603(): {index: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty is claimed by beneficiary.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Bounties.BountyClaimed') === 'fb4b26ccfabe9f649bfadde9c0bbee0816e9cf32c7384f2f21c03a852ec23f77'
    }

    /**
     * A bounty is claimed by beneficiary.
     */
    get asMatrixEnjinV603(): {index: number, payout: bigint, beneficiary: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyExtendedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyExtended')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty expiry is extended.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Bounties.BountyExtended') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty expiry is extended.
     */
    get asMatrixEnjinV603(): {index: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyProposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New bounty proposal.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Bounties.BountyProposed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * New bounty proposal.
     */
    get asMatrixEnjinV603(): {index: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyRejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Bounties.BountyRejected') === 'dc987b921ffaf859792cab48c45dff837e0f100cb2deeb83c24a11b61e50082e'
    }

    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    get asMatrixEnjinV603(): {index: number, bond: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ClaimsClaimMintedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Claims.ClaimMinted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Claim has been minted for someone by the root. `[who, amount]`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Claims.ClaimMinted') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
    }

    /**
     * Claim has been minted for someone by the root. `[who, amount]`
     */
    get asMatrixEnjinV603(): {who: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ClaimsClaimMovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Claims.ClaimMoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone's claim has been moved to another address. `[old, new]`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Claims.ClaimMoved') === '391b7a792248e7221ffbf77c01942251d2928a4e2b37c8103704237e0d5f69b6'
    }

    /**
     * Someone's claim has been moved to another address. `[old, new]`
     */
    get asMatrixEnjinV603(): {old: Uint8Array, new: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ClaimsClaimRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Claims.ClaimRejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone's claim has been rejected. `[account, transaction_hash]`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Claims.ClaimRejected') === '2206cf743f0862988a18f69a777471495cd397f0ddc561c6ca3dafb5ff4d9461'
    }

    /**
     * Someone's claim has been rejected. `[account, transaction_hash]`
     */
    get asMatrixEnjinV603(): {account: Uint8Array, transactionHash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ClaimsClaimRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Claims.ClaimRequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Claim has been requested by an account through the Relayer. `[who, amount,
     * transaction_hash, is_efi_token]`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Claims.ClaimRequested') === '4ab27b2decd5085ef5a51ef5f958786f987606af4967d894cacd32321deed43a'
    }

    /**
     * Claim has been requested by an account through the Relayer. `[who, amount,
     * transaction_hash, is_efi_token]`
     */
    get asMatrixEnjinV603(): {who: Uint8Array, amountBurned: bigint, transactionHash: Uint8Array, isEfiToken: boolean, amountClaimable: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Claim has been requested by an account through the Relayer. `[who, amount,
     * transaction_hash, is_efi_token, is_early_bird]`
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Claims.ClaimRequested') === '03603bb0b63674ff953e7b9b2a5004ab56d6ee94c87fb71dd96702d9dfef2fd5'
    }

    /**
     * Claim has been requested by an account through the Relayer. `[who, amount,
     * transaction_hash, is_efi_token, is_early_bird]`
     */
    get asV104(): {who: v104.Account, amount: bigint, transactionHash: Uint8Array, isEfiToken: boolean, isEarlyBird: boolean} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }
}

export class ClaimsClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Claims.Claimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone claimed some ENJ2 from EFI. `[who, ethereum_address, amount]`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Claims.Claimed') === '90aceb8c762fb3641d6c1bacc267cf16591d3a8651141a6e852d3cf24a86f20d'
    }

    /**
     * Someone claimed some ENJ2 from EFI. `[who, ethereum_address, amount]`
     */
    get asMatrixEnjinV603(): {who: Uint8Array, ethereumAddress: (Uint8Array | undefined), amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ClaimsClaimedEarlyBirdRewardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Claims.ClaimedEarlyBirdReward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone got an early bird reward `[who,
     * amount]`
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Claims.ClaimedEarlyBirdReward') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Someone got an early bird reward `[who,
     * amount]`
     */
    get asV104(): {who: Uint8Array, amount: bigint} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }
}

export class ClaimsClaimedEnjEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Claims.ClaimedEnj')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A user burned EFI in order to begin a claim of ENJ.
     */
    get isV101(): boolean {
        return this._chain.getEventHash('Claims.ClaimedEnj') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * A user burned EFI in order to begin a claim of ENJ.
     */
    get asV101(): {who: Uint8Array, amount: bigint} {
        assert(this.isV101)
        return this._chain.decodeEvent(this.event)
    }
}

export class ClaimsDelayTimeForClaimSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Claims.DelayTimeForClaimSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Delay time for claim is set. `[delay_time]`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Claims.DelayTimeForClaimSet') === '9919843de279df806342c680fb041fef5bf53146b6b6c11827b8297e977076c8'
    }

    /**
     * Delay time for claim is set. `[delay_time]`
     */
    get asMatrixEnjinV603(): {delayTime: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ClaimsEarlyBirdRewardCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Claims.EarlyBirdRewardCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone got an early bird reward based on ENJ2 Staked in nomination pool `[who,
     * amount]`
     */
    get isV102(): boolean {
        return this._chain.getEventHash('Claims.EarlyBirdRewardCreated') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Someone got an early bird reward based on ENJ2 Staked in nomination pool `[who,
     * amount]`
     */
    get asV102(): {who: Uint8Array, amount: bigint} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class ClaimsEthereumBlocksProcessedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Claims.EthereumBlocksProcessed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Claims have been processed for the Ethereum block by the Relayer.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Claims.EthereumBlocksProcessed') === '7eefc4ef9a2f34cfee29738715aa72fe2a31ffd39b1d2a62f1cef547b70ed1fd'
    }

    /**
     * Claims have been processed for the Ethereum block by the Relayer.
     */
    get asMatrixEnjinV603(): {blockNumber: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ClaimsExchangeRateSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Claims.ExchangeRateSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Exchange rate is set. `[exchange_rate]`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Claims.ExchangeRateSet') === 'e0ecf12467b2b7b1c63fa9fd99c3600e15ae004bf61becf84a11146e37f2aab6'
    }

    /**
     * Exchange rate is set. `[exchange_rate]`
     */
    get asMatrixEnjinV603(): {exchangeRate: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorStakingCandidateJoinedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorStaking.CandidateJoined')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new candidate joined the list of candidates.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CollatorStaking.CandidateJoined') === 'f3fde36c9684eb79de0a1b490535e0f48f04cf0a348860f884f7e2ead56e55d9'
    }

    /**
     * A new candidate joined the list of candidates.
     */
    get asMatrixEnjinV603(): {accountId: Uint8Array, amount: bigint, rewardsCut: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorStakingCandidateRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorStaking.CandidateRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Candidate was removed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CollatorStaking.CandidateRemoved') === '4c99ef39b683041b136506afc1f762bdcd37f0231162345da388897a103d3710'
    }

    /**
     * Candidate was removed.
     */
    get asMatrixEnjinV603(): {accountId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorStakingCollatorSelectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorStaking.CollatorSelected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A candidate has been selected to become a collator for the current round.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CollatorStaking.CollatorSelected') === '4c99ef39b683041b136506afc1f762bdcd37f0231162345da388897a103d3710'
    }

    /**
     * A candidate has been selected to become a collator for the current round.
     */
    get asMatrixEnjinV603(): {accountId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorStakingNewInvulnerablesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorStaking.NewInvulnerables')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new list of invulnerables has been set by root.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CollatorStaking.NewInvulnerables') === '4f4db85b7e763f702804fa793ac5cba68cfd546b497830a9c3c21dced2b91524'
    }

    /**
     * A new list of invulnerables has been set by root.
     */
    get asMatrixEnjinV603(): {new: Uint8Array[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorStakingNominatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorStaking.Nominated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new nomination was registered for a specific candidate.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CollatorStaking.Nominated') === 'e92f24d1473344b5c78de6cd4cb25c3583c8b45653e5ef7765a711cc41db99cd'
    }

    /**
     * A new nomination was registered for a specific candidate.
     */
    get asMatrixEnjinV603(): {accountId: Uint8Array, collatorId: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorStakingNominationRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorStaking.NominationRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Nomination was removed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CollatorStaking.NominationRemoved') === 'e92f24d1473344b5c78de6cd4cb25c3583c8b45653e5ef7765a711cc41db99cd'
    }

    /**
     * Nomination was removed.
     */
    get asMatrixEnjinV603(): {accountId: Uint8Array, collatorId: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CollatorStakingRoundFinalizedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CollatorStaking.RoundFinalized')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new round was finalized
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CollatorStaking.RoundFinalized') === '0887503579c2b4b6d8d4a30bb0ed96879579c0d1adaa9d8219ee6a7e3025d4fd'
    }

    /**
     * A new round was finalized
     */
    get asMatrixEnjinV603(): {number: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CommunityPoolAwardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CommunityPool.Awarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some funds have been allocated.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CommunityPool.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
    }

    /**
     * Some funds have been allocated.
     */
    get asMatrixEnjinV603(): {proposalIndex: number, award: bigint, account: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CommunityPoolBurntEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CommunityPool.Burnt')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some of our funds have been burnt.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CommunityPool.Burnt') === '9d1d11cb2e24085666bf949195a4030bd6e80ff41274d0386073977e7cd59a87'
    }

    /**
     * Some of our funds have been burnt.
     */
    get asMatrixEnjinV603(): {burntFunds: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CommunityPoolDepositEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CommunityPool.Deposit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some funds have been deposited.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CommunityPool.Deposit') === 'd74027ad27459f17d7446fef449271d1b0dc12b852c175623e871d009a661493'
    }

    /**
     * Some funds have been deposited.
     */
    get asMatrixEnjinV603(): {value: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CommunityPoolProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CommunityPool.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New proposal.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CommunityPool.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
    }

    /**
     * New proposal.
     */
    get asMatrixEnjinV603(): {proposalIndex: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CommunityPoolRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CommunityPool.Rejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CommunityPool.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get asMatrixEnjinV603(): {proposalIndex: number, slashed: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CommunityPoolRolloverEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CommunityPool.Rollover')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CommunityPool.Rollover') === 'c9e720e2b3ada12c617b4dcb70771c3afafb9e294bf362df01a9e129683a92dd'
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get asMatrixEnjinV603(): {rolloverBalance: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CommunityPoolSpendApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CommunityPool.SpendApproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new spend proposal has been approved.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CommunityPool.SpendApproved') === 'fce90c02bffde89fb0e8723868aa8e94bfe9c1c48c5af8c34efd8ff5173184f9'
    }

    /**
     * A new spend proposal has been approved.
     */
    get asMatrixEnjinV603(): {proposalIndex: number, amount: bigint, beneficiary: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CommunityPoolSpendingEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CommunityPool.Spending')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CommunityPool.Spending') === 'b9f599ccbbe2e4fd1004f47546e1a3100bc78745b24ac47ac03ed16ca6266290'
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get asMatrixEnjinV603(): {budgetRemaining: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CommunityPoolUpdatedInactiveEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CommunityPool.UpdatedInactive')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The inactive funds of the pallet have been updated.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CommunityPool.UpdatedInactive') === 'd25083f089d99f72f11dfcdd8481dbdc5c0c6d9c3369646530e2e08cd9f6bbba'
    }

    /**
     * The inactive funds of the pallet have been updated.
     */
    get asMatrixEnjinV603(): {reactivated: bigint, deactivated: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ConvictionVotingDelegatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ConvictionVoting.Delegated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has delegated their vote to another account. \[who, target\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ConvictionVoting.Delegated') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     * An account has delegated their vote to another account. \[who, target\]
     */
    get asV100(): [Uint8Array, Uint8Array] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ConvictionVotingUndelegatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ConvictionVoting.Undelegated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An \[account\] has cancelled a previous delegation operation.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ConvictionVoting.Undelegated') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * An \[account\] has cancelled a previous delegation operation.
     */
    get asV100(): Uint8Array {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Council.Executed') === '6820679ab2706380fa3eaa694e707b2dd6bcd901fb46cdcafbea7b2f05d8feba'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array, result: matrixEnjinV603.Type_35} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilMemberExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.MemberExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Council.MemberExecuted') === '6820679ab2706380fa3eaa694e707b2dd6bcd901fb46cdcafbea7b2f05d8feba'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array, result: matrixEnjinV603.Type_35} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asMatrixEnjinV603(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CouncilVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Council.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asMatrixEnjinV603(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanAddedToNewRaiseEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.AddedToNewRaise')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A parachain has been moved to `NewRaise`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Crowdloan.AddedToNewRaise') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * A parachain has been moved to `NewRaise`
     */
    get asV100(): {paraId: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanAllRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.AllRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * All loans in a fund have been refunded.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Crowdloan.AllRefunded') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * All loans in a fund have been refunded.
     */
    get asV100(): {paraId: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanContributedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.Contributed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Contributed to a crowd sale.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Crowdloan.Contributed') === 'a09bba4441a47a7b463e5f26020197386183019a6130ce697a434ee31cc39482'
    }

    /**
     * Contributed to a crowd sale.
     */
    get asV100(): {who: Uint8Array, fundIndex: number, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.Created')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Create a new crowdloaning campaign.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Crowdloan.Created') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * Create a new crowdloaning campaign.
     */
    get asV100(): {paraId: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanDissolvedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.Dissolved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Fund is dissolved.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Crowdloan.Dissolved') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * Fund is dissolved.
     */
    get asV100(): {paraId: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanEditedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.Edited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The configuration to a crowdloan has been edited.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Crowdloan.Edited') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * The configuration to a crowdloan has been edited.
     */
    get asV100(): {paraId: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanHandleBidResultEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.HandleBidResult')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Crowdloan.HandleBidResult') === '83e7fdd7c42720aa50d20c9b8945af9e8ffb939452047d83d6c9a0eb29e9d0ec'
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get asV100(): {paraId: number, result: v100.Type_54} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Crowdloan.HandleBidResult') === 'dad0633e1d0e651651b57261e1cab48a51f7679850620f2fc0ab6b30b146e984'
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get asV104(): {paraId: number, result: v104.Type_55} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get isV105(): boolean {
        return this._chain.getEventHash('Crowdloan.HandleBidResult') === '1cdfe7a7877c18a19ae8f1677c8750993efff4b3aebaac58261a2bbaab73dc24'
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get asV105(): {paraId: number, result: v105.Type_55} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanMemoUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.MemoUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A memo has been updated.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Crowdloan.MemoUpdated') === '2a9892b8f4e1d06ab30af22f0706a459528fcb9a6f3f85b25bd4d895be00bef7'
    }

    /**
     * A memo has been updated.
     */
    get asV100(): {who: Uint8Array, paraId: number, memo: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanPartiallyRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.PartiallyRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The loans in a fund have been partially dissolved, i.e. there are some left
     * over child keys that still need to be killed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Crowdloan.PartiallyRefunded') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * The loans in a fund have been partially dissolved, i.e. there are some left
     * over child keys that still need to be killed.
     */
    get asV100(): {paraId: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanWithdrewEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.Withdrew')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Withdrew full balance of a contributor.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Crowdloan.Withdrew') === 'a09bba4441a47a7b463e5f26020197386183019a6130ce697a434ee31cc39482'
    }

    /**
     * Withdrew full balance of a contributor.
     */
    get asV100(): {who: Uint8Array, fundIndex: number, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class CumulusXcmExecutedDownwardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CumulusXcm.ExecutedDownward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === '0a5524dcf48d575bf19533e72499c1b6f08167113160e1bb190028315c81787f'
    }

    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asMatrixEnjinV603(): [Uint8Array, matrixEnjinV603.V3Outcome] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CumulusXcmInvalidFormatEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CumulusXcm.InvalidFormat')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CumulusXcm.InvalidFormat') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    get asMatrixEnjinV603(): Uint8Array {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class CumulusXcmUnsupportedVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'CumulusXcm.UnsupportedVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('CumulusXcm.UnsupportedVersion') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    get asMatrixEnjinV603(): Uint8Array {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyBlacklistedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Blacklisted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal_hash has been blacklisted permanently.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.Blacklisted') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A proposal_hash has been blacklisted permanently.
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Cancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been cancelled.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A referendum has been cancelled.
     */
    get asMatrixEnjinV603(): {refIndex: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyDelegatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Delegated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has delegated their vote to another account.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.Delegated') === 'd8ff3867ebae06e6ac747a81d5397793d2a1994d97871736019b811a47b1be06'
    }

    /**
     * An account has delegated their vote to another account.
     */
    get asMatrixEnjinV603(): {who: Uint8Array, target: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyExternalTabledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.ExternalTabled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An external proposal has been tabled.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.ExternalTabled') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * An external proposal has been tabled.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.MetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a proposal or a referendum has been cleared.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.MetadataCleared') === '5973f98e3dfb93077820ad77490dd9fe605110b75a8f006f1565898a599055ab'
    }

    /**
     * Metadata for a proposal or a referendum has been cleared.
     */
    get asMatrixEnjinV603(): {owner: matrixEnjinV603.MetadataOwner, hash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.MetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a proposal or a referendum has been set.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.MetadataSet') === '5973f98e3dfb93077820ad77490dd9fe605110b75a8f006f1565898a599055ab'
    }

    /**
     * Metadata for a proposal or a referendum has been set.
     */
    get asMatrixEnjinV603(): {owner: matrixEnjinV603.MetadataOwner, hash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyMetadataTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.MetadataTransferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata has been transferred to new owner.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.MetadataTransferred') === '6a30d674b0ce2457e6cff0b5493fa843349fa6b51c1641c1ac02b3f35ebbb927'
    }

    /**
     * Metadata has been transferred to new owner.
     */
    get asMatrixEnjinV603(): {prevOwner: matrixEnjinV603.MetadataOwner, owner: matrixEnjinV603.MetadataOwner, hash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyNotPassedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.NotPassed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asMatrixEnjinV603(): {refIndex: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyPassedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Passed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been approved by referendum.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * A proposal has been approved by referendum.
     */
    get asMatrixEnjinV603(): {refIndex: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyProposalCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.ProposalCanceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal got canceled.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.ProposalCanceled') === '4229a060ed682a59f5b96a0a1d18ae4a471b42fbbe5beff110f3dbb41e7d7224'
    }

    /**
     * A proposal got canceled.
     */
    get asMatrixEnjinV603(): {propIndex: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion has been proposed by a public account.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A motion has been proposed by a public account.
     */
    get asMatrixEnjinV603(): {proposalIndex: number, deposit: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracySecondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Seconded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has secconded a proposal
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.Seconded') === '956e0986199802f7d7e337068d26fc51e710bdd0e5dd70631ef3328ea5baafe1'
    }

    /**
     * An account has secconded a proposal
     */
    get asMatrixEnjinV603(): {seconder: Uint8Array, propIndex: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Started')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has begun.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
    }

    /**
     * A referendum has begun.
     */
    get asMatrixEnjinV603(): {refIndex: number, threshold: matrixEnjinV603.VoteThreshold} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyTabledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Tabled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.Tabled') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
    }

    /**
     * A public proposal has been tabled for referendum vote.
     */
    get asMatrixEnjinV603(): {proposalIndex: number, deposit: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyUndelegatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Undelegated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has cancelled a previous delegation operation.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.Undelegated') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account has cancelled a previous delegation operation.
     */
    get asMatrixEnjinV603(): {account: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyVetoedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Vetoed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An external proposal has been vetoed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.Vetoed') === '8c436495ac4c75fd20d25b6b1c1b2bbebbea576444eac1b5b7b15ecb833e5c4f'
    }

    /**
     * An external proposal has been vetoed.
     */
    get asMatrixEnjinV603(): {who: Uint8Array, proposalHash: Uint8Array, until: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DemocracyVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Democracy.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has voted in a referendum
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Democracy.Voted') === '1f7c6893e642faadc0fb2681a07f3aa74579a935cb93e932ab8fd8a9e9fe739c'
    }

    /**
     * An account has voted in a referendum
     */
    get asMatrixEnjinV603(): {voter: Uint8Array, refIndex: number, vote: matrixEnjinV603.AccountVote} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DmpQueueExecutedDownwardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DmpQueue.ExecutedDownward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Downward message executed with the given outcome.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('DmpQueue.ExecutedDownward') === 'bbdc5e15442f2bee7199707f9da66674b3ad89835c84687a406e183c7d31121e'
    }

    /**
     * Downward message executed with the given outcome.
     */
    get asMatrixEnjinV603(): {messageId: Uint8Array, outcome: matrixEnjinV603.V3Outcome} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DmpQueueInvalidFormatEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DmpQueue.InvalidFormat')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Downward message is invalid XCM.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('DmpQueue.InvalidFormat') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
    }

    /**
     * Downward message is invalid XCM.
     */
    get asMatrixEnjinV603(): {messageId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DmpQueueMaxMessagesExhaustedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DmpQueue.MaxMessagesExhausted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The maximum number of downward messages was.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('DmpQueue.MaxMessagesExhausted') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
    }

    /**
     * The maximum number of downward messages was.
     */
    get asMatrixEnjinV603(): {messageId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DmpQueueOverweightEnqueuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DmpQueue.OverweightEnqueued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === '48bcfc366f324064903ddb05910b4d640e5483bb8166484d427fea6ec6716e87'
    }

    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    get asMatrixEnjinV603(): {messageId: Uint8Array, overweightIndex: bigint, requiredWeight: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DmpQueueOverweightServicedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DmpQueue.OverweightServiced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'cbdd24f98e134531ca4f33efcf4821b24f3245563e8787df9ab5a61e3def65fe'
    }

    /**
     * Downward message from the overweight queue was executed.
     */
    get asMatrixEnjinV603(): {overweightIndex: bigint, weightUsed: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DmpQueueUnsupportedVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DmpQueue.UnsupportedVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Downward message is unsupported version of XCM.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
    }

    /**
     * Downward message is unsupported version of XCM.
     */
    get asMatrixEnjinV603(): {messageId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class DmpQueueWeightExhaustedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'DmpQueue.WeightExhausted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('DmpQueue.WeightExhausted') === 'e2c32a245af45a14cf9180adc1d112198df722bb27ee76b5ea163138bb102466'
    }

    /**
     * The weight limit for handling downward messages was reached.
     */
    get asMatrixEnjinV603(): {messageId: Uint8Array, remainingWeight: matrixEnjinV603.Weight, requiredWeight: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseElectionFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.ElectionFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An election failed.
     * 
     * Not much can be said about which computes failed in the process.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.ElectionFailed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * An election failed.
     * 
     * Not much can be said about which computes failed in the process.
     */
    get asV100(): null {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseElectionFinalizedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.ElectionFinalized')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The election has been finalized, with the given computation and score.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.ElectionFinalized') === 'ed50f7c0b841dc5aadb056d9e4cf2c665a79bd8ac019de47ef20e466590483fa'
    }

    /**
     * The election has been finalized, with the given computation and score.
     */
    get asV100(): {compute: v100.ElectionCompute, score: v100.ElectionScore} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhasePhaseTransitionedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.PhaseTransitioned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * There was a phase transition in a given round.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.PhaseTransitioned') === 'c7ca79c013a2eb6682b0eae5badc17841b3fa2ec00221d968b3e1fb4ce1f7d8f'
    }

    /**
     * There was a phase transition in a given round.
     */
    get asV100(): {from: v100.Phase, to: v100.Phase, round: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.Rewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has been rewarded for their signed submission being finalized.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Rewarded') === '40dc3f4441ce8afa08ec542ce4412dbb8092d4ee5e0753ec1d7ffd7233b442d4'
    }

    /**
     * An account has been rewarded for their signed submission being finalized.
     */
    get asV100(): {account: Uint8Array, value: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has been slashed for submitting an invalid signed submission.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Slashed') === '40dc3f4441ce8afa08ec542ce4412dbb8092d4ee5e0753ec1d7ffd7233b442d4'
    }

    /**
     * An account has been slashed for submitting an invalid signed submission.
     */
    get asV100(): {account: Uint8Array, value: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseSolutionStoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.SolutionStored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A solution was stored with the given compute.
     * 
     * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
     * the stored solution was submited in the signed phase by a miner with the `AccountId`.
     * Otherwise, the solution was stored either during the unsigned phase or by
     * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
     * room for this one.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.SolutionStored') === '66fb962d8c6d753e5c5954ef51f605c0221a1597d71cb5cf595e74ae264b9d57'
    }

    /**
     * A solution was stored with the given compute.
     * 
     * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
     * the stored solution was submited in the signed phase by a miner with the `AccountId`.
     * Otherwise, the solution was stored either during the unsigned phase or by
     * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
     * room for this one.
     */
    get asV100(): {compute: v100.ElectionCompute, origin: (Uint8Array | undefined), prevEjected: boolean} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ExtrinsicPauseExtrinsicPausedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ExtrinsicPause.ExtrinsicPaused')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Extrinsic is paused.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('ExtrinsicPause.ExtrinsicPaused') === '6ef577cdfb00cd6410f53ba28c3235494d461bd891dc700de04b9b0006f06777'
    }

    /**
     * Extrinsic is paused.
     */
    get asMatrixEnjinV603(): {palletName: Uint8Array, extrinsicName: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ExtrinsicPauseExtrinsicResumedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ExtrinsicPause.ExtrinsicResumed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Extrinsic is resumed
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('ExtrinsicPause.ExtrinsicResumed') === '6ef577cdfb00cd6410f53ba28c3235494d461bd891dc700de04b9b0006f06777'
    }

    /**
     * Extrinsic is resumed
     */
    get asMatrixEnjinV603(): {palletName: Uint8Array, extrinsicName: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ExtrinsicPausePalletPausedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ExtrinsicPause.PalletPaused')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * All pallet extrinsics are paused.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('ExtrinsicPause.PalletPaused') === '05a07cab9aa4011d0b711292d898fdb778885ca7cb3469b117d99d61976a52e1'
    }

    /**
     * All pallet extrinsics are paused.
     */
    get asMatrixEnjinV603(): {palletName: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ExtrinsicPausePalletResumedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ExtrinsicPause.PalletResumed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * All pallet extrinsics are resumed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('ExtrinsicPause.PalletResumed') === '05a07cab9aa4011d0b711292d898fdb778885ca7cb3469b117d99d61976a52e1'
    }

    /**
     * All pallet extrinsics are resumed.
     */
    get asMatrixEnjinV603(): {palletName: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipCollectiveMemberAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipCollective.MemberAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A member `who` has been added.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipCollective.MemberAdded') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * A member `who` has been added.
     */
    get asV100(): {who: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipCollectiveMemberRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipCollective.MemberRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The member `who` of given `rank` has been removed from the collective.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipCollective.MemberRemoved') === '5080eb025a7848cb439a025b43b6596f33439d645c16482a30618a37835e8521'
    }

    /**
     * The member `who` of given `rank` has been removed from the collective.
     */
    get asV100(): {who: Uint8Array, rank: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipCollectiveRankChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipCollective.RankChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The member `who`se rank has been changed to the given `rank`.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipCollective.RankChanged') === '5080eb025a7848cb439a025b43b6596f33439d645c16482a30618a37835e8521'
    }

    /**
     * The member `who`se rank has been changed to the given `rank`.
     */
    get asV100(): {who: Uint8Array, rank: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipCollectiveVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipCollective.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The member `who` has voted for the `poll` with the given `vote` leading to an updated
     * `tally`.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipCollective.Voted') === '1e8b7638b00c21d8eb4a245b3849c29dcbe5d497fb1ea94e10366bbe62298459'
    }

    /**
     * The member `who` has voted for the `poll` with the given `vote` leading to an updated
     * `tally`.
     */
    get asV100(): {who: Uint8Array, poll: number, vote: v100.VoteRecord, tally: v100.Type_495} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Approved') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    get asV100(): {index: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.Cancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been cancelled.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Cancelled') === '82fd181f27bae3c475399eb647e3affeeae28c3f5ec1a26b5e4a035fd80cdd6e'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV100(): {index: number, tally: v100.Type_495} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaConfirmAbortedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.ConfirmAborted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.ConfirmAborted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV100(): {index: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaConfirmStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.ConfirmStarted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.ConfirmStarted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV100(): {index: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaConfirmedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.Confirmed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Confirmed') === '82fd181f27bae3c475399eb647e3affeeae28c3f5ec1a26b5e4a035fd80cdd6e'
    }

    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    get asV100(): {index: number, tally: v100.Type_495} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaDecisionDepositPlacedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.DecisionDepositPlaced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The decision deposit has been placed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.DecisionDepositPlaced') === '8d812a67c45bf964e1e2d13abd2a5d17e96af87348faff52d6eca5de04291ae9'
    }

    /**
     * The decision deposit has been placed.
     */
    get asV100(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaDecisionDepositRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.DecisionDepositRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The decision deposit has been refunded.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.DecisionDepositRefunded') === '8d812a67c45bf964e1e2d13abd2a5d17e96af87348faff52d6eca5de04291ae9'
    }

    /**
     * The decision deposit has been refunded.
     */
    get asV100(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaDecisionStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.DecisionStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has moved into the deciding phase.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.DecisionStarted') === '7b43b10b87be9de2cade1d415477351c543262308d97fdd478a291867bdc26a5'
    }

    /**
     * A referendum has moved into the deciding phase.
     */
    get asV100(): {index: number, track: number, proposal: v100.Bounded, tally: v100.Type_495} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaDepositSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.DepositSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A deposit has been slashaed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.DepositSlashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * A deposit has been slashaed.
     */
    get asV100(): {who: Uint8Array, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaKilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.Killed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been killed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Killed') === '82fd181f27bae3c475399eb647e3affeeae28c3f5ec1a26b5e4a035fd80cdd6e'
    }

    /**
     * A referendum has been killed.
     */
    get asV100(): {index: number, tally: v100.Type_495} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.MetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a referendum has been cleared.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.MetadataCleared') === 'bcccfeca753f71fa9a69022a68c8a101a4dcc752e055426850d08a4ccc07337d'
    }

    /**
     * Metadata for a referendum has been cleared.
     */
    get asV104(): {index: number, hash: Uint8Array} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.MetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a referendum has been set.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.MetadataSet') === 'bcccfeca753f71fa9a69022a68c8a101a4dcc752e055426850d08a4ccc07337d'
    }

    /**
     * Metadata for a referendum has been set.
     */
    get asV104(): {index: number, hash: Uint8Array} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.Rejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Rejected') === '82fd181f27bae3c475399eb647e3affeeae28c3f5ec1a26b5e4a035fd80cdd6e'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV100(): {index: number, tally: v100.Type_495} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaSubmissionDepositRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.SubmissionDepositRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The submission deposit has been refunded.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.SubmissionDepositRefunded') === '8d812a67c45bf964e1e2d13abd2a5d17e96af87348faff52d6eca5de04291ae9'
    }

    /**
     * The submission deposit has been refunded.
     */
    get asV100(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaSubmittedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.Submitted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been submitted.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.Submitted') === 'dd1db40cab9e2e0c54e203f9c60347029a08160d5930b550604e5378d4c502df'
    }

    /**
     * A referendum has been submitted.
     */
    get asV100(): {index: number, track: number, proposal: v100.Bounded} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FellowshipReferendaTimedOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FellowshipReferenda.TimedOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been timed out without being decided.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('FellowshipReferenda.TimedOut') === '82fd181f27bae3c475399eb647e3affeeae28c3f5ec1a26b5e4a035fd80cdd6e'
    }

    /**
     * A referendum has been timed out without being decided.
     */
    get asV100(): {index: number, tally: v100.Type_495} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class FuelTanksAccountAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FuelTanks.AccountAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was added to a [`FuelTank`]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('FuelTanks.AccountAdded') === 'eaba5f9eb5b376c10a9ee1aded196439de7b5045a6bdf4f20126a6ceada70754'
    }

    /**
     * An account was added to a [`FuelTank`]
     */
    get asMatrixEnjinV603(): {tankId: Uint8Array, userId: Uint8Array, tankDeposit: bigint, userDeposit: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was added to a [`FuelTank`]
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getEventHash('FuelTanks.AccountAdded') === 'fdaac5d1fd560c5965f1bc6ff72448c8e1da64b1a7a9cb4b6c0c77dab802dd2a'
    }

    /**
     * An account was added to a [`FuelTank`]
     */
    get asMatrixEnjinV1000(): {tankId: Uint8Array, userId: Uint8Array, tankDeposit: bigint, userDeposit: bigint, totalReceived: bigint} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was added to a [`FuelTank`]
     */
    get isV102(): boolean {
        return this._chain.getEventHash('FuelTanks.AccountAdded') === 'eaba5f9eb5b376c10a9ee1aded196439de7b5045a6bdf4f20126a6ceada70754'
    }

    /**
     * An account was added to a [`FuelTank`]
     */
    get asV102(): {tankId: Uint8Array, userId: Uint8Array, tankDeposit: bigint, userDeposit: bigint} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was added to a [`FuelTank`]
     */
    get isV1021(): boolean {
        return this._chain.getEventHash('FuelTanks.AccountAdded') === 'fdaac5d1fd560c5965f1bc6ff72448c8e1da64b1a7a9cb4b6c0c77dab802dd2a'
    }

    /**
     * An account was added to a [`FuelTank`]
     */
    get asV1021(): {tankId: Uint8Array, userId: Uint8Array, tankDeposit: bigint, userDeposit: bigint, totalReceived: bigint} {
        assert(this.isV1021)
        return this._chain.decodeEvent(this.event)
    }
}

export class FuelTanksAccountRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FuelTanks.AccountRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was removed from a [`FuelTank`]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('FuelTanks.AccountRemoved') === '43c705fb2ded534752f36760bbd7adf8ef7a48bb267a3e4ba8d013de6ebb2af7'
    }

    /**
     * An account was removed from a [`FuelTank`]
     */
    get asMatrixEnjinV603(): {tankId: Uint8Array, userId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class FuelTanksAccountRuleDataRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FuelTanks.AccountRuleDataRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('FuelTanks.AccountRuleDataRemoved') === '5a236b56107bcad5eb7d987ef926899db96b36ea5b6671becf5e98d5053e95e7'
    }

    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    get asMatrixEnjinV603(): {tankId: Uint8Array, userId: Uint8Array, ruleSetId: number, ruleKind: matrixEnjinV603.DispatchRuleKind} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getEventHash('FuelTanks.AccountRuleDataRemoved') === '5da478de13b8078dff71552922d205abc9e8ed36a3cc8301889885355ba8ccd6'
    }

    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    get asMatrixEnjinV1000(): {tankId: Uint8Array, userId: Uint8Array, ruleSetId: number, ruleKind: matrixEnjinV1000.DispatchRuleKind} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    get isV102(): boolean {
        return this._chain.getEventHash('FuelTanks.AccountRuleDataRemoved') === '5a236b56107bcad5eb7d987ef926899db96b36ea5b6671becf5e98d5053e95e7'
    }

    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    get asV102(): {tankId: Uint8Array, userId: Uint8Array, ruleSetId: number, ruleKind: v102.DispatchRuleKind} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    get isV1021(): boolean {
        return this._chain.getEventHash('FuelTanks.AccountRuleDataRemoved') === '5da478de13b8078dff71552922d205abc9e8ed36a3cc8301889885355ba8ccd6'
    }

    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    get asV1021(): {tankId: Uint8Array, userId: Uint8Array, ruleSetId: number, ruleKind: v1021.DispatchRuleKind} {
        assert(this.isV1021)
        return this._chain.decodeEvent(this.event)
    }
}

export class FuelTanksCallDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FuelTanks.CallDispatched')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A call was dispatched through a [`FuelTank`].
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('FuelTanks.CallDispatched') === 'c286719ddfc6a64566bdc115c4ace78fd41c94915f092887ef38021ae647e549'
    }

    /**
     * A call was dispatched through a [`FuelTank`].
     */
    get asMatrixEnjinV603(): {caller: Uint8Array, tankId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class FuelTanksConsumptionSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FuelTanks.ConsumptionSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The consumption for an account was set for a rule set on a [`FuelTank`]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('FuelTanks.ConsumptionSet') === '060d3726c09d4bf39a8170bce46b0e962e6156f845c7aa3783726e37856cd0fe'
    }

    /**
     * The consumption for an account was set for a rule set on a [`FuelTank`]
     */
    get asMatrixEnjinV603(): {tankId: Uint8Array, userId: (Uint8Array | undefined), ruleSetId: number, consumption: matrixEnjinV603.Consumption} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class FuelTanksDispatchFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FuelTanks.DispatchFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The dispatch of a call has failed
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('FuelTanks.DispatchFailed') === 'b8f1b16f9c4db0379c42ed84fb2c36157997ff8b65b02ad920fb41fe7628ac4b'
    }

    /**
     * The dispatch of a call has failed
     */
    get asMatrixEnjinV603(): {tankId: Uint8Array, caller: Uint8Array, error: matrixEnjinV603.DispatchError} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The dispatch of a call has failed
     */
    get isV102(): boolean {
        return this._chain.getEventHash('FuelTanks.DispatchFailed') === 'f970b8f37c9a8c766c85b1f637a0df7bb53adc91cec3f125a4bb1ff5b20ad335'
    }

    /**
     * The dispatch of a call has failed
     */
    get asV102(): {tankId: Uint8Array, caller: Uint8Array, error: v102.DispatchError} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The dispatch of a call has failed
     */
    get isV104(): boolean {
        return this._chain.getEventHash('FuelTanks.DispatchFailed') === 'd9f757c05fd07f9e190422b766d54a656da3a7c9bdeada71be000f0b5172bf91'
    }

    /**
     * The dispatch of a call has failed
     */
    get asV104(): {tankId: Uint8Array, caller: Uint8Array, error: v104.DispatchError} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The dispatch of a call has failed
     */
    get isV105(): boolean {
        return this._chain.getEventHash('FuelTanks.DispatchFailed') === 'b8f1b16f9c4db0379c42ed84fb2c36157997ff8b65b02ad920fb41fe7628ac4b'
    }

    /**
     * The dispatch of a call has failed
     */
    get asV105(): {tankId: Uint8Array, caller: Uint8Array, error: v105.DispatchError} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class FuelTanksFreezeStateMutatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FuelTanks.FreezeStateMutated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The freeze state change for fuel tank or its rule set was executed in `on_finalize`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('FuelTanks.FreezeStateMutated') === '487d487c4b8088c43cf90c0ffbee2c293b22157c580d0629a9657751820d3405'
    }

    /**
     * The freeze state change for fuel tank or its rule set was executed in `on_finalize`
     */
    get asMatrixEnjinV603(): {tankId: Uint8Array, ruleSetId: (number | undefined), isFrozen: boolean} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class FuelTanksFuelTankCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FuelTanks.FuelTankCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new [`FuelTank`] was created.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('FuelTanks.FuelTankCreated') === '5048d94dfd3a5170e9ea1d697d818d3166955fb933f983e64f3af4cd0e7b2c52'
    }

    /**
     * A new [`FuelTank`] was created.
     */
    get asMatrixEnjinV603(): {owner: Uint8Array, name: Uint8Array, tankId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class FuelTanksFuelTankDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FuelTanks.FuelTankDestroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A [`FuelTank`] was destroyed
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('FuelTanks.FuelTankDestroyed') === '4a9035be2f47fbe13a50c15f06b7abda8e85d0d8378fc409cc5492db6ff608d5'
    }

    /**
     * A [`FuelTank`] was destroyed
     */
    get asMatrixEnjinV603(): {tankId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class FuelTanksFuelTankMutatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FuelTanks.FuelTankMutated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A [`FuelTank`] was mutated
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('FuelTanks.FuelTankMutated') === 'bd9b1c3917349e5b63b5cfa4994a2cfe8969b43bab28ae51dbafc0cfd500ceac'
    }

    /**
     * A [`FuelTank`] was mutated
     */
    get asMatrixEnjinV603(): {tankId: Uint8Array, mutation: matrixEnjinV603.DefaultTankMutation} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class FuelTanksMutateFreezeStateScheduledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FuelTanks.MutateFreezeStateScheduled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The freeze state mutation for fuel tank or its rule set was scheduled
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('FuelTanks.MutateFreezeStateScheduled') === '487d487c4b8088c43cf90c0ffbee2c293b22157c580d0629a9657751820d3405'
    }

    /**
     * The freeze state mutation for fuel tank or its rule set was scheduled
     */
    get asMatrixEnjinV603(): {tankId: Uint8Array, ruleSetId: (number | undefined), isFrozen: boolean} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class FuelTanksRuleSetInsertedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FuelTanks.RuleSetInserted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new rule set was added to [`FuelTank`]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('FuelTanks.RuleSetInserted') === 'f0c7cbfea12e67a5e10a71fb2103b883d2fdacdce7e9e339d55ea06b41087531'
    }

    /**
     * A new rule set was added to [`FuelTank`]
     */
    get asMatrixEnjinV603(): {tankId: Uint8Array, ruleSetId: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class FuelTanksRuleSetRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FuelTanks.RuleSetRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A rule set was removed from [`FuelTank`]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('FuelTanks.RuleSetRemoved') === 'f0c7cbfea12e67a5e10a71fb2103b883d2fdacdce7e9e339d55ea06b41087531'
    }

    /**
     * A rule set was removed from [`FuelTank`]
     */
    get asMatrixEnjinV603(): {tankId: Uint8Array, ruleSetId: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class FuelTanksScheduleMutateFreezeStateFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FuelTanks.ScheduleMutateFreezeStateFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('FuelTanks.ScheduleMutateFreezeStateFailed') === '95b413ce19082ba4904572d53b5ac6dd39ebb3ff2ee7dffc9cff04790001d66f'
    }

    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    get asMatrixEnjinV603(): {tankId: Uint8Array, ruleSetId: (number | undefined), isFrozen: boolean, error: matrixEnjinV603.DispatchError} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    get isV102(): boolean {
        return this._chain.getEventHash('FuelTanks.ScheduleMutateFreezeStateFailed') === '3dd605efa4203aa1ffebf8cde16e032dd68b40f907b4483f04a44e9a4770a65d'
    }

    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    get asV102(): {tankId: Uint8Array, ruleSetId: (number | undefined), isFrozen: boolean, error: v102.DispatchError} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    get isV104(): boolean {
        return this._chain.getEventHash('FuelTanks.ScheduleMutateFreezeStateFailed') === 'dc9ad6b566b745be5ed408d534ce44157f1ad4307a3ec1a29c489fe844ba12d6'
    }

    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    get asV104(): {tankId: Uint8Array, ruleSetId: (number | undefined), isFrozen: boolean, error: v104.DispatchError} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    get isV105(): boolean {
        return this._chain.getEventHash('FuelTanks.ScheduleMutateFreezeStateFailed') === '95b413ce19082ba4904572d53b5ac6dd39ebb3ff2ee7dffc9cff04790001d66f'
    }

    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    get asV105(): {tankId: Uint8Array, ruleSetId: (number | undefined), isFrozen: boolean, error: v105.DispatchError} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaNewAuthoritiesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.NewAuthorities')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New authority set has been applied.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Grandpa.NewAuthorities') === 'e25505d283e6b21359efad4ea3b01da035cbbe2b268fd3cbfb12ca0b5577a9de'
    }

    /**
     * New authority set has been applied.
     */
    get asV100(): {authoritySet: [Uint8Array, bigint][]} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaPausedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.Paused')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Current authority set has been paused.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Grandpa.Paused') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Current authority set has been paused.
     */
    get asV100(): null {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaResumedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.Resumed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Current authority set has been resumed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Grandpa.Resumed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Current authority set has been resumed.
     */
    get asV100(): null {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpChannelClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.ChannelClosed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * HRMP channel closed. `[by_parachain, channel_id]`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Hrmp.ChannelClosed') === '950113c2f5d63a9de3d54be151be099403d5b06a4e13f505b42e20187b08bde7'
    }

    /**
     * HRMP channel closed. `[by_parachain, channel_id]`
     */
    get asV100(): [number, v100.HrmpChannelId] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpHrmpChannelForceOpenedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.HrmpChannelForceOpened')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An HRMP channel was opened via Root origin.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Hrmp.HrmpChannelForceOpened') === 'a9dc0d18240dc79b97e5b37bb5bee4e01018115fadf17e4bc55f3774b53aed63'
    }

    /**
     * An HRMP channel was opened via Root origin.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    get asV100(): [number, number, number, number] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpOpenChannelAcceptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.OpenChannelAccepted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Open HRMP channel accepted. `[sender, recipient]`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Hrmp.OpenChannelAccepted') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     * Open HRMP channel accepted. `[sender, recipient]`
     */
    get asV100(): [number, number] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpOpenChannelCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.OpenChannelCanceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     * `[by_parachain, channel_id]`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Hrmp.OpenChannelCanceled') === '950113c2f5d63a9de3d54be151be099403d5b06a4e13f505b42e20187b08bde7'
    }

    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     * `[by_parachain, channel_id]`
     */
    get asV100(): [number, v100.HrmpChannelId] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpOpenChannelRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.OpenChannelRequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Open HRMP channel requested.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Hrmp.OpenChannelRequested') === 'a9dc0d18240dc79b97e5b37bb5bee4e01018115fadf17e4bc55f3774b53aed63'
    }

    /**
     * Open HRMP channel requested.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    get asV100(): [number, number, number, number] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityIdentityClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.IdentityCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get asMatrixEnjinV1000(): {who: Uint8Array, deposit: bigint} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityIdentityKilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.IdentityKilled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get asMatrixEnjinV1000(): {who: Uint8Array, deposit: bigint} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityIdentitySetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.IdentitySet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get asMatrixEnjinV1000(): {who: Uint8Array} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityJudgementGivenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.JudgementGiven')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A judgement was given by a registrar.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === '0771fa05d0977d28db0dee420efa5c006fa01a48edbd0b5b50cba5ea1d98b1b8'
    }

    /**
     * A judgement was given by a registrar.
     */
    get asMatrixEnjinV1000(): {target: Uint8Array, registrarIndex: number} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityJudgementRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.JudgementRequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A judgement was asked from a registrar.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement was asked from a registrar.
     */
    get asMatrixEnjinV1000(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityJudgementUnrequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.JudgementUnrequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A judgement request was retracted.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement request was retracted.
     */
    get asMatrixEnjinV1000(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityRegistrarAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.RegistrarAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A registrar was added.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === 'c7c8fe6ce04ac3d49accb0e86098814baf3baab267afb645140023a3c5c84c24'
    }

    /**
     * A registrar was added.
     */
    get asMatrixEnjinV1000(): {registrarIndex: number} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentitySubIdentityAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.SubIdentityAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get asMatrixEnjinV1000(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentitySubIdentityRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.SubIdentityRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get asMatrixEnjinV1000(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentitySubIdentityRevokedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.SubIdentityRevoked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get asMatrixEnjinV1000(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeEvent(this.event)
    }
}

export class ImOnlineAllGoodEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ImOnline.AllGood')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * At the end of the session, no offence was committed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ImOnline.AllGood') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * At the end of the session, no offence was committed.
     */
    get asV100(): null {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ImOnlineHeartbeatReceivedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ImOnline.HeartbeatReceived')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ImOnline.HeartbeatReceived') === 'f4f7db0d4947a3f194721945718633fbe38c2b20120d6b5be31252e30b822645'
    }

    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    get asV100(): {authorityId: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ImOnlineSomeOfflineEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ImOnline.SomeOffline')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ImOnline.SomeOffline') === '380731177debd1bc7de2f37d39c5ffd9fc74a19f43f20c4319233aa9b5d971aa'
    }

    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    get asV100(): {offline: [Uint8Array, v100.Exposure][]} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class MarketplaceAuctionFinalizedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Marketplace.AuctionFinalized')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An auction was finalized
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Marketplace.AuctionFinalized') === '85c874f079d7788c46e5ee8f064d0e75d1bee7e2b192276db015bf838a4226a7'
    }

    /**
     * An auction was finalized
     */
    get asMatrixEnjinV603(): {listingId: Uint8Array, winningBid: (matrixEnjinV603.Bid | undefined), protocolFee: bigint, royalty: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MarketplaceBidPlacedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Marketplace.BidPlaced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bid was placed
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Marketplace.BidPlaced') === '43772e41069f9311a69337de1da60bd0d625f0cbb2b82db1e5646defd34f6318'
    }

    /**
     * A bid was placed
     */
    get asMatrixEnjinV603(): {listingId: Uint8Array, bid: matrixEnjinV603.Bid} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MarketplaceListingCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Marketplace.ListingCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A listing was cancelled
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Marketplace.ListingCancelled') === '56b483accb79407d2146b841c242046f1ff043c0a2fda9fb311497fdcd762679'
    }

    /**
     * A listing was cancelled
     */
    get asMatrixEnjinV603(): {listingId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MarketplaceListingCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Marketplace.ListingCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A listing was created
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Marketplace.ListingCreated') === '396b87e5fef710b0fb92ab0a1d2f82c41b7ad217eaec1ac1b7c0b53b3d4e8449'
    }

    /**
     * A listing was created
     */
    get asMatrixEnjinV603(): {listingId: Uint8Array, listing: matrixEnjinV603.Listing} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MarketplaceListingFilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Marketplace.ListingFilled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A listing was filled or partially filled
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Marketplace.ListingFilled') === '3fb016766e57e5a9a1b2da399d304573a092435b3fea70b58bb10cdf6bacc899'
    }

    /**
     * A listing was filled or partially filled
     */
    get asMatrixEnjinV603(): {listingId: Uint8Array, buyer: Uint8Array, amountFilled: bigint, amountRemaining: bigint, protocolFee: bigint, royalty: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MarketplaceProtocolFeeSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Marketplace.ProtocolFeeSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Protocol fee was set
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Marketplace.ProtocolFeeSet') === '164c71fe8ee3317ae364f8c5528ba44b7eddb84e7a9a394e59bb344ad0ec2293'
    }

    /**
     * Protocol fee was set
     */
    get asMatrixEnjinV603(): {protocolFee: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MatrixUtilityBatchDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MatrixUtility.BatchDispatched')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of calls dispatched without errors.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MatrixUtility.BatchDispatched') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of calls dispatched without errors.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MatrixUtilityBatchFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MatrixUtility.BatchFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of calls did not disptach completely.
     * Index and error of the failing dispatch call is provided.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MatrixUtility.BatchFailed') === '031f8c01ddd9491965bf6e6671d70381e70d55e6028aab52a937d1c3afeecb9f'
    }

    /**
     * Batch of calls did not disptach completely.
     * Index and error of the failing dispatch call is provided.
     */
    get asMatrixEnjinV603(): {index: number, error: matrixEnjinV603.DispatchError} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MatrixUtilityBatchPartiallyDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MatrixUtility.BatchPartiallyDispatched')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of calls dispatched, but some calls resulted in error.
     * Indexes and errors of failing dispatch calls are provided.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MatrixUtility.BatchPartiallyDispatched') === '73fef2b0a3059aa581e79857a0da7fc5e83a4cb7be0461a34a22dfeca2677eb2'
    }

    /**
     * Batch of calls dispatched, but some calls resulted in error.
     * Indexes and errors of failing dispatch calls are provided.
     */
    get asMatrixEnjinV603(): [number, matrixEnjinV603.DispatchError][] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MatrixXcmMinimumWeightUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MatrixXcm.MinimumWeightUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Xcm fee and weight updated
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MatrixXcm.MinimumWeightUpdated') === 'ddee43169b1685802d4c88cf9e594d83e84d3f8d552ef4ce07966262920e3e23'
    }

    /**
     * Xcm fee and weight updated
     */
    get asMatrixEnjinV603(): matrixEnjinV603.MinimumWeightFeePair {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MatrixXcmXcmTransferFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MatrixXcm.XcmTransferFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * XCM transfer failed
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MatrixXcm.XcmTransferFailed') === '22feff8edb6c336b74a2b2f9b7b0796b560bc710feff2a107e0d6676f9f9e0e7'
    }

    /**
     * XCM transfer failed
     */
    get asMatrixEnjinV603(): matrixEnjinV603.DispatchError {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MessageQueueOverweightEnqueuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MessageQueue.OverweightEnqueued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Message placed in overweight queue.
     */
    get isV105(): boolean {
        return this._chain.getEventHash('MessageQueue.OverweightEnqueued') === 'ba94ae70005cb082ee9eb242fc3fbcb41284f21251162aec12ed7e9591017d24'
    }

    /**
     * Message placed in overweight queue.
     */
    get asV105(): {id: Uint8Array, origin: v105.AggregateMessageOrigin, pageIndex: number, messageIndex: number} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class MessageQueuePageReapedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MessageQueue.PageReaped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * This page was reaped.
     */
    get isV105(): boolean {
        return this._chain.getEventHash('MessageQueue.PageReaped') === 'e6fa86eb323ce5bdb3e0f4715d1808fbb4dae58750e914eb9b0dced5c3b3e19f'
    }

    /**
     * This page was reaped.
     */
    get asV105(): {origin: v105.AggregateMessageOrigin, index: number} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class MessageQueueProcessedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MessageQueue.Processed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Message is processed.
     */
    get isV105(): boolean {
        return this._chain.getEventHash('MessageQueue.Processed') === 'e117e2555ab52ecf9e61470fcfba005cc80c81e25322cf7c928e515feebce69a'
    }

    /**
     * Message is processed.
     */
    get asV105(): {id: Uint8Array, origin: v105.AggregateMessageOrigin, weightUsed: v105.Weight, success: boolean} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class MessageQueueProcessingFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MessageQueue.ProcessingFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    get isV105(): boolean {
        return this._chain.getEventHash('MessageQueue.ProcessingFailed') === '2b7e384aa6ce4e8185203f585ae377a751b8011b57bdff49bcc77d0ca3e62d17'
    }

    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    get asV105(): {id: Uint8Array, origin: v105.AggregateMessageOrigin, error: v105.ProcessMessageError} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An approval took place. If `token_id` is `None`, it applies to the whole collection.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.Approved') === 'be2c3db8582ba3e20a4c47b559208645f08eaef7453ba9dcf4fe7d6a8987b514'
    }

    /**
     * An approval took place. If `token_id` is `None`, it applies to the whole collection.
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: (bigint | undefined), owner: Uint8Array, operator: Uint8Array, amount: (bigint | undefined), expiration: (number | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensAttributeRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.AttributeRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An attribute has been removed
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.AttributeRemoved') === '4168a0c4eaad91f81c843978c2860e3e03730b7533206af99d8dc2200efdbec8'
    }

    /**
     * An attribute has been removed
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensAttributeSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.AttributeSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New attribute has been set
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.AttributeSet') === 'd90964f28bdfc61e8bf4173cbde05cc375064aff638f0a40640ab04549efc4c2'
    }

    /**
     * New attribute has been set
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array, value: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensBalanceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.BalanceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The balance of an account was set
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.BalanceSet') === '3cb09b8a15d07b5683e760eecb82ebaa781774c145bd82cdac763cb6580b44e6'
    }

    /**
     * The balance of an account was set
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, balance: bigint, reservedBalance: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensBurnedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.Burned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Units of a token were burned
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.Burned') === '93726bb340d1054b12581b1eaa725de5eb6895c3c530ab3823144764f737359a'
    }

    /**
     * Units of a token were burned
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensClaimTokensCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.ClaimTokensCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Finished claiming the tokens
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getEventHash('MultiTokens.ClaimTokensCompleted') === 'e963b546ce52b3e105e5a29f2e7743ca6496e8a40e036e98f057e74fa36bca75'
    }

    /**
     * Finished claiming the tokens
     */
    get asMatrixEnjinV1000(): {destination: Uint8Array, ethereumAddress: Uint8Array} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensClaimTokensInitiatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.ClaimTokensInitiated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Claims tokens initiated
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getEventHash('MultiTokens.ClaimTokensInitiated') === 'b855747546e97f30d0221aaf15e6923b0b420b5f5d208e31f08ee63deaa664f2'
    }

    /**
     * Claims tokens initiated
     */
    get asMatrixEnjinV1000(): {accountId: Uint8Array, ethereumAddress: Uint8Array} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensClaimedCollectionsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.ClaimedCollections')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Collections were claimed
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.ClaimedCollections') === '6a4b376096bdb8d85bb6c1e5fc18207e499f217fabc6ba19e104345b3579203c'
    }

    /**
     * Collections were claimed
     */
    get asMatrixEnjinV603(): {accountId: Uint8Array, ethereumAddress: Uint8Array, collectionIds: matrixEnjinV603.CollectionIdPair[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Collections were claimed
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getEventHash('MultiTokens.ClaimedCollections') === 'dae918bcb0da6f6f293d6cea13c426e40bb93db488e889dfc01af80444518607'
    }

    /**
     * Collections were claimed
     */
    get asMatrixEnjinV1000(): {accountId: Uint8Array, ethereumAddress: Uint8Array, collectionIds: bigint[]} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Collections were claimed
     */
    get isV106(): boolean {
        return this._chain.getEventHash('MultiTokens.ClaimedCollections') === '6a4b376096bdb8d85bb6c1e5fc18207e499f217fabc6ba19e104345b3579203c'
    }

    /**
     * Collections were claimed
     */
    get asV106(): {accountId: Uint8Array, ethereumAddress: Uint8Array, collectionIds: v106.CollectionIdPair[]} {
        assert(this.isV106)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Collections were claimed
     */
    get isV1021(): boolean {
        return this._chain.getEventHash('MultiTokens.ClaimedCollections') === 'dae918bcb0da6f6f293d6cea13c426e40bb93db488e889dfc01af80444518607'
    }

    /**
     * Collections were claimed
     */
    get asV1021(): {accountId: Uint8Array, ethereumAddress: Uint8Array, collectionIds: bigint[]} {
        assert(this.isV1021)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensClaimedTokensEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.ClaimedTokens')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Tokens were claimed
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.ClaimedTokens') === '41f1f7412e7bf39a8dccd8836c92086de2989704dd20200f9a036fc30e40a1fe'
    }

    /**
     * Tokens were claimed
     */
    get asMatrixEnjinV603(): {accountId: Uint8Array, ethereumAddress: Uint8Array, assetIds: matrixEnjinV603.AssetIdWithEth[], moreTokensRemain: boolean} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensCollectionAccountCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.CollectionAccountCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new collection account was created
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.CollectionAccountCreated') === '7b4295cf1bd074614f172814d727e76bda047f9869c73df3042c6baeb8b314c7'
    }

    /**
     * A new collection account was created
     */
    get asMatrixEnjinV603(): {collectionId: bigint, accountId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensCollectionAccountDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.CollectionAccountDestroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A collection account was destroyed
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.CollectionAccountDestroyed') === '7b4295cf1bd074614f172814d727e76bda047f9869c73df3042c6baeb8b314c7'
    }

    /**
     * A collection account was destroyed
     */
    get asMatrixEnjinV603(): {collectionId: bigint, accountId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensCollectionAccountUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.CollectionAccountUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * TokenAccount storage was set to `value`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.CollectionAccountUpdated') === '761f2e71ce8970aeaf77cbb18f15b12f4cea58113a28a6163bb7f0d7543998e0'
    }

    /**
     * TokenAccount storage was set to `value`
     */
    get asMatrixEnjinV603(): {collectionId: bigint, accountId: Uint8Array, value: (matrixEnjinV603.CollectionAccount | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensCollectionCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.CollectionCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new collection was created
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.CollectionCreated') === '9f2f2f3af227369fdf6d6bca903e9d24ff2c10dbe8e2e81cc062779b6581c722'
    }

    /**
     * A new collection was created
     */
    get asMatrixEnjinV603(): {collectionId: bigint, owner: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensCollectionDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.CollectionDestroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A collection was destroyed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.CollectionDestroyed') === '6b20939f2a6c4c23adcb69631c659bbf68a4e266bd90733cacfec7f21ecfc491'
    }

    /**
     * A collection was destroyed.
     */
    get asMatrixEnjinV603(): {collectionId: bigint, caller: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensCollectionMutatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.CollectionMutated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A collection was mutated
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.CollectionMutated') === 'd7b85f625e23a04082ca1038b142ad4c56b4ebeb4ab61685f39f6c00eddb78f1'
    }

    /**
     * A collection was mutated
     */
    get asMatrixEnjinV603(): {collectionId: bigint, mutation: matrixEnjinV603.DefaultCollectionMutation} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensCollectionUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.CollectionUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Collection storage was set to `value`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.CollectionUpdated') === '98bf9d540f024070954f2f94467d9e9b5cd79997861f988b682972dd34f2a757'
    }

    /**
     * Collection storage was set to `value`
     */
    get asMatrixEnjinV603(): {collectionId: bigint, value: (matrixEnjinV603.Collection | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensDepositEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.Deposit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Token units were deposited
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.Deposit') === '93726bb340d1054b12581b1eaa725de5eb6895c3c530ab3823144764f737359a'
    }

    /**
     * Token units were deposited
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensFrozenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.Frozen')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Collection, token or account was frozen
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.Frozen') === '5cbc7fc4c80127d7f9f1d04214e275834ef6eb218526ecacd7cb52716bca5909'
    }

    /**
     * Collection, token or account was frozen
     */
    get asMatrixEnjinV603(): matrixEnjinV603.Freeze {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensMigrationStatusUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.MigrationStatusUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Migration stage updated
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.MigrationStatusUpdated') === 'b6a56869fab9a6ad06b131f71f90c0f5cc964731c5de07e117d06485e0c52538'
    }

    /**
     * Migration stage updated
     */
    get asMatrixEnjinV603(): {stage: matrixEnjinV603.MigrationStage} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensMintedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.Minted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Units of a token were minted
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.Minted') === 'f8fd3b51f96a65531998fe85506037a1c5256b97febbfad202a0a35882f49ae1'
    }

    /**
     * Units of a token were minted
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, issuer: matrixEnjinV603.RootOrSigned, recipient: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensMovedReservesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.MovedReserves')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Reserved token units were moved
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.MovedReserves') === 'cadd3cb8a7078a34cbd801afd6c7a96515df926a8e147d0f25ba435ee7ddc826'
    }

    /**
     * Reserved token units were moved
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, source: Uint8Array, destination: Uint8Array, amount: bigint, reserveId: (Uint8Array | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensNextCollectionIdUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.NextCollectionIdUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * NextCollectionId storage was set to `collection_id`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.NextCollectionIdUpdated') === '057e325ebb04166081a2c8cd2cc1f2a50181d12678c5d261d3e70e3fe9252db3'
    }

    /**
     * NextCollectionId storage was set to `collection_id`
     */
    get asMatrixEnjinV603(): {collectionId: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensReserveRepatriatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.ReserveRepatriated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Reserved token units were transferred
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.ReserveRepatriated') === 'cadd3cb8a7078a34cbd801afd6c7a96515df926a8e147d0f25ba435ee7ddc826'
    }

    /**
     * Reserved token units were transferred
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, source: Uint8Array, destination: Uint8Array, amount: bigint, reserveId: (Uint8Array | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Token units were reserved
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.Reserved') === '5b08871f0a712066681cb69f10ad44662f3687788ce875b5555feb36ddfbb358'
    }

    /**
     * Token units were reserved
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, amount: bigint, reserveId: (Uint8Array | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An amount of tokens were slashed from account
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.Slashed') === '93726bb340d1054b12581b1eaa725de5eb6895c3c530ab3823144764f737359a'
    }

    /**
     * An amount of tokens were slashed from account
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensThawedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.Thawed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Collection, token or account was unfrozen
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.Thawed') === '5cbc7fc4c80127d7f9f1d04214e275834ef6eb218526ecacd7cb52716bca5909'
    }

    /**
     * Collection, token or account was unfrozen
     */
    get asMatrixEnjinV603(): matrixEnjinV603.Freeze {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensTokenAccountCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.TokenAccountCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new token account was created
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.TokenAccountCreated') === '0cca0a7615506a78b65129d3424c22086426999e458decb2fb277f2a1aa1cb65'
    }

    /**
     * A new token account was created
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, balance: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensTokenAccountDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.TokenAccountDestroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A token account was destroyed
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.TokenAccountDestroyed') === 'd3d24a0607b48c4ee8924ed762cb532aa6cf3a0d0410df546c31f4a14154c387'
    }

    /**
     * A token account was destroyed
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensTokenAccountUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.TokenAccountUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * TokenAccount storage was set to `value`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.TokenAccountUpdated') === '78c28a4a51bfd9571491a3bb97228440d55d52184c02bc47ea9237f39721b971'
    }

    /**
     * TokenAccount storage was set to `value`
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, value: (matrixEnjinV603.TokenAccount | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensTokenCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.TokenCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A token was created
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.TokenCreated') === '119f558a8615f102588d5efe87fe923338791a100e0d848069f41e8db95e7a7e'
    }

    /**
     * A token was created
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, issuer: matrixEnjinV603.RootOrSigned, initialSupply: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensTokenDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.TokenDestroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A token was destroyed
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.TokenDestroyed') === 'cf1d93ed1d0b9ceef6268da8c9921584304700425bfb5edd986b2b7a7b02a021'
    }

    /**
     * A token was destroyed
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, caller: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensTokenMutatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.TokenMutated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A token was mutated
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.TokenMutated') === '020a496ead997e5add19341a576048ad36de5c80d1ce3a9afe009a4332d54dca'
    }

    /**
     * A token was mutated
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, mutation: matrixEnjinV603.DefaultTokenMutation} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensTokenUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.TokenUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Token storage was set to `value`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.TokenUpdated') === 'bdfad0bec6d256ae0fde104ed92cdc20185613745dc8a4149ef923e312f22d5f'
    }

    /**
     * Token storage was set to `value`
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, value: (matrixEnjinV603.Token | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Token storage was set to `value`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('MultiTokens.TokenUpdated') === '8e21db81185ca56321585ca7650c3428ba360b92e5840103677c4a97ae7f9e25'
    }

    /**
     * Token storage was set to `value`
     */
    get asV100(): {collectionId: bigint, tokenId: bigint, value: (v100.Token | undefined)} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Token storage was set to `value`
     */
    get isV102(): boolean {
        return this._chain.getEventHash('MultiTokens.TokenUpdated') === 'bdfad0bec6d256ae0fde104ed92cdc20185613745dc8a4149ef923e312f22d5f'
    }

    /**
     * Token storage was set to `value`
     */
    get asV102(): {collectionId: bigint, tokenId: bigint, value: (v102.Token | undefined)} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.Transferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Units of a token were transferred
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.Transferred') === 'c845e6a95391a8fa441a8156f9f87ac0df95affb6d9fce2cad53cb422fe1942a'
    }

    /**
     * Units of a token were transferred
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, operator: Uint8Array, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensUnapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.Unapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An unapproval took place. If `token_id` is `None`, it applies to the collection.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.Unapproved') === '668c5b2be0f408488a0422b461e10a6786cfe678bc278d2579b4a1d3a8635d49'
    }

    /**
     * An unapproval took place. If `token_id` is `None`, it applies to the collection.
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: (bigint | undefined), owner: Uint8Array, operator: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensUnreservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.Unreserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Token units were unreserved
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.Unreserved') === '5b08871f0a712066681cb69f10ad44662f3687788ce875b5555feb36ddfbb358'
    }

    /**
     * Token units were unreserved
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, amount: bigint, reserveId: (Uint8Array | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensWithdrawEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokens.Withdraw')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Token units were withdrawn
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokens.Withdraw') === '93726bb340d1054b12581b1eaa725de5eb6895c3c530ab3823144764f737359a'
    }

    /**
     * Token units were withdrawn
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensMigrationMigratedAttributesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokensMigration.MigratedAttributes')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Number of attributes have been migrated
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokensMigration.MigratedAttributes') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Number of attributes have been migrated
     */
    get asMatrixEnjinV603(): number {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensMigrationMigratedCollectionAccountsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokensMigration.MigratedCollectionAccounts')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Number of collection accounts have been migrated
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokensMigration.MigratedCollectionAccounts') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Number of collection accounts have been migrated
     */
    get asMatrixEnjinV603(): number {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensMigrationMigratedCollectionsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokensMigration.MigratedCollections')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Number of collections that have been migrated
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokensMigration.MigratedCollections') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Number of collections that have been migrated
     */
    get asMatrixEnjinV603(): number {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensMigrationMigratedTokenAccountsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokensMigration.MigratedTokenAccounts')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Number of token accounts have been migrated
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokensMigration.MigratedTokenAccounts') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Number of token accounts have been migrated
     */
    get asMatrixEnjinV603(): number {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensMigrationMigratedTokensEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokensMigration.MigratedTokens')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Number of tokens have been migrated
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokensMigration.MigratedTokens') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Number of tokens have been migrated
     */
    get asMatrixEnjinV603(): number {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultiTokensMigrationMigrationFinishedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MultiTokensMigration.MigrationFinished')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Indicates that the migration is finished
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('MultiTokensMigration.MigrationFinished') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Indicates that the migration is finished
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigMultisigApprovalEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.MultisigApproval')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Multisig.MultisigApproval') === 'bc800106752cebb28b84cdca738856289d0ade8d1818c303bd3f2000695fbb28'
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get asMatrixEnjinV603(): {approving: Uint8Array, timepoint: matrixEnjinV603.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigMultisigCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.MultisigCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been cancelled.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Multisig.MultisigCancelled') === 'b24b244f000fd9e834b0f8c6d23aa3931d80d5b1c70f0f9a0e28826f22125b21'
    }

    /**
     * A multisig operation has been cancelled.
     */
    get asMatrixEnjinV603(): {cancelling: Uint8Array, timepoint: matrixEnjinV603.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigMultisigExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.MultisigExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been executed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '9e0a225fbf5acad3beeb4abfce677050bfccaf660eedf13e97c1c4ecb39cfe13'
    }

    /**
     * A multisig operation has been executed.
     */
    get asMatrixEnjinV603(): {approving: Uint8Array, timepoint: matrixEnjinV603.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: matrixEnjinV603.Type_35} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigNewMultisigEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.NewMultisig')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new multisig operation has begun.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Multisig.NewMultisig') === '137bdeb26018c08567fabc1c357d536046e92cc9fdf480339be5bc9e7e56d3be'
    }

    /**
     * A new multisig operation has begun.
     */
    get asMatrixEnjinV603(): {approving: Uint8Array, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsBondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Bonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A member has became bonded in a pool.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('NominationPools.Bonded') === '346ce619103fbbd79b2dd7272ee712b9245db5dd69c1a8986cf02609a0807acb'
    }

    /**
     * A member has became bonded in a pool.
     */
    get asV100(): {member: Uint8Array, poolId: number, bonded: bigint, joined: boolean} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A member has became bonded in a pool.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('NominationPools.Bonded') === 'f8134fb070604ede226b6ce1104a08fd24e112623edb9fd1f64dbaab56c27a03'
    }

    /**
     * A member has became bonded in a pool.
     */
    get asV104(): {member: Uint8Array, poolId: number, bonded: bigint} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsBonusReceivedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.BonusReceived')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool's bonus was transferred to its reward account
     */
    get isV101(): boolean {
        return this._chain.getEventHash('NominationPools.BonusReceived') === 'e97a940401503c89156c5be028d3653893ac6e357b451b4035127aa329ed53e0'
    }

    /**
     * A pool's bonus was transferred to its reward account
     */
    get asV101(): {poolId: number, amount: bigint} {
        assert(this.isV101)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsCommissionChangeRateUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.CommissionChangeRateUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool's commission `change_rate` has been changed.
     */
    get isV101(): boolean {
        return this._chain.getEventHash('NominationPools.CommissionChangeRateUpdated') === 'e77d8f06ff6d59a91d329a7cdbc1ac5a27a6a72eb4ee24df4753545b86c9cd85'
    }

    /**
     * A pool's commission `change_rate` has been changed.
     */
    get asV101(): {poolId: number, changeRate: v101.CommissionChangeRate} {
        assert(this.isV101)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsCommissionPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.CommissionPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Commission for `pool_id` was paid to `beneficiary`
     */
    get isV101(): boolean {
        return this._chain.getEventHash('NominationPools.CommissionPaid') === '2dcfe52cd17c8aebf477fb520aa57ba411011a8fe4ecad6e0dd93d3263214d00'
    }

    /**
     * Commission for `pool_id` was paid to `beneficiary`
     */
    get asV101(): {poolId: number, beneficiary: Uint8Array, amount: bigint} {
        assert(this.isV101)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsCommissionUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.CommissionUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool's commission rate has been changed.
     */
    get isV101(): boolean {
        return this._chain.getEventHash('NominationPools.CommissionUpdated') === '8e749760527888aef067520329102ce3ffc1f69933b50bcbcc46bc6615cbc947'
    }

    /**
     * A pool's commission rate has been changed.
     */
    get asV101(): {poolId: number, current: (number | undefined)} {
        assert(this.isV101)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Created')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool has been created.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('NominationPools.Created') === 'bd0210be96ae9e36079501c866719dc8345aed9ddb4b5839c88c7b4a28a0e73a'
    }

    /**
     * A pool has been created.
     */
    get asV100(): {depositor: Uint8Array, poolId: number, capacity: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A pool has been created.
     */
    get isV101(): boolean {
        return this._chain.getEventHash('NominationPools.Created') === '2add16355406476494177754c17c2601ba66084ba6e294aabce48a68570a638d'
    }

    /**
     * A pool has been created.
     */
    get asV101(): {creator: Uint8Array, poolId: number, capacity: bigint} {
        assert(this.isV101)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Destroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool has been destroyed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('NominationPools.Destroyed') === 'a662258b1bdb045a915972ea29e9ec0b46cdd5598b0da37b0e70ac766e3735a0'
    }

    /**
     * A pool has been destroyed.
     */
    get asV100(): {poolId: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsEarlyBirdBonusCalculatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.EarlyBirdBonusCalculated')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1021(): boolean {
        return this._chain.getEventHash('NominationPools.EarlyBirdBonusCalculated') === '69d04d0ff6c8b8d70737f19edf5323dfba6cc37404142fb6ccf714cd973d60af'
    }

    get asV1021(): {totalAmount: bigint} {
        assert(this.isV1021)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsEarlyBirdBonusDistributedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.EarlyBirdBonusDistributed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The early bird bonus has been distributed
     */
    get isV106(): boolean {
        return this._chain.getEventHash('NominationPools.EarlyBirdBonusDistributed') === 'e97a940401503c89156c5be028d3653893ac6e357b451b4035127aa329ed53e0'
    }

    /**
     * The early bird bonus has been distributed
     */
    get asV106(): {poolId: number, amount: bigint} {
        assert(this.isV106)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsEarlyBirdBonusPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.EarlyBirdBonusPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The early bird bonus has been paid to the pool
     */
    get isV1023(): boolean {
        return this._chain.getEventHash('NominationPools.EarlyBirdBonusPaid') === 'd998046da6c7309d308fceb660b6df176ffdfd6c6b18e23f5b9042b8ae61f487'
    }

    /**
     * The early bird bonus has been paid to the pool
     */
    get asV1023(): {poolId: number, paymentId: number, totalAccounts: number} {
        assert(this.isV1023)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsEarlyBirdBonusPaymentUnlockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.EarlyBirdBonusPaymentUnlocked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new share of early bird bonus has been unlocked
     */
    get isV1022(): boolean {
        return this._chain.getEventHash('NominationPools.EarlyBirdBonusPaymentUnlocked') === '3ab1de22ccc24473f93e8763b06466858ea4c154fbeeb978c4082749d9c4215d'
    }

    /**
     * A new share of early bird bonus has been unlocked
     */
    get asV1022(): {paymentId: number, nextPaymentBlock: number} {
        assert(this.isV1022)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsEarlyBirdBonusQueuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.EarlyBirdBonusQueued')
        this._chain = ctx._chain
        this.event = event
    }

    get isV106(): boolean {
        return this._chain.getEventHash('NominationPools.EarlyBirdBonusQueued') === '69d04d0ff6c8b8d70737f19edf5323dfba6cc37404142fb6ccf714cd973d60af'
    }

    get asV106(): {totalAmount: bigint} {
        assert(this.isV106)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsEarlyBirdSharesCapturedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.EarlyBirdSharesCaptured')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The shares of pool users have been captured for early bird rewards
     */
    get isV1022(): boolean {
        return this._chain.getEventHash('NominationPools.EarlyBirdSharesCaptured') === '48d3cec66c8bcea5fca2ce0af52c37e022c1e6255d9aeec37288daf287f9300e'
    }

    /**
     * The shares of pool users have been captured for early bird rewards
     */
    get asV1022(): {poolId: number, totalAccounts: number} {
        assert(this.isV1022)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsEraRewardsProcessedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.EraRewardsProcessed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * This event happens once per era on the previous era that rewards are paid out for. It
     * pays commission, distributes bonus, and reinvests rewards.
     */
    get isV102(): boolean {
        return this._chain.getEventHash('NominationPools.EraRewardsProcessed') === '21228835d94935f805a29fe3aec3cbae1e88c5bba68cf8a618713b9c8549e55d'
    }

    /**
     * This event happens once per era on the previous era that rewards are paid out for. It
     * pays commission, distributes bonus, and reinvests rewards.
     */
    get asV102(): {poolId: number, era: number, commission: (v102.CommissionPayment | undefined), bonus: bigint, reinvested: bigint} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * This event happens once per era on the previous era that rewards are paid out for. It
     * pays commission, distributes bonus, and reinvests rewards.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('NominationPools.EraRewardsProcessed') === '87210e5115ff3bf09b4a94f801d934f4e1a412e16b3f42823e7d0517f8b21760'
    }

    /**
     * This event happens once per era on the previous era that rewards are paid out for. It
     * pays commission, distributes bonus, and reinvests rewards.
     */
    get asV104(): {poolId: number, era: number, commission: (v104.CommissionPayment | undefined), bonus: bigint, reinvested: bigint, bonusCycleEnded: boolean} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsMaxCommissionUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.MaxCommissionUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool's maximum commission setting has been changed.
     */
    get isV101(): boolean {
        return this._chain.getEventHash('NominationPools.MaxCommissionUpdated') === '6eb4d2709f88d8a2ee11fbbeaecd1987716bd1b2323a23339e00d70cb343b35b'
    }

    /**
     * A pool's maximum commission setting has been changed.
     */
    get asV101(): {poolId: number, maxCommission: number} {
        assert(this.isV101)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsNominatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Nominated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A nomination took place
     */
    get isV104(): boolean {
        return this._chain.getEventHash('NominationPools.Nominated') === 'ea4465a57461881e03894b11ac5f7192136bacd8d01d54206bdb61e16cc8abfc'
    }

    /**
     * A nomination took place
     */
    get asV104(): {poolId: number, validators: Uint8Array[]} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPaidOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PaidOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A payout has been made to a member.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('NominationPools.PaidOut') === 'cfe21eb17104900a7cf176b7e8828f742dc518d5af2853e13dbd86e25b42d272'
    }

    /**
     * A payout has been made to a member.
     */
    get asV100(): {member: Uint8Array, poolId: number, payout: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolCommissionChangeRateUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolCommissionChangeRateUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool's commission `change_rate` has been changed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('NominationPools.PoolCommissionChangeRateUpdated') === 'e77d8f06ff6d59a91d329a7cdbc1ac5a27a6a72eb4ee24df4753545b86c9cd85'
    }

    /**
     * A pool's commission `change_rate` has been changed.
     */
    get asV100(): {poolId: number, changeRate: v100.CommissionChangeRate} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolCommissionClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolCommissionClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Pool commission has been claimed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('NominationPools.PoolCommissionClaimed') === '39008f90774550cc01fac86050fbaa7fcba22fdf43a4a3f0033b863d36c99eba'
    }

    /**
     * Pool commission has been claimed.
     */
    get asV100(): {poolId: number, commission: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolCommissionUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolCommissionUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool's commission setting has been changed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('NominationPools.PoolCommissionUpdated') === '5f02db5203a66e286087b8a8254fd206258aebe8f4ba5f6f143da9c12da0f87b'
    }

    /**
     * A pool's commission setting has been changed.
     */
    get asV100(): {poolId: number, current: ([number, Uint8Array] | undefined)} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolMaxCommissionUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolMaxCommissionUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool's maximum commission setting has been changed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('NominationPools.PoolMaxCommissionUpdated') === '6eb4d2709f88d8a2ee11fbbeaecd1987716bd1b2323a23339e00d70cb343b35b'
    }

    /**
     * A pool's maximum commission setting has been changed.
     */
    get asV100(): {poolId: number, maxCommission: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolMutatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolMutated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Pool has been mutated.
     */
    get isV101(): boolean {
        return this._chain.getEventHash('NominationPools.PoolMutated') === '458b0ab8fe5b72d832a75c91c8b8a5f8edc75e37ba19627164cc44c51b7f3175'
    }

    /**
     * Pool has been mutated.
     */
    get asV101(): {poolId: number, mutation: v101.PoolMutation} {
        assert(this.isV101)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Pool has been mutated.
     */
    get isV102(): boolean {
        return this._chain.getEventHash('NominationPools.PoolMutated') === 'a76d499e5225549a6a4824e431d80e59ecbe7c2f264324e65e97f5664218c12d'
    }

    /**
     * Pool has been mutated.
     */
    get asV102(): {poolId: number, mutation: v102.PoolMutation} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Pool has been mutated.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('NominationPools.PoolMutated') === '526feb3ae06a68bd2b4314313fe167142b0160edd985ec9286574606d6a925c9'
    }

    /**
     * Pool has been mutated.
     */
    get asV104(): {poolId: number, mutation: v104.PoolMutation} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Pool has been mutated.
     */
    get isV110(): boolean {
        return this._chain.getEventHash('NominationPools.PoolMutated') === '70c40c8d0c496e6eae44c61bc40005a08639afef2e3e492c1200579b819a965f'
    }

    /**
     * Pool has been mutated.
     */
    get asV110(): {poolId: number, mutation: v110.PoolMutation} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Pool has been mutated.
     */
    get isV1023(): boolean {
        return this._chain.getEventHash('NominationPools.PoolMutated') === 'acace76c54c031c6f38eca3ec63cc60e103318291ffd9b79155eddd2ecc4df9e'
    }

    /**
     * Pool has been mutated.
     */
    get asV1023(): {poolId: number, mutation: v1023.PoolMutation} {
        assert(this.isV1023)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The active balance of pool `pool_id` has been slashed to `balance`.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('NominationPools.PoolSlashed') === '849ff35d9ca5ab6bfa8f0aff533bc59a22437fe70500718dd3337d480ba4b067'
    }

    /**
     * The active balance of pool `pool_id` has been slashed to `balance`.
     */
    get asV100(): {poolId: number, balance: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsRewardPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.RewardPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Rewards were paid to a pool
     */
    get isV102(): boolean {
        return this._chain.getEventHash('NominationPools.RewardPaid') === 'b1d48c3c4706c8e2fdfd4bb7fb124116b2559a58b0cab855e3485cf6423cdb20'
    }

    /**
     * Rewards were paid to a pool
     */
    get asV102(): {poolId: number, era: number, validatorStash: Uint8Array, reward: bigint, bonus: bigint} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsRewardReinvestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.RewardReinvested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool's reward balance has been bonded
     */
    get isV101(): boolean {
        return this._chain.getEventHash('NominationPools.RewardReinvested') === 'e97a940401503c89156c5be028d3653893ac6e357b451b4035127aa329ed53e0'
    }

    /**
     * A pool's reward balance has been bonded
     */
    get asV101(): {poolId: number, amount: bigint} {
        assert(this.isV101)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsRolesUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.RolesUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The roles of a pool have been updated to the given new roles. Note that the depositor
     * can never change.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('NominationPools.RolesUpdated') === 'ffbaeb5f0d735bffe9bc41e4c3f0df5d3ee23239024be64290a32a4107cab3a3'
    }

    /**
     * The roles of a pool have been updated to the given new roles. Note that the depositor
     * can never change.
     */
    get asV100(): {root: (Uint8Array | undefined), nominator: (Uint8Array | undefined)} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsStateChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.StateChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The state of a pool has changed
     */
    get isV100(): boolean {
        return this._chain.getEventHash('NominationPools.StateChanged') === 'ad04ef0d578c9399e7bdcc3a160bd0163a158a106de59b5d0ae918d0c38bec89'
    }

    /**
     * The state of a pool has changed
     */
    get asV100(): {poolId: number, newState: v100.PoolState} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The state of a pool has changed
     */
    get isV103(): boolean {
        return this._chain.getEventHash('NominationPools.StateChanged') === '4caed98f9af7bef486de51b2e1892855f25d38540dc5ba00d88c1da8dc74c268'
    }

    /**
     * The state of a pool has changed
     */
    get asV103(): {poolId: number, newState: v103.PoolState} {
        assert(this.isV103)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsUnbondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Unbonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A member has unbonded from their pool.
     * 
     * - `balance` is the corresponding balance of the number of points that has been
     *   requested to be unbonded (the argument of the `unbond` transaction) from the bonded
     *   pool.
     * - `points` is the number of points that are issued as a result of `balance` being
     * dissolved into the corresponding unbonding pool.
     * - `era` is the era in which the balance will be unbonded.
     * In the absence of slashing, these values will match. In the presence of slashing, the
     * number of points that are issued in the unbonding pool will be less than the amount
     * requested to be unbonded.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('NominationPools.Unbonded') === '0832f5131732a2ab621b8912cbcce5335afa6afcde060b027446854e582a5992'
    }

    /**
     * A member has unbonded from their pool.
     * 
     * - `balance` is the corresponding balance of the number of points that has been
     *   requested to be unbonded (the argument of the `unbond` transaction) from the bonded
     *   pool.
     * - `points` is the number of points that are issued as a result of `balance` being
     * dissolved into the corresponding unbonding pool.
     * - `era` is the era in which the balance will be unbonded.
     * In the absence of slashing, these values will match. In the presence of slashing, the
     * number of points that are issued in the unbonding pool will be less than the amount
     * requested to be unbonded.
     */
    get asV100(): {member: Uint8Array, poolId: number, balance: bigint, points: bigint, era: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsUnbondingPoolSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.UnbondingPoolSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('NominationPools.UnbondingPoolSlashed') === '3409c75291f32ce014317f489b868f68c390f1473bfcb6f79b1e3e0546ee4a1c'
    }

    /**
     * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
     */
    get asV100(): {poolId: number, era: number, balance: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A member has withdrawn from their pool.
     * 
     * The given number of `points` have been dissolved in return of `balance`.
     * 
     * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
     * will be 1.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('NominationPools.Withdrawn') === 'a1ac2fad866830ba6aeeeeeae4a647a06425cd3c74143fccbac820b3f50b2346'
    }

    /**
     * A member has withdrawn from their pool.
     * 
     * The given number of `points` have been dissolved in return of `balance`.
     * 
     * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
     * will be 1.
     */
    get asV100(): {member: Uint8Array, poolId: number, balance: bigint, points: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class OffencesOffenceEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Offences.Offence')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Offences.Offence') === '5c9081474f836b1480d3d7cc7a09403e5d7f913d809fe792509e057c77a1ff4f'
    }

    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    get asV100(): {kind: Uint8Array, timeslot: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class OrmlXcmSentEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OrmlXcm.Sent')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * XCM message sent. \[to, message\]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('OrmlXcm.Sent') === '3a86f4dc1fd9ac7a9db26bfc04e4e976c06d6b089449fea20d7cfce98a4b3528'
    }

    /**
     * XCM message sent. \[to, message\]
     */
    get asMatrixEnjinV603(): {to: matrixEnjinV603.V3MultiLocation, message: matrixEnjinV603.V3Instruction[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParaInclusionCandidateBackedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParaInclusion.CandidateBacked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A candidate was backed. `[candidate, head_data]`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ParaInclusion.CandidateBacked') === '246220cb1c83273013fc4c63084c87dd5cda26e1a2516b1736b272d8df91aaab'
    }

    /**
     * A candidate was backed. `[candidate, head_data]`
     */
    get asV100(): [v100.V2CandidateReceipt, Uint8Array, number, number] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParaInclusionCandidateIncludedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParaInclusion.CandidateIncluded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A candidate was included. `[candidate, head_data]`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ParaInclusion.CandidateIncluded') === '246220cb1c83273013fc4c63084c87dd5cda26e1a2516b1736b272d8df91aaab'
    }

    /**
     * A candidate was included. `[candidate, head_data]`
     */
    get asV100(): [v100.V2CandidateReceipt, Uint8Array, number, number] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParaInclusionCandidateTimedOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParaInclusion.CandidateTimedOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A candidate timed out. `[candidate, head_data]`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ParaInclusion.CandidateTimedOut') === 'e31c9b259107de7f78b46f1dcc13bdca23f4df12af9328f82e97f36b3f53190c'
    }

    /**
     * A candidate timed out. `[candidate, head_data]`
     */
    get asV100(): [v100.V2CandidateReceipt, Uint8Array, number] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParaInclusionUpwardMessagesReceivedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParaInclusion.UpwardMessagesReceived')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some upward messages have been received and will be processed.
     */
    get isV105(): boolean {
        return this._chain.getEventHash('ParaInclusion.UpwardMessagesReceived') === '2d8129b06f30a169fcb6d6880a497e0cac22650c5ccd121d7821784ed8ec6797'
    }

    /**
     * Some upward messages have been received and will be processed.
     */
    get asV105(): {from: number, count: number} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainSystemDownwardMessagesProcessedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainSystem.DownwardMessagesProcessed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === 'cf9eeacdba66ba832f6a2f98e5183e00967eed37902f126a525a42e65ffec630'
    }

    /**
     * Downward messages were processed using the given weight.
     */
    get asMatrixEnjinV603(): {weightUsed: matrixEnjinV603.Weight, dmqHead: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainSystemDownwardMessagesReceivedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainSystem.DownwardMessagesReceived')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some downward messages have been received and will be processed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '1cdbdc8ac203922f95ae6ab3e8b98004e956389f7ec11480ec5633d29b48cf71'
    }

    /**
     * Some downward messages have been received and will be processed.
     */
    get asMatrixEnjinV603(): {count: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainSystemUpgradeAuthorizedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainSystem.UpgradeAuthorized')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An upgrade has been authorized.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    /**
     * An upgrade has been authorized.
     */
    get asMatrixEnjinV603(): {codeHash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainSystemUpwardMessageSentEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainSystem.UpwardMessageSent')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('ParachainSystem.UpwardMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * An upward message was sent to the relay chain.
     */
    get asMatrixEnjinV603(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainSystemValidationFunctionAppliedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainSystem.ValidationFunctionApplied')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === 'f35adbaa82c93636884997faedd16369ac498b9208d7c11f2233b9ef2aa4f092'
    }

    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    get asMatrixEnjinV603(): {relayChainBlockNum: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainSystemValidationFunctionDiscardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainSystem.ValidationFunctionDiscarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The relay-chain aborted the upgrade process.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionDiscarded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The relay-chain aborted the upgrade process.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParachainSystemValidationFunctionStoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParachainSystem.ValidationFunctionStored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The validation function has been scheduled to apply.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The validation function has been scheduled to apply.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasActionQueuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.ActionQueued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A para has been queued to execute pending actions. `para_id`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Paras.ActionQueued') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     * A para has been queued to execute pending actions. `para_id`
     */
    get asV100(): [number, number] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasCodeUpgradeScheduledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.CodeUpgradeScheduled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A code upgrade has been scheduled for a Para. `para_id`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Paras.CodeUpgradeScheduled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A code upgrade has been scheduled for a Para. `para_id`
     */
    get asV100(): number {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasCurrentCodeUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.CurrentCodeUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Current code has been updated for a Para. `para_id`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Paras.CurrentCodeUpdated') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Current code has been updated for a Para. `para_id`
     */
    get asV100(): number {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasCurrentHeadUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.CurrentHeadUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Current head has been updated for a Para. `para_id`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Paras.CurrentHeadUpdated') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Current head has been updated for a Para. `para_id`
     */
    get asV100(): number {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasNewHeadNotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.NewHeadNoted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new head has been noted for a Para. `para_id`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Paras.NewHeadNoted') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A new head has been noted for a Para. `para_id`
     */
    get asV100(): number {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasPvfCheckAcceptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.PvfCheckAccepted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given validation code was accepted by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Paras.PvfCheckAccepted') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * The given validation code was accepted by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    get asV100(): [Uint8Array, number] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasPvfCheckRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.PvfCheckRejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given validation code was rejected by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Paras.PvfCheckRejected') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * The given validation code was rejected by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    get asV100(): [Uint8Array, number] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasPvfCheckStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.PvfCheckStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given para either initiated or subscribed to a PVF check for the given validation
     * code. `code_hash` `para_id`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Paras.PvfCheckStarted') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * The given para either initiated or subscribed to a PVF check for the given validation
     * code. `code_hash` `para_id`
     */
    get asV100(): [Uint8Array, number] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasDisputesDisputeConcludedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParasDisputes.DisputeConcluded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A dispute has concluded for or against a candidate.
     * `\[para id, candidate hash, dispute result\]`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ParasDisputes.DisputeConcluded') === 'e9351b7dc680e0a0341045157e5a30763bc3902fa66e2f60498d20f0e07d2335'
    }

    /**
     * A dispute has concluded for or against a candidate.
     * `\[para id, candidate hash, dispute result\]`
     */
    get asV100(): [Uint8Array, v100.DisputeResult] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasDisputesDisputeInitiatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParasDisputes.DisputeInitiated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A dispute has been initiated. \[candidate hash, dispute location\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ParasDisputes.DisputeInitiated') === 'a503e05d4e469adce22821bd6d920c96ec2980312e6f00da193a79ddb620706b'
    }

    /**
     * A dispute has been initiated. \[candidate hash, dispute location\]
     */
    get asV100(): [Uint8Array, v100.DisputeLocation] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasDisputesDisputeTimedOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParasDisputes.DisputeTimedOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A dispute has timed out due to insufficient participation.
     * `\[para id, candidate hash\]`
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ParasDisputes.DisputeTimedOut') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * A dispute has timed out due to insufficient participation.
     * `\[para id, candidate hash\]`
     */
    get asV100(): Uint8Array {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasDisputesRevertEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParasDisputes.Revert')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A dispute has concluded with supermajority against a candidate.
     * Block authors should no longer build on top of this head and should
     * instead revert the block at the given height. This should be the
     * number of the child of the last known valid block in the chain.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ParasDisputes.Revert') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A dispute has concluded with supermajority against a candidate.
     * Block authors should no longer build on top of this head and should
     * instead revert the block at the given height. This should be the
     * number of the child of the last known valid block in the chain.
     */
    get asV100(): number {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmAssetsClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.AssetsClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.AssetsClaimed') === '31f92e7520747dddaef3e11b450bf3ace3a2df72f612e4237ea77faaffe7a16c'
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get asMatrixEnjinV603(): [Uint8Array, matrixEnjinV603.V3MultiLocation, matrixEnjinV603.VersionedMultiAssets] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmAssetsTrappedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.AssetsTrapped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.AssetsTrapped') === '31f92e7520747dddaef3e11b450bf3ace3a2df72f612e4237ea77faaffe7a16c'
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get asMatrixEnjinV603(): [Uint8Array, matrixEnjinV603.V3MultiLocation, matrixEnjinV603.VersionedMultiAssets] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmAttemptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.Attempted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Attempted') === '9f44833a3470bf6416377180f3875a05cfa0cf60651f18f6456d9e12cbab7095'
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get asMatrixEnjinV603(): matrixEnjinV603.V3Outcome {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmFeesPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.FeesPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.FeesPaid') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    get asMatrixEnjinV603(): [matrixEnjinV603.V3MultiLocation, matrixEnjinV603.V3MultiAsset[]] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmInvalidQuerierEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.InvalidQuerier')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidQuerier') === '7c1090f283eee877a7601bfed0fd6fc3ca831930ac944924347ca8a2c6bd92e3'
    }

    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    get asMatrixEnjinV603(): [matrixEnjinV603.V3MultiLocation, bigint, matrixEnjinV603.V3MultiLocation, (matrixEnjinV603.V3MultiLocation | undefined)] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmInvalidQuerierVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.InvalidQuerierVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidQuerierVersion') === 'b8a7ace58226e359dd4ed6ffcc01266723020043e3fad0900eec6eb6f910a91e'
    }

    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get asMatrixEnjinV603(): [matrixEnjinV603.V3MultiLocation, bigint] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmInvalidResponderEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.InvalidResponder')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidResponder') === '3bf64d16d6fb5992c738643efff778414cc181e36377c106ab8130ca32b906de'
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get asMatrixEnjinV603(): [matrixEnjinV603.V3MultiLocation, bigint, (matrixEnjinV603.V3MultiLocation | undefined)] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmInvalidResponderVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.InvalidResponderVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.InvalidResponderVersion') === 'b8a7ace58226e359dd4ed6ffcc01266723020043e3fad0900eec6eb6f910a91e'
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get asMatrixEnjinV603(): [matrixEnjinV603.V3MultiLocation, bigint] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmNotifiedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.Notified')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Notified') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    get asMatrixEnjinV603(): [bigint, number, number] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmNotifyDecodeFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.NotifyDecodeFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyDecodeFailed') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    get asMatrixEnjinV603(): [bigint, number, number] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmNotifyDispatchErrorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.NotifyDispatchError')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyDispatchError') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    get asMatrixEnjinV603(): [bigint, number, number] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmNotifyOverweightEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.NotifyOverweight')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '98a4f2faff58b2444156c088dd1e1b3efb6f82323dcf1a7c67d4d2e01b621c0d'
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get asMatrixEnjinV603(): [bigint, number, number, matrixEnjinV603.Weight, matrixEnjinV603.Weight] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmNotifyTargetMigrationFailEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.NotifyTargetMigrationFail')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetMigrationFail') === '8266fa3a9f901885a47ef275cb4d4053fa3a36033a40564944a565ca686bb27d'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get asMatrixEnjinV603(): [matrixEnjinV603.VersionedMultiLocation, bigint] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmNotifyTargetSendFailEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.NotifyTargetSendFail')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '26c26186934c8414941ac6565c3465399a31fd237e9f48bcc04601c00427c6fc'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asMatrixEnjinV603(): [matrixEnjinV603.V3MultiLocation, bigint, matrixEnjinV603.V3Error] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmResponseReadyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.ResponseReady')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseReady') === '47e2336328ac2f8cffe468836a85755d501dbd3f9fe77c829ae5b5c5c33f5e9c'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asMatrixEnjinV603(): [bigint, matrixEnjinV603.V3Response] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmResponseTakenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.ResponseTaken')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.ResponseTaken') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    get asMatrixEnjinV603(): bigint {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmSentEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.Sent')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.Sent') === '8b71eb54444ef55962e90645805fd80535dfb12f572b41fdb1e093b7627b132d'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asMatrixEnjinV603(): [matrixEnjinV603.V3MultiLocation, matrixEnjinV603.V3MultiLocation, matrixEnjinV603.V3Instruction[]] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmSupportedVersionChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.SupportedVersionChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.SupportedVersionChanged') === '9fb88093240cec5964187b6999557d2d8c4331f97b6c42c5664d30afbf50d7d4'
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get asMatrixEnjinV603(): [matrixEnjinV603.V3MultiLocation, number] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmUnexpectedResponseEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.UnexpectedResponse')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.UnexpectedResponse') === 'b8a7ace58226e359dd4ed6ffcc01266723020043e3fad0900eec6eb6f910a91e'
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get asMatrixEnjinV603(): [matrixEnjinV603.V3MultiLocation, bigint] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmVersionChangeNotifiedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.VersionChangeNotified')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionChangeNotified') === '3e656c216d68595d03592e62a70ad5d9d6a20b8a41bc0686433d36902cc47f08'
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    get asMatrixEnjinV603(): [matrixEnjinV603.V3MultiLocation, number, matrixEnjinV603.V3MultiAsset[]] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmVersionNotifyRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.VersionNotifyRequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionNotifyRequested') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get asMatrixEnjinV603(): [matrixEnjinV603.V3MultiLocation, matrixEnjinV603.V3MultiAsset[]] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmVersionNotifyStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.VersionNotifyStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionNotifyStarted') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    get asMatrixEnjinV603(): [matrixEnjinV603.V3MultiLocation, matrixEnjinV603.V3MultiAsset[]] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PolkadotXcmVersionNotifyUnrequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'PolkadotXcm.VersionNotifyUnrequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('PolkadotXcm.VersionNotifyUnrequested') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get asMatrixEnjinV603(): [matrixEnjinV603.V3MultiLocation, matrixEnjinV603.V3MultiAsset[]] {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PoolsPoolsMutatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Pools.PoolsMutated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Pools storage was modified by [`PoolsMutation`]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Pools.PoolsMutated') === 'b16ffa04290d7cc517e7d6b466ba41ac23a91f050d81350d896bcb03eebd76b1'
    }

    /**
     * Pools storage was modified by [`PoolsMutation`]
     */
    get asMatrixEnjinV603(): matrixEnjinV603.PoolsMutation {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PreimageClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Preimage.Cleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A preimage has ben cleared.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has ben cleared.
     */
    get asMatrixEnjinV603(): {hash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PreimageNotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Preimage.Noted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A preimage has been noted.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been noted.
     */
    get asMatrixEnjinV603(): {hash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class PreimageRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Preimage.Requested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A preimage has been requested.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been requested.
     */
    get asMatrixEnjinV603(): {hash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Referenda.Approved') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    get asV100(): {index: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Cancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been cancelled.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Referenda.Cancelled') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV100(): {index: number, tally: v100.Tally} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaConfirmAbortedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.ConfirmAborted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV100(): boolean {
        return this._chain.getEventHash('Referenda.ConfirmAborted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV100(): {index: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaConfirmStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.ConfirmStarted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV100(): boolean {
        return this._chain.getEventHash('Referenda.ConfirmStarted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV100(): {index: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaConfirmedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Confirmed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Referenda.Confirmed') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    get asV100(): {index: number, tally: v100.Tally} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDecisionDepositPlacedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DecisionDepositPlaced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The decision deposit has been placed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Referenda.DecisionDepositPlaced') === '8d812a67c45bf964e1e2d13abd2a5d17e96af87348faff52d6eca5de04291ae9'
    }

    /**
     * The decision deposit has been placed.
     */
    get asV100(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDecisionDepositRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DecisionDepositRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The decision deposit has been refunded.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Referenda.DecisionDepositRefunded') === '8d812a67c45bf964e1e2d13abd2a5d17e96af87348faff52d6eca5de04291ae9'
    }

    /**
     * The decision deposit has been refunded.
     */
    get asV100(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDecisionStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DecisionStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has moved into the deciding phase.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Referenda.DecisionStarted') === '93e86498f68feebf124dad7a87010c14ba0e2cc07333331054e866079ff834a5'
    }

    /**
     * A referendum has moved into the deciding phase.
     */
    get asV100(): {index: number, track: number, proposal: v100.Bounded, tally: v100.Tally} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDepositSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DepositSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A deposit has been slashaed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Referenda.DepositSlashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * A deposit has been slashaed.
     */
    get asV100(): {who: Uint8Array, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaKilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Killed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been killed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Referenda.Killed') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has been killed.
     */
    get asV100(): {index: number, tally: v100.Tally} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.MetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a referendum has been cleared.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Referenda.MetadataCleared') === 'bcccfeca753f71fa9a69022a68c8a101a4dcc752e055426850d08a4ccc07337d'
    }

    /**
     * Metadata for a referendum has been cleared.
     */
    get asV104(): {index: number, hash: Uint8Array} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.MetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a referendum has been set.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Referenda.MetadataSet') === 'bcccfeca753f71fa9a69022a68c8a101a4dcc752e055426850d08a4ccc07337d'
    }

    /**
     * Metadata for a referendum has been set.
     */
    get asV104(): {index: number, hash: Uint8Array} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Rejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Referenda.Rejected') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV100(): {index: number, tally: v100.Tally} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaSubmissionDepositRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.SubmissionDepositRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The submission deposit has been refunded.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Referenda.SubmissionDepositRefunded') === '8d812a67c45bf964e1e2d13abd2a5d17e96af87348faff52d6eca5de04291ae9'
    }

    /**
     * The submission deposit has been refunded.
     */
    get asV100(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaSubmittedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Submitted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been submitted.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Referenda.Submitted') === 'dd1db40cab9e2e0c54e203f9c60347029a08160d5930b550604e5378d4c502df'
    }

    /**
     * A referendum has been submitted.
     */
    get asV100(): {index: number, track: number, proposal: v100.Bounded} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaTimedOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.TimedOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been timed out without being decided.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Referenda.TimedOut') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has been timed out without being decided.
     */
    get asV100(): {index: number, tally: v100.Tally} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class RegistrarDeregisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Registrar.Deregistered')
        this._chain = ctx._chain
        this.event = event
    }

    get isV100(): boolean {
        return this._chain.getEventHash('Registrar.Deregistered') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    get asV100(): {paraId: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class RegistrarRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Registrar.Registered')
        this._chain = ctx._chain
        this.event = event
    }

    get isV100(): boolean {
        return this._chain.getEventHash('Registrar.Registered') === 'fcb0da366ca6f6d7d745530f213e6cdf1948df720c94e736ad2764b51f57b9a6'
    }

    get asV100(): {paraId: number, manager: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class RegistrarReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Registrar.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    get isV100(): boolean {
        return this._chain.getEventHash('Registrar.Reserved') === '1f9b6376eaab9f7fcc13bea9f2b6a56229f262c6bc5ab4562b814aa57033fda6'
    }

    get asV100(): {paraId: number, who: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class RegistrarSwappedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Registrar.Swapped')
        this._chain = ctx._chain
        this.event = event
    }

    get isV105(): boolean {
        return this._chain.getEventHash('Registrar.Swapped') === '5a82c2177dd46ce4c9b665831e8205218e15960888b871d6c72aaa9faf6654ed'
    }

    get asV105(): {paraId: number, otherId: number} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerCallUnavailableEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.CallUnavailable')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Scheduler.CallUnavailable') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get asMatrixEnjinV603(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.Canceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Canceled some task.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Canceled some task.
     */
    get asMatrixEnjinV603(): {when: number, index: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.Dispatched')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Dispatched some task.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '6eb5580f3023aa9d8b919b2e4d4c348b6d18e7b61b4d3362b70f19480d1767fc'
    }

    /**
     * Dispatched some task.
     */
    get asMatrixEnjinV603(): {task: [number, number], id: (Uint8Array | undefined), result: matrixEnjinV603.Type_35} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === 'b67102cc706599639b8e52e776b81c51142dad43652e91e7e72197b7df9a63f4'
    }

    /**
     * Dispatched some task.
     */
    get asV100(): {task: [number, number], id: (Uint8Array | undefined), result: v100.Type_54} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '154dd24b4e6cd6cd4e2529e62ebb06fadb719be62866fec5887d179577869c45'
    }

    /**
     * Dispatched some task.
     */
    get asV104(): {task: [number, number], id: (Uint8Array | undefined), result: v104.Type_55} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Dispatched some task.
     */
    get isV105(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '6eb5580f3023aa9d8b919b2e4d4c348b6d18e7b61b4d3362b70f19480d1767fc'
    }

    /**
     * Dispatched some task.
     */
    get asV105(): {task: [number, number], id: (Uint8Array | undefined), result: v105.Type_55} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerPeriodicFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.PeriodicFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Scheduler.PeriodicFailed') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    get asMatrixEnjinV603(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerPermanentlyOverweightEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.PermanentlyOverweight')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given task can never be executed since it is overweight.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Scheduler.PermanentlyOverweight') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The given task can never be executed since it is overweight.
     */
    get asMatrixEnjinV603(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerScheduledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.Scheduled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Scheduled some task.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Scheduled some task.
     */
    get asMatrixEnjinV603(): {when: number, index: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class SessionNewSessionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Session.NewSession')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Session.NewSession') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get asMatrixEnjinV603(): {sessionIndex: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class SlotsLeasedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Slots.Leased')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A para has won the right to a continuous set of lease periods as a parachain.
     * First balance is any extra amount reserved on top of the para's existing deposit.
     * Second balance is the total amount reserved.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Slots.Leased') === '4625013b2a7d8273578186b9cca9ba9a58005a93e899f0b8db1e8fa1f40b076b'
    }

    /**
     * A para has won the right to a continuous set of lease periods as a parachain.
     * First balance is any extra amount reserved on top of the para's existing deposit.
     * Second balance is the total amount reserved.
     */
    get asV100(): {paraId: number, leaser: Uint8Array, periodBegin: number, periodCount: number, extraReserved: bigint, totalAmount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class SlotsNewLeasePeriodEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Slots.NewLeasePeriod')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new `[lease_period]` is beginning.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Slots.NewLeasePeriod') === 'd34ea8d9d8021775bd82bca4dbb3fb342419708199cd6e80ac5b9091f79a4000'
    }

    /**
     * A new `[lease_period]` is beginning.
     */
    get asV100(): {leasePeriod: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakeExchangeBuyOrderCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StakeExchange.BuyOrderCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Buy order was completed
     */
    get isV100(): boolean {
        return this._chain.getEventHash('StakeExchange.BuyOrderCompleted') === '1cdbf773833faab8ed9598b33f50ef2c2f8813bc61bfca3523f0a2533f4607da'
    }

    /**
     * Buy order was completed
     */
    get asV100(): {who: Uint8Array, tokenId: bigint, amount: bigint, rate: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Buy order was completed
     */
    get isV120(): boolean {
        return this._chain.getEventHash('StakeExchange.BuyOrderCompleted') === '18058d676860b96655127fe93c7979cd9236f10320c93eb433e5102083fa6829'
    }

    /**
     * Buy order was completed
     */
    get asV120(): {who: Uint8Array, tokenId: bigint, amount: bigint, rate: number} {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakeExchangeLiquidityAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StakeExchange.LiquidityAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Liquidity was added to a offer
     */
    get isV100(): boolean {
        return this._chain.getEventHash('StakeExchange.LiquidityAdded') === '8772f42c491a37477bf985a921c06b0c6f67d75e97fe8381a323aeb7ad2988a1'
    }

    /**
     * Liquidity was added to a offer
     */
    get asV100(): {who: Uint8Array, offerId: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakeExchangeLiquidityConfigUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StakeExchange.LiquidityConfigUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Liquidity config was set for account
     */
    get isV100(): boolean {
        return this._chain.getEventHash('StakeExchange.LiquidityConfigUpdated') === 'c03b79cb13c391409dc6ea073a5103589496753eb3fc87166619dda7dbbe715e'
    }

    /**
     * Liquidity config was set for account
     */
    get asV100(): {who: Uint8Array, config: v100.LiquidityAccountConfig} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakeExchangeLiquidityWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StakeExchange.LiquidityWithdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Liquidity was withdrawn from a offer
     */
    get isV100(): boolean {
        return this._chain.getEventHash('StakeExchange.LiquidityWithdrawn') === '8772f42c491a37477bf985a921c06b0c6f67d75e97fe8381a323aeb7ad2988a1'
    }

    /**
     * Liquidity was withdrawn from a offer
     */
    get asV100(): {who: Uint8Array, offerId: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakeExchangeOfferCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StakeExchange.OfferCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A offer was cancelled
     */
    get isV100(): boolean {
        return this._chain.getEventHash('StakeExchange.OfferCancelled') === 'a31df34b423037e305dbc2946d691428051e98fb362268dc0e78aff52ab30840'
    }

    /**
     * A offer was cancelled
     */
    get asV100(): {offerId: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakeExchangeOfferCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StakeExchange.OfferCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A offer was completed and removed
     */
    get isV110(): boolean {
        return this._chain.getEventHash('StakeExchange.OfferCompleted') === 'a31df34b423037e305dbc2946d691428051e98fb362268dc0e78aff52ab30840'
    }

    /**
     * A offer was completed and removed
     */
    get asV110(): {offerId: bigint} {
        assert(this.isV110)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakeExchangeOfferCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StakeExchange.OfferCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A offer was placed
     */
    get isV100(): boolean {
        return this._chain.getEventHash('StakeExchange.OfferCreated') === '5b867be8210821e49d46b808a4d8b9196e4773e0e7b8e7a6235b34fe8ec5b93b'
    }

    /**
     * A offer was placed
     */
    get asV100(): {offerId: bigint, offer: v100.Offer} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A offer was placed
     */
    get isV101(): boolean {
        return this._chain.getEventHash('StakeExchange.OfferCreated') === '2f592c792f8d17768bc8420ba45f0d3a900454940b43ed42e2eb1487b89b0dfc'
    }

    /**
     * A offer was placed
     */
    get asV101(): {offerId: bigint, offer: v101.Offer} {
        assert(this.isV101)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A offer was placed
     */
    get isV120(): boolean {
        return this._chain.getEventHash('StakeExchange.OfferCreated') === 'e591d25f01ce756c94fdfbbe42ab04dd47ab1c1dd6797d453ed7288006b93501'
    }

    /**
     * A offer was placed
     */
    get asV120(): {offerId: bigint, offer: v120.Offer} {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A offer was placed
     */
    get isV1021(): boolean {
        return this._chain.getEventHash('StakeExchange.OfferCreated') === 'dbbabdc3eac32520ed5a1849eabb325bcd89368834992afbe1ebfbed3caa7d19'
    }

    /**
     * A offer was placed
     */
    get asV1021(): {offerId: bigint, offer: v1021.Offer} {
        assert(this.isV1021)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A offer was placed
     */
    get isV1023(): boolean {
        return this._chain.getEventHash('StakeExchange.OfferCreated') === 'dc515fd96de9e9dca4ba6d0fac57ed45162f7d88b5c4608911f6b04ae2db93c8'
    }

    /**
     * A offer was placed
     */
    get asV1023(): {offerId: bigint, offer: v1023.Offer} {
        assert(this.isV1023)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingBondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Bonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Staking.Bonded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get asV100(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingChilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Chilled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Staking.Chilled') === '7f6c53511d7cf7d5d6d53c9bd68762f88e130eef3cdaff66e227fd21c493b12c'
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     */
    get asV100(): {stash: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingEraPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.EraPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Staking.EraPaid') === '940fb56de13a3a5bb887ff8bc3518465d73e48a2e4418a6edb32a9d338f0b44a'
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    get asV100(): {eraIndex: number, validatorPayout: bigint, remainder: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingForceEraEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.ForceEra')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new force era mode was set.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Staking.ForceEra') === 'd01e60727d072e84480126126bc575ed2a927476ff6a196deed5f14861885e98'
    }

    /**
     * A new force era mode was set.
     */
    get asV100(): {mode: v100.Forcing} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingKickedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Kicked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A nominator has been kicked from a validator.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Staking.Kicked') === 'd7d337878d792eb4a5ab3986a889ac0dcae3a639d0158fd9509bad8b5f25f81a'
    }

    /**
     * A nominator has been kicked from a validator.
     */
    get asV100(): {nominator: Uint8Array, stash: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingOldSlashingReportDiscardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.OldSlashingReportDiscarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Staking.OldSlashingReportDiscarded') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
    }

    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    get asV100(): {sessionIndex: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingPayoutStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.PayoutStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The stakers' rewards are getting paid.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Staking.PayoutStarted') === 'd95599bb0ef0f714befa738223f11c2fc8127ccc863fcf601c59c2c90393c3cf'
    }

    /**
     * The stakers' rewards are getting paid.
     */
    get asV100(): {eraIndex: number, validatorStash: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Rewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The nominator has been rewarded by this amount.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Staking.Rewarded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * The nominator has been rewarded by this amount.
     */
    get asV100(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSlashReportedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.SlashReported')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Staking.SlashReported') === 'e39cf2a18a4e10b8687c317e88d62091108b3531886ba13edd6e5b2b3fcd9ddc'
    }

    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    get asV100(): {validator: Uint8Array, fraction: number, slashEra: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A staker (validator or nominator) has been slashed by the given amount.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Staking.Slashed') === '8043a273ae232adf290e1fbbd88711bdf078eb5beb2a947de455999b434e7896'
    }

    /**
     * A staker (validator or nominator) has been slashed by the given amount.
     */
    get asV100(): {staker: Uint8Array, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingStakersElectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.StakersElected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new set of stakers was elected.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Staking.StakersElected') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A new set of stakers was elected.
     */
    get asV100(): null {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingStakingElectionFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.StakingElectionFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The election failed. No new era is planned.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Staking.StakingElectionFailed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The election failed. No new era is planned.
     */
    get asV100(): null {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingUnbondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Unbonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has unbonded this amount.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Staking.Unbonded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has unbonded this amount.
     */
    get asV100(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingValidatorPrefsSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.ValidatorPrefsSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A validator has set their preferences.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Staking.ValidatorPrefsSet') === 'ddd49ae78e2f486962719114045bf4dd54c48ed4387a2f0ad91dc62c7bfc3212'
    }

    /**
     * A validator has set their preferences.
     */
    get asV100(): {stash: Uint8Array, prefs: v100.ValidatorPrefs} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Staking.Withdrawn') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    get asV100(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoKeyChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.KeyChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === 'b94a7a753f8f0b026120555f1f1c70878235307461e256807cb791dad15244c2'
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get asV100(): {oldSudoer: (Uint8Array | undefined)} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoSudidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.Sudid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '1b4cd14e3ef27d194a19f72ca99c0748bad5378dacf5240cdcde1536e1d11dad'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV100(): {sudoResult: v100.Type_54} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '46f705cf78f55862454e1c96cbd85624469e65d9c879c6278cf4b6428bc723a4'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV104(): {sudoResult: v104.Type_55} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV105(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '3ecb430e21c76eb720064ac2294a31cf70178245416aa72891f2973dfab55b73'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV105(): {sudoResult: v105.Type_55} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoSudoAsDoneEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.SudoAsDone')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '1b4cd14e3ef27d194a19f72ca99c0748bad5378dacf5240cdcde1536e1d11dad'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV100(): {sudoResult: v100.Type_54} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '46f705cf78f55862454e1c96cbd85624469e65d9c879c6278cf4b6428bc723a4'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV104(): {sudoResult: v104.Type_55} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV105(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '3ecb430e21c76eb720064ac2294a31cf70178245416aa72891f2973dfab55b73'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV105(): {sudoResult: v105.Type_55} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemCodeUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.CodeUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * `:code` was updated.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * `:code` was updated.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemExtrinsicFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.ExtrinsicFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An extrinsic failed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '89ca818f689e3f6e085d8137a961f36cc94819777211c5c11cca985a448944b8'
    }

    /**
     * An extrinsic failed.
     */
    get asMatrixEnjinV603(): {dispatchError: matrixEnjinV603.DispatchError, dispatchInfo: matrixEnjinV603.DispatchInfo} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '36c29895cd15b6f845bb064a671635ce07ef9de9648695c2803020e8510d0fb3'
    }

    /**
     * An extrinsic failed.
     */
    get asV100(): {dispatchError: v100.DispatchError, dispatchInfo: v100.DispatchInfo} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '3dbd96eefe1aa593b278d8684042e23a6a118e379fb5699dd871cf28fb627cd6'
    }

    /**
     * An extrinsic failed.
     */
    get asV104(): {dispatchError: v104.DispatchError, dispatchInfo: v104.DispatchInfo} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV105(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '89ca818f689e3f6e085d8137a961f36cc94819777211c5c11cca985a448944b8'
    }

    /**
     * An extrinsic failed.
     */
    get asV105(): {dispatchError: v105.DispatchError, dispatchInfo: v105.DispatchInfo} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemExtrinsicSuccessEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.ExtrinsicSuccess')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An extrinsic completed successfully.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '6b78214e1591ecc2de1662ebf5ca93838612414a62415cde1cdd2962f8235a92'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asMatrixEnjinV603(): {dispatchInfo: matrixEnjinV603.DispatchInfo} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemKilledAccountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.KilledAccount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was reaped.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account was reaped.
     */
    get asMatrixEnjinV603(): {account: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemNewAccountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.NewAccount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new account was created.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * A new account was created.
     */
    get asMatrixEnjinV603(): {account: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemRemarkedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.Remarked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * On on-chain remark happened.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
    }

    /**
     * On on-chain remark happened.
     */
    get asMatrixEnjinV603(): {sender: Uint8Array, hash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was approved by the required threshold.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was approved by the required threshold.
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Closed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
    }

    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array, yes: number, no: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeDisapprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Disapproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * A motion was not approved by the required threshold.
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Executed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Executed') === '6820679ab2706380fa3eaa694e707b2dd6bcd901fb46cdcafbea7b2f05d8feba'
    }

    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array, result: matrixEnjinV603.Type_35} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeMemberExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.MemberExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === '6820679ab2706380fa3eaa694e707b2dd6bcd901fb46cdcafbea7b2f05d8feba'
    }

    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array, result: matrixEnjinV603.Type_35} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
    }

    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    get asMatrixEnjinV603(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalCommitteeVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalCommittee.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('TechnicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
    }

    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    get asMatrixEnjinV603(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipDummyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.Dummy')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Phantom member, never used.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('TechnicalMembership.Dummy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Phantom member, never used.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipKeyChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.KeyChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * One of the members' keys changed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('TechnicalMembership.KeyChanged') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * One of the members' keys changed.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipMemberAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.MemberAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given member was added; see the transaction for who.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MemberAdded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The given member was added; see the transaction for who.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipMemberRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.MemberRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given member was removed; see the transaction for who.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MemberRemoved') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The given member was removed; see the transaction for who.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipMembersResetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.MembersReset')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MembersReset') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The membership was reset; see the transaction for who the new set is.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class TechnicalMembershipMembersSwappedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TechnicalMembership.MembersSwapped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Two members were swapped; see the transaction for who.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('TechnicalMembership.MembersSwapped') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Two members were swapped; see the transaction for who.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class TransactionPaymentTransactionFeePaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TransactionPayment.TransactionFeePaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('TransactionPayment.TransactionFeePaid') === 'f2e962e9996631445edecd62b0646df79871442a2d1a1a6e1f550a0b3a56b226'
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get asMatrixEnjinV603(): {who: Uint8Array, actualFee: bigint, tip: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryAwardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Awarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some funds have been allocated.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
    }

    /**
     * Some funds have been allocated.
     */
    get asV100(): {proposalIndex: number, award: bigint, account: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBurntEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Burnt')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some of our funds have been burnt.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.Burnt') === '9d1d11cb2e24085666bf949195a4030bd6e80ff41274d0386073977e7cd59a87'
    }

    /**
     * Some of our funds have been burnt.
     */
    get asV100(): {burntFunds: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryDepositEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Deposit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some funds have been deposited.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.Deposit') === 'd74027ad27459f17d7446fef449271d1b0dc12b852c175623e871d009a661493'
    }

    /**
     * Some funds have been deposited.
     */
    get asV100(): {value: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New proposal.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
    }

    /**
     * New proposal.
     */
    get asV100(): {proposalIndex: number} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Rejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get asV100(): {proposalIndex: number, slashed: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryRolloverEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Rollover')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.Rollover') === 'c9e720e2b3ada12c617b4dcb70771c3afafb9e294bf362df01a9e129683a92dd'
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get asV100(): {rolloverBalance: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasurySpendApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.SpendApproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new spend proposal has been approved.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.SpendApproved') === 'fce90c02bffde89fb0e8723868aa8e94bfe9c1c48c5af8c34efd8ff5173184f9'
    }

    /**
     * A new spend proposal has been approved.
     */
    get asV100(): {proposalIndex: number, amount: bigint, beneficiary: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasurySpendingEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Spending')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.Spending') === 'b9f599ccbbe2e4fd1004f47546e1a3100bc78745b24ac47ac03ed16ca6266290'
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get asV100(): {budgetRemaining: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryUpdatedInactiveEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.UpdatedInactive')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The inactive funds of the pallet have been updated.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Treasury.UpdatedInactive') === 'd25083f089d99f72f11dfcdd8481dbdc5c0c6d9c3369646530e2e08cd9f6bbba'
    }

    /**
     * The inactive funds of the pallet have been updated.
     */
    get asV100(): {reactivated: bigint, deactivated: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class UmpExecutedUpwardEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Ump.ExecutedUpward')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Ump.ExecutedUpward') === '0a5524dcf48d575bf19533e72499c1b6f08167113160e1bb190028315c81787f'
    }

    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    get asV100(): [Uint8Array, v100.V3Outcome] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class UmpInvalidFormatEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Ump.InvalidFormat')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Upward message is invalid XCM.
     * \[ id \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Ump.InvalidFormat') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Upward message is invalid XCM.
     * \[ id \]
     */
    get asV100(): Uint8Array {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class UmpOverweightEnqueuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Ump.OverweightEnqueued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The weight budget was exceeded for an individual upward message.
     * 
     * This message can be later dispatched manually using `service_overweight` dispatchable
     * using the assigned `overweight_index`.
     * 
     * \[ para, id, overweight_index, required \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Ump.OverweightEnqueued') === 'd3af318db82ff77a61475e5ba29692cb7bdcc7383eb1cd1e018d324a4c241953'
    }

    /**
     * The weight budget was exceeded for an individual upward message.
     * 
     * This message can be later dispatched manually using `service_overweight` dispatchable
     * using the assigned `overweight_index`.
     * 
     * \[ para, id, overweight_index, required \]
     */
    get asV100(): [number, Uint8Array, bigint, v100.Weight] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class UmpOverweightServicedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Ump.OverweightServiced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Upward message from the overweight queue was executed with the given actual weight
     * used.
     * 
     * \[ overweight_index, used \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Ump.OverweightServiced') === '88097626858e815372076ee35ab78f1e9adcbb85d556b85f5da9ca4f3a389162'
    }

    /**
     * Upward message from the overweight queue was executed with the given actual weight
     * used.
     * 
     * \[ overweight_index, used \]
     */
    get asV100(): [bigint, v100.Weight] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class UmpUnsupportedVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Ump.UnsupportedVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Upward message is unsupported version of XCM.
     * \[ id \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Ump.UnsupportedVersion') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * Upward message is unsupported version of XCM.
     * \[ id \]
     */
    get asV100(): Uint8Array {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class UmpUpwardMessagesReceivedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Ump.UpwardMessagesReceived')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some upward messages have been received and will be processed.
     * \[ para, count, size \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Ump.UpwardMessagesReceived') === 'ee14df8652ec18f0202c95706dac25953673d4834fcfe21e7d7559cb96975c06'
    }

    /**
     * Some upward messages have been received and will be processed.
     * \[ para, count, size \]
     */
    get asV100(): [number, number, number] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class UmpWeightExhaustedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Ump.WeightExhausted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The weight limit for handling upward messages was reached.
     * \[ id, remaining, required \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Ump.WeightExhausted') === 'c2e0c5d4d360c41729d56a488c7e9012e8bc155fcc2d0de3d1e763993ef99059'
    }

    /**
     * The weight limit for handling upward messages was reached.
     * \[ id, remaining, required \]
     */
    get asV100(): [Uint8Array, v100.Weight, v100.Weight] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class UnknownTokensDepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'UnknownTokens.Deposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Deposit success.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('UnknownTokens.Deposited') === '56d763db65b5d2d0b08faf432352ea07b43e96d3748f93c593bf63f666b69808'
    }

    /**
     * Deposit success.
     */
    get asMatrixEnjinV603(): {asset: matrixEnjinV603.V3MultiAsset, who: matrixEnjinV603.V3MultiLocation} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class UnknownTokensWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'UnknownTokens.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Withdraw success.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('UnknownTokens.Withdrawn') === '56d763db65b5d2d0b08faf432352ea07b43e96d3748f93c593bf63f666b69808'
    }

    /**
     * Withdraw success.
     */
    get asMatrixEnjinV603(): {asset: matrixEnjinV603.V3MultiAsset, who: matrixEnjinV603.V3MultiLocation} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityBatchCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.BatchCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of dispatches completed fully with no error.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed fully with no error.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityBatchCompletedWithErrorsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.BatchCompletedWithErrors')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Utility.BatchCompletedWithErrors') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityBatchInterruptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.BatchInterrupted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '031f8c01ddd9491965bf6e6671d70381e70d55e6028aab52a937d1c3afeecb9f'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asMatrixEnjinV603(): {index: number, error: matrixEnjinV603.DispatchError} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '14dbb9456065a44deeed159d4dbd21796ec92754c0494d698c9bcc529d0f7279'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV100(): {index: number, error: v100.DispatchError} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '55aa3365272ab00b66790b493c7489ead9e9c34bdcad0b48ee9755d3bd0d725e'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV104(): {index: number, error: v104.DispatchError} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV105(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '031f8c01ddd9491965bf6e6671d70381e70d55e6028aab52a937d1c3afeecb9f'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV105(): {index: number, error: v105.DispatchError} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityDispatchedAsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.DispatchedAs')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A call was dispatched.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'ee56f7174dc1a4631da3e5b48f323193771be6a702fb2ff1ff40459869d34a0e'
    }

    /**
     * A call was dispatched.
     */
    get asMatrixEnjinV603(): {result: matrixEnjinV603.Type_35} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'd15218d9451baa25e4e3c2b30a15d679f7c3c9aa3d43b64b531831430663eb58'
    }

    /**
     * A call was dispatched.
     */
    get asV100(): {result: v100.Type_54} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'e6b126b1d10869892737f36b23109c1b51d3828aeab399104c160e9f275d8049'
    }

    /**
     * A call was dispatched.
     */
    get asV104(): {result: v104.Type_55} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A call was dispatched.
     */
    get isV105(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'ee56f7174dc1a4631da3e5b48f323193771be6a702fb2ff1ff40459869d34a0e'
    }

    /**
     * A call was dispatched.
     */
    get asV105(): {result: v105.Type_55} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityItemCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.ItemCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityItemFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.ItemFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '4564a5412ce55535234d019dbd1d2999c5a9d6f452a565385d0c43e85d0dbf0b'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asMatrixEnjinV603(): {error: matrixEnjinV603.DispatchError} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '58463e011dfd19c6786d4056e9e9452b33b4cb0fcf9c6e8c032e8ad7d16b0d34'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV100(): {error: v100.DispatchError} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get isV104(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '3ea595fddebcb407af8f717186084e8c4f09481ff7bcc5d4cc97dcd83cddd616'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV104(): {error: v104.DispatchError} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get isV105(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '4564a5412ce55535234d019dbd1d2999c5a9d6f452a565385d0c43e85d0dbf0b'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV105(): {error: v105.DispatchError} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class ValidatorManagerValidatorsDeregisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ValidatorManager.ValidatorsDeregistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Validators were removed from the set.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ValidatorManager.ValidatorsDeregistered') === 'b108f68a3a6ead7fe33d80e59b6d7124fdd14cd6108c81ad0b9d713fd6046122'
    }

    /**
     * Validators were removed from the set.
     */
    get asV100(): Uint8Array[] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class ValidatorManagerValidatorsRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ValidatorManager.ValidatorsRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New validators were added to the set.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('ValidatorManager.ValidatorsRegistered') === 'b108f68a3a6ead7fe33d80e59b6d7124fdd14cd6108c81ad0b9d713fd6046122'
    }

    /**
     * New validators were added to the set.
     */
    get asV100(): Uint8Array[] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class VoteManagerVotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'VoteManager.Voted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has voted in a referendum
     */
    get isV120(): boolean {
        return this._chain.getEventHash('VoteManager.Voted') === 'fe144c04303e1fe97c923bdfaa349eede5dd193eef926b3bcc730cba123fea67'
    }

    /**
     * An account has voted in a referendum
     */
    get asV120(): {voter: Uint8Array, pollIndex: number, vote: v120.AccountVote} {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class VoterListRebaggedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'VoterList.Rebagged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Moved an account from one bag to another.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('VoterList.Rebagged') === '7c6f9f7c01916b66130aa25ffe6ba9b00599c0af74b1238a9876c164819dde4e'
    }

    /**
     * Moved an account from one bag to another.
     */
    get asV100(): {who: Uint8Array, from: bigint, to: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class VoterListScoreUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'VoterList.ScoreUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Updated the score of some account to the given amount.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('VoterList.ScoreUpdated') === '3444db3e9dd4128c42e890eb1f98441148f3d7cea3a43f5b223ba3e6cdc2c8b6'
    }

    /**
     * Updated the score of some account to the given amount.
     */
    get asV100(): {who: Uint8Array, newScore: bigint} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class WhitelistCallWhitelistedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Whitelist.CallWhitelisted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV100(): boolean {
        return this._chain.getEventHash('Whitelist.CallWhitelisted') === 'b44e90452a13e65d907b0cefbea166547546a12683e4c0df57032f38a10e78b3'
    }

    get asV100(): {callHash: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class WhitelistWhitelistedCallDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Whitelist.WhitelistedCallDispatched')
        this._chain = ctx._chain
        this.event = event
    }

    get isV100(): boolean {
        return this._chain.getEventHash('Whitelist.WhitelistedCallDispatched') === 'f3cf1e680982a29643501f0efe5ea31d9996c644bf575968d233190a4d28c85f'
    }

    get asV100(): {callHash: Uint8Array, result: Result<v100.PostDispatchInfo, v100.DispatchErrorWithPostInfo>} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    get isV104(): boolean {
        return this._chain.getEventHash('Whitelist.WhitelistedCallDispatched') === '7a3c5cecda1aa512a9e0e3c410de4f2a082346851d3d9b96224b31413ed8937d'
    }

    get asV104(): {callHash: Uint8Array, result: Result<v104.PostDispatchInfo, v104.DispatchErrorWithPostInfo>} {
        assert(this.isV104)
        return this._chain.decodeEvent(this.event)
    }

    get isV105(): boolean {
        return this._chain.getEventHash('Whitelist.WhitelistedCallDispatched') === '872efdfca137d9329d409f26057af1369b9a71eb023c2bc2c0a793d4d9dfca2e'
    }

    get asV105(): {callHash: Uint8Array, result: Result<v105.PostDispatchInfo, v105.DispatchErrorWithPostInfo>} {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class WhitelistWhitelistedCallRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Whitelist.WhitelistedCallRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    get isV100(): boolean {
        return this._chain.getEventHash('Whitelist.WhitelistedCallRemoved') === 'b44e90452a13e65d907b0cefbea166547546a12683e4c0df57032f38a10e78b3'
    }

    get asV100(): {callHash: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XTokensTransferredMultiAssetsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XTokens.TransferredMultiAssets')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('XTokens.TransferredMultiAssets') === '15736a72848dcda33acde4ffd89efcf41166a311cefd45a3ccad9cf54e78a91d'
    }

    /**
     * Transferred `MultiAsset` with fee.
     */
    get asMatrixEnjinV603(): {sender: Uint8Array, assets: matrixEnjinV603.V3MultiAsset[], fee: matrixEnjinV603.V3MultiAsset, dest: matrixEnjinV603.V3MultiLocation} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletAssetsClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.AssetsClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.AssetsClaimed') === '31f92e7520747dddaef3e11b450bf3ace3a2df72f612e4237ea77faaffe7a16c'
    }

    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    get asV100(): [Uint8Array, v100.V3MultiLocation, v100.VersionedMultiAssets] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletAssetsTrappedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.AssetsTrapped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.AssetsTrapped') === '31f92e7520747dddaef3e11b450bf3ace3a2df72f612e4237ea77faaffe7a16c'
    }

    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    get asV100(): [Uint8Array, v100.V3MultiLocation, v100.VersionedMultiAssets] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletAttemptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.Attempted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.Attempted') === '9f44833a3470bf6416377180f3875a05cfa0cf60651f18f6456d9e12cbab7095'
    }

    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    get asV100(): v100.V3Outcome {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletFeesPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.FeesPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.FeesPaid') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    get asV100(): [v100.V3MultiLocation, v100.V3MultiAsset[]] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletInvalidQuerierEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.InvalidQuerier')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidQuerier') === '7c1090f283eee877a7601bfed0fd6fc3ca831930ac944924347ca8a2c6bd92e3'
    }

    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    get asV100(): [v100.V3MultiLocation, bigint, v100.V3MultiLocation, (v100.V3MultiLocation | undefined)] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletInvalidQuerierVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.InvalidQuerierVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidQuerierVersion') === 'b8a7ace58226e359dd4ed6ffcc01266723020043e3fad0900eec6eb6f910a91e'
    }

    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get asV100(): [v100.V3MultiLocation, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletInvalidResponderEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.InvalidResponder')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidResponder') === '3bf64d16d6fb5992c738643efff778414cc181e36377c106ab8130ca32b906de'
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    get asV100(): [v100.V3MultiLocation, bigint, (v100.V3MultiLocation | undefined)] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletInvalidResponderVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.InvalidResponderVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidResponderVersion') === 'b8a7ace58226e359dd4ed6ffcc01266723020043e3fad0900eec6eb6f910a91e'
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    get asV100(): [v100.V3MultiLocation, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifiedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.Notified')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.Notified') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV100(): [bigint, number, number] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifyDecodeFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.NotifyDecodeFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyDecodeFailed') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV100(): [bigint, number, number] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifyDispatchErrorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.NotifyDispatchError')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyDispatchError') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
    }

    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    get asV100(): [bigint, number, number] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifyOverweightEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.NotifyOverweight')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyOverweight') === '98a4f2faff58b2444156c088dd1e1b3efb6f82323dcf1a7c67d4d2e01b621c0d'
    }

    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    get asV100(): [bigint, number, number, v100.Weight, v100.Weight] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifyTargetMigrationFailEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.NotifyTargetMigrationFail')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyTargetMigrationFail') === '8266fa3a9f901885a47ef275cb4d4053fa3a36033a40564944a565ca686bb27d'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    get asV100(): [v100.VersionedMultiLocation, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifyTargetSendFailEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.NotifyTargetSendFail')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyTargetSendFail') === '26c26186934c8414941ac6565c3465399a31fd237e9f48bcc04601c00427c6fc'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    get asV100(): [v100.V3MultiLocation, bigint, v100.V3Error] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletResponseReadyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.ResponseReady')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.ResponseReady') === '47e2336328ac2f8cffe468836a85755d501dbd3f9fe77c829ae5b5c5c33f5e9c'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    get asV100(): [bigint, v100.V3Response] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletResponseTakenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.ResponseTaken')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.ResponseTaken') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletSentEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.Sent')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.Sent') === '8b71eb54444ef55962e90645805fd80535dfb12f572b41fdb1e093b7627b132d'
    }

    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    get asV100(): [v100.V3MultiLocation, v100.V3MultiLocation, v100.V3Instruction[]] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletSupportedVersionChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.SupportedVersionChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.SupportedVersionChanged') === '9fb88093240cec5964187b6999557d2d8c4331f97b6c42c5664d30afbf50d7d4'
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    get asV100(): [v100.V3MultiLocation, number] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletUnexpectedResponseEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.UnexpectedResponse')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.UnexpectedResponse') === 'b8a7ace58226e359dd4ed6ffcc01266723020043e3fad0900eec6eb6f910a91e'
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    get asV100(): [v100.V3MultiLocation, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletVersionChangeNotifiedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.VersionChangeNotified')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionChangeNotified') === '3e656c216d68595d03592e62a70ad5d9d6a20b8a41bc0686433d36902cc47f08'
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    get asV100(): [v100.V3MultiLocation, number, v100.V3MultiAsset[]] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletVersionNotifyRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.VersionNotifyRequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionNotifyRequested') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get asV100(): [v100.V3MultiLocation, v100.V3MultiAsset[]] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletVersionNotifyStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.VersionNotifyStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionNotifyStarted') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    get asV100(): [v100.V3MultiLocation, v100.V3MultiAsset[]] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletVersionNotifyUnrequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.VersionNotifyUnrequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionNotifyUnrequested') === '1e1917ab347c95883db9a398c08711e7ca09b4af3514b1b64b18534cb58a1f4e'
    }

    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    get asV100(): [v100.V3MultiLocation, v100.V3MultiAsset[]] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmpQueueBadFormatEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmpQueue.BadFormat')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Bad XCM format used.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadFormat') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * Bad XCM format used.
     */
    get asMatrixEnjinV603(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmpQueueBadVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmpQueue.BadVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Bad XCM version used.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('XcmpQueue.BadVersion') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * Bad XCM version used.
     */
    get asMatrixEnjinV603(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmpQueueFailEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmpQueue.Fail')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some XCM failed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('XcmpQueue.Fail') === 'add7b9cc246aa92449c7315a345573f307df55cd0b7e472982a726f0e1757cf0'
    }

    /**
     * Some XCM failed.
     */
    get asMatrixEnjinV603(): {messageHash: (Uint8Array | undefined), error: matrixEnjinV603.V3Error, weight: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmpQueueOverweightEnqueuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmpQueue.OverweightEnqueued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === '2ab73de7ff203da5932102451076b4fa8c2ccd8d1073f98653bf4d6f0c768abb'
    }

    /**
     * An XCM exceeded the individual message weight budget.
     */
    get asMatrixEnjinV603(): {sender: number, sentAt: number, index: bigint, required: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmpQueueOverweightServicedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmpQueue.OverweightServiced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('XcmpQueue.OverweightServiced') === '329a8814d84fbfabe17575c913cc1d0e29db3f8ce21b25c6e90d9e54913d763b'
    }

    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    get asMatrixEnjinV603(): {index: bigint, used: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmpQueueSuccessEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmpQueue.Success')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some XCM was executed ok.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('XcmpQueue.Success') === 'b84e46a58fb78d04c8748c4d236302e83484bfad9ec3579aa4e8f336f0efaca8'
    }

    /**
     * Some XCM was executed ok.
     */
    get asMatrixEnjinV603(): {messageHash: (Uint8Array | undefined), weight: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmpQueueXcmpMessageSentEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmpQueue.XcmpMessageSent')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An HRMP message was sent to a sibling parachain.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
    }

    /**
     * An HRMP message was sent to a sibling parachain.
     */
    get asMatrixEnjinV603(): {messageHash: (Uint8Array | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeEvent(this.event)
    }
}
