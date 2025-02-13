import { BlockHeader } from '../../../contexts'
import { UnsupportedStorageError } from '../../../utils/errors'
import { claims } from '../../../types/storage'
import { match } from 'ts-pattern'
import { ExchangeRate } from './types'

export async function exchangeRate(block: BlockHeader): Promise<ExchangeRate | undefined> {
    return match(block)
        .returnType<Promise<ExchangeRate | undefined>>()
        .when(
            () => () => claims.exchangeRate.matrixEnjinV603.is(block),
            () => claims.exchangeRate.matrixEnjinV603.get(block)
        )
        .when(
            () => () => claims.exchangeRate.matrixV604.is(block),
            () => claims.exchangeRate.matrixV604.get(block)
        )
        .when(
            () => () => claims.exchangeRate.matrixV500.is(block),
            () => claims.exchangeRate.matrixV500.get(block)
        )
        .when(
            () => () => claims.exchangeRate.v102.is(block),
            () => claims.exchangeRate.v102.get(block)
        )
        .when(
            () => () => claims.exchangeRate.v101.is(block),
            () => claims.exchangeRate.v101.get(block)
        )
        .otherwise(() => {
            throw new UnsupportedStorageError(exchangeRate.name)
        })
}
