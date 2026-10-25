import { Validator } from '~/model'
import { connectionManager } from '~/contexts'
import { Job } from 'bullmq'
import Rpc from '~/util/rpc'

export async function syncActiveValidators(job: Job) {
    const em = await connectionManager()
    const { api } = await Rpc.getInstance()

    const validators = await em
        .getRepository(Validator)
        .createQueryBuilder('validator')
        .leftJoinAndSelect('validator.account', 'account')
        .getMany()

    if (validators.length === 0) {
        return
    }

    const derived = await api.derive.staking.electedInfo({ withExposureMeta: true })
    const totalStaked = new Map<string, bigint>()
    for (const validator of derived.info) {
        totalStaked.set(
            validator.accountId.toString(),
            BigInt(validator.exposureMeta?.unwrap().total.toString() ?? '0')
        )
    }

    const rpcValidators = await api.query.staking.validators.entries()
    const activeValidators = []

    for (const [key, value] of rpcValidators) {
        const rpcValidator = key.args[0].toString()
        activeValidators.push(rpcValidator)
    }

    for (const validator of validators) {
        const rpcSingleValidator = await api.query.staking.validators(validator.account.address)
        const val = rpcSingleValidator.toJSON() as { commission: number; blocked: boolean }
        const isActive = activeValidators.includes(validator.account.address)
        validator.blocked = val.blocked ?? false
        validator.bonded = totalStaked.get(validator.account.address) ?? 0n
        validator.isActive = isActive

        // Reconcile commission with chain state so rows that missed a historical
        // ValidatorPrefsSet event self-heal. A chilled stash is absent from
        // `staking.validators` and the query returns the default prefs (commission 0),
        // so only copy commission for stashes that are still registered.
        if (isActive) {
            validator.commission = val.commission
        }
    }

    await em.save(validators)

    await job.log(`Synced ${validators.length} validators`)
}
