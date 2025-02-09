import { AccountId32, ValidatorPrefs } from '@enjin/indexer/mappings/common/types'

export type ValidatorPrefsSet = {
    stash: AccountId32
    prefs: ValidatorPrefs
}
