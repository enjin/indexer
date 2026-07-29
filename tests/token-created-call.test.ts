import assert from 'node:assert/strict'
import test from 'node:test'

import {
    findTokenCreationCalls,
    selectTokenCreationCall,
    unwrapFlexibleMintParams,
} from '~/pallet/multi-tokens/processors/token-created-call'
import { TokenCreated } from '~/pallet/multi-tokens/events'
import { FlexibleMintParams } from '~/pallet/common/types'

const event: TokenCreated = {
    collectionId: 4519n,
    tokenId: 1n,
    issuer: {
        __kind: 'Root',
    },
    initialSupply: 1n,
}

const recipient = (tokenId: bigint, metadata: string) => ({
    accountId: '0x01',
    params: {
        __kind: 'CreateToken',
        tokenId,
        initialSupply: 1n,
        listingForbidden: false,
        attributes: [],
        metadata: {
            decimalCount: 0,
            name: metadata,
            symbol: '0x',
        },
    },
})

const batchMint = (...recipients: ReturnType<typeof recipient>[]) => ({
    __kind: 'MultiTokens',
    value: {
        __kind: 'batch_mint',
        collectionId: 4519n,
        recipients,
    },
})

void test('uses the only matching nested batchMint recipient', () => {
    const call = {
        calls: [batchMint(recipient(1n, '0x7265616c'))],
        continueOnFailure: false,
    }

    const selected = selectTokenCreationCall(call, event)

    assert.ok(selected && 'params' in selected)
    assert.ok('tokenId' in selected.params)
    assert.equal(selected.params.tokenId, event.tokenId)
})

void test('rejects an ambiguous match when a failed child contains token 1 and token 777', () => {
    const call = {
        calls: [
            batchMint(recipient(1n, '0x7265616c')),
            batchMint(recipient(1n, '0x6661696c6564'), recipient(777n, '0x7068616e746f6d')),
        ],
        continueOnFailure: false,
    }

    const matches = findTokenCreationCalls(call, event)

    assert.equal(matches.length, 2)
    assert.equal(selectTokenCreationCall(call, event), undefined)
})

void test('rejects duplicate token IDs from a failed child before persistence', () => {
    const call = {
        calls: [
            batchMint(recipient(1n, '0x7265616c')),
            batchMint(recipient(1n, '0x6669727374'), recipient(1n, '0x7461696c')),
        ],
        continueOnFailure: false,
    }

    const matches = findTokenCreationCalls(call, event)

    assert.equal(matches.length, 3)
    assert.equal(selectTokenCreationCall(call, event), undefined)
})

void test('unwraps historical CreateOrMint parameters before token hydration', () => {
    const params: FlexibleMintParams = {
        __kind: 'CreateOrMint',
        value: {
            tokenId: 1n,
            amount: 1n,
            listingForbidden: true,
            attributes: [],
            metadata: {
                decimalCount: 18,
                name: '0x746f6b656e',
                symbol: '0x544b4e',
            },
        },
    }

    const unwrapped = unwrapFlexibleMintParams(params)

    assert.ok('listingForbidden' in unwrapped)
    assert.equal(unwrapped.listingForbidden, true)
    assert.ok('metadata' in unwrapped)
    assert.equal(unwrapped.metadata?.decimalCount, 18)
})
