import assert from 'node:assert/strict'
import test from 'node:test'
import type { CommonContext } from '~/contexts'
import { Token, TokenGroup, TokenGroupToken } from '~/model'
import { replaceTokenGroupTokens } from '~/pallet/multi-tokens/processors/token-group-memberships'

function fixture(positions: (number | null | undefined)[], reverseRows = false) {
    const token = new Token({ id: '3844-11', tokenId: 11n })
    const groups = ['32', '33'].map((id) => new TokenGroup({ id }))
    let memberships = groups.map(
        (tokenGroup, index) =>
            new TokenGroupToken({
                id: `${token.tokenId}-${tokenGroup.id}`,
                token,
                tokenGroup,
                position: positions[index],
            })
    )
    let writes = 0
    const ctx = {
        store: {
            find: (entity: unknown, options: { where: unknown }) => {
                if (entity === TokenGroupToken) {
                    assert.deepEqual(options.where, { token: { id: token.id } })
                    return Promise.resolve(reverseRows ? [...memberships].reverse() : [...memberships])
                }
                assert.equal(entity, TokenGroup)
                return Promise.resolve(groups)
            },
            remove: (removed: TokenGroupToken[]) => {
                writes++
                memberships = memberships.filter((membership) => !removed.includes(membership))
                return Promise.resolve()
            },
            save: (saved: TokenGroupToken[]) => {
                writes++
                memberships.push(...saved)
                return Promise.resolve()
            },
        },
    } as unknown as CommonContext

    return { token, ctx, memberships: () => memberships, writes: () => writes }
}

for (const [name, positions] of [
    ['null positions', [null, null]],
    ['undefined positions', [undefined, undefined]],
    ['missing primary position', [null, 1]],
    ['missing secondary position', [0, null]],
    ['positions starting at one', [1, 2]],
    ['gapped positions', [0, 2]],
    ['duplicate positions', [0, 0]],
] as const) {
    void test(`repairs ${name} even when membership IDs already match`, async () => {
        const { ctx, token, memberships, writes } = fixture([...positions])

        assert.equal(await replaceTokenGroupTokens(ctx, token, ['32', '33']), true)
        assert.deepEqual(
            memberships().map((membership) => [membership.id, membership.tokenGroup.id, membership.position]),
            [
                ['11-32', '32', 0],
                ['11-33', '33', 1],
            ]
        )
        assert.ok(memberships().every((membership) => membership.token === token))
        assert.equal(writes(), 2)

        assert.equal(await replaceTokenGroupTokens(ctx, token, ['32', '33']), false)
        assert.equal(writes(), 2)
    })
}

void test('does not write when group memberships already have the exact positions', async () => {
    // Database row order must not affect the membership comparison.
    const { ctx, token, writes } = fixture([0, 1], true)

    assert.equal(await replaceTokenGroupTokens(ctx, token, ['32', '33']), false)
    assert.equal(writes(), 0)
})

void test('reorders memberships to match the supplied group priority', async () => {
    const { ctx, token, memberships } = fixture([0, 1])

    assert.equal(await replaceTokenGroupTokens(ctx, token, ['33', '32']), true)
    assert.deepEqual(
        memberships().map((membership) => [membership.tokenGroup.id, membership.position]),
        [
            ['33', 0],
            ['32', 1],
        ]
    )
})
