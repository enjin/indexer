module.exports = class MarketplaceOffersRedesign1789028798672 {
    name = 'MarketplaceOffersRedesign1789028798672'

    async up(db) {
        await db.query(
            `ALTER TABLE "listing" ADD "book_state" character varying(17) NOT NULL DEFAULT 'Unknown'`
        )
        await db.query(`CREATE INDEX "IDX_b563bb2b2cf3e681afcefc7a3f" ON "listing" ("book_state")`)

        await db.query(`
            WITH progress AS (
                SELECT
                    listing.id,
                    listing.amount,
                    LEAST(
                        listing.amount,
                        GREATEST(
                            0,
                            GREATEST(
                                COALESCE(NULLIF(listing.state->>'amountFilled', '')::numeric, 0),
                                COALESCE(SUM(listing_sale.amount), 0)
                            )
                        )
                    ) AS amount_filled
                FROM "listing" listing
                LEFT JOIN "listing_sale" listing_sale ON listing_sale.listing_id = listing.id
                WHERE listing.state->>'isTypeOf' IN ('FixedPriceState', 'OfferState')
                GROUP BY listing.id, listing.amount, listing.state
            )
            UPDATE "listing" listing
            SET state = listing.state || jsonb_build_object(
                'amountFilled', progress.amount_filled::text,
                'amountRemaining', (progress.amount - progress.amount_filled)::text
            ) || CASE
                WHEN listing.state->>'isTypeOf' = 'OfferState' THEN jsonb_build_object(
                    'counterOfferCount', GREATEST(
                        0,
                        COALESCE(NULLIF(listing.state->>'counterOfferCount', '')::integer, 0)
                    )
                )
                ELSE '{}'::jsonb
            END
            FROM progress
            WHERE listing.id = progress.id
        `)

        await db.query(`UPDATE "listing" SET "book_state" = 'Removed' WHERE "is_active" = false`)
        await db.query(
            `UPDATE "listing" SET "book_state" = 'Ineligible' WHERE "is_active" = true AND ("type" = 'Auction' OR "uses_whitelist" = true)`
        )
    }

    async down(db) {
        await db.query(`
            UPDATE "listing"
            SET state = CASE
                WHEN state->>'isTypeOf' = 'OfferState' THEN state - 'amountFilled' - 'amountRemaining'
                WHEN state->>'isTypeOf' = 'FixedPriceState' THEN state - 'amountRemaining'
                ELSE state
            END
        `)
        await db.query(`DROP INDEX "public"."IDX_b563bb2b2cf3e681afcefc7a3f"`)
        await db.query(`ALTER TABLE "listing" DROP COLUMN "book_state"`)
    }
}
