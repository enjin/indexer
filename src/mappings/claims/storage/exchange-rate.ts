import { BlockHeader, CommonContext } from '@enjin/indexer/common/types/contexts'
import { UnsupportedStorageError } from '../../../common/errors'
import { claims } from '../../../types/generated/storage'

export async function exchangeRate(ctx: CommonContext, block: BlockHeader) {
    if (claims.exchangeRate.matrixEnjinV603.is(block)) {
        return claims.exchangeRate.matrixEnjinV603.get(block)
    }

    if (claims.exchangeRate.matrixV604.is(block)) {
        return claims.exchangeRate.matrixV604.get(block)
    }

    if (claims.exchangeRate.matrixV500.is(block)) {
        return claims.exchangeRate.matrixV500.get(block)
    }

    if (claims.exchangeRate.v102.is(block)) {
        return claims.exchangeRate.v102.get(block)
    }

    if (claims.exchangeRate.v101.is(block)) {
        return claims.exchangeRate.v101.get(block)
    }

    throw new UnsupportedStorageError('Claims.ExchangeRate')
}
