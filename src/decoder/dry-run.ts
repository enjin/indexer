import type { ApiPromise } from '@polkadot/api'
import type { DryRunError, DryRunRequestBody, DryRunResponse } from './types'

export const DRY_RUN_XCM_VERSION = 5

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

interface DryRunRuntimeApi {
    dryRunCall(origin: { system: { Signed: string } }, encodedData: string, xcmVersion: number): Promise<DryRunResult>
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

export async function dryRun(api: ApiPromise, request: DryRunRequestBody): Promise<DryRunResponse> {
    const runtimeApi = (api.call as unknown as { dryRunApi?: DryRunRuntimeApi }).dryRunApi
    if (!runtimeApi) {
        throw new Error('dryRunApi.dryRunCall is not available on the configured chain')
    }

    const result = await runtimeApi.dryRunCall(
        { system: { Signed: request.publicKey } },
        request.encodedData,
        DRY_RUN_XCM_VERSION
    )

    return formatDryRunResult(api.registry as unknown as DryRunRegistry, result)
}
