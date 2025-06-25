import { FuelTank } from '../../model'
import { connectionManager } from '../../contexts'
import { Job } from 'bullmq'
import Rpc from '../../util/rpc'

export async function syncFuelTanks(job: Job) {
    const em = await connectionManager()
    const { api } = await Rpc.getInstance()

    const fuelTanks = await em.find(FuelTank, {
        select: ['id', 'coveragePolicy', 'tankAccount'],
        relations: {
            tankAccount: true,
        },
    })

    for (const fuelTank of fuelTanks) {
        const fuelTankRPC = await api.query.fuelTanks.tanks(fuelTank.tankAccount.address)
        const fuelTankJson: any = fuelTankRPC.toJSON()

        await job.log(`Fuel tank (${fuelTank.tankAccount.address}) coverage: ${fuelTankJson.coverage}`)
        if (fuelTankJson.coverage) {
            fuelTank.coveragePolicy = fuelTankJson.coverage.toString()

            await em.save(fuelTank)
        }
    }

    await job.log(`Fuel tanks saved`)
}
