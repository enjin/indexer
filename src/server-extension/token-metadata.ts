import { Json } from '@subsquid/graphql-server'
import { Arg, Field, ID, ObjectType, Query, Resolver } from 'type-graphql'
import type { EntityManager } from 'typeorm'

const METADATA_MAX_AGE_MS = 6 * 60 * 60 * 1000
const METADATA_QUERY = `
    query ManyMetadata($urls: [String!]!, $language: String) {
        metadata: ManyMetadata(urls: $urls, language: $language) {
            metadata {
                name
                description
                keywords
                fallbackImage: image(type: FALLBACK) {
                    url
                }
                bannerImage: image(type: BANNER) {
                    url
                }
                media {
                    url
                    type
                    alt
                }
                attributes {
                    displayName: name
                    displayValue: value
                    name: name(display: false)
                    value: value(display: false)
                    type
                }
            }
        }
    }
`

type MetadataEntityType = 'collection' | 'token' | 'tokenGroup'

interface MetadataEntity {
    id: string
    type: MetadataEntityType
}

interface MetadataImageResponse {
    url?: unknown
}

interface MetadataMediaResponse {
    url?: unknown
    type?: unknown
    alt?: unknown
}

interface MetadataResponse {
    name?: unknown
    description?: unknown
    keywords?: unknown
    fallbackImage?: MetadataImageResponse | null
    bannerImage?: MetadataImageResponse | null
    media?: MetadataMediaResponse[] | null
    attributes?: unknown
}

interface ManyMetadataItemResponse {
    metadata?: MetadataResponse | null
}

interface ManyMetadataResponse {
    data?: {
        metadata?: ManyMetadataItemResponse[]
    }
    errors?: Array<{
        message?: string
    }>
}

interface MetadataRow {
    id: string
    storedMetadata: Record<string, unknown> | null
    ownUri: string | null
    groupUri: string | null
    collectionUri: string | null
}

interface StoredMetadataRow {
    storedMetadata: Record<string, unknown>
}

interface PendingMetadata {
    entity: MetadataEntity
    resolve: (value: EntityMetadata | null) => void
    reject: (reason: unknown) => void
}

export interface MetadataServiceOptions {
    serviceUrl: string
    language?: string
    timeoutMs: number
    maxResponseBytes: number
}

@ObjectType()
export class EntityMetadataMedia {
    @Field(() => String)
    url!: string

    @Field(() => String, { nullable: true })
    type?: string

    @Field(() => String, { nullable: true })
    alt?: string

    constructor(props: Partial<EntityMetadataMedia>) {
        Object.assign(this, props)
    }
}

@ObjectType()
export class EntityMetadata {
    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    description?: string

    @Field(() => String, { nullable: true })
    externalUrl?: string

    @Field(() => [String], { nullable: true })
    keywords?: string[]

    @Field(() => String, { nullable: true })
    fallbackImage?: string

    @Field(() => String, { nullable: true })
    bannerImage?: string

    @Field(() => [EntityMetadataMedia], { nullable: true })
    media?: EntityMetadataMedia[]

    @Field(() => Json, { nullable: true })
    meta?: typeof Json

    @Field(() => String, { nullable: true })
    originUrl?: string

    @Field(() => String, { nullable: true })
    originType?: string

    @Field(() => Date, { nullable: true })
    lastUpdated?: Date

    @Field(() => Json, { nullable: true })
    attributes?: typeof Json

    @Field(() => Json, { nullable: true })
    socials?: typeof Json

    constructor(props: Partial<EntityMetadata>) {
        Object.assign(this, props)
    }
}

function positiveInteger(value: string | undefined, fallback: number): number {
    if (value === undefined || value === '') {
        return fallback
    }

    const parsed = Number(value)
    if (!Number.isSafeInteger(parsed) || parsed < 1) {
        throw new Error(`Expected a positive integer, received: ${value}`)
    }

    return parsed
}

