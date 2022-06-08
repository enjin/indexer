import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Collection} from "./collection.model"
import {Token} from "./token.model"

@Entity_()
export class Attribute {
  constructor(props?: Partial<Attribute>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  key!: string

  @Column_("text", {nullable: false})
  value!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  deposit!: bigint

  @Index_()
  @ManyToOne_(() => Collection, {nullable: false})
  collection!: Collection

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  token!: Token | undefined | null
}
