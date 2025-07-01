import { connectionManager } from '~/contexts'
import { EntityManager } from 'typeorm'
import { Job } from 'bullmq'
import { ChainInfo, Identity, JudgementType, Registration, ScoreGrade, Validator } from '~/model'

function getJudgement(identity: Identity | null | undefined): JudgementType {
    if (identity === undefined || identity === null) return JudgementType.Unknown

    return identity.info.currentJudgement
}

export async function syncValidators(job: Job): Promise<void> {
    const em = await connectionManager()

    const validators = await em
        .getRepository(Validator)
        .createQueryBuilder('validator')
        .leftJoinAndSelect('validator.account', 'account')
        .getMany()

    const currentBlock = await em
        .getRepository(ChainInfo)
        .createQueryBuilder('chain_info')
        .orderBy('block_number', 'DESC')
        .getOneOrFail()

    if (!currentBlock) {
        throw new Error('No current block found')
    }

    const blocksInDay = 10 * 60 * 24
    const length28dBlock = currentBlock.blockNumber - 28 * blocksInDay

    for (let b = 0; b < 28; b++) {
        const fromBlock = length28dBlock + b * blocksInDay
        const toBlock = fromBlock + blocksInDay

        const validatorDetails = await getValidatorDetails(
            em,
            validators.map((v) => v.id),
            fromBlock,
            toBlock
        )
        const nodeCount = validatorDetails.filter((v) => v.producedBlocks24h > 0).length

        for (let i = 0; i < validators.length; i++) {
            try {
                const validator = validators[i]
                const details = validatorDetails.find((v) => v.id === validator.id)
                if (!details) {
                    continue
                }
                const otherValidators = validatorDetails.filter((v) => v.id !== validator.id && v.producedBlocks24h > 0)

                const peerCommission =
                    otherValidators.length > 0
                        ? // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                          otherValidators.reduce((sum, v) => sum + v.commission, 0) / otherValidators.length
                        : 0

                const peerAverageNominations =
                    otherValidators.length > 0
                        ? // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                          otherValidators.reduce((sum, v) => sum + v.nominatorsCount, 0) / otherValidators.length
                        : 0

                validator.commission28d = [...validator.commission28d, validator.commission ?? 0].slice(-28)
                validator.blockProduction28d = [...validator.blockProduction28d, details.producedBlocks24h].slice(-28)
                validator.slashes84d = [...validator.slashes84d, details.slashedBlocks84h ?? false].slice(-84)
                validator.nodeCount28d = [...validator.nodeCount28d, nodeCount].slice(-28)
                validator.peerCommission28d = [...validator.peerCommission28d, peerCommission].slice(-28)

                const score = computeValidatorScore({
                    nodeUptimePercentage: details.uptime30d,
                    nodeCountArray: validator.nodeCount28d,
                    blockProductionArray: validator.blockProduction28d,
                    commissionArray: validator.commission28d,
                    peerCommissionArray: validator.peerCommission28d,
                    numberOfNominations: details.nominatorsCount,
                    averagePeerNumberOfNominations: peerAverageNominations,
                    slashesArray: validator.slashes84d,
                    identity: getJudgement(validator.account.identity),
                })

                validator.grade = score != null ? ScoreGrade[score] : null
                await job.log(`Validator ${validator.id} score: ${score} from ${fromBlock} to ${toBlock}`)

                await em.save<Validator>(validator)
            } catch (error) {
                await job.log(`Error saving validator ${validators[i].id}: ${error}`)
            }
        }
    }

    await job.log(`Synced ${validators.length} validators`)
}

