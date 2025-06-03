import {
    AccountTokenEventAttribute,
    AccountTokenEventMeta,
    AccountTokenEventMetaCollection,
    AccountTokenEventMetaToken,
    Attribute,
    Collection,
    Token,
} from '../model'

export function generateAccountTokenEventMeta(
    collection: Collection | null,
    token: Token | null
): AccountTokenEventMeta | undefined {
    if (!collection && !token) {
        return undefined
    }

    return new AccountTokenEventMeta({
        collection: generateAccountTokenEventCollection(collection),
        token: generateAccountTokenEventToken(token),
    })
}

export function generateAccountTokenEventCollection(
    collection: Collection | null
): AccountTokenEventMetaCollection | undefined {
    if (!collection) {
        return undefined
    }

    return new AccountTokenEventMetaCollection({
        metadata: collection.metadata,
        createdAt: collection.createdAt,
    })
}

export function generateAccountTokenEventToken(token: Token | null): AccountTokenEventMetaToken | undefined {
    if (!token) {
        return undefined
    }

    return new AccountTokenEventMetaToken({
        metadata: token.metadata,
        nonFungible: token.nonFungible,
        createdAt: token.createdAt,
    })
}

export function generateAccountTokenEventAttributes(attributes: Attribute[] | undefined) {
    return attributes?.map((attribute) => {
        return new AccountTokenEventAttribute({
            id: attribute.id,
            key: attribute.key,
            value: attribute.value,
        })
    })
}
