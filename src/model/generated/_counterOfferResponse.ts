import {CounterOfferResponseAccept} from "./_counterOfferResponseAccept"
import {CounterOfferResponseCounter} from "./_counterOfferResponseCounter"
import {CounterOfferResponseReject} from "./_counterOfferResponseReject"

export type CounterOfferResponse = CounterOfferResponseAccept | CounterOfferResponseCounter | CounterOfferResponseReject

export function fromJsonCounterOfferResponse(json: any): CounterOfferResponse {
    switch(json?.isTypeOf) {
        case 'CounterOfferResponseAccept': return new CounterOfferResponseAccept(undefined, json)
        case 'CounterOfferResponseCounter': return new CounterOfferResponseCounter(undefined, json)
        case 'CounterOfferResponseReject': return new CounterOfferResponseReject(undefined, json)
        default: throw new TypeError('Unknown json object passed as CounterOfferResponse')
    }
}
