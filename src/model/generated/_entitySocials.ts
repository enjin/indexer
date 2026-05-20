import assert from "assert"
import * as marshal from "./marshal"

export class EntitySocials {
    private _twitter!: string | undefined | null
    private _discord!: string | undefined | null
    private _youtube!: string | undefined | null
    private _x!: string | undefined | null
    private _instagram!: string | undefined | null
    private _website!: string | undefined | null
    private _medium!: string | undefined | null
    private _tiktok!: string | undefined | null

    constructor(props?: Partial<Omit<EntitySocials, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._twitter = json.twitter == null ? undefined : marshal.string.fromJSON(json.twitter)
            this._discord = json.discord == null ? undefined : marshal.string.fromJSON(json.discord)
            this._youtube = json.youtube == null ? undefined : marshal.string.fromJSON(json.youtube)
            this._x = json.x == null ? undefined : marshal.string.fromJSON(json.x)
            this._instagram = json.instagram == null ? undefined : marshal.string.fromJSON(json.instagram)
            this._website = json.website == null ? undefined : marshal.string.fromJSON(json.website)
            this._medium = json.medium == null ? undefined : marshal.string.fromJSON(json.medium)
            this._tiktok = json.tiktok == null ? undefined : marshal.string.fromJSON(json.tiktok)
        }
    }

    get twitter(): string | undefined | null {
        return this._twitter
    }

    set twitter(value: string | undefined | null) {
        this._twitter = value
    }

    get discord(): string | undefined | null {
        return this._discord
    }

    set discord(value: string | undefined | null) {
        this._discord = value
    }

    get youtube(): string | undefined | null {
        return this._youtube
    }

    set youtube(value: string | undefined | null) {
        this._youtube = value
    }

    get x(): string | undefined | null {
        return this._x
    }

    set x(value: string | undefined | null) {
        this._x = value
    }

    get instagram(): string | undefined | null {
        return this._instagram
    }

    set instagram(value: string | undefined | null) {
        this._instagram = value
    }

    get website(): string | undefined | null {
        return this._website
    }

    set website(value: string | undefined | null) {
        this._website = value
    }

    get medium(): string | undefined | null {
        return this._medium
    }

    set medium(value: string | undefined | null) {
        this._medium = value
    }

    get tiktok(): string | undefined | null {
        return this._tiktok
    }

    set tiktok(value: string | undefined | null) {
        this._tiktok = value
    }

    toJSON(): object {
        return {
            twitter: this.twitter,
            discord: this.discord,
            youtube: this.youtube,
            x: this.x,
            instagram: this.instagram,
            website: this.website,
            medium: this.medium,
            tiktok: this.tiktok,
        }
    }
}
