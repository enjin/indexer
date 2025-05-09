import { DataService } from '../util/data'
import config from '../util/config'
;(async function clearDatabase() {
    try {
        const dataService = DataService.getInstance()
        await dataService.initialize()

        if (config.truncateDatabase) {
            console.log('Truncating database...')
            await dataService.dropAllTables()
            process.exit(0)
        } else {
            console.log('Database truncation skipped - TRUNCATE_DATABASE flag not set')
            process.exit(1)
        }
    } catch (error) {
        console.error('Error during database truncation:', error)
        process.exit(1)
    }
})().catch((err: unknown) => {
    console.error('Unhandled error in clear script:', err)
    process.exit(1)
})
