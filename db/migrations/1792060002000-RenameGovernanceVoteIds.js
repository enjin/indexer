module.exports = class RenameGovernanceVoteIds1792060002000 {
    name = 'RenameGovernanceVoteIds1792060002000'

    async up(db) {
        await db.query(`
            UPDATE "governance_vote"
            SET "id" = "referendum_id" || '-' || "account_id" || '-' || COALESCE("currency", 'Enj')
            WHERE "referendum_id" ~ '^[0-9]+$'
              AND "id" LIKE 'Referenda:%'
        `)
    }

    async down(db) {
        await db.query(`
            UPDATE "governance_vote"
            SET "id" = 'Referenda:' || "referendum_id" || ':' || "account_id" || ':' || COALESCE("currency", 'Enj')
            WHERE "referendum_id" ~ '^[0-9]+$'
              AND "id" = "referendum_id" || '-' || "account_id" || '-' || COALESCE("currency", 'Enj')
        `)
    }
}
