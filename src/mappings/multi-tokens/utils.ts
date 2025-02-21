import { CallItem } from '../../contexts'
import { match } from 'ts-pattern'
import { UnsupportedCallError } from '../../utils/errors'
import { calls } from '../../types'
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

export function anyMint(call: CallItem, tokenId?: bigint): Mint | ForceMint {
    const processCall = withDispatchCheck((call: CallItem): Mint | ForceMint => {
        return match(call.name)
            .returnType<Mint | ForceMint>()
            .with(calls.multiTokens.mint.name, () => mappings.multiTokens.calls.mint(call))
            .with(calls.multiTokens.forceMint.name, () => mappings.multiTokens.calls.forceMint(call))
            .with(calls.multiTokens.batchMint.name, () =>
                filterMintCall(mappings.multiTokens.calls.batchMint(call), tokenId)
            )
            .otherwise(() => {
                throw new UnsupportedCallError(call)
            })
    })

    return processCall(call)
}

function filterMintCall(call: BatchMint, tokenId?: bigint): Mint | ForceMint {
    if (tokenId === undefined) {
        throw new Error('Invalid token id')
    }

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