function metadataServiceOptionsFromEnv(): MetadataServiceOptions {
    return {
        serviceUrl: process.env.ENJIN_METADATA_SERVICE_URL || '',
        language: process.env.ENJIN_METADATA_LANGUAGE || undefined,
        timeoutMs: positiveInteger(process.env.ENJIN_METADATA_TIMEOUT_MS, 5000),
        maxResponseBytes: positiveInteger(process.env.ENJIN_METADATA_MAX_RESPONSE_BYTES, 5 * 1024 * 1024),
    }
}

function metadataEndpoint(serviceUrl: string): URL {
    const endpoint = new URL(serviceUrl)
    if (endpoint.protocol !== 'http:' && endpoint.protocol !== 'https:') {
        throw new Error('ENJIN_METADATA_SERVICE_URL must use HTTP or HTTPS')
    }

    if (!endpoint.pathname.endsWith('/graphql')) {
        endpoint.pathname = `${endpoint.pathname.replace(/\/$/, '')}/graphql`
    }

    return endpoint
}

function optionalString(value: unknown): string | undefined {
    return typeof value === 'string' ? value : undefined
}

function optionalDate(value: unknown): Date | undefined {
    if (typeof value !== 'string' && !(value instanceof Date)) {
        return undefined
    }

    const date = new Date(value)
    return Number.isNaN(date.getTime()) ? undefined : date
}

function optionalStringArray(value: unknown): string[] | undefined {
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : undefined
}

function optionalMedia(value: unknown): EntityMetadataMedia[] | undefined {
    if (!Array.isArray(value)) {
        return undefined
    }

    return value.flatMap((item: unknown) => {
        if (!item || typeof item !== 'object') {
            return []
        }

        const media = item as Record<string, unknown>
        const url = optionalString(media.url)
        return url
            ? [
                  new EntityMetadataMedia({
                      url,
                      type: optionalString(media.type),
                      alt: optionalString(media.alt),
                  }),
              ]
            : []
    })
}

function toEntityMetadata(metadata: Record<string, unknown> | null): EntityMetadata | null {
    if (!metadata) {
        return null
    }

    return new EntityMetadata({
        name: optionalString(metadata.name),
        description: optionalString(metadata.description),
        externalUrl: optionalString(metadata.externalUrl),
        keywords: optionalStringArray(metadata.keywords),
        fallbackImage: optionalString(metadata.fallbackImage),
        bannerImage: optionalString(metadata.bannerImage),
        media: optionalMedia(metadata.media),
        meta: metadata.meta as typeof Json,
        originUrl: optionalString(metadata.originUrl),
        originType: optionalString(metadata.originType),
        lastUpdated: optionalDate(metadata.lastUpdated),
        attributes: metadata.attributes as typeof Json,
        socials: metadata.socials as typeof Json,
    })
}

function parseMetadata(uri: string, response: MetadataResponse | null | undefined): EntityMetadata | null {
    if (!response) {
        return null
    }

    return new EntityMetadata({
        name: optionalString(response.name),
        description: optionalString(response.description),
        keywords: optionalStringArray(response.keywords),
        fallbackImage: optionalString(response.fallbackImage?.url),
        bannerImage: optionalString(response.bannerImage?.url),
        media: optionalMedia(response.media),
        attributes: response.attributes as typeof Json,
        originUrl: uri,
    })
}

export function isFreshMetadata(metadata: Record<string, unknown> | null, uri: string | null, now = Date.now()): boolean {
    const lastUpdated = optionalDate(metadata?.lastUpdated)
    return lastUpdated !== undefined && lastUpdated.getTime() >= now - METADATA_MAX_AGE_MS && uri === optionalString(metadata?.originUrl)
}

export class MetadataServiceClient {
    private readonly endpoint: URL

