import assert from "assert"
import * as marshal from "./marshal"

export class CollectionSocials {
    private _twitter!: string | undefined | null
    private _discord!: string | undefined | null
    private _instagram!: string | undefined | null
    private _website!: string | undefined | null
    private _medium!: string | undefined | null
    private _tiktok!: string | undefined | null

    constructor(props?: Partial<Omit<CollectionSocials, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._twitter = json.twitter == null ? undefined : marshal.string.fromJSON(json.twitter)
            this._discord = json.discord == null ? undefined : marshal.string.fromJSON(json.discord)
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
            instagram: this.instagram,
            website: this.website,
            medium: this.medium,
            tiktok: this.tiktok,
        }
    }
}
