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

export class WorkerFactory {
    private static processors: Map<QueuesEnum, { processor: ProcessorDef; options?: WorkerOptions }> = new Map([
        [QueuesEnum.ACCOUNTS, { processor: new AccountsProcessor(), }],
        [QueuesEnum.BALANCES, { processor: new BalancesProcessor() }],
        [QueuesEnum.COLLECTIONS, { processor: new CollectionsProcessor() }],
        [QueuesEnum.LISTINGS, { processor: new ListingsProcessor() }],
        [QueuesEnum.METADATA, { processor: new MetadataProcessor(), options: { concurrency: 10 } }],
        [QueuesEnum.TOKENS, { processor: new TokensProcessor() }],
        [QueuesEnum.TRAITS, { processor: new TraitsProcessor() }],
        [QueuesEnum.VALIDATORS, { processor: new ValidatorsProcessor() }],
        [QueuesEnum.NOMINATION_POOLS, { processor: new NominationPoolsProcessor() }],
    ])

    static createWorker(queueType: QueuesEnum, options: WorkerOptions = {}): BaseWorker {
        const processor = this.processors.get(queueType)?.processor

        if (!processor) {
            throw new Error(`No processor found for queue type: ${queueType}`)
        }

        return new BaseWorker(queueType, processor, options)
    }

    static initializeWorkers(): void {
        this.processors.forEach((processor, queueType) => {
            this.createWorker(queueType, processor.options)
        })
    }
}
