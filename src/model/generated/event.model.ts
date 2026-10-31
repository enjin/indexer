import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, DateTimeColumn as DateTimeColumn_, IntColumn as IntColumn_, Index as Index_, ManyToOne as ManyToOne_, Relation as Relation_, StringColumn as StringColumn_} from "@subsquid/typeorm-store"
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

    @DateTimeColumn_({nullable: true})
    createdAt!: Date | undefined | null

    @IntColumn_({nullable: true})
    index!: number | undefined | null

    @Index_("idx_event_block_number_367674b2")
    @IntColumn_({nullable: true})
    blockNumber!: number | undefined | null

    @Index_("idx_event_extrinsic_297167ec")
    @ManyToOne_(() => Extrinsic, {nullable: true})
    extrinsic!: Relation_<Extrinsic> | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonEventData(obj)}, nullable: true})
    data!: EventData | undefined | null

    @Index_("idx_event_name_c644bc2c")
    @StringColumn_({nullable: false})
    name!: string

    @Index_("idx_event_collection_id_cf545532")
    @StringColumn_({nullable: true})
    collectionId!: string | undefined | null

    @Index_("idx_event_token_id_12e4b7dc")
    @StringColumn_({nullable: true})
    tokenId!: string | undefined | null
}
