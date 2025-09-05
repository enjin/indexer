import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { isValidAddress } from '~/util/tools'

@ValidatorConstraint({ name: 'PublicKey', async: false })
export class IsPublicKey implements ValidatorConstraintInterface {
    validate(value: string) {
        if (!value) return true
        return isValidAddress(value)
    }

    defaultMessage() {
        return 'Invalid public key!'
    }
}

@ValidatorConstraint({ name: 'PublicKeyArray', async: false })
export class IsPublicKeyArray implements ValidatorConstraintInterface {
    validate(value: string[]) {
        if (!Array.isArray(value)) return false
        return value.every((address) => isValidAddress(address))
    }

    defaultMessage() {
        return 'One or more invalid public keys in the array!'
    }
}
