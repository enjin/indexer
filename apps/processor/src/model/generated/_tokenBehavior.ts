import {TokenBehaviorHasRoyalty} from "./_tokenBehaviorHasRoyalty"
import {TokenBehaviorIsCurrency} from "./_tokenBehaviorIsCurrency"

export type TokenBehavior = TokenBehaviorHasRoyalty | TokenBehaviorIsCurrency

export function fromJsonTokenBehavior(json: any): TokenBehavior {
    switch(json?.isTypeOf) {
        case 'TokenBehaviorHasRoyalty': return new TokenBehaviorHasRoyalty(undefined, json)
        case 'TokenBehaviorIsCurrency': return new TokenBehaviorIsCurrency(undefined, json)
        default: throw new TypeError('Unknown json object passed as TokenBehavior')
    }
}
