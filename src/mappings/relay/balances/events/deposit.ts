
function getDepositAccount(ctx: CommonContext, event: EventItem) {
    if (balances.deposit.enjinV100.is(event)) {
        return balances.deposit.enjinV100.decode(event).who
    }

    throw new UnknownVersionError(balances.deposit.name)
}
