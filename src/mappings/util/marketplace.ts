import axios from 'axios'
import config from '../../config'

const addressesQuery = `query AddressesQuery($ids: [String]) {
    result: AddressesVerification(publicKeys:$ids){
      publicKey
      username
      image
      verified
      verifiedDate
    }
  }`

export type AddressVerification = {
    username?: string
    publicKey: string
    image?: string
    verified: boolean
    verifiedDate: string
}
export async function fetchAccountsDetail(ids: string[]) {
    const { data } = await axios.post<{ result: AddressVerification[] }>(`${config.marketplaceUrl}/graphiql/internal`, {
        query: addressesQuery,
        variables: {
            ids,
        },
    })
    return ids.map((id) => {
        const account = data.result.find((i) => i.publicKey === id)
        if (!account) return null
        return {
            publicKey: id,
            username: account.username || null,
            image: account.image || null,
            verifiedAt: account.verified ? new Date(account.verifiedDate) : null,
        }
    })
}
