import {TokenCapSingleMint} from "./_tokenCapSingleMint"
import {TokenCapSupply} from "./_tokenCapSupply"

export type TokenCap = TokenCapSingleMint | TokenCapSupply

export function fromJsonTokenCap(json: any): TokenCap {
    switch(json?.isTypeOf) {
        case 'TokenCapSingleMint': return new TokenCapSingleMint(undefined, json)
        case 'TokenCapSupply': return new TokenCapSupply(undefined, json)
        default: throw new TypeError('Unknown json object passed as TokenCap')
    }
}
