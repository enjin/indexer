import {TransferLocationAccount} from "./_transferLocationAccount"
import {TransferLocationEvm} from "./_transferLocationEvm"
import {TransferLocationXcm} from "./_transferLocationXcm"

export type TransferLocation = TransferLocationAccount | TransferLocationEvm | TransferLocationXcm

export function fromJsonTransferLocation(json: any): TransferLocation {
  switch(json?.isTypeOf) {
    case 'TransferLocationAccount': return new TransferLocationAccount(undefined, json)
    case 'TransferLocationEvm': return new TransferLocationEvm(undefined, json)
    case 'TransferLocationXcm': return new TransferLocationXcm(undefined, json)
    default: throw new TypeError('Unknown json object passed as TransferLocation')
  }
}
