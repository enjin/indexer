import { getRuntimeCached, withRuntime } from '~/codec/metadata'
import { DEFAULT_NETWORK, resolveNetwork } from '~/codec/decoder/core'
import type { Network } from '~/codec/types'
import type { EncodeCallInput, EncodeRequest, EncodeResponse } from './types'
import { assertEncodeCallInput, assertEncodeCallInputs, assertMetadataArguments } from './input-validation'

function toKindFormat(input: EncodeCallInput): Record<string, unknown> {
    return {
        __kind: input.pallet,
        value: {
            ...(input.args ?? {}),
            __kind: input.name,
        },
    }
}

export async function encodeCall(input: EncodeCallInput, network: Network, specVersion?: number): Promise<string> {
    assertEncodeCallInput(input)
    return withRuntime(network, specVersion, (runtime) => encodeCallWithRuntime(input, runtime))
}

function encodeCallWithRuntime(input: EncodeCallInput, runtime: Awaited<ReturnType<typeof getRuntimeCached>>): string {
    const callData = toKindFormat(input)
    // Use jsonCodec to decode the call from JSON-compatible types (number/string) into
    // native SCALE types (bigint for U128/U64, etc.) before binary encoding.
    const callTi = runtime.description.call
    assertMetadataArguments(runtime.description.types, callTi, callData)
    const decoded = runtime.jsonCodec.decode(callTi, callData)
    const encoded = runtime.scaleCodec.encodeToBinary(callTi, decoded)
    return '0x' + Buffer.from(encoded).toString('hex')
}

export async function encodeCalls(
    inputs: EncodeCallInput[],
    network: Network,
    specVersion?: number
): Promise<string[]> {
    assertEncodeCallInputs(inputs)
    return withRuntime(network, specVersion, (runtime) => inputs.map((input) => encodeCallWithRuntime(input, runtime)))
}

export async function encode(requestData: EncodeRequest): Promise<EncodeResponse | EncodeResponse[]> {
    const { call, calls, network: networkInput, spec_version } = requestData

    const resolved = networkInput ? resolveNetwork(networkInput) : null
    if (networkInput && !resolved) {
        throw new Error(`Invalid network: ${networkInput}`)
    }
    const network = resolved ?? DEFAULT_NETWORK
    if (!call && !calls?.length) {
        throw new Error('Invalid request: no call or calls provided')
    }
    if (call) assertEncodeCallInput(call)
    if (calls) assertEncodeCallInputs(calls)
    return withRuntime(network, spec_version, (runtime) => {
        const specVersion = runtime.specVersion
        if (call) {
            const encoded = encodeCallWithRuntime(call, runtime)
            return { encoded, network, spec_version: specVersion }
        }
        const results = (calls ?? []).map((item) => encodeCallWithRuntime(item, runtime))
        return results.map((encoded) => ({ encoded, network, spec_version: specVersion }))
    })
}
