
function getReservedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.reserved.enjinV100.is(event)) {
        return balances.reserved.enjinV100.decode(event).who
    }

    throw new UnknownVersionError(balances.reserved.name)
}
