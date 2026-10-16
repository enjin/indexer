export type UnbondPool = {
    points: bigint
    balance: bigint
}

export type SubPools = {
    noEra: UnbondPool
    withEra: [number, UnbondPool][]
}
