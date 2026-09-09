import { connectionManager } from '~/contexts'
import { Collection, Token, TokenCapSingleMint } from '~/model'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'
import { TokenCapSupply } from '~/model/generated/_tokenCapSupply'
import { CapType } from '~/model/generated/_capType'
import { FinalizedTokenStorageReader } from './token-storage-reader'

function getCapType(capSupply: string, capType: string) {
    if (capType === 'supply') {
        return new TokenCapSupply({
            type: CapType.Supply,
            supply: BigInt(capSupply),
        })
    }

    return new TokenCapSingleMint({
        type: CapType.SingleMint,
        supply: BigInt(capSupply),
    })
}

export async function computeTokenSupply(job: Job, tokenId: string) {
    const em = await connectionManager()
    const { api } = await Rpc.getInstance()

    await job.updateProgress(10)

    const token = await em
        .getRepository(Token)
        .createQueryBuilder('token')
        .select('token.id')
        .addSelect('token.tokenId')
        .addSelect('token.cap')
        .innerJoinAndMapOne('token.collection', Collection, 'collection', 'token.collection = collection.id')
        .where('token.id = :tokenId', { tokenId })
        .getOne()

    await job.updateProgress(30)

    if (!token) {
        await job.log(`Token ${tokenId} not found`)
        await job.updateProgress(100)
        return
    }

    const storage = await FinalizedTokenStorageReader.create(api)
    const rpcToken = await storage.token(BigInt(token.collection.id), token.tokenId)

    await job.updateProgress(60)

    if (!rpcToken) {
        await job.log(`RPC token ${tokenId} not found`)
        await job.updateProgress(100)
        return
    }

    if (rpcToken.cap) {
        if (rpcToken.cap.__kind === 'CollapsingSupply') {
            token.cap = getCapType(rpcToken.cap.value.toString(), 'collapsingSupply')
        } else if (rpcToken.cap.__kind === 'Supply') {
            token.cap = getCapType(rpcToken.cap.value.toString(), 'supply')
        }
    } else {
        await job.log(`Token ${tokenId} cap not found`)
    }

    await job.updateProgress(80)

    await em.save(Token, token)

    await job.log(`Token ${tokenId} with cap ${token.cap?.type} and supply ${token.cap?.supply} saved`)
    await job.updateProgress(100)
}