    constructor(
        private readonly options: MetadataServiceOptions,
        private readonly fetchImplementation: typeof fetch = fetch
    ) {
        this.endpoint = metadataEndpoint(options.serviceUrl)
    }

    async resolve(urls: string[]): Promise<Map<string, EntityMetadata | null>> {
        if (urls.length === 0) {
            return new Map()
        }

        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), this.options.timeoutMs)

        try {
            const response = await this.fetchImplementation(this.endpoint, {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    query: METADATA_QUERY,
                    variables: {
                        urls,
                        language: this.options.language,
                    },
                }),
                signal: controller.signal,
            })
            const contentLength = Number(response.headers.get('content-length'))
            if (Number.isFinite(contentLength) && contentLength > this.options.maxResponseBytes) {
                throw new Error('Metadata service response exceeds the configured size limit')
            }
            if (!response.ok) {
                throw new Error(`Metadata service returned HTTP ${response.status}`)
            }

            const body = await response.text()
            if (Buffer.byteLength(body) > this.options.maxResponseBytes) {
                throw new Error('Metadata service response exceeds the configured size limit')
            }

            const payload = JSON.parse(body) as ManyMetadataResponse
            if (payload.errors?.length) {
                throw new Error(
                    `Metadata service GraphQL error: ${payload.errors
                        .map((error) => error.message)
                        .filter(Boolean)
                        .join('; ')}`
                )
            }

            const items = payload.data?.metadata
            if (!Array.isArray(items) || items.length !== urls.length) {
                throw new Error('Metadata service returned an unexpected result count')
            }

            return new Map(urls.map((uri, index) => [uri, parseMetadata(uri, items[index]?.metadata)]))
        } finally {
            clearTimeout(timeout)
        }
    }
}

export function resolveTokenUri(uri: string, id: string): string {
    return uri.split('{id}').join(id)
}

function entityKey(entity: MetadataEntity): string {
    return `${entity.type}:${entity.id}`
}

function resolvedUri(entity: MetadataEntity, row: MetadataRow): string | null {
    const uri = row.ownUri ?? row.groupUri ?? row.collectionUri
    if (!uri) {
        return null
    }

    return resolveTokenUri(uri, entity.type === 'tokenGroup' ? `${entity.id}-group` : entity.id)
}

function storedMetadata(metadata: EntityMetadata, resolvedAt: string): Record<string, unknown> {
    return {
        name: metadata.name,
        description: metadata.description,
        externalUrl: metadata.externalUrl,
        keywords: metadata.keywords,
        fallbackImage: metadata.fallbackImage,
        bannerImage: metadata.bannerImage,
        media: metadata.media,
        meta: metadata.meta,
        originUrl: metadata.originUrl,
        originType: metadata.originType,
        lastUpdated: resolvedAt,
        attributes: metadata.attributes,
        socials: metadata.socials,
    }
}

export function metadataUpdateRows(result: unknown): StoredMetadataRow[] {
    if (!Array.isArray(result)) {
        return []
    }

    return Array.isArray(result[0]) ? (result[0] as StoredMetadataRow[]) : (result as StoredMetadataRow[])
}

