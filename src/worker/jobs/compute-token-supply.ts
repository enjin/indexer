import { connectionManager } from '~/contexts'
import { Collection, Token, TokenCapSingleMint } from '~/model'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'
import { TokenCapSupply } from '~/model/generated/_tokenCapSupply'
import { CapType } from '~/model/generated/_capType'

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

    const token = await em
        .getRepository(Token)
        .createQueryBuilder('token')
        .select('token.id')
        .addSelect('token.tokenId')
        .addSelect('token.cap')
        .innerJoinAndMapOne('token.collection', Collection, 'collection', 'token.collection = collection.id')
        .where('token.id = :tokenId', { tokenId })
        .getOne()

    if (!token) {
        await job.log(`Token ${tokenId} not found`)
        return
    }

    const rpcToken = await api.query.multiTokens.tokens(token.collection.id, token.tokenId)
    const rpcTokenJson: any = rpcToken.toJSON()
    if (!rpcTokenJson) {
        await job.log(`RPC token ${tokenId} not found`)
        return
    }

    if (rpcTokenJson.cap) {
        if (rpcTokenJson.cap.collapsingSupply) {
            token.cap = getCapType(rpcTokenJson.cap.collapsingSupply, 'collapsingSupply')
        } else if (rpcTokenJson.cap.supply) {
            token.cap = getCapType(rpcTokenJson.cap.supply, 'supply')
        }
    } else {
        await job.log(`Token ${tokenId} cap not found`)
    }

    await em.save(Token, token)

    await job.log(`Token ${tokenId} with cap ${token.cap?.type} and supply ${token.cap?.supply} saved`)
}
