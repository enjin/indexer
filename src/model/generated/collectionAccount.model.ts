import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Collection} from "./collection.model"

@Entity_()
export class CollectionAccount {
  constructor(props?: Partial<CollectionAccount>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("bool", {nullable: false})
  isFrozen!: boolean

  @Column_("text", {nullable: true})
  approvals!: string | undefined | null

  @Column_("int4", {nullable: false})
  accountCount!: number

  @Column_("text", {nullable: true})
  account!: string | undefined | null

  @Index_()
  @ManyToOne_(() => Collection, {nullable: false})
  collection!: Collection
}
