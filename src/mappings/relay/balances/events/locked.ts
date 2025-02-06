
function getLockedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.locked.enjinV100.is(event)) {
        return balances.locked.enjinV100.decode(event).who
    }
    throw new UnknownVersionError(balances.locked.name)
}