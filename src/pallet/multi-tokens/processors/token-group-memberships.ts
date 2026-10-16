import { In } from 'typeorm'
import { CommonContext } from '~/contexts'
import { Token, TokenGroup, TokenGroupToken } from '~/model'

/**
 * Replaces the token's `TokenGroupToken` memberships with `groupIds`, in order. Returns false without writing when the
 * indexed memberships and positions already match.
 */
export async function replaceTokenGroupTokens(ctx: CommonContext, token: Token, groupIds: string[]): Promise<boolean> {
    const existing = await ctx.store.find<TokenGroupToken>(TokenGroupToken, {
        where: { token: { id: token.id } },
    })
    const membershipId = (tokenGroupId: string) => `${token.tokenId}-${tokenGroupId}`

    const current = [...existing]
        .sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
        .map((membership) => membership.id)
    if (current.length === groupIds.length && current.every((id, index) => id === membershipId(groupIds[index])))
        return false

    const tokenGroups =
        groupIds.length === 0 ? [] : await ctx.store.find<TokenGroup>(TokenGroup, { where: { id: In(groupIds) } })

    if (existing.length > 0) await ctx.store.remove(existing)
    await ctx.store.save(
        groupIds.map(
            (tokenGroupId, index) =>
                new TokenGroupToken({
                    id: membershipId(tokenGroupId),
                    token,
                    tokenGroup: tokenGroups.find((tokenGroup) => tokenGroup.id === tokenGroupId),
                    position: index,
                })
        )
    )
    return true
}
