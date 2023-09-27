import { DataSource } from 'typeorm'
import { createOrmConfig } from '@subsquid/typeorm-config'

const cfg: any = createOrmConfig()
const con = new DataSource({ ...cfg, poolSize: 150, pool: { max: 150 } })

export default con
