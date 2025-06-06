'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.V3Response =
    exports.V3WeightLimit =
    exports.V3WildFungibility =
    exports.V3WildMultiAsset =
    exports.V3MultiAssetFilter =
    exports.V3MaybeErrorCode =
    exports.V3QueryResponseInfo =
    exports.V2OriginKind =
    exports.DoubleEncoded =
    exports.V3Instruction =
    exports.PolkadotXcmEvent =
    exports.Perbill =
    exports.Pool =
    exports.PoolsMutation =
    exports.PoolsEvent =
    exports.PreimageEvent =
    exports.SchedulerEvent =
    exports.SessionEvent =
    exports.SudoEvent =
    exports.DispatchClass =
    exports.Pays =
    exports.DispatchInfo =
    exports.SystemEvent =
    exports.TechnicalCommitteeEvent =
    exports.TechnicalMembershipEvent =
    exports.TransactionPaymentEvent =
    exports.UnknownTokensEvent =
    exports.ArithmeticError =
    exports.ModuleError =
    exports.TokenError =
    exports.TransactionalError =
    exports.DispatchError =
    exports.UtilityEvent =
    exports.V3AssetId =
    exports.V3AssetInstance =
    exports.V3Fungibility =
    exports.V3MultiAsset =
    exports.V3NetworkId =
    exports.V3BodyId =
    exports.V3BodyPart =
    exports.V3Junction =
    exports.V3Junctions =
    exports.V3MultiLocation =
    exports.XTokensEvent =
    exports.V3Error =
    exports.Id =
    exports.XcmpQueueEvent =
    exports.Event =
    exports.EventRecord =
    exports.H256 =
        void 0
exports.Listing =
    exports.MarketplaceEvent =
    exports.CollectionAccount =
    exports.ShouldMutate =
    exports.DefaultCollectionMutation =
    exports.DefaultMintPolicy =
    exports.DefaultTransferPolicy =
    exports.DefaultMarketPolicy =
    exports.DefaultCollectionPolicy =
    exports.AssetId =
    exports.Collection =
    exports.FreezeType =
    exports.Freeze =
    exports.MigrationStage =
    exports.RootOrSigned =
    exports.Approval =
    exports.TokenAccount =
    exports.Type_142 =
    exports.Type_145 =
    exports.Type_146 =
    exports.DefaultTokenMutation =
    exports.TokenCap =
    exports.FreezeState =
    exports.Sufficiency =
    exports.DefaultRoyalty =
    exports.TokenMarketBehavior =
    exports.BoundedString =
    exports.DefaultForeignTokenMetadata =
    exports.DefaultTokenMetadata =
    exports.Token =
    exports.MultiTokensEvent =
    exports.MultiTokensMigrationEvent =
    exports.MultisigEvent =
    exports.OrmlXcmEvent =
    exports.ParachainSystemEvent =
    exports.V2AssetId =
    exports.V2AssetInstance =
    exports.V2Fungibility =
    exports.V2MultiAsset =
    exports.VersionedMultiAssets =
    exports.V3Outcome =
    exports.V2NetworkId =
    exports.WeakBoundedVec =
    exports.V2BodyId =
    exports.V2BodyPart =
    exports.V2Junction =
    exports.V2Junctions =
    exports.V2MultiLocation =
    exports.VersionedMultiLocation =
    exports.V3PalletInfo =
        void 0
exports.XTokensCall =
    exports.XcmpQueueCall =
    exports.Call =
    exports.Type_297 =
    exports.Type_300 =
    exports.Origin =
    exports.Type_298 =
    exports.Void =
    exports.RawOrigin =
    exports.OriginCaller =
    exports.Weight =
    exports.AccountId32 =
    exports.Timepoint =
    exports.FuelTankDescriptor =
    exports.MultiAddress =
    exports.MaxFuelBurnPerTransactionRule =
    exports.TankFuelBudgetRuleDescriptor =
    exports.UserFuelBudgetRuleDescriptor =
    exports.DispatchRuleDescriptor =
    exports.Phase =
    exports.BalanceStatus =
    exports.BalancesEvent =
    exports.BountiesEvent =
    exports.CollatorStakingEvent =
    exports.CommunityPoolEvent =
    exports.CouncilEvent =
    exports.CumulusXcmEvent =
    exports.VoteThreshold =
    exports.Vote =
    exports.AccountVote =
    exports.DemocracyEvent =
    exports.DmpQueueEvent =
    exports.EfinityUtilityEvent =
    exports.MinimumWeightFeePair =
    exports.EfinityXcmEvent =
    exports.ExtrinsicPauseEvent =
    exports.DispatchRuleKind =
    exports.Consumption =
    exports.UserAccountManagement =
    exports.Type_204 =
    exports.RequireTokenRule =
    exports.AccountRuleDescriptor =
    exports.DefaultTankMutation =
    exports.FuelTanksEvent =
    exports.Bid =
    exports.FeeSide =
    exports.AuctionData =
    exports.ListingData =
    exports.AuctionState =
    exports.ListingState =
        void 0
exports.Type_379 =
    exports.AttributeKeyValuePair =
    exports.Recipient =
    exports.DefaultBurnParams =
    exports.DefaultMintPolicyDescriptor =
    exports.DefaultMarketPolicyDescriptor =
    exports.DefaultCollectionPolicyDescriptor =
    exports.DefaultCollectionDescriptor =
    exports.DefaultTransferParams =
    exports.SufficiencyParam =
    exports.ForeignTokenCreationParams =
    exports.DefaultMintParams =
    exports.MultiTokensCall =
    exports.Attribute =
    exports.MultiTokensMigrationCall =
    exports.MultisigCall =
    exports.OrmlXcmCall =
    exports.HeadData =
    exports.V2PersistedValidationData =
    exports.StorageProof =
    exports.InboundDownwardMessage =
    exports.InboundHrmpMessage =
    exports.ParachainInherentData =
    exports.ParachainSystemCall =
    exports.Type_339 =
    exports.Type_340 =
    exports.Type_343 =
    exports.Type_336 =
    exports.V2WeightLimit =
    exports.V2WildFungibility =
    exports.V2WildMultiAsset =
    exports.V2MultiAssetFilter =
    exports.V2Error =
    exports.V2Response =
    exports.V2Instruction =
    exports.VersionedXcm =
    exports.PolkadotXcmCall =
    exports.PoolsCall =
    exports.PreimageCall =
    exports.SchedulerCall =
    exports.Public =
    exports.SessionKeys =
    exports.SessionCall =
    exports.SudoCall =
    exports.SystemCall =
    exports.TechnicalCommitteeCall =
    exports.TechnicalMembershipCall =
    exports.TimestampCall =
    exports.UtilityCall =
    exports.VersionedMultiAsset =
        void 0
exports.BalancesCall =
    exports.BountiesCall =
    exports.CollatorStakingCall =
    exports.CommunityPoolCall =
    exports.CouncilCall =
    exports.CumulusXcmCall =
    exports.Conviction =
    exports.Bounded =
    exports.DemocracyCall =
    exports.DmpQueueCall =
    exports.EfinityUtilityCall =
    exports.XcmOperation =
    exports.ParachainId =
    exports.H160 =
    exports.Account =
    exports.CurrencyIdAmountPair =
    exports.EfinityXcmCall =
    exports.ExtrinsicPauseCall =
    exports.FuelTanksCall =
    exports.MarketplaceCall =
        void 0
