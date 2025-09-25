import { Field, ObjectType, Int } from 'type-graphql'

@ObjectType()
export class PageInfo {
    @Field(() => Boolean)
    hasNextPage!: boolean

    @Field(() => String, { nullable: true })
    endCursor?: string

    constructor(props: Partial<PageInfo> = {}) {
        Object.assign(this, props)
    }
}

export class Edge<TNode> {
    cursor!: string
    node!: TNode

    constructor(props: Partial<Edge<TNode>>) {
        Object.assign(this, props)
    }
}

export class Connection<TNode> {
    edges!: Edge<TNode>[]
    pageInfo!: PageInfo
    totalCount!: number

    constructor(props: Partial<Connection<TNode>>) {
        Object.assign(this, props)
    }
}

export const timeFrameMap = {
    HOUR: { c: '1 hour', p: '2 hours' },
    HOUR_6: { c: '6 hours', p: '12 hours' },
    HOUR_24: { c: '24 hours', p: '48 hours' },
    WEEK: { c: '7 days', p: '14 days' },
    MONTH: { c: '30 days', p: '60 days' },
    YEAR: { c: '365 days', p: '730 days' },
    ALL: { c: '0', p: '0' },
}
