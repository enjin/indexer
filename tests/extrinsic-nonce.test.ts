import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import type { ExtrinsicItem } from '~/contexts'
import { getExtrinsicNonce } from '~/util/extrinsic-nonce'

function extrinsic(signedExtensions: unknown): Pick<ExtrinsicItem, 'id' | 'signature'> {
    return {
        id: 'extrinsic-7',
        signature: { address: '0x' + '11'.repeat(32), signature: '0x', signedExtensions },
    }
}

void test('signed nonces remain distinct for the same signer regardless of account state', () => {
    const account = { nonce: 100 }
    const items = [7, 8].map((checkNonce) => ({ ...extrinsic({ checkNonce }), signer: account }))
    assert.deepEqual(items.map(getExtrinsicNonce), [7, 8])
    assert.equal(account.nonce, 100)
})

void test('failed extrinsics keep their signed nonce and unsigned extrinsics use zero', () => {
    const failed = { ...extrinsic({ checkNonce: 7 }), success: false }
    assert.equal(getExtrinsicNonce(failed), 7)
    assert.equal(getExtrinsicNonce({ id: 'unsigned' }), 0)
    assert.equal(getExtrinsicNonce(extrinsic({ checkNonce: 0 })), 0)
})

void test('legacy extension names and decimal JSON values preserve the nonce', () => {
    assert.equal(getExtrinsicNonce(extrinsic({ CheckNonce: 7 })), 7)
    assert.equal(getExtrinsicNonce(extrinsic({ checkNonce: '8' })), 8)
    assert.equal(getExtrinsicNonce(extrinsic({ checkNonce: 2147483647 })), 2147483647)
})

void test('missing, malformed, lossy and out-of-range signed nonces fail explicitly', () => {
    for (const value of [undefined, null, -1, 1.5, NaN, Infinity, '', '1.5', {}, 2147483648, '9007199254740993']) {
        assert.throws(() => getExtrinsicNonce(extrinsic({ checkNonce: value })), /nonce.*extrinsic-7/)
    }
    assert.throws(() => getExtrinsicNonce(extrinsic(undefined)), /nonce.*extrinsic-7/)
})

for (const network of ['enjin-matrixchain', 'canary-matrixchain', 'enjin-relaychain', 'canary-relaychain']) {
    void test(`SCALE-decoded signed nonces match every recorded ${network} runtime`, () => {
        const records = readFileSync(`typegen/${network}.jsonl`, 'utf8').trim().split('\n')
        for (const record of records) {
            const { specVersion, metadata } = JSON.parse(record)
            const runtime = new Runtime(
                { specName: network, specVersion, implName: network, implVersion: specVersion },
                metadata
            )
            const encoded = runtime.encodeExtrinsic({
                version: 4,
                signature: {
                    address: { __kind: 'Id', value: '0x' + '11'.repeat(32) },
                    signature: { __kind: 'Sr25519', value: '0x' + '22'.repeat(64) },
                    signedExtensions: {
                        checkMortality: { __kind: 'Immortal' },
                        checkMetadataHash: { mode: { __kind: 'Disabled' } },
                        checkNonce: 8,
                        chargeTransactionPayment: 0n,
                    },
                },
                call: { __kind: 'System', value: { __kind: 'remark', remark: '0x' } },
            })
            const decoded = runtime.decodeExtrinsic(encoded)
            assert.ok(decoded.signature)
            const signature = JSON.parse(
                JSON.stringify(decoded.signature, (_key, value) =>
                    typeof value === 'bigint' ? value.toString() : value
                )
            )
            assert.equal(
                getExtrinsicNonce({ id: `${network}-${specVersion}`, signature }),
                8,
                `${network} specVersion ${specVersion}`
            )
        }
    })
}
