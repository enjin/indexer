import { UnknownVersionError } from '../../common/errors'
import { decodeId, encodeId } from '../../common/helpers'
import { SystemAccountStorage } from '../../types/generated/storage'
import { StorageContext } from '../../types/generated/support'
import { AccountInfo } from '../../types/generated/v1'

async function getStorageData(
    ctx: StorageContext,
    accounts: Uint8Array[]
): Promise<(AccountInfo | undefined)[] | undefined> {
    const storage = new SystemAccountStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV1) {
        return await storage.getManyAsV1(accounts)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export const account = {
    get: async (ctx: StorageContext, account: string) => {
        const u8 = decodeId(account)

        const data = await getStorageData(ctx, [u8])
        if (!data || !data[0]) return undefined

        return [{ [account]: data[0] }]
    },
    getMany: async (ctx: StorageContext, accounts: string[]) => {
        if (accounts.length === 0) return {}

        const u8s = accounts.map((a) => decodeId(a))

        const data = await getStorageData(ctx, u8s)
        if (!data) return {}

        const infos: { [account: string]: AccountInfo | undefined } = {}
        accounts.forEach((a, i) => (infos[a] = data[i]))

        return infos
    },
}
