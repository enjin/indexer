type DispatchRuleDescriptor_MaxFuelBurnPerTransaction = {
    __kind: 'MaxFuelBurnPerTransaction'
    value: bigint
}

type DispatchRuleDescriptor_PermittedCalls = {
    __kind: 'PermittedCalls'
    value: string[]
}

type DispatchRuleDescriptor_PermittedExtrinsics = {
    __kind: 'PermittedExtrinsics'
    value: {
        __kind: string
        // value: any - We don't need to know the values
    }[]
}

type DispatchRuleDescriptor_RequireToken = {
    __kind: 'RequireToken'
    value: {
        collectionId: bigint
        tokenId: bigint
    }
}

type DispatchRuleDescriptor_TankFuelBudget = {
    __kind: 'TankFuelBudget'
    value: {
        amount: bigint
        resetPeriod: number
    }
}

type DispatchRuleDescriptor_UserFuelBudget = {
    __kind: 'UserFuelBudget'
    value: {
        amount: bigint
        resetPeriod: number
    }
}

type DispatchRuleDescriptor_WhitelistedCallers = {
    __kind: 'WhitelistedCallers'
    value: string[]
}

type DispatchRuleDescriptor_WhitelistedCollections = {
    __kind: 'WhitelistedCollections'
    value: bigint[]
}

// This rule was added on enjin v1021 and upwards
type DispatchRuleDescriptor_WhitelistedPallets = {
    __kind: 'WhitelistedPallets'
    value: {
        __kind: string
        // value: any - We don't need to know the values
    }[]
}

// This rule was added on enjin v1032 and upwards
type DispatchRuleDescriptor_MinimumInfusion = {
    __kind: 'MinimumInfusion'
    value: bigint
}

// This rule was added on enjin v1032 and upwards
type DispatchRuleDescriptor_RequireSignature = {
    __kind: 'RequireSignature'
    value: string
}

export type DispatchRuleDescriptor =
    | DispatchRuleDescriptor_MaxFuelBurnPerTransaction
    | DispatchRuleDescriptor_PermittedCalls
    | DispatchRuleDescriptor_PermittedExtrinsics
    | DispatchRuleDescriptor_RequireToken
    | DispatchRuleDescriptor_TankFuelBudget
    | DispatchRuleDescriptor_UserFuelBudget
    | DispatchRuleDescriptor_WhitelistedCallers
    | DispatchRuleDescriptor_WhitelistedCollections
    | DispatchRuleDescriptor_WhitelistedPallets
    | DispatchRuleDescriptor_MinimumInfusion
    | DispatchRuleDescriptor_RequireSignature