var support_1 = require('./support')
exports.H256 = support_1.sts.bytes()
exports.EventRecord = support_1.sts.struct(function () {
    return {
        phase: exports.Phase,
        event: exports.Event,
        topics: support_1.sts.array(function () {
            return exports.H256
        }),
    }
})
exports.Event = support_1.sts.closedEnum(function () {
    return {
        Balances: exports.BalancesEvent,
        Bounties: exports.BountiesEvent,
        CollatorStaking: exports.CollatorStakingEvent,
        CommunityPool: exports.CommunityPoolEvent,
        Council: exports.CouncilEvent,
        CumulusXcm: exports.CumulusXcmEvent,
        Democracy: exports.DemocracyEvent,
        DmpQueue: exports.DmpQueueEvent,
        EfinityUtility: exports.EfinityUtilityEvent,
        EfinityXcm: exports.EfinityXcmEvent,
        ExtrinsicPause: exports.ExtrinsicPauseEvent,
        FuelTanks: exports.FuelTanksEvent,
        Marketplace: exports.MarketplaceEvent,
        MultiTokens: exports.MultiTokensEvent,
        MultiTokensMigration: exports.MultiTokensMigrationEvent,
        Multisig: exports.MultisigEvent,
        OrmlXcm: exports.OrmlXcmEvent,
        ParachainSystem: exports.ParachainSystemEvent,
        PolkadotXcm: exports.PolkadotXcmEvent,
        Pools: exports.PoolsEvent,
        Preimage: exports.PreimageEvent,
        Scheduler: exports.SchedulerEvent,
        Session: exports.SessionEvent,
        Sudo: exports.SudoEvent,
        System: exports.SystemEvent,
        TechnicalCommittee: exports.TechnicalCommitteeEvent,
        TechnicalMembership: exports.TechnicalMembershipEvent,
        TransactionPayment: exports.TransactionPaymentEvent,
        UnknownTokens: exports.UnknownTokensEvent,
        Utility: exports.UtilityEvent,
        XTokens: exports.XTokensEvent,
        XcmpQueue: exports.XcmpQueueEvent,
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.XcmpQueueEvent = support_1.sts.closedEnum(function () {
    return {
        BadFormat: support_1.sts.enumStruct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        }),
        BadVersion: support_1.sts.enumStruct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        }),
        Fail: support_1.sts.enumStruct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            error: exports.V3Error,
            weight: exports.Weight,
        }),
        OverweightEnqueued: support_1.sts.enumStruct({
            sender: exports.Id,
            sentAt: support_1.sts.number(),
            index: support_1.sts.bigint(),
            required: exports.Weight,
        }),
        OverweightServiced: support_1.sts.enumStruct({
            index: support_1.sts.bigint(),
            used: exports.Weight,
        }),
        Success: support_1.sts.enumStruct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            weight: exports.Weight,
        }),
        XcmpMessageSent: support_1.sts.enumStruct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        }),
    }
})
exports.Id = support_1.sts.number()
exports.V3Error = support_1.sts.closedEnum(function () {
    return {
        AssetNotFound: support_1.sts.unit(),
        BadOrigin: support_1.sts.unit(),
        Barrier: support_1.sts.unit(),
        DestinationUnsupported: support_1.sts.unit(),
        ExceedsMaxMessageSize: support_1.sts.unit(),
        ExceedsStackLimit: support_1.sts.unit(),
        ExpectationFalse: support_1.sts.unit(),
        ExportError: support_1.sts.unit(),
        FailedToDecode: support_1.sts.unit(),
        FailedToTransactAsset: support_1.sts.unit(),
        FeesNotMet: support_1.sts.unit(),
        HoldingWouldOverflow: support_1.sts.unit(),
        InvalidLocation: support_1.sts.unit(),
        LocationCannotHold: support_1.sts.unit(),
        LocationFull: support_1.sts.unit(),
        LocationNotInvertible: support_1.sts.unit(),
        LockError: support_1.sts.unit(),
        MaxWeightInvalid: support_1.sts.unit(),
        NameMismatch: support_1.sts.unit(),
        NoDeal: support_1.sts.unit(),
        NoPermission: support_1.sts.unit(),
        NotDepositable: support_1.sts.unit(),
        NotHoldingFees: support_1.sts.unit(),
        NotWithdrawable: support_1.sts.unit(),
        Overflow: support_1.sts.unit(),
        PalletNotFound: support_1.sts.unit(),
        ReanchorFailed: support_1.sts.unit(),
        TooExpensive: support_1.sts.unit(),
        Transport: support_1.sts.unit(),
        Trap: support_1.sts.bigint(),
        Unanchored: support_1.sts.unit(),
        UnhandledXcmVersion: support_1.sts.unit(),
        Unimplemented: support_1.sts.unit(),
        UnknownClaim: support_1.sts.unit(),
        Unroutable: support_1.sts.unit(),
        UntrustedReserveLocation: support_1.sts.unit(),
        UntrustedTeleportLocation: support_1.sts.unit(),
        VersionIncompatible: support_1.sts.unit(),
        WeightLimitReached: exports.Weight,
        WeightNotComputable: support_1.sts.unit(),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.XTokensEvent = support_1.sts.closedEnum(function () {
    return {
        TransferredMultiAssets: support_1.sts.enumStruct({
            sender: exports.AccountId32,
            assets: support_1.sts.array(function () {
                return exports.V3MultiAsset
            }),
            fee: exports.V3MultiAsset,
            dest: exports.V3MultiLocation,
        }),
    }
})
exports.V3MultiLocation = support_1.sts.struct(function () {
    return {
        parents: support_1.sts.number(),
        interior: exports.V3Junctions,
    }
})
exports.V3Junctions = support_1.sts.closedEnum(function () {
    return {
        Here: support_1.sts.unit(),
        X1: exports.V3Junction,
        X2: support_1.sts.tuple(function () {
            return [exports.V3Junction, exports.V3Junction]
        }),
        X3: support_1.sts.tuple(function () {
            return [exports.V3Junction, exports.V3Junction, exports.V3Junction]
        }),
        X4: support_1.sts.tuple(function () {
            return [exports.V3Junction, exports.V3Junction, exports.V3Junction, exports.V3Junction]
        }),
        X5: support_1.sts.tuple(function () {
            return [exports.V3Junction, exports.V3Junction, exports.V3Junction, exports.V3Junction, exports.V3Junction]
        }),
        X6: support_1.sts.tuple(function () {
            return [
                exports.V3Junction,
                exports.V3Junction,
                exports.V3Junction,
                exports.V3Junction,
                exports.V3Junction,
                exports.V3Junction,
            ]
        }),
        X7: support_1.sts.tuple(function () {
            return [
                exports.V3Junction,
                exports.V3Junction,
                exports.V3Junction,
                exports.V3Junction,
                exports.V3Junction,
                exports.V3Junction,
                exports.V3Junction,
            ]
        }),
        X8: support_1.sts.tuple(function () {
            return [
                exports.V3Junction,
                exports.V3Junction,
                exports.V3Junction,
                exports.V3Junction,
                exports.V3Junction,
                exports.V3Junction,
                exports.V3Junction,
                exports.V3Junction,
            ]
        }),
    }
})
exports.V3Junction = support_1.sts.closedEnum(function () {
    return {
        AccountId32: support_1.sts.enumStruct({
            network: support_1.sts.option(function () {
                return exports.V3NetworkId
            }),
            id: support_1.sts.bytes(),
        }),
        AccountIndex64: support_1.sts.enumStruct({
            network: support_1.sts.option(function () {
                return exports.V3NetworkId
            }),
            index: support_1.sts.bigint(),
        }),
        AccountKey20: support_1.sts.enumStruct({
            network: support_1.sts.option(function () {
                return exports.V3NetworkId
            }),
            key: support_1.sts.bytes(),
        }),
        GeneralIndex: support_1.sts.bigint(),
        GeneralKey: support_1.sts.enumStruct({
            length: support_1.sts.number(),
            data: support_1.sts.bytes(),
        }),
        GlobalConsensus: exports.V3NetworkId,
        OnlyChild: support_1.sts.unit(),
        PalletInstance: support_1.sts.number(),
        Parachain: support_1.sts.number(),
        Plurality: support_1.sts.enumStruct({
            id: exports.V3BodyId,
            part: exports.V3BodyPart,
        }),
    }
})
exports.V3BodyPart = support_1.sts.closedEnum(function () {
    return {
        AtLeastProportion: support_1.sts.enumStruct({
            nom: support_1.sts.number(),
            denom: support_1.sts.number(),
        }),
        Fraction: support_1.sts.enumStruct({
            nom: support_1.sts.number(),
            denom: support_1.sts.number(),
        }),
        Members: support_1.sts.enumStruct({
            count: support_1.sts.number(),
        }),
        MoreThanProportion: support_1.sts.enumStruct({
            nom: support_1.sts.number(),
            denom: support_1.sts.number(),
        }),
        Voice: support_1.sts.unit(),
    }
})
exports.V3BodyId = support_1.sts.closedEnum(function () {
    return {
        Administration: support_1.sts.unit(),
        Defense: support_1.sts.unit(),
        Executive: support_1.sts.unit(),
        Index: support_1.sts.number(),
        Judicial: support_1.sts.unit(),
        Legislative: support_1.sts.unit(),
        Moniker: support_1.sts.bytes(),
        Technical: support_1.sts.unit(),
        Treasury: support_1.sts.unit(),
        Unit: support_1.sts.unit(),
    }
})
exports.V3NetworkId = support_1.sts.closedEnum(function () {
    return {
        BitcoinCash: support_1.sts.unit(),
        BitcoinCore: support_1.sts.unit(),
        ByFork: support_1.sts.enumStruct({
            blockNumber: support_1.sts.bigint(),
            blockHash: support_1.sts.bytes(),
        }),
        ByGenesis: support_1.sts.bytes(),
        Ethereum: support_1.sts.enumStruct({
            chainId: support_1.sts.bigint(),
        }),
        Kusama: support_1.sts.unit(),
        Polkadot: support_1.sts.unit(),
        Rococo: support_1.sts.unit(),
        Westend: support_1.sts.unit(),
        Wococo: support_1.sts.unit(),
    }
})
exports.V3MultiAsset = support_1.sts.struct(function () {
    return {
        id: exports.V3AssetId,
        fun: exports.V3Fungibility,
    }
})
exports.V3Fungibility = support_1.sts.closedEnum(function () {
    return {
        Fungible: support_1.sts.bigint(),
        NonFungible: exports.V3AssetInstance,
    }
})
exports.V3AssetInstance = support_1.sts.closedEnum(function () {
    return {
        Array16: support_1.sts.bytes(),
        Array32: support_1.sts.bytes(),
        Array4: support_1.sts.bytes(),
        Array8: support_1.sts.bytes(),
        Index: support_1.sts.bigint(),
        Undefined: support_1.sts.unit(),
    }
})
exports.V3AssetId = support_1.sts.closedEnum(function () {
    return {
        Abstract: support_1.sts.bytes(),
        Concrete: exports.V3MultiLocation,
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.UtilityEvent = support_1.sts.closedEnum(function () {
    return {
        BatchCompleted: support_1.sts.unit(),
        BatchCompletedWithErrors: support_1.sts.unit(),
        BatchInterrupted: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            error: exports.DispatchError,
        }),
        DispatchedAs: support_1.sts.enumStruct({
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return exports.DispatchError
                }
            ),
        }),
        ItemCompleted: support_1.sts.unit(),
        ItemFailed: support_1.sts.enumStruct({
            error: exports.DispatchError,
        }),
    }
})
exports.DispatchError = support_1.sts.closedEnum(function () {
    return {
        Arithmetic: exports.ArithmeticError,
        BadOrigin: support_1.sts.unit(),
        CannotLookup: support_1.sts.unit(),
        ConsumerRemaining: support_1.sts.unit(),
        Corruption: support_1.sts.unit(),
        Exhausted: support_1.sts.unit(),
        Module: exports.ModuleError,
        NoProviders: support_1.sts.unit(),
        Other: support_1.sts.unit(),
        Token: exports.TokenError,
        TooManyConsumers: support_1.sts.unit(),
        Transactional: exports.TransactionalError,
        Unavailable: support_1.sts.unit(),
    }
})
exports.TransactionalError = support_1.sts.closedEnum(function () {
    return {
        LimitReached: support_1.sts.unit(),
        NoLayer: support_1.sts.unit(),
    }
})
exports.TokenError = support_1.sts.closedEnum(function () {
    return {
        BelowMinimum: support_1.sts.unit(),
        CannotCreate: support_1.sts.unit(),
        Frozen: support_1.sts.unit(),
        NoFunds: support_1.sts.unit(),
        UnknownAsset: support_1.sts.unit(),
        Unsupported: support_1.sts.unit(),
        WouldDie: support_1.sts.unit(),
    }
})
exports.ModuleError = support_1.sts.struct(function () {
    return {
        index: support_1.sts.number(),
        error: support_1.sts.bytes(),
    }
})
exports.ArithmeticError = support_1.sts.closedEnum(function () {
    return {
        DivisionByZero: support_1.sts.unit(),
        Overflow: support_1.sts.unit(),
        Underflow: support_1.sts.unit(),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.UnknownTokensEvent = support_1.sts.closedEnum(function () {
    return {
        Deposited: support_1.sts.enumStruct({
            asset: exports.V3MultiAsset,
            who: exports.V3MultiLocation,
        }),
        Withdrawn: support_1.sts.enumStruct({
            asset: exports.V3MultiAsset,
            who: exports.V3MultiLocation,
        }),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.TransactionPaymentEvent = support_1.sts.closedEnum(function () {
    return {
        TransactionFeePaid: support_1.sts.enumStruct({
            who: exports.AccountId32,
            actualFee: support_1.sts.bigint(),
            tip: support_1.sts.bigint(),
        }),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.TechnicalMembershipEvent = support_1.sts.closedEnum(function () {
    return {
        Dummy: support_1.sts.unit(),
        KeyChanged: support_1.sts.unit(),
        MemberAdded: support_1.sts.unit(),
        MemberRemoved: support_1.sts.unit(),
        MembersReset: support_1.sts.unit(),
        MembersSwapped: support_1.sts.unit(),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.TechnicalCommitteeEvent = support_1.sts.closedEnum(function () {
    return {
        Approved: support_1.sts.enumStruct({
            proposalHash: exports.H256,
        }),
        Closed: support_1.sts.enumStruct({
            proposalHash: exports.H256,
            yes: support_1.sts.number(),
            no: support_1.sts.number(),
        }),
        Disapproved: support_1.sts.enumStruct({
            proposalHash: exports.H256,
        }),
        Executed: support_1.sts.enumStruct({
            proposalHash: exports.H256,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return exports.DispatchError
                }
            ),
        }),
        MemberExecuted: support_1.sts.enumStruct({
            proposalHash: exports.H256,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return exports.DispatchError
                }
            ),
        }),
        Proposed: support_1.sts.enumStruct({
            account: exports.AccountId32,
            proposalIndex: support_1.sts.number(),
            proposalHash: exports.H256,
            threshold: support_1.sts.number(),
        }),
        Voted: support_1.sts.enumStruct({
            account: exports.AccountId32,
            proposalHash: exports.H256,
            voted: support_1.sts.boolean(),
            yes: support_1.sts.number(),
            no: support_1.sts.number(),
        }),
    }
})
/**
 * Event for the System pallet.
 */
exports.SystemEvent = support_1.sts.closedEnum(function () {
    return {
        CodeUpdated: support_1.sts.unit(),
        ExtrinsicFailed: support_1.sts.enumStruct({
            dispatchError: exports.DispatchError,
            dispatchInfo: exports.DispatchInfo,
        }),
        ExtrinsicSuccess: support_1.sts.enumStruct({
            dispatchInfo: exports.DispatchInfo,
        }),
        KilledAccount: support_1.sts.enumStruct({
            account: exports.AccountId32,
        }),
        NewAccount: support_1.sts.enumStruct({
            account: exports.AccountId32,
        }),
        Remarked: support_1.sts.enumStruct({
            sender: exports.AccountId32,
            hash: exports.H256,
        }),
    }
})
exports.DispatchInfo = support_1.sts.struct(function () {
    return {
        weight: exports.Weight,
        class: exports.DispatchClass,
        paysFee: exports.Pays,
    }
})
exports.Pays = support_1.sts.closedEnum(function () {
    return {
        No: support_1.sts.unit(),
        Yes: support_1.sts.unit(),
    }
})
exports.DispatchClass = support_1.sts.closedEnum(function () {
    return {
        Mandatory: support_1.sts.unit(),
        Normal: support_1.sts.unit(),
        Operational: support_1.sts.unit(),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.SudoEvent = support_1.sts.closedEnum(function () {
    return {
        KeyChanged: support_1.sts.enumStruct({
            oldSudoer: support_1.sts.option(function () {
                return exports.AccountId32
            }),
        }),
        Sudid: support_1.sts.enumStruct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return exports.DispatchError
                }
            ),
        }),
        SudoAsDone: support_1.sts.enumStruct({
            sudoResult: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return exports.DispatchError
                }
            ),
        }),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.SessionEvent = support_1.sts.closedEnum(function () {
    return {
        NewSession: support_1.sts.enumStruct({
            sessionIndex: support_1.sts.number(),
        }),
    }
})
/**
 * Events type.
 */
exports.SchedulerEvent = support_1.sts.closedEnum(function () {
    return {
        CallUnavailable: support_1.sts.enumStruct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        }),
        Canceled: support_1.sts.enumStruct({
            when: support_1.sts.number(),
            index: support_1.sts.number(),
        }),
        Dispatched: support_1.sts.enumStruct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return exports.DispatchError
                }
            ),
        }),
        PeriodicFailed: support_1.sts.enumStruct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        }),
        PermanentlyOverweight: support_1.sts.enumStruct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        }),
        Scheduled: support_1.sts.enumStruct({
            when: support_1.sts.number(),
            index: support_1.sts.number(),
        }),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.PreimageEvent = support_1.sts.closedEnum(function () {
    return {
        Cleared: support_1.sts.enumStruct({
            hash: exports.H256,
        }),
        Noted: support_1.sts.enumStruct({
            hash: exports.H256,
        }),
        Requested: support_1.sts.enumStruct({
            hash: exports.H256,
        }),
    }
})
/**
 * The pallet's event type
 */
exports.PoolsEvent = support_1.sts.closedEnum(function () {
    return {
        PoolsMutated: exports.PoolsMutation,
    }
})
exports.PoolsMutation = support_1.sts.struct(function () {
    return {
        community: exports.Pool,
        collator: exports.Pool,
        fuelTanks: exports.Pool,
        priceDiscovery: exports.Pool,
    }
})
exports.Pool = support_1.sts.struct(function () {
    return {
        feeShare: exports.Perbill,
    }
})
exports.Perbill = support_1.sts.number()
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.PolkadotXcmEvent = support_1.sts.closedEnum(function () {
    return {
        AssetsClaimed: support_1.sts.tuple(function () {
            return [exports.H256, exports.V3MultiLocation, exports.VersionedMultiAssets]
        }),
        AssetsTrapped: support_1.sts.tuple(function () {
            return [exports.H256, exports.V3MultiLocation, exports.VersionedMultiAssets]
        }),
        Attempted: exports.V3Outcome,
        FeesPaid: support_1.sts.tuple(function () {
            return [
                exports.V3MultiLocation,
                support_1.sts.array(function () {
                    return exports.V3MultiAsset
                }),
            ]
        }),
        InvalidQuerier: support_1.sts.tuple(function () {
            return [
                exports.V3MultiLocation,
                support_1.sts.bigint(),
                exports.V3MultiLocation,
                support_1.sts.option(function () {
                    return exports.V3MultiLocation
                }),
            ]
        }),
        InvalidQuerierVersion: support_1.sts.tuple(function () {
            return [exports.V3MultiLocation, support_1.sts.bigint()]
        }),
        InvalidResponder: support_1.sts.tuple(function () {
            return [
                exports.V3MultiLocation,
                support_1.sts.bigint(),
                support_1.sts.option(function () {
                    return exports.V3MultiLocation
                }),
            ]
        }),
        InvalidResponderVersion: support_1.sts.tuple(function () {
            return [exports.V3MultiLocation, support_1.sts.bigint()]
        }),
        Notified: support_1.sts.tuple(function () {
            return [support_1.sts.bigint(), support_1.sts.number(), support_1.sts.number()]
        }),
        NotifyDecodeFailed: support_1.sts.tuple(function () {
            return [support_1.sts.bigint(), support_1.sts.number(), support_1.sts.number()]
        }),
        NotifyDispatchError: support_1.sts.tuple(function () {
            return [support_1.sts.bigint(), support_1.sts.number(), support_1.sts.number()]
        }),
        NotifyOverweight: support_1.sts.tuple(function () {
            return [
                support_1.sts.bigint(),
                support_1.sts.number(),
                support_1.sts.number(),
                exports.Weight,
                exports.Weight,
            ]
        }),
        NotifyTargetMigrationFail: support_1.sts.tuple(function () {
            return [exports.VersionedMultiLocation, support_1.sts.bigint()]
        }),
        NotifyTargetSendFail: support_1.sts.tuple(function () {
            return [exports.V3MultiLocation, support_1.sts.bigint(), exports.V3Error]
        }),
        ResponseReady: support_1.sts.tuple(function () {
            return [support_1.sts.bigint(), exports.V3Response]
        }),
        ResponseTaken: support_1.sts.bigint(),
        Sent: support_1.sts.tuple(function () {
            return [
                exports.V3MultiLocation,
                exports.V3MultiLocation,
                support_1.sts.array(function () {
                    return exports.V3Instruction
                }),
            ]
        }),
        SupportedVersionChanged: support_1.sts.tuple(function () {
            return [exports.V3MultiLocation, support_1.sts.number()]
        }),
        UnexpectedResponse: support_1.sts.tuple(function () {
            return [exports.V3MultiLocation, support_1.sts.bigint()]
        }),
        VersionChangeNotified: support_1.sts.tuple(function () {
            return [
                exports.V3MultiLocation,
                support_1.sts.number(),
                support_1.sts.array(function () {
                    return exports.V3MultiAsset
                }),
            ]
        }),
        VersionNotifyRequested: support_1.sts.tuple(function () {
            return [
                exports.V3MultiLocation,
                support_1.sts.array(function () {
                    return exports.V3MultiAsset
                }),
            ]
        }),
        VersionNotifyStarted: support_1.sts.tuple(function () {
            return [
                exports.V3MultiLocation,
                support_1.sts.array(function () {
                    return exports.V3MultiAsset
                }),
            ]
        }),
        VersionNotifyUnrequested: support_1.sts.tuple(function () {
            return [
                exports.V3MultiLocation,
                support_1.sts.array(function () {
                    return exports.V3MultiAsset
                }),
            ]
        }),
    }
})
exports.V3Instruction = support_1.sts.closedEnum(function () {
    return {
        AliasOrigin: exports.V3MultiLocation,
        BurnAsset: support_1.sts.array(function () {
            return exports.V3MultiAsset
        }),
        BuyExecution: support_1.sts.enumStruct({
            fees: exports.V3MultiAsset,
            weightLimit: exports.V3WeightLimit,
        }),
        ClaimAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V3MultiAsset
            }),
            ticket: exports.V3MultiLocation,
        }),
        ClearError: support_1.sts.unit(),
        ClearOrigin: support_1.sts.unit(),
        ClearTopic: support_1.sts.unit(),
        ClearTransactStatus: support_1.sts.unit(),
        DepositAsset: support_1.sts.enumStruct({
            assets: exports.V3MultiAssetFilter,
            beneficiary: exports.V3MultiLocation,
        }),
        DepositReserveAsset: support_1.sts.enumStruct({
            assets: exports.V3MultiAssetFilter,
            dest: exports.V3MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V3Instruction
            }),
        }),
        DescendOrigin: exports.V3Junctions,
        ExchangeAsset: support_1.sts.enumStruct({
            give: exports.V3MultiAssetFilter,
            want: support_1.sts.array(function () {
                return exports.V3MultiAsset
            }),
            maximal: support_1.sts.boolean(),
        }),
        ExpectAsset: support_1.sts.array(function () {
            return exports.V3MultiAsset
        }),
        ExpectError: support_1.sts.option(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), exports.V3Error]
            })
        }),
        ExpectOrigin: support_1.sts.option(function () {
            return exports.V3MultiLocation
        }),
        ExpectPallet: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            name: support_1.sts.bytes(),
            moduleName: support_1.sts.bytes(),
            crateMajor: support_1.sts.number(),
            minCrateMinor: support_1.sts.number(),
        }),
        ExpectTransactStatus: exports.V3MaybeErrorCode,
        ExportMessage: support_1.sts.enumStruct({
            network: exports.V3NetworkId,
            destination: exports.V3Junctions,
            xcm: support_1.sts.array(function () {
                return exports.V3Instruction
            }),
        }),
        HrmpChannelAccepted: support_1.sts.enumStruct({
            recipient: support_1.sts.number(),
        }),
        HrmpChannelClosing: support_1.sts.enumStruct({
            initiator: support_1.sts.number(),
            sender: support_1.sts.number(),
            recipient: support_1.sts.number(),
        }),
        HrmpNewChannelOpenRequest: support_1.sts.enumStruct({
            sender: support_1.sts.number(),
            maxMessageSize: support_1.sts.number(),
            maxCapacity: support_1.sts.number(),
        }),
        InitiateReserveWithdraw: support_1.sts.enumStruct({
            assets: exports.V3MultiAssetFilter,
            reserve: exports.V3MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V3Instruction
            }),
        }),
        InitiateTeleport: support_1.sts.enumStruct({
            assets: exports.V3MultiAssetFilter,
            dest: exports.V3MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V3Instruction
            }),
        }),
        LockAsset: support_1.sts.enumStruct({
            asset: exports.V3MultiAsset,
            unlocker: exports.V3MultiLocation,
        }),
        NoteUnlockable: support_1.sts.enumStruct({
            asset: exports.V3MultiAsset,
            owner: exports.V3MultiLocation,
        }),
        QueryPallet: support_1.sts.enumStruct({
            moduleName: support_1.sts.bytes(),
            responseInfo: exports.V3QueryResponseInfo,
        }),
        QueryResponse: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            response: exports.V3Response,
            maxWeight: exports.Weight,
            querier: support_1.sts.option(function () {
                return exports.V3MultiLocation
            }),
        }),
        ReceiveTeleportedAsset: support_1.sts.array(function () {
            return exports.V3MultiAsset
        }),
        RefundSurplus: support_1.sts.unit(),
        ReportError: exports.V3QueryResponseInfo,
        ReportHolding: support_1.sts.enumStruct({
            responseInfo: exports.V3QueryResponseInfo,
            assets: exports.V3MultiAssetFilter,
        }),
        ReportTransactStatus: exports.V3QueryResponseInfo,
        RequestUnlock: support_1.sts.enumStruct({
            asset: exports.V3MultiAsset,
            locker: exports.V3MultiLocation,
        }),
        ReserveAssetDeposited: support_1.sts.array(function () {
            return exports.V3MultiAsset
        }),
        SetAppendix: support_1.sts.array(function () {
            return exports.V3Instruction
        }),
        SetErrorHandler: support_1.sts.array(function () {
            return exports.V3Instruction
        }),
        SetFeesMode: support_1.sts.enumStruct({
            jitWithdraw: support_1.sts.boolean(),
        }),
        SetTopic: support_1.sts.bytes(),
        SubscribeVersion: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            maxResponseWeight: exports.Weight,
        }),
        Transact: support_1.sts.enumStruct({
            originKind: exports.V2OriginKind,
            requireWeightAtMost: exports.Weight,
            call: exports.DoubleEncoded,
        }),
        TransferAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V3MultiAsset
            }),
            beneficiary: exports.V3MultiLocation,
        }),
        TransferReserveAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V3MultiAsset
            }),
            dest: exports.V3MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V3Instruction
            }),
        }),
        Trap: support_1.sts.bigint(),
        UniversalOrigin: exports.V3Junction,
        UnlockAsset: support_1.sts.enumStruct({
            asset: exports.V3MultiAsset,
            target: exports.V3MultiLocation,
        }),
        UnpaidExecution: support_1.sts.enumStruct({
            weightLimit: exports.V3WeightLimit,
            checkOrigin: support_1.sts.option(function () {
                return exports.V3MultiLocation
            }),
        }),
        UnsubscribeVersion: support_1.sts.unit(),
        WithdrawAsset: support_1.sts.array(function () {
            return exports.V3MultiAsset
        }),
    }
})
exports.DoubleEncoded = support_1.sts.struct(function () {
    return {
        encoded: support_1.sts.bytes(),
    }
})
exports.V2OriginKind = support_1.sts.closedEnum(function () {
    return {
        Native: support_1.sts.unit(),
        SovereignAccount: support_1.sts.unit(),
        Superuser: support_1.sts.unit(),
        Xcm: support_1.sts.unit(),
    }
})
exports.V3QueryResponseInfo = support_1.sts.struct(function () {
    return {
        destination: exports.V3MultiLocation,
        queryId: support_1.sts.bigint(),
        maxWeight: exports.Weight,
    }
})
exports.V3MaybeErrorCode = support_1.sts.closedEnum(function () {
    return {
        Error: support_1.sts.bytes(),
        Success: support_1.sts.unit(),
        TruncatedError: support_1.sts.bytes(),
    }
})
exports.V3MultiAssetFilter = support_1.sts.closedEnum(function () {
    return {
        Definite: support_1.sts.array(function () {
            return exports.V3MultiAsset
        }),
        Wild: exports.V3WildMultiAsset,
    }
})
exports.V3WildMultiAsset = support_1.sts.closedEnum(function () {
    return {
        All: support_1.sts.unit(),
        AllCounted: support_1.sts.number(),
        AllOf: support_1.sts.enumStruct({
            id: exports.V3AssetId,
            fun: exports.V3WildFungibility,
        }),
        AllOfCounted: support_1.sts.enumStruct({
            id: exports.V3AssetId,
            fun: exports.V3WildFungibility,
            count: support_1.sts.number(),
        }),
    }
})
exports.V3WildFungibility = support_1.sts.closedEnum(function () {
    return {
        Fungible: support_1.sts.unit(),
        NonFungible: support_1.sts.unit(),
    }
})
exports.V3WeightLimit = support_1.sts.closedEnum(function () {
    return {
        Limited: exports.Weight,
        Unlimited: support_1.sts.unit(),
    }
})
exports.V3Response = support_1.sts.closedEnum(function () {
    return {
        Assets: support_1.sts.array(function () {
            return exports.V3MultiAsset
        }),
        DispatchResult: exports.V3MaybeErrorCode,
        ExecutionResult: support_1.sts.option(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), exports.V3Error]
            })
        }),
        Null: support_1.sts.unit(),
        PalletsInfo: support_1.sts.array(function () {
            return exports.V3PalletInfo
        }),
        Version: support_1.sts.number(),
    }
})
exports.V3PalletInfo = support_1.sts.struct(function () {
    return {
        index: support_1.sts.number(),
        name: support_1.sts.bytes(),
        moduleName: support_1.sts.bytes(),
        major: support_1.sts.number(),
        minor: support_1.sts.number(),
        patch: support_1.sts.number(),
    }
})
exports.VersionedMultiLocation = support_1.sts.closedEnum(function () {
    return {
        V2: exports.V2MultiLocation,
        V3: exports.V3MultiLocation,
    }
})
exports.V2MultiLocation = support_1.sts.struct(function () {
    return {
        parents: support_1.sts.number(),
        interior: exports.V2Junctions,
    }
})
exports.V2Junctions = support_1.sts.closedEnum(function () {
    return {
        Here: support_1.sts.unit(),
        X1: exports.V2Junction,
        X2: support_1.sts.tuple(function () {
            return [exports.V2Junction, exports.V2Junction]
        }),
        X3: support_1.sts.tuple(function () {
            return [exports.V2Junction, exports.V2Junction, exports.V2Junction]
        }),
        X4: support_1.sts.tuple(function () {
            return [exports.V2Junction, exports.V2Junction, exports.V2Junction, exports.V2Junction]
        }),
        X5: support_1.sts.tuple(function () {
            return [exports.V2Junction, exports.V2Junction, exports.V2Junction, exports.V2Junction, exports.V2Junction]
        }),
        X6: support_1.sts.tuple(function () {
            return [
                exports.V2Junction,
                exports.V2Junction,
                exports.V2Junction,
                exports.V2Junction,
                exports.V2Junction,
                exports.V2Junction,
            ]
        }),
        X7: support_1.sts.tuple(function () {
            return [
                exports.V2Junction,
                exports.V2Junction,
                exports.V2Junction,
                exports.V2Junction,
                exports.V2Junction,
                exports.V2Junction,
                exports.V2Junction,
            ]
        }),
        X8: support_1.sts.tuple(function () {
            return [
                exports.V2Junction,
                exports.V2Junction,
                exports.V2Junction,
                exports.V2Junction,
                exports.V2Junction,
                exports.V2Junction,
                exports.V2Junction,
                exports.V2Junction,
            ]
        }),
    }
})
exports.V2Junction = support_1.sts.closedEnum(function () {
    return {
        AccountId32: support_1.sts.enumStruct({
            network: exports.V2NetworkId,
            id: support_1.sts.bytes(),
        }),
        AccountIndex64: support_1.sts.enumStruct({
            network: exports.V2NetworkId,
            index: support_1.sts.bigint(),
        }),
        AccountKey20: support_1.sts.enumStruct({
            network: exports.V2NetworkId,
            key: support_1.sts.bytes(),
        }),
        GeneralIndex: support_1.sts.bigint(),
        GeneralKey: exports.WeakBoundedVec,
        OnlyChild: support_1.sts.unit(),
        PalletInstance: support_1.sts.number(),
        Parachain: support_1.sts.number(),
        Plurality: support_1.sts.enumStruct({
            id: exports.V2BodyId,
            part: exports.V2BodyPart,
        }),
    }
})
exports.V2BodyPart = support_1.sts.closedEnum(function () {
    return {
        AtLeastProportion: support_1.sts.enumStruct({
            nom: support_1.sts.number(),
            denom: support_1.sts.number(),
        }),
        Fraction: support_1.sts.enumStruct({
            nom: support_1.sts.number(),
            denom: support_1.sts.number(),
        }),
        Members: support_1.sts.enumStruct({
            count: support_1.sts.number(),
        }),
        MoreThanProportion: support_1.sts.enumStruct({
            nom: support_1.sts.number(),
            denom: support_1.sts.number(),
        }),
        Voice: support_1.sts.unit(),
    }
})
exports.V2BodyId = support_1.sts.closedEnum(function () {
    return {
        Administration: support_1.sts.unit(),
        Defense: support_1.sts.unit(),
        Executive: support_1.sts.unit(),
        Index: support_1.sts.number(),
        Judicial: support_1.sts.unit(),
        Legislative: support_1.sts.unit(),
        Named: exports.WeakBoundedVec,
        Technical: support_1.sts.unit(),
        Treasury: support_1.sts.unit(),
        Unit: support_1.sts.unit(),
    }
})
exports.WeakBoundedVec = support_1.sts.bytes()
exports.V2NetworkId = support_1.sts.closedEnum(function () {
    return {
        Any: support_1.sts.unit(),
        Kusama: support_1.sts.unit(),
        Named: exports.WeakBoundedVec,
        Polkadot: support_1.sts.unit(),
    }
})
exports.V3Outcome = support_1.sts.closedEnum(function () {
    return {
        Complete: exports.Weight,
        Error: exports.V3Error,
        Incomplete: support_1.sts.tuple(function () {
            return [exports.Weight, exports.V3Error]
        }),
    }
})
exports.VersionedMultiAssets = support_1.sts.closedEnum(function () {
    return {
        V2: support_1.sts.array(function () {
            return exports.V2MultiAsset
        }),
        V3: support_1.sts.array(function () {
            return exports.V3MultiAsset
        }),
    }
})
exports.V2MultiAsset = support_1.sts.struct(function () {
    return {
        id: exports.V2AssetId,
        fun: exports.V2Fungibility,
    }
})
exports.V2Fungibility = support_1.sts.closedEnum(function () {
    return {
        Fungible: support_1.sts.bigint(),
        NonFungible: exports.V2AssetInstance,
    }
})
exports.V2AssetInstance = support_1.sts.closedEnum(function () {
    return {
        Array16: support_1.sts.bytes(),
        Array32: support_1.sts.bytes(),
        Array4: support_1.sts.bytes(),
        Array8: support_1.sts.bytes(),
        Blob: support_1.sts.bytes(),
        Index: support_1.sts.bigint(),
        Undefined: support_1.sts.unit(),
    }
})
exports.V2AssetId = support_1.sts.closedEnum(function () {
    return {
        Abstract: support_1.sts.bytes(),
        Concrete: exports.V2MultiLocation,
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.ParachainSystemEvent = support_1.sts.closedEnum(function () {
    return {
        DownwardMessagesProcessed: support_1.sts.enumStruct({
            weightUsed: exports.Weight,
            dmqHead: exports.H256,
        }),
        DownwardMessagesReceived: support_1.sts.enumStruct({
            count: support_1.sts.number(),
        }),
        UpgradeAuthorized: support_1.sts.enumStruct({
            codeHash: exports.H256,
        }),
        UpwardMessageSent: support_1.sts.enumStruct({
            messageHash: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        }),
        ValidationFunctionApplied: support_1.sts.enumStruct({
            relayChainBlockNum: support_1.sts.number(),
        }),
        ValidationFunctionDiscarded: support_1.sts.unit(),
        ValidationFunctionStored: support_1.sts.unit(),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.OrmlXcmEvent = support_1.sts.closedEnum(function () {
    return {
        Sent: support_1.sts.enumStruct({
            to: exports.V3MultiLocation,
            message: support_1.sts.array(function () {
                return exports.V3Instruction
            }),
        }),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.MultisigEvent = support_1.sts.closedEnum(function () {
    return {
        MultisigApproval: support_1.sts.enumStruct({
            approving: exports.AccountId32,
            timepoint: exports.Timepoint,
            multisig: exports.AccountId32,
            callHash: support_1.sts.bytes(),
        }),
        MultisigCancelled: support_1.sts.enumStruct({
            cancelling: exports.AccountId32,
            timepoint: exports.Timepoint,
            multisig: exports.AccountId32,
            callHash: support_1.sts.bytes(),
        }),
        MultisigExecuted: support_1.sts.enumStruct({
            approving: exports.AccountId32,
            timepoint: exports.Timepoint,
            multisig: exports.AccountId32,
            callHash: support_1.sts.bytes(),
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return exports.DispatchError
                }
            ),
        }),
        NewMultisig: support_1.sts.enumStruct({
            approving: exports.AccountId32,
            multisig: exports.AccountId32,
            callHash: support_1.sts.bytes(),
        }),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.MultiTokensMigrationEvent = support_1.sts.closedEnum(function () {
    return {
        MigratedAttributes: support_1.sts.number(),
        MigratedCollectionAccounts: support_1.sts.number(),
        MigratedCollections: support_1.sts.number(),
        MigratedTokenAccounts: support_1.sts.number(),
        MigratedTokens: support_1.sts.number(),
        MigrationFinished: support_1.sts.unit(),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.MultiTokensEvent = support_1.sts.closedEnum(function () {
    return {
        Approved: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            owner: exports.AccountId32,
            operator: exports.AccountId32,
            amount: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            expiration: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        }),
        AttributeRemoved: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
        }),
        AttributeSet: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.bytes(),
        }),
        BalanceSet: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
            balance: support_1.sts.bigint(),
            reservedBalance: support_1.sts.bigint(),
        }),
        Burned: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        CollectionAccountCreated: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
        }),
        CollectionAccountDestroyed: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
        }),
        CollectionAccountUpdated: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
            value: support_1.sts.option(function () {
                return exports.CollectionAccount
            }),
        }),
        CollectionCreated: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            owner: exports.AccountId32,
        }),
        CollectionDestroyed: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            caller: exports.AccountId32,
        }),
        CollectionMutated: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            mutation: exports.DefaultCollectionMutation,
        }),
        CollectionUpdated: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return exports.Collection
            }),
        }),
        Deposit: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Frozen: exports.Freeze,
        MigrationStatusUpdated: support_1.sts.enumStruct({
            stage: exports.MigrationStage,
        }),
        Minted: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            issuer: exports.RootOrSigned,
            recipient: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        MovedReserves: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            source: exports.AccountId32,
            destination: exports.AccountId32,
            amount: support_1.sts.bigint(),
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        }),
        NextCollectionIdUpdated: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
        }),
        ReserveRepatriated: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            source: exports.AccountId32,
            destination: exports.AccountId32,
            amount: support_1.sts.bigint(),
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        }),
        Reserved: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
            amount: support_1.sts.bigint(),
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        }),
        Slashed: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Thawed: exports.Freeze,
        TokenAccountCreated: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
            balance: support_1.sts.bigint(),
        }),
        TokenAccountDestroyed: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
        }),
        TokenAccountUpdated: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
            value: support_1.sts.option(function () {
                return exports.TokenAccount
            }),
        }),
        TokenCreated: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            issuer: exports.RootOrSigned,
            initialSupply: support_1.sts.bigint(),
        }),
        TokenDestroyed: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            caller: exports.AccountId32,
        }),
        TokenMutated: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            mutation: exports.DefaultTokenMutation,
        }),
        TokenUpdated: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return exports.Token
            }),
        }),
        Transferred: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            operator: exports.AccountId32,
            from: exports.AccountId32,
            to: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Unapproved: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            owner: exports.AccountId32,
            operator: exports.AccountId32,
        }),
        Unreserved: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
            amount: support_1.sts.bigint(),
            reserveId: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        }),
        Withdraw: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
    }
})
exports.Token = support_1.sts.struct(function () {
    return {
        supply: support_1.sts.bigint(),
        cap: support_1.sts.option(function () {
            return exports.TokenCap
        }),
        freezeState: support_1.sts.option(function () {
            return exports.FreezeState
        }),
        minimumBalance: support_1.sts.bigint(),
        sufficiency: exports.Sufficiency,
        mintDeposit: support_1.sts.bigint(),
        attributeCount: support_1.sts.number(),
        marketBehavior: support_1.sts.option(function () {
            return exports.TokenMarketBehavior
        }),
        listingForbidden: support_1.sts.boolean(),
        metadata: exports.DefaultTokenMetadata,
    }
})
exports.DefaultTokenMetadata = support_1.sts.closedEnum(function () {
    return {
        Foreign: exports.DefaultForeignTokenMetadata,
        Native: support_1.sts.unit(),
    }
})
exports.DefaultForeignTokenMetadata = support_1.sts.struct(function () {
    return {
        decimalCount: support_1.sts.number(),
        name: exports.BoundedString,
        symbol: support_1.sts.bytes(),
        location: support_1.sts.option(function () {
            return exports.V3MultiLocation
        }),
        unitsPerSecond: support_1.sts.option(function () {
            return support_1.sts.bigint()
        }),
        premintedSupply: support_1.sts.bigint(),
    }
})
exports.BoundedString = support_1.sts.bytes()
exports.TokenMarketBehavior = support_1.sts.closedEnum(function () {
    return {
        HasRoyalty: exports.DefaultRoyalty,
        IsCurrency: support_1.sts.unit(),
    }
})
exports.DefaultRoyalty = support_1.sts.struct(function () {
    return {
        beneficiary: exports.AccountId32,
        percentage: support_1.sts.number(),
    }
})
exports.Sufficiency = support_1.sts.closedEnum(function () {
    return {
        Insufficient: support_1.sts.enumStruct({
            unitPrice: support_1.sts.bigint(),
        }),
        Sufficient: support_1.sts.unit(),
    }
})
exports.FreezeState = support_1.sts.closedEnum(function () {
    return {
        Never: support_1.sts.unit(),
        Permanent: support_1.sts.unit(),
        Temporary: support_1.sts.unit(),
    }
})
exports.TokenCap = support_1.sts.closedEnum(function () {
    return {
        CollapsingSupply: support_1.sts.bigint(),
        SingleMint: support_1.sts.unit(),
        Supply: support_1.sts.bigint(),
    }
})
exports.DefaultTokenMutation = support_1.sts.struct(function () {
    return {
        behavior: exports.Type_142,
        listingForbidden: exports.Type_145,
        metadata: exports.Type_146,
    }
})
exports.Type_146 = support_1.sts.closedEnum(function () {
    return {
        NoMutation: support_1.sts.unit(),
        SomeMutation: exports.DefaultTokenMetadata,
    }
})
exports.Type_145 = support_1.sts.closedEnum(function () {
    return {
        NoMutation: support_1.sts.unit(),
        SomeMutation: support_1.sts.boolean(),
    }
})
exports.Type_142 = support_1.sts.closedEnum(function () {
    return {
        NoMutation: support_1.sts.unit(),
        SomeMutation: support_1.sts.option(function () {
            return exports.TokenMarketBehavior
        }),
    }
})
exports.TokenAccount = support_1.sts.struct(function () {
    return {
        balance: support_1.sts.bigint(),
        reservedBalance: support_1.sts.bigint(),
        lockedBalance: support_1.sts.bigint(),
        namedReserves: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.bytes(), support_1.sts.bigint()]
            })
        }),
        locks: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.bytes(), support_1.sts.bigint()]
            })
        }),
        approvals: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [exports.AccountId32, exports.Approval]
            })
        }),
        isFrozen: support_1.sts.boolean(),
    }
})
exports.Approval = support_1.sts.struct(function () {
    return {
        amount: support_1.sts.bigint(),
        expiration: support_1.sts.option(function () {
            return support_1.sts.number()
        }),
    }
})
exports.RootOrSigned = support_1.sts.closedEnum(function () {
    return {
        Root: support_1.sts.unit(),
        Signed: exports.AccountId32,
    }
})
exports.MigrationStage = support_1.sts.closedEnum(function () {
    return {
        Completed: support_1.sts.unit(),
        Failed: support_1.sts.unit(),
        InProgress: support_1.sts.unit(),
        NotStarted: support_1.sts.unit(),
    }
})
exports.Freeze = support_1.sts.struct(function () {
    return {
        collectionId: support_1.sts.bigint(),
        freezeType: exports.FreezeType,
    }
})
exports.FreezeType = support_1.sts.closedEnum(function () {
    return {
        Collection: support_1.sts.unit(),
        CollectionAccount: exports.AccountId32,
        Token: support_1.sts.enumStruct({
            tokenId: support_1.sts.bigint(),
            freezeState: support_1.sts.option(function () {
                return exports.FreezeState
            }),
        }),
        TokenAccount: support_1.sts.enumStruct({
            tokenId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
        }),
    }
})
exports.Collection = support_1.sts.struct(function () {
    return {
        owner: exports.AccountId32,
        policy: exports.DefaultCollectionPolicy,
        tokenCount: support_1.sts.bigint(),
        attributeCount: support_1.sts.number(),
        totalDeposit: support_1.sts.bigint(),
        explicitRoyaltyCurrencies: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [exports.AssetId, support_1.sts.unit()]
            })
        }),
    }
})
exports.AssetId = support_1.sts.struct(function () {
    return {
        collectionId: support_1.sts.bigint(),
        tokenId: support_1.sts.bigint(),
    }
})
exports.DefaultCollectionPolicy = support_1.sts.struct(function () {
    return {
        mint: exports.DefaultMintPolicy,
        transfer: exports.DefaultTransferPolicy,
        market: exports.DefaultMarketPolicy,
    }
})
exports.DefaultMarketPolicy = support_1.sts.struct(function () {
    return {
        royalty: support_1.sts.option(function () {
            return exports.DefaultRoyalty
        }),
    }
})
exports.DefaultTransferPolicy = support_1.sts.struct(function () {
    return {
        isFrozen: support_1.sts.boolean(),
    }
})
exports.DefaultMintPolicy = support_1.sts.struct(function () {
    return {
        maxTokenCount: support_1.sts.option(function () {
            return support_1.sts.bigint()
        }),
        maxTokenSupply: support_1.sts.option(function () {
            return support_1.sts.bigint()
        }),
        forceSingleMint: support_1.sts.boolean(),
    }
})
exports.DefaultCollectionMutation = support_1.sts.struct(function () {
    return {
        owner: support_1.sts.option(function () {
            return exports.AccountId32
        }),
        royalty: exports.ShouldMutate,
        explicitRoyaltyCurrencies: support_1.sts.option(function () {
            return support_1.sts.array(function () {
                return exports.AssetId
            })
        }),
    }
})
exports.ShouldMutate = support_1.sts.closedEnum(function () {
    return {
        NoMutation: support_1.sts.unit(),
        SomeMutation: support_1.sts.option(function () {
            return exports.DefaultRoyalty
        }),
    }
})
exports.CollectionAccount = support_1.sts.struct(function () {
    return {
        isFrozen: support_1.sts.boolean(),
        approvals: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    exports.AccountId32,
                    support_1.sts.option(function () {
                        return support_1.sts.number()
                    }),
                ]
            })
        }),
        accountCount: support_1.sts.number(),
    }
})
/**
 * The Event for this pallet
 */
