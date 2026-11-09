import assert from 'node:assert/strict'
import test from 'node:test'
import { isEthereumAddressInput } from '~/util/ethereum-address'

const checksummed = '5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed'
const badChecksum = '5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAeD'

// Expected values were recorded from web3-validator@2.0.6 `isAddress`, which this helper replaces.
const cases: [input: string, valid: boolean][] = [
    [`0x${checksummed}`, true],
    [`0x${badChecksum}`, false],
    [`0x${checksummed.toLowerCase()}`, true],
    [`0x${checksummed.toUpperCase()}`, true],
    [checksummed, true],
    [checksummed.toLowerCase(), true],
    [badChecksum, false],
    [`0X${checksummed}`, true],
    [`0X${checksummed.toLowerCase()}`, true],
    [`0X${badChecksum}`, false],
    [`0x${checksummed.slice(1)}`, false],
    [`0x${checksummed}a`, false],
    [`0x${checksummed.slice(0, 39)}g`, false],
    ['', false],
    ['0x', false],
    ['0x0000000000000000000000000000000000000000', true],
    [`zz${checksummed.toLowerCase()}`, false],
    [` 0x${checksummed}`, false],
    [`0x0x${checksummed.toLowerCase()}`, false],
    [`${checksummed.toLowerCase().slice(0, 20)}0x${checksummed.toLowerCase().slice(20)}`, false],
]

void test('accepts Ethereum addresses exactly as web3-validator isAddress did', () => {
    for (const [input, valid] of cases) {
        assert.equal(isEthereumAddressInput(input), valid, JSON.stringify(input))
    }
})
