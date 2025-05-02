import { DataService } from '../util/data'
import process from 'node:process'

async function main(): Promise<void> {
    const dataService = DataService.getInstance()
    await dataService.initialize()

    if (process.env.TRUNCATE_DATABASE ?? false) {
        await dataService.dropAllTables()
        process.exit(1)
    }
}

void main()
    .catch((e: unknown) => {
        console.log(e)
    })
    .then(() => {
        console.log('Finished cleaning the database.')
    })
    .finally(() => process.exit(0))
