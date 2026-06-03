import Axios from 'axios'
import https from 'https'
import Queue from 'bullmq'
import mime from 'mime-types'
import { safeString } from './tools'
import { Attribute, EntitySocials, Metadata, MetadataMedia, MetadataMeta } from '~/model'
import config from '~/util/config'
import { validateUrlForSSRF } from './ssrf-protection'

type Media = {
    url: string
    type: string
    alt: string
}

export async function fetchMetadata(url: string, job: Queue.Job) {
    const api = Axios.create({
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
            'accept-encoding': 'gzip;q=0,deflate,sdch',
        },
        withCredentials: false,
        timeout: 15000,
        maxRedirects: url.startsWith('http://platform.production.enjinusercontent.com/') ? 3 : 2,
        httpsAgent: new https.Agent({ keepAlive: true }),
    })

    let finalUrl = url.replace('ipfs://', 'https://ipfs.io/ipfs/')
    if (job.attemptsMade > 1) {
        finalUrl = url.replace('ipfs://', 'https://ipfs.enjin.services/ipfs/')
        if (finalUrl.startsWith('https://ipfs.enjin.services/ipfs/')) {
            api.defaults.headers['x-pinata-gateway-token'] = process.env.PINATA_GATEWAY_TOKEN as string
        }
        await job.log(`Fetching metadata from ${finalUrl} attempt ${job.attemptsMade}`)
    }

    // SSRF protection: validate URL before making request
    try {
        await validateUrlForSSRF(finalUrl)
    } catch (error: unknown) {
        await job.log(
            `SSRF validation failed for ${finalUrl}: ${error instanceof Error ? error.message : String(error)}`
        )
        throw error
    }

    try {
        const { status, data } = await api.get(finalUrl)
        if (status >= 200 && status < 300) {
            if (data && typeof data === 'object' && !Array.isArray(data)) {
                return data
            }

            await job.log(`Invalid response from ${url}`)
            await job.log(data)
        } else {
            await job.log(`Status code ${status} received from ${url}`)
        }
    } catch (error) {
        if (!Axios.isAxiosError(error)) {
            await job.log(`Failed to fetch metadata from ${url} (non-axios) : ${error}`)
            throw error
        }

        await job.log(`Failed to fetch metadata from ${url} (axios)`)
        if (error.response) {
            if (error.response.status === 404) {
                return null
            }

            await job.log(`url: ${error.response.request.res.responseUrl} status: ${error.response.status.toString()}`)
            await job.log(`redirectsCount: ${error.response.request.res.redirects.length.toString()}`)
            await job.log(error.response.data)
        }

        throw error
    }
}

export function parseMedia(value: string | Media[]): MetadataMedia[] | undefined {
    try {
        const media = typeof value === 'string' ? JSON.parse(value) : value
        if (typeof media === 'object' && Array.isArray(media)) {
            return media
                .filter((_media) => _media.url)
                .map(
                    (_media: Media) =>
                        new MetadataMedia({
                            url: _media.url,
                            type: _media.type,
                            alt: _media.alt,
                        })
                )
        }
    } catch {
        // empty
    }

    return
}

function parseObjectProperties(value: object): Record<string, unknown> {
    const properties: Record<string, unknown> = {}

    for (const [k, v] of Object.entries(value)) {
        if (typeof v === 'object' && v !== null && 'value' in v && v.value && typeof v.value !== 'object') {
            properties[k] = v
        } else if (v !== null && v !== '' && typeof v !== 'object') {
            properties[k] = {
                value: v,
            }
        }
    }

    return properties
}

function imageToMedia(value: string): MetadataMedia[] {
    return [
        new MetadataMedia({
            url: value,
            type: mime.lookup(value) || 'image/jpeg',
            alt: '',
        }),
    ]
}

