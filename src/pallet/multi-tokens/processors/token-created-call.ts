import { ForceMint, Mint } from '~/pallet/multi-tokens/calls'
import { TokenCreated } from '~/pallet/multi-tokens/events'

type TokenCreationCall = Mint | ForceMint
type UnknownRecord = Record<string, unknown>

function isRecord(value: unknown): value is UnknownRecord {
    return typeof value === 'object' && value !== null
}

function tokenIdFromParams(params: unknown): bigint | undefined {
    if (!isRecord(params)) return undefined
    if (typeof params.tokenId === 'bigint') return params.tokenId

    return isRecord(params.value) && typeof params.value.tokenId === 'bigint' ? params.value.tokenId : undefined
}

function collectTokenCreationCalls(node: unknown, event: TokenCreated, matches: TokenCreationCall[]): void {
    if (Array.isArray(node)) {
        node.forEach((value) => {
            collectTokenCreationCalls(value, event, matches)
        })
        return
    }

    if (!isRecord(node)) return

    if (node.__kind === 'batch_mint' && node.collectionId === event.collectionId && Array.isArray(node.recipients)) {
        for (const recipient of node.recipients) {
            if (!isRecord(recipient) || tokenIdFromParams(recipient.params) !== event.tokenId) continue

            matches.push({
                collectionId: event.collectionId,
                recipient: {
                    __kind: 'Id',
                    value: recipient.accountId as string,
                },
                params: recipient.params,
            } as Mint)
        }
    } else if (
        (node.__kind === 'mint' || node.__kind === 'force_mint') &&
        node.collectionId === event.collectionId &&
        tokenIdFromParams(node.params) === event.tokenId
    ) {
        matches.push(node as TokenCreationCall)
    }

    for (const value of Object.values(node)) {
        collectTokenCreationCalls(value, event, matches)
    }
}

export function findTokenCreationCalls(call: unknown, event: TokenCreated): TokenCreationCall[] {
    const matches: TokenCreationCall[] = []
    collectTokenCreationCalls(call, event, matches)
    return matches
}

export function selectTokenCreationCall(call: unknown, event: TokenCreated): TokenCreationCall | undefined {
    const matches = findTokenCreationCalls(call, event)
    return matches.length === 1 ? matches[0] : undefined
}
