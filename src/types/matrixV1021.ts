import { sts, Result, Option, Bytes, BitSequence } from './support'

export interface CollectionDepositUpdateStatus {
    collectionId: bigint
    lastUpdatedTokenKey: LastUpdatedKeyStatus
    lastUpdatedAttributeKey: LastUpdatedKeyStatus
    calculatedDeposit: bigint
}

export type LastUpdatedKeyStatus =
    | LastUpdatedKeyStatus_Finished
    | LastUpdatedKeyStatus_InProgress
    | LastUpdatedKeyStatus_NotStarted

export interface LastUpdatedKeyStatus_Finished {
    __kind: 'Finished'
}

export interface LastUpdatedKeyStatus_InProgress {
    __kind: 'InProgress'
    value: Bytes
}

export interface LastUpdatedKeyStatus_NotStarted {
    __kind: 'NotStarted'
}

export const CollectionDepositUpdateStatus: sts.Type<CollectionDepositUpdateStatus> = sts.struct(() => {
    return {
        collectionId: sts.bigint(),
        lastUpdatedTokenKey: LastUpdatedKeyStatus,
        lastUpdatedAttributeKey: LastUpdatedKeyStatus,
        calculatedDeposit: sts.bigint(),
    }
})

export const LastUpdatedKeyStatus: sts.Type<LastUpdatedKeyStatus> = sts.closedEnum(() => {
    return {
        Finished: sts.unit(),
        InProgress: sts.bytes(),
        NotStarted: sts.unit(),
    }
})
