import '@polkadot/types/lookup'

import type { BTreeMap, Bytes, Compact, Enum, Null, Option, Struct, U8aFixed, bool, u128, u32, u64 } from '@polkadot/types-codec'
import type { AccountId32, Perbill } from '@polkadot/types/interfaces/runtime'

declare module '@polkadot/types/lookup' {
    /** @name EpMultiTokensPolicyMarketDefaultRoyalty (125) */
    interface EpMultiTokensPolicyMarketDefaultRoyalty extends Struct {
        readonly beneficiary: AccountId32
        readonly percentage: Compact<Perbill>
    }

    /** @name EpMultiTokensTokenAssetId (128) */
    interface EpMultiTokensTokenAssetId extends Struct {
        readonly collectionId: Compact<u128>
        readonly tokenId: Compact<u128>
    }

    /** @name EpMultiTokensFrameDefaultTokenMetadata (136) */
    interface EpMultiTokensFrameDefaultTokenMetadata extends Enum {
        readonly isNative: boolean
        readonly isForeign: boolean
        readonly asForeign: EpMultiTokensFrameDefaultForeignTokenMetadata
        readonly type: 'Native' | 'Foreign'
    }

    /** @name EpMultiTokensFrameDefaultForeignTokenMetadata (137) */
    interface EpMultiTokensFrameDefaultForeignTokenMetadata extends Struct {
        readonly decimalCount: Compact<u32>
        readonly name: Bytes
        readonly symbol: Bytes
        readonly location: Option<XcmV3MultiLocation>
        readonly unitsPerSecond: Option<u128>
        readonly premintedSupply: Compact<u128>
    }

    /** @name EpMultiTokensTokenTokenMarketBehavior (147) */
    interface EpMultiTokensTokenTokenMarketBehavior extends Enum {
        readonly isHasRoyalty: boolean
        readonly asHasRoyalty: EpMultiTokensPolicyMarketDefaultRoyalty
        readonly isIsCurrency: boolean
        readonly type: 'HasRoyalty' | 'IsCurrency'
    }

    /** @name EpMultiTokensFreeze (150) */
    interface EpMultiTokensFreeze extends Struct {
        readonly collectionId: Compact<u128>
        readonly freezeType: EpMultiTokensFreezeType
    }

    /** @name EpMultiTokensFreezeType (151) */
    interface EpMultiTokensFreezeType extends Enum {
        readonly isCollection: boolean
        readonly isToken: boolean
        readonly asToken: {
            readonly tokenId: u128
            readonly freezeState: Option<EpMultiTokensTokenFreezeState>
        } & Struct
        readonly isCollectionAccount: boolean
        readonly asCollectionAccount: AccountId32
        readonly isTokenAccount: boolean
        readonly asTokenAccount: {
            readonly tokenId: Compact<u128>
            readonly accountId: AccountId32
        } & Struct
        readonly type: 'Collection' | 'Token' | 'CollectionAccount' | 'TokenAccount'
    }

    /** @name EpMultiTokensTokenFreezeState (153) */
    interface EpMultiTokensTokenFreezeState extends Enum {
        readonly isPermanent: boolean
        readonly isTemporary: boolean
        readonly isNever: boolean
        readonly type: 'Permanent' | 'Temporary' | 'Never'
    }

    /** @name EpMultiTokensCollection (159) */
    interface EpMultiTokensCollection extends Struct {
        readonly owner: AccountId32
        readonly policy: EpMultiTokensPolicyDefaultCollectionPolicy
        readonly tokenCount: Compact<u64>
        readonly attributeCount: Compact<u32>
        readonly totalDeposit: Compact<u128>
        readonly explicitRoyaltyCurrencies: BTreeMap<EpMultiTokensTokenAssetId, Null>
    }

    /** @name EpMultiTokensPolicyDefaultCollectionPolicy (160) */
    interface EpMultiTokensPolicyDefaultCollectionPolicy extends Struct {
        readonly mint: EpMultiTokensPolicyMintDefaultMintPolicy
        readonly burn: EpMultiTokensPolicyBurnDefaultBurnPolicy
        readonly transfer: EpMultiTokensPolicyTransferDefaultTransferPolicy
        readonly attribute: EpMultiTokensPolicyAttributeDefaultAttributePolicy
        readonly market: EpMultiTokensPolicyMarketDefaultMarketPolicy
    }

