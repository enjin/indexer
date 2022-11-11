import Axios from 'axios'
import https from 'https'
import { Attribute, Metadata, MetadataMedia } from '../../model'

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

function parseMedia(media: any) {
    try {
        return media.map(
            (_media: any) =>
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

function parseArrayAttributes(attributes: any[]) {
    const obj = {} as any
    attributes.forEach((attr) => {
        let key = null
        if (attr.key) {
            key = 'key'
        }
        if (attr.name) {
            key = 'name'
        }
        if (attr.trait_type) {
            key = 'trait_type'
        }
        if (key && attr.value) {
            obj[key] = { value: attr.value, display_value: attr.display_value ?? undefined }
        }
    })
    return obj
}

function metadataParser(metadata: Metadata, attribute: Attribute, externalMetadata: any | null) {
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
        metadata.media = parseMedia(externalMetadata.media)
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
    } else if (['image', 'imageUrl', 'media', 'mediaUrl'].includes(attribute.key)) {
        metadata.media = parseMedia(attribute.value)
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

// function fetchMetadata(url: string): Promise<string> {
//     return new Promise((resolve, reject) => {
//         url = url.replace('https', 'http')
//         const cacheableRequest = CacheableRequest(http.request) as any
//         const cacheReq = cacheableRequest(url, async (response: any) => {
//             let rawData = ''
//             response.on('data', (chunk: any) => { rawData += chunk })
//             response.on('end', () => {
//                 try {
//                     resolve(rawData)
//                 } catch (e) {
//                     reject(e)
//                 }
//             })
//         }).on('request', (req: any) => req.end())
//     })
// }
