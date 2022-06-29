import {TransferAssetToken} from "./_transferAssetToken"
import {TransferAssetMultiToken} from "./_transferAssetMultiToken"

export type TransferAsset = TransferAssetToken | TransferAssetMultiToken

export function fromJsonTransferAsset(json: any): TransferAsset {
  switch(json?.isTypeOf) {
    case 'TransferAssetToken': return new TransferAssetToken(undefined, json)
    case 'TransferAssetMultiToken': return new TransferAssetMultiToken(undefined, json)
    default: throw new TypeError('Unknown json object passed as TransferAsset')
  }
}
