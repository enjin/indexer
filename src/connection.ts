import { DataSource } from 'typeorm'
import { createOrmConfig } from '@subsquid/typeorm-config'

const cfg: any = createOrmConfig()
const con = new DataSource(cfg)

export default con
