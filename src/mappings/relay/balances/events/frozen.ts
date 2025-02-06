
function getFrozenAccount(ctx: CommonContext, event: EventItem) {
    if (balances.frozen.enjinV100.is(event)) {
        return balances.frozen.enjinV100.decode(event).who
    }
    throw new UnknownVersionError(balances.frozen.name)
}
