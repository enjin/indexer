import axios from 'axios'
import config from '../../config'

const addressesQuery = `query AddressesQuery($ids: [String!]) {
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
    try {
        if (!config.shouldFetchAccounts) {
            return ids.map(() => null)
        }
        const { data } = await axios.post<{ data: { result: AddressVerification[] } } | { errors: any }>(
            `${config.marketplaceUrl}/graphql/internal`,
            {
                query: addressesQuery,
                variables: {
                    ids,
                },
            }
        )

        if ('errors' in data) throw new Error(JSON.stringify(data.errors[0]))
        return ids.map((id) => {
            const account = data.data.result.find((i) => i.publicKey === id)
            if (!account) return null
            return {
                publicKey: id,
                username: account.username || null,
                image: account.image || null,
                verifiedAt: account.verified ? new Date(account.verifiedDate) : null,
            }
        })
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error: Fetching account details', ids, error)
        return ids.map(() => null)
    }
}
