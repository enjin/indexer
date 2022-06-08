import chains from "../../chains"

export interface ChainInfo {
    readonly id: string
    readonly token: string
    readonly decimals: number | null
    readonly paraId?: number
    readonly relay?: string
}

export type ChainName = typeof chains[number]['name']