import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const included =  {
    /**
     *  Whether the paras inherent was included within this block.
     * 
     *  The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant
     *  due to the guarantees of FRAME's storage APIs.
     * 
     *  If this is `None` at the end of the block, we panic and render the block invalid.
     */
    enjinV100: new StorageType('ParaInherent.Included', 'Optional', [], sts.unit()) as IncludedEnjinV100,
}

/**
 *  Whether the paras inherent was included within this block.
 * 
 *  The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant
 *  due to the guarantees of FRAME's storage APIs.
 * 
 *  If this is `None` at the end of the block, we panic and render the block invalid.
 */
export interface IncludedEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(null | undefined)>
}

export const onChainVotes =  {
    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    enjinV100: new StorageType('ParaInherent.OnChainVotes', 'Optional', [], enjinV100.V4ScrapedOnChainVotes) as OnChainVotesEnjinV100,
    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    enjinV1032: new StorageType('ParaInherent.OnChainVotes', 'Optional', [], enjinV1032.V6ScrapedOnChainVotes) as OnChainVotesEnjinV1032,
    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    v100: new StorageType('ParaInherent.OnChainVotes', 'Optional', [], v100.V2ScrapedOnChainVotes) as OnChainVotesV100,
    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    v1030: new StorageType('ParaInherent.OnChainVotes', 'Optional', [], v1030.V6ScrapedOnChainVotes) as OnChainVotesV1030,
}

/**
 *  Scraped on chain data for extracting resolved disputes as well as backing votes.
 */
export interface OnChainVotesEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(enjinV100.V4ScrapedOnChainVotes | undefined)>
}

/**
 *  Scraped on chain data for extracting resolved disputes as well as backing votes.
 */
export interface OnChainVotesEnjinV1032  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(enjinV1032.V6ScrapedOnChainVotes | undefined)>
}

/**
 *  Scraped on chain data for extracting resolved disputes as well as backing votes.
 */
export interface OnChainVotesV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v100.V2ScrapedOnChainVotes | undefined)>
}

/**
 *  Scraped on chain data for extracting resolved disputes as well as backing votes.
 */
export interface OnChainVotesV1030  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1030.V6ScrapedOnChainVotes | undefined)>
}
