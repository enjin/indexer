module.exports = class TokenLending1788945010413 {
    name = 'TokenLending1788945010413'

    async up(db) {
        await db.query(`ALTER TABLE "token" ADD "is_lendable" boolean NOT NULL DEFAULT false`)
        await db.query(`CREATE INDEX "IDX_0a86029ad7b6b609b598b5999c" ON "token" ("is_lendable")`)
        await db.query(
            `CREATE TABLE "token_loan" ("id" character varying NOT NULL, "expiration" numeric NOT NULL, "last_observed_block" numeric NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "token_id" character varying, "lender_id" character varying, "borrower_id" character varying, CONSTRAINT "REL_efcbed3690944316aa1da41cc7" UNIQUE ("token_id"), CONSTRAINT "PK_de387c9f6d6f92adca013fa680a" PRIMARY KEY ("id"))`
        )
        await db.query(`CREATE UNIQUE INDEX "IDX_efcbed3690944316aa1da41cc7" ON "token_loan" ("token_id")`)
        await db.query(`CREATE INDEX "IDX_c12fc3bc351fdcec90007ae15c" ON "token_loan" ("lender_id")`)
        await db.query(`CREATE INDEX "IDX_9e654949e07d0c724e681afa4c" ON "token_loan" ("borrower_id")`)
        await db.query(`CREATE INDEX "IDX_e62e52f296d9aa400123dff5e7" ON "token_loan" ("expiration")`)
        await db.query(
            `CREATE INDEX "IDX_a46b8836dc2050083dc95b28dc" ON "token_loan" ("last_observed_block")`
        )
        await db.query(
            `ALTER TABLE "token_loan" ADD CONSTRAINT "FK_efcbed3690944316aa1da41cc73" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
        )
        await db.query(
            `ALTER TABLE "token_loan" ADD CONSTRAINT "FK_c12fc3bc351fdcec90007ae15cc" FOREIGN KEY ("lender_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        )
        await db.query(
            `ALTER TABLE "token_loan" ADD CONSTRAINT "FK_9e654949e07d0c724e681afa4cf" FOREIGN KEY ("borrower_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        )
    }

    async down(db) {
        await db.query(`ALTER TABLE "token_loan" DROP CONSTRAINT "FK_9e654949e07d0c724e681afa4cf"`)
        await db.query(`ALTER TABLE "token_loan" DROP CONSTRAINT "FK_c12fc3bc351fdcec90007ae15cc"`)
        await db.query(`ALTER TABLE "token_loan" DROP CONSTRAINT "FK_efcbed3690944316aa1da41cc73"`)
        await db.query(`DROP INDEX "public"."IDX_a46b8836dc2050083dc95b28dc"`)
        await db.query(`DROP INDEX "public"."IDX_e62e52f296d9aa400123dff5e7"`)
        await db.query(`DROP INDEX "public"."IDX_9e654949e07d0c724e681afa4c"`)
        await db.query(`DROP INDEX "public"."IDX_c12fc3bc351fdcec90007ae15c"`)
        await db.query(`DROP INDEX "public"."IDX_efcbed3690944316aa1da41cc7"`)
        await db.query(`DROP TABLE "token_loan"`)
        await db.query(`DROP INDEX "public"."IDX_0a86029ad7b6b609b598b5999c"`)
        await db.query(`ALTER TABLE "token" DROP COLUMN "is_lendable"`)
    }
}
