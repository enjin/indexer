import {WhitelistedCallers} from "./_whitelistedCallers"
import {RequireToken} from "./_requireToken"

export type AccountRule = WhitelistedCallers | RequireToken

export function fromJsonAccountRule(json: any): AccountRule {
    switch(json?.isTypeOf) {
        case 'WhitelistedCallers': return new WhitelistedCallers(undefined, json)
        case 'RequireToken': return new RequireToken(undefined, json)
        default: throw new TypeError('Unknown json object passed as AccountRule')
    }
}
