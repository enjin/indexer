
function getBalanceSetAccount(ctx: CommonContext, event: EventItem) {
    if (balances.balanceSet.enjinV100.is(event)) {
        return balances.balanceSet.enjinV100.decode(event).who
    }

    if (balances.balanceSet.v104.is(event)) {
        return balances.balanceSet.v104.decode(event).who
    }

    if (balances.balanceSet.v100.is(event)) {
        return balances.balanceSet.v100.decode(event).who
    }

    throw new UnknownVersionError(balances.balanceSet.name)
}
