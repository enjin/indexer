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
    }
] as const

export default chains
