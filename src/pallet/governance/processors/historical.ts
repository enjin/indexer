import { Runtime } from '@subsquid/substrate-runtime'
import { Block } from '~/contexts'
import { getRuntimeCached } from '~/decoder/metadata'
import { NETWORKS, Network } from '~/decoder/types'
import { storage } from '~/type'
import config from '~/util/config'
import type { ReferendumInfo } from './event'

type ReferendumReader = {
    is(block: Block): boolean
    get(block: Block, index: number): Promise<ReferendumInfo | undefined>
}

function terminalBlock(info: unknown): number | undefined {
    if (!info || typeof info !== 'object' || !('__kind' in info) || info.__kind === 'Ongoing') return undefined
    const value = 'value' in info ? info.value : undefined
    const height = Array.isArray(value) ? value[0] : value
    return typeof height === 'number' && Number.isSafeInteger(height) && height > 0 ? height : undefined
}

function specVersion(value: unknown): number {
    const parsed =
        typeof value === 'string' && /^0x[0-9a-f]+$/i.test(value) ? Number.parseInt(value.slice(2), 16) : value
    if (typeof parsed !== 'number' || !Number.isSafeInteger(parsed) || parsed < 0) {
        throw new Error('Historical governance RPC returned an invalid runtime version')
    }
    return parsed
}

/** Resolve the last persisted ongoing state before a referendum became terminal. */
export class HistoricalGovernanceStorage {
    private readonly blocks = new Map<number, Promise<Block>>()
    private readonly runtimes = new Map<number, Runtime>()

    constructor(
        private readonly snapshotBlock: Block,
        private readonly network: Network = config.chainName as Network
    ) {}

    async ongoingBeforeTerminal(
        pallet: 'Referenda' | 'FellowshipReferenda',
        referendumIndex: number,
        currentInfo: unknown
    ): Promise<ReferendumInfo | undefined> {
        const finalizedAt = terminalBlock(currentInfo)
        if (finalizedAt === undefined || finalizedAt > this.snapshotBlock.height) return undefined

        const block = await this.blockAt(finalizedAt - 1)
        const variants =
            pallet === 'Referenda' ? storage.referenda.referendumInfoFor : storage.fellowshipReferenda.referendumInfoFor
        const reader = Object.values(variants).find((variant) => (variant as ReferendumReader).is(block)) as
            ReferendumReader | undefined
        if (!reader)
            throw new Error(`Unsupported historical ${pallet}.ReferendumInfoFor runtime at block ${block.height}`)

        try {
            const info = await reader.get(block, referendumIndex)
            return info?.__kind === 'Ongoing' ? info : undefined
        } catch {
            throw new Error(
                `Cannot read ${pallet}:${referendumIndex} at historical block ${block.height}; ` +
                    'the governance import requires an archival CHAIN_ENDPOINT'
            )
        }
    }

    private blockAt(height: number): Promise<Block> {
        let pending = this.blocks.get(height)
        if (!pending) {
            pending = this.loadBlockAt(height)
            this.blocks.set(height, pending)
        }
        return pending
    }

    private async loadBlockAt(height: number): Promise<Block> {
        const rpc = this.snapshotBlock._runtime.rpc
        let hash: unknown
        let version: unknown
        try {
            hash = await rpc.call('chain_getBlockHash', [height])
            if (typeof hash !== 'string' || !/^0x[0-9a-f]{64}$/i.test(hash)) {
                throw new Error('Historical block hash is unavailable')
            }
            version = await rpc.call('state_getRuntimeVersion', [hash])
        } catch {
            throw new Error(
                `Cannot read governance history at block ${height}; ` + 'the import requires an archival CHAIN_ENDPOINT'
            )
        }

        if (!version || typeof version !== 'object' || !('specVersion' in version)) {
            throw new Error(`Historical governance runtime version is unavailable at block ${height}`)
        }
        const number = specVersion(version.specVersion)
        let runtime = this.runtimes.get(number)
        if (!runtime) {
            if (!NETWORKS.some((network) => network === this.network)) {
                throw new Error(`Unsupported governance metadata network: ${this.network}`)
            }
            let metadata: ConstructorParameters<typeof Runtime>[1]
            try {
                metadata = (await getRuntimeCached(this.network, number)).metadata
            } catch (error) {
                if (!(error instanceof Error) || !error.message.startsWith('No metadata found for network ')) {
                    throw error
                }
                const archivedMetadata = await rpc.call('state_getMetadata', [hash])
                if (typeof archivedMetadata !== 'string' || !/^0x6d657461[0-9a-f]+$/i.test(archivedMetadata)) {
                    throw new Error(`Historical governance metadata is unavailable at block ${height}`)
                }
                metadata = archivedMetadata
            }
            runtime = new Runtime(
                {
                    specName: this.network,
                    specVersion: number,
                    implName: this.network,
                    implVersion: number,
                },
                metadata,
                undefined,
                rpc
            )
            this.runtimes.set(number, runtime)
        }
        return { ...this.snapshotBlock, hash, height, _runtime: runtime }
    }
}
