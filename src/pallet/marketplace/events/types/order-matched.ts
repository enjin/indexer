import { AccountId32, AssetId, H256, OrderSide } from '~/pallet/common/types'

export type OrderMatched = {
    taker: AccountId32
    assetId: AssetId
    currencyId: AssetId
    side: OrderSide
    amountMatched: bigint
    ordersExamined: number
    remainderListingId?: H256
    unrestedAmount: bigint
}
