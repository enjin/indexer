
function getDustLostAccount(ctx: CommonContext, event: EventItem) {
    if (balances.dustLost.enjinV100.is(event)) {
        return balances.dustLost.enjinV100.decode(event).account
    }

    throw new UnknownVersionError(balances.dustLost.name)
}