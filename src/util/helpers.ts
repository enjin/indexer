import { Token, TokenMarketBehavior } from '../model'
import { createLogger } from '@subsquid/logger'

export const logger = (namespace: string) => createLogger(namespace)

export function isNonFungible(token: Token): boolean {
    if (token.behavior?.type === TokenMarketBehavior.IsCurrency) {
        // If the token is a currency, it is fungible.
        return false
    }

    if (token.collection.mintPolicy.maxTokenSupply === 1n) {
        // If the collection has a rule, maxTokenSupply of 1 means all tokens are NFT
        return true
    }

    if (token.collection.mintPolicy.forceSingleMint && token.supply === 1n) {
        // If the collection has a rule of forceSingleMint and there is only one unit of the token means it is a NFT
        return true
    }

    if (token.cap?.isTypeOf === 'TokenCapSupply') {
        // If token has a cap of Supply 1, it is non-fungible.
        // If the cap Supply is more than 1, it is fungible.
        return token.cap.supply === 1n
    }

    if (token.cap?.isTypeOf === 'TokenCapSingleMint') {
        // If the token is set as SingleMint and only one was minted it is non-fungible
        // If more than one was minted, it is fungible.
        return token.supply <= 1n
    }

    // All other cases we can't be sure if it is fungible or non-fungible.
    return false
}
