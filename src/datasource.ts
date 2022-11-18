import { createOrmConfig } from '@subsquid/typeorm-config'
import { DataSource } from 'typeorm'

const datasource = new DataSource(createOrmConfig())

export default datasource
