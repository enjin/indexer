export type DefaultMintParams_CreateToken = {
    tokenId: bigint
    initialSupply: bigint
    sufficiency?: {
        __kind: string // Insufficient or Sufficient
        value?: bigint // unitPrice? or minimumBalance
    }
    accountDepositCount?: number
    cap?: {
        __kind: string
        value?: bigint
    }
    behavior?: {
        __kind: string
        value?:
            | {
                  beneficiaries: {
                      beneficiary: string
                      percentage: number
                  }[]
              }
            | {
                  beneficiary: string
                  percentage: number
              }
    }
    listingForbidden: boolean
    freezeState?: {
        __kind: 'Never' | 'Temporary' | 'Permanent'
    }
    attributes?: {
        key: string
        value: string
    }[]
    infusion?: bigint
    anyoneCanInfuse?: boolean
    metadata?: {
        name: string
        symbol: string
        decimalCount: number
    }
    privilegedParams?: {
        requiresDeposit: boolean
        depositor?: string
    }
}

export type DefaultMintParams_Mint = {
    tokenId: bigint
    amount: bigint
    depositor?: string
}
