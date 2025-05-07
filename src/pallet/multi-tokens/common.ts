import { CallItem } from '../../contexts'
import { match } from 'ts-pattern'
import { UnsupportedCallError } from '../../util/errors'
import { calls } from '../../type'
import * as mappings from '../index'
import {
    CreateCollection,
    ForceCreateCollection,
    Mint,
    ForceMint,
    BatchMint,
    ForceCreateEthereumCollection,
} from './calls'
import { DefaultMintParams_CreateToken } from '../common/types'
import { withDispatchCheck } from '../fuel-tanks/utils'
import { Batch } from '../matrix-utility/calls'
import { CreatePool } from '../nomination-pools/calls'

export function anyCreateCollection(
    call: CallItem
): CreateCollection | ForceCreateCollection | ForceCreateEthereumCollection {
    const processCall = withDispatchCheck(
        (call: CallItem): CreateCollection | ForceCreateCollection | ForceCreateEthereumCollection => {
            return match(call.name)
                .returnType<CreateCollection | ForceCreateCollection | ForceCreateEthereumCollection>()
                .with(calls.multiTokens.createCollection.name, () => mappings.multiTokens.calls.createCollection(call))
                .with(calls.multiTokens.forceCreateCollection.name, () =>
                    mappings.multiTokens.calls.forceCreateCollection(call)
                )
                .with(calls.multiTokens.forceCreateEthereumCollection.name, () =>
                    mappings.multiTokens.calls.forceCreateEthereumCollection(call)
                )
                .otherwise(() => {
                    throw new UnsupportedCallError(call)
                })
        }
    )

    return processCall(call)
}

export function anyMint(call: CallItem, collectionId: bigint, tokenId: bigint): Mint | ForceMint | CreatePool {
    const processCall = withDispatchCheck((call: CallItem): Mint | ForceMint | CreatePool => {
        return (
            match(call.name)
                .returnType<Mint | ForceMint | CreatePool>()
                .with(calls.multiTokens.mint.name, () => mappings.multiTokens.calls.mint(call))
                .with(calls.multiTokens.forceMint.name, () => mappings.multiTokens.calls.forceMint(call))
                .with(calls.multiTokens.batchMint.name, () =>
                    filterMintCall(mappings.multiTokens.calls.batchMint(call), tokenId)
                )
                // TODO: We probably need some way to handle `matrixUtility.batch` calls automatically
                .with(calls.matrixUtility.batch.name, () =>
                    filterBatchCall(mappings.matrixUtility.calls.batch(call), collectionId, tokenId)
                )
                .with(calls.nominationPools.create.name, () => mappings.nominationPools.calls.create(call))
                .otherwise(() => {
                    throw new UnsupportedCallError(call)
                })
        )
    })

    return processCall(call)
}

export async function getCollectionAsCall(call: CallItem, collectionId: bigint): Promise<CreateCollection> {
    const collection = await mappings.multiTokens.storage.collections(call.block, { collectionId: collectionId })
    if (!collection) {
        throw new UnsupportedCallError(call)
    }

    return {
        descriptor: {
            policy: collection.policy,
            depositor: collection.creationDeposit?.depositor, // Added on v1030
            explicitRoyaltyCurrencies: [], //collection.explicitRoyaltyCurrencies,
            attributes: [],
        },
    }
}

function filterBatchCall(call: Batch, collectionId: bigint, tokenId: bigint): Mint | ForceMint {
    for (const c of call.calls) {
        if (c.__kind !== 'MultiTokens') {
            continue
        }

        if (c.value.__kind === 'mint' || c.value.__kind === 'force_mint') {
            const { recipient, params } = c.value

            if (collectionId != c.value.collectionId || params.__kind !== 'CreateToken') {
                continue
            }

            if (params.tokenId === tokenId) {
                return {
                    collectionId,
                    recipient,
                    params: params as DefaultMintParams_CreateToken,
                }
            }
        }
    }

    throw new Error('Invalid token id')
}

function filterMintCall(call: BatchMint, tokenId: bigint): Mint | ForceMint {
    const { collectionId, recipients } = call

    const recipientCall = recipients.find((r) => r.params.tokenId === tokenId)
    if (recipientCall === undefined) {
        throw new Error('Invalid token id')
    }

    return {
        collectionId,
        recipient: {
            __kind: 'Id',
            value: recipientCall.accountId,
        },
        params: recipientCall.params as DefaultMintParams_CreateToken,
    }
}
