import { Block, CommonContext, EventItem } from '../contexts'
import { AccountTokenEvent, Event as EventModel } from '../model'
import { EventProcessor } from './event-processor.def'

export class EventProcessorFactory {
    private static instance: EventProcessorFactory
    private processors: Map<string, EventProcessor<any>> = new Map()

    static getInstance(): EventProcessorFactory {
        if (!EventProcessorFactory.instance) {
            EventProcessorFactory.instance = new EventProcessorFactory()
        }
        return EventProcessorFactory.instance
    }

    register(eventName: string, processor: EventProcessor<any>): void {
        this.processors.set(eventName, processor)
    }

    get(eventName: string): EventProcessor<any> | undefined {
        return this.processors.get(eventName)
    }

    async run(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        skipSave: boolean = false
    ): Promise<EventModel | [EventModel, AccountTokenEvent] | undefined> {
        const processor = this.get(item.name)

        if (!processor) {
            ctx.log.error(`No processor registered for event ${item.name}`)
            return undefined
        }

        return processor.run(ctx, block, item, skipSave)
    }
}
