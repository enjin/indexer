import '@polkadot/types/lookup'

import type { BTreeMap, Bytes, Compact, Enum, Null, Option, Struct, U8aFixed, bool, u128, u32, u64 } from '@polkadot/types-codec'
import type { AccountId32, Perbill } from '@polkadot/types/interfaces/runtime'

declare module '@polkadot/types/lookup' {
    interface EpMultiTokensPolicyMarketDefaultRoyalty extends Struct {
        readonly beneficiary: AccountId32
        readonly percentage: Compact<Perbill>
    }

    interface EpMultiTokensTokenAssetId extends Struct {
        readonly collectionId: Compact<u128>
        readonly tokenId: Compact<u128>
    }

    interface EpMultiTokensFrameDefaultTokenMetadata extends Enum {
        readonly isNative: boolean
        readonly isForeign: boolean
        readonly asForeign: EpMultiTokensFrameDefaultForeignTokenMetadata
        readonly type: 'Native' | 'Foreign'
    }

    interface EpMultiTokensFrameDefaultForeignTokenMetadata extends Struct {
        readonly decimalCount: Compact<u32>
        readonly name: Bytes
        readonly symbol: Bytes
        readonly location: Option<XcmV3MultiLocation>
        readonly unitsPerSecond: Option<u128>
        readonly premintedSupply: Compact<u128>
    }

    interface EpMultiTokensTokenTokenMarketBehavior extends Enum {
        readonly isHasRoyalty: boolean
        readonly asHasRoyalty: EpMultiTokensPolicyMarketDefaultRoyalty
        readonly isIsCurrency: boolean
        readonly type: 'HasRoyalty' | 'IsCurrency'
    }

    interface EpMultiTokensFreeze extends Struct {
        readonly collectionId: Compact<u128>
        readonly freezeType: EpMultiTokensFreezeType
    }

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

    interface EpMultiTokensTokenFreezeState extends Enum {
        readonly isPermanent: boolean
        readonly isTemporary: boolean
        readonly isNever: boolean
        readonly type: 'Permanent' | 'Temporary' | 'Never'
    }

    interface EpMultiTokensCollection extends Struct {
        readonly owner: AccountId32
        readonly policy: EpMultiTokensPolicyDefaultCollectionPolicy
        readonly tokenCount: Compact<u64>
        readonly attributeCount: Compact<u32>
        readonly totalDeposit: Compact<u128>
        readonly explicitRoyaltyCurrencies: BTreeMap<EpMultiTokensTokenAssetId, Null>
    }

    interface EpMultiTokensPolicyDefaultCollectionPolicy extends Struct {
        readonly mint: EpMultiTokensPolicyMintDefaultMintPolicy
        readonly burn: EpMultiTokensPolicyBurnDefaultBurnPolicy
        readonly transfer: EpMultiTokensPolicyTransferDefaultTransferPolicy
        readonly attribute: EpMultiTokensPolicyAttributeDefaultAttributePolicy
        readonly market: EpMultiTokensPolicyMarketDefaultMarketPolicy
    }

    interface EpMultiTokensPolicyMintDefaultMintPolicy extends Struct {
        readonly maxTokenCount: Option<u64>
        readonly maxTokenSupply: Option<u128>
        readonly forceSingleMint: bool
    }

    type EpMultiTokensPolicyBurnDefaultBurnPolicy = Null

    interface EpMultiTokensPolicyTransferDefaultTransferPolicy extends Struct {
        readonly isFrozen: bool
    }

    type EpMultiTokensPolicyAttributeDefaultAttributePolicy = Null

    interface EpMultiTokensPolicyMarketDefaultMarketPolicy extends Struct {
        readonly royalty: Option<EpMultiTokensPolicyMarketDefaultRoyalty>
    }

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

    interface EpMultiTokensTokenTokenCap extends Enum {
        readonly isSingleMint: boolean
        readonly isSupply: boolean
        readonly asSupply: Compact<u128>
        readonly isCollapsingSupply: boolean
        readonly asCollapsingSupply: Compact<u128>
        readonly type: 'SingleMint' | 'Supply' | 'CollapsingSupply'
    }

    interface EpMultiTokensTokenSufficiency extends Enum {
        readonly isSufficient: boolean
        readonly isInsufficient: boolean
        readonly asInsufficient: {
            readonly unitPrice: Compact<u128>
        } & Struct
        readonly type: 'Sufficient' | 'Insufficient'
    }

    interface PalletMultiTokensFeaturesCollectionTypesCollectionAccount extends Struct {
        readonly isFrozen: bool
        readonly approvals: BTreeMap<AccountId32, Option<u32>>
        readonly accountCount: Compact<u32>
    }

    interface PalletMultiTokensFeaturesTokenTypesTokenAccount extends Struct {
        readonly balance: Compact<u128>
        readonly reservedBalance: Compact<u128>
        readonly lockedBalance: Compact<u128>
        readonly namedReserves: BTreeMap<U8aFixed, u128>
        readonly locks: BTreeMap<U8aFixed, u128>
        readonly approvals: BTreeMap<AccountId32, PalletMultiTokensFeaturesOperatorTypesApproval>
        readonly isFrozen: bool
    }

    interface PalletMultiTokensFeaturesOperatorTypesApproval extends Struct {
        readonly amount: Compact<u128>
        readonly expiration: Option<u32>
    }
}
