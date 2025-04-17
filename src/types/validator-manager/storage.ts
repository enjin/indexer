import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const validatorsToRetire =  {
    /**
     *  Validators that should be retired, because their Parachain was deregistered.
     */
    enjinV100: new StorageType('ValidatorManager.ValidatorsToRetire', 'Default', [], sts.array(() => enjinV100.AccountId32)) as ValidatorsToRetireEnjinV100,
}

/**
 *  Validators that should be retired, because their Parachain was deregistered.
 */
export interface ValidatorsToRetireEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.AccountId32[]
    get(block: Block): Promise<(enjinV100.AccountId32[] | undefined)>
}

export const validatorsToAdd =  {
    /**
     *  Validators that should be added.
     */
    enjinV100: new StorageType('ValidatorManager.ValidatorsToAdd', 'Default', [], sts.array(() => enjinV100.AccountId32)) as ValidatorsToAddEnjinV100,
}

/**
 *  Validators that should be added.
 */
export interface ValidatorsToAddEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.AccountId32[]
    get(block: Block): Promise<(enjinV100.AccountId32[] | undefined)>
}
