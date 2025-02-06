
function getEndowedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.endowed.enjinV100.is(event)) {
        return balances.endowed.enjinV100.decode(event).account
    }
    throw new UnknownVersionError(balances.endowed.name)
}
