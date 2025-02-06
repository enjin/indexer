import * as matrixMappings from './matrix'
import * as relayMappings from './relay'
import { EventItem } from 'matrixchain-indexer/common/types/contexts'

type HandlerFunction<U> = (item: EventItem) => U

// Create proxy handlers for each mapping function
function createMappingProxy<U>(matrixHandler: HandlerFunction<U>, relayHandler: HandlerFunction<U>): HandlerFunction<U> {
    return (item: EventItem) => {
        const type = item.block.specName
        switch (type) {
            case 'matrix':
                return matrixHandler(item)
            case 'relay':
                return relayHandler(item)
            default:
                throw new Error(`Unknown mapping type: ${type}`)
        }
    }
}

// Create proxied mappings structure
function createProxiedMappings() {
    const events = {} as any

    // For each handler in matrixMappings.multi-tokens.events, create a proxied version
    for (const [key, matrixHandler] of Object.entries(matrixMappings.multiTokens.events)) {
        const relayHandler = relayMappings.multiTokens?.events?.[key]
        if (typeof matrixHandler === 'function') {
            events[key] = createMappingProxy(matrixHandler, relayHandler)
        }
    }

    return {
        multiTokens: {
            events,
        },
    }
}

export const mappings = createProxiedMappings()