function parseArrayAttributes(
    attributes: {
        key?: string
        name?: string
        trait_type?: string
        value?: string
        display_type?: string
        type?: string
    }[]
) {
    const obj: {
        [key: string]: {
            type: string | undefined
        }
    } = {}
    attributes.forEach((attr) => {
        let key = null
        if (attr.key) {
            key = attr.key
        }
        if (attr.name) {
            key = attr.name
        }
        if (attr.trait_type) {
            key = attr.trait_type
        }
        if (key && attr.value !== undefined && attr.value !== '' && typeof attr.value !== 'object') {
            obj[key] = { ...attr, type: attr.display_type ?? attr.type ?? undefined }
        }
    })
    return obj
}

const SOCIAL_KEYS = ['instagram', 'discord', 'medium', 'tiktok', 'facebook', 'youtube', 'x', 'twitter'] as const

function getAttributeEntryValue(entry: unknown): string | undefined {
    if (entry === null || entry === undefined) {
        return
    }
    if (typeof entry === 'string') {
        return entry
    }
    if (typeof entry === 'object' && 'value' in entry) {
        const value = entry.value
        if (typeof value === 'string' && value !== '') {
            return value
        }
        if (typeof value === 'number' || typeof value === 'boolean') {
            return String(value)
        }
        if (typeof value === 'bigint') {
            return value.toString()
        }
    }
    return
}

function applySocialValue(
    socials: Record<string, string | null | undefined>,
    key: string,
    value: string
): Record<string, string | null | undefined> {
    if (key === 'x') {
        return { ...socials, x: value }
    }
    if (key === 'twitter' && !socials.x) {
        return { ...socials, x: value }
    }
    if (key !== 'twitter') {
        return { ...socials, [key]: value }
    }
    return socials
}

function parseSocialsFromAttributes(
    attributes: Record<string, unknown> | undefined,
    existing?: EntitySocials | null
): EntitySocials | undefined {
    if (!attributes) {
        return existing ?? undefined
    }

    let socials = (existing ?? new EntitySocials({})).toJSON() as Record<string, string | null | undefined>

    for (const key of SOCIAL_KEYS) {
        if (!(key in attributes)) {
            continue
        }
        const value = getAttributeEntryValue(attributes[key])
        if (value) {
            socials = applySocialValue(socials, key, value)
        }
    }

    if (!Object.values(socials).some((v) => v != null && v !== '')) {
        return existing ?? undefined
    }

    return new EntitySocials(undefined, socials)
}

function stripSocialKeysFromAttributes(attributes: Record<string, unknown>): Record<string, unknown> | undefined {
    const socialKeySet = new Set<string>(SOCIAL_KEYS)
    const stripped = Object.fromEntries(Object.entries(attributes).filter(([key]) => !socialKeySet.has(key)))
    return Object.keys(stripped).length > 0 ? stripped : undefined
}

function mergeSocialsFromAttributes(
    metadata: Metadata,
    attributes: unknown
): { socials: EntitySocials | undefined; attributes: Record<string, unknown> | undefined } {
    if (!attributes || typeof attributes !== 'object' || Array.isArray(attributes)) {
        return { socials: metadata.socials ?? undefined, attributes: undefined }
    }
    const attrs = attributes as Record<string, unknown>
    const socials = parseSocialsFromAttributes(attrs, metadata.socials)

    return { socials, attributes: stripSocialKeysFromAttributes(attrs) }
}

