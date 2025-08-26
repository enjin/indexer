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

    const rpcValidators = await api.query.staking.validators.entries()
    const activeValidators = []

    for (const [key, value] of rpcValidators) {
        const rpcValidator = key.args[0].toString()
        const validator = validators.find((v) => v.account.address === rpcValidator)
        if (validator) {
            const val = value.toJSON() as { blocked: boolean }
            await job.log(`Validator: ${val.blocked} Blocked: ${validator.blocked}`)
            validator.blocked = val.blocked ?? false
        }
        activeValidators.push(rpcValidator)
    }

    for (const validator of validators) {
        validator.isActive = activeValidators.includes(validator.account.address)
    }

    await em.save(validators)

    await job.log(`Synced ${validators.length} validators`)
}
