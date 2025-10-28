/**
 * Compatibility layer to transform new decoder output to match platform-decoder format
 */

function hexToNumberArray(hex: string): number[] {
    const cleanHex = hex.startsWith('0x') ? hex.slice(2) : hex
    const bytes: number[] = []
    for (let i = 0; i < cleanHex.length; i += 2) {
        bytes.push(parseInt(cleanHex.slice(i, i + 2), 16))
    }
    return bytes
}

function transformAddress(address: { __kind: string; value: string }): { [key: string]: number[] } {
    return {
        [address.__kind]: hexToNumberArray(address.value),
    }
}

function transformSignature(signature: { __kind: string; value: string }): { [key: string]: number[] } {
    return {
        [signature.__kind]: hexToNumberArray(signature.value),
    }
}

function parseEra(checkMortality: { __kind: string; value?: number }): {
    period: number
    phase: number
} | null {
    if (checkMortality.__kind === 'Immortal') {
        return null
    }

    // Mortal era format: MortalN where N is the encoded value
    const match = checkMortality.__kind.match(/^Mortal(\d+)$/)
    if (!match || checkMortality.value === undefined) {
        return null
    }

    const encoded = parseInt(match[1])
    const phase = checkMortality.value

    // Calculate period from encoded value
    // Period is 2^encoded
    const period = 1 << encoded

    return { period, phase }
}

function transformSignedExtensions(signedExtensions: {
    checkMortality?: { __kind: string; value?: number }
    checkNonce?: number
    chargeTransactionPayment?: string
    checkMetadataHash?: { mode: { __kind: string } }
}): {
    era: { period: number; phase: number } | null
    nonce: number
    tip: string
    metadata_hash: string
} {
    const era = signedExtensions.checkMortality ? parseEra(signedExtensions.checkMortality) : null

    return {
        era: era || { period: 0, phase: 0 },
        nonce: signedExtensions.checkNonce ?? 0,
        tip: signedExtensions.chargeTransactionPayment ?? '0',
        metadata_hash: signedExtensions.checkMetadataHash?.mode?.__kind ?? 'Disabled',
    }
}

function camelToSnake(str: string): string {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
}

function transformObjectKeys(obj: unknown): unknown {
    if (obj === null || obj === undefined) {
        return obj
    }

    if (Array.isArray(obj)) {
        return obj.map(transformObjectKeys)
    }

    if (typeof obj === 'object') {
        const transformed: Record<string, unknown> = {}

        for (const [key, value] of Object.entries(obj)) {
            // Skip __kind in nested objects, but preserve it for transformation
            if (key === '__kind') {
                continue
            }

            const snakeKey = camelToSnake(key)
            transformed[snakeKey] = transformObjectKeys(value)
        }

        return transformed
    }

    return obj
}

function transformCallStructure(call: { __kind: string; value?: unknown }): {
    [palletName: string]: { [callName: string]: unknown }
} {
    const palletName = call.__kind
    let callData = call.value

    if (callData && typeof callData === 'object' && '__kind' in callData) {
        const typedCallData = callData as { __kind: string; [key: string]: unknown }
        const callName = typedCallData.__kind

        // Extract all properties except __kind
        const { __kind, ...params } = typedCallData

        // Transform keys from camelCase to snake_case
        const transformedParams = transformObjectKeys(params)

        return {
            [palletName]: {
                [callName]: transformedParams,
            },
        }
    }

    return {
        [palletName]: callData ?? {},
    }
}

export function transformToCompatibleFormat(decoded: {
    version: number
    signature?: {
        address: { __kind: string; value: string }
        signature: { __kind: string; value: string }
        signedExtensions: {
            checkMortality?: { __kind: string; value?: number }
            checkNonce?: number
            chargeTransactionPayment?: string
            checkMetadataHash?: { mode: { __kind: string } }
        }
    }
    call: { __kind: string; value?: unknown }
    hash: string
    extrinsic_hash: string
}): unknown {
    const result: Record<string, unknown> = {
        hash: decoded.hash.startsWith('0x') ? decoded.hash.slice(2) : decoded.hash,
        version: decoded.version,
    }

    // Calculate extrinsic length (approximate based on hash)
    // Platform decoder calculates this from the raw extrinsic bytes
    // For now, we omit it or set a placeholder
    // result.extrinsic_length = 0 // TODO: Calculate from raw extrinsic if available

    if (decoded.signature) {
        result.signature = {
            address: transformAddress(decoded.signature.address),
            signature: transformSignature(decoded.signature.signature),
            signedExtensions: transformSignedExtensions(decoded.signature.signedExtensions),
        }
    }

    result.calls = transformCallStructure(decoded.call)
    result.extrinsic_hash = decoded.extrinsic_hash.startsWith('0x')
        ? decoded.extrinsic_hash.slice(2)
        : decoded.extrinsic_hash

    return result
}
