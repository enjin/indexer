import axios from 'axios'
import processorConfig from '~/util/config'
import { isMainnet } from '~/util/tools'

const addressesQuery = `query AddressesQuery($ids: [String!]) {
    result: AddressesVerification(publicKeys:$ids){
      publicKey
      username
      image
      verified
      verifiedDate
    }
  }`

const collectionsQuery = `query CollectionsQuery($ids: [String!]) {
    result: CollectionsExtra(collectionIds:$ids){
      collectionId
      hidden
      hiddenForLegalReasons
      category
      featured
      verifiedAt
      twitter
      discord
      instagram
      website
      medium
      tiktok
    }
  }`

type AddressVerification = {
    username?: string
    publicKey: string
    image?: string
    verified: boolean
    verifiedDate: string
}

type CollectionExtra = {
    collectionId: string
    hidden: boolean
    hiddenForLegalReasons: boolean
    category: string | null
    featured: boolean
    verifiedAt: string | null
    twitter: string | null
    discord: string | null
    instagram: string | null
    website: string | null
    medium: string | null
    tiktok: string | null
}

export async function fetchAccountsDetail(ids: string[]) {
    const response = await axios.post<{ data: { result: AddressVerification[] } } | { errors: string }>(
        isMainnet() ? processorConfig.marketplace.prod : processorConfig.marketplace.stg,
        {
            query: addressesQuery,
            variables: {
                ids,
            },
        },
        {
            headers: {
                Accept: 'application/json',
                'X-Network': isMainnet() ? 'enjin' : 'canary',
                'CF-Access-Client-Id': process.env.CF_ACCESS_CLIENT_ID,
                'CF-Access-Client-Secret': process.env.CF_ACCESS_CLIENT_SECRET,
            },
        }
    )

    if ('errors' in response.data) {
        throw new Error(JSON.stringify(response.data.errors[0]))
    }

    if (response.data.data.result.length === 0) {
        throw new Error('No data returned')
    }

    const accounts = response.data.data

    return ids.map((id) => {
        const account = accounts.result.find((i) => i.publicKey === id)
        if (!account) return null

        return {
            publicKey: id,
            username: account.username || null,
            image: account.image || null,
            verifiedAt: account.verified ? new Date(account.verifiedDate) : null,
        }
    })
}

export async function fetchCollectionsExtra(ids: string[]) {
    const response = await axios.post<{ data: { result: CollectionExtra[] } } | { errors: string }>(
        isMainnet() ? processorConfig.marketplace.prod : processorConfig.marketplace.stg,
        {
            query: collectionsQuery,
            variables: {
                ids,
            },
        },
        {
            headers: {
                Accept: 'application/json',
                'X-Network': isMainnet() ? 'enjin' : 'canary',
                'CF-Access-Client-Id': process.env.CF_ACCESS_CLIENT_ID,
                'CF-Access-Client-Secret': process.env.CF_ACCESS_CLIENT_SECRET,
            },
        }
    )

    if ('errors' in response.data) {
        throw new Error(response.data.errors)
    }

    return response.data.data.result
}
