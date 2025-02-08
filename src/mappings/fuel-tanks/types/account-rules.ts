type AccountRuleDescriptor_RequireToken = {
    __kind: 'RequireToken'
    value: {
        collectionId: bigint
        tokenId: bigint
    }
}

type AccountRuleDescriptor_WhitelistedCallers = {
    __kind: 'WhitelistedCallers'
    value: string[]
}

export type AccountRuleDescriptor = AccountRuleDescriptor_RequireToken | AccountRuleDescriptor_WhitelistedCallers
