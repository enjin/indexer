function getRestoredAccount(ctx: CommonContext, event: EventItem) {
    if (balances.restored.enjinV100.is(event)) {
        return balances.restored.enjinV100.decode(event).who
    }
    throw new UnknownVersionError(balances.restored.name)
}
