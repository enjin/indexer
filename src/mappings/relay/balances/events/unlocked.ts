
function getUnlockedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.unlocked.enjinV100.is(event)) {
        return balances.unlocked.enjinV100.decode(event).who
    }

    throw new UnknownVersionError(balances.unlocked.name)
}