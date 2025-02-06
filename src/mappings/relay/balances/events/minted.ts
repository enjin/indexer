
function getMintedAccount(ctx: CommonContext, event: EventItem) {
    if (balances.minted.enjinV100.is(event)) {
        return balances.minted.enjinV100.decode(event).who
    }
    throw new UnknownVersionError(balances.minted.name)
}