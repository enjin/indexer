import { CallItem } from '~/contexts'
import { calls } from '~/type'
import { DispatchRuleDescriptor, FuelTankDescriptor, MultiAddress, RuleSetDescriptor } from '~/pallet/common/types'
import * as mappings from '~/pallet/index'

export type FuelTankCreateSource = {
    kind: 'create'
    owner?: MultiAddress
    descriptor: FuelTankDescriptor
}

export type FuelTankInsertRuleSetSource = {
    kind: 'insertRuleSet'
    tankId: MultiAddress
    ruleSetId: number
    rules: DispatchRuleDescriptor[]
    requireAccount: boolean
}

export type FuelTankCallSource = FuelTankCreateSource | FuelTankInsertRuleSetSource

type RuntimeCallNode = { __kind?: unknown; value?: unknown }

type InnerFuelTankCall = {
    __kind: string
    owner?: MultiAddress
    descriptor?: FuelTankDescriptor
    tankId?: MultiAddress
    ruleSetId?: number
    rules?: DispatchRuleDescriptor[]
    ruleSet?: RuleSetDescriptor
    call?: unknown
}

// Arguments through which wrapper calls carry their inner RuntimeCalls: Utility batches, as_derivative,
// dispatch_as, with_weight and if_else, MatrixUtility.batch, Proxy, Multisig and Sudo.
const NESTED_CALL_ARGS = ['call', 'calls', 'main', 'fallback']
const MAX_DEPTH = 8

function insertSource(
    tankId: MultiAddress | undefined,
    ruleSetId: number | undefined,
    rules: DispatchRuleDescriptor[] | undefined,
    ruleSet: RuleSetDescriptor | undefined
): FuelTankInsertRuleSetSource | undefined {
    const ruleList = ruleSet !== undefined ? ruleSet.rules : rules
    if (tankId === undefined || ruleSetId === undefined || ruleList === undefined) return undefined

    return {
        kind: 'insertRuleSet',
        tankId,
        ruleSetId,
        rules: ruleList,
        requireAccount: ruleSet !== undefined ? ruleSet.requireAccount : false,
    }
}

function fromInnerFuelTankCall(call: InnerFuelTankCall, out: FuelTankCallSource[], depth: number): void {
    switch (call.__kind) {
        case 'create_fuel_tank':
        case 'force_create_fuel_tank':
            if (call.descriptor !== undefined)
                out.push({ kind: 'create', owner: call.owner, descriptor: call.descriptor })
            return
        case 'insert_rule_set':
        case 'force_insert_rule_set': {
            const source = insertSource(call.tankId, call.ruleSetId, call.rules, call.ruleSet)
            if (source !== undefined) out.push(source)
            return
        }
        case 'dispatch':
        case 'dispatch_and_touch':
            walkRuntimeCall(call.call, out, depth + 1)
            return
        default:
            return
    }
}

/**
 * Walks an already-decoded RuntimeCall (`{ __kind: <pallet>, value: { __kind: <method>, ...args } }`) and collects
 * the fuel-tank calls that can emit FuelTankCreated/RuleSetInserted. Only wrapper arguments are followed, so a call
 * stored as data (for example inside a PermittedCalls rule) is never mistaken for a dispatched call.
 */
function walkRuntimeCall(node: unknown, out: FuelTankCallSource[], depth: number): void {
    if (depth > MAX_DEPTH || node === null || typeof node !== 'object') return
    const { __kind: pallet, value } = node as RuntimeCallNode
    if (typeof pallet !== 'string' || value === null || typeof value !== 'object') return

    const method = value as Record<string, unknown>
    if (pallet === 'FuelTanks') {
        fromInnerFuelTankCall(method as InnerFuelTankCall, out, depth)
        return
    }

    for (const arg of NESTED_CALL_ARGS) {
        const nested = method[arg]
        if (Array.isArray(nested)) {
            for (const inner of nested) walkRuntimeCall(inner, out, depth + 1)
        } else {
            walkRuntimeCall(nested, out, depth + 1)
        }
    }
}

/**
 * Returns, in call order, every fuel-tank create/insert-rule-set call reachable from the call that emitted an event.
 *
 * Subsquid already expands the wrappers it knows (Utility, Proxy, Multisig, Sudo) into `item.call`, but not
 * FuelTanks.dispatch/dispatch_and_touch or MatrixUtility.batch, so those are decoded here and their inner
 * RuntimeCalls walked. Any other call, or a version without a decoder, yields an empty list instead of throwing.
 */
export function fuelTankCallSources(call: CallItem): FuelTankCallSource[] {
    const out: FuelTankCallSource[] = []

    try {
        switch (call.name) {
            case calls.fuelTanks.createFuelTank.name:
            case calls.fuelTanks.forceCreateFuelTank.name: {
                const decoded = mappings.fuelTanks.utils.anyCreateFuelTank(call)
                out.push({
                    kind: 'create',
                    owner: 'owner' in decoded ? decoded.owner : undefined,
                    descriptor: decoded.descriptor,
                })
                break
            }
            case calls.fuelTanks.insertRuleSet.name:
            case calls.fuelTanks.forceInsertRuleSet.name: {
                const decoded = mappings.fuelTanks.calls.insertRuleSet(call)
                const source = insertSource(decoded.tankId, decoded.ruleSetId, decoded.rules, decoded.ruleSet)
                if (source !== undefined) out.push(source)
                break
            }
            case calls.fuelTanks.dispatch.name:
            case calls.fuelTanks.dispatchAndTouch.name:
                walkRuntimeCall(mappings.fuelTanks.utils.anyDispatch(call).call, out, 0)
                break
            case calls.matrixUtility.batch.name:
                for (const inner of mappings.matrixUtility.calls.batch(call).calls) walkRuntimeCall(inner, out, 0)
                break
            default:
                break
        }
    } catch {
        return []
    }

    return out
}

/** Whether a call-level tank id refers to the given account id (non-`Id` lookups cannot be resolved offline). */
export function multiAddressMatches(address: MultiAddress, accountId: string): boolean {
    return address.__kind !== 'Id' || address.value === accountId
}
