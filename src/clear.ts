import { DataSource } from 'typeorm'
import { createOrmConfig } from '@subsquid/typeorm-config'

const cfg: any = createOrmConfig()

export const clearDatabase = async () => {
    const con = new DataSource({ ...cfg, poolSize: 200, pool: { max: 100 } })
    const entities = con.entityMetadatas

    for await (const entity of entities) {
        const repository = con.getRepository(entity.name)

        await repository.query(`TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE;`)
    }
}
