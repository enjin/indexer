import { DataSource } from 'typeorm'
import { createOrmConfig } from '@subsquid/typeorm-config'

const cfg = createOrmConfig()
const con = new DataSource(cfg)

con.initialize().catch((e) => {
    throw e
})

export default con
