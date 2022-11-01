module.exports = class Data1667289157930 {
  name = 'Data1667289157930'

  async up(db) {
    await db.query(`CREATE TABLE "token_event" ("id" character varying NOT NULL, "event" jsonb NOT NULL, "height" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "token_id" character varying, CONSTRAINT "PK_68c97a5f44c8d6a9280db65de17" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_1ba5bf0f9173e9a7ba0ec2f991" ON "token_event" ("token_id") `)
    await db.query(`ALTER TABLE "token_event" ADD CONSTRAINT "FK_1ba5bf0f9173e9a7ba0ec2f9917" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "token_event"`)
    await db.query(`DROP INDEX "public"."IDX_1ba5bf0f9173e9a7ba0ec2f991"`)
    await db.query(`ALTER TABLE "token_event" DROP CONSTRAINT "FK_1ba5bf0f9173e9a7ba0ec2f9917"`)
  }
}
