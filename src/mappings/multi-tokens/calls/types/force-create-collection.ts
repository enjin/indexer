import { DefaultCollectionDescriptor } from '../../../common/types'

export type ForceCreateCollection = {
    owner: string
    collectionId: bigint
    descriptor: DefaultCollectionDescriptor
}
