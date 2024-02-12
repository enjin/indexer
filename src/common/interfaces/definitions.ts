import type { Definitions } from '@polkadot/types/types'

export default {
    rpc: {},
    types: {
        EpMultiTokensAttribute: {
            value: 'Bytes',
            deposit: 'Compact<u128>',
        },
        EpMultiTokensPolicyMarketDefaultRoyalty: {
            beneficiary: 'AccountId32',
            percentage: 'Compact<Perbill>',
        },
        EpMultiTokensPolicyMarketDefaultMarketPolicy: {
            royalty: 'Option<EpMultiTokensPolicyMarketDefaultRoyalty>',
        },
        EpMultiTokensPolicyAttributeDefaultAttributePolicy: 'Null',
        EpMultiTokensPolicyTransferDefaultTransferPolicy: {
            isFrozen: 'bool',
        },
        EpMultiTokensPolicyBurnDefaultBurnPolicy: 'Null',
        EpMultiTokensPolicyMintDefaultMintPolicy: {
            maxTokenCount: 'Option<u64>',
            maxTokenSupply: 'Option<u128>',
            forceSingleMint: 'bool',
        },
        EpMultiTokensPolicyDefaultCollectionPolicy: {
            mint: 'EpMultiTokensPolicyMintDefaultMintPolicy',
            burn: 'EpMultiTokensPolicyBurnDefaultBurnPolicy',
            transfer: 'EpMultiTokensPolicyTransferDefaultTransferPolicy',
            attribute: 'EpMultiTokensPolicyAttributeDefaultAttributePolicy',
            market: 'EpMultiTokensPolicyMarketDefaultMarketPolicy',
        },
        EpMultiTokensTokenAssetId: {
            collectionId: 'Compact<u128>',
            tokenId: 'Compact<u128>',
        },
        EpMultiTokensCollection: {
            owner: 'AccountId32',
            policy: 'EpMultiTokensPolicyDefaultCollectionPolicy',
            tokenCount: 'Compact<u64>',
            attributeCount: 'Compact<u32>',
            totalDeposit: 'Compact<u128>',
            explicitRoyaltyCurrencies: 'BTreeMap<EpMultiTokensTokenAssetId, Null>',
        },
        EpMultiTokensTokenTokenCap: {
            _enum: {
                SingleMint: 'Null',
                Supply: 'Compact<u128>',
                CollapsingSupply: 'Compact<u128>',
            },
        },
        EpMultiTokensTokenFreezeState: {
            _enum: ['Permanent', 'Temporary', 'Never'],
        },
        EpMultiTokensTokenSufficiency: {
            _enum: {
                Sufficient: 'Null',
                Insufficient: 'Option<Compact<u128>>',
            },
        },
        EpMultiTokensTokenTokenMarketBehavior: {
            _enum: {
                HasRoyalty: 'EpMultiTokensPolicyMarketDefaultRoyalty',
                IsCurrency: 'Null',
            },
        },
        EpMultiTokensToken: {
            supply: 'Compact<u128>',
            cap: 'Option<EpMultiTokensTokenTokenCap>',
            freezeState: 'Option<EpMultiTokensTokenFreezeState>',
            minimumBalance: 'Compact<u128>',
            sufficiency: 'EpMultiTokensTokenSufficiency',
            mintDeposit: 'Compact<u128>',
            attributeCount: 'Compact<u32>',
            marketBehavior: 'Option<EpMultiTokensTokenTokenMarketBehavior>',
            listingForbidden: 'bool',
            // metadata: 'EpMultiTokensFrameDefaultTokenMetadata',
        },
        PalletMultiTokensFeaturesCollectionTypesCollectionAccount: {
            isFrozen: 'bool',
            approvals: 'BTreeMap<AccountId32, Option<u32>>',
            accountCount: 'Compact<u32>',
        },
        PalletMultiTokensFeaturesOperatorTypesApproval: {
            amount: 'Compact<u128>',
            expiration: 'Option<u32>',
        },
        PalletMultiTokensFeaturesTokenTypesTokenAccount: {
            balance: 'Compact<u128>',
            reservedBalance: 'Compact<u128>',
            lockedBalance: 'Compact<u128>',
            namedReserves: 'BTreeMap<U8aFixed, u128>',
            locks: 'BTreeMap<U8aFixed, u128>',
            approvals: 'BTreeMap<AccountId32, PalletMultiTokensFeaturesOperatorTypesApproval>',
            isFrozen: 'bool',
        },
    },
} as Definitions
