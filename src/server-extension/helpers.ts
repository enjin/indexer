import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { isValidAddress } from '~/util/tools'

// Generic cursor utilities for Relay connections
export function encodeCursor(id: string, orderValue: string): string {
    return Buffer.from(JSON.stringify({ id, orderValue })).toString('base64')
}

export function decodeCursor(cursor: string): { id: string; orderValue: string } {
    try {
        return JSON.parse(Buffer.from(cursor, 'base64').toString('utf-8'))
    } catch {
        throw new Error('Invalid cursor')
    }
}

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
