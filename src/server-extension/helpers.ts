import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { isValidAddress } from '~/util/tools'

export function encodeCursor(id: string, orderValue: string | number | Date | null | undefined): string {
    const normalized =
        orderValue instanceof Date ? orderValue.toISOString() : orderValue !== undefined ? orderValue : null

    return Buffer.from(JSON.stringify({ id, orderValue: normalized })).toString('base64')
}

export function decodeCursor(cursor: string): { id: string; orderValue: string | null } {
    try {
        const value = JSON.parse(Buffer.from(cursor, 'base64').toString('utf-8'))
        if (!value?.id) {
            throw new Error('Invalid cursor payload')
        }
        const rawOrderValue = value.orderValue ?? null

        return {
            id: value.id,
            orderValue: rawOrderValue === null ? null : rawOrderValue.toString(),
        }
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
