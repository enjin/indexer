import { BlockHeader } from '@enjin/indexer/common/types/contexts'
import { UnsupportedStorageError } from '@enjin/indexer/common/errors'
import { multiTokens } from '../../../types/generated/storage'

export async function collections(block: BlockHeader) {
    if (multiTokens.collections.enjinV100.is(block)) {
        return multiTokens.collections.enjinV100.get(block, 2n)
    }

    if (multiTokens.collections.v100.is(block)) {
        return multiTokens.collections.v100.get(block, 2n)
    }

    throw new UnsupportedStorageError('collections')
}
