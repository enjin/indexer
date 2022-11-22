import Axios from 'axios'
import https from 'https'
import { Attribute, Metadata, MetadataMedia } from '../../model'

type Media = {
    url: string
    type: string
    alt: string
}

async function fetchMetadata(url: string) {
    const api = Axios.create({
        headers: {
            'Content-Type': 'application/json',
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

function parseMedia(value: string | Media) {
    try {
        const media = typeof value === 'string' ? JSON.parse(value) : value
        return media.map(
            (_media: Media) =>
                new MetadataMedia({
                    url: _media.url,
                    type: _media.type,
                    alt: _media.alt,
                })
        )
    } catch (e) {
        return null
    }
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

function metadataParser(
    metadata: Metadata,
    attribute: Attribute,
    externalMetadata: {
        name: string | null | undefined
        description: string | null | undefined
        external_url: string | null | undefined
        fallback_image: string | null | undefined
        media: Media[]
        attributes: unknown
    } | null
) {
    if (externalMetadata?.name) {
        metadata.name = externalMetadata.name
    }
    if (externalMetadata?.description) {
        metadata.description = externalMetadata.description
    }
    if (externalMetadata?.external_url) {
        metadata.externalUrl = externalMetadata.external_url
    }
    if (externalMetadata?.fallback_image) {
        metadata.fallbackImage = externalMetadata.fallback_image
    }
    if (externalMetadata?.media) {
        metadata.media = parseMedia(externalMetadata.media as unknown as string | Media)
    }
    if (externalMetadata?.attributes && typeof externalMetadata.attributes === 'object') {
        metadata.attributes = externalMetadata.attributes
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
        const attributes = JSON.parse(attribute.value)
        if (typeof attributes === 'object') {
            metadata.attributes = attributes
            if (Array.isArray(attributes)) {
                metadata.attributes = parseArrayAttributes(attributes)
            }
        }
    }

    return metadata
}

async function processMetadata(metadata: Metadata, attribute: Attribute) {
    if (attribute.key === 'uri') {
        const externalMetadata = await fetchMetadata(attribute.value)
        return metadataParser(metadata, attribute, externalMetadata)
    }

    return metadataParser(metadata, attribute, null)
}

export async function getMetadata(metadata: Metadata, attribute: Attribute): Promise<Metadata> {
    return processMetadata(metadata, attribute)
}
