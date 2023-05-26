import * as Psh from 'pusher'
import config from '../config'

interface PusherConfig {
    appId: string
    key: string
    secret: string
    cluster: string
    useTLS: boolean
}

export class Pusher {
    static instance: Pusher

    static client: Psh

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor(cfg: PusherConfig) {
        if (cfg.appId && cfg.key && cfg.secret && cfg.cluster && cfg.useTLS) {
            // eslint-disable-next-line new-cap
            Pusher.client = new Psh.default(cfg)
        }
    }

    public static getInstance(): Pusher {
        if (!Pusher.instance) {
            Pusher.instance = new Pusher({
                appId: config.pusher.appId,
                key: config.pusher.key,
                secret: config.pusher.secret,
                cluster: config.pusher.cluster,
                useTLS: true,
            })
        }

        return Pusher.instance
    }

    public trigger(channel: string | Array<string>, event: string, data: any, params?: Psh.TriggerParams): Promise<any> | null {
        if (!Pusher.client) {
            return null
        }

        return Pusher.client.trigger(channel, event, data, params)
    }
}
