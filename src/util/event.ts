import {
    AccountTokenEventAttribute,
    AccountTokenEventCollection,
    AccountTokenEventToken,
    Attribute,
    Collection,
    Token,
} from '../model'

export function generateAccountTokenEventToken(token: Token | null): AccountTokenEventToken | undefined {
    if (!token) {
        return undefined
    }

    return new AccountTokenEventToken({
        id: token.id,
        tokenId: token.tokenId.toString(),
        attributes: generateAccountTokenEventAttributes(token.attributes),
    })
}

export function generateAccountTokenEventCollection(
    collection: Collection | null
): AccountTokenEventCollection | undefined {
    if (!collection) {
        return undefined
    }

    return new AccountTokenEventCollection({
        id: collection.id,
        attributes: generateAccountTokenEventAttributes(collection.attributes),
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
