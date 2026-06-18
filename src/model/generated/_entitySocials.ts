import assert from "assert"
import * as marshal from "./marshal"

export class EntitySocials {
    private _discord!: string | undefined | null
    private _youtube!: string | undefined | null
    private _x!: string | undefined | null
    private _twitter!: string | undefined | null
    private _facebook!: string | undefined | null
    private _instagram!: string | undefined | null
    private _medium!: string | undefined | null
    private _tiktok!: string | undefined | null
    private _website!: string | undefined | null

    constructor(props?: Partial<Omit<EntitySocials, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._discord = json.discord == null ? undefined : marshal.string.fromJSON(json.discord)
            this._youtube = json.youtube == null ? undefined : marshal.string.fromJSON(json.youtube)
            this._x = json.x == null ? undefined : marshal.string.fromJSON(json.x)
            this._twitter = json.twitter == null ? undefined : marshal.string.fromJSON(json.twitter)
            this._facebook = json.facebook == null ? undefined : marshal.string.fromJSON(json.facebook)
            this._instagram = json.instagram == null ? undefined : marshal.string.fromJSON(json.instagram)
            this._medium = json.medium == null ? undefined : marshal.string.fromJSON(json.medium)
            this._tiktok = json.tiktok == null ? undefined : marshal.string.fromJSON(json.tiktok)
            this._website = json.website == null ? undefined : marshal.string.fromJSON(json.website)
        }
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

    get twitter(): string | undefined | null {
        return this._twitter
    }

    set twitter(value: string | undefined | null) {
        this._twitter = value
    }

    get facebook(): string | undefined | null {
        return this._facebook
    }

    set facebook(value: string | undefined | null) {
        this._facebook = value
    }

    get instagram(): string | undefined | null {
        return this._instagram
    }

    set instagram(value: string | undefined | null) {
        this._instagram = value
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

    get website(): string | undefined | null {
        return this._website
    }

    set website(value: string | undefined | null) {
        this._website = value
    }

    toJSON(): object {
        return {
            discord: this.discord,
            youtube: this.youtube,
            x: this.x,
            twitter: this.twitter,
            facebook: this.facebook,
            instagram: this.instagram,
            medium: this.medium,
            tiktok: this.tiktok,
            website: this.website,
        }
    }
}
