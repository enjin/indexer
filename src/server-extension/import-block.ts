import { Query, Resolver, ArgsType, Field, Args, Int } from 'type-graphql'
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
    @Query(() => Boolean, { nullable: false })
    importBlock(@Args() args: ImportBlockArgs): boolean {
        const { blockNumber, toBlock } = args

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
