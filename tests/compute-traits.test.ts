import assert from 'node:assert/strict'
import test from 'node:test'

import { Metadata, Token } from '~/model'
import { extractTokenTraits, tokenBatches } from '~/worker/jobs/traits/trait-utils'
import { hash } from '~/worker/utils'
import type { EntityManager } from 'typeorm'

void test('normalizes string and object token traits', () => {
    const token = new Token({
        id: '1-1',
        metadata: new Metadata({
            attributes: {
                Background: 'Blue',
                eyes: {
                    value: 'Laser',
                    name: 'Eyes',
                    display_name: 'Eye type',
                    display_value: 'Laser eyes',
                },
            },
        }),
    })

    assert.deepEqual(extractTokenTraits(token, '1'), [
        {
            id: hash('1-Background-Blue'),
            traitType: 'Background',
            value: 'Blue',
            displayType: undefined,
            displayValue: undefined,
        },
        {
            id: hash('1-Eyes-Laser'),
            traitType: 'Eyes',
            value: 'Laser',
            displayType: 'Eye type',
            displayValue: 'Laser eyes',
        },
    ])
})

void test('ignores missing and malformed trait values', () => {
    const token = new Token({
        id: '1-2',
        metadata: new Metadata({
            attributes: {
                empty: '',
                missing: { name: 'Missing' },
                nullValue: null,
                list: ['invalid'],
                valid: 42,
            },
        }),
    })

    assert.deepEqual(extractTokenTraits(token, '1'), [
        {
            id: hash('1-valid-42'),
            traitType: 'valid',
            value: '42',
            displayType: undefined,
            displayValue: undefined,
        },
    ])
})

void test('reads token batches with a keyset instead of retaining an offset', async () => {
    const tokens = Array.from({ length: 5 }, (_, index) => new Token({ id: `1-${String(index + 1).padStart(3, '0')}` }))
    const requestedLastIds: Array<string | undefined> = []
    const em = {
        getRepository: () => ({
            createQueryBuilder: () => {
                let lastTokenId: string | undefined
                let limit = 0
                const query = {
                    select: () => query,
                    addSelect: () => query,
                    where: () => query,
                    andWhere: (_condition: string, parameters?: { lastTokenId?: string }) => {
                        if (parameters?.lastTokenId) lastTokenId = parameters.lastTokenId
                        return query
                    },
                    orderBy: () => query,
                    take: (value: number) => {
                        limit = value
                        return query
                    },
                    getMany: () => {
                        requestedLastIds.push(lastTokenId)
                        return Promise.resolve(
                            tokens.filter((token) => !lastTokenId || token.id > lastTokenId).slice(0, limit)
                        )
                    },
                }
                return query
            },
        }),
    } as unknown as EntityManager

    const batches: string[][] = []
    for await (const batch of tokenBatches(em, '1', 2)) {
        batches.push(batch.map((token) => token.id))
    }

    assert.deepEqual(batches, [['1-001', '1-002'], ['1-003', '1-004'], ['1-005']])
    assert.deepEqual(requestedLastIds, [undefined, '1-002', '1-004'])
})
