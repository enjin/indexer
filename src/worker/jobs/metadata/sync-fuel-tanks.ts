import { FuelTank } from '~/model'
import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'

export async function syncFuelTanks(job: Job) {
    const em = await connectionManager()
    const { api } = await Rpc.getInstance()

    await job.updateProgress(10)

    const fuelTanks = await em.find(FuelTank, {
        select: ['id', 'coveragePolicy', 'tankAccount'],
        relations: {
            tankAccount: true,
        },
    })

    await job.updateProgress(30)

    const totalTanks = fuelTanks.length
    let processed = 0

    for (const fuelTank of fuelTanks) {
        const fuelTankRPC = await api.query.fuelTanks.tanks(fuelTank.tankAccount.address)
        const fuelTankJson: any = fuelTankRPC.toJSON()

        await job.log(`Fuel tank (${fuelTank.tankAccount.address}) coverage: ${fuelTankJson.coveragePolicy}`)
        if (fuelTankJson.coveragePolicy) {
            fuelTank.coveragePolicy = fuelTankJson.coveragePolicy.toString()

            await em.save(fuelTank)
        }

        processed++
        // Update progress (30% -> 90%)
        const progress = Math.min(90, 30 + Math.floor((processed / totalTanks) * 60))
        await job.updateProgress(progress)
    }

    await job.log(`Fuel tanks saved`)
    await job.updateProgress(100)
}
