import type { CoinField, DividerField, ResourceField, ResourceFieldType, TextField, TransactionView, ViewField } from './types'

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