async function metadataRows(manager: EntityManager, type: MetadataEntityType, ids: string[]): Promise<MetadataRow[]> {
    if (type === 'collection') {
        return manager.query<MetadataRow[]>(
            `SELECT collection.id,
                collection.stored_metadata AS "storedMetadata",
                own_uri.value AS "ownUri",
                NULL::text AS "groupUri",
                NULL::text AS "collectionUri"
            FROM collection
            LEFT JOIN attribute own_uri ON own_uri.collection_id = collection.id
                AND own_uri.token_id IS NULL
                AND own_uri.token_group_id IS NULL
                AND own_uri.key = 'uri'
            WHERE collection.id = ANY($1::text[])`,
            [ids]
        )
    }

    if (type === 'tokenGroup') {
        return manager.query<MetadataRow[]>(
            `SELECT token_group.id,
                token_group.stored_metadata AS "storedMetadata",
                own_uri.value AS "ownUri",
                NULL::text AS "groupUri",
                collection_uri.value AS "collectionUri"
            FROM token_group
            LEFT JOIN attribute own_uri ON own_uri.token_group_id = token_group.id AND own_uri.key = 'uri'
            LEFT JOIN attribute collection_uri ON collection_uri.collection_id = token_group.collection_id
                AND collection_uri.token_id IS NULL
                AND collection_uri.token_group_id IS NULL
                AND collection_uri.key = 'uri'
            WHERE token_group.id = ANY($1::text[])`,
            [ids]
        )
    }

    return manager.query<MetadataRow[]>(
        `SELECT token.id,
            token.stored_metadata AS "storedMetadata",
            own_uri.value AS "ownUri",
            group_uri.value AS "groupUri",
            collection_uri.value AS "collectionUri"
        FROM token
        LEFT JOIN attribute own_uri ON own_uri.token_id = token.id AND own_uri.key = 'uri'
        LEFT JOIN LATERAL (
            SELECT attribute.value
            FROM token_group_token
            INNER JOIN attribute ON attribute.token_group_id = token_group_token.token_group_id
                AND attribute.key = 'uri'
            WHERE token_group_token.token_id = token.id
            ORDER BY token_group_token.position NULLS LAST, token_group_token.id
            LIMIT 1
        ) group_uri ON TRUE
        LEFT JOIN attribute collection_uri ON collection_uri.collection_id = token.collection_id
            AND collection_uri.token_id IS NULL
            AND collection_uri.token_group_id IS NULL
            AND collection_uri.key = 'uri'
        WHERE token.id = ANY($1::text[])`,
        [ids]
    )
}

async function persistMetadata(
    manager: EntityManager,
    entity: MetadataEntity,
    metadata: EntityMetadata,
    resolvedAt: string
): Promise<Record<string, unknown>> {
    const table = entity.type === 'tokenGroup' ? 'token_group' : entity.type
    const value = storedMetadata(metadata, resolvedAt)
    const updateResult = await manager.query<unknown>(
        `UPDATE ${table}
        SET stored_metadata = $1::jsonb
        WHERE id = $2
            AND (stored_metadata IS NULL
                OR stored_metadata->>'lastUpdated' IS NULL
                OR stored_metadata->>'lastUpdated' <= $3)
        RETURNING stored_metadata AS "storedMetadata"`,
        [JSON.stringify(value), entity.id, resolvedAt]
    )
    const updated = metadataUpdateRows(updateResult)

    if (updated[0]) {
        return updated[0].storedMetadata
    }

    const current = await manager.query<Array<{ storedMetadata: Record<string, unknown> }>>(
        `SELECT stored_metadata AS "storedMetadata" FROM ${table} WHERE id = $1`,
        [entity.id]
    )
    return current[0]?.storedMetadata ?? value
}

class EntityMetadataLoader {
    private readonly pending = new Map<string, PendingMetadata>()
    private scheduled = false

    constructor(
        private readonly tx: () => Promise<EntityManager>,
        private readonly client: MetadataServiceClient,
        private readonly maxBatchSize: number
    ) {}

    load(entity: MetadataEntity): Promise<EntityMetadata | null> {
        const key = entityKey(entity)
        const existing = this.pending.get(key)
        if (existing) {
            return new Promise((resolve, reject) => {
                const originalResolve = existing.resolve
                const originalReject = existing.reject
                existing.resolve = (value) => {
                    originalResolve(value)
                    resolve(value)
                }
                existing.reject = (reason) => {
                    originalReject(reason)
                    reject(reason)
                }
            })
        }

        const promise = new Promise<EntityMetadata | null>((resolve, reject) => {
            this.pending.set(key, { entity, resolve, reject })
        })

        if (!this.scheduled) {
            this.scheduled = true
            queueMicrotask(() => {
                void this.flush()
            })
        }

        return promise
    }

