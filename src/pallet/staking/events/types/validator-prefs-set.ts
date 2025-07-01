import { AccountId32, ValidatorPrefs } from '~/pallet/common/types'

export type ValidatorPrefsSet = {
    stash: AccountId32
    prefs: ValidatorPrefs
}
