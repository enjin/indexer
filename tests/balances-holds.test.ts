import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import { EventItem } from '~/contexts'
import { burnedHeld, held, released, transferAndHold, transferOnHold } from '~/pallet/balances/events'

type MetadataLine = {
    specName: string
    specVersion: number
    metadata: string
}

function runtime(file: string, version: number): Runtime {
    const line = fs
        .readFileSync(file, 'utf8')
        .split('\n')
        .filter(Boolean)
        .map((row) => JSON.parse(row) as MetadataLine)
        .find((row) => row.specVersion === version)

    assert(line)
    return new Runtime(
        { specName: line.specName, specVersion: line.specVersion, implName: '', implVersion: 0 },
        line.metadata
    )
}

const who = `0x${'11'.repeat(32)}`
const reason = { __kind: 'Marketplace', value: { __kind: 'Marketplace' } }

for (const [file, version] of [
    ['typegen/canary-matrixchain.jsonl', 1040],
    ['typegen/enjin-matrixchain.jsonl', 1041],
    ['typegen/enjin-relaychain.jsonl', 1070],
] as const) {
    void test(`held and released events identify the account at ${file} v${version}`, () => {
        const chainRuntime = runtime(file, version)

        for (const [name, decode] of [
            ['Balances.Held', held],
            ['Balances.Released', released],
        ] as const) {
            const event = {
                id: '1-1',
                name,
                args: { reason, who, amount: '5' },
                block: { _runtime: chainRuntime },
            } as EventItem

            assert.equal(decode(event).who, who)
        }
    })
}

const dest = `0x${'22'.repeat(32)}`

for (const [file, version] of [
    ['typegen/canary-matrixchain.jsonl', 1040],
    ['typegen/enjin-matrixchain.jsonl', 1041],
    ['typegen/enjin-relaychain.jsonl', 1070],
] as const) {
    void test(`hold transfer and burn events identify the accounts at ${file} v${version}`, () => {
        const chainRuntime = runtime(file, version)
        const event = (name: string, args: unknown) =>
            ({ id: '1-1', name, args, block: { _runtime: chainRuntime } }) as EventItem

        assert.equal(burnedHeld(event('Balances.BurnedHeld', { reason, who, amount: '5' })).who, who)

        const onHold = transferOnHold(event('Balances.TransferOnHold', { reason, source: who, dest, amount: '5' }))
        assert.deepEqual([onHold.source, onHold.dest], [who, dest])

        const andHold = transferAndHold(
            event('Balances.TransferAndHold', { reason, source: who, dest, transferred: '5' })
        )
        assert.deepEqual([andHold.source, andHold.dest, andHold.transferred], [who, dest, 5n])
    })
}
