import { BlockHeader } from '../../../common/types/contexts'
import { UnsupportedStorageError } from '../../../common/errors'
import { claims } from '../../../types/generated/storage'
import { match } from 'ts-pattern'
import { ExchangeRate } from './types'

export async function exchangeRate(block: BlockHeader): Promise<ExchangeRate | undefined> {
    return match(block)
        .returnType<Promise<ExchangeRate | undefined>>()
        .when(claims.exchangeRate.matrixV500.is, claims.exchangeRate.matrixV500.get)
        .when(claims.exchangeRate.matrixV604.is, claims.exchangeRate.matrixV604.get)
        .when(claims.exchangeRate.matrixEnjinV603.is, claims.exchangeRate.matrixEnjinV603.get)
        .when(claims.exchangeRate.v101.is, claims.exchangeRate.v101.get)
        .when(claims.exchangeRate.v102.is, claims.exchangeRate.v102.get)
        .otherwise(() => {
            throw new UnsupportedStorageError(exchangeRate.name)
        })
}
