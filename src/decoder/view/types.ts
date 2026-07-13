export type FieldType = 'text' | 'divider' | 'coin' | 'asset' | 'collection' | 'listing' | 'pool'
export type ResourceFieldType = 'asset' | 'collection' | 'listing' | 'pool'

export interface TextField {
    type: 'text'
    title: string
    value: string
}

export interface DividerField {
    type: 'divider'
}

export interface CoinField {
    type: 'coin'
    title: string
    coinId: string
    value: string
}

/** Identifies an on-chain resource; value only. */
export interface ResourceField {
    type: ResourceFieldType
    value: string
}

export type ViewField = TextField | DividerField | CoinField | ResourceField

export interface TransactionView {
    title: string
    fields: ViewField[]
}

export interface CallParts {
    pallet: string
    method: string
    params: Record<string, unknown>
}

export type ViewBuilderFn = (ctx: {
    call: CallParts
    network: string
    coinId: string
}) => TransactionView
