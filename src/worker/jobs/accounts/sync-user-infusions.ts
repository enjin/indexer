import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import { Account, Event, Token, UserInfusion } from '~/model'
import { In } from 'typeorm'

interface InfusionEventData {
    accountId: string
    collectionId: string
    tokenId: string
    amount: string
}

export async function syncUserInfusions(job: Job) {
    const em = await connectionManager()
    const batchSize = 500

    await job.updateProgress(5)

    // Query all MultiTokensInfused events
    const totalEvents = await em.count(Event, {
        where: {
            name: 'MultiTokensInfused',
        },
    })

    await job.log(`Found ${totalEvents} MultiTokensInfused events to process`)
    await job.updateProgress(10)

    let processedCount = 0
    let createdCount = 0
    let updatedCount = 0
    let skippedCount = 0
    let errorCount = 0

    // Process events in batches
    for (let offset = 0; offset < totalEvents; offset += batchSize) {
        const events = await em.find(Event, {
            where: {
                name: 'MultiTokensInfused',
            },
            skip: offset,
            take: batchSize,
        })

        // Map to aggregate amounts for the same user-token pair
        const infusionMap = new Map<string, { accountId: string; tokenId: string; amount: bigint }>()
        const accountIds: string[] = []
        const tokenIds: string[] = []

        // Extract and aggregate data from events
        for (const event of events) {
            try {
                if (!event.data || event.data.isTypeOf !== 'MultiTokensInfused') {
                    skippedCount++
                    continue
                }

                const data = event.data as any
                const accountId = data.accountId
                const tokenId = event.tokenId
                const amount = BigInt(data.amount)

                if (!accountId || !tokenId) {
                    skippedCount++
                    continue
                }

                const userInfusionId = `${accountId}-${tokenId}`

                // Aggregate amounts for the same user-token pair
                if (infusionMap.has(userInfusionId)) {
                    const existing = infusionMap.get(userInfusionId)!
                    existing.amount += amount
                } else {
                    infusionMap.set(userInfusionId, {
                        accountId,
                        tokenId,
                        amount,
                    })
                    accountIds.push(accountId)
                    tokenIds.push(tokenId)
                }
            } catch (error) {
                await job.log(`Error processing event ${event.id}: ${error}`)
                errorCount++
            }
        }

        // Fetch all required accounts, tokens, and existing infusions in bulk
        const [accounts, tokens, existingInfusions] = await Promise.all([
            em.find(Account, {
                where: {
                    id: In([...new Set(accountIds)]),
                },
            }),
            em.find(Token, {
                where: {
                    id: In([...new Set(tokenIds)]),
                },
            }),
            em.find(UserInfusion, {
                where: {
                    id: In([...infusionMap.keys()]),
                },
            }),
        ])

        // Create maps for quick lookup
        const accountMap = new Map(accounts.map((a) => [a.id, a]))
        const tokenMap = new Map(tokens.map((t) => [t.id, t]))
        const existingInfusionMap = new Map(existingInfusions.map((ui) => [ui.id, ui]))

        // Create or update UserInfusion entities
        const entitiesToSave: UserInfusion[] = []

        for (const [userInfusionId, infusionData] of infusionMap) {
            try {
                const account = accountMap.get(infusionData.accountId)
                const token = tokenMap.get(infusionData.tokenId)

                if (!account || !token) {
                    skippedCount++
                    continue
                }

                const existingInfusion = existingInfusionMap.get(userInfusionId)

                if (existingInfusion) {
                    // Update existing - set to the amount
                    existingInfusion.amount = infusionData.amount
                    entitiesToSave.push(existingInfusion)
                    updatedCount++
                } else {
                    // Create new
                    const userInfusion = new UserInfusion({
                        id: userInfusionId,
                        account,
                        token,
                        amount: infusionData.amount,
                    })
                    entitiesToSave.push(userInfusion)
                    createdCount++
                }
            } catch (error) {
                await job.log(`Error processing UserInfusion ${userInfusionId}: ${error}`)
                errorCount++
            }
        }

        // Save in batch
        if (entitiesToSave.length > 0) {
            try {
                await em.save(UserInfusion, entitiesToSave)
            } catch (error) {
                await job.log(`Error saving batch: ${error}`)
                errorCount += entitiesToSave.length
            }
        }

        processedCount += events.length

        // Update progress
        const progress = 10 + Math.floor((processedCount / totalEvents) * 85)
        await job.updateProgress(progress)

        await job.log(
            `Processed ${processedCount}/${totalEvents} events | Created: ${createdCount} | Updated: ${updatedCount} | Skipped: ${skippedCount} | Errors: ${errorCount}`
        )
    }

    await job.log(`Sync completed:`)
    await job.log(`  Total events: ${totalEvents}`)
    await job.log(`  Processed: ${processedCount}`)
    await job.log(`  Created: ${createdCount}`)
    await job.log(`  Updated: ${updatedCount}`)
    await job.log(`  Skipped: ${skippedCount}`)
    await job.log(`  Errors: ${errorCount}`)

    await job.updateProgress(100)
}
