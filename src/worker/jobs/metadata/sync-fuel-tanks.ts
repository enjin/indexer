import { FuelTank } from '~/model'
import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'

export async function syncFuelTanks(job: Job) {
    try {
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
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        const errorStack = error instanceof Error ? error.stack : undefined

        await job.log(`Error in syncFuelTanks: ${errorMessage}`)
        if (errorStack) {
            await job.log(`Stack: ${errorStack}`)
        }

        throw new Error(`Failed to sync fuel tanks: ${errorMessage}`)
    }
}
