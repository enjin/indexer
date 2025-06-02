import { createHash } from 'crypto'

export function isNotNullOrEmpty<T>(input: null | T): input is T {
    if (Array.isArray(input)) {
        return input.length > 0
    }

    return input != null
}

export function hash(str: string): string {
    return createHash('sha1').update(str).digest('hex')
}
