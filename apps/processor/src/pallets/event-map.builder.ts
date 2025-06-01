import { EventItem } from '../contexts'
import { EventResult } from './event-processor.def'

export interface EventMap<T, R = any> {
    decode: (event: EventItem) => T
    notification?: (item: EventItem, data: T, result: R) => any
    eventModel?: (item: EventItem, data: T, result: R) => EventResult
}

export class EventMapBuilder<T, R = any> {
    private _decode?: (event: EventItem) => T
    private _notification?: (item: EventItem, data: T, result: R) => any
    private _eventModel?: (item: EventItem, data: T, result: R) => EventResult

    /**
     * Set the decoder function that extracts typed data from an event item
     */
    withDecoder(fn: (event: EventItem) => T): this {
        this._decode = fn
        return this
    }

    /**
     * Set the notification function that creates the notification payload
     */
    withNotification(fn: (item: EventItem, data: T, result: R) => any): this {
        this._notification = fn
        return this
    }

    /**
     * Set the event model function that creates the event model
     */
    withEventModel(fn: (item: EventItem, data: T, result: R) => EventResult): this {
        this._eventModel = fn
        return this
    }

    /**
     * Build the event map with all provided functions
     */
    build(): EventMap<T, R> {
        if (!this._decode) {
            throw new Error('Decoder function is required for event map')
        }

        return {
            decode: this._decode,
            notification: this._notification,
            eventModel: this._eventModel,
        }
    }

    /**
     * Create a new event map builder
     */
    static create<T, R = any>(): EventMapBuilder<T, R> {
        return new EventMapBuilder<T, R>()
    }
}
