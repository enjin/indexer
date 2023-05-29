import { BlockHeader, DataHandlerContext, EvmBatchProcessor, FieldSelection, Log, Transaction } from '@subsquid/evm-processor'

type GetSelector<K extends keyof FieldSelection> = Exclude<FieldSelection[K], undefined>

type BaseFieldSelection = Omit<FieldSelection, 'log' | 'transaction'> & {
    log: { address: true } & Omit<GetSelector<'log'>, 'address'>
    transaction: { to: true } & Omit<GetSelector<'transaction'>, 'to'>
}

export type LogItem<Fields extends FieldSelection> = {
    kind: 'evmLog'
    address: string
    evmLog: Log<Fields>
    transaction?: Transaction<Fields>
}
export type TransactionItem<Fields extends FieldSelection> = {
    kind: 'transaction'
    address: string
    transaction: Transaction<Fields>
}

export type Item<Fields extends FieldSelection> = LogItem<Fields> | TransactionItem<Fields>

export interface OldBlockData<Fields extends FieldSelection> {
    header: BlockHeader<Fields>
    items: Item<Fields>[]
}

export type OldHandlerContext<Store, Fields extends FieldSelection> = Omit<DataHandlerContext<Store, Fields>, 'blocks'> & {
    blocks: OldBlockData<Fields>[]
}

export type BatchProcessorItem<T> = T extends EvmBatchProcessor<infer F> ? Item<F> : never
export type BatchProcessorLogItem<T> = Extract<BatchProcessorItem<T>, { kind: 'evmLog' }>
export type BatchProcessorTransactionItem<T> = Extract<BatchProcessorItem<T>, { kind: 'transaction' }>

export function transformContext<Store, Fields extends BaseFieldSelection>(
    ctx: DataHandlerContext<Store, Fields>
): OldHandlerContext<Store, Fields> {
    const { blocks, ...restCtx } = ctx

    const newCtx: OldHandlerContext<Store, Fields> = {
        ...restCtx,
        blocks: [],
    }

    for (const block of ctx.blocks) {
        const items: Item<Fields>[] = []

        for (const log of block.logs) {
            items.push({
                kind: 'evmLog',
                address: (log as any).address,
                evmLog: log,
                transaction: log.transaction,
            })
        }

        for (const transaction of block.transactions) {
            if ((transaction as any).to == null) continue

            items.push({
                kind: 'transaction',
                address: (transaction as any).to,
                transaction,
            })
        }

        items.sort((a, b) => {
            if (a.kind === 'evmLog' && b.kind === 'evmLog') {
                return a.evmLog.logIndex - b.evmLog.logIndex
            }
            if (a.kind === 'transaction' && b.kind === 'transaction') {
                return a.transaction.transactionIndex - b.transaction.transactionIndex
            }
            if (a.kind === 'evmLog' && b.kind === 'transaction') {
                return a.evmLog.transactionIndex - b.transaction.transactionIndex || -1 // transaction after logs
            }
            if (a.kind === 'transaction' && b.kind === 'evmLog') {
                return a.transaction.transactionIndex - b.evmLog.transactionIndex || 1
            }
            throw new Error('Unexpected case')
        })

        newCtx.blocks.push({
            header: block.header,
            items,
        })
    }

    return newCtx
}
