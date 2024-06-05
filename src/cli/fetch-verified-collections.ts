import axios from 'axios'
import fs from 'fs'

const url = `https://blockchain-matrix-indexer.prod.enjops.com/graphql`

const VERIFIED_USER_QUERY = `query VerifiedUserQuery {
    accounts(where: {verifiedAt_isNull: false}) {
      id
      verifiedAt
    }
  }
  `

const COLLECTIONS_QUERY = `query VerifiedCollection($owner: String) {  
    collections(where:{
      owner: {id_eq: $owner}
    }){
       id
    }
  }`

async function main() {
    const verifiedUsers = await axios.post(url, {
        query: VERIFIED_USER_QUERY,
    })

    const collections = await Promise.all(
        verifiedUsers.data.data.accounts.map(async (account: any) => {
            const collectionsInner = await axios.post(url, {
                query: COLLECTIONS_QUERY,
                variables: {
                    owner: account.id,
                },
            })

            return { collections: collectionsInner.data.data.collections, ...account }
        })
    )

    let output = ''

    collections.forEach((collection: any) => {
        if (collection.collections.length > 0) {
            output += `DB::table("collection_extras")->whereIn('collection_id', [${collection.collections.map((c: any) => c.id).join(',')}])->update(['verified_at' => Carbon::parse('${collection.verifiedAt}')]); //${collection.id} \n`
        }
    })

    console.log(output)
}

main()
