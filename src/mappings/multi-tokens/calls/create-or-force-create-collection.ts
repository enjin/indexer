import { CallItem } from '../../../common/types/contexts'
import { UnsupportedCallError } from '../../../common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'
import { CreateCollection, ForceCreateCollection } from './types'
import { createCollection } from './create-collection'
import { forceCreateCollection } from './force-create-collection'

export function createOrForceCreateCollection(call: CallItem): CreateCollection | ForceCreateCollection {
    return match(call.name)
        .returnType<CreateCollection | ForceCreateCollection>()
        .with(calls.multiTokens.createCollection.name, () => createCollection(call))
        .with(calls.multiTokens.forceCreateCollection.name, () => forceCreateCollection(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
