import { Attribute, Metadata, MetadataMedia } from '../../model'
import Axios from 'axios'
import https from 'https'

export async function getMetadata(metadata: Metadata, attribute: Attribute): Promise<Metadata>  {
    return processMetadata(metadata, attribute)
}

async function processMetadata(metadata: Metadata, attribute: Attribute) {
    if ('uri' === attribute.key) {
        metadata.externalUrl = attribute.value
        const externalMetadata = await fetchMetadata(attribute.value)
        return metadataParser(metadata, attribute, externalMetadata)
    }

    return metadataParser(metadata, attribute, null)
}

function metadataParser(metadata: Metadata, attribute: Attribute, externalMetadata: any) {
    if (externalMetadata?.name) {
        metadata.name = externalMetadata.name
    }
    if (externalMetadata?.description) {
        metadata.description = externalMetadata.description
    }
    if (externalMetadata?.fallback_image) {
        metadata.fallbackImage = externalMetadata.fallback_image
    }
    if (externalMetadata?.media) {
        metadata.media = parseMedia(externalMetadata.media)
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

function parseMedia(media: any)
{
    try {
        return media.map(
            (media: any) => new MetadataMedia({
                url: media.url,
                type: media.type,
                alt: media.alt,
            })
        )
    } catch (e) {
        return null
    }
}

async function fetchMetadata(url: string) {
    const api = Axios.create({
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: false,
        timeout: 5000,
        httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false}),
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