exports.MarketplaceEvent = support_1.sts.closedEnum(function () {
    return {
        AuctionFinalized: support_1.sts.enumStruct({
            listingId: exports.H256,
            winningBid: support_1.sts.option(function () {
                return exports.Bid
            }),
            protocolFee: support_1.sts.bigint(),
            royalty: support_1.sts.bigint(),
        }),
        BidPlaced: support_1.sts.enumStruct({
            listingId: exports.H256,
            bid: exports.Bid,
        }),
        ListingCancelled: support_1.sts.enumStruct({
            listingId: exports.H256,
        }),
        ListingCreated: support_1.sts.enumStruct({
            listingId: exports.H256,
            listing: exports.Listing,
        }),
        ListingFilled: support_1.sts.enumStruct({
            listingId: exports.H256,
            buyer: exports.AccountId32,
            amountFilled: support_1.sts.bigint(),
            amountRemaining: support_1.sts.bigint(),
            protocolFee: support_1.sts.bigint(),
            royalty: support_1.sts.bigint(),
        }),
        ProtocolFeeSet: support_1.sts.enumStruct({
            protocolFee: exports.Perbill,
        }),
    }
})
exports.Listing = support_1.sts.struct(function () {
    return {
        seller: exports.AccountId32,
        makeAssetId: exports.AssetId,
        takeAssetId: exports.AssetId,
        amount: support_1.sts.bigint(),
        price: support_1.sts.bigint(),
        minTakeValue: support_1.sts.bigint(),
        feeSide: exports.FeeSide,
        creationBlock: support_1.sts.number(),
        deposit: support_1.sts.bigint(),
        salt: support_1.sts.bytes(),
        data: exports.ListingData,
        state: exports.ListingState,
    }
})
exports.ListingState = support_1.sts.closedEnum(function () {
    return {
        Auction: exports.AuctionState,
        FixedPrice: support_1.sts.enumStruct({
            amountFilled: support_1.sts.bigint(),
        }),
    }
})
exports.AuctionState = support_1.sts.struct(function () {
    return {
        highBid: support_1.sts.option(function () {
            return exports.Bid
        }),
    }
})
exports.ListingData = support_1.sts.closedEnum(function () {
    return {
        Auction: exports.AuctionData,
        FixedPrice: support_1.sts.unit(),
    }
})
exports.AuctionData = support_1.sts.struct(function () {
    return {
        startBlock: support_1.sts.number(),
        endBlock: support_1.sts.number(),
    }
})
exports.FeeSide = support_1.sts.closedEnum(function () {
    return {
        Make: support_1.sts.unit(),
        NoFee: support_1.sts.unit(),
        Take: support_1.sts.unit(),
    }
})
exports.Bid = support_1.sts.struct(function () {
    return {
        bidder: exports.AccountId32,
        price: support_1.sts.bigint(),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.FuelTanksEvent = support_1.sts.closedEnum(function () {
    return {
        AccountAdded: support_1.sts.enumStruct({
            tankId: exports.AccountId32,
            userId: exports.AccountId32,
            tankDeposit: support_1.sts.bigint(),
            userDeposit: support_1.sts.bigint(),
        }),
        AccountRemoved: support_1.sts.enumStruct({
            tankId: exports.AccountId32,
            userId: exports.AccountId32,
        }),
        AccountRuleDataRemoved: support_1.sts.enumStruct({
            tankId: exports.AccountId32,
            userId: exports.AccountId32,
            ruleSetId: support_1.sts.number(),
            ruleKind: exports.DispatchRuleKind,
        }),
        CallDispatched: support_1.sts.enumStruct({
            caller: exports.AccountId32,
            tankId: exports.AccountId32,
        }),
        ConsumptionSet: support_1.sts.enumStruct({
            tankId: exports.AccountId32,
            userId: support_1.sts.option(function () {
                return exports.AccountId32
            }),
            ruleSetId: support_1.sts.number(),
            consumption: exports.Consumption,
        }),
        DispatchFailed: support_1.sts.enumStruct({
            tankId: exports.AccountId32,
            caller: exports.AccountId32,
            error: exports.DispatchError,
        }),
        FreezeStateMutated: support_1.sts.enumStruct({
            tankId: exports.AccountId32,
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            isFrozen: support_1.sts.boolean(),
        }),
        FuelTankCreated: support_1.sts.enumStruct({
            owner: exports.AccountId32,
            name: support_1.sts.bytes(),
            tankId: exports.AccountId32,
        }),
        FuelTankDestroyed: support_1.sts.enumStruct({
            tankId: exports.AccountId32,
        }),
        FuelTankMutated: support_1.sts.enumStruct({
            tankId: exports.AccountId32,
            mutation: exports.DefaultTankMutation,
        }),
        MutateFreezeStateScheduled: support_1.sts.enumStruct({
            tankId: exports.AccountId32,
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            isFrozen: support_1.sts.boolean(),
        }),
        RuleSetInserted: support_1.sts.enumStruct({
            tankId: exports.AccountId32,
            ruleSetId: support_1.sts.number(),
        }),
        RuleSetRemoved: support_1.sts.enumStruct({
            tankId: exports.AccountId32,
            ruleSetId: support_1.sts.number(),
        }),
        ScheduleMutateFreezeStateFailed: support_1.sts.enumStruct({
            tankId: exports.AccountId32,
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            isFrozen: support_1.sts.boolean(),
            error: exports.DispatchError,
        }),
    }
})
exports.DefaultTankMutation = support_1.sts.struct(function () {
    return {
        userAccountManagement: exports.Type_204,
        providesDeposit: support_1.sts.option(function () {
            return support_1.sts.boolean()
        }),
        accountRules: support_1.sts.option(function () {
            return support_1.sts.array(function () {
                return exports.AccountRuleDescriptor
            })
        }),
    }
})
exports.AccountRuleDescriptor = support_1.sts.closedEnum(function () {
    return {
        RequireToken: exports.RequireTokenRule,
        WhitelistedCallers: support_1.sts.array(function () {
            return exports.AccountId32
        }),
    }
})
exports.RequireTokenRule = support_1.sts.struct(function () {
    return {
        collectionId: support_1.sts.bigint(),
        tokenId: support_1.sts.bigint(),
    }
})
exports.Type_204 = support_1.sts.closedEnum(function () {
    return {
        NoMutation: support_1.sts.unit(),
        SomeMutation: support_1.sts.option(function () {
            return exports.UserAccountManagement
        }),
    }
})
exports.UserAccountManagement = support_1.sts.struct(function () {
    return {
        tankReservesExistentialDeposit: support_1.sts.boolean(),
        tankReservesAccountCreationDeposit: support_1.sts.boolean(),
    }
})
exports.Consumption = support_1.sts.struct(function () {
    return {
        totalConsumed: support_1.sts.bigint(),
        lastResetBlock: support_1.sts.option(function () {
            return support_1.sts.number()
        }),
    }
})
exports.DispatchRuleKind = support_1.sts.closedEnum(function () {
    return {
        MaxFuelBurnPerTransaction: support_1.sts.unit(),
        PermittedCalls: support_1.sts.unit(),
        PermittedExtrinsics: support_1.sts.unit(),
        RequireToken: support_1.sts.unit(),
        TankFuelBudget: support_1.sts.unit(),
        UserFuelBudget: support_1.sts.unit(),
        WhitelistedCallers: support_1.sts.unit(),
        WhitelistedCollections: support_1.sts.unit(),
    }
})
/**
 * The pallet's event type.
 */
exports.ExtrinsicPauseEvent = support_1.sts.closedEnum(function () {
    return {
        ExtrinsicPaused: support_1.sts.enumStruct({
            palletName: support_1.sts.bytes(),
            extrinsicName: support_1.sts.bytes(),
        }),
        ExtrinsicResumed: support_1.sts.enumStruct({
            palletName: support_1.sts.bytes(),
            extrinsicName: support_1.sts.bytes(),
        }),
        PalletPaused: support_1.sts.enumStruct({
            palletName: support_1.sts.bytes(),
        }),
        PalletResumed: support_1.sts.enumStruct({
            palletName: support_1.sts.bytes(),
        }),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.EfinityXcmEvent = support_1.sts.closedEnum(function () {
    return {
        MinimumWeightUpdated: exports.MinimumWeightFeePair,
        XcmTransferFailed: exports.DispatchError,
    }
})
exports.MinimumWeightFeePair = support_1.sts.struct(function () {
    return {
        minimumWeight: exports.Weight,
        fee: support_1.sts.bigint(),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.EfinityUtilityEvent = support_1.sts.closedEnum(function () {
    return {
        BatchDispatched: support_1.sts.unit(),
        BatchFailed: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            error: exports.DispatchError,
        }),
        BatchPartiallyDispatched: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), exports.DispatchError]
            })
        }),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.DmpQueueEvent = support_1.sts.closedEnum(function () {
    return {
        ExecutedDownward: support_1.sts.enumStruct({
            messageId: support_1.sts.bytes(),
            outcome: exports.V3Outcome,
        }),
        InvalidFormat: support_1.sts.enumStruct({
            messageId: support_1.sts.bytes(),
        }),
        OverweightEnqueued: support_1.sts.enumStruct({
            messageId: support_1.sts.bytes(),
            overweightIndex: support_1.sts.bigint(),
            requiredWeight: exports.Weight,
        }),
        OverweightServiced: support_1.sts.enumStruct({
            overweightIndex: support_1.sts.bigint(),
            weightUsed: exports.Weight,
        }),
        UnsupportedVersion: support_1.sts.enumStruct({
            messageId: support_1.sts.bytes(),
        }),
        WeightExhausted: support_1.sts.enumStruct({
            messageId: support_1.sts.bytes(),
            remainingWeight: exports.Weight,
            requiredWeight: exports.Weight,
        }),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.DemocracyEvent = support_1.sts.closedEnum(function () {
    return {
        Blacklisted: support_1.sts.enumStruct({
            proposalHash: exports.H256,
        }),
        Cancelled: support_1.sts.enumStruct({
            refIndex: support_1.sts.number(),
        }),
        Delegated: support_1.sts.enumStruct({
            who: exports.AccountId32,
            target: exports.AccountId32,
        }),
        ExternalTabled: support_1.sts.unit(),
        NotPassed: support_1.sts.enumStruct({
            refIndex: support_1.sts.number(),
        }),
        Passed: support_1.sts.enumStruct({
            refIndex: support_1.sts.number(),
        }),
        ProposalCanceled: support_1.sts.enumStruct({
            propIndex: support_1.sts.number(),
        }),
        Proposed: support_1.sts.enumStruct({
            proposalIndex: support_1.sts.number(),
            deposit: support_1.sts.bigint(),
        }),
        Seconded: support_1.sts.enumStruct({
            seconder: exports.AccountId32,
            propIndex: support_1.sts.number(),
        }),
        Started: support_1.sts.enumStruct({
            refIndex: support_1.sts.number(),
            threshold: exports.VoteThreshold,
        }),
        Tabled: support_1.sts.enumStruct({
            proposalIndex: support_1.sts.number(),
            deposit: support_1.sts.bigint(),
        }),
        Undelegated: support_1.sts.enumStruct({
            account: exports.AccountId32,
        }),
        Vetoed: support_1.sts.enumStruct({
            who: exports.AccountId32,
            proposalHash: exports.H256,
            until: support_1.sts.number(),
        }),
        Voted: support_1.sts.enumStruct({
            voter: exports.AccountId32,
            refIndex: support_1.sts.number(),
            vote: exports.AccountVote,
        }),
    }
})
exports.AccountVote = support_1.sts.closedEnum(function () {
    return {
        Split: support_1.sts.enumStruct({
            aye: support_1.sts.bigint(),
            nay: support_1.sts.bigint(),
        }),
        Standard: support_1.sts.enumStruct({
            vote: exports.Vote,
            balance: support_1.sts.bigint(),
        }),
    }
})
exports.Vote = support_1.sts.number()
exports.VoteThreshold = support_1.sts.closedEnum(function () {
    return {
        SimpleMajority: support_1.sts.unit(),
        SuperMajorityAgainst: support_1.sts.unit(),
        SuperMajorityApprove: support_1.sts.unit(),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.CumulusXcmEvent = support_1.sts.closedEnum(function () {
    return {
        ExecutedDownward: support_1.sts.tuple(function () {
            return [support_1.sts.bytes(), exports.V3Outcome]
        }),
        InvalidFormat: support_1.sts.bytes(),
        UnsupportedVersion: support_1.sts.bytes(),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.CouncilEvent = support_1.sts.closedEnum(function () {
    return {
        Approved: support_1.sts.enumStruct({
            proposalHash: exports.H256,
        }),
        Closed: support_1.sts.enumStruct({
            proposalHash: exports.H256,
            yes: support_1.sts.number(),
            no: support_1.sts.number(),
        }),
        Disapproved: support_1.sts.enumStruct({
            proposalHash: exports.H256,
        }),
        Executed: support_1.sts.enumStruct({
            proposalHash: exports.H256,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return exports.DispatchError
                }
            ),
        }),
        MemberExecuted: support_1.sts.enumStruct({
            proposalHash: exports.H256,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return exports.DispatchError
                }
            ),
        }),
        Proposed: support_1.sts.enumStruct({
            account: exports.AccountId32,
            proposalIndex: support_1.sts.number(),
            proposalHash: exports.H256,
            threshold: support_1.sts.number(),
        }),
        Voted: support_1.sts.enumStruct({
            account: exports.AccountId32,
            proposalHash: exports.H256,
            voted: support_1.sts.boolean(),
            yes: support_1.sts.number(),
            no: support_1.sts.number(),
        }),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.CommunityPoolEvent = support_1.sts.closedEnum(function () {
    return {
        Awarded: support_1.sts.enumStruct({
            proposalIndex: support_1.sts.number(),
            award: support_1.sts.bigint(),
            account: exports.AccountId32,
        }),
        Burnt: support_1.sts.enumStruct({
            burntFunds: support_1.sts.bigint(),
        }),
        Deposit: support_1.sts.enumStruct({
            value: support_1.sts.bigint(),
        }),
        Proposed: support_1.sts.enumStruct({
            proposalIndex: support_1.sts.number(),
        }),
        Rejected: support_1.sts.enumStruct({
            proposalIndex: support_1.sts.number(),
            slashed: support_1.sts.bigint(),
        }),
        Rollover: support_1.sts.enumStruct({
            rolloverBalance: support_1.sts.bigint(),
        }),
        SpendApproved: support_1.sts.enumStruct({
            proposalIndex: support_1.sts.number(),
            amount: support_1.sts.bigint(),
            beneficiary: exports.AccountId32,
        }),
        Spending: support_1.sts.enumStruct({
            budgetRemaining: support_1.sts.bigint(),
        }),
        UpdatedInactive: support_1.sts.enumStruct({
            reactivated: support_1.sts.bigint(),
            deactivated: support_1.sts.bigint(),
        }),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.CollatorStakingEvent = support_1.sts.closedEnum(function () {
    return {
        CandidateJoined: support_1.sts.enumStruct({
            accountId: exports.AccountId32,
            amount: support_1.sts.bigint(),
            rewardsCut: exports.Perbill,
        }),
        CandidateRemoved: support_1.sts.enumStruct({
            accountId: exports.AccountId32,
        }),
        CollatorSelected: support_1.sts.enumStruct({
            accountId: exports.AccountId32,
        }),
        NewInvulnerables: support_1.sts.enumStruct({
            new: support_1.sts.array(function () {
                return exports.AccountId32
            }),
        }),
        Nominated: support_1.sts.enumStruct({
            accountId: exports.AccountId32,
            collatorId: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        NominationRemoved: support_1.sts.enumStruct({
            accountId: exports.AccountId32,
            collatorId: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        RoundFinalized: support_1.sts.enumStruct({
            number: support_1.sts.number(),
        }),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.BountiesEvent = support_1.sts.closedEnum(function () {
    return {
        BountyAwarded: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            beneficiary: exports.AccountId32,
        }),
        BountyBecameActive: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        BountyCanceled: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        BountyClaimed: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            payout: support_1.sts.bigint(),
            beneficiary: exports.AccountId32,
        }),
        BountyExtended: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        BountyProposed: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        BountyRejected: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            bond: support_1.sts.bigint(),
        }),
    }
})
/**
 *
            The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
            by this pallet.
            
 */
exports.BalancesEvent = support_1.sts.closedEnum(function () {
    return {
        BalanceSet: support_1.sts.enumStruct({
            who: exports.AccountId32,
            free: support_1.sts.bigint(),
            reserved: support_1.sts.bigint(),
        }),
        Deposit: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        DustLost: support_1.sts.enumStruct({
            account: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Endowed: support_1.sts.enumStruct({
            account: exports.AccountId32,
            freeBalance: support_1.sts.bigint(),
        }),
        ReserveRepatriated: support_1.sts.enumStruct({
            from: exports.AccountId32,
            to: exports.AccountId32,
            amount: support_1.sts.bigint(),
            destinationStatus: exports.BalanceStatus,
        }),
        Reserved: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Slashed: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Transfer: support_1.sts.enumStruct({
            from: exports.AccountId32,
            to: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Unreserved: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Withdraw: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
    }
})
exports.BalanceStatus = support_1.sts.closedEnum(function () {
    return {
        Free: support_1.sts.unit(),
        Reserved: support_1.sts.unit(),
    }
})
exports.Phase = support_1.sts.closedEnum(function () {
    return {
        ApplyExtrinsic: support_1.sts.number(),
        Finalization: support_1.sts.unit(),
        Initialization: support_1.sts.unit(),
    }
})
exports.DispatchRuleDescriptor = support_1.sts.closedEnum(function () {
    return {
        MaxFuelBurnPerTransaction: exports.MaxFuelBurnPerTransactionRule,
        PermittedCalls: support_1.sts.array(function () {
            return support_1.sts.bytes()
        }),
        PermittedExtrinsics: support_1.sts.array(function () {
            return exports.Call
        }),
        RequireToken: exports.RequireTokenRule,
        TankFuelBudget: exports.TankFuelBudgetRuleDescriptor,
        UserFuelBudget: exports.UserFuelBudgetRuleDescriptor,
        WhitelistedCallers: support_1.sts.array(function () {
            return exports.AccountId32
        }),
        WhitelistedCollections: support_1.sts.array(function () {
            return support_1.sts.bigint()
        }),
    }
})
exports.UserFuelBudgetRuleDescriptor = support_1.sts.struct(function () {
    return {
        amount: support_1.sts.bigint(),
        resetPeriod: support_1.sts.number(),
    }
})
exports.TankFuelBudgetRuleDescriptor = support_1.sts.struct(function () {
    return {
        amount: support_1.sts.bigint(),
        resetPeriod: support_1.sts.number(),
    }
})
exports.MaxFuelBurnPerTransactionRule = support_1.sts.bigint()
exports.MultiAddress = support_1.sts.closedEnum(function () {
    return {
        Address20: support_1.sts.bytes(),
        Address32: support_1.sts.bytes(),
        Id: exports.AccountId32,
        Index: support_1.sts.unit(),
        Raw: support_1.sts.bytes(),
    }
})
exports.FuelTankDescriptor = support_1.sts.struct(function () {
    return {
        name: support_1.sts.bytes(),
        userAccountManagement: support_1.sts.option(function () {
            return exports.UserAccountManagement
        }),
        ruleSets: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return exports.DispatchRuleDescriptor
                    }),
                ]
            })
        }),
        providesDeposit: support_1.sts.boolean(),
        accountRules: support_1.sts.array(function () {
            return exports.AccountRuleDescriptor
        }),
    }
})
exports.Timepoint = support_1.sts.struct(function () {
    return {
        height: support_1.sts.number(),
        index: support_1.sts.number(),
    }
})
exports.AccountId32 = support_1.sts.bytes()
exports.Weight = support_1.sts.struct(function () {
    return {
        refTime: support_1.sts.bigint(),
        proofSize: support_1.sts.bigint(),
    }
})
exports.OriginCaller = support_1.sts.closedEnum(function () {
    return {
        Council: exports.Type_297,
        CumulusXcm: exports.Type_300,
        PolkadotXcm: exports.Origin,
        TechnicalCommittee: exports.Type_298,
        Void: exports.Void,
        system: exports.RawOrigin,
    }
})
exports.RawOrigin = support_1.sts.closedEnum(function () {
    return {
        None: support_1.sts.unit(),
        Root: support_1.sts.unit(),
        Signed: exports.AccountId32,
    }
})
exports.Void = support_1.sts.closedEnum(function () {
    return {}
})
exports.Type_298 = support_1.sts.closedEnum(function () {
    return {
        Member: exports.AccountId32,
        Members: support_1.sts.tuple(function () {
            return [support_1.sts.number(), support_1.sts.number()]
        }),
        _Phantom: support_1.sts.unit(),
    }
})
exports.Origin = support_1.sts.closedEnum(function () {
    return {
        Response: exports.V3MultiLocation,
        Xcm: exports.V3MultiLocation,
    }
})
exports.Type_300 = support_1.sts.closedEnum(function () {
    return {
        Relay: support_1.sts.unit(),
        SiblingParachain: exports.Id,
    }
})
exports.Type_297 = support_1.sts.closedEnum(function () {
    return {
        Member: exports.AccountId32,
        Members: support_1.sts.tuple(function () {
            return [support_1.sts.number(), support_1.sts.number()]
        }),
        _Phantom: support_1.sts.unit(),
    }
})
exports.Call = support_1.sts.closedEnum(function () {
    return {
        Balances: exports.BalancesCall,
        Bounties: exports.BountiesCall,
        CollatorStaking: exports.CollatorStakingCall,
        CommunityPool: exports.CommunityPoolCall,
        Council: exports.CouncilCall,
        CumulusXcm: exports.CumulusXcmCall,
        Democracy: exports.DemocracyCall,
        DmpQueue: exports.DmpQueueCall,
        EfinityUtility: exports.EfinityUtilityCall,
        EfinityXcm: exports.EfinityXcmCall,
        ExtrinsicPause: exports.ExtrinsicPauseCall,
        FuelTanks: exports.FuelTanksCall,
        Marketplace: exports.MarketplaceCall,
        MultiTokens: exports.MultiTokensCall,
        MultiTokensMigration: exports.MultiTokensMigrationCall,
        Multisig: exports.MultisigCall,
        OrmlXcm: exports.OrmlXcmCall,
        ParachainSystem: exports.ParachainSystemCall,
        PolkadotXcm: exports.PolkadotXcmCall,
        Pools: exports.PoolsCall,
        Preimage: exports.PreimageCall,
        Scheduler: exports.SchedulerCall,
        Session: exports.SessionCall,
        Sudo: exports.SudoCall,
        System: exports.SystemCall,
        TechnicalCommittee: exports.TechnicalCommitteeCall,
        TechnicalMembership: exports.TechnicalMembershipCall,
        Timestamp: exports.TimestampCall,
        Utility: exports.UtilityCall,
        XTokens: exports.XTokensCall,
        XcmpQueue: exports.XcmpQueueCall,
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.XcmpQueueCall = support_1.sts.closedEnum(function () {
    return {
        resume_xcm_execution: support_1.sts.unit(),
        service_overweight: support_1.sts.enumStruct({
            index: support_1.sts.bigint(),
            weightLimit: exports.Weight,
        }),
        suspend_xcm_execution: support_1.sts.unit(),
        update_drop_threshold: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        update_resume_threshold: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        update_suspend_threshold: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        update_threshold_weight: support_1.sts.enumStruct({
            new: exports.Weight,
        }),
        update_weight_restrict_decay: support_1.sts.enumStruct({
            new: exports.Weight,
        }),
        update_xcmp_max_individual_weight: support_1.sts.enumStruct({
            new: exports.Weight,
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.XTokensCall = support_1.sts.closedEnum(function () {
    return {
        transfer: support_1.sts.enumStruct({
            currencyId: exports.AssetId,
            amount: support_1.sts.bigint(),
            dest: exports.VersionedMultiLocation,
            destWeightLimit: exports.V3WeightLimit,
        }),
        transfer_multiasset: support_1.sts.enumStruct({
            asset: exports.VersionedMultiAsset,
            dest: exports.VersionedMultiLocation,
            destWeightLimit: exports.V3WeightLimit,
        }),
        transfer_multiasset_with_fee: support_1.sts.enumStruct({
            asset: exports.VersionedMultiAsset,
            fee: exports.VersionedMultiAsset,
            dest: exports.VersionedMultiLocation,
            destWeightLimit: exports.V3WeightLimit,
        }),
        transfer_multiassets: support_1.sts.enumStruct({
            assets: exports.VersionedMultiAssets,
            feeItem: support_1.sts.number(),
            dest: exports.VersionedMultiLocation,
            destWeightLimit: exports.V3WeightLimit,
        }),
        transfer_multicurrencies: support_1.sts.enumStruct({
            currencies: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [exports.AssetId, support_1.sts.bigint()]
                })
            }),
            feeItem: support_1.sts.number(),
            dest: exports.VersionedMultiLocation,
            destWeightLimit: exports.V3WeightLimit,
        }),
        transfer_with_fee: support_1.sts.enumStruct({
            currencyId: exports.AssetId,
            amount: support_1.sts.bigint(),
            fee: support_1.sts.bigint(),
            dest: exports.VersionedMultiLocation,
            destWeightLimit: exports.V3WeightLimit,
        }),
    }
})
exports.VersionedMultiAsset = support_1.sts.closedEnum(function () {
    return {
        V2: exports.V2MultiAsset,
        V3: exports.V3MultiAsset,
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.UtilityCall = support_1.sts.closedEnum(function () {
    return {
        as_derivative: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            call: exports.Call,
        }),
        batch: support_1.sts.enumStruct({
            calls: support_1.sts.array(function () {
                return exports.Call
            }),
        }),
        batch_all: support_1.sts.enumStruct({
            calls: support_1.sts.array(function () {
                return exports.Call
            }),
        }),
        dispatch_as: support_1.sts.enumStruct({
            asOrigin: exports.OriginCaller,
            call: exports.Call,
        }),
        force_batch: support_1.sts.enumStruct({
            calls: support_1.sts.array(function () {
                return exports.Call
            }),
        }),
        with_weight: support_1.sts.enumStruct({
            call: exports.Call,
            weight: exports.Weight,
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.TimestampCall = support_1.sts.closedEnum(function () {
    return {
        set: support_1.sts.enumStruct({
            now: support_1.sts.bigint(),
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.TechnicalMembershipCall = support_1.sts.closedEnum(function () {
    return {
        add_member: support_1.sts.enumStruct({
            who: exports.MultiAddress,
        }),
        change_key: support_1.sts.enumStruct({
            new: exports.MultiAddress,
        }),
        clear_prime: support_1.sts.unit(),
        remove_member: support_1.sts.enumStruct({
            who: exports.MultiAddress,
        }),
        reset_members: support_1.sts.enumStruct({
            members: support_1.sts.array(function () {
                return exports.AccountId32
            }),
        }),
        set_prime: support_1.sts.enumStruct({
            who: exports.MultiAddress,
        }),
        swap_member: support_1.sts.enumStruct({
            remove: exports.MultiAddress,
            add: exports.MultiAddress,
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.TechnicalCommitteeCall = support_1.sts.closedEnum(function () {
    return {
        close: support_1.sts.enumStruct({
            proposalHash: exports.H256,
            index: support_1.sts.number(),
            proposalWeightBound: exports.Weight,
            lengthBound: support_1.sts.number(),
        }),
        close_old_weight: support_1.sts.enumStruct({
            proposalHash: exports.H256,
            index: support_1.sts.number(),
            proposalWeightBound: support_1.sts.bigint(),
            lengthBound: support_1.sts.number(),
        }),
        disapprove_proposal: support_1.sts.enumStruct({
            proposalHash: exports.H256,
        }),
        execute: support_1.sts.enumStruct({
            proposal: exports.Call,
            lengthBound: support_1.sts.number(),
        }),
        propose: support_1.sts.enumStruct({
            threshold: support_1.sts.number(),
            proposal: exports.Call,
            lengthBound: support_1.sts.number(),
        }),
        set_members: support_1.sts.enumStruct({
            newMembers: support_1.sts.array(function () {
                return exports.AccountId32
            }),
            prime: support_1.sts.option(function () {
                return exports.AccountId32
            }),
            oldCount: support_1.sts.number(),
        }),
        vote: support_1.sts.enumStruct({
            proposal: exports.H256,
            index: support_1.sts.number(),
            approve: support_1.sts.boolean(),
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.SystemCall = support_1.sts.closedEnum(function () {
    return {
        kill_prefix: support_1.sts.enumStruct({
            prefix: support_1.sts.bytes(),
            subkeys: support_1.sts.number(),
        }),
        kill_storage: support_1.sts.enumStruct({
            keys: support_1.sts.array(function () {
                return support_1.sts.bytes()
            }),
        }),
        remark: support_1.sts.enumStruct({
            remark: support_1.sts.bytes(),
        }),
        remark_with_event: support_1.sts.enumStruct({
            remark: support_1.sts.bytes(),
        }),
        set_code: support_1.sts.enumStruct({
            code: support_1.sts.bytes(),
        }),
        set_code_without_checks: support_1.sts.enumStruct({
            code: support_1.sts.bytes(),
        }),
        set_heap_pages: support_1.sts.enumStruct({
            pages: support_1.sts.bigint(),
        }),
        set_storage: support_1.sts.enumStruct({
            items: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.bytes(), support_1.sts.bytes()]
                })
            }),
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.SudoCall = support_1.sts.closedEnum(function () {
    return {
        set_key: support_1.sts.enumStruct({
            new: exports.MultiAddress,
        }),
        sudo: support_1.sts.enumStruct({
            call: exports.Call,
        }),
        sudo_as: support_1.sts.enumStruct({
            who: exports.MultiAddress,
            call: exports.Call,
        }),
        sudo_unchecked_weight: support_1.sts.enumStruct({
            call: exports.Call,
            weight: exports.Weight,
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.SessionCall = support_1.sts.closedEnum(function () {
    return {
        purge_keys: support_1.sts.unit(),
        set_keys: support_1.sts.enumStruct({
            keys: exports.SessionKeys,
            proof: support_1.sts.bytes(),
        }),
    }
})
exports.SessionKeys = support_1.sts.struct(function () {
    return {
        aura: exports.Public,
        pools: exports.Public,
    }
})
exports.Public = support_1.sts.bytes()
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.SchedulerCall = support_1.sts.closedEnum(function () {
    return {
        cancel: support_1.sts.enumStruct({
            when: support_1.sts.number(),
            index: support_1.sts.number(),
        }),
        cancel_named: support_1.sts.enumStruct({
            id: support_1.sts.bytes(),
        }),
        schedule: support_1.sts.enumStruct({
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: exports.Call,
        }),
        schedule_after: support_1.sts.enumStruct({
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: exports.Call,
        }),
        schedule_named: support_1.sts.enumStruct({
            id: support_1.sts.bytes(),
            when: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: exports.Call,
        }),
        schedule_named_after: support_1.sts.enumStruct({
            id: support_1.sts.bytes(),
            after: support_1.sts.number(),
            maybePeriodic: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.number(), support_1.sts.number()]
                })
            }),
            priority: support_1.sts.number(),
            call: exports.Call,
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.PreimageCall = support_1.sts.closedEnum(function () {
    return {
        note_preimage: support_1.sts.enumStruct({
            bytes: support_1.sts.bytes(),
        }),
        request_preimage: support_1.sts.enumStruct({
            hash: exports.H256,
        }),
        unnote_preimage: support_1.sts.enumStruct({
            hash: exports.H256,
        }),
        unrequest_preimage: support_1.sts.enumStruct({
            hash: exports.H256,
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.PoolsCall = support_1.sts.closedEnum(function () {
    return {
        mutate_pools: support_1.sts.enumStruct({
            mutation: exports.PoolsMutation,
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.PolkadotXcmCall = support_1.sts.closedEnum(function () {
    return {
        execute: support_1.sts.enumStruct({
            message: exports.Type_336,
            maxWeight: exports.Weight,
        }),
        force_default_xcm_version: support_1.sts.enumStruct({
            maybeXcmVersion: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        }),
        force_subscribe_version_notify: support_1.sts.enumStruct({
            location: exports.VersionedMultiLocation,
        }),
        force_unsubscribe_version_notify: support_1.sts.enumStruct({
            location: exports.VersionedMultiLocation,
        }),
        force_xcm_version: support_1.sts.enumStruct({
            location: exports.V3MultiLocation,
            xcmVersion: support_1.sts.number(),
        }),
        limited_reserve_transfer_assets: support_1.sts.enumStruct({
            dest: exports.VersionedMultiLocation,
            beneficiary: exports.VersionedMultiLocation,
            assets: exports.VersionedMultiAssets,
            feeAssetItem: support_1.sts.number(),
            weightLimit: exports.V3WeightLimit,
        }),
        limited_teleport_assets: support_1.sts.enumStruct({
            dest: exports.VersionedMultiLocation,
            beneficiary: exports.VersionedMultiLocation,
            assets: exports.VersionedMultiAssets,
            feeAssetItem: support_1.sts.number(),
            weightLimit: exports.V3WeightLimit,
        }),
        reserve_transfer_assets: support_1.sts.enumStruct({
            dest: exports.VersionedMultiLocation,
            beneficiary: exports.VersionedMultiLocation,
            assets: exports.VersionedMultiAssets,
            feeAssetItem: support_1.sts.number(),
        }),
        send: support_1.sts.enumStruct({
            dest: exports.VersionedMultiLocation,
            message: exports.VersionedXcm,
        }),
        teleport_assets: support_1.sts.enumStruct({
            dest: exports.VersionedMultiLocation,
            beneficiary: exports.VersionedMultiLocation,
            assets: exports.VersionedMultiAssets,
            feeAssetItem: support_1.sts.number(),
        }),
    }
})
exports.VersionedXcm = support_1.sts.closedEnum(function () {
    return {
        V2: support_1.sts.array(function () {
            return exports.V2Instruction
        }),
        V3: support_1.sts.array(function () {
            return exports.V3Instruction
        }),
    }
})
exports.V2Instruction = support_1.sts.closedEnum(function () {
    return {
        BuyExecution: support_1.sts.enumStruct({
            fees: exports.V2MultiAsset,
            weightLimit: exports.V2WeightLimit,
        }),
        ClaimAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V2MultiAsset
            }),
            ticket: exports.V2MultiLocation,
        }),
        ClearError: support_1.sts.unit(),
        ClearOrigin: support_1.sts.unit(),
        DepositAsset: support_1.sts.enumStruct({
            assets: exports.V2MultiAssetFilter,
            maxAssets: support_1.sts.number(),
            beneficiary: exports.V2MultiLocation,
        }),
        DepositReserveAsset: support_1.sts.enumStruct({
            assets: exports.V2MultiAssetFilter,
            maxAssets: support_1.sts.number(),
            dest: exports.V2MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V2Instruction
            }),
        }),
        DescendOrigin: exports.V2Junctions,
        ExchangeAsset: support_1.sts.enumStruct({
            give: exports.V2MultiAssetFilter,
            receive: support_1.sts.array(function () {
                return exports.V2MultiAsset
            }),
        }),
        HrmpChannelAccepted: support_1.sts.enumStruct({
            recipient: support_1.sts.number(),
        }),
        HrmpChannelClosing: support_1.sts.enumStruct({
            initiator: support_1.sts.number(),
            sender: support_1.sts.number(),
            recipient: support_1.sts.number(),
        }),
        HrmpNewChannelOpenRequest: support_1.sts.enumStruct({
            sender: support_1.sts.number(),
            maxMessageSize: support_1.sts.number(),
            maxCapacity: support_1.sts.number(),
        }),
        InitiateReserveWithdraw: support_1.sts.enumStruct({
            assets: exports.V2MultiAssetFilter,
            reserve: exports.V2MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V2Instruction
            }),
        }),
        InitiateTeleport: support_1.sts.enumStruct({
            assets: exports.V2MultiAssetFilter,
            dest: exports.V2MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V2Instruction
            }),
        }),
        QueryHolding: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            dest: exports.V2MultiLocation,
            assets: exports.V2MultiAssetFilter,
            maxResponseWeight: support_1.sts.bigint(),
        }),
        QueryResponse: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            response: exports.V2Response,
            maxWeight: support_1.sts.bigint(),
        }),
        ReceiveTeleportedAsset: support_1.sts.array(function () {
            return exports.V2MultiAsset
        }),
        RefundSurplus: support_1.sts.unit(),
        ReportError: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            dest: exports.V2MultiLocation,
            maxResponseWeight: support_1.sts.bigint(),
        }),
        ReserveAssetDeposited: support_1.sts.array(function () {
            return exports.V2MultiAsset
        }),
        SetAppendix: support_1.sts.array(function () {
            return exports.V2Instruction
        }),
        SetErrorHandler: support_1.sts.array(function () {
            return exports.V2Instruction
        }),
        SubscribeVersion: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            maxResponseWeight: support_1.sts.bigint(),
        }),
        Transact: support_1.sts.enumStruct({
            originType: exports.V2OriginKind,
            requireWeightAtMost: support_1.sts.bigint(),
            call: exports.DoubleEncoded,
        }),
        TransferAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V2MultiAsset
            }),
            beneficiary: exports.V2MultiLocation,
        }),
        TransferReserveAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V2MultiAsset
            }),
            dest: exports.V2MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V2Instruction
            }),
        }),
        Trap: support_1.sts.bigint(),
        UnsubscribeVersion: support_1.sts.unit(),
        WithdrawAsset: support_1.sts.array(function () {
            return exports.V2MultiAsset
        }),
    }
})
exports.V2Response = support_1.sts.closedEnum(function () {
    return {
        Assets: support_1.sts.array(function () {
            return exports.V2MultiAsset
        }),
        ExecutionResult: support_1.sts.option(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), exports.V2Error]
            })
        }),
        Null: support_1.sts.unit(),
        Version: support_1.sts.number(),
    }
})
exports.V2Error = support_1.sts.closedEnum(function () {
    return {
        AssetNotFound: support_1.sts.unit(),
        BadOrigin: support_1.sts.unit(),
        Barrier: support_1.sts.unit(),
        DestinationUnsupported: support_1.sts.unit(),
        ExceedsMaxMessageSize: support_1.sts.unit(),
        FailedToDecode: support_1.sts.unit(),
        FailedToTransactAsset: support_1.sts.unit(),
        InvalidLocation: support_1.sts.unit(),
        LocationCannotHold: support_1.sts.unit(),
        MaxWeightInvalid: support_1.sts.unit(),
        MultiLocationFull: support_1.sts.unit(),
        MultiLocationNotInvertible: support_1.sts.unit(),
        NotHoldingFees: support_1.sts.unit(),
        NotWithdrawable: support_1.sts.unit(),
        Overflow: support_1.sts.unit(),
        TooExpensive: support_1.sts.unit(),
        Transport: support_1.sts.unit(),
        Trap: support_1.sts.bigint(),
        UnhandledXcmVersion: support_1.sts.unit(),
        Unimplemented: support_1.sts.unit(),
        UnknownClaim: support_1.sts.unit(),
        Unroutable: support_1.sts.unit(),
        UntrustedReserveLocation: support_1.sts.unit(),
        UntrustedTeleportLocation: support_1.sts.unit(),
        WeightLimitReached: support_1.sts.bigint(),
        WeightNotComputable: support_1.sts.unit(),
    }
})
exports.V2MultiAssetFilter = support_1.sts.closedEnum(function () {
    return {
        Definite: support_1.sts.array(function () {
            return exports.V2MultiAsset
        }),
        Wild: exports.V2WildMultiAsset,
    }
})
exports.V2WildMultiAsset = support_1.sts.closedEnum(function () {
    return {
        All: support_1.sts.unit(),
        AllOf: support_1.sts.enumStruct({
            id: exports.V2AssetId,
            fun: exports.V2WildFungibility,
        }),
    }
})
exports.V2WildFungibility = support_1.sts.closedEnum(function () {
    return {
        Fungible: support_1.sts.unit(),
        NonFungible: support_1.sts.unit(),
    }
})
exports.V2WeightLimit = support_1.sts.closedEnum(function () {
    return {
        Limited: support_1.sts.bigint(),
        Unlimited: support_1.sts.unit(),
    }
})
exports.Type_336 = support_1.sts.closedEnum(function () {
    return {
        V2: support_1.sts.array(function () {
            return exports.Type_339
        }),
        V3: support_1.sts.array(function () {
            return exports.Type_343
        }),
    }
})
exports.Type_343 = support_1.sts.closedEnum(function () {
    return {
        AliasOrigin: exports.V3MultiLocation,
        BurnAsset: support_1.sts.array(function () {
            return exports.V3MultiAsset
        }),
        BuyExecution: support_1.sts.enumStruct({
            fees: exports.V3MultiAsset,
            weightLimit: exports.V3WeightLimit,
        }),
        ClaimAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V3MultiAsset
            }),
            ticket: exports.V3MultiLocation,
        }),
        ClearError: support_1.sts.unit(),
        ClearOrigin: support_1.sts.unit(),
        ClearTopic: support_1.sts.unit(),
        ClearTransactStatus: support_1.sts.unit(),
        DepositAsset: support_1.sts.enumStruct({
            assets: exports.V3MultiAssetFilter,
            beneficiary: exports.V3MultiLocation,
        }),
        DepositReserveAsset: support_1.sts.enumStruct({
            assets: exports.V3MultiAssetFilter,
            dest: exports.V3MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V3Instruction
            }),
        }),
        DescendOrigin: exports.V3Junctions,
        ExchangeAsset: support_1.sts.enumStruct({
            give: exports.V3MultiAssetFilter,
            want: support_1.sts.array(function () {
                return exports.V3MultiAsset
            }),
            maximal: support_1.sts.boolean(),
        }),
        ExpectAsset: support_1.sts.array(function () {
            return exports.V3MultiAsset
        }),
        ExpectError: support_1.sts.option(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), exports.V3Error]
            })
        }),
        ExpectOrigin: support_1.sts.option(function () {
            return exports.V3MultiLocation
        }),
        ExpectPallet: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            name: support_1.sts.bytes(),
            moduleName: support_1.sts.bytes(),
            crateMajor: support_1.sts.number(),
            minCrateMinor: support_1.sts.number(),
        }),
        ExpectTransactStatus: exports.V3MaybeErrorCode,
        ExportMessage: support_1.sts.enumStruct({
            network: exports.V3NetworkId,
            destination: exports.V3Junctions,
            xcm: support_1.sts.array(function () {
                return exports.V3Instruction
            }),
        }),
        HrmpChannelAccepted: support_1.sts.enumStruct({
            recipient: support_1.sts.number(),
        }),
        HrmpChannelClosing: support_1.sts.enumStruct({
            initiator: support_1.sts.number(),
            sender: support_1.sts.number(),
            recipient: support_1.sts.number(),
        }),
        HrmpNewChannelOpenRequest: support_1.sts.enumStruct({
            sender: support_1.sts.number(),
            maxMessageSize: support_1.sts.number(),
            maxCapacity: support_1.sts.number(),
        }),
        InitiateReserveWithdraw: support_1.sts.enumStruct({
            assets: exports.V3MultiAssetFilter,
            reserve: exports.V3MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V3Instruction
            }),
        }),
        InitiateTeleport: support_1.sts.enumStruct({
            assets: exports.V3MultiAssetFilter,
            dest: exports.V3MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V3Instruction
            }),
        }),
        LockAsset: support_1.sts.enumStruct({
            asset: exports.V3MultiAsset,
            unlocker: exports.V3MultiLocation,
        }),
        NoteUnlockable: support_1.sts.enumStruct({
            asset: exports.V3MultiAsset,
            owner: exports.V3MultiLocation,
        }),
        QueryPallet: support_1.sts.enumStruct({
            moduleName: support_1.sts.bytes(),
            responseInfo: exports.V3QueryResponseInfo,
        }),
        QueryResponse: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            response: exports.V3Response,
            maxWeight: exports.Weight,
            querier: support_1.sts.option(function () {
                return exports.V3MultiLocation
            }),
        }),
        ReceiveTeleportedAsset: support_1.sts.array(function () {
            return exports.V3MultiAsset
        }),
        RefundSurplus: support_1.sts.unit(),
        ReportError: exports.V3QueryResponseInfo,
        ReportHolding: support_1.sts.enumStruct({
            responseInfo: exports.V3QueryResponseInfo,
            assets: exports.V3MultiAssetFilter,
        }),
        ReportTransactStatus: exports.V3QueryResponseInfo,
        RequestUnlock: support_1.sts.enumStruct({
            asset: exports.V3MultiAsset,
            locker: exports.V3MultiLocation,
        }),
        ReserveAssetDeposited: support_1.sts.array(function () {
            return exports.V3MultiAsset
        }),
        SetAppendix: support_1.sts.array(function () {
            return exports.Type_343
        }),
        SetErrorHandler: support_1.sts.array(function () {
            return exports.Type_343
        }),
        SetFeesMode: support_1.sts.enumStruct({
            jitWithdraw: support_1.sts.boolean(),
        }),
        SetTopic: support_1.sts.bytes(),
        SubscribeVersion: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            maxResponseWeight: exports.Weight,
        }),
        Transact: support_1.sts.enumStruct({
            originKind: exports.V2OriginKind,
            requireWeightAtMost: exports.Weight,
            call: exports.Type_340,
        }),
        TransferAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V3MultiAsset
            }),
            beneficiary: exports.V3MultiLocation,
        }),
        TransferReserveAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V3MultiAsset
            }),
            dest: exports.V3MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V3Instruction
            }),
        }),
        Trap: support_1.sts.bigint(),
        UniversalOrigin: exports.V3Junction,
        UnlockAsset: support_1.sts.enumStruct({
            asset: exports.V3MultiAsset,
            target: exports.V3MultiLocation,
        }),
        UnpaidExecution: support_1.sts.enumStruct({
            weightLimit: exports.V3WeightLimit,
            checkOrigin: support_1.sts.option(function () {
                return exports.V3MultiLocation
            }),
        }),
        UnsubscribeVersion: support_1.sts.unit(),
        WithdrawAsset: support_1.sts.array(function () {
            return exports.V3MultiAsset
        }),
    }
})
exports.Type_340 = support_1.sts.struct(function () {
    return {
        encoded: support_1.sts.bytes(),
    }
})
exports.Type_339 = support_1.sts.closedEnum(function () {
    return {
        BuyExecution: support_1.sts.enumStruct({
            fees: exports.V2MultiAsset,
            weightLimit: exports.V2WeightLimit,
        }),
        ClaimAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V2MultiAsset
            }),
            ticket: exports.V2MultiLocation,
        }),
        ClearError: support_1.sts.unit(),
        ClearOrigin: support_1.sts.unit(),
        DepositAsset: support_1.sts.enumStruct({
            assets: exports.V2MultiAssetFilter,
            maxAssets: support_1.sts.number(),
            beneficiary: exports.V2MultiLocation,
        }),
        DepositReserveAsset: support_1.sts.enumStruct({
            assets: exports.V2MultiAssetFilter,
            maxAssets: support_1.sts.number(),
            dest: exports.V2MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V2Instruction
            }),
        }),
        DescendOrigin: exports.V2Junctions,
        ExchangeAsset: support_1.sts.enumStruct({
            give: exports.V2MultiAssetFilter,
            receive: support_1.sts.array(function () {
                return exports.V2MultiAsset
            }),
        }),
        HrmpChannelAccepted: support_1.sts.enumStruct({
            recipient: support_1.sts.number(),
        }),
        HrmpChannelClosing: support_1.sts.enumStruct({
            initiator: support_1.sts.number(),
            sender: support_1.sts.number(),
            recipient: support_1.sts.number(),
        }),
        HrmpNewChannelOpenRequest: support_1.sts.enumStruct({
            sender: support_1.sts.number(),
            maxMessageSize: support_1.sts.number(),
            maxCapacity: support_1.sts.number(),
        }),
        InitiateReserveWithdraw: support_1.sts.enumStruct({
            assets: exports.V2MultiAssetFilter,
            reserve: exports.V2MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V2Instruction
            }),
        }),
        InitiateTeleport: support_1.sts.enumStruct({
            assets: exports.V2MultiAssetFilter,
            dest: exports.V2MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V2Instruction
            }),
        }),
        QueryHolding: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            dest: exports.V2MultiLocation,
            assets: exports.V2MultiAssetFilter,
            maxResponseWeight: support_1.sts.bigint(),
        }),
        QueryResponse: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            response: exports.V2Response,
            maxWeight: support_1.sts.bigint(),
        }),
        ReceiveTeleportedAsset: support_1.sts.array(function () {
            return exports.V2MultiAsset
        }),
        RefundSurplus: support_1.sts.unit(),
        ReportError: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            dest: exports.V2MultiLocation,
            maxResponseWeight: support_1.sts.bigint(),
        }),
        ReserveAssetDeposited: support_1.sts.array(function () {
            return exports.V2MultiAsset
        }),
        SetAppendix: support_1.sts.array(function () {
            return exports.Type_339
        }),
        SetErrorHandler: support_1.sts.array(function () {
            return exports.Type_339
        }),
        SubscribeVersion: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            maxResponseWeight: support_1.sts.bigint(),
        }),
        Transact: support_1.sts.enumStruct({
            originType: exports.V2OriginKind,
            requireWeightAtMost: support_1.sts.bigint(),
            call: exports.Type_340,
        }),
        TransferAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V2MultiAsset
            }),
            beneficiary: exports.V2MultiLocation,
        }),
        TransferReserveAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V2MultiAsset
            }),
            dest: exports.V2MultiLocation,
            xcm: support_1.sts.array(function () {
                return exports.V2Instruction
            }),
        }),
        Trap: support_1.sts.bigint(),
        UnsubscribeVersion: support_1.sts.unit(),
        WithdrawAsset: support_1.sts.array(function () {
            return exports.V2MultiAsset
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.ParachainSystemCall = support_1.sts.closedEnum(function () {
    return {
        authorize_upgrade: support_1.sts.enumStruct({
            codeHash: exports.H256,
        }),
        enact_authorized_upgrade: support_1.sts.enumStruct({
            code: support_1.sts.bytes(),
        }),
        set_validation_data: support_1.sts.enumStruct({
            data: exports.ParachainInherentData,
        }),
        sudo_send_upward_message: support_1.sts.enumStruct({
            message: support_1.sts.bytes(),
        }),
    }
})
exports.ParachainInherentData = support_1.sts.struct(function () {
    return {
        validationData: exports.V2PersistedValidationData,
        relayChainState: exports.StorageProof,
        downwardMessages: support_1.sts.array(function () {
            return exports.InboundDownwardMessage
        }),
        horizontalMessages: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    exports.Id,
                    support_1.sts.array(function () {
                        return exports.InboundHrmpMessage
                    }),
                ]
            })
        }),
    }
})
exports.InboundHrmpMessage = support_1.sts.struct(function () {
    return {
        sentAt: support_1.sts.number(),
        data: support_1.sts.bytes(),
    }
})
exports.InboundDownwardMessage = support_1.sts.struct(function () {
    return {
        sentAt: support_1.sts.number(),
        msg: support_1.sts.bytes(),
    }
})
exports.StorageProof = support_1.sts.struct(function () {
    return {
        trieNodes: support_1.sts.array(function () {
            return support_1.sts.bytes()
        }),
    }
})
exports.V2PersistedValidationData = support_1.sts.struct(function () {
    return {
        parentHead: exports.HeadData,
        relayParentNumber: support_1.sts.number(),
        relayParentStorageRoot: exports.H256,
        maxPovSize: support_1.sts.number(),
    }
})
exports.HeadData = support_1.sts.bytes()
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.OrmlXcmCall = support_1.sts.closedEnum(function () {
    return {
        send_as_sovereign: support_1.sts.enumStruct({
            dest: exports.VersionedMultiLocation,
            message: exports.VersionedXcm,
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.MultisigCall = support_1.sts.closedEnum(function () {
    return {
        approve_as_multi: support_1.sts.enumStruct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return exports.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return exports.Timepoint
            }),
            callHash: support_1.sts.bytes(),
            maxWeight: exports.Weight,
        }),
        as_multi: support_1.sts.enumStruct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return exports.AccountId32
            }),
            maybeTimepoint: support_1.sts.option(function () {
                return exports.Timepoint
            }),
            call: exports.Call,
            maxWeight: exports.Weight,
        }),
        as_multi_threshold_1: support_1.sts.enumStruct({
            otherSignatories: support_1.sts.array(function () {
                return exports.AccountId32
            }),
            call: exports.Call,
        }),
        cancel_as_multi: support_1.sts.enumStruct({
            threshold: support_1.sts.number(),
            otherSignatories: support_1.sts.array(function () {
                return exports.AccountId32
            }),
            timepoint: exports.Timepoint,
            callHash: support_1.sts.bytes(),
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.MultiTokensMigrationCall = support_1.sts.closedEnum(function () {
    return {
        finalize: support_1.sts.enumStruct({
            nextCollectionId: support_1.sts.bigint(),
        }),
        migrate_attributes: support_1.sts.enumStruct({
            attributes: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [
                        support_1.sts.bigint(),
                        support_1.sts.option(function () {
                            return support_1.sts.bigint()
                        }),
                        support_1.sts.bytes(),
                        exports.Attribute,
                    ]
                })
            }),
        }),
        migrate_collection_accounts: support_1.sts.enumStruct({
            accounts: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.bigint(), exports.AccountId32, exports.CollectionAccount]
                })
            }),
        }),
        migrate_collections: support_1.sts.enumStruct({
            collections: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.bigint(), exports.Collection]
                })
            }),
        }),
        migrate_token_accounts: support_1.sts.enumStruct({
            accounts: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.bigint(), support_1.sts.bigint(), exports.AccountId32, exports.TokenAccount]
                })
            }),
        }),
        migrate_tokens: support_1.sts.enumStruct({
            tokens: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.bigint(), support_1.sts.bigint(), exports.Token]
                })
            }),
        }),
    }
})
exports.Attribute = support_1.sts.struct(function () {
    return {
        value: support_1.sts.bytes(),
        deposit: support_1.sts.bigint(),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.MultiTokensCall = support_1.sts.closedEnum(function () {
    return {
        approve_collection: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            operator: exports.AccountId32,
            expiration: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        }),
        approve_token: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            operator: exports.AccountId32,
            amount: support_1.sts.bigint(),
            expiration: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            currentAmount: support_1.sts.bigint(),
        }),
        batch_mint: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return exports.Type_379
            }),
        }),
        batch_set_attribute: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            attributes: support_1.sts.array(function () {
                return exports.AttributeKeyValuePair
            }),
        }),
        batch_transfer: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return exports.Recipient
            }),
        }),
        burn: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            params: exports.DefaultBurnParams,
        }),
        create_collection: support_1.sts.enumStruct({
            descriptor: exports.DefaultCollectionDescriptor,
        }),
        destroy_collection: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
        }),
        force_create_collection: support_1.sts.enumStruct({
            owner: exports.AccountId32,
            collectionId: support_1.sts.bigint(),
            descriptor: exports.DefaultCollectionDescriptor,
        }),
        force_mutate_collection: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            mutation: exports.DefaultCollectionMutation,
        }),
        force_set_attribute: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.option(function () {
                return exports.Attribute
            }),
        }),
        force_set_collection: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return exports.Collection
            }),
        }),
        force_set_collection_account: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            accountId: exports.MultiAddress,
            value: support_1.sts.option(function () {
                return exports.CollectionAccount
            }),
        }),
        force_set_token: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return exports.Token
            }),
        }),
        force_set_token_account: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.MultiAddress,
            value: support_1.sts.option(function () {
                return exports.TokenAccount
            }),
        }),
        force_transfer: support_1.sts.enumStruct({
            source: exports.MultiAddress,
            destination: exports.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: exports.DefaultTransferParams,
        }),
        freeze: support_1.sts.enumStruct({
            info: exports.Freeze,
        }),
        mint: support_1.sts.enumStruct({
            recipient: exports.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: exports.DefaultMintParams,
        }),
        mutate_collection: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            mutation: exports.DefaultCollectionMutation,
        }),
        mutate_token: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            mutation: exports.DefaultTokenMutation,
        }),
        remove_all_attributes: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            attributeCount: support_1.sts.number(),
        }),
        remove_attribute: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
        }),
        set_attribute: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.bytes(),
        }),
        thaw: support_1.sts.enumStruct({
            info: exports.Freeze,
        }),
        transfer: support_1.sts.enumStruct({
            recipient: exports.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: exports.DefaultTransferParams,
        }),
        unapprove_collection: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            operator: exports.AccountId32,
        }),
        unapprove_token: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            operator: exports.AccountId32,
        }),
    }
})
exports.DefaultMintParams = support_1.sts.closedEnum(function () {
    return {
        CreateToken: support_1.sts.enumStruct({
            tokenId: support_1.sts.bigint(),
            initialSupply: support_1.sts.bigint(),
            sufficiency: exports.SufficiencyParam,
            cap: support_1.sts.option(function () {
                return exports.TokenCap
            }),
            behavior: support_1.sts.option(function () {
                return exports.TokenMarketBehavior
            }),
            listingForbidden: support_1.sts.boolean(),
            freezeState: support_1.sts.option(function () {
                return exports.FreezeState
            }),
            attributes: support_1.sts.array(function () {
                return exports.AttributeKeyValuePair
            }),
            foreignParams: support_1.sts.option(function () {
                return exports.ForeignTokenCreationParams
            }),
        }),
        Mint: support_1.sts.enumStruct({
            tokenId: support_1.sts.bigint(),
            amount: support_1.sts.bigint(),
            unitPrice: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
        }),
    }
})
exports.ForeignTokenCreationParams = support_1.sts.struct(function () {
    return {
        decimalCount: support_1.sts.number(),
        name: exports.BoundedString,
        symbol: support_1.sts.bytes(),
        location: support_1.sts.option(function () {
            return exports.V3MultiLocation
        }),
        unitsPerSecond: support_1.sts.option(function () {
            return support_1.sts.bigint()
        }),
    }
})
exports.SufficiencyParam = support_1.sts.closedEnum(function () {
    return {
        Insufficient: support_1.sts.enumStruct({
            unitPrice: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
        }),
        Sufficient: support_1.sts.enumStruct({
            minimumBalance: support_1.sts.bigint(),
        }),
    }
})
exports.DefaultTransferParams = support_1.sts.closedEnum(function () {
    return {
        Operator: support_1.sts.enumStruct({
            tokenId: support_1.sts.bigint(),
            source: exports.AccountId32,
            amount: support_1.sts.bigint(),
            keepAlive: support_1.sts.boolean(),
        }),
        Simple: support_1.sts.enumStruct({
            tokenId: support_1.sts.bigint(),
            amount: support_1.sts.bigint(),
            keepAlive: support_1.sts.boolean(),
        }),
    }
})
exports.DefaultCollectionDescriptor = support_1.sts.struct(function () {
    return {
        policy: exports.DefaultCollectionPolicyDescriptor,
        explicitRoyaltyCurrencies: support_1.sts.array(function () {
            return exports.AssetId
        }),
        attributes: support_1.sts.array(function () {
            return exports.AttributeKeyValuePair
        }),
    }
})
exports.DefaultCollectionPolicyDescriptor = support_1.sts.struct(function () {
    return {
        mint: exports.DefaultMintPolicyDescriptor,
        market: exports.DefaultMarketPolicyDescriptor,
    }
})
exports.DefaultMarketPolicyDescriptor = support_1.sts.struct(function () {
    return {
        royalty: support_1.sts.option(function () {
            return exports.DefaultRoyalty
        }),
    }
})
exports.DefaultMintPolicyDescriptor = support_1.sts.struct(function () {
    return {
        maxTokenCount: support_1.sts.option(function () {
            return support_1.sts.bigint()
        }),
        maxTokenSupply: support_1.sts.option(function () {
            return support_1.sts.bigint()
        }),
        forceSingleMint: support_1.sts.boolean(),
    }
})
exports.DefaultBurnParams = support_1.sts.struct(function () {
    return {
        tokenId: support_1.sts.bigint(),
        amount: support_1.sts.bigint(),
        keepAlive: support_1.sts.boolean(),
        removeTokenStorage: support_1.sts.boolean(),
    }
})
exports.Recipient = support_1.sts.struct(function () {
    return {
        accountId: exports.AccountId32,
        params: exports.DefaultTransferParams,
    }
})
exports.AttributeKeyValuePair = support_1.sts.struct(function () {
    return {
        key: support_1.sts.bytes(),
        value: support_1.sts.bytes(),
    }
})
exports.Type_379 = support_1.sts.struct(function () {
    return {
        accountId: exports.AccountId32,
        params: exports.DefaultMintParams,
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.MarketplaceCall = support_1.sts.closedEnum(function () {
    return {
        cancel_listing: support_1.sts.enumStruct({
            listingId: exports.H256,
        }),
        create_listing: support_1.sts.enumStruct({
            makeAssetId: exports.AssetId,
            takeAssetId: exports.AssetId,
            amount: support_1.sts.bigint(),
            price: support_1.sts.bigint(),
            salt: support_1.sts.bytes(),
            auctionData: support_1.sts.option(function () {
                return exports.AuctionData
            }),
        }),
        fill_listing: support_1.sts.enumStruct({
            listingId: exports.H256,
            amount: support_1.sts.bigint(),
        }),
        finalize_auction: support_1.sts.enumStruct({
            listingId: exports.H256,
        }),
        place_bid: support_1.sts.enumStruct({
            listingId: exports.H256,
            price: support_1.sts.bigint(),
        }),
        set_protocol_fee: support_1.sts.enumStruct({
            protocolFee: exports.Perbill,
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.FuelTanksCall = support_1.sts.closedEnum(function () {
    return {
        add_account: support_1.sts.enumStruct({
            tankId: exports.MultiAddress,
            userId: exports.MultiAddress,
        }),
        batch_add_account: support_1.sts.enumStruct({
            tankId: exports.MultiAddress,
            userIds: support_1.sts.array(function () {
                return exports.MultiAddress
            }),
        }),
        batch_remove_account: support_1.sts.enumStruct({
            tankId: exports.MultiAddress,
            userIds: support_1.sts.array(function () {
                return exports.MultiAddress
            }),
        }),
        create_fuel_tank: support_1.sts.enumStruct({
            descriptor: exports.FuelTankDescriptor,
        }),
        destroy_fuel_tank: support_1.sts.enumStruct({
            tankId: exports.MultiAddress,
        }),
        dispatch: support_1.sts.enumStruct({
            tankId: exports.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: exports.Call,
            paysRemainingFee: support_1.sts.boolean(),
        }),
        dispatch_and_touch: support_1.sts.enumStruct({
            tankId: exports.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: exports.Call,
            paysRemainingFee: support_1.sts.boolean(),
        }),
        force_set_consumption: support_1.sts.enumStruct({
            tankId: exports.MultiAddress,
            userId: support_1.sts.option(function () {
                return exports.MultiAddress
            }),
            ruleSetId: support_1.sts.number(),
            consumption: exports.Consumption,
        }),
        insert_rule_set: support_1.sts.enumStruct({
            tankId: exports.MultiAddress,
            ruleSetId: support_1.sts.number(),
            rules: support_1.sts.array(function () {
                return exports.DispatchRuleDescriptor
            }),
        }),
        mutate_fuel_tank: support_1.sts.enumStruct({
            tankId: exports.MultiAddress,
            mutation: exports.DefaultTankMutation,
        }),
        remove_account: support_1.sts.enumStruct({
            tankId: exports.MultiAddress,
            userId: exports.MultiAddress,
        }),
        remove_account_rule_data: support_1.sts.enumStruct({
            tankId: exports.MultiAddress,
            userId: exports.MultiAddress,
            ruleSetId: support_1.sts.number(),
            ruleKind: exports.DispatchRuleKind,
        }),
        remove_rule_set: support_1.sts.enumStruct({
            tankId: exports.MultiAddress,
            ruleSetId: support_1.sts.number(),
        }),
        schedule_mutate_freeze_state: support_1.sts.enumStruct({
            tankId: exports.MultiAddress,
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            isFrozen: support_1.sts.boolean(),
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.ExtrinsicPauseCall = support_1.sts.closedEnum(function () {
    return {
        pause_extrinsic: support_1.sts.enumStruct({
            call: exports.Call,
            pauseOnlyExtrinsic: support_1.sts.boolean(),
        }),
        resume_extrinsic: support_1.sts.enumStruct({
            call: exports.Call,
            resumeOnlyExtrinsic: support_1.sts.boolean(),
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.EfinityXcmCall = support_1.sts.closedEnum(function () {
    return {
        force_set_minimum_weight: support_1.sts.enumStruct({
            xcmCall: exports.XcmOperation,
            xcmWeightFeeMisc: exports.MinimumWeightFeePair,
        }),
        transfer_asset_to_parachain: support_1.sts.enumStruct({
            paraId: exports.ParachainId,
            beneficiary: exports.Account,
            currencyId: exports.AssetId,
            amount: support_1.sts.bigint(),
            destWeight: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
        }),
        transfer_asset_with_fee: support_1.sts.enumStruct({
            assetPair: exports.CurrencyIdAmountPair,
            feePair: exports.CurrencyIdAmountPair,
            paraId: exports.ParachainId,
            beneficiary: exports.Account,
            destWeight: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
        }),
        transfer_to_parachain: support_1.sts.enumStruct({
            paraId: exports.ParachainId,
            beneficiary: exports.Account,
            amount: support_1.sts.bigint(),
            destWeight: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
        }),
    }
})
exports.CurrencyIdAmountPair = support_1.sts.struct(function () {
    return {
        currencyId: exports.AssetId,
        amount: support_1.sts.bigint(),
    }
})
exports.Account = support_1.sts.closedEnum(function () {
    return {
        EVM: exports.H160,
        Substrate: exports.AccountId32,
    }
})
exports.H160 = support_1.sts.bytes()
exports.ParachainId = support_1.sts.closedEnum(function () {
    return {
        Acala: support_1.sts.unit(),
        Moonbeam: support_1.sts.unit(),
        Statemint: support_1.sts.unit(),
    }
})
exports.XcmOperation = support_1.sts.closedEnum(function () {
    return {
        ParachainFee: exports.V3MultiLocation,
        XTokensTransfer: support_1.sts.unit(),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.EfinityUtilityCall = support_1.sts.closedEnum(function () {
    return {
        batch: support_1.sts.enumStruct({
            calls: support_1.sts.array(function () {
                return exports.Call
            }),
            continueOnFailure: support_1.sts.boolean(),
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.DmpQueueCall = support_1.sts.closedEnum(function () {
    return {
        service_overweight: support_1.sts.enumStruct({
            index: support_1.sts.bigint(),
            weightLimit: exports.Weight,
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.DemocracyCall = support_1.sts.closedEnum(function () {
    return {
        blacklist: support_1.sts.enumStruct({
            proposalHash: exports.H256,
            maybeRefIndex: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        }),
        cancel_proposal: support_1.sts.enumStruct({
            propIndex: support_1.sts.number(),
        }),
        cancel_referendum: support_1.sts.enumStruct({
            refIndex: support_1.sts.number(),
        }),
        clear_public_proposals: support_1.sts.unit(),
        delegate: support_1.sts.enumStruct({
            to: exports.MultiAddress,
            conviction: exports.Conviction,
            balance: support_1.sts.bigint(),
        }),
        emergency_cancel: support_1.sts.enumStruct({
            refIndex: support_1.sts.number(),
        }),
        external_propose: support_1.sts.enumStruct({
            proposal: exports.Bounded,
        }),
        external_propose_default: support_1.sts.enumStruct({
            proposal: exports.Bounded,
        }),
        external_propose_majority: support_1.sts.enumStruct({
            proposal: exports.Bounded,
        }),
        fast_track: support_1.sts.enumStruct({
            proposalHash: exports.H256,
            votingPeriod: support_1.sts.number(),
            delay: support_1.sts.number(),
        }),
        propose: support_1.sts.enumStruct({
            proposal: exports.Bounded,
            value: support_1.sts.bigint(),
        }),
        remove_other_vote: support_1.sts.enumStruct({
            target: exports.MultiAddress,
            index: support_1.sts.number(),
        }),
        remove_vote: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        second: support_1.sts.enumStruct({
            proposal: support_1.sts.number(),
        }),
        undelegate: support_1.sts.unit(),
        unlock: support_1.sts.enumStruct({
            target: exports.MultiAddress,
        }),
        veto_external: support_1.sts.enumStruct({
            proposalHash: exports.H256,
        }),
        vote: support_1.sts.enumStruct({
            refIndex: support_1.sts.number(),
            vote: exports.AccountVote,
        }),
    }
})
exports.Bounded = support_1.sts.closedEnum(function () {
    return {
        Inline: support_1.sts.bytes(),
        Legacy: support_1.sts.enumStruct({
            hash: exports.H256,
        }),
        Lookup: support_1.sts.enumStruct({
            hash: exports.H256,
            len: support_1.sts.number(),
        }),
    }
})
exports.Conviction = support_1.sts.closedEnum(function () {
    return {
        Locked1x: support_1.sts.unit(),
        Locked2x: support_1.sts.unit(),
        Locked3x: support_1.sts.unit(),
        Locked4x: support_1.sts.unit(),
        Locked5x: support_1.sts.unit(),
        Locked6x: support_1.sts.unit(),
        None: support_1.sts.unit(),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.CumulusXcmCall = support_1.sts.closedEnum(function () {
    return {}
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.CouncilCall = support_1.sts.closedEnum(function () {
    return {
        close: support_1.sts.enumStruct({
            proposalHash: exports.H256,
            index: support_1.sts.number(),
            proposalWeightBound: exports.Weight,
            lengthBound: support_1.sts.number(),
        }),
        close_old_weight: support_1.sts.enumStruct({
            proposalHash: exports.H256,
            index: support_1.sts.number(),
            proposalWeightBound: support_1.sts.bigint(),
            lengthBound: support_1.sts.number(),
        }),
        disapprove_proposal: support_1.sts.enumStruct({
            proposalHash: exports.H256,
        }),
        execute: support_1.sts.enumStruct({
            proposal: exports.Call,
            lengthBound: support_1.sts.number(),
        }),
        propose: support_1.sts.enumStruct({
            threshold: support_1.sts.number(),
            proposal: exports.Call,
            lengthBound: support_1.sts.number(),
        }),
        set_members: support_1.sts.enumStruct({
            newMembers: support_1.sts.array(function () {
                return exports.AccountId32
            }),
            prime: support_1.sts.option(function () {
                return exports.AccountId32
            }),
            oldCount: support_1.sts.number(),
        }),
        vote: support_1.sts.enumStruct({
            proposal: exports.H256,
            index: support_1.sts.number(),
            approve: support_1.sts.boolean(),
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.CommunityPoolCall = support_1.sts.closedEnum(function () {
    return {
        approve_proposal: support_1.sts.enumStruct({
            proposalId: support_1.sts.number(),
        }),
        propose_spend: support_1.sts.enumStruct({
            value: support_1.sts.bigint(),
            beneficiary: exports.MultiAddress,
        }),
        reject_proposal: support_1.sts.enumStruct({
            proposalId: support_1.sts.number(),
        }),
        remove_approval: support_1.sts.enumStruct({
            proposalId: support_1.sts.number(),
        }),
        spend: support_1.sts.enumStruct({
            amount: support_1.sts.bigint(),
            beneficiary: exports.MultiAddress,
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.CollatorStakingCall = support_1.sts.closedEnum(function () {
    return {
        force_set_current_max_candidates: support_1.sts.enumStruct({
            maxCandidates: support_1.sts.number(),
        }),
        force_set_min_collator_stake: support_1.sts.enumStruct({
            minCollatorStake: support_1.sts.bigint(),
        }),
        join_candidates: support_1.sts.enumStruct({
            amount: support_1.sts.bigint(),
            rewardsCut: exports.Perbill,
        }),
        nominate: support_1.sts.enumStruct({
            collatorId: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        remove_nomination: support_1.sts.enumStruct({
            collatorId: exports.AccountId32,
        }),
        set_invulnerables: support_1.sts.enumStruct({
            accounts: support_1.sts.array(function () {
                return exports.AccountId32
            }),
        }),
        unbond: support_1.sts.unit(),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.BountiesCall = support_1.sts.closedEnum(function () {
    return {
        accept_curator: support_1.sts.enumStruct({
            bountyId: support_1.sts.number(),
        }),
        approve_bounty: support_1.sts.enumStruct({
            bountyId: support_1.sts.number(),
        }),
        award_bounty: support_1.sts.enumStruct({
            bountyId: support_1.sts.number(),
            beneficiary: exports.MultiAddress,
        }),
        claim_bounty: support_1.sts.enumStruct({
            bountyId: support_1.sts.number(),
        }),
        close_bounty: support_1.sts.enumStruct({
            bountyId: support_1.sts.number(),
        }),
        extend_bounty_expiry: support_1.sts.enumStruct({
            bountyId: support_1.sts.number(),
            remark: support_1.sts.bytes(),
        }),
        propose_bounty: support_1.sts.enumStruct({
            value: support_1.sts.bigint(),
            description: support_1.sts.bytes(),
        }),
        propose_curator: support_1.sts.enumStruct({
            bountyId: support_1.sts.number(),
            curator: exports.MultiAddress,
            fee: support_1.sts.bigint(),
        }),
        unassign_curator: support_1.sts.enumStruct({
            bountyId: support_1.sts.number(),
        }),
    }
})
/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
exports.BalancesCall = support_1.sts.closedEnum(function () {
    return {
        force_transfer: support_1.sts.enumStruct({
            source: exports.MultiAddress,
            dest: exports.MultiAddress,
            value: support_1.sts.bigint(),
        }),
        force_unreserve: support_1.sts.enumStruct({
            who: exports.MultiAddress,
            amount: support_1.sts.bigint(),
        }),
        set_balance: support_1.sts.enumStruct({
            who: exports.MultiAddress,
            newFree: support_1.sts.bigint(),
            newReserved: support_1.sts.bigint(),
        }),
        transfer: support_1.sts.enumStruct({
            dest: exports.MultiAddress,
            value: support_1.sts.bigint(),
        }),
        transfer_all: support_1.sts.enumStruct({
            dest: exports.MultiAddress,
            keepAlive: support_1.sts.boolean(),
        }),
        transfer_keep_alive: support_1.sts.enumStruct({
            dest: exports.MultiAddress,
            value: support_1.sts.bigint(),
        }),
    }
})
