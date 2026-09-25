import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import { EventItem } from '~/contexts'
import { held, released } from '~/pallet/balances/events'

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
