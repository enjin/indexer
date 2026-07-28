import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve(__dirname, '..')

function source(relativePath: string): string {
    return readFileSync(path.join(root, relativePath), 'utf8')
}

void test('exposes queue commands as Remote Schema mutations', () => {
    const commandResolvers = [
        'src/server-extension/import-block.ts',
        'src/server-extension/refresh-accounts.ts',
        'src/server-extension/refresh-balances.ts',
        'src/server-extension/refresh-entity.ts',
        'src/server-extension/refresh-listings.ts',
        'src/server-extension/refresh-metadata.ts',
    ]

    for (const resolver of commandResolvers) {
        const contents = source(resolver)
        assert.match(contents, /@Mutation\(/, `${resolver} must expose a mutation`)
        assert.doesNotMatch(contents, /@Query\(/, `${resolver} must not expose a state-changing query`)
    }
})

void test('keeps Hasura Actions empty and registers the authenticated Remote Schema', () => {
    const actionMetadata = source('metadata/actions.yaml')
    const remoteSchemas = source('metadata/remote_schemas.yaml')

    assert.match(actionMetadata, /^actions: \[\]$/m)
    assert.doesNotMatch(actionMetadata, /^ {2}- name:/m)
    assert.match(remoteSchemas, /url_from_env: HASURA_EXTENSION_GRAPHQL_URL/)
    assert.match(remoteSchemas, /value_from_env: HASURA_EXTENSION_SECRET/)
    assert.match(remoteSchemas, /prefix: IndexerExtension/)
})
