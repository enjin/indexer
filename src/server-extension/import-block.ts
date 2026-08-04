import { Args, ArgsType, Field, Int, Mutation, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { QueueUtils } from '~/queue'
import { Min } from 'class-validator'

@ArgsType()
export class ImportBlockArgs {
    @Field(() => Int)
    @Min(1)
    blockNumber!: number

    @Field(() => Int, { nullable: true })
    @Min(1)
    toBlock?: number
}

@Resolver()
export class ImportBlockResolver {
    @Mutation(() => Boolean, { nullable: false })
    importBlock(@Args() args: ImportBlockArgs): boolean {
        const { blockNumber, toBlock } = args

        if (!Number.isSafeInteger(blockNumber) || blockNumber < 1) {
            throw new Error('blockNumber must be a positive integer')
        }

        if (toBlock !== undefined && (!Number.isSafeInteger(toBlock) || toBlock < 1)) {
            throw new Error('toBlock must be a positive integer')
        }

        if (toBlock !== undefined && toBlock < blockNumber) {
            throw new Error(`toBlock (${toBlock}) must be >= blockNumber (${blockNumber})`)
        }

        if (toBlock !== undefined && toBlock - blockNumber > 10_000) {
            throw new Error('Range too large: maximum 10,000 blocks per import request')
        }

        QueueUtils.dispatchImportBlock(blockNumber, toBlock)

        return true
    }
}
