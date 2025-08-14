import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const addStateMachines = {
    name: 'IsmpGrandpa.add_state_machines',
    /**
     * Add some a state machine to the list of supported state machines
     */
    matrixV1030: new CallType(
        'IsmpGrandpa.add_state_machines',
        sts.struct({
            newStateMachines: sts.array(() => matrixV1030.AddStateMachine),
        })
    ),
}

export const removeStateMachines = {
    name: 'IsmpGrandpa.remove_state_machines',
    /**
     * Remove a state machine from the list of supported state machines
     */
    matrixV1030: new CallType(
        'IsmpGrandpa.remove_state_machines',
        sts.struct({
            stateMachines: sts.array(() => matrixV1030.StateMachine),
        })
    ),
}
