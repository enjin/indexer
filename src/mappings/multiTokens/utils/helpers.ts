import { CapType, Token, TokenBehaviorType, TokenCapSupply } from '../../../model'

export function isNonFungible(token: Token): boolean | null {
    if (token.behavior?.type === TokenBehaviorType.IsCurrency) {
        // If the token is a currency it is fungible.
        return false
    }

    if (token.cap?.type === CapType.Supply) {
        // If token has a cap of Supply 1, it is non-fungible.
        // If the cap Supply is more than 1, it is fungible.
        return (token.cap as TokenCapSupply).supply === 1n
    }

    if (token.cap?.type === CapType.SingleMint) {
        // If the token is set as SingleMint and only one was minted it is non-fungible
        // If more than one was minted it is fungible.
        return token.supply === 1n
    }

    // All other cases we can't be sure if it is fungible or non-fungible.
    return null
}
