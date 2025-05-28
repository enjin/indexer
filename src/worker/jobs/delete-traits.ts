import { connectionManager } from '../../contexts'
import { Job } from 'bullmq'

export async function deleteTraits(_job: Job, tokenId: string) {
    const con = await connectionManager()
    await con.query(`DELETE FROM trait_token WHERE token_id = $1`, [tokenId])
    await con.query(`DELETE FROM token_rarity WHERE token_id = $1`, [tokenId])
}
