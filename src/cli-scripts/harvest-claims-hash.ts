import axios from 'axios'
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()

const INDEXER_URL = process.env.INDEXER_URL || 'https://blockchain-matrix-indexer.prod.enjops.com'

const QUERY = `query MyQuery($offset: Int) {
    events(orderBy: id_ASC,limit:100, offset:$offset, where: {data: {isTypeOf_eq: "ClaimsClaimRequested"}}) {
      extrinsic{
        hash
      }
      data{
        ... on ClaimsClaimRequested{
          hash
        }
      }
    }
  }
  `

const fetchClaims = async (offset: number) => {
    const { data } = await axios.post(`${INDEXER_URL}/graphql`, {
        query: QUERY,
        variables: {
            offset,
        },
    })

    return data.data.events.map((event: any) => ({ ethHash: event.data.hash, extrinsicHash: event.extrinsic.hash }))
}

async function main() {
    let offset = 0
    let allClaims: any[] = []
    let claims = await fetchClaims(offset)
    while (claims.length > 0) {
        allClaims = allClaims.concat(claims)
        offset += 100
        // eslint-disable-next-line no-await-in-loop
        claims = await fetchClaims(offset)
    }

    console.log(`Found ${allClaims.length} claims`)

    // write to csv file
    const csv = allClaims.map((claim) => `${claim.ethHash},${claim.extrinsicHash}`).join('\n')
    // add header
    fs.writeFileSync('claims.csv', `ethHash,extrinsicHash\n${csv}`)
}

main()
