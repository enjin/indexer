import { connectionManager } from '~/contexts'
import { Collection, Token, Trait, TraitToken } from '~/model'
import { isPlainObject } from 'lodash'
import { Job } from 'bullmq'
import { hash } from '~/worker/utils'
import { QueueUtils } from '~/queue'

type TraitValueMap = Map<string, bigint>

export async function computeTraits(job: Job, id: string) {
    const em = await connectionManager()

    const traitTypeMap = new Map<string, TraitValueMap>()
    const tokenTraitMap = new Map<string, string[]>()

    const tokens = await em
        .getRepository(Token)
        .createQueryBuilder('token')
        .select('token.id')
        .addSelect('token.metadata')
        .addSelect('token.supply')
        .where('token.collection = :id', { id })
        .andWhere('token.supply > 0')
        .getMany()

    await em.query(
        `DELETE FROM trait_token USING trait WHERE trait.id = trait_token.trait_id AND trait.collection_id = $1`,
        [id]
    )

    await em.query(`DELETE FROM trait WHERE collection_id = $1`, [id])

    tokens.forEach((token) => {
        if (!token.metadata || !token.metadata.attributes || !isPlainObject(token.metadata.attributes)) return
        const attributes = token.metadata.attributes as Record<
            string,
            { value: string; display_name?: string } | string
        >
        Object.entries(attributes).forEach(([traitType, data]) => {
            let value = data as string
            if (typeof data === 'object') {
                value = data.value
                if (data.display_name) {
                    traitType = data.display_name
                }
            }

            if (!value) return

            value = value.toString()

            if (!traitTypeMap.has(traitType)) {
                traitTypeMap.set(traitType, new Map())
            }
            const tType = traitTypeMap.get(traitType) as TraitValueMap
            if (tType.has(value)) {
                tType.set(value, (tType.get(value) as bigint) + token.supply)
            } else {
                tType.set(value, token.supply)
            }

            tokenTraitMap.set(token.id, [...(tokenTraitMap.get(token.id) || []), hash(`${id}-${traitType}-${value}`)])
        })
    })

    if (!traitTypeMap.size) {
        await job.log(`No traits found for collection ${id}`)
        return
    }

    await job.log(`Found ${traitTypeMap.size} trait types`)
    const traitsToSave: Trait[] = []

    traitTypeMap.forEach((traitValueMap, traitType) => {
        traitValueMap.forEach((count, value) => {
            traitsToSave.push(
                new Trait({
                    id: hash(`${id}-${traitType}-${value}`),
                    collection: new Collection({ id: id }),
                    traitType,
                    value,
                    count,
                })
            )
        })
    })

    await job.log(`Saving ${traitsToSave.length} traits`)
    await em.save(Trait, traitsToSave, { chunk: 1000 })
    const traitTokensToSave: TraitToken[] = []

    tokenTraitMap.forEach((traits, tokenId) => {
        if (!traits.length) return
        traits.forEach((trait) => {
            traitTokensToSave.push(
                new TraitToken({
                    id: hash(`${trait}-${tokenId}`),
                    trait: new Trait({ id: trait }),
                    token: new Token({ id: tokenId }),
                })
            )
        })
    })

    if (traitTokensToSave.length) {
        await job.log(`Saving ${traitsToSave.length} token traits`)
        await em.save(TraitToken, traitTokensToSave, { chunk: 1000 })
    }

    // delay to avoid rollback issue on fork
    QueueUtils.dispatchComputeRarity({ id, delay: 120000 })
}
