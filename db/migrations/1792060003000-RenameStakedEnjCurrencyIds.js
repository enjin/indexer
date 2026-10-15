module.exports = class RenameStakedEnjCurrencyIds1792060003000 {
    name = 'RenameStakedEnjCurrencyIds1792060003000'

    async up(db) {
        for (const table of ['governance_vote', 'governance_delegation']) {
            await db.query(`
                UPDATE "${table}"
                SET "id" = LEFT("id", LENGTH("id") - LENGTH("currency")) || REPLACE("currency", ':', '-'),
                    "currency" = REPLACE("currency", ':', '-')
                WHERE "currency" ~ '^SEnj:[0-9]+$'
                  AND RIGHT("id", LENGTH("currency")) = "currency"
            `)
        }
    }

    async down(db) {
        for (const table of ['governance_vote', 'governance_delegation']) {
            await db.query(`
                UPDATE "${table}"
                SET "id" = LEFT("id", LENGTH("id") - LENGTH("currency")) || REPLACE("currency", '-', ':'),
                    "currency" = REPLACE("currency", '-', ':')
                WHERE "currency" ~ '^SEnj-[0-9]+$'
                  AND RIGHT("id", LENGTH("currency")) = "currency"
            `)
        }
    }
}
