import type {
    CallParts,
    CallField,
    CoinField,
    DividerField,
    ResourceField,
    ResourceFieldType,
    TextField,
    TransactionView,
    ViewField,
} from './types'
import { getArg, getCallId } from './call'

const CALL_ITEM_PATHS: Record<string, string> = {
    'MultiTokens::batch_mint': 'recipients',
    'MultiTokens::batch_set_attribute': 'attributes',
    'MultiTokens::batch_transfer': 'recipients',
    'NominationPools::nominate': 'validators',
}

const CALL_AMOUNT_PATHS: Record<string, string[]> = {
    'MultiTokens::transfer': ['params.Simple.amount'],
    'MultiTokens::burn': ['params.amount', 'amount'],
    'MultiTokens::mint': ['params.CreateToken.initial_supply', 'params.Mint.amount'],
}

const ENJ_DECIMALS = 18

function getBatchAmount(items: unknown[], amountPaths: string[]): bigint | undefined {
    let total = 0n

    for (const recipient of items) {
        if (!recipient || typeof recipient !== 'object' || Array.isArray(recipient)) return undefined

        const params = (recipient as Record<string, unknown>).params
        if (!params || typeof params !== 'object' || Array.isArray(params)) return undefined

        const mintParams = params as Record<string, unknown>
        const amount = amountPaths.map((path) => getArg(mintParams, path)).find((value) => value !== undefined)
        if (typeof amount !== 'string' && typeof amount !== 'bigint') return undefined
        if (!/^\d+$/.test(amount.toString())) return undefined

        total += BigInt(amount)
    }

    return total
}

function formatEnjAmount(value: unknown): string | undefined {
    if (typeof value !== 'string' && typeof value !== 'bigint') return undefined

    const raw = value.toString()
    if (!/^\d+$/.test(raw)) return undefined

    const normalized = raw.replace(/^0+(?=\d)/, '')
    const padded = normalized.padStart(ENJ_DECIMALS + 1, '0')
    const whole = padded.slice(0, -ENJ_DECIMALS)
    const fraction = padded.slice(-ENJ_DECIMALS).replace(/0+$/, '')

    return fraction ? `${whole}.${fraction}` : whole
}

function getCallSubtitle(call: CallParts, fields: ViewField[]): string {
    const callId = getCallId(call)

    if (callId === 'StakeExchange::buy') {
        const amount = formatEnjAmount(getArg(call.params, 'amount'))
        if (amount !== undefined) return amount
    }

    const amount = CALL_AMOUNT_PATHS[callId]
        .map((path) => getArg(call.params, path))
        .find((value) => value !== undefined)
    if ((typeof amount === 'string' || typeof amount === 'bigint') && /^\d+$/.test(amount.toString())) {
        return `x ${amount}`
    }

    const itemPath = CALL_ITEM_PATHS[callId]
    const items = itemPath ? getArg(call.params, itemPath) : undefined
    if (callId === 'MultiTokens::batch_mint' && Array.isArray(items)) {
        const amount = getBatchAmount(items, ['CreateToken.initial_supply', 'Mint.amount'])
        if (amount !== undefined) return `x ${amount}`
    }
    if (callId === 'MultiTokens::batch_transfer' && Array.isArray(items)) {
        const amount = getBatchAmount(items, ['Simple.amount'])
        if (amount !== undefined) return `x ${amount}`
    }
    // A nested call represents one operation unless the call explicitly contains a batch of items.
    // Its rendered fields can include supporting details (such as an asset and its amount), which
    // must not inflate the operation count shown in the subtitle.
    const itemCount = Array.isArray(items) ? items.length : fields.length > 0 ? 1 : 0

    return `x ${itemCount}`
}

export class TransactionViewBuilder {
    private fields: ViewField[] = []

    constructor(private readonly title: string) {}

    static create(title: string): TransactionViewBuilder {
        return new TransactionViewBuilder(title)
    }

    withNetwork(label: string): this {
        return this.withText('Network', label)
    }

    withText(title: string, value: string): this {
        const field: TextField = {
            type: 'text',
            title,
            value,
        }
        this.fields.push(field)
        return this
    }

    withCoin(title: string, value: string, coinId: string): this {
        const field: CoinField = {
            type: 'coin',
            title,
            coinId,
            value,
        }
        this.fields.push(field)
        return this
    }

    withResource(type: ResourceFieldType, value: string): this {
        const field: ResourceField = { type, value }
        this.fields.push(field)
        return this
    }

    withCall(view: TransactionView, call: CallParts): this {
        const fields = view.fields.filter((f) => !(f.type === 'text' && f.title === 'Network'))
        const field: CallField = {
            type: 'item',
            title: view.title,
            subtitle: getCallSubtitle(call, fields),
            fields,
        }
        this.fields.push(field)
        return this
    }

    withDivider(): this {
        const field: DividerField = { type: 'divider' }
        this.fields.push(field)
        return this
    }

    when(condition: unknown, fn: (builder: this) => this): this {
        if (condition) return fn(this)
        return this
    }

    build(): TransactionView {
        return {
            title: this.title,
            fields: this.fields,
        }
    }
}