    /** @name EpMultiTokensPolicyMintDefaultMintPolicy (161) */
    interface EpMultiTokensPolicyMintDefaultMintPolicy extends Struct {
        readonly maxTokenCount: Option<u64>
        readonly maxTokenSupply: Option<u128>
        readonly forceSingleMint: bool
    }

    /** @name EpMultiTokensPolicyBurnDefaultBurnPolicy (163) */
    type EpMultiTokensPolicyBurnDefaultBurnPolicy = Null

    /** @name EpMultiTokensPolicyTransferDefaultTransferPolicy (164) */
    interface EpMultiTokensPolicyTransferDefaultTransferPolicy extends Struct {
        readonly isFrozen: bool
    }

    /** @name EpMultiTokensPolicyAttributeDefaultAttributePolicy (165) */
    type EpMultiTokensPolicyAttributeDefaultAttributePolicy = Null

    /** @name EpMultiTokensPolicyMarketDefaultMarketPolicy (166) */
    interface EpMultiTokensPolicyMarketDefaultMarketPolicy extends Struct {
        readonly royalty: Option<EpMultiTokensPolicyMarketDefaultRoyalty>
    }

    /** @name EpMultiTokensToken (172) */
    interface EpMultiTokensToken extends Struct {
        readonly supply: Compact<u128>
        readonly cap: Option<EpMultiTokensTokenTokenCap>
        readonly freezeState: Option<EpMultiTokensTokenFreezeState>
        readonly minimumBalance: Compact<u128>
        readonly sufficiency: EpMultiTokensTokenSufficiency
        readonly mintDeposit: Compact<u128>
        readonly attributeCount: Compact<u32>
        readonly marketBehavior: Option<EpMultiTokensTokenTokenMarketBehavior>
        readonly listingForbidden: bool
        readonly metadata: EpMultiTokensFrameDefaultTokenMetadata
    }

    /** @name EpMultiTokensTokenTokenCap (174) */
    interface EpMultiTokensTokenTokenCap extends Enum {
        readonly isSingleMint: boolean
        readonly isSupply: boolean
        readonly asSupply: Compact<u128>
        readonly isCollapsingSupply: boolean
        readonly asCollapsingSupply: Compact<u128>
        readonly type: 'SingleMint' | 'Supply' | 'CollapsingSupply'
    }

    /** @name EpMultiTokensTokenSufficiency (175) */
    interface EpMultiTokensTokenSufficiency extends Enum {
        readonly isSufficient: boolean
        readonly isInsufficient: boolean
        readonly asInsufficient: {
            readonly unitPrice: Compact<u128>
        } & Struct
        readonly type: 'Sufficient' | 'Insufficient'
    }

    /** @name PalletMultiTokensFeaturesCollectionTypesCollectionAccount (177) */
    interface PalletMultiTokensFeaturesCollectionTypesCollectionAccount extends Struct {
        readonly isFrozen: bool
        readonly approvals: BTreeMap<AccountId32, Option<u32>>
        readonly accountCount: Compact<u32>
    }

    /** @name PalletMultiTokensFeaturesTokenTypesTokenAccount (184) */
    interface PalletMultiTokensFeaturesTokenTypesTokenAccount extends Struct {
        readonly balance: Compact<u128>
        readonly reservedBalance: Compact<u128>
        readonly lockedBalance: Compact<u128>
        readonly namedReserves: BTreeMap<U8aFixed, u128>
        readonly locks: BTreeMap<U8aFixed, u128>
        readonly approvals: BTreeMap<AccountId32, PalletMultiTokensFeaturesOperatorTypesApproval>
        readonly isFrozen: bool
    }

    /** @name PalletMultiTokensFeaturesOperatorTypesApproval (185) */
    interface PalletMultiTokensFeaturesOperatorTypesApproval extends Struct {
        readonly amount: Compact<u128>
        readonly expiration: Option<u32>
    }
} // declare module
