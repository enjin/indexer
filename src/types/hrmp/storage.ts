import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const hrmpOpenChannelRequests =  {
    /**
     *  The set of pending HRMP open channel requests.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    enjinV100: new StorageType('Hrmp.HrmpOpenChannelRequests', 'Optional', [enjinV100.HrmpChannelId], enjinV100.HrmpOpenChannelRequest) as HrmpOpenChannelRequestsEnjinV100,
}

/**
 *  The set of pending HRMP open channel requests.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpOpenChannelRequestsEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.HrmpChannelId): Promise<(enjinV100.HrmpOpenChannelRequest | undefined)>
    getMany(block: Block, keys: enjinV100.HrmpChannelId[]): Promise<(enjinV100.HrmpOpenChannelRequest | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.HrmpChannelId[]>
    getKeys(block: Block, key: enjinV100.HrmpChannelId): Promise<enjinV100.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.HrmpChannelId): AsyncIterable<enjinV100.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: enjinV100.HrmpChannelId, v: (enjinV100.HrmpOpenChannelRequest | undefined)][]>
    getPairs(block: Block, key: enjinV100.HrmpChannelId): Promise<[k: enjinV100.HrmpChannelId, v: (enjinV100.HrmpOpenChannelRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.HrmpChannelId, v: (enjinV100.HrmpOpenChannelRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.HrmpChannelId): AsyncIterable<[k: enjinV100.HrmpChannelId, v: (enjinV100.HrmpOpenChannelRequest | undefined)][]>
}

export const hrmpOpenChannelRequestsList =  {
    enjinV100: new StorageType('Hrmp.HrmpOpenChannelRequestsList', 'Default', [], sts.array(() => enjinV100.HrmpChannelId)) as HrmpOpenChannelRequestsListEnjinV100,
}

export interface HrmpOpenChannelRequestsListEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.HrmpChannelId[]
    get(block: Block): Promise<(enjinV100.HrmpChannelId[] | undefined)>
}

export const hrmpOpenChannelRequestCount =  {
    /**
     *  This mapping tracks how many open channel requests are initiated by a given sender para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has
     *  `(X, _)` as the number of `HrmpOpenChannelRequestCount` for `X`.
     */
    enjinV100: new StorageType('Hrmp.HrmpOpenChannelRequestCount', 'Default', [enjinV100.Id], sts.number()) as HrmpOpenChannelRequestCountEnjinV100,
}

/**
 *  This mapping tracks how many open channel requests are initiated by a given sender para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has
 *  `(X, _)` as the number of `HrmpOpenChannelRequestCount` for `X`.
 */
export interface HrmpOpenChannelRequestCountEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: enjinV100.Id): Promise<(number | undefined)>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: (number | undefined)][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<[k: enjinV100.Id, v: (number | undefined)][]>
}

export const hrmpAcceptedChannelRequestCount =  {
    /**
     *  This mapping tracks how many open channel requests were accepted by a given recipient para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
     *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
     */
    enjinV100: new StorageType('Hrmp.HrmpAcceptedChannelRequestCount', 'Default', [enjinV100.Id], sts.number()) as HrmpAcceptedChannelRequestCountEnjinV100,
}

/**
 *  This mapping tracks how many open channel requests were accepted by a given recipient para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
 *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
 */
export interface HrmpAcceptedChannelRequestCountEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: enjinV100.Id): Promise<(number | undefined)>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: (number | undefined)][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<[k: enjinV100.Id, v: (number | undefined)][]>
}

