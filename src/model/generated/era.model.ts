import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class Era {
    constructor(props?: Partial<Era>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: false})
    index!: number

    @DateTimeColumn_({nullable: false})
    startAt!: Date

    @IntColumn_({nullable: false})
    startBlock!: number

    @DateTimeColumn_({nullable: true})
    endAt!: Date | undefined | null

    @IntColumn_({nullable: true})
    endBlock!: number | undefined | null
}
