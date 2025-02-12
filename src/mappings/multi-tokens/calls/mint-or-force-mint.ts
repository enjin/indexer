import { CallItem } from '../../../common/types/contexts'
import { UnsupportedCallError } from '../../../common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'
import { Mint, ForceMint, BatchMint } from './types'
import { mint } from './mint'
import { forceMint } from './force-mint'
import { DefaultMintParams_CreateToken } from '../../common/types'
import { batchMint } from './batch-mint'

function filterMintCall(call: BatchMint, tokenId: bigint | undefined): Mint | ForceMint {
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

export function mintOrForceMint(call: CallItem, tokenId?: bigint): Mint | ForceMint {
    return match(call.name)
        .returnType<Mint | ForceMint>()
        .with(calls.multiTokens.mint.name, () => mint(call))
        .with(calls.multiTokens.forceMint.name, () => forceMint(call))
        .with(calls.multiTokens.batchMint.name, () => filterMintCall(batchMint(call), tokenId))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
