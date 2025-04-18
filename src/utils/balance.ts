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

export async function fetchBalances(ids: string[]): Promise<SystemAccount[]> {
    const accounts: SystemAccount[] = []
    const api = Rpc.getInstance().client.getUnsafeApi()

    // We could use a multi query but that would be error-prone
    for (const id of ids) {
        const {
            nonce,
            data: { free, reserved, frozen },
        } = await api.query.System.Account.getValue(id)
        accounts.push({
            address: id,
            nonce: nonce,
            balance: {
                free: `0x${free.toString(16)}`,
                reserved: `0x${reserved.toString(16)}`,
                frozen: `0x${frozen.toString(16)}`,
            },
        })
    }

    return accounts
}
