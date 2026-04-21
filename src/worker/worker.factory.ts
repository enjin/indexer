import { BaseWorker, WorkerOptions } from '~/worker/base-worker.class'
import { QueuesEnum } from '~/queue/constants'
import { ProcessorDef } from '~/worker/processors/processor.def'
import {
    AccountsProcessor,
    BalancesProcessor,
    CollectionsProcessor,
    ListingsProcessor,
    MetadataProcessor,
    TokensProcessor,
    TraitsProcessor,
    ValidatorsProcessor,
    NominationPoolsProcessor,
} from '~/worker/processors'

const processors: Map<QueuesEnum, { processor: ProcessorDef; options?: WorkerOptions }> = new Map([
    [QueuesEnum.ACCOUNTS, { processor: new AccountsProcessor() }],
    [QueuesEnum.BALANCES, { processor: new BalancesProcessor() }],
    [QueuesEnum.COLLECTIONS, { processor: new CollectionsProcessor() }],
    [QueuesEnum.LISTINGS, { processor: new ListingsProcessor() }],
    [QueuesEnum.METADATA, { processor: new MetadataProcessor() }],
    [QueuesEnum.TOKENS, { processor: new TokensProcessor() }],
    [QueuesEnum.TRAITS, { processor: new TraitsProcessor() }],
    [QueuesEnum.VALIDATORS, { processor: new ValidatorsProcessor() }],
    [QueuesEnum.NOMINATION_POOLS, { processor: new NominationPoolsProcessor() }],
])

export function createWorker(queueType: QueuesEnum, options: WorkerOptions = {}): BaseWorker {
    const processor = processors.get(queueType)?.processor

    if (!processor) {
        throw new Error(`No processor found for queue type: ${queueType}`)
    }

    return new BaseWorker(queueType, processor, options)
}

export function initializeWorkers(): void {
    // Stale active jobs from a previous (crashed) worker are handled by
    // BullMQ's built-in stalled-checker (see `maxStalledCount` / `stalledInterval`
    // in BaseWorker). We intentionally do NOT clean the `active` set here
    // because doing so can delete jobs (and their lock keys) that another
    // replica or a still-running sandboxed child is actively processing,
    // which surfaces as "could not renew lock for job X" /
    // "Missing lock for job X. moveToFinished" errors.
    //
    // `QueueUtils.requeueAllActiveJobs()` is still exported for manual /
    // administrative use (e.g. after a known single-replica crash).
    processors.forEach((processor, queueType) => {
        createWorker(queueType, processor.options)
    })
}
