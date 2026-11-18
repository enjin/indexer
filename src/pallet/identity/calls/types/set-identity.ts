import { Data, Bytes } from '~/pallet/common/types'
import type { IdentityInfo } from '~/type/v1082'

export type SetIdentity = {
    info:
        | IdentityInfo
        | {
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
