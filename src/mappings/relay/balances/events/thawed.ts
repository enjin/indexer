
function getThawedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.thawed.enjinV100.is(event)) {
        return balances.thawed.enjinV100.decode(event).who
    }
    throw new UnknownVersionError(balances.thawed.name)
}