export const hrmpCloseChannelRequests =  {
    /**
     *  A set of pending HRMP close channel requests that are going to be closed during the session
     *  change. Used for checking if a given channel is registered for closure.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    enjinV100: new StorageType('Hrmp.HrmpCloseChannelRequests', 'Optional', [enjinV100.HrmpChannelId], sts.unit()) as HrmpCloseChannelRequestsEnjinV100,
}

/**
 *  A set of pending HRMP close channel requests that are going to be closed during the session
 *  change. Used for checking if a given channel is registered for closure.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpCloseChannelRequestsEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.HrmpChannelId): Promise<(null | undefined)>
    getMany(block: Block, keys: enjinV100.HrmpChannelId[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.HrmpChannelId[]>
    getKeys(block: Block, key: enjinV100.HrmpChannelId): Promise<enjinV100.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.HrmpChannelId): AsyncIterable<enjinV100.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: enjinV100.HrmpChannelId, v: (null | undefined)][]>
    getPairs(block: Block, key: enjinV100.HrmpChannelId): Promise<[k: enjinV100.HrmpChannelId, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.HrmpChannelId, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.HrmpChannelId): AsyncIterable<[k: enjinV100.HrmpChannelId, v: (null | undefined)][]>
}

export const hrmpCloseChannelRequestsList =  {
    enjinV100: new StorageType('Hrmp.HrmpCloseChannelRequestsList', 'Default', [], sts.array(() => enjinV100.HrmpChannelId)) as HrmpCloseChannelRequestsListEnjinV100,
}

export interface HrmpCloseChannelRequestsListEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.HrmpChannelId[]
    get(block: Block): Promise<(enjinV100.HrmpChannelId[] | undefined)>
}

export const hrmpWatermarks =  {
    /**
     *  The HRMP watermark associated with each para.
     *  Invariant:
     *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
     */
    enjinV100: new StorageType('Hrmp.HrmpWatermarks', 'Optional', [enjinV100.Id], sts.number()) as HrmpWatermarksEnjinV100,
}

/**
 *  The HRMP watermark associated with each para.
 *  Invariant:
 *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpWatermarksEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<(number | undefined)>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: (number | undefined)][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<[k: enjinV100.Id, v: (number | undefined)][]>
}

export const hrmpChannels =  {
    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    enjinV100: new StorageType('Hrmp.HrmpChannels', 'Optional', [enjinV100.HrmpChannelId], enjinV100.HrmpChannel) as HrmpChannelsEnjinV100,
}

/**
 *  HRMP channel data associated with each para.
 *  Invariant:
 *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpChannelsEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.HrmpChannelId): Promise<(enjinV100.HrmpChannel | undefined)>
    getMany(block: Block, keys: enjinV100.HrmpChannelId[]): Promise<(enjinV100.HrmpChannel | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.HrmpChannelId[]>
    getKeys(block: Block, key: enjinV100.HrmpChannelId): Promise<enjinV100.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.HrmpChannelId): AsyncIterable<enjinV100.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: enjinV100.HrmpChannelId, v: (enjinV100.HrmpChannel | undefined)][]>
    getPairs(block: Block, key: enjinV100.HrmpChannelId): Promise<[k: enjinV100.HrmpChannelId, v: (enjinV100.HrmpChannel | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.HrmpChannelId, v: (enjinV100.HrmpChannel | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.HrmpChannelId): AsyncIterable<[k: enjinV100.HrmpChannelId, v: (enjinV100.HrmpChannel | undefined)][]>
}

export const hrmpIngressChannelsIndex =  {
    /**
     *  Ingress/egress indexes allow to find all the senders and receivers given the opposite side.
     *  I.e.
     * 
     *  (a) ingress index allows to find all the senders for a given recipient.
     *  (b) egress index allows to find all the recipients for a given sender.
     * 
     *  Invariants:
     *  - for each ingress index entry for `P` each item `I` in the index should present in
     *    `HrmpChannels` as `(I, P)`.
     *  - for each egress index entry for `P` each item `E` in the index should present in
     *    `HrmpChannels` as `(P, E)`.
     *  - there should be no other dangling channels in `HrmpChannels`.
     *  - the vectors are sorted.
     */
    enjinV100: new StorageType('Hrmp.HrmpIngressChannelsIndex', 'Default', [enjinV100.Id], sts.array(() => enjinV100.Id)) as HrmpIngressChannelsIndexEnjinV100,
}

/**
 *  Ingress/egress indexes allow to find all the senders and receivers given the opposite side.
 *  I.e.
 * 
 *  (a) ingress index allows to find all the senders for a given recipient.
 *  (b) egress index allows to find all the recipients for a given sender.
 * 
 *  Invariants:
 *  - for each ingress index entry for `P` each item `I` in the index should present in
 *    `HrmpChannels` as `(I, P)`.
 *  - for each egress index entry for `P` each item `E` in the index should present in
 *    `HrmpChannels` as `(P, E)`.
 *  - there should be no other dangling channels in `HrmpChannels`.
 *  - the vectors are sorted.
 */
export interface HrmpIngressChannelsIndexEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Id[]
    get(block: Block, key: enjinV100.Id): Promise<(enjinV100.Id[] | undefined)>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.Id[] | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: (enjinV100.Id[] | undefined)][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: (enjinV100.Id[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.Id[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.Id[] | undefined)][]>
}

export const hrmpEgressChannelsIndex =  {
    enjinV100: new StorageType('Hrmp.HrmpEgressChannelsIndex', 'Default', [enjinV100.Id], sts.array(() => enjinV100.Id)) as HrmpEgressChannelsIndexEnjinV100,
}

export interface HrmpEgressChannelsIndexEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Id[]
    get(block: Block, key: enjinV100.Id): Promise<(enjinV100.Id[] | undefined)>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.Id[] | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: (enjinV100.Id[] | undefined)][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: (enjinV100.Id[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.Id[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.Id[] | undefined)][]>
}

export const hrmpChannelContents =  {
    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    enjinV100: new StorageType('Hrmp.HrmpChannelContents', 'Default', [enjinV100.HrmpChannelId], sts.array(() => enjinV100.InboundHrmpMessage)) as HrmpChannelContentsEnjinV100,
}

/**
 *  Storage for the messages for each channel.
 *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
 */
export interface HrmpChannelContentsEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.InboundHrmpMessage[]
    get(block: Block, key: enjinV100.HrmpChannelId): Promise<(enjinV100.InboundHrmpMessage[] | undefined)>
    getMany(block: Block, keys: enjinV100.HrmpChannelId[]): Promise<(enjinV100.InboundHrmpMessage[] | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.HrmpChannelId[]>
    getKeys(block: Block, key: enjinV100.HrmpChannelId): Promise<enjinV100.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.HrmpChannelId[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.HrmpChannelId): AsyncIterable<enjinV100.HrmpChannelId[]>
    getPairs(block: Block): Promise<[k: enjinV100.HrmpChannelId, v: (enjinV100.InboundHrmpMessage[] | undefined)][]>
    getPairs(block: Block, key: enjinV100.HrmpChannelId): Promise<[k: enjinV100.HrmpChannelId, v: (enjinV100.InboundHrmpMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.HrmpChannelId, v: (enjinV100.InboundHrmpMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.HrmpChannelId): AsyncIterable<[k: enjinV100.HrmpChannelId, v: (enjinV100.InboundHrmpMessage[] | undefined)][]>
}

export const hrmpChannelDigests =  {
    /**
     *  Maintains a mapping that can be used to answer the question: What paras sent a message at
     *  the given block number for a given receiver. Invariants:
     *  - The inner `Vec<ParaId>` is never empty.
     *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
     *  - The outer vector is sorted ascending by block number and cannot store two items with the
     *    same block number.
     */
    enjinV100: new StorageType('Hrmp.HrmpChannelDigests', 'Default', [enjinV100.Id], sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => enjinV100.Id)]))) as HrmpChannelDigestsEnjinV100,
}

/**
 *  Maintains a mapping that can be used to answer the question: What paras sent a message at
 *  the given block number for a given receiver. Invariants:
 *  - The inner `Vec<ParaId>` is never empty.
 *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
 *  - The outer vector is sorted ascending by block number and cannot store two items with the
 *    same block number.
 */
export interface HrmpChannelDigestsEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, enjinV100.Id[]][]
    get(block: Block, key: enjinV100.Id): Promise<([number, enjinV100.Id[]][] | undefined)>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<([number, enjinV100.Id[]][] | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: ([number, enjinV100.Id[]][] | undefined)][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: ([number, enjinV100.Id[]][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: ([number, enjinV100.Id[]][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<[k: enjinV100.Id, v: ([number, enjinV100.Id[]][] | undefined)][]>
}
