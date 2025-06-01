import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixV602 from '../matrixV602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'

export const proposed =  {
    name: 'TechnicalCommittee.Proposed',
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    matrixEnjinV603: new EventType(
        'TechnicalCommittee.Proposed',
        sts.struct({
            account: matrixEnjinV603.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: matrixEnjinV603.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'TechnicalCommittee.Voted',
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    matrixEnjinV603: new EventType(
        'TechnicalCommittee.Voted',
        sts.struct({
            account: matrixEnjinV603.AccountId32,
            proposalHash: matrixEnjinV603.H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}

export const approved =  {
    name: 'TechnicalCommittee.Approved',
    /**
     * A motion was approved by the required threshold.
     */
    matrixEnjinV603: new EventType(
        'TechnicalCommittee.Approved',
        sts.struct({
            proposalHash: matrixEnjinV603.H256,
        })
    ),
}

export const disapproved =  {
    name: 'TechnicalCommittee.Disapproved',
    /**
     * A motion was not approved by the required threshold.
     */
    matrixEnjinV603: new EventType(
        'TechnicalCommittee.Disapproved',
        sts.struct({
            proposalHash: matrixEnjinV603.H256,
        })
    ),
}

export const executed =  {
    name: 'TechnicalCommittee.Executed',
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    matrixEnjinV603: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: matrixEnjinV603.H256,
            result: sts.result(() => sts.unit(), () => matrixEnjinV603.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    matrixV500: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: matrixV500.H256,
            result: sts.result(() => sts.unit(), () => matrixV500.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    matrixV602: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: matrixV602.H256,
            result: sts.result(() => sts.unit(), () => matrixV602.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    matrixV604: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: matrixV604.H256,
            result: sts.result(() => sts.unit(), () => matrixV604.DispatchError),
        })
    ),
}

export const memberExecuted =  {
    name: 'TechnicalCommittee.MemberExecuted',
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    matrixEnjinV603: new EventType(
        'TechnicalCommittee.MemberExecuted',
        sts.struct({
            proposalHash: matrixEnjinV603.H256,
            result: sts.result(() => sts.unit(), () => matrixEnjinV603.DispatchError),
        })
    ),
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    matrixV500: new EventType(
        'TechnicalCommittee.MemberExecuted',
        sts.struct({
            proposalHash: matrixV500.H256,
            result: sts.result(() => sts.unit(), () => matrixV500.DispatchError),
        })
    ),
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    matrixV602: new EventType(
        'TechnicalCommittee.MemberExecuted',
        sts.struct({
            proposalHash: matrixV602.H256,
            result: sts.result(() => sts.unit(), () => matrixV602.DispatchError),
        })
    ),
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    matrixV604: new EventType(
        'TechnicalCommittee.MemberExecuted',
        sts.struct({
            proposalHash: matrixV604.H256,
            result: sts.result(() => sts.unit(), () => matrixV604.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'TechnicalCommittee.Closed',
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    matrixEnjinV603: new EventType(
        'TechnicalCommittee.Closed',
        sts.struct({
            proposalHash: matrixEnjinV603.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
