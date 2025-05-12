import Rpc from './rpc'
import { HexString } from '@polkadot/util/types'

export interface SystemAccount {
    address: string
    nonce: number
    balance: {
        free: HexString
        reserved: HexString
        frozen: HexString
    }
}

export async function fetchAllBalances(): Promise<SystemAccount[]> {
    const accounts: SystemAccount[] = []
    const { api } = await Rpc.getInstance()

    const balances = await api.query.system.account.entries()
    for (const [key, value] of balances) {
        const balance = api.createType('FrameSystemAccountInfo', value)
        if (!balance) {
            continue
        }

        accounts.push({
            address: key.args[0].toString(),
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
