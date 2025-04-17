import { connectionManager } from '../../contexts'

export async function deleteTraits(tokenId: string) {
    const con = await connectionManager()
    await con.query(`DELETE FROM trait_token WHERE token_id = $1`, [tokenId])
    await con.query(`DELETE FROM token_rarity WHERE token_id = $1`, [tokenId])
}
