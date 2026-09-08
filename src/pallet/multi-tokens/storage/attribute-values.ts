import assert from 'assert'
import { Codec, Type, TypeKind } from '@subsquid/scale-codec'
import { Runtime } from '@subsquid/substrate-runtime'
import { Block } from '~/contexts'
import { Attribute } from '~/pallet/multi-tokens/storage/types'

type AttributeStorage<K extends unknown[]> = {
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<K[]>
}

const legacyCodecs = new WeakMap<Runtime, Map<string, { codec: Codec; type: number }>>()

function normalizedAttribute(value: unknown, isFrozen: boolean): Attribute {
    assert(value && typeof value === 'object', 'Attribute storage value must be an object')
    assert('value' in value && typeof value.value === 'string', 'Attribute storage value must contain bytes')
    assert('deposit' in value && typeof value.deposit === 'bigint', 'Attribute storage value must contain a deposit')

    const depositor = 'depositor' in value ? value.depositor : undefined
    assert(depositor === undefined || typeof depositor === 'string', 'Attribute depositor must be an account ID')

    return {
        value: value.value,
        deposit: value.deposit,
        depositor,
        isFrozen,
    }
}

function storageValueType(runtime: Runtime, storageName: string): number {
    const item = runtime.description.storage.MultiTokens.items[storageName]
    assert(item, `MultiTokens.${storageName} storage metadata not found`)
    return item.value
}

function legacyAttributeCodec(runtime: Runtime, storageName: string): { codec: Codec; type: number } {
    let codecs = legacyCodecs.get(runtime)
    if (!codecs) {
        codecs = new Map()
        legacyCodecs.set(runtime, codecs)
    }

    const cached = codecs.get(storageName)
    if (cached) return cached

    const type = storageValueType(runtime, storageName)
    const definition = runtime.description.types[type]

    assert(definition.kind === TypeKind.Composite, `MultiTokens.${storageName} is not an attribute composite`)
    assert(
        definition.fields.at(-1)?.name === 'frozen',
        `MultiTokens.${storageName} does not have the expected trailing frozen field`
    )

    const types = runtime.description.types.slice() as Type[]
    types[type] = {
        ...definition,
        fields: definition.fields.slice(0, -1),
    }

    const codec = { codec: new Codec(types), type }
    codecs.set(storageName, codec)
    return codec
}

export function decodeAttributeStorageValue(runtime: Runtime, storageName: string, value: string): Attribute {
    let currentError: unknown
    try {
        assert(value.endsWith('00') || value.endsWith('01'), 'Attribute frozen flag is not a valid SCALE boolean')
        const current = runtime.decodeStorageValue(`MultiTokens.${storageName}`, value)
        assert(current && typeof current === 'object' && 'frozen' in current)
        assert(typeof current.frozen === 'boolean')
        return normalizedAttribute(current, current.frozen)
    } catch (error) {
        currentError = error
    }

    try {
        const { codec, type } = legacyAttributeCodec(runtime, storageName)
        return normalizedAttribute(codec.decodeBinary(type, value), false)
    } catch (legacyError) {
        const error = new Error(
            `Unable to decode MultiTokens.${storageName} as either current or pre-v6 attribute storage`
        ) as Error & { cause?: unknown }
        error.cause = { currentError, legacyError }
        throw error
    }
}

async function queryRawValues(block: Block, storageName: string, keys: unknown[][]): Promise<(string | undefined)[]> {
    if (keys.length === 0) return []

    const encodedKeys = keys.map((key) => block._runtime.encodeStorageKey(`MultiTokens.${storageName}`, ...key))
    const result = await block._runtime.rpc.call('state_queryStorageAt', [encodedKeys, block.hash])

    assert(Array.isArray(result) && result.length === 1, `Unexpected MultiTokens.${storageName} storage response`)
    const changes = new Map<string, string | null>(result[0].changes)

    return encodedKeys.map((key) => changes.get(key) ?? undefined)
}

export async function getMixedAttribute(
    block: Block,
    storageName: string,
    key: unknown[]
): Promise<Attribute | undefined> {
    const encodedKey = block._runtime.encodeStorageKey(`MultiTokens.${storageName}`, ...key)
    const value = await block._runtime.rpc.call('state_getStorageAt', [encodedKey, block.hash])

    return typeof value === 'string' ? decodeAttributeStorageValue(block._runtime, storageName, value) : undefined
}

export async function* getMixedAttributePairs<K extends unknown[]>(
    block: Block,
    storageName: string,
    storage: AttributeStorage<K>,
    batchSize: number
): AsyncIterable<[K, Attribute | undefined][]> {
    for await (const keys of storage.getKeysPaged(batchSize, block)) {
        const values = await queryRawValues(block, storageName, keys)
        yield keys.map((key, index) => {
            const value = values[index]
            return [
                key,
                value === undefined ? undefined : decodeAttributeStorageValue(block._runtime, storageName, value),
            ]
        })
    }
}

export function normalizeLegacyAttribute(value: Omit<Attribute, 'isFrozen'> | undefined): Attribute | undefined {
    return value ? { ...value, isFrozen: false } : undefined
}

export async function* normalizeLegacyAttributePairs<K>(
    pairs: AsyncIterable<[K, Omit<Attribute, 'isFrozen'> | undefined][]>
): AsyncIterable<[K, Attribute | undefined][]> {
    for await (const page of pairs) {
        yield page.map(([key, value]) => [key, normalizeLegacyAttribute(value)])
    }
}
