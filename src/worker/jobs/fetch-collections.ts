import { dataHandlerContext } from '../../contexts'
import { fetchCollectionsExtra } from '../../util/marketplace'
import { Collection, CollectionFlags, CollectionSocials } from '../../model'

function isNotNull<T>(input: null | T): input is T {
    return input != null
}

export async function fetchCollections(ids: string[]) {
    const ctx = await dataHandlerContext()
    const data = await fetchCollectionsExtra(ids)

    const collectionsPromise = data.filter(isNotNull).map((_c) => {
        const collection = new Collection({})
        collection.id = _c.collectionId
        collection.hidden = _c.hidden
        collection.category = _c.category
        collection.flags = new CollectionFlags({
            featured: _c.featured,
            hiddenForLegalReasons: _c.hiddenForLegalReasons,
        })
        collection.verifiedAt = _c.verifiedAt ? new Date(_c.verifiedAt) : null
        collection.socials = new CollectionSocials({
            discord: _c.discord,
            twitter: _c.twitter,
            instagram: _c.instagram,
            medium: _c.medium,
            tiktok: _c.tiktok,
            website: _c.website,
        })

        // syncCollectionStats(_c.collectionId)
        // computeTraits(_c.collectionId)
        return ctx.store.save<Collection>(collection)
    })

    await Promise.all(collectionsPromise)
}
