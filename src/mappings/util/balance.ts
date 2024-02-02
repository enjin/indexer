import Rpc from '../../common/rpc'

export interface SystemAccount {
    address: string
    nonce: number
    balance: {
        free: string
        reserved: string
        frozen: string
    }
}

export async function fetchBalances(ids: string[]): Promise<SystemAccount[]> {
    const accounts: SystemAccount[] = []
    const { api } = await Rpc.getInstance()

    // We could use a multi query but that would be error prone
    // eslint-disable-next-line no-restricted-syntax
    for (const id of ids) {
        // eslint-disable-next-line no-await-in-loop
        const balance = await api.query.system.account(id)
        accounts.push({
            address: id,
            nonce: balance.nonce.toNumber(),
            balance: {
                free: balance.data.free.toHex(),
                reserved: balance.data.reserved.toHex(),
                frozen: balance.data.frozen.toHex(),
            },
        })
    }

    return accounts
}