async function getValidatorDetails(
    em: EntityManager,
    ids: string[],
    fromBlock: number,
    toBlock: number
): Promise<Record<string, any>[]> {
    return await em
        .getRepository(Validator)
        .createQueryBuilder('validator')
        .leftJoin('validator.account', 'account')
        .leftJoin(Identity, 'identity', 'identity.account = account.id')
        .leftJoin(Registration, 'registration', 'registration.id = identity.id')
        .select([
            'validator.id as id',
            'validator.commission as commission',
            'account.address as address',
            'registration.image as image',
            "(CASE WHEN identity.isSub = FALSE THEN registration.display WHEN identity.isSub = TRUE THEN CONCAT(registration.display,'/',identity.name) ELSE NULL END) as name",
        ])
        .addSelect('100', 'uptime30d')
        .addSelect((subQuery) => {
            return subQuery
                .select('COUNT(*)::int')
                .from('pool_validator', 'pool_validator')
                .where('pool_validator.validator_id = validator.id')
        }, 'nominatorsCount')
        .addSelect((subquery) => {
            return subquery
                .select('COUNT(*)::int')
                .from('chain_info', 'chain_info')
                .where('chain_info.validator = validator.id')
                .andWhere('chain_info.block_number > :fromBlock', { fromBlock })
                .andWhere('chain_info.block_number < :toBlock', { toBlock })
        }, 'producedBlocks24h')
        .where('validator.id IN (:...ids)', { ids })
        .getRawMany()
}

/**
 * @note uptime should be based off of past 28 days.
 */
function calculateUptimeScore(uptime: number): number {
    if (uptime === 100) {
        return 25
    } else if (uptime >= 97) {
        return 25 * ((uptime - 97) / 3)
    }

    return 0
}

/**
 * @note nodeCountArray.length === blockProductionPercentageArray.length
 * @note length should be capped to past 28 days.
 */
function calculateBlockProductionScore(nodeCountArray: number[], blockProductionPercentageArray: number[]): number {
    let totalWeight = 0
    let blockProduction = 0

    for (let i = 0; i < nodeCountArray.length; i++) {
        // Most recent 7 days are weighted at double.
        const weight = i < 7 ? 2 : 1
        totalWeight += weight

        const expectedProduction = 100 / nodeCountArray[i] // Expected production
        const relativeProduction = blockProductionPercentageArray[i] / expectedProduction

        let multiplier = 1

        if (relativeProduction > 1.1) {
            multiplier = 1.05
        } else if (relativeProduction > 0.95) {
            multiplier = 1
        } else {
            multiplier = Math.min(relativeProduction, 0.95)
        }

        blockProduction += weight * multiplier
    }

    return 25 * (totalWeight > 0 ? blockProduction / totalWeight : 0)
}

/**
 @note commissionPercentageArray.length === peerCommissionPercentageArray.length
 @note length should be capped to past 28 days.
 */
function calculateCommissionScore(
    commissionPercentageArray: number[],
    peerCommissionPercentageArray: number[]
): number {
    let totalWeight = 0
    let commission = 0

    for (let i = 0; i < commissionPercentageArray.length; i++) {
        // Most recent 7 days are weighted at double.
        const weight = i < 7 ? 2 : 1
        totalWeight += weight

        const delta = commissionPercentageArray[i] - peerCommissionPercentageArray[i]

        let comm = 3 * (-delta / 30)
        if (delta > 0) {
            comm = -10 * Math.pow(Math.min(delta / 30, 1), 2)
        }

        commission += weight * comm
    }

    return 30 + (totalWeight > 0 ? commission / totalWeight : 0)
}

/**
 * @note this is calculated based on the latest (active) era worth of nominations.
 */
function calculateNominationsScore(numberOfNominations: number, averagePeerNumberOfNominations: number): number {
    let nominationsDelta =
        averagePeerNumberOfNominations > 0
            ? (numberOfNominations - averagePeerNumberOfNominations) / averagePeerNumberOfNominations
            : 0

    // @note: constrain (-1 to 1)
    nominationsDelta = Math.max(-1, Math.min(nominationsDelta, 1))

    // @note: constrain (0 - 12)
    return Math.max(0, Math.min(10 + 2 * nominationsDelta, 12))
}

/**
 * @note boolean array of (up to) past 84 eras for validator; index 0 is the most recent.
 */
