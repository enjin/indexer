import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Extrinsic} from "./extrinsic.model"
import {EventData, fromJsonEventData} from "./_eventData"

@Entity_()
export class Event {
    constructor(props?: Partial<Event>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Extrinsic, {nullable: true})
    extrinsic!: Extrinsic | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonEventData(obj)}, nullable: true})
    data!: EventData | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    collectionId!: string | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    tokenId!: string | undefined | null
}
