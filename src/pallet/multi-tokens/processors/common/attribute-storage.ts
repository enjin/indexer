import { Block } from '~/contexts'
import { multiTokens } from '~/pallet'
import { Attribute as StorageAttribute } from '~/pallet/multi-tokens/storage/types'
import { multiTokens as multiTokenStorageTypes } from '~/type/storage'

type AttributeTarget =
    | { kind: 'attribute'; collectionId: bigint; tokenId?: bigint; key: string }
    | { kind: 'tokenGroupAttribute'; tokenGroupId: bigint; key: string }

const blockReads = new WeakMap<Block, Map<string, Promise<StorageAttribute | undefined>>>()

export function readAttributeStorage(block: Block, target: AttributeTarget): Promise<StorageAttribute | undefined> {
    const supportsFrozenStorage =
        target.kind === 'attribute'
            ? multiTokenStorageTypes.attributes.matrixV1040.is(block)
            : multiTokenStorageTypes.tokenGroupAttributes.matrixV1040.is(block)

    if (!supportsFrozenStorage) return Promise.resolve(undefined)

    let reads = blockReads.get(block)
    if (!reads) {
        reads = new Map()
        blockReads.set(block, reads)
    }

    const id =
        target.kind === 'attribute'
            ? `${target.collectionId}-${target.tokenId === undefined ? 'collection' : target.tokenId}-${target.key}`
            : `group-${target.tokenGroupId}-${target.key}`
    let read = reads.get(id)

    if (!read) {
        read =
            target.kind === 'attribute'
                ? multiTokens.storage.attributes(block, {
                      collectionId: target.collectionId,
                      tokenId: target.tokenId,
                      key: target.key,
                  })
                : multiTokens.storage.tokenGroupAttributes(block, {
                      tokenGroupId: target.tokenGroupId,
                      key: target.key,
                  })
        reads.set(id, read)
    }

    return read
}
