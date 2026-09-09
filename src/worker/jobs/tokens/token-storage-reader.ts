import { ApiPromise } from '@polkadot/api'
import { Runtime } from '@subsquid/substrate-runtime'
import { decodeTokenStorageValue } from '~/pallet/multi-tokens/storage/token-values'
import { Token as StorageToken } from '~/pallet/multi-tokens/storage/types'

function hasToHex(value: unknown): value is { toHex(): string } {
    return typeof value === 'object' && value !== null && 'toHex' in value && typeof value.toHex === 'function'
}

export class FinalizedTokenStorageReader {
    private constructor(
        private readonly api: ApiPromise,
        private readonly blockHash: string,
        private readonly runtime: Runtime
    ) {}

    static async create(api: ApiPromise, blockHash?: string): Promise<FinalizedTokenStorageReader> {
        const finalizedHead = blockHash ?? (await api.rpc.chain.getFinalizedHead()).toString()
        const [version, metadata] = await Promise.all([
            api.rpc.state.getRuntimeVersion(finalizedHead),
            api.rpc.state.getMetadata(finalizedHead),
        ])
        const runtime = new Runtime(
            {
                specName: version.specName.toString(),
                specVersion: version.specVersion.toNumber(),
                implName: version.implName.toString(),
                implVersion: version.implVersion.toNumber(),
            },
            metadata.toHex()
        )

        return new FinalizedTokenStorageReader(api, finalizedHead.toString(), runtime)
    }

    get hash(): string {
        return this.blockHash
    }

    async token(collectionId: bigint, tokenId: bigint): Promise<StorageToken | undefined> {
        const key = this.runtime.encodeStorageKey('MultiTokens.Tokens', collectionId, tokenId)
        const value: unknown = await this.api.rpc.state.getStorage(key, this.blockHash)
        if (value === null || value === undefined) return undefined
        if (!hasToHex(value)) throw new Error('Unexpected MultiTokens.Tokens storage response')

        const encoded = value.toHex()

        return encoded === '0x' ? undefined : decodeTokenStorageValue(this.runtime, encoded)
    }
}
