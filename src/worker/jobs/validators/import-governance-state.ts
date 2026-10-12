import { fork } from 'node:child_process'
import { join } from 'node:path'
import { randomUUID } from 'node:crypto'
import { Job } from 'bullmq'
import config from '~/util/config'
import Rpc from '~/util/rpc'

export type ImportGovernanceStateData = {
    chainName: string
    genesisHash: string
}

export function validateImportGovernanceStateData(
    data: ImportGovernanceStateData,
    target: { chainName: string; genesisHash: string }
): void {
    if (
        data.chainName !== target.chainName ||
        typeof data.genesisHash !== 'string' ||
        !/^0x[0-9a-f]{64}$/i.test(data.genesisHash) ||
        data.genesisHash.toLowerCase() !== target.genesisHash.toLowerCase()
    ) {
        throw new Error('Governance state import target does not match this worker chain')
    }
}

/** Read one finalized RPC snapshot in a child process; Subsquid processor.run() exits its process. */
export async function importGovernanceState(job: Job<ImportGovernanceStateData>): Promise<void> {
    validateImportGovernanceStateData(job.data, {
        chainName: config.chainName,
        genesisHash: config.genesisHash,
    })

    const { api } = await Rpc.getInstance()
    if (api.genesisHash.toString().toLowerCase() !== job.data.genesisHash.toLowerCase()) {
        throw new Error('Governance state import RPC genesis hash does not match the requested chain')
    }
    const finalizedHash = await api.rpc.chain.getFinalizedHead()
    const blockHash = finalizedHash.toString()
    const blockNumber = (await api.rpc.chain.getHeader(finalizedHash)).number.toNumber()
    const snapshotId = randomUUID().replace(/-/g, '').slice(0, 12)

    await job.log(`Importing current governance state for ${job.data.chainName} at finalized block ${blockNumber}`)
    const isTypescript = __filename.endsWith('.ts')
    const runnerPath = join(__dirname, `governance-snapshot.${isTypescript ? 'ts' : 'js'}`)
    const execArgv = isTypescript ? ['-r', 'ts-node/register', '-r', 'tsconfig-paths/register'] : []

    await new Promise<void>((resolve, reject) => {
        const child = fork(runnerPath, [String(blockNumber), blockHash, job.data.chainName, snapshotId], {
            execArgv,
            stdio: ['ignore', 'inherit', 'pipe', 'ipc'],
        })
        let stderr = ''
        child.stderr?.on('data', (chunk: Buffer) => {
            process.stderr.write(chunk)
            stderr = (stderr + chunk.toString()).slice(-8192)
        })
        child.once('error', reject)
        child.once('close', (code, signal) => {
            if (code === 0) resolve()
            else {
                const detail = stderr.trim()
                const reason = `Governance state import exited with ${signal ?? `code ${code}`}`
                reject(new Error(detail ? `${reason}\n${detail}` : reason))
            }
        })
    })

    await job.updateProgress(100)
    await job.log(`Governance state import complete at finalized block ${blockNumber} (${blockHash})`)
}
