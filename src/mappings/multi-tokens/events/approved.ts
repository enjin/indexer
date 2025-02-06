import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ApprovedEvent = {
    collectionId: bigint
    tokenId?: bigint | undefined
    owner: string
    operator: string
    amount?: bigint | undefined
    expiration?: number | undefined
}

function approved(event: EventItem) {
    return match(event)
        .returnType<ApprovedEvent>()
        .when(multiTokens.approved.matrixEnjinV603.is, multiTokens.approved.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(multiTokens.approved)
        })
}
