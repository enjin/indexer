import { DataSource } from 'typeorm'
import { createOrmConfig } from '@subsquid/typeorm-config'

const cfg: any = createOrmConfig({})
const con = new DataSource({
    ...cfg,
    poolSize: 35,
    pool: {
        max: 50,
    },
})

export default con
