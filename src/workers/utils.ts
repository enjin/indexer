import { createHash } from 'crypto'

export function isNotNull<T>(input: null | T): input is T {
    return input != null
}

export function hash(str: string): string {
    return createHash('sha1').update(str).digest('hex')
}
