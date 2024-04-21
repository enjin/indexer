import { DataSource } from 'typeorm'
import { createOrmConfig } from '@subsquid/typeorm-config'

const cfg: any = createOrmConfig()
const con = new DataSource({ ...cfg, poolSize: 200, pool: { max: 100 } })

export default con

export const getConnection = async () => {
    if (!con.isInitialized) {
        await con.initialize().catch((err) => {
            throw err
        })
    }

    return con
}
