/* eslint-disable max-classes-per-file */
import { Query, Resolver, Arg, ObjectType, Field, Int } from 'type-graphql'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { BigInteger } from '@subsquid/graphql-server'
import { EntityManager } from 'typeorm'
import config from '../../config'
import { Event } from '../../model'
import 'reflect-metadata'

@ObjectType()
export class VerifyTransferResult {
    @Field({ nullable: false })
    isValid!: boolean

    @Field({ nullable: true })
    to?: string

    @Field({ nullable: true })
    blockNumber?: number

    constructor(props: Partial<VerifyTransferResult>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class VerifyTransferResolver {
    createApi: Promise<ApiPromise>

    constructor(private tx: () => Promise<EntityManager>) {
        const wsProvider = new WsProvider(config.dataSource.chain)
        this.createApi = ApiPromise.create({ provider: wsProvider })
    }

    @Query(() => VerifyTransferResult)
    async verifyTransfer(
        @Arg('publicKey', { description: 'The public key of the address' }) publicKey: string,
        @Arg('nonce', () => Int, { description: 'The nonce of account at the transfer event block' }) nonce: number,
        @Arg('amount', () => BigInteger, { description: 'The amount of EFI transferred' }) amount: bigint
    ): Promise<VerifyTransferResult> {
        const manager = await this.tx()

        const data = await manager
            .getRepository(Event)
            .createQueryBuilder('event')
            .where(`event.data->>'isTypeOf' = :isTypeOf`, { isTypeOf: 'BalancesTransfer' })
            .andWhere(`event.data->>'from' = :publicKey`, { publicKey })
            .andWhere(`event.data->>'amount' = :amount`, { amount: amount.toString() })
            .innerJoinAndSelect('event.extrinsic', 'extrinsic')
            .getRawMany()

        if (data.length === 0) {
            return {
                isValid: false,
            }
        }

        const api = await this.createApi

        const result = data.map(async (event) => {
            const blockHash = event.extrinsic_block_hash
            const blockNumber = event.extrinsic_block_number
            const { to } = event.event_data
            const apiAt = await api.at(blockHash)
            const account = await apiAt.query.system.account<any>(publicKey)
            return { nonce: account.nonce.toNumber(), blockNumber, to }
        })

        const isValid = (await Promise.all(result)).find((event) => event.nonce === nonce)

        return {
            isValid: !!isValid,
            to: isValid?.to,
            blockNumber: isValid?.blockNumber,
        }
    }
}
