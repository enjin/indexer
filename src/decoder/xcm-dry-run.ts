import type { ApiPromise } from '@polkadot/api'
import type { DryRunResponse, Network } from '~/decoder/types'

export const MAX_DRY_RUN_XCM_MESSAGES = 100

interface XcmCodec {
    toHex(): string
    toString(): string
    type?: string
}

interface VersionedLocation {
    toJSON(): unknown
}

export type ForwardedXcms = [VersionedLocation, XcmCodec[]][]

export interface XcmDryRunContext {
    network: Network
    getApi(network: Network): Promise<ApiPromise>
}

interface LocationJson {
    parents: number
    interior: string | { here?: null; x1?: { parachain?: number } | { parachain?: number }[] }
}

interface XcmFailure {
    error: XcmCodec
    index?: { toString(): string }
}

interface XcmOutcome {
    isComplete: boolean
    isIncomplete: boolean
    // V5 includes an instruction index; V4's Incomplete contains the error directly.
    asIncomplete: { error: XcmFailure | XcmCodec }
    asError: XcmFailure
}

interface XcmDryRunResult {
    isErr: boolean
    asErr: XcmCodec
    asOk: { executionResult: XcmOutcome; forwardedXcms?: ForwardedXcms }
}

type XcmOrigin = { V5: { parents: number; interior: 'Here' | { X1: [{ Parachain: string }] } } }

interface XcmRuntimeApi {
    dryRunXcm?(origin: XcmOrigin, message: string): Promise<XcmDryRunResult>
}

const PEER_NETWORK: Record<Network, Network> = {
    'enjin-matrixchain': 'enjin-relaychain',
    'enjin-relaychain': 'enjin-matrixchain',
    'canary-matrixchain': 'canary-relaychain',
    'canary-relaychain': 'canary-matrixchain',
}

function failure(name: string, message: string, code = name): DryRunResponse {
    return { success: false, error: { code, name, message } }
}

function destinationParachain(location: LocationJson): string | undefined {
    if (location.parents !== 0 || typeof location.interior === 'string') return

    const x1 = location.interior.x1
    const junction = Array.isArray(x1) ? (x1.length === 1 ? x1[0] : undefined) : x1
    return junction?.parachain?.toString()
}

function isParent(location: LocationJson): boolean {
    const interior = location.interior
    return location.parents === 1 && (interior === 'here' || (typeof interior === 'object' && 'here' in interior))
}

async function parachainId(api: ApiPromise): Promise<string | undefined> {
    const query = api.query as unknown as {
        parachainInfo?: { parachainId?: () => Promise<{ toString(): string }> }
    }
    return (await query.parachainInfo?.parachainId?.())?.toString()
}

function executionFailure(network: Network, outcome: XcmOutcome): DryRunResponse {
    const detail = outcome.isIncomplete ? outcome.asIncomplete.error : outcome.asError
    const error = 'error' in detail ? detail.error : detail
    const instruction = 'index' in detail && detail.index ? ` at instruction ${detail.index.toString()}` : ''
    const name = error.type ?? error.toString()

    return failure(
        `Xcm.${name}`,
        `XCM execution on ${network} failed${instruction}: ${error.toString()}.`,
        error.toHex()
    )
}

/**
 * Follow messages actually emitted by the source runtime, including wrapped and batched calls.
 * Each native dryRunXcm uses the receiving chain's current state; separate simulations do not
 * share storage changes. This is a preflight check, not a guarantee of later delivery.
 */
export async function dryRunForwardedXcms(
    api: ApiPromise,
    forwardedXcms: ForwardedXcms,
    context?: XcmDryRunContext
): Promise<DryRunResponse> {
    if (!forwardedXcms.some(([, messages]) => messages.length > 0)) return { success: true }
    if (!context) {
        return failure(
            'Xcm.DryRunUnavailable',
            'A source network and RPC resolver are required to dry-run forwarded XCMs.'
        )
    }

    const getApi = context.getApi
    let remaining = MAX_DRY_RUN_XCM_MESSAGES

    async function visit(sourceApi: ApiPromise, source: Network, forwarded: ForwardedXcms): Promise<DryRunResponse> {
        for (const [destination, messages] of forwarded) {
            if (messages.length === 0) continue
            if (messages.length > remaining) {
                return failure('Xcm.DryRunLimitExceeded', 'Too many forwarded XCM messages to fully dry-run the call.')
            }
            remaining -= messages.length

            const versioned = destination.toJSON() as { v3?: LocationJson; v4?: LocationJson; v5?: LocationJson }
            const location = versioned.v5 ?? versioned.v4 ?? versioned.v3
            const fromMatrix = source.endsWith('-matrixchain')
            const targetParachain = location ? destinationParachain(location) : undefined
            const supported = location && (fromMatrix ? isParent(location) : targetParachain !== undefined)
            if (!supported) {
                return failure(
                    'Xcm.UnsupportedDestination',
                    `Cannot dry-run an unsupported XCM destination from ${source}.`
                )
            }

            const network = PEER_NETWORK[source]
            const destinationApi = await getApi(network)
            const matrixId = await parachainId(fromMatrix ? sourceApi : destinationApi)
            if (!matrixId || (!fromMatrix && targetParachain !== matrixId)) {
                return failure('Xcm.UnsupportedDestination', `Cannot resolve the forwarded XCM route from ${source}.`)
            }

            const runtimeApi = (destinationApi.call as unknown as { dryRunApi?: XcmRuntimeApi }).dryRunApi
            if (!runtimeApi?.dryRunXcm) {
                return failure('Xcm.DryRunUnavailable', `dryRunApi.dryRunXcm is not available on ${network}.`)
            }
            const origin: XcmOrigin = {
                V5: fromMatrix
                    ? { parents: 0, interior: { X1: [{ Parachain: matrixId }] } }
                    : { parents: 1, interior: 'Here' },
            }

            for (const message of messages) {
                // Pass the runtime's SCALE bytes unchanged, preserving full-precision balances.
                const result = await runtimeApi.dryRunXcm(origin, message.toHex())
                if (result.isErr) {
                    const name = result.asErr.type ?? result.asErr.toString()
                    return failure(
                        `Xcm.${name}`,
                        `The XCM dry-run API on ${network} returned ${name}.`,
                        result.asErr.toHex()
                    )
                }
                if (!result.asOk.executionResult.isComplete) {
                    return executionFailure(network, result.asOk.executionResult)
                }

                const next = await visit(destinationApi, network, result.asOk.forwardedXcms ?? [])
                if (!next.success) return next
            }
        }
        return { success: true }
    }

    return visit(api, context.network, forwardedXcms)
}
