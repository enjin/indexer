import { Block, CommonContext, EventItem } from '../contexts'
import { AccountTokenEvent, Event as EventModel } from '../model'
import { Sns } from '../utils/sns'
import { EventMap } from './event-map.builder'

export type EventResult = [EventModel, AccountTokenEvent] | EventModel | undefined

export abstract class EventProcessor<T, R = any> {
    protected constructor(
        protected readonly name: string,
        protected readonly mapper: EventMap<T, R>
    ) {
        if (!mapper) {
            throw new Error(`EventProcessor ${name} requires a mapper`)
        }

        if (!mapper.decode) {
            throw new Error(`Mapper for ${name} must have a decode function`)
        }
    }

    /**
     * Main entry point to process an event
     */
    async run(ctx: CommonContext, block: Block, item: EventItem, skipSave: boolean = false): Promise<EventResult> {
        // 1. Decodes the event data
        const event = this.decodeEventItem(item)

        // 2. Check if we should skip processing (used for warp sync)
        if (skipSave) {
            const skipSaveData = await this.prepareSkipSaveData(ctx, event)
            return this.getEventModel(item, event, skipSaveData)
        }

        try {
            // 3. Load and validate required data
            const data = await this.loadRequiredData(ctx, item, event)
            if (!data) return undefined

            // 4. Process the business logic
            const result = await this.processEvent(ctx, block, item, event, data)
            if (!result) return undefined

            // 5. Dispatch any related tasks
            await this.dispatchTasks(ctx, event, result)

            // 6. Send notification
            await this.sendNotification(item, event, result)

            // 7. Create and return event models
            return this.getEventModel(item, event, result)
        } catch (error) {
            ctx.log.error(`Error processing ${this.name} event: ${error}`)
            throw error
        }
    }

    /**
     * Decode event data from the event item
     */
    protected decodeEventItem(item: EventItem): T {
        return this.mapper.decode(item)
    }

    /**
     * Load any required data before processing the event
     */
    protected abstract loadRequiredData(ctx: CommonContext, item: EventItem, data: T): Promise<R | undefined>

    /**
     * Prepare minimal data for skip save mode
     */
    protected async prepareSkipSaveData(ctx: CommonContext, data: T): Promise<any> {
        return undefined
    }

    /**
     * Process the actual event logic
     */
    protected abstract processEvent(
        ctx: CommonContext,
        block: Block,
        item: EventItem,
        data: T,
        processData: R
    ): Promise<R | undefined>

    /**
     * Dispatch any related tasks (stats, computation, etc.)
     */
    protected async dispatchTasks(ctx: CommonContext, data: T, result: R): Promise<void> {
        // Default implementation, can be overridden
    }

    /**
     * Send notification about the event
     */
    protected async sendNotification(item: EventItem, data: T, result: R): Promise<void> {
        const body = this.getNotificationBody(item, data, result)

        if (body) {
            await Sns.getInstance().sendEvent(item, body)
        }
    }

    /**
     * Prepare the notification body
     */
    protected getNotificationBody(item: EventItem, data: T, result: R): any {
        if (this.mapper.notification) {
            return this.mapper.notification(item, data, result)
        }

        return undefined
    }

    /**
     * Create event models from processed data
     */
    protected getEventModel(item: EventItem, data: T, result: R): EventResult {
        if (this.mapper.eventModel) {
            return this.mapper.eventModel(item, data, result)
        }
        return undefined
    }
}
