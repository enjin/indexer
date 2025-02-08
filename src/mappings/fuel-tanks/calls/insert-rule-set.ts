import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'
import { RuleSetDescriptor } from '../types'

type InsertRuleSetCall = {
    tankId: {
        __kind: string
        value?: string
    }
    ruleSetId: number
    rules?: RuleSetDescriptor // Same as ruleSet changed at enjin v1032
    ruleSet?: RuleSetDescriptor // Same as rules changed at enjin v1032
}

export function insertRuleSet(call: CallItem) {
    return match(call)
        .returnType<InsertRuleSetCall>()
        .when(calls.fuelTanks.insertRuleSet.matrixEnjinV1012.is, calls.fuelTanks.insertRuleSet.matrixEnjinV1012.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixEnjinV1005.is, calls.fuelTanks.insertRuleSet.matrixEnjinV1005.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixEnjinV1004.is, calls.fuelTanks.insertRuleSet.matrixEnjinV1004.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixEnjinV1003.is, calls.fuelTanks.insertRuleSet.matrixEnjinV1003.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixEnjinV1000.is, calls.fuelTanks.insertRuleSet.matrixEnjinV1000.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixEnjinV603.is, calls.fuelTanks.insertRuleSet.matrixEnjinV603.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixV1012.is, calls.fuelTanks.insertRuleSet.matrixV1012.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixV1011.is, calls.fuelTanks.insertRuleSet.matrixV1011.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixV1010.is, calls.fuelTanks.insertRuleSet.matrixV1010.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixV1005.is, calls.fuelTanks.insertRuleSet.matrixV1005.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixV1003.is, calls.fuelTanks.insertRuleSet.matrixV1003.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixV1000.is, calls.fuelTanks.insertRuleSet.matrixV1000.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixV604.is, calls.fuelTanks.insertRuleSet.matrixV604.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixV602.is, calls.fuelTanks.insertRuleSet.matrixV602.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixV601.is, calls.fuelTanks.insertRuleSet.matrixV601.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixV600.is, calls.fuelTanks.insertRuleSet.matrixV600.decode)
        .when(calls.fuelTanks.insertRuleSet.matrixV500.is, calls.fuelTanks.insertRuleSet.matrixV500.decode)
        .when(calls.fuelTanks.insertRuleSet.enjinV1032.is, calls.fuelTanks.insertRuleSet.enjinV1032.decode)
        .when(calls.fuelTanks.insertRuleSet.enjinV1026.is, calls.fuelTanks.insertRuleSet.enjinV1026.decode)
        .when(calls.fuelTanks.insertRuleSet.enjinV1023.is, calls.fuelTanks.insertRuleSet.enjinV1023.decode)
        .when(calls.fuelTanks.insertRuleSet.enjinV1022.is, calls.fuelTanks.insertRuleSet.enjinV1022.decode)
        .when(calls.fuelTanks.insertRuleSet.enjinV1021.is, calls.fuelTanks.insertRuleSet.enjinV1021.decode)
        .when(calls.fuelTanks.insertRuleSet.enjinV120.is, calls.fuelTanks.insertRuleSet.enjinV120.decode)
        .when(calls.fuelTanks.insertRuleSet.enjinV110.is, calls.fuelTanks.insertRuleSet.enjinV110.decode)
        .when(calls.fuelTanks.insertRuleSet.enjinV101.is, calls.fuelTanks.insertRuleSet.enjinV101.decode)
        .when(calls.fuelTanks.insertRuleSet.enjinV100.is, calls.fuelTanks.insertRuleSet.enjinV100.decode)
        .when(calls.fuelTanks.insertRuleSet.v1050.is, calls.fuelTanks.insertRuleSet.v1050.decode)
        .when(calls.fuelTanks.insertRuleSet.v1032.is, calls.fuelTanks.insertRuleSet.v1032.decode)
        .when(calls.fuelTanks.insertRuleSet.v1031.is, calls.fuelTanks.insertRuleSet.v1031.decode)
        .when(calls.fuelTanks.insertRuleSet.v1030.is, calls.fuelTanks.insertRuleSet.v1030.decode)
        .when(calls.fuelTanks.insertRuleSet.v1026.is, calls.fuelTanks.insertRuleSet.v1026.decode)
        .when(calls.fuelTanks.insertRuleSet.v1023.is, calls.fuelTanks.insertRuleSet.v1023.decode)
        .when(calls.fuelTanks.insertRuleSet.v1022.is, calls.fuelTanks.insertRuleSet.v1022.decode)
        .when(calls.fuelTanks.insertRuleSet.v1021.is, calls.fuelTanks.insertRuleSet.v1021.decode)
        .when(calls.fuelTanks.insertRuleSet.v120.is, calls.fuelTanks.insertRuleSet.v120.decode)
        .when(calls.fuelTanks.insertRuleSet.v110.is, calls.fuelTanks.insertRuleSet.v110.decode)
        .when(calls.fuelTanks.insertRuleSet.v105.is, calls.fuelTanks.insertRuleSet.v105.decode)
        .when(calls.fuelTanks.insertRuleSet.v104.is, calls.fuelTanks.insertRuleSet.v104.decode)
        .when(calls.fuelTanks.insertRuleSet.v103.is, calls.fuelTanks.insertRuleSet.v103.decode)
        .when(calls.fuelTanks.insertRuleSet.v102.is, calls.fuelTanks.insertRuleSet.v102.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
