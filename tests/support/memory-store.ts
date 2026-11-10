import assert from 'node:assert/strict'
import { FindOperator } from 'typeorm'

export type Row = { id: string }
type RowClass = new (...args: never[]) => Row

function matches(value: unknown, where: unknown): boolean {
    if (where instanceof FindOperator) {
        assert.equal(where.type, 'lessThanOrEqual')
        return value !== null && value !== undefined && (value as number) <= (where.value as number)
    }
    if (where !== null && typeof where === 'object') {
        if (value === null || typeof value !== 'object') return false
        return Object.entries(where).every(([key, inner]) => matches((value as Record<string, unknown>)[key], inner))
    }
    return value === where
}

/** In-memory stand-in for the processor store: entities are matched by class and a nested `where`. */
export class MemoryStore {
    rows: Row[]

    constructor(rows: Row[] = []) {
        this.rows = [...rows]
    }

    of<T extends Row>(entity: new (...args: never[]) => T): T[] {
        return this.rows.filter((row): row is T => row instanceof entity)
    }

    find(entity: RowClass, options: { where?: unknown; take?: number }): Promise<Row[]> {
        const rows = this.rows.filter(
            (row) => row instanceof entity && (options.where === undefined || matches(row, options.where))
        )
        return Promise.resolve(rows.slice(0, options.take ?? rows.length))
    }

    findOne(entity: RowClass, options: { where: unknown }): Promise<Row | undefined> {
        return this.findOneBy(entity, options.where)
    }

    findOneBy(entity: RowClass, where: unknown): Promise<Row | undefined> {
        return Promise.resolve(this.rows.find((row) => row instanceof entity && matches(row, where)))
    }

    save(value: Row | Row[]): Promise<void> {
        for (const row of Array.isArray(value) ? value : [value]) {
            this.rows = this.rows.filter((item) => !(item.constructor === row.constructor && item.id === row.id))
            this.rows.push(row)
        }
        return Promise.resolve()
    }
}
