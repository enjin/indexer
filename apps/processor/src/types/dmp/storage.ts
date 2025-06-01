import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const downwardMessageQueues =  {
    /**
     *  The downward messages addressed for a certain para.
     */
    enjinV100: new StorageType('Dmp.DownwardMessageQueues', 'Default', [enjinV100.Id], sts.array(() => enjinV100.InboundDownwardMessage)) as DownwardMessageQueuesEnjinV100,
}

/**
 *  The downward messages addressed for a certain para.
 */
export interface DownwardMessageQueuesEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.InboundDownwardMessage[]
    get(block: Block, key: enjinV100.Id): Promise<(enjinV100.InboundDownwardMessage[] | undefined)>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.InboundDownwardMessage[] | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: (enjinV100.InboundDownwardMessage[] | undefined)][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: (enjinV100.InboundDownwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.InboundDownwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.InboundDownwardMessage[] | undefined)][]>
}

export const downwardMessageQueueHeads =  {
    /**
     *  A mapping that stores the downward message queue MQC head for each para.
     * 
     *  Each link in this chain has a form:
     *  `(prev_head, B, H(M))`, where
     *  - `prev_head`: is the previous head hash or zero if none.
     *  - `B`: is the relay-chain block number in which a message was appended.
     *  - `H(M)`: is the hash of the message being appended.
     */
    enjinV100: new StorageType('Dmp.DownwardMessageQueueHeads', 'Default', [enjinV100.Id], enjinV100.H256) as DownwardMessageQueueHeadsEnjinV100,
}

/**
 *  A mapping that stores the downward message queue MQC head for each para.
 * 
 *  Each link in this chain has a form:
 *  `(prev_head, B, H(M))`, where
 *  - `prev_head`: is the previous head hash or zero if none.
 *  - `B`: is the relay-chain block number in which a message was appended.
 *  - `H(M)`: is the hash of the message being appended.
 */
export interface DownwardMessageQueueHeadsEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.H256
    get(block: Block, key: enjinV100.Id): Promise<(enjinV100.H256 | undefined)>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.H256 | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: (enjinV100.H256 | undefined)][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: (enjinV100.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.H256 | undefined)][]>
}

export const deliveryFeeFactor =  {
    /**
     *  The number to multiply the base delivery fee by.
     */
    enjinV100: new StorageType('Dmp.DeliveryFeeFactor', 'Default', [enjinV100.Id], enjinV100.FixedU128) as DeliveryFeeFactorEnjinV100,
}

/**
 *  The number to multiply the base delivery fee by.
 */
export interface DeliveryFeeFactorEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.FixedU128
    get(block: Block, key: enjinV100.Id): Promise<(enjinV100.FixedU128 | undefined)>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.FixedU128 | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: (enjinV100.FixedU128 | undefined)][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: (enjinV100.FixedU128 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.FixedU128 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.FixedU128 | undefined)][]>
}
