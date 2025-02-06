
function getReserveRepatriatedAccounts(ctx: CommonContext, event: EventItem) {
    if (balances.reserveRepatriated.enjinV100.is(event)) {
        return [balances.reserveRepatriated.enjinV100.decode(event).from, balances.reserveRepatriated.enjinV100.decode(event).to]
    }
    throw new UnknownVersionError(balances.reserveRepatriated.name)
}
