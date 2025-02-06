
function getBurnedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.burned.enjinV100.is(event)) {
        return balances.burned.enjinV100.decode(event).who
    }
    throw new UnknownVersionError(balances.burned.name)
}