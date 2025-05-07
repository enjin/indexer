import assert from "assert"
import * as marshal from "./marshal"
import {MetadataMedia} from "./_metadataMedia"
import {MetadataMeta} from "./_metadataMeta"
import {MetadataOriginType} from "./_metadataOriginType"

export class Metadata {
    private _name!: string | undefined | null
    private _description!: string | undefined | null
    private _externalUrl!: string | undefined | null
    private _keywords!: (string | undefined | null)[] | undefined | null
    private _fallbackImage!: string | undefined | null
    private _media!: (MetadataMedia | undefined | null)[] | undefined | null
    private _meta!: MetadataMeta | undefined | null
    private _originUrl!: string | undefined | null
    private _originType!: MetadataOriginType | undefined | null
    private _lastUpdated!: Date | undefined | null
    private _attributes!: unknown | undefined | null

    constructor(props?: Partial<Omit<Metadata, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._name = json.name == null ? undefined : marshal.string.fromJSON(json.name)
            this._description = json.description == null ? undefined : marshal.string.fromJSON(json.description)
            this._externalUrl = json.externalUrl == null ? undefined : marshal.string.fromJSON(json.externalUrl)
            this._keywords = json.keywords == null ? undefined : marshal.fromList(json.keywords, val => val == null ? undefined : marshal.string.fromJSON(val))
            this._fallbackImage = json.fallbackImage == null ? undefined : marshal.string.fromJSON(json.fallbackImage)
            this._media = json.media == null ? undefined : marshal.fromList(json.media, val => val == null ? undefined : new MetadataMedia(undefined, val))
            this._meta = json.meta == null ? undefined : new MetadataMeta(undefined, json.meta)
            this._originUrl = json.originUrl == null ? undefined : marshal.string.fromJSON(json.originUrl)
            this._originType = json.originType == null ? undefined : marshal.enumFromJson(json.originType, MetadataOriginType)
            this._lastUpdated = json.lastUpdated == null ? undefined : marshal.datetime.fromJSON(json.lastUpdated)
            this._attributes = json.attributes
        }
    }

    get name(): string | undefined | null {
        return this._name
    }

    set name(value: string | undefined | null) {
        this._name = value
    }

    get description(): string | undefined | null {
        return this._description
    }

    set description(value: string | undefined | null) {
        this._description = value
    }

    get externalUrl(): string | undefined | null {
        return this._externalUrl
    }

    set externalUrl(value: string | undefined | null) {
        this._externalUrl = value
    }

    get keywords(): (string | undefined | null)[] | undefined | null {
        return this._keywords
    }

    set keywords(value: (string | undefined | null)[] | undefined | null) {
        this._keywords = value
    }

    get fallbackImage(): string | undefined | null {
        return this._fallbackImage
    }

    set fallbackImage(value: string | undefined | null) {
        this._fallbackImage = value
    }

    get media(): (MetadataMedia | undefined | null)[] | undefined | null {
        return this._media
    }

    set media(value: (MetadataMedia | undefined | null)[] | undefined | null) {
        this._media = value
    }

    get meta(): MetadataMeta | undefined | null {
        return this._meta
    }

    set meta(value: MetadataMeta | undefined | null) {
        this._meta = value
    }

    get originUrl(): string | undefined | null {
        return this._originUrl
    }

    set originUrl(value: string | undefined | null) {
        this._originUrl = value
    }

    get originType(): MetadataOriginType | undefined | null {
        return this._originType
    }

    set originType(value: MetadataOriginType | undefined | null) {
        this._originType = value
    }

    get lastUpdated(): Date | undefined | null {
        return this._lastUpdated
    }

    set lastUpdated(value: Date | undefined | null) {
        this._lastUpdated = value
    }

    get attributes(): unknown | undefined | null {
        return this._attributes
    }

    set attributes(value: unknown | undefined | null) {
        this._attributes = value
    }

    toJSON(): object {
        return {
            name: this.name,
            description: this.description,
            externalUrl: this.externalUrl,
            keywords: this.keywords,
            fallbackImage: this.fallbackImage,
            media: this.media == null ? undefined : this.media.map((val: any) => val == null ? undefined : val.toJSON()),
            meta: this.meta == null ? undefined : this.meta.toJSON(),
            originUrl: this.originUrl,
            originType: this.originType,
            lastUpdated: this.lastUpdated == null ? undefined : marshal.datetime.toJSON(this.lastUpdated),
            attributes: this.attributes,
        }
    }
}
