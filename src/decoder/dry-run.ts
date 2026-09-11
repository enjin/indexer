import type { ApiPromise } from '@polkadot/api'
import type { DryRunBatchResponse, DryRunError, DryRunInput, DryRunResponse } from './types'

export const DRY_RUN_XCM_VERSION = 5
export const DRY_RUN_CONCURRENCY = 5
export const DRY_RUN_BILLED_DEPOSIT = 0n

interface CodecValue {
    toHex(): string
    toString(): string
    type?: string
}

type ModuleError = CodecValue

interface DispatchError extends CodecValue {
    isModule: boolean
    asModule: ModuleError
    type: string
    value?: unknown
}

interface DispatchFailure {
    error: DispatchError
}

interface ExecutionResult {
    isOk: boolean
    asErr: DispatchFailure
}

interface DryRunEffects {
    executionResult: ExecutionResult
}

interface DryRunResult {
    isErr: boolean
    asErr: CodecValue
    asOk: DryRunEffects
}

/**
 * `OriginCaller` variants the dry-run API accepts. `FuelTanks.FuelTank` mirrors
 * `PalletFuelTanksOrigin` as defined by the runtime (spec 1040):
 * `{ caller, tankId, providesDeposit, ruleSetId: Option<u32>, billedDeposit }`.
 */
export type DryRunOriginCaller =
    | { system: { Signed: string } }
    | {
          FuelTanks: {
              FuelTank: {
                  caller: string
                  tankId: string
                  providesDeposit: boolean
                  ruleSetId: number | null
                  billedDeposit: bigint
              }
          }
      }

interface DryRunRuntimeApi {
    dryRunCall(origin: DryRunOriginCaller, encodedData: string, xcmVersion: number): Promise<DryRunResult>
}

interface DryRunRegistry {
    findMetaError(moduleError: ModuleError): {
        section: string
        name: string
        docs: { join(separator: string): string }
    }
}

function describeDispatchError(registry: DryRunRegistry, dispatchError: DispatchError): DryRunError {
    if (dispatchError.isModule) {
        try {
            const metadataError = registry.findMetaError(dispatchError.asModule)

            return {
                code: dispatchError.asModule.toHex(),
                name: `${metadataError.section}.${metadataError.name}`,
                message: metadataError.docs.join(' ').trim() || 'The call returned a module error.',
            }
        } catch {
            return {
                code: dispatchError.asModule.toHex(),
                name: 'Module',
                message: 'The call returned an unknown module error.',
            }
        }
    }

    const nestedType = (dispatchError.value as { type?: string } | undefined)?.type
    const name = nestedType ? `${dispatchError.type}.${nestedType}` : dispatchError.type

    return {
        code: dispatchError.toHex(),
        name,
        message: `The call returned ${name}.`,
    }
}

export function formatDryRunResult(registry: DryRunRegistry, result: DryRunResult): DryRunResponse {
    if (result.isErr) {
        const name = result.asErr.type ?? result.asErr.toString()

        return {
            success: false,
            error: {
                code: result.asErr.toHex(),
                name,
                message: `The dry-run API returned ${name}.`,
            },
        }
    }

    const executionResult = result.asOk.executionResult
    if (executionResult.isOk) {
        return { success: true }
    }

    return {
        success: false,
        error: describeDispatchError(registry, executionResult.asErr.error),
    }
}

export function buildDryRunOrigin(request: DryRunInput): DryRunOriginCaller {
    const fuelTank = request.origin?.fuelTank
    if (!fuelTank) {
        return { system: { Signed: request.publicKey } }
    }

    return {
        FuelTanks: {
            FuelTank: {
                caller: request.publicKey,
                tankId: fuelTank.tankId,
                // The fuel-tank signed extension computes these during a real dispatch.
                // A simulation only needs an origin the runtime accepts, and the
                // dispatchable's own rule checks run regardless of the billed amount.
                providesDeposit: false,
                ruleSetId: fuelTank.ruleSetId ?? null,
                billedDeposit: DRY_RUN_BILLED_DEPOSIT,
            },
        },
    }
}

export async function dryRun(api: ApiPromise, request: DryRunInput): Promise<DryRunResponse> {
    const runtimeApi = (api.call as unknown as { dryRunApi?: DryRunRuntimeApi }).dryRunApi
    if (!runtimeApi) {
        throw new Error('dryRunApi.dryRunCall is not available on the configured chain')
    }

    const result = await runtimeApi.dryRunCall(buildDryRunOrigin(request), request.encodedData, DRY_RUN_XCM_VERSION)

    return formatDryRunResult(api.registry as unknown as DryRunRegistry, result)
}

export async function dryRunBatch(api: ApiPromise, inputs: DryRunInput[]): Promise<DryRunBatchResponse> {
    const results = new Array<DryRunResponse>(inputs.length)
    let nextIndex = 0

    async function worker(): Promise<void> {
        while (nextIndex < inputs.length) {
            const index = nextIndex++
            results[index] = await dryRun(api, inputs[index])
        }
    }

    const workerCount = Math.min(DRY_RUN_CONCURRENCY, inputs.length)
    await Promise.all(Array.from({ length: workerCount }, worker))

    return results
}
