import { AccountTokenEventMetaCollection, AccountTokenEventMetaToken, Collection, Token } from '../model'

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
