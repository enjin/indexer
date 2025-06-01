import Axios from 'axios'
import https from 'https'
import Queue from 'bullmq'
import mime from 'mime-types'
import { safeString } from './tools'
import { Attribute, Metadata, MetadataMedia } from '../model'

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
        httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false }),
    })

    let finalUrl = url.replace('ipfs://', 'https://ipfs.io/ipfs/')
    if (job.attemptsMade > 1) {
        finalUrl = url.replace('ipfs://', 'https://ipfs.enjin.services/ipfs/')
        if (finalUrl.startsWith('https://ipfs.enjin.services/ipfs/')) {
            api.defaults.headers['x-pinata-gateway-token'] = process.env.PINATA_GATEWAY_TOKEN as string
        }
        await job.log(`Fetching metadata from ${finalUrl} attempt ${job.attemptsMade}`)
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

export function metadataParser(
    metadata: Metadata,
    attribute: Attribute,
    externalMetadata: {
        name: string | null | undefined
        description: string | null | undefined
        external_url: string | null | undefined
        image: string | null | undefined
        fallback_image: string | null | undefined
        media: Media[]
        keywords: string[] | undefined
        properties: unknown
        attributes: unknown
    } | null
): Metadata {
    if (externalMetadata?.name) {
        metadata.name = safeString(externalMetadata.name)
    }
    if (externalMetadata?.description) {
        metadata.description = safeString(externalMetadata.description)
    }
    if (externalMetadata?.external_url) {
        metadata.externalUrl = safeString(externalMetadata.external_url)
    }
    if (externalMetadata?.keywords && Array.isArray(externalMetadata.keywords)) {
        metadata.keywords = externalMetadata.keywords
    }
    if (externalMetadata?.image) {
        metadata.fallbackImage = safeString(externalMetadata.image)
        metadata.media = imageToMedia(externalMetadata.image)
    }
    if (externalMetadata?.fallback_image) {
        metadata.fallbackImage = safeString(externalMetadata.fallback_image)
    }
    if (externalMetadata?.media) {
        metadata.media = parseMedia(externalMetadata.media)
    }
    if (externalMetadata?.properties && typeof externalMetadata.properties === 'object') {
        metadata.attributes = parseObjectProperties(externalMetadata.properties)
        if (Array.isArray(externalMetadata.properties)) {
            metadata.attributes = parseArrayAttributes(externalMetadata.properties)
        }
    }
    if (externalMetadata?.attributes && typeof externalMetadata.attributes === 'object') {
        metadata.attributes = parseObjectProperties(externalMetadata.attributes)
        if (Array.isArray(externalMetadata.attributes)) {
            metadata.attributes = parseArrayAttributes(externalMetadata.attributes)
        }
    }

    if (attribute.key === 'name') {
        metadata.name = attribute.value
    } else if (attribute.key === 'description') {
        metadata.description = attribute.value
    } else if (attribute.key === 'fallback_image') {
        metadata.fallbackImage = attribute.value
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

    return metadata
}
