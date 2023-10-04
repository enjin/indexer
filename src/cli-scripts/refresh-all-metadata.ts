import axios from 'axios'

const COLLECTION_QUERY = `query Collections($offset: Int) {
    collections(limit:10, offset:$offset,orderBy:id_ASC){
          id
    }
  }`

const TOKEN_QUERY = `query Tokens($offset: Int, $collectionId: BigInt ) {
    tokens(limit:1000, offset:$offset,orderBy:id_ASC, where:{collection:{
      collectionId_eq: $collectionId
    }}){
          tokenId
    }
  }`

const REFRESH_METADATA_QUERY = `query RefreshMetadata($collectionId: String!, $tokenId: BigInt) {
    refreshMetadata(collectionId: $collectionId, tokenId: $tokenId) {
      error
    }
  }`

const INDEXER_URL = 'http://3.143.198.202'

const fetchCollections = async (offset: number) => {
    const { data } = await axios.post(`${INDEXER_URL}/graphql`, {
        query: COLLECTION_QUERY,
        variables: {
            offset,
        },
    })

    return data
}

const fetchTokens = async (collectionId: string, offset: number) => {
    const { data } = await axios.post(`${INDEXER_URL}/graphql`, {
        query: TOKEN_QUERY,
        variables: {
            offset,
            collectionId,
        },
    })

    return data
}

const refreshMetadata = async (collectionId: string, tokenId?: string) => {
    const { data } = await axios.post(`${INDEXER_URL}/graphql`, {
        query: REFRESH_METADATA_QUERY,
        variables: {
            collectionId,
            tokenId,
        },
    })

    return data
}

async function main() {
    // fetch all collections and fetch all their tokens
    let offset = 70
    let data = await fetchCollections(offset)
    let { collections } = data.data
    while (collections.length > 0) {
        offset += 10
        // eslint-disable-next-line no-await-in-loop
        await Promise.all(
            collections.map(async (collection: any) => {
                console.log(`Fetching tokens for collection ${collection.id}`)
                refreshMetadata(collection.id)

                if (collection.id === '2095') {
                    // ignore enix collection
                    return
                }

                let tokenOffset = 0
                let tokenData = await fetchTokens(collection.id, tokenOffset)

                let { tokens } = tokenData.data
                while (tokens.length > 0) {
                    tokenOffset += 1000
                    // eslint-disable-next-line no-await-in-loop
                    tokenData = await fetchTokens(collection.id, tokenOffset)
                    tokens = tokenData.data.tokens

                    tokens.forEach(async (token: any) => {
                        await refreshMetadata(collection.id, token.tokenId)
                    })
                }
            })
        )

        console.log(`Fetching collections from offset ${offset}`)

        // eslint-disable-next-line no-await-in-loop
        data = await fetchCollections(offset)
        collections = data.data.collections
    }
}

const processEnix = async () => {
    const collectionId = '2095'
    refreshMetadata(collectionId)
    console.log('processin enix metadata...')
    let tokenOffset = 0
    let tokenData = await fetchTokens(collectionId, tokenOffset)

    let { tokens } = tokenData.data
    while (tokens.length > 0) {
        tokenOffset += 1000
        // eslint-disable-next-line no-await-in-loop
        tokenData = await fetchTokens(collectionId, tokenOffset)
        tokens = tokenData.data.tokens

        tokens.forEach(async (token: any) => {
            await refreshMetadata(collectionId, token.tokenId)
        })
    }
}

if (process.argv[2] === 'enix') {
    processEnix()
} else {
    main()
}
