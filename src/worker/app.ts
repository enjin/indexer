import express, { Request, Response, Application } from 'express'
import { BalancesQueue, JobsEnum } from './queue'

const app: Application = express()

app.get('/', (req: Request, res: Response): void => {
    void BalancesQueue.add(JobsEnum.FETCH_BALANCES, {})
    res.send('OK')
})

export default app
