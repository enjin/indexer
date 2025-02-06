
function getUnreservedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.unreserved.enjinV100.is(event)) {
        return balances.unreserved.enjinV100.decode(event).who
    }

    throw new UnknownVersionError(balances.unreserved.name)
}
