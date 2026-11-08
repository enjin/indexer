import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import path from 'node:path'
import test from 'node:test'
import { TokenListingsResolver } from '~/server-extension/token-listings'

const graphqlRequire = createRequire(require.resolve('@subsquid/graphql-server'))
const { graphql } = graphqlRequire('graphql')
const { loadCustomResolvers } = graphqlRequire('./resolvers')
const { Server } = graphqlRequire('./server')

function listingRow(...columns: (string | null)[]) {
    return {
        openreader: {
            executeQuery: (query: { map: (rows: (string | null)[][]) => unknown }) => query.map([columns]),
        },
    }
}

void test('merged GraphQL schema resolves listing unions from generated and custom query results', async (t) => {
    const server = new Server({ dir: path.resolve(__dirname, '..'), squidStatus: false })
    server.customResolvers = () => loadCustomResolvers(TokenListingsResolver)
    const schema = await server.schema()

    for (const type of ['FixedPrice', 'Auction', 'Offer']) {
        await t.test(`listingById resolves ${type}Data without listingType`, async () => {
            const result = await graphql({
                schema,
                source: '{ listingById(id: "listing") { data { __typename } } }',
                contextValue: listingRow(`${type}Data`),
            })

            assert.equal(result.errors, undefined)
            assert.equal(result.data.listingById.data.__typename, `${type}Data`)
        })

        await t.test(`listingById resolves ${type}State without listingType`, async () => {
            const bid = type === 'Auction' ? ['bid', '123'] : [null, null]
            const result = await graphql({
                schema,
                source: `{
                    listingById(id: "listing") {
                        state { __typename ... on AuctionState { highBid { price } } }
                    }
                }`,
                contextValue: listingRow(`${type}State`, ...bid),
            })

            assert.equal(result.errors, undefined)
            assert.equal(result.data.listingById.state.__typename, `${type}State`)
            if (type === 'Auction') assert.equal(result.data.listingById.state.highBid.price, '123')
        })
    }

    await t.test('tokenListings accepts objects that use listingType', async () => {
        const builder = {
            leftJoinAndMapOne: () => builder,
            where: () => builder,
            andWhere: () => builder,
            orderBy: () => builder,
            addOrderBy: () => builder,
            skip: () => builder,
            take: () => builder,
            getManyAndCount: () => [[{ data: { listingType: 'Auction' }, state: { listingType: 'Auction' } }], 1],
        }
        const result = await graphql({
            schema,
            source: '{ tokenListings(assetId: "asset") { edges { node { data { __typename } state { __typename } } } } }',
            contextValue: {
                openreader: {
                    getEntityManager: () => ({ getRepository: () => ({ createQueryBuilder: () => builder }) }),
                },
            },
        })

        assert.equal(result.errors, undefined)
        assert.equal(result.data.tokenListings.edges[0].node.data.__typename, 'AuctionData')
        assert.equal(result.data.tokenListings.edges[0].node.state.__typename, 'AuctionState')
    })
})
