import { fork } from 'node:child_process'
import { join } from 'node:path'
import { Job } from 'bullmq'
import config from '~/util/config'
import Rpc from '~/util/rpc'

export type BackfillGovernanceData = {
    chainName: string
    genesisHash: string
    fromBlock: number
    toBlock: number
}

export function validateBackfillGovernanceData(
    data: BackfillGovernanceData,
    target: { chainName: string; genesisHash: string }
): void {
    if (
        !Number.isSafeInteger(data.fromBlock) ||
        !Number.isSafeInteger(data.toBlock) ||
        data.fromBlock < 0 ||
        data.fromBlock > data.toBlock
    ) {
        throw new Error('Governance backfill requires a valid inclusive fromBlock/toBlock range')
    }
    if (
        data.chainName !== target.chainName ||
        typeof data.genesisHash !== 'string' ||
        !/^0x[0-9a-f]{64}$/i.test(data.genesisHash) ||
        data.genesisHash.toLowerCase() !== target.genesisHash.toLowerCase()
    ) {
        throw new Error('Governance backfill target does not match this worker chain')
    }
}

/** Run the finite Subsquid replay in a child process; processor.run() exits its own process. */
export async function backfillGovernance(job: Job<BackfillGovernanceData>): Promise<void> {
    validateBackfillGovernanceData(job.data, {
        chainName: config.chainName,
        genesisHash: config.genesisHash,
    })

    const { api } = await Rpc.getInstance()
    const chainGenesisHash = api.genesisHash.toString()
    if (chainGenesisHash.toLowerCase() !== job.data.genesisHash.toLowerCase()) {
        throw new Error('Governance backfill RPC genesis hash does not match the requested chain')
    }
    const finalizedHash = await api.rpc.chain.getFinalizedHead()
    const finalizedHeight = (await api.rpc.chain.getHeader(finalizedHash)).number.toNumber()
    if (job.data.toBlock > finalizedHeight) {
        throw new Error(`Governance backfill end ${job.data.toBlock} exceeds finalized block ${finalizedHeight}`)
    }

    const fromHash = await api.rpc.chain.getBlockHash(job.data.fromBlock)
    try {
        await api.rpc.state.getRuntimeVersion(fromHash)
        const historicalApi = await api.at(fromHash)
        await historicalApi.query.system.events()
    } catch {
        throw new Error(
            `Governance backfill RPC cannot read historical state at block ${job.data.fromBlock}; use an archival RPC endpoint`
        )
    }

    await job.log(`Backfilling ${job.data.chainName} governance blocks ${job.data.fromBlock}–${job.data.toBlock}`)
    const isTypescript = __filename.endsWith('.ts')
    const runnerPath = join(__dirname, `governance-replay.${isTypescript ? 'ts' : 'js'}`)
    const execArgv = isTypescript ? ['-r', 'ts-node/register', '-r', 'tsconfig-paths/register'] : []

    await new Promise<void>((resolve, reject) => {
        const child = fork(runnerPath, [String(job.data.fromBlock), String(job.data.toBlock), job.data.chainName], {
            execArgv,
            stdio: ['ignore', 'inherit', 'inherit', 'ipc'],
        })
        child.once('error', reject)
        child.once('exit', (code, signal) => {
            if (code === 0) resolve()
            else reject(new Error(`Governance replay exited with ${signal ?? `code ${code}`}`))
        })
    })

    await job.updateProgress(100)
    await job.log(`Governance backfill complete through block ${job.data.toBlock}`)
}
