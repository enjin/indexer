import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type UnapprovedEvent = {
    collectionId: bigint
    tokenId?: bigint | undefined
    owner: string
    operator: string
}

function unapproved(event: EventItem) {
    return match(event)
        .returnType<UnapprovedEvent>()
        .when(multiTokens.unapproved.matrixEnjinV603.is, () => multiTokens.unapproved.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(multiTokens.unapproved)
        })
}