function calculateSlashPenalty(slashesArray: boolean[]): {
    slashScore: number
    hasSlashInPast14Eras: boolean
    hasSlashInPast28Eras: boolean
} {
    let slashScore = 0
    let hasSlashInPast14Eras = false
    let hasSlashInPast28Eras = false

    for (let era = 0; era < slashesArray.length; era++) {
        if (slashesArray[era]) {
            if (era < 14) {
                hasSlashInPast14Eras = true
            }

            if (era < 28) {
                hasSlashInPast28Eras = true
            }

            if (era >= 13 && era < 27) {
                slashScore += 5 - (2 * (era - 15)) / 13
            } else if (era >= 27 && era < 55) {
                slashScore += 3 - (1.5 * (era - 29)) / 27
            } else if (era >= 55 && era < 84) {
                slashScore += 1.5 - (era - 57) / 27
            }
        }
    }

    return {
        slashScore,
        hasSlashInPast14Eras,
        hasSlashInPast28Eras,
    }
}

// identity : enum (NO_IDENTITY, UNKNOWN_IDENTITY, POSITIVE_IDENTITY, NEGATIVE_IDENTITY)
// note when implementing you can use the true identity enum and just handle it appropriately
function calculateIdentityAdjustment(identity: JudgementType): number {
    switch (identity) {
        case JudgementType.Unknown:
            return 1
        case JudgementType.KnownGood:
        case JudgementType.Reasonable:
            return 2
        case JudgementType.Erroneous:
            return -3
        default:
            return 0
    }
}

function applyCaps(
    score: number,
    recentSlash14: boolean,
    recentSlash28: boolean,
    identity: string | undefined,
    daysHistory: number
): number {
    if (recentSlash14) {
        score = 0
    } else if (recentSlash28) {
        score = Math.min(score, 79)
    }

    if (identity === 'NEGATIVE_IDENTITY') {
        score = Math.min(score, 59)
    }

    if (daysHistory < 7) {
        let cap = 69

        if (daysHistory > 3) {
            cap = 69 + ((daysHistory - 3) / 4) * (score - 69)
        }

        return Math.min(score, cap)
    }

    return score
}

function mapToLetterGrade(score: number): 'A' | 'B' | 'C' | 'D' | 'E' | 'F' {
    if (score >= 90) {
        return 'A'
    } else if (score >= 80) {
        return 'B'
    } else if (score >= 70) {
        return 'C'
    } else if (score >= 60) {
        return 'D'
    } else if (score >= 50) {
        return 'E'
    }

    return 'F'
}

function computeValidatorScore(params: {
    nodeUptimePercentage: number
    nodeCountArray: number[]
    blockProductionArray: number[]
    commissionArray: number[]
    peerCommissionArray: number[]
    numberOfNominations: number
    averagePeerNumberOfNominations: number
    slashesArray: boolean[]
    identity: JudgementType
}): 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | null {
    const daysHistory = params.nodeCountArray.length

    if (daysHistory === 0) {
        return null
    }

    const blockProductionPercentageArray = params.blockProductionArray.map((b) => (b / 14400) * 100)
    const commissionPercentageArray = params.commissionArray.map((c) => c / 1_000_000_000)
    const peerCommissionPercentageArray = params.peerCommissionArray.map((c) => c / 1_000_000_000)

    // Core Scoring Variables
    const uptimeScore = calculateUptimeScore(params.nodeUptimePercentage)
    const blockProductionScore = calculateBlockProductionScore(params.nodeCountArray, blockProductionPercentageArray)
    const commissionScore = calculateCommissionScore(commissionPercentageArray, peerCommissionPercentageArray)
    const nominationsScore = calculateNominationsScore(
        params.numberOfNominations,
        params.averagePeerNumberOfNominations
    )
    let score = uptimeScore + blockProductionScore + commissionScore + nominationsScore

    // Slashing Adjustment
    const { slashScore, hasSlashInPast14Eras, hasSlashInPast28Eras } = calculateSlashPenalty(params.slashesArray)
    score = Math.max(score - slashScore, 0)

    // Identity Adjustment
    score += calculateIdentityAdjustment(params.identity)

    // Calculate Final Score & Grade
    score = applyCaps(score, hasSlashInPast14Eras, hasSlashInPast28Eras, params.identity, daysHistory)

    return mapToLetterGrade(score)
}
