
function getSuspendedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.suspended.enjinV100.is(event)) {
        return balances.suspended.enjinV100.decode(event).who
    }
    throw new UnknownVersionError(balances.suspended.name)
}
