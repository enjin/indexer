const chains = [
    {
        name: 'efinity',
        displayName: 'Efinity',
        prefix: 1110,
        tokens: [
            {
                symbol: 'EFI',
                decimals: 18,
            },
        ],
        paraId: 2021,
        relay: 'polkadot',
        genesisHash: '0x335369975fced3fc22e23498da306a712f4fd964c957364d53c49cea9db8bc2f',
        website: 'https://efinity.io/',
    },
    {
        name: 'rocfinity',
        displayName: 'Rocfinity',
        prefix: 195,
        tokens: [
            {
                symbol: 'RFI',
                decimals: 18,
            },
        ],
        paraId: 2021,
        relay: 'rococo',
        genesisHash: '0x1cb2120b3afd6da2dca23d8b95e30fd7eabe4357c3d470bc02487a7d6fd00d1d',
        website: 'https://efinity.io/',
    },
    {
        name: 'matrix-canary',
        displayName: 'matrix-canary',
        prefix: 13400,
        tokens: [
            {
                symbol: 'cENJ',
                decimals: 18,
            },
        ],
        paraId: 1000,
        relay: 'enjin-chain',
        genesisHash: '0x364d2ef585c308e4c3d38c410db2e0b4bb1ea5fa4e67a009ac9d352839fc2790',
        website: 'https://enjin.io/',
    },
] as const

export default chains
