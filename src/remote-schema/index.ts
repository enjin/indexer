import 'reflect-metadata'
import { timingSafeEqual } from 'crypto'
import { createRequire } from 'module'
import { createLogger } from '@subsquid/logger'
import { loadCustomResolvers } from '@subsquid/graphql-server/lib/resolvers'
import { TypeormOpenreaderContext } from '@subsquid/graphql-server/lib/typeorm'
import { closeRemoteSchemaDataSource, getRemoteSchemaDataSource } from '~/remote-schema/data-source'

interface ListeningServer {
    readonly port: number
    close(): Promise<void>
}

interface OpenreaderServerModule {
    runApollo(options: {
        port: number | string
        disposals: Array<() => Promise<void>>
        context: () => { openreader: TypeormOpenreaderContext }
        schema: unknown
        plugins?: unknown[]
        graphiqlConsole?: boolean
        maxRequestSizeBytes?: number
        maxRootFields?: number
        validationMaxErrors?: number
        log?: unknown
    }): Promise<ListeningServer>
    addServerCleanup(
        disposals: Array<() => Promise<void>>,
        server: Promise<ListeningServer>,
        log?: unknown
    ): Promise<ListeningServer>
}

interface ApolloRequestContext {
    request: {
        http?: {
            headers: {
                get(name: string): string | null
            }
        }
    }
}

const log = createLogger('sqd:remote-schema')
const packageRequire = createRequire(require.resolve('@subsquid/graphql-server/package.json'))
const { addServerCleanup, runApollo } = packageRequire('@subsquid/openreader/lib/server') as OpenreaderServerModule

function secretsMatch(expected: string, actual: string | null | undefined): boolean {
    if (!actual) {
        return false
    }

    const expectedBuffer = Buffer.from(expected)
    const actualBuffer = Buffer.from(actual)
    return expectedBuffer.length === actualBuffer.length && timingSafeEqual(expectedBuffer, actualBuffer)
}

function authenticationPlugin(secret: string | undefined): unknown {
    return {
        requestDidStart(context: ApolloRequestContext) {
            if (secret && !secretsMatch(secret, context.request.http?.headers.get('x-indexer-extension-secret'))) {
                throw new Error('Unauthorized remote schema request')
            }

            return {}
        },
    }
}

function positiveInteger(value: string | undefined, fallback: number): number {
    if (value === undefined) {
        return fallback
    }

    const parsed = Number(value)
    if (!Number.isSafeInteger(parsed) || parsed < 1) {
        throw new Error(`Expected a positive integer, received: ${value}`)
    }

    return parsed
}

export async function startRemoteSchema(): Promise<ListeningServer> {
    const dataSource = await getRemoteSchemaDataSource()
    const schema = await loadCustomResolvers(require.resolve('../server-extension/resolvers'))
    const secret = process.env.HASURA_EXTENSION_SECRET
    const disposals = [closeRemoteSchemaDataSource]
    const port = process.env.EXTENSION_GRAPHQL_PORT ?? 4001
    const server = await addServerCleanup(
        disposals,
        runApollo({
            port,
            disposals,
            schema,
            context: () => ({
                openreader: new TypeormOpenreaderContext(
                    process.env.DB_TYPE === 'cockroach' ? 'cockroach' : 'postgres',
                    dataSource,
                    dataSource,
                    positiveInteger(process.env.EXTENSION_SUBSCRIPTION_POLL_INTERVAL, 5000),
                    log
                ),
            }),
            plugins: [authenticationPlugin(secret)],
            graphiqlConsole: process.env.EXTENSION_GRAPHQL_ENABLE_CONSOLE === 'true',
            maxRequestSizeBytes: positiveInteger(process.env.EXTENSION_GRAPHQL_MAX_REQUEST_BYTES, 256 * 1024),
            maxRootFields: positiveInteger(process.env.EXTENSION_GRAPHQL_MAX_ROOT_FIELDS, 10),
            validationMaxErrors: positiveInteger(process.env.EXTENSION_GRAPHQL_VALIDATION_MAX_ERRORS, 10),
            log,
        }),
        log
    )

    if (!secret) {
        log.warn('HASURA_EXTENSION_SECRET is not set; remote schema authentication is disabled')
    }
    log.info(`Indexer extension Remote Schema listening on 0.0.0.0:${server.port}/graphql`)

    const shutdown = (signal: string) => {
        log.info(`Received ${signal}; shutting down the indexer extension Remote Schema`)
        void server.close().finally(() => process.exit(0))
    }
    process.once('SIGINT', () => {
        shutdown('SIGINT')
    })
    process.once('SIGTERM', () => {
        shutdown('SIGTERM')
    })

    return server
}

if (require.main === module) {
    void startRemoteSchema().catch((error: unknown) => {
        if (error instanceof Error) {
            log.fatal(error)
        } else {
            log.fatal(String(error))
        }
        process.exit(1)
    })
}