    private async flush(): Promise<void> {
        const pending = new Map(this.pending)
        this.pending.clear()
        this.scheduled = false

        try {
            const results = await this.resolveEntities([...pending.values()].map(({ entity }) => entity))
            pending.forEach(({ resolve }, key) => resolve(results.get(key) ?? null))
        } catch (error) {
            pending.forEach(({ reject }) => reject(error))
        }
    }

    private async resolveEntities(entities: MetadataEntity[]): Promise<Map<string, EntityMetadata | null>> {
        const manager = await this.tx()
        const rowsByKey = new Map<string, MetadataRow>()

        for (const type of ['collection', 'tokenGroup', 'token'] as const) {
            const ids = entities.filter((entity) => entity.type === type).map((entity) => entity.id)
            for (let offset = 0; offset < ids.length; offset += this.maxBatchSize) {
                const rows = await metadataRows(manager, type, ids.slice(offset, offset + this.maxBatchSize))
                rows.forEach((row) => rowsByKey.set(entityKey({ type, id: row.id }), row))
            }
        }

        const results = new Map<string, EntityMetadata | null>()
        const staleByUri = new Map<string, MetadataEntity[]>()

        for (const entity of entities) {
            const key = entityKey(entity)
            const row = rowsByKey.get(key)
            if (!row) {
                results.set(key, null)
                continue
            }
            const uri = resolvedUri(entity, row)

            if (isFreshMetadata(row.storedMetadata, uri)) {
                results.set(key, toEntityMetadata(row.storedMetadata))
                continue
            }

            if (!uri) {
                results.set(key, toEntityMetadata(row.storedMetadata))
                continue
            }

            const uriEntities = staleByUri.get(uri) ?? []
            uriEntities.push(entity)
            staleByUri.set(uri, uriEntities)
        }

        const uris = [...staleByUri.keys()]
        for (let offset = 0; offset < uris.length; offset += this.maxBatchSize) {
            const batchUris = uris.slice(offset, offset + this.maxBatchSize)
            const resolvedByUri = await this.client.resolve(batchUris)
            const resolvedAt = new Date().toISOString()

            for (const uri of batchUris) {
                for (const entity of staleByUri.get(uri) ?? []) {
                    const key = entityKey(entity)
                    const metadata = resolvedByUri.get(uri)
                    if (!metadata) {
                        results.set(key, toEntityMetadata(rowsByKey.get(key)?.storedMetadata ?? null))
                        continue
                    }

                    const persisted = await persistMetadata(manager, entity, metadata, resolvedAt)
                    results.set(key, toEntityMetadata(persisted))
                }
            }
        }

        return results
    }
}

@Resolver()
export class EntityMetadataResolver {
    private readonly loader: EntityMetadataLoader

    constructor(private readonly tx: () => Promise<EntityManager>) {
        this.loader = new EntityMetadataLoader(
            tx,
            new MetadataServiceClient(metadataServiceOptionsFromEnv()),
            positiveInteger(process.env.ENJIN_METADATA_MAX_BATCH_SIZE, 100)
        )
    }

    @Query(() => EntityMetadata, { nullable: true })
    async resolveCollectionMetadata(@Arg('id', () => ID) id: string): Promise<EntityMetadata | null> {
        return this.loader.load({ id, type: 'collection' })
    }

    @Query(() => EntityMetadata, { nullable: true })
    async resolveTokenGroupMetadata(@Arg('id', () => ID) id: string): Promise<EntityMetadata | null> {
        return this.loader.load({ id, type: 'tokenGroup' })
    }

    @Query(() => EntityMetadata, { nullable: true })
    async resolveTokenMetadata(@Arg('id', () => ID) id: string): Promise<EntityMetadata | null> {
        return this.loader.load({ id, type: 'token' })
    }
}
