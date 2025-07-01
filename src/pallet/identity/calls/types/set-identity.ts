import { Data, Bytes } from '~/pallet/common/types'

export type SetIdentity = {
    info: {
        additional: [Data, Data][]
        display: Data
        legal: Data
        web: Data
        riot: Data
        email: Data
        pgpFingerprint?: Bytes
        image: Data
        twitter: Data
    }
}
