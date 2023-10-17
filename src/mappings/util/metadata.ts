import Axios from 'axios'
import https from 'https'
import { safeString } from '../../common/tools'
import { Attribute, Metadata, MetadataMedia } from '../../model'

type Media = {
    url: string
    type: string
    alt: string
}

export async function fetchMetadata(url: string) {
    const api = Axios.create({
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
            'accept-encoding': 'gzip;q=0,deflate,sdch',
        },
        withCredentials: false,
        timeout: 5000,
        httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false }),
    })

    try {
        const { status, data } = await api.get(url)
        if (status < 400) {
            return data
        }
    } catch (e) {
        return null
    }

    return null
}

function parseMedia(value: string | Media[]) {
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
        return null
    } catch (e) {
        return null
    }
}

function parseObjectProperties(value: object) {
    const properties: any = {}

    // eslint-disable-next-line no-restricted-syntax
    for (const [k, v] of Object.entries(value)) {
        if (typeof v === 'object') {
            properties[k] = v
        } else {
            properties[k] = {
                value: v,
            }
        }
    }

    return properties
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
        if (key && attr.value) {
            obj[key] = { ...attr, type: attr.display_type ?? attr.type ?? undefined }
        }
    })
    return obj
}

// eslint-disable-next-line sonarjs/cognitive-complexity
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
        properties: unknown
        attributes: unknown
    } | null
) {
    if (externalMetadata?.name) {
        metadata.name = safeString(externalMetadata.name)
    }
    if (externalMetadata?.description) {
        metadata.description = safeString(externalMetadata.description)
    }
    if (externalMetadata?.external_url) {
        metadata.externalUrl = safeString(externalMetadata.external_url)
    }
    if (externalMetadata?.image) {
        metadata.fallbackImage = safeString(externalMetadata.image)
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
        } catch (e) {
            /* empty */
        }
    }

    return metadata
}
