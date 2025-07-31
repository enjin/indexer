import { PoolMember, NominationPool, Era, PoolMemberRewards, EarlyBirdMintEvent } from '~/model'
import { CommonContext } from '~/contexts'

export async function needEarlyBirdMerge(ctx: CommonContext, eraIndex: number): Promise<boolean> {
    const result = await ctx.store.find(EarlyBirdMintEvent, {
        relations: {
            era: true,
        },
        order: {
            era: {
                index: 'DESC',
            },
        },
        take: 1,
    })

    if (!result.length) {
        return false
    }

    return result[0].era.index == eraIndex
}

export async function getOrCreatePoolMemberRewards(
    ctx: CommonContext,
    member: PoolMember,
    pool: NominationPool,
    era: Era
): Promise<PoolMemberRewards> {
    const id = `${member.id}-${era.index}`

    let pmr = await ctx.store.findOneBy(PoolMemberRewards, { id })
    if (!pmr) {
        pmr = new PoolMemberRewards({
            id,
            pool,
            member,
            reward: undefined, // will be filled by eraRewardsProcessed
            points: 0n, // will be filled by eraRewardsProcessed
            rewards: 0n, // will be filled by eraRewardsProcessed
            accumulatedRewards: member.accumulatedRewards ?? 0n,
        })
    }
    return pmr
}
