import { AccountId32, ValidatorPrefs } from '../../../common/types'

export type ValidatorPrefsSet = {
    stash: AccountId32
    prefs: ValidatorPrefs
}
