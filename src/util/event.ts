import {
    AccountTokenEventAttribute,
    AccountTokenEventMetaCollection,
    AccountTokenEventMetaToken,
    Attribute,
    Collection,
    Token,
} from '../model'

export function generateAccountTokenEventCollection(collection: Collection) {
    return new AccountTokenEventMetaCollection({
        metadata: collection.metadata,
        createdAt: collection.createdAt,
    })
}

export function generateAccountTokenEventToken(token: Token) {
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