export function metadataParser(
    metadata: Metadata,
    attribute: Attribute,
    externalMetadata: {
        name: string | null | undefined
        description: string | null | undefined
        externalUrl: string | null | undefined
        image: string | null | undefined
        fallback_image: string | null | undefined
        banner_image: string | null | undefined
        media: Media[]
        keywords: string[] | undefined
        properties: unknown
        attributes: unknown
        meta:
            | {
                  version: string
                  language: string
                  alternate: string[]
              }
            | null
            | undefined
    } | null
): Metadata {
    const supportedProps = config.metadataSupportedProps

    if (externalMetadata?.name && supportedProps.includes('name')) {
        metadata.name = safeString(externalMetadata.name)
    }
    if (externalMetadata?.description && supportedProps.includes('description')) {
        metadata.description = safeString(externalMetadata.description)
    }
    if (externalMetadata?.externalUrl && supportedProps.includes('external_url')) {
        metadata.externalUrl = safeString(externalMetadata.externalUrl)
    }
    if (externalMetadata?.keywords && Array.isArray(externalMetadata.keywords) && supportedProps.includes('keywords')) {
        metadata.keywords = externalMetadata.keywords
    }
    if (externalMetadata?.image && supportedProps.includes('image')) {
        metadata.fallbackImage = safeString(externalMetadata.image)
        metadata.media = imageToMedia(externalMetadata.image)
    }
    if (externalMetadata?.fallback_image && supportedProps.includes('fallback_image')) {
        metadata.fallbackImage = safeString(externalMetadata.fallback_image)
    }
    if (externalMetadata?.banner_image && supportedProps.includes('banner_image')) {
        metadata.bannerImage = safeString(externalMetadata.banner_image)
    }
    if (externalMetadata?.media && supportedProps.includes('media')) {
        metadata.media = parseMedia(externalMetadata.media)
    }
    if (
        externalMetadata?.properties &&
        typeof externalMetadata.properties === 'object' &&
        supportedProps.includes('properties')
    ) {
        metadata.attributes = parseObjectProperties(externalMetadata.properties)
        if (Array.isArray(externalMetadata.properties)) {
            metadata.attributes = parseArrayAttributes(externalMetadata.properties)
        }
    }
    if (
        externalMetadata?.attributes &&
        typeof externalMetadata.attributes === 'object' &&
        supportedProps.includes('attributes')
    ) {
        metadata.attributes = parseObjectProperties(externalMetadata.attributes)
        if (Array.isArray(externalMetadata.attributes)) {
            metadata.attributes = parseArrayAttributes(externalMetadata.attributes)
        }
    }

    if (externalMetadata?.meta && supportedProps.includes('meta')) {
        metadata.meta = new MetadataMeta({
            version: parseFloat(externalMetadata.meta.version),
            language: externalMetadata.meta.language,
            alternate: externalMetadata.meta.alternate,
        })
    }

    if ((SOCIAL_KEYS as readonly string[]).includes(attribute.key)) {
        const existing = (metadata.socials ?? new EntitySocials({})).toJSON() as Record<
            string,
            string | null | undefined
        >
        let resolvedValue: string | undefined
        try {
            const parsed: unknown = JSON.parse(attribute.value)
            resolvedValue = getAttributeEntryValue(parsed)
        } catch {
            // not JSON, use as-is
        }
        resolvedValue = resolvedValue ?? attribute.value
        if (resolvedValue) {
            const socials = applySocialValue(existing, attribute.key, resolvedValue)
            metadata.socials = new EntitySocials(undefined, socials)
        }
    }

    if (attribute.key === 'name') {
        metadata.name = attribute.value
    } else if (attribute.key === 'description') {
        metadata.description = attribute.value
    } else if (attribute.key === 'fallback_image') {
        metadata.fallbackImage = attribute.value
    } else if (attribute.key === 'banner_image') {
        metadata.bannerImage = attribute.value
    } else if (attribute.key === 'media') {
        metadata.media = parseMedia(attribute.value)
    } else if (attribute.key === 'attributes') {
        try {
            const attributes = JSON.parse(attribute.value)
            if (typeof attributes === 'object') {
                metadata.attributes = attributes
                if (Array.isArray(attributes)) {
                    metadata.attributes = parseArrayAttributes(attributes)
                }
            }
        } catch {
            /* empty */
        }
    }

    const { socials, attributes } = mergeSocialsFromAttributes(metadata, metadata.attributes)
    metadata.socials = socials
    metadata.attributes = attributes ?? []

    return metadata
}
