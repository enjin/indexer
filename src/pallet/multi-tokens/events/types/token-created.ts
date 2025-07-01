import { RootOrSigned } from '~/pallet/common/types'

export type TokenCreated = {
    collectionId: bigint
    tokenId: bigint
    issuer: RootOrSigned
    initialSupply: bigint
}
