import xxhash from 'xxhash-wasm'

/**
 * A singleton hasher for creating deterministic identifiers
 */
class XXHasher {
    private static instance: XXHasher | undefined
    private hasher: ((input: string, seed?: number) => string) | undefined
    private initializing: Promise<void> | null = null

    private constructor() {
        this.initializing = this.initialize()
    }

    /**
     * Get the singleton instance of XXHasher
     */
    public static getInstance(): XXHasher {
        if (!XXHasher.instance) {
            XXHasher.instance = new XXHasher()
        }

        return XXHasher.instance
    }

    /**
     * Initialize the XXHash hasher
     */
    private async initialize(): Promise<void> {
        const { h32ToString } = await xxhash()
        this.hasher = h32ToString
        this.initializing = null
    }

    /**
     * Ensure the hasher is initialized before using it
     */
    private async ensureInitialized(): Promise<void> {
        if (this.initializing) {
            await this.initializing
        }
    }

    /**
     * Hash a string using XXHash
     * @param input The string to hash
     * @returns The hash as a hex string
     */
    public async hash(input: string): Promise<string> {
        await this.ensureInitialized()

        if (!this.hasher) {
            throw new Error('XXHash hasher is not initialized')
        }

        return this.hasher(input)
    }

    /**
     * Create a deterministic ID from an array of strings by sorting and hashing
     * @param ids Array of string identifiers
     * @returns A hash string that will be the same for any array containing the same elements
     */
    public async createId(ids: string[]): Promise<string> {
        const sortedIds = [...ids].sort()
        const concatenated = sortedIds.join(',')

        return this.hash(concatenated)
    }
}

export const xxhasher = XXHasher.getInstance()
