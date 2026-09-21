import { isPlainObject } from 'lodash'
import { Token } from '~/model'
import { hash } from '~/worker/utils'
import type { EntityManager } from 'typeorm'

export type NormalizedTrait = {
    id: string
    traitType: string
    value: string
    displayType?: string
    displayValue?: string
}

export async function* tokenBatches(em: EntityManager, collectionId: string, batchSize = 500) {
    let lastTokenId: string | undefined

    while (true) {
        const query = em
            .getRepository(Token)
            .createQueryBuilder('token')
            .select('token.id')
            .addSelect('token.metadata')
            .addSelect('token.supply')
            .where('token.collection_id = :collectionId', { collectionId })
            .andWhere('token.supply > 0')
            .orderBy('token.id', 'ASC')
            .take(batchSize)

        if (lastTokenId) {
            query.andWhere('token.id > :lastTokenId', { lastTokenId })
        }

        const tokens = await query.getMany()
        if (!tokens.length) return

        yield tokens

        if (tokens.length < batchSize) return
        lastTokenId = tokens[tokens.length - 1].id
    }
}

export function extractTokenTraits(token: Pick<Token, 'id' | 'metadata'>, collectionId: string): NormalizedTrait[] {
    if (!token.metadata?.attributes || !isPlainObject(token.metadata.attributes)) return []

    const traits: NormalizedTrait[] = []

    Object.entries(token.metadata.attributes).forEach(([attributeType, data]) => {
        let traitType = attributeType
        let value: unknown = data
        let displayType: string | undefined
        let displayValue: string | undefined

        if (typeof data === 'object') {
            if (!isPlainObject(data)) return

            value = data.value

            if (data.name) {
                traitType = String(data.name)
                if (data.display_name) displayType = String(data.display_name)
            }

            if (data.display_value) displayValue = String(data.display_value)
        }

        if (value === null || value === undefined || value === '') return

        const normalizedValue = String(value)
        traits.push({
            id: hash(`${collectionId}-${traitType}-${normalizedValue}`),
            traitType,
            value: normalizedValue,
            displayType,
            displayValue,
        })
    })

    return traits
}
