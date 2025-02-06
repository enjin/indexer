
function getSlashedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.slashed.enjinV100.is(event)) {
        return balances.slashed.enjinV100.decode(event).who
    }
    throw new UnknownVersionError(balances.slashed.name)
}
