import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { InsertRuleSet } from './types'

export function insertRuleSet(call: CallItem): InsertRuleSet {
    return match(call)
        .returnType<InsertRuleSet>()
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixEnjinV1012.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixEnjinV1005.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixEnjinV1005.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixEnjinV1004.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixEnjinV1004.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixEnjinV1003.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixEnjinV1003.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixEnjinV1000.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixEnjinV1000.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixEnjinV603.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixV1012.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixV1012.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixV1011.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixV1011.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixV1010.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixV1010.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixV1005.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixV1005.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixV1003.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixV1003.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixV1000.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixV1000.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixV604.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixV604.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixV602.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixV602.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixV601.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixV601.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixV600.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixV600.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.matrixV500.is(call),
            () => calls.fuelTanks.insertRuleSet.matrixV500.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.enjinV1032.is(call),
            () => calls.fuelTanks.insertRuleSet.enjinV1032.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.enjinV1026.is(call),
            () => calls.fuelTanks.insertRuleSet.enjinV1026.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.enjinV1023.is(call),
            () => calls.fuelTanks.insertRuleSet.enjinV1023.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.enjinV1022.is(call),
            () => calls.fuelTanks.insertRuleSet.enjinV1022.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.enjinV1021.is(call),
            () => calls.fuelTanks.insertRuleSet.enjinV1021.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.enjinV120.is(call),
            () => calls.fuelTanks.insertRuleSet.enjinV120.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.enjinV110.is(call),
            () => calls.fuelTanks.insertRuleSet.enjinV110.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.enjinV101.is(call),
            () => calls.fuelTanks.insertRuleSet.enjinV101.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.enjinV100.is(call),
            () => calls.fuelTanks.insertRuleSet.enjinV100.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.v1050.is(call),
            () => calls.fuelTanks.insertRuleSet.v1050.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.v1032.is(call),
            () => calls.fuelTanks.insertRuleSet.v1032.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.v1031.is(call),
            () => calls.fuelTanks.insertRuleSet.v1031.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.v1030.is(call),
            () => calls.fuelTanks.insertRuleSet.v1030.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.v1026.is(call),
            () => calls.fuelTanks.insertRuleSet.v1026.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.v1023.is(call),
            () => calls.fuelTanks.insertRuleSet.v1023.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.v1022.is(call),
            () => calls.fuelTanks.insertRuleSet.v1022.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.v1021.is(call),
            () => calls.fuelTanks.insertRuleSet.v1021.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.v120.is(call),
            () => calls.fuelTanks.insertRuleSet.v120.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.v110.is(call),
            () => calls.fuelTanks.insertRuleSet.v110.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.v105.is(call),
            () => calls.fuelTanks.insertRuleSet.v105.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.v104.is(call),
            () => calls.fuelTanks.insertRuleSet.v104.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.v103.is(call),
            () => calls.fuelTanks.insertRuleSet.v103.decode(call)
        )
        .when(
            () => calls.fuelTanks.insertRuleSet.v102.is(call),
            () => calls.fuelTanks.insertRuleSet.v102.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
