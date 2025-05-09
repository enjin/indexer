'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ArithmeticError =
    exports.ModuleError =
    exports.TokenError =
    exports.TransactionalError =
    exports.DispatchError =
    exports.DispatchErrorWithPostInfo =
    exports.WhitelistEvent =
    exports.V4Outcome =
    exports.XcmPalletEvent =
    exports.Event =
    exports.EventRecord =
    exports.IdAmount =
    exports.CollectionDepositUpdateStatus =
    exports.ProxyDefinition =
    exports.V8CoreIndex =
    exports.CandidateHash =
    exports.V8Public =
    exports.V8Signature =
    exports.V8CandidateDescriptor =
    exports.OutboundHrmpMessage =
    exports.ValidationCode =
    exports.HeadData =
    exports.V8CandidateCommitments =
    exports.V8GroupIndex =
    exports.CandidatePendingAvailability =
    exports.ValidationCodeHash =
    exports.UpgradeStrategy =
    exports.PvfCheckCause =
    exports.PvfCheckActiveVoteState =
    exports.V4Location =
    exports.V4AssetInstance =
    exports.V4Fungibility =
    exports.V4Asset =
    exports.V4AssetId =
    exports.V4WildFungibility =
    exports.V4WildAsset =
    exports.V4AssetFilter =
    exports.V4Junctions =
    exports.V3Error =
    exports.V3MaybeErrorCode =
    exports.V4NetworkId =
    exports.V4QueryResponseInfo =
    exports.V4PalletInfo =
    exports.V4Response =
    exports.V3OriginKind =
    exports.DoubleEncoded =
    exports.V3BodyId =
    exports.V3BodyPart =
    exports.V4Junction =
    exports.V4Instruction =
        void 0
exports.FreezeType =
    exports.Freeze =
    exports.MultiTokensEvent =
    exports.MultisigEvent =
    exports.CommissionPayment =
    exports.ShouldMutate =
    exports.CommissionChangeRate =
    exports.BoundedVec =
    exports.PoolMutation =
    exports.PoolState =
    exports.NominationPoolsEvent =
    exports.OffencesEvent =
    exports.V8CandidateReceipt =
    exports.ParaInclusionEvent =
    exports.ParasEvent =
    exports.DisputeResult =
    exports.DisputeLocation =
    exports.ParasDisputesEvent =
    exports.PreimageEvent =
    exports.ProxyEvent =
    exports.Tally =
    exports.Bounded =
    exports.ReferendaEvent =
    exports.RegistrarEvent =
    exports.ExitReason =
    exports.SafeModeEvent =
    exports.SchedulerEvent =
    exports.SessionEvent =
    exports.SlotsEvent =
    exports.LiquidityAccountConfig =
    exports.TokenFilter =
    exports.Offer =
    exports.StakeExchangeEvent =
    exports.Forcing =
    exports.RewardDestination =
    exports.Perbill =
    exports.ValidatorPrefs =
    exports.StakingEvent =
    exports.SudoEvent =
    exports.DispatchClass =
    exports.DispatchInfo =
    exports.SystemEvent =
    exports.TransactionPaymentEvent =
    exports.TreasuryEvent =
    exports.UtilityEvent =
    exports.ValidatorManagerEvent =
    exports.VoteManagerEvent =
    exports.VoterListEvent =
    exports.Pays =
    exports.PostDispatchInfo =
        void 0
exports.AncestryProof =
    exports.DigestItem =
    exports.Digest =
    exports.Header =
    exports.ForkVotingProof =
    exports.Commitment =
    exports.VoteMessage =
    exports.FutureBlockVotingProof =
    exports.Type_752 =
    exports.AssignedSlotsEvent =
    exports.AuctionsEvent =
    exports.BalanceStatus =
    exports.BalancesEvent =
    exports.ConvictionVotingEvent =
    exports.CrowdloanEvent =
    exports.ElectionCompute =
    exports.ElectionScore =
    exports.Phase =
    exports.ElectionProviderMultiPhaseEvent =
    exports.ExtrinsicPauseEvent =
    exports.VoteRecord =
    exports.FellowshipCollectiveEvent =
    exports.Type_748 =
    exports.FellowshipReferendaEvent =
    exports.DispatchRuleKind =
    exports.Consumption =
    exports.UserAccountManagement =
    exports.Type_296 =
    exports.CoveragePolicy =
    exports.RequireTokenRule =
    exports.AccountRuleDescriptor =
    exports.DefaultTankMutation =
    exports.FuelTanksEvent =
    exports.Public =
    exports.GrandpaEvent =
    exports.HrmpChannelId =
    exports.HrmpEvent =
    exports.IdentityEvent =
    exports.IndividualExposure =
    exports.Exposure =
    exports.ImOnlineEvent =
    exports.Bid =
    exports.Deposit =
    exports.CounterOffer =
    exports.MarketplaceEvent =
    exports.MessageQueueEvent =
    exports.MigrationsEvent =
    exports.AssetIdWithEth =
    exports.CollectionAccount =
    exports.FreezeState =
        void 0
exports.AssetId =
    exports.AuctionData =
    exports.OfferData =
    exports.ListingData =
    exports.ListingDescriptor =
    exports.CounterOfferResponse =
    exports.UnlockChunk =
    exports.Id =
    exports.VersionedLocation =
    exports.VersionedAssets =
    exports.TransferType =
    exports.VersionedAssetId =
    exports.V2AssetInstance =
    exports.V2Fungibility =
    exports.V2MultiAsset =
    exports.V2WeightLimit =
    exports.V2MultiLocation =
    exports.V2AssetId =
    exports.V2WildFungibility =
    exports.V2WildMultiAsset =
    exports.V2MultiAssetFilter =
    exports.V2NetworkId =
    exports.WeakBoundedVec =
    exports.V2BodyId =
    exports.V2BodyPart =
    exports.V2Junction =
    exports.V2Junctions =
    exports.V2Error =
    exports.V2Response =
    exports.V2OriginKind =
    exports.V2Instruction =
    exports.V3MultiLocation =
    exports.V3AssetInstance =
    exports.V3Fungibility =
    exports.V3MultiAsset =
    exports.V3AssetId =
    exports.V3WildFungibility =
    exports.V3WildMultiAsset =
    exports.V3MultiAssetFilter =
    exports.V3Junctions =
    exports.V3NetworkId =
    exports.V3QueryResponseInfo =
    exports.V3PalletInfo =
    exports.V3Response =
    exports.V3Junction =
    exports.V3Instruction =
    exports.VersionedXcm =
    exports.V3WeightLimit =
    exports.DoubleVotingProof =
    exports.MembershipProof =
        void 0
exports.UtilityCall =
    exports.ValidatorManagerCall =
    exports.VoteCurrency =
    exports.VoteManagerCall =
    exports.VoterListCall =
    exports.WhitelistCall =
    exports.Type_571 =
    exports.Type_575 =
    exports.Type_572 =
    exports.Type_578 =
    exports.Type_568 =
    exports.XcmPalletCall =
    exports.Call =
    exports.Type_465 =
    exports.Origin =
    exports.Void =
    exports.Type_464 =
    exports.RawOrigin =
    exports.OriginCaller =
    exports.Weight =
    exports.Timepoint =
    exports.DefaultMintPolicyDescriptor =
    exports.DefaultMarketPolicyDescriptor =
    exports.DefaultCollectionPolicyDescriptor =
    exports.DefaultCollectionDescriptor =
    exports.MultiAddress =
    exports.DefaultMintParams =
    exports.Type_611 =
    exports.TokenCap =
    exports.DefaultRoyaltyInfo =
    exports.DefaultRoyalty =
    exports.TokenMarketBehavior =
    exports.AttributeKeyValuePair =
    exports.BoundedString =
    exports.CreateTokenMetadata =
    exports.ForeignTokenCreationParams =
    exports.PrivilegedCreateTokenParams =
    exports.CreateTokenParams =
    exports.FlexibleMintParams =
    exports.H160 =
    exports.FuelTankDescriptor =
    exports.ExpirableSignature =
    exports.DispatchSettings =
    exports.MaxFuelBurnPerTransactionRule =
    exports.MinimumInfusionRule =
    exports.RequireSignatureRule =
    exports.TankFuelBudgetRuleDescriptor =
    exports.UserFuelBudgetRuleDescriptor =
    exports.DispatchRuleDescriptor =
    exports.RuleSetDescriptor =
        void 0
exports.BondValue =
    exports.Type_454 =
    exports.Type_455 =
    exports.StakingInfo =
    exports.NominationPoolsCall =
    exports.ParaInclusionCall =
    exports.V8AvailabilityBitfield =
    exports.V8UncheckedSigned =
    exports.V8CommittedCandidateReceipt =
    exports.V8ValidityAttestation =
    exports.V8BackedCandidate =
    exports.V8InvalidDisputeStatementKind =
    exports.V8ValidDisputeStatementKind =
    exports.V8DisputeStatement =
    exports.V8DisputeStatementSet =
    exports.V8InherentData =
    exports.ParaInherentCall =
    exports.V8PvfCheckStatement =
    exports.ParasCall =
    exports.ParasDisputesCall =
    exports.ParasSharedCall =
    exports.V8DisputesTimeSlot =
    exports.V8SlashingOffenceKind =
    exports.V8ValidatorIndex =
    exports.V8DisputeProof =
    exports.ParasSlashingCall =
    exports.ParaGenesisArgs =
    exports.ParasSudoWrapperCall =
    exports.PreimageCall =
    exports.ProxyCall =
    exports.DispatchTime =
    exports.ReferendaCall =
    exports.RegistrarCall =
    exports.SafeModeCall =
    exports.SchedulerCall =
    exports.SessionKeys =
    exports.SessionCall =
    exports.SlotsCall =
    exports.CreateOffer =
    exports.StakeExchangeCall =
    exports.Percent =
    exports.ConfigOp =
    exports.Type_423 =
    exports.Type_424 =
    exports.Type_425 =
    exports.StakingCall =
    exports.SudoCall =
    exports.SystemCall =
    exports.TimestampCall =
    exports.TreasuryCall =
        void 0
exports.V8ApprovalVotingParams =
    exports.V8AsyncBackingParams =
    exports.V8PvfExecKind =
    exports.V8PvfPrepKind =
    exports.V8ExecutorParam =
    exports.V8SchedulerParams =
    exports.ConfigurationCall =
    exports.Conviction =
    exports.ConvictionVotingCall =
    exports.MultiSigner =
    exports.CrowdloanCall =
    exports.Support =
    exports.NposSolution16 =
    exports.RawSolution =
    exports.SolutionOrSnapshotSize =
    exports.ElectionProviderMultiPhaseCall =
    exports.ExtrinsicPauseCall =
    exports.FellowshipCollectiveCall =
    exports.FellowshipReferendaCall =
    exports.FuelTanksCall =
    exports.Precommit =
    exports.Type_443 =
    exports.Prevote =
    exports.Signature =
    exports.Type_439 =
    exports.Equivocation =
    exports.Type_437 =
    exports.GrandpaCall =
    exports.HrmpCall =
    exports.Data =
    exports.Judgement =
    exports.IdentityInfo =
    exports.MultiSignature =
    exports.IdentityCall =
    exports.Heartbeat =
    exports.ImOnlineCall =
    exports.InitializerCall =
    exports.WhitelistAddAccount =
    exports.MarketplaceCall =
    exports.MessageQueueCall =
    exports.HistoricCleanupSelector =
    exports.ActiveCursor =
    exports.MigrationCursor =
    exports.MigrationsCall =
    exports.Recipient =
    exports.DefaultBurnParams =
    exports.Attribute =
    exports.DefaultTransferParams =
    exports.MultiTokensCall =
    exports.MultisigCall =
        void 0
exports.Type_211 =
    exports.DefaultCollectionMutation =
    exports.Type_219 =
    exports.Type_222 =
    exports.Type_223 =
    exports.DefaultTokenMutation =
    exports.AccountId32 =
    exports.Type_235 =
    exports.Type_236 =
    exports.Type_234 =
    exports.Type_237 =
    exports.Type_233 =
    exports.HoldReason =
    exports.RuntimeHoldReason =
    exports.DefaultMintPolicy =
    exports.DefaultTransferPolicy =
    exports.DefaultMarketPolicy =
    exports.DefaultCollectionPolicy =
    exports.Collection =
    exports.AmbiguousDeposit =
    exports.DefaultForeignTokenMetadata =
    exports.DefaultTokenMetadata =
    exports.Token =
    exports.TokenAccountReserve =
    exports.Approval =
    exports.TokenAccount =
    exports.RootOrSigned =
    exports.H256 =
    exports.FeeSide =
    exports.AuctionState =
    exports.OfferState =
    exports.ListingState =
    exports.Listing =
    exports.UmpQueueId =
    exports.AggregateMessageOrigin =
    exports.ProcessMessageError =
    exports.ProxyType =
    exports.Vote =
    exports.AccountVote =
    exports.SlotLeasePeriodStart =
    exports.AssignedSlotsCall =
    exports.AuctionsCall =
    exports.AllowedSlots =
    exports.NextConfigDescriptor =
    exports.Slot =
    exports.EquivocationProof =
    exports.BabeCall =
    exports.AdjustmentDirection =
    exports.BalancesCall =
    exports.BeefyCall =
        void 0
var support_1 = require('./support')
exports.V4Instruction = support_1.sts.closedEnum(function () {
    return {
        AliasOrigin: exports.V4Location,
        BurnAsset: support_1.sts.array(function () {
            return exports.V4Asset
        }),
        BuyExecution: support_1.sts.enumStruct({
            fees: exports.V4Asset,
            weightLimit: exports.V3WeightLimit,
        }),
        ClaimAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V4Asset
            }),
            ticket: exports.V4Location,
        }),
        ClearError: support_1.sts.unit(),
        ClearOrigin: support_1.sts.unit(),
        ClearTopic: support_1.sts.unit(),
        ClearTransactStatus: support_1.sts.unit(),
        DepositAsset: support_1.sts.enumStruct({
            assets: exports.V4AssetFilter,
            beneficiary: exports.V4Location,
        }),
        DepositReserveAsset: support_1.sts.enumStruct({
            assets: exports.V4AssetFilter,
            dest: exports.V4Location,
            xcm: support_1.sts.array(function () {
                return exports.V4Instruction
            }),
        }),
        DescendOrigin: exports.V4Junctions,
        ExchangeAsset: support_1.sts.enumStruct({
            give: exports.V4AssetFilter,
            want: support_1.sts.array(function () {
                return exports.V4Asset
            }),
            maximal: support_1.sts.boolean(),
        }),
        ExpectAsset: support_1.sts.array(function () {
            return exports.V4Asset
        }),
        ExpectError: support_1.sts.option(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), exports.V3Error]
            })
        }),
        ExpectOrigin: support_1.sts.option(function () {
            return exports.V4Location
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
            network: exports.V4NetworkId,
            destination: exports.V4Junctions,
            xcm: support_1.sts.array(function () {
                return exports.V4Instruction
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
            assets: exports.V4AssetFilter,
            reserve: exports.V4Location,
            xcm: support_1.sts.array(function () {
                return exports.V4Instruction
            }),
        }),
        InitiateTeleport: support_1.sts.enumStruct({
            assets: exports.V4AssetFilter,
            dest: exports.V4Location,
            xcm: support_1.sts.array(function () {
                return exports.V4Instruction
            }),
        }),
        LockAsset: support_1.sts.enumStruct({
            asset: exports.V4Asset,
            unlocker: exports.V4Location,
        }),
        NoteUnlockable: support_1.sts.enumStruct({
            asset: exports.V4Asset,
            owner: exports.V4Location,
        }),
        QueryPallet: support_1.sts.enumStruct({
            moduleName: support_1.sts.bytes(),
            responseInfo: exports.V4QueryResponseInfo,
        }),
        QueryResponse: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            response: exports.V4Response,
            maxWeight: exports.Weight,
            querier: support_1.sts.option(function () {
                return exports.V4Location
            }),
        }),
        ReceiveTeleportedAsset: support_1.sts.array(function () {
            return exports.V4Asset
        }),
        RefundSurplus: support_1.sts.unit(),
        ReportError: exports.V4QueryResponseInfo,
        ReportHolding: support_1.sts.enumStruct({
            responseInfo: exports.V4QueryResponseInfo,
            assets: exports.V4AssetFilter,
        }),
        ReportTransactStatus: exports.V4QueryResponseInfo,
        RequestUnlock: support_1.sts.enumStruct({
            asset: exports.V4Asset,
            locker: exports.V4Location,
        }),
        ReserveAssetDeposited: support_1.sts.array(function () {
            return exports.V4Asset
        }),
        SetAppendix: support_1.sts.array(function () {
            return exports.V4Instruction
        }),
        SetErrorHandler: support_1.sts.array(function () {
            return exports.V4Instruction
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
            originKind: exports.V3OriginKind,
            requireWeightAtMost: exports.Weight,
            call: exports.DoubleEncoded,
        }),
        TransferAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V4Asset
            }),
            beneficiary: exports.V4Location,
        }),
        TransferReserveAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V4Asset
            }),
            dest: exports.V4Location,
            xcm: support_1.sts.array(function () {
                return exports.V4Instruction
            }),
        }),
        Trap: support_1.sts.bigint(),
        UniversalOrigin: exports.V4Junction,
        UnlockAsset: support_1.sts.enumStruct({
            asset: exports.V4Asset,
            target: exports.V4Location,
        }),
        UnpaidExecution: support_1.sts.enumStruct({
            weightLimit: exports.V3WeightLimit,
            checkOrigin: support_1.sts.option(function () {
                return exports.V4Location
            }),
        }),
        UnsubscribeVersion: support_1.sts.unit(),
        WithdrawAsset: support_1.sts.array(function () {
            return exports.V4Asset
        }),
    }
})
exports.V4Junction = support_1.sts.closedEnum(function () {
    return {
        AccountId32: support_1.sts.enumStruct({
            network: support_1.sts.option(function () {
                return exports.V4NetworkId
            }),
            id: support_1.sts.bytes(),
        }),
        AccountIndex64: support_1.sts.enumStruct({
            network: support_1.sts.option(function () {
                return exports.V4NetworkId
            }),
            index: support_1.sts.bigint(),
        }),
        AccountKey20: support_1.sts.enumStruct({
            network: support_1.sts.option(function () {
                return exports.V4NetworkId
            }),
            key: support_1.sts.bytes(),
        }),
        GeneralIndex: support_1.sts.bigint(),
        GeneralKey: support_1.sts.enumStruct({
            length: support_1.sts.number(),
            data: support_1.sts.bytes(),
        }),
        GlobalConsensus: exports.V4NetworkId,
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
exports.DoubleEncoded = support_1.sts.struct(function () {
    return {
        encoded: support_1.sts.bytes(),
    }
})
exports.V3OriginKind = support_1.sts.closedEnum(function () {
    return {
        Native: support_1.sts.unit(),
        SovereignAccount: support_1.sts.unit(),
        Superuser: support_1.sts.unit(),
        Xcm: support_1.sts.unit(),
    }
})
exports.V4Response = support_1.sts.closedEnum(function () {
    return {
        Assets: support_1.sts.array(function () {
            return exports.V4Asset
        }),
        DispatchResult: exports.V3MaybeErrorCode,
        ExecutionResult: support_1.sts.option(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), exports.V3Error]
            })
        }),
        Null: support_1.sts.unit(),
        PalletsInfo: support_1.sts.array(function () {
            return exports.V4PalletInfo
        }),
        Version: support_1.sts.number(),
    }
})
exports.V4PalletInfo = support_1.sts.struct(function () {
    return {
        index: support_1.sts.number(),
        name: support_1.sts.bytes(),
        moduleName: support_1.sts.bytes(),
        major: support_1.sts.number(),
        minor: support_1.sts.number(),
        patch: support_1.sts.number(),
    }
})
exports.V4QueryResponseInfo = support_1.sts.struct(function () {
    return {
        destination: exports.V4Location,
        queryId: support_1.sts.bigint(),
        maxWeight: exports.Weight,
    }
})
exports.V4NetworkId = support_1.sts.closedEnum(function () {
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
        PolkadotBulletin: support_1.sts.unit(),
        Rococo: support_1.sts.unit(),
        Westend: support_1.sts.unit(),
        Wococo: support_1.sts.unit(),
    }
})
exports.V3MaybeErrorCode = support_1.sts.closedEnum(function () {
    return {
        Error: support_1.sts.bytes(),
        Success: support_1.sts.unit(),
        TruncatedError: support_1.sts.bytes(),
    }
})
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
exports.V4Junctions = support_1.sts.closedEnum(function () {
    return {
        Here: support_1.sts.unit(),
        X1: support_1.sts.array(function () {
            return exports.V4Junction
        }),
        X2: support_1.sts.array(function () {
            return exports.V4Junction
        }),
        X3: support_1.sts.array(function () {
            return exports.V4Junction
        }),
        X4: support_1.sts.array(function () {
            return exports.V4Junction
        }),
        X5: support_1.sts.array(function () {
            return exports.V4Junction
        }),
        X6: support_1.sts.array(function () {
            return exports.V4Junction
        }),
        X7: support_1.sts.array(function () {
            return exports.V4Junction
        }),
        X8: support_1.sts.array(function () {
            return exports.V4Junction
        }),
    }
})
exports.V4AssetFilter = support_1.sts.closedEnum(function () {
    return {
        Definite: support_1.sts.array(function () {
            return exports.V4Asset
        }),
        Wild: exports.V4WildAsset,
    }
})
exports.V4WildAsset = support_1.sts.closedEnum(function () {
    return {
        All: support_1.sts.unit(),
        AllCounted: support_1.sts.number(),
        AllOf: support_1.sts.enumStruct({
            id: exports.V4AssetId,
            fun: exports.V4WildFungibility,
        }),
        AllOfCounted: support_1.sts.enumStruct({
            id: exports.V4AssetId,
            fun: exports.V4WildFungibility,
            count: support_1.sts.number(),
        }),
    }
})
exports.V4WildFungibility = support_1.sts.closedEnum(function () {
    return {
        Fungible: support_1.sts.unit(),
        NonFungible: support_1.sts.unit(),
    }
})
exports.V4AssetId = support_1.sts.struct(function () {
    return {
        parents: support_1.sts.number(),
        interior: exports.V4Junctions,
    }
})
exports.V4Asset = support_1.sts.struct(function () {
    return {
        id: exports.V4AssetId,
        fun: exports.V4Fungibility,
    }
})
exports.V4Fungibility = support_1.sts.closedEnum(function () {
    return {
        Fungible: support_1.sts.bigint(),
        NonFungible: exports.V4AssetInstance,
    }
})
exports.V4AssetInstance = support_1.sts.closedEnum(function () {
    return {
        Array16: support_1.sts.bytes(),
        Array32: support_1.sts.bytes(),
        Array4: support_1.sts.bytes(),
        Array8: support_1.sts.bytes(),
        Index: support_1.sts.bigint(),
        Undefined: support_1.sts.unit(),
    }
})
exports.V4Location = support_1.sts.struct(function () {
    return {
        parents: support_1.sts.number(),
        interior: exports.V4Junctions,
    }
})
exports.PvfCheckActiveVoteState = support_1.sts.struct(function () {
    return {
        votesAccept: support_1.sts.bitseq(),
        votesReject: support_1.sts.bitseq(),
        age: support_1.sts.number(),
        createdAt: support_1.sts.number(),
        causes: support_1.sts.array(function () {
            return exports.PvfCheckCause
        }),
    }
})
exports.PvfCheckCause = support_1.sts.closedEnum(function () {
    return {
        Onboarding: exports.Id,
        Upgrade: support_1.sts.enumStruct({
            id: exports.Id,
            includedAt: support_1.sts.number(),
            upgradeStrategy: exports.UpgradeStrategy,
        }),
    }
})
exports.UpgradeStrategy = support_1.sts.closedEnum(function () {
    return {
        ApplyAtExpectedBlock: support_1.sts.unit(),
        SetGoAheadSignal: support_1.sts.unit(),
    }
})
exports.ValidationCodeHash = support_1.sts.bytes()
exports.CandidatePendingAvailability = support_1.sts.struct(function () {
    return {
        core: exports.V8CoreIndex,
        hash: exports.CandidateHash,
        descriptor: exports.V8CandidateDescriptor,
        commitments: exports.V8CandidateCommitments,
        availabilityVotes: support_1.sts.bitseq(),
        backers: support_1.sts.bitseq(),
        relayParentNumber: support_1.sts.number(),
        backedInNumber: support_1.sts.number(),
        backingGroup: exports.V8GroupIndex,
    }
})
exports.V8GroupIndex = support_1.sts.number()
exports.V8CandidateCommitments = support_1.sts.struct(function () {
    return {
        upwardMessages: support_1.sts.array(function () {
            return support_1.sts.bytes()
        }),
        horizontalMessages: support_1.sts.array(function () {
            return exports.OutboundHrmpMessage
        }),
        newValidationCode: support_1.sts.option(function () {
            return exports.ValidationCode
        }),
        headData: exports.HeadData,
        processedDownwardMessages: support_1.sts.number(),
        hrmpWatermark: support_1.sts.number(),
    }
})
exports.HeadData = support_1.sts.bytes()
exports.ValidationCode = support_1.sts.bytes()
exports.OutboundHrmpMessage = support_1.sts.struct(function () {
    return {
        recipient: exports.Id,
        data: support_1.sts.bytes(),
    }
})
exports.V8CandidateDescriptor = support_1.sts.struct(function () {
    return {
        paraId: exports.Id,
        relayParent: exports.H256,
        collator: exports.V8Public,
        persistedValidationDataHash: exports.H256,
        povHash: exports.H256,
        erasureRoot: exports.H256,
        signature: exports.V8Signature,
        paraHead: exports.H256,
        validationCodeHash: exports.ValidationCodeHash,
    }
})
exports.V8Signature = support_1.sts.bytes()
exports.V8Public = support_1.sts.bytes()
exports.CandidateHash = support_1.sts.bytes()
exports.V8CoreIndex = support_1.sts.number()
exports.ProxyDefinition = support_1.sts.struct(function () {
    return {
        delegate: exports.AccountId32,
        proxyType: exports.ProxyType,
        delay: support_1.sts.number(),
    }
})
exports.CollectionDepositUpdateStatus = support_1.sts.struct(function () {
    return {
        collectionId: support_1.sts.bigint(),
        lastUpdatedTokenKey: support_1.sts.option(function () {
            return support_1.sts.bytes()
        }),
        lastUpdatedAttributeKey: support_1.sts.option(function () {
            return support_1.sts.bytes()
        }),
        calculatedDeposit: support_1.sts.bigint(),
    }
})
exports.IdAmount = support_1.sts.struct(function () {
    return {
        id: exports.RuntimeHoldReason,
        amount: support_1.sts.bigint(),
    }
})
exports.EventRecord = support_1.sts.struct(function () {
    return {
        phase: exports.Type_752,
        event: exports.Event,
        topics: support_1.sts.array(function () {
            return exports.H256
        }),
    }
})
exports.Event = support_1.sts.closedEnum(function () {
    return {
        AssignedSlots: exports.AssignedSlotsEvent,
        Auctions: exports.AuctionsEvent,
        Balances: exports.BalancesEvent,
        ConvictionVoting: exports.ConvictionVotingEvent,
        Crowdloan: exports.CrowdloanEvent,
        ElectionProviderMultiPhase: exports.ElectionProviderMultiPhaseEvent,
        ExtrinsicPause: exports.ExtrinsicPauseEvent,
        FellowshipCollective: exports.FellowshipCollectiveEvent,
        FellowshipReferenda: exports.FellowshipReferendaEvent,
        FuelTanks: exports.FuelTanksEvent,
        Grandpa: exports.GrandpaEvent,
        Hrmp: exports.HrmpEvent,
        Identity: exports.IdentityEvent,
        ImOnline: exports.ImOnlineEvent,
        Marketplace: exports.MarketplaceEvent,
        MessageQueue: exports.MessageQueueEvent,
        Migrations: exports.MigrationsEvent,
        MultiTokens: exports.MultiTokensEvent,
        Multisig: exports.MultisigEvent,
        NominationPools: exports.NominationPoolsEvent,
        Offences: exports.OffencesEvent,
        ParaInclusion: exports.ParaInclusionEvent,
        Paras: exports.ParasEvent,
        ParasDisputes: exports.ParasDisputesEvent,
        Preimage: exports.PreimageEvent,
        Proxy: exports.ProxyEvent,
        Referenda: exports.ReferendaEvent,
        Registrar: exports.RegistrarEvent,
        SafeMode: exports.SafeModeEvent,
        Scheduler: exports.SchedulerEvent,
        Session: exports.SessionEvent,
        Slots: exports.SlotsEvent,
        StakeExchange: exports.StakeExchangeEvent,
        Staking: exports.StakingEvent,
        Sudo: exports.SudoEvent,
        System: exports.SystemEvent,
        TransactionPayment: exports.TransactionPaymentEvent,
        Treasury: exports.TreasuryEvent,
        Utility: exports.UtilityEvent,
        ValidatorManager: exports.ValidatorManagerEvent,
        VoteManager: exports.VoteManagerEvent,
        VoterList: exports.VoterListEvent,
        Whitelist: exports.WhitelistEvent,
        XcmPallet: exports.XcmPalletEvent,
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.XcmPalletEvent = support_1.sts.closedEnum(function () {
    return {
        AssetsClaimed: support_1.sts.enumStruct({
            hash: exports.H256,
            origin: exports.V4Location,
            assets: exports.VersionedAssets,
        }),
        AssetsTrapped: support_1.sts.enumStruct({
            hash: exports.H256,
            origin: exports.V4Location,
            assets: exports.VersionedAssets,
        }),
        Attempted: support_1.sts.enumStruct({
            outcome: exports.V4Outcome,
        }),
        FeesPaid: support_1.sts.enumStruct({
            paying: exports.V4Location,
            fees: support_1.sts.array(function () {
                return exports.V4Asset
            }),
        }),
        InvalidQuerier: support_1.sts.enumStruct({
            origin: exports.V4Location,
            queryId: support_1.sts.bigint(),
            expectedQuerier: exports.V4Location,
            maybeActualQuerier: support_1.sts.option(function () {
                return exports.V4Location
            }),
        }),
        InvalidQuerierVersion: support_1.sts.enumStruct({
            origin: exports.V4Location,
            queryId: support_1.sts.bigint(),
        }),
        InvalidResponder: support_1.sts.enumStruct({
            origin: exports.V4Location,
            queryId: support_1.sts.bigint(),
            expectedLocation: support_1.sts.option(function () {
                return exports.V4Location
            }),
        }),
        InvalidResponderVersion: support_1.sts.enumStruct({
            origin: exports.V4Location,
            queryId: support_1.sts.bigint(),
        }),
        Notified: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
        }),
        NotifyDecodeFailed: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
        }),
        NotifyDispatchError: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
        }),
        NotifyOverweight: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
            actualWeight: exports.Weight,
            maxBudgetedWeight: exports.Weight,
        }),
        NotifyTargetMigrationFail: support_1.sts.enumStruct({
            location: exports.VersionedLocation,
            queryId: support_1.sts.bigint(),
        }),
        NotifyTargetSendFail: support_1.sts.enumStruct({
            location: exports.V4Location,
            queryId: support_1.sts.bigint(),
            error: exports.V3Error,
        }),
        ResponseReady: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            response: exports.V4Response,
        }),
        ResponseTaken: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
        }),
        Sent: support_1.sts.enumStruct({
            origin: exports.V4Location,
            destination: exports.V4Location,
            message: support_1.sts.array(function () {
                return exports.V4Instruction
            }),
            messageId: support_1.sts.bytes(),
        }),
        SupportedVersionChanged: support_1.sts.enumStruct({
            location: exports.V4Location,
            version: support_1.sts.number(),
        }),
        UnexpectedResponse: support_1.sts.enumStruct({
            origin: exports.V4Location,
            queryId: support_1.sts.bigint(),
        }),
        VersionChangeNotified: support_1.sts.enumStruct({
            destination: exports.V4Location,
            result: support_1.sts.number(),
            cost: support_1.sts.array(function () {
                return exports.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        }),
        VersionMigrationFinished: support_1.sts.enumStruct({
            version: support_1.sts.number(),
        }),
        VersionNotifyRequested: support_1.sts.enumStruct({
            destination: exports.V4Location,
            cost: support_1.sts.array(function () {
                return exports.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        }),
        VersionNotifyStarted: support_1.sts.enumStruct({
            destination: exports.V4Location,
            cost: support_1.sts.array(function () {
                return exports.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        }),
        VersionNotifyUnrequested: support_1.sts.enumStruct({
            destination: exports.V4Location,
            cost: support_1.sts.array(function () {
                return exports.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        }),
    }
})
exports.V4Outcome = support_1.sts.closedEnum(function () {
    return {
        Complete: support_1.sts.enumStruct({
            used: exports.Weight,
        }),
        Error: support_1.sts.enumStruct({
            error: exports.V3Error,
        }),
        Incomplete: support_1.sts.enumStruct({
            used: exports.Weight,
            error: exports.V3Error,
        }),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.WhitelistEvent = support_1.sts.closedEnum(function () {
    return {
        CallWhitelisted: support_1.sts.enumStruct({
            callHash: exports.H256,
        }),
        WhitelistedCallDispatched: support_1.sts.enumStruct({
            callHash: exports.H256,
            result: support_1.sts.result(
                function () {
                    return exports.PostDispatchInfo
                },
                function () {
                    return exports.DispatchErrorWithPostInfo
                }
            ),
        }),
        WhitelistedCallRemoved: support_1.sts.enumStruct({
            callHash: exports.H256,
        }),
    }
})
exports.DispatchErrorWithPostInfo = support_1.sts.struct(function () {
    return {
        postInfo: exports.PostDispatchInfo,
        error: exports.DispatchError,
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
        RootNotAllowed: support_1.sts.unit(),
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
        Blocked: support_1.sts.unit(),
        CannotCreate: support_1.sts.unit(),
        CannotCreateHold: support_1.sts.unit(),
        Frozen: support_1.sts.unit(),
        FundsUnavailable: support_1.sts.unit(),
        NotExpendable: support_1.sts.unit(),
        OnlyProvider: support_1.sts.unit(),
        UnknownAsset: support_1.sts.unit(),
        Unsupported: support_1.sts.unit(),
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
exports.PostDispatchInfo = support_1.sts.struct(function () {
    return {
        actualWeight: support_1.sts.option(function () {
            return exports.Weight
        }),
        paysFee: exports.Pays,
    }
})
exports.Pays = support_1.sts.closedEnum(function () {
    return {
        No: support_1.sts.unit(),
        Yes: support_1.sts.unit(),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.VoterListEvent = support_1.sts.closedEnum(function () {
    return {
        Rebagged: support_1.sts.enumStruct({
            who: exports.AccountId32,
            from: support_1.sts.bigint(),
            to: support_1.sts.bigint(),
        }),
        ScoreUpdated: support_1.sts.enumStruct({
            who: exports.AccountId32,
            newScore: support_1.sts.bigint(),
        }),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.VoteManagerEvent = support_1.sts.closedEnum(function () {
    return {
        Voted: support_1.sts.enumStruct({
            voter: exports.AccountId32,
            pollIndex: support_1.sts.number(),
            vote: exports.AccountVote,
        }),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.ValidatorManagerEvent = support_1.sts.closedEnum(function () {
    return {
        ValidatorsDeregistered: support_1.sts.array(function () {
            return exports.AccountId32
        }),
        ValidatorsRegistered: support_1.sts.array(function () {
            return exports.AccountId32
        }),
    }
})
/**
 * The `Event` enum of this pallet
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
/**
 * The `Event` enum of this pallet
 */
exports.TreasuryEvent = support_1.sts.closedEnum(function () {
    return {
        AssetSpendApproved: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            amount: support_1.sts.bigint(),
            beneficiary: exports.AccountId32,
            validFrom: support_1.sts.number(),
            expireAt: support_1.sts.number(),
        }),
        AssetSpendVoided: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
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
        Paid: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        PaymentFailed: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        Rollover: support_1.sts.enumStruct({
            rolloverBalance: support_1.sts.bigint(),
        }),
        SpendApproved: support_1.sts.enumStruct({
            proposalIndex: support_1.sts.number(),
            amount: support_1.sts.bigint(),
            beneficiary: exports.AccountId32,
        }),
        SpendProcessed: support_1.sts.enumStruct({
            index: support_1.sts.number(),
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
 * The `Event` enum of this pallet
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
        UpgradeAuthorized: support_1.sts.enumStruct({
            codeHash: exports.H256,
            checkVersion: support_1.sts.boolean(),
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
exports.DispatchClass = support_1.sts.closedEnum(function () {
    return {
        Mandatory: support_1.sts.unit(),
        Normal: support_1.sts.unit(),
        Operational: support_1.sts.unit(),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.SudoEvent = support_1.sts.closedEnum(function () {
    return {
        KeyChanged: support_1.sts.enumStruct({
            old: support_1.sts.option(function () {
                return exports.AccountId32
            }),
            new: exports.AccountId32,
        }),
        KeyRemoved: support_1.sts.unit(),
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
 * The `Event` enum of this pallet
 */
exports.StakingEvent = support_1.sts.closedEnum(function () {
    return {
        Bonded: support_1.sts.enumStruct({
            stash: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Chilled: support_1.sts.enumStruct({
            stash: exports.AccountId32,
        }),
        ControllerBatchDeprecated: support_1.sts.enumStruct({
            failures: support_1.sts.number(),
        }),
        EraPaid: support_1.sts.enumStruct({
            eraIndex: support_1.sts.number(),
            validatorPayout: support_1.sts.bigint(),
            remainder: support_1.sts.bigint(),
        }),
        ForceEra: support_1.sts.enumStruct({
            mode: exports.Forcing,
        }),
        Kicked: support_1.sts.enumStruct({
            nominator: exports.AccountId32,
            stash: exports.AccountId32,
        }),
        OldSlashingReportDiscarded: support_1.sts.enumStruct({
            sessionIndex: support_1.sts.number(),
        }),
        PayoutStarted: support_1.sts.enumStruct({
            eraIndex: support_1.sts.number(),
            validatorStash: exports.AccountId32,
        }),
        Rewarded: support_1.sts.enumStruct({
            stash: exports.AccountId32,
            dest: exports.RewardDestination,
            amount: support_1.sts.bigint(),
        }),
        SlashReported: support_1.sts.enumStruct({
            validator: exports.AccountId32,
            fraction: exports.Perbill,
            slashEra: support_1.sts.number(),
        }),
        Slashed: support_1.sts.enumStruct({
            staker: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        SnapshotTargetsSizeExceeded: support_1.sts.enumStruct({
            size: support_1.sts.number(),
        }),
        SnapshotVotersSizeExceeded: support_1.sts.enumStruct({
            size: support_1.sts.number(),
        }),
        StakersElected: support_1.sts.unit(),
        StakingElectionFailed: support_1.sts.unit(),
        Unbonded: support_1.sts.enumStruct({
            stash: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        ValidatorPrefsSet: support_1.sts.enumStruct({
            stash: exports.AccountId32,
            prefs: exports.ValidatorPrefs,
        }),
        Withdrawn: support_1.sts.enumStruct({
            stash: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
    }
})
exports.ValidatorPrefs = support_1.sts.struct(function () {
    return {
        commission: support_1.sts.number(),
        blocked: support_1.sts.boolean(),
    }
})
exports.Perbill = support_1.sts.number()
exports.RewardDestination = support_1.sts.closedEnum(function () {
    return {
        Account: exports.AccountId32,
        Controller: support_1.sts.unit(),
        None: support_1.sts.unit(),
        Staked: support_1.sts.unit(),
        Stash: support_1.sts.unit(),
    }
})
exports.Forcing = support_1.sts.closedEnum(function () {
    return {
        ForceAlways: support_1.sts.unit(),
        ForceNew: support_1.sts.unit(),
        ForceNone: support_1.sts.unit(),
        NotForcing: support_1.sts.unit(),
    }
})
/**
 * The pallet's event type.
 */
exports.StakeExchangeEvent = support_1.sts.closedEnum(function () {
    return {
        BuyOrderCompleted: support_1.sts.enumStruct({
            who: exports.AccountId32,
            tokenId: support_1.sts.bigint(),
            amount: support_1.sts.bigint(),
            rate: exports.Perbill,
            offerCreator: exports.AccountId32,
            offerId: support_1.sts.bigint(),
        }),
        LiquidityAdded: support_1.sts.enumStruct({
            who: exports.AccountId32,
            offerId: support_1.sts.bigint(),
        }),
        LiquidityConfigUpdated: support_1.sts.enumStruct({
            who: exports.AccountId32,
            config: exports.LiquidityAccountConfig,
        }),
        LiquidityWithdrawn: support_1.sts.enumStruct({
            who: exports.AccountId32,
            offerId: support_1.sts.bigint(),
        }),
        OfferCancelled: support_1.sts.enumStruct({
            offerId: support_1.sts.bigint(),
        }),
        OfferCompleted: support_1.sts.enumStruct({
            offerId: support_1.sts.bigint(),
        }),
        OfferCreated: support_1.sts.enumStruct({
            offerId: support_1.sts.bigint(),
            offer: exports.Offer,
        }),
    }
})
exports.Offer = support_1.sts.struct(function () {
    return {
        account: exports.AccountId32,
        total: support_1.sts.bigint(),
        rate: support_1.sts.number(),
        minAverageRewardRate: support_1.sts.bigint(),
        deposit: support_1.sts.bigint(),
        tokenFilter: exports.TokenFilter,
    }
})
exports.TokenFilter = support_1.sts.closedEnum(function () {
    return {
        All: support_1.sts.unit(),
        BlockList: support_1.sts.array(function () {
            return support_1.sts.bigint()
        }),
        Whitelist: support_1.sts.array(function () {
            return support_1.sts.bigint()
        }),
    }
})
exports.LiquidityAccountConfig = support_1.sts.struct(function () {
    return {
        tokenFilter: exports.TokenFilter,
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.SlotsEvent = support_1.sts.closedEnum(function () {
    return {
        Leased: support_1.sts.enumStruct({
            paraId: exports.Id,
            leaser: exports.AccountId32,
            periodBegin: support_1.sts.number(),
            periodCount: support_1.sts.number(),
            extraReserved: support_1.sts.bigint(),
            totalAmount: support_1.sts.bigint(),
        }),
        NewLeasePeriod: support_1.sts.enumStruct({
            leasePeriod: support_1.sts.number(),
        }),
    }
})
/**
 * The `Event` enum of this pallet
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
        RetryCancelled: support_1.sts.enumStruct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        }),
        RetryFailed: support_1.sts.enumStruct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        }),
        RetrySet: support_1.sts.enumStruct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            id: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            period: support_1.sts.number(),
            retries: support_1.sts.number(),
        }),
        Scheduled: support_1.sts.enumStruct({
            when: support_1.sts.number(),
            index: support_1.sts.number(),
        }),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.SafeModeEvent = support_1.sts.closedEnum(function () {
    return {
        CannotDeposit: support_1.sts.unit(),
        CannotRelease: support_1.sts.unit(),
        DepositPlaced: support_1.sts.enumStruct({
            account: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        DepositReleased: support_1.sts.enumStruct({
            account: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        DepositSlashed: support_1.sts.enumStruct({
            account: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Entered: support_1.sts.enumStruct({
            until: support_1.sts.number(),
        }),
        Exited: support_1.sts.enumStruct({
            reason: exports.ExitReason,
        }),
        Extended: support_1.sts.enumStruct({
            until: support_1.sts.number(),
        }),
    }
})
exports.ExitReason = support_1.sts.closedEnum(function () {
    return {
        Force: support_1.sts.unit(),
        Timeout: support_1.sts.unit(),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.RegistrarEvent = support_1.sts.closedEnum(function () {
    return {
        Deregistered: support_1.sts.enumStruct({
            paraId: exports.Id,
        }),
        Registered: support_1.sts.enumStruct({
            paraId: exports.Id,
            manager: exports.AccountId32,
        }),
        Reserved: support_1.sts.enumStruct({
            paraId: exports.Id,
            who: exports.AccountId32,
        }),
        Swapped: support_1.sts.enumStruct({
            paraId: exports.Id,
            otherId: exports.Id,
        }),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.ReferendaEvent = support_1.sts.closedEnum(function () {
    return {
        Approved: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        Cancelled: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            tally: exports.Tally,
        }),
        ConfirmAborted: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        ConfirmStarted: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        Confirmed: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            tally: exports.Tally,
        }),
        DecisionDepositPlaced: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        DecisionDepositRefunded: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        DecisionStarted: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            track: support_1.sts.number(),
            proposal: exports.Bounded,
            tally: exports.Tally,
        }),
        DepositSlashed: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Killed: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            tally: exports.Tally,
        }),
        MetadataCleared: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            hash: exports.H256,
        }),
        MetadataSet: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            hash: exports.H256,
        }),
        Rejected: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            tally: exports.Tally,
        }),
        SubmissionDepositRefunded: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Submitted: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            track: support_1.sts.number(),
            proposal: exports.Bounded,
        }),
        TimedOut: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            tally: exports.Tally,
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
exports.Tally = support_1.sts.struct(function () {
    return {
        ayes: support_1.sts.bigint(),
        nays: support_1.sts.bigint(),
        support: support_1.sts.bigint(),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.ProxyEvent = support_1.sts.closedEnum(function () {
    return {
        Announced: support_1.sts.enumStruct({
            real: exports.AccountId32,
            proxy: exports.AccountId32,
            callHash: exports.H256,
        }),
        ProxyAdded: support_1.sts.enumStruct({
            delegator: exports.AccountId32,
            delegatee: exports.AccountId32,
            proxyType: exports.ProxyType,
            delay: support_1.sts.number(),
        }),
        ProxyExecuted: support_1.sts.enumStruct({
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return exports.DispatchError
                }
            ),
        }),
        ProxyRemoved: support_1.sts.enumStruct({
            delegator: exports.AccountId32,
            delegatee: exports.AccountId32,
            proxyType: exports.ProxyType,
            delay: support_1.sts.number(),
        }),
        PureCreated: support_1.sts.enumStruct({
            pure: exports.AccountId32,
            who: exports.AccountId32,
            proxyType: exports.ProxyType,
            disambiguationIndex: support_1.sts.number(),
        }),
    }
})
/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
exports.ParasDisputesEvent = support_1.sts.closedEnum(function () {
    return {
        DisputeConcluded: support_1.sts.tuple(function () {
            return [exports.CandidateHash, exports.DisputeResult]
        }),
        DisputeInitiated: support_1.sts.tuple(function () {
            return [exports.CandidateHash, exports.DisputeLocation]
        }),
        Revert: support_1.sts.number(),
    }
})
exports.DisputeLocation = support_1.sts.closedEnum(function () {
    return {
        Local: support_1.sts.unit(),
        Remote: support_1.sts.unit(),
    }
})
exports.DisputeResult = support_1.sts.closedEnum(function () {
    return {
        Invalid: support_1.sts.unit(),
        Valid: support_1.sts.unit(),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.ParasEvent = support_1.sts.closedEnum(function () {
    return {
        ActionQueued: support_1.sts.tuple(function () {
            return [exports.Id, support_1.sts.number()]
        }),
        CodeUpgradeScheduled: exports.Id,
        CurrentCodeUpdated: exports.Id,
        CurrentHeadUpdated: exports.Id,
        NewHeadNoted: exports.Id,
        PvfCheckAccepted: support_1.sts.tuple(function () {
            return [exports.ValidationCodeHash, exports.Id]
        }),
        PvfCheckRejected: support_1.sts.tuple(function () {
            return [exports.ValidationCodeHash, exports.Id]
        }),
        PvfCheckStarted: support_1.sts.tuple(function () {
            return [exports.ValidationCodeHash, exports.Id]
        }),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.ParaInclusionEvent = support_1.sts.closedEnum(function () {
    return {
        CandidateBacked: support_1.sts.tuple(function () {
            return [exports.V8CandidateReceipt, exports.HeadData, exports.V8CoreIndex, exports.V8GroupIndex]
        }),
        CandidateIncluded: support_1.sts.tuple(function () {
            return [exports.V8CandidateReceipt, exports.HeadData, exports.V8CoreIndex, exports.V8GroupIndex]
        }),
        CandidateTimedOut: support_1.sts.tuple(function () {
            return [exports.V8CandidateReceipt, exports.HeadData, exports.V8CoreIndex]
        }),
        UpwardMessagesReceived: support_1.sts.enumStruct({
            from: exports.Id,
            count: support_1.sts.number(),
        }),
    }
})
exports.V8CandidateReceipt = support_1.sts.struct(function () {
    return {
        descriptor: exports.V8CandidateDescriptor,
        commitmentsHash: exports.H256,
    }
})
/**
 * Events type.
 */
exports.OffencesEvent = support_1.sts.closedEnum(function () {
    return {
        Offence: support_1.sts.enumStruct({
            kind: support_1.sts.bytes(),
            timeslot: support_1.sts.bytes(),
        }),
    }
})
/**
 * Events of this pallet.
 */
exports.NominationPoolsEvent = support_1.sts.closedEnum(function () {
    return {
        Bonded: support_1.sts.enumStruct({
            member: exports.AccountId32,
            poolId: support_1.sts.number(),
            bonded: support_1.sts.bigint(),
        }),
        CommissionUpdated: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            current: support_1.sts.option(function () {
                return exports.Perbill
            }),
        }),
        Created: support_1.sts.enumStruct({
            creator: exports.AccountId32,
            poolId: support_1.sts.number(),
            capacity: support_1.sts.bigint(),
        }),
        Destroyed: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
        }),
        EarlyBirdSharesRemoved: support_1.sts.enumStruct({
            count: support_1.sts.number(),
        }),
        EraRewardsProcessed: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            era: support_1.sts.number(),
            commission: support_1.sts.option(function () {
                return exports.CommissionPayment
            }),
            bonus: support_1.sts.bigint(),
            reinvested: support_1.sts.bigint(),
            bonusCycleEnded: support_1.sts.boolean(),
        }),
        Nominated: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            validators: support_1.sts.array(function () {
                return exports.AccountId32
            }),
        }),
        PoolMutated: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            mutation: exports.PoolMutation,
        }),
        PoolSlashed: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            balance: support_1.sts.bigint(),
        }),
        RewardPaid: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            era: support_1.sts.number(),
            validatorStash: exports.AccountId32,
            reward: support_1.sts.bigint(),
            bonus: support_1.sts.bigint(),
        }),
        StateChanged: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            newState: exports.PoolState,
        }),
        Unbonded: support_1.sts.enumStruct({
            member: exports.AccountId32,
            poolId: support_1.sts.number(),
            balance: support_1.sts.bigint(),
            points: support_1.sts.bigint(),
            era: support_1.sts.number(),
        }),
        UnbondingPoolSlashed: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            era: support_1.sts.number(),
            balance: support_1.sts.bigint(),
        }),
        Withdrawn: support_1.sts.enumStruct({
            member: exports.AccountId32,
            poolId: support_1.sts.number(),
            balance: support_1.sts.bigint(),
            points: support_1.sts.bigint(),
        }),
    }
})
exports.PoolState = support_1.sts.closedEnum(function () {
    return {
        Destroying: support_1.sts.unit(),
        Open: support_1.sts.unit(),
    }
})
exports.PoolMutation = support_1.sts.struct(function () {
    return {
        duration: support_1.sts.option(function () {
            return support_1.sts.number()
        }),
        newCommission: exports.ShouldMutate,
        maxCommission: support_1.sts.option(function () {
            return exports.Perbill
        }),
        changeRate: support_1.sts.option(function () {
            return exports.CommissionChangeRate
        }),
        capacity: support_1.sts.option(function () {
            return support_1.sts.bigint()
        }),
        name: support_1.sts.option(function () {
            return exports.BoundedVec
        }),
    }
})
exports.BoundedVec = support_1.sts.bytes()
exports.CommissionChangeRate = support_1.sts.struct(function () {
    return {
        maxDelta: exports.Perbill,
        minDelay: support_1.sts.number(),
    }
})
exports.ShouldMutate = support_1.sts.closedEnum(function () {
    return {
        NoMutation: support_1.sts.unit(),
        SomeMutation: support_1.sts.option(function () {
            return exports.Perbill
        }),
    }
})
exports.CommissionPayment = support_1.sts.struct(function () {
    return {
        beneficiary: exports.AccountId32,
        amount: support_1.sts.bigint(),
    }
})
/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
        ClaimTokensCompleted: support_1.sts.enumStruct({
            destination: exports.AccountId32,
            ethereumAddress: exports.H160,
        }),
        ClaimTokensInitiated: support_1.sts.enumStruct({
            accountId: exports.AccountId32,
            ethereumAddress: exports.H160,
        }),
        ClaimedCollections: support_1.sts.enumStruct({
            accountId: exports.AccountId32,
            ethereumAddress: exports.H160,
            collectionIds: support_1.sts.array(function () {
                return support_1.sts.bigint()
            }),
        }),
        ClaimedTokens: support_1.sts.enumStruct({
            accountId: exports.AccountId32,
            ethereumAddress: exports.H160,
            assetIds: support_1.sts.array(function () {
                return exports.AssetIdWithEth
            }),
            moreTokensRemain: support_1.sts.boolean(),
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
        CollectionDepositRecalculationInProgress: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            processedTokens: support_1.sts.number(),
            processedAttributes: support_1.sts.number(),
        }),
        CollectionDepositUpdateCompleted: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
        }),
        CollectionDestroyed: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            caller: exports.AccountId32,
        }),
        CollectionMutated: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            mutation: exports.DefaultCollectionMutation,
        }),
        CollectionTransferCancelled: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
        }),
        CollectionTransferred: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            newOwner: exports.AccountId32,
        }),
        CollectionUpdated: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return exports.Collection
            }),
        }),
        CollectionUpgraded: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            storageVersion: support_1.sts.number(),
        }),
        Deposit: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Frozen: exports.Freeze,
        Infused: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.RootOrSigned,
            amount: support_1.sts.bigint(),
        }),
        MigrationStep: support_1.sts.enumStruct({
            itemsProcessed: support_1.sts.number(),
            phase: support_1.sts.number(),
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
            reserveId: exports.RuntimeHoldReason,
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
            reserveId: exports.RuntimeHoldReason,
        }),
        Reserved: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
            amount: support_1.sts.bigint(),
            reserveId: exports.RuntimeHoldReason,
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
        TokenAccountDepositUpdated: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            depositor: exports.AccountId32,
            deltaAccountCount: support_1.sts.number(),
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
        TokenAccountUpgraded: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
            storageVersion: support_1.sts.number(),
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
        TokenUpgraded: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            storageVersion: support_1.sts.number(),
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
            reserveId: exports.RuntimeHoldReason,
        }),
        Withdraw: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
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
exports.FreezeState = support_1.sts.closedEnum(function () {
    return {
        Never: support_1.sts.unit(),
        Permanent: support_1.sts.unit(),
        Temporary: support_1.sts.unit(),
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
exports.AssetIdWithEth = support_1.sts.struct(function () {
    return {
        ethereumCollectionId: support_1.sts.bigint(),
        collectionId: support_1.sts.bigint(),
        tokenId: support_1.sts.bigint(),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.MigrationsEvent = support_1.sts.closedEnum(function () {
    return {
        HistoricCleared: support_1.sts.enumStruct({
            nextCursor: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        }),
        MigrationAdvanced: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            took: support_1.sts.number(),
        }),
        MigrationCompleted: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            took: support_1.sts.number(),
        }),
        MigrationFailed: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            took: support_1.sts.number(),
        }),
        MigrationSkipped: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        UpgradeCompleted: support_1.sts.unit(),
        UpgradeFailed: support_1.sts.unit(),
        UpgradeStarted: support_1.sts.enumStruct({
            migrations: support_1.sts.number(),
        }),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.MessageQueueEvent = support_1.sts.closedEnum(function () {
    return {
        OverweightEnqueued: support_1.sts.enumStruct({
            id: support_1.sts.bytes(),
            origin: exports.AggregateMessageOrigin,
            pageIndex: support_1.sts.number(),
            messageIndex: support_1.sts.number(),
        }),
        PageReaped: support_1.sts.enumStruct({
            origin: exports.AggregateMessageOrigin,
            index: support_1.sts.number(),
        }),
        Processed: support_1.sts.enumStruct({
            id: exports.H256,
            origin: exports.AggregateMessageOrigin,
            weightUsed: exports.Weight,
            success: support_1.sts.boolean(),
        }),
        ProcessingFailed: support_1.sts.enumStruct({
            id: exports.H256,
            origin: exports.AggregateMessageOrigin,
            error: exports.ProcessMessageError,
        }),
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
        CounterOfferAnswered: support_1.sts.enumStruct({
            listingId: exports.H256,
            creator: exports.AccountId32,
            response: exports.CounterOfferResponse,
        }),
        CounterOfferPlaced: support_1.sts.enumStruct({
            listingId: exports.H256,
            counterOffer: exports.CounterOffer,
        }),
        CounterOfferRemoved: support_1.sts.enumStruct({
            listingId: exports.H256,
            creator: exports.AccountId32,
        }),
        ExpiredListingRemoved: support_1.sts.enumStruct({
            listingId: exports.H256,
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
            price: support_1.sts.bigint(),
            amountFilled: support_1.sts.bigint(),
            amountRemaining: support_1.sts.bigint(),
            protocolFee: support_1.sts.bigint(),
            royalty: support_1.sts.bigint(),
        }),
        ListingRemovedUnderMinimum: support_1.sts.enumStruct({
            listingId: exports.H256,
        }),
        ListingUpgraded: support_1.sts.enumStruct({
            listingId: exports.H256,
        }),
        MigrationStep: support_1.sts.enumStruct({
            itemsProcessed: support_1.sts.number(),
            phase: support_1.sts.number(),
        }),
        ProtocolFeeSet: support_1.sts.enumStruct({
            protocolFee: exports.Perbill,
        }),
    }
})
exports.CounterOffer = support_1.sts.struct(function () {
    return {
        sellerPrice: support_1.sts.bigint(),
        buyerPrice: support_1.sts.option(function () {
            return support_1.sts.bigint()
        }),
        deposit: exports.Deposit,
    }
})
exports.Deposit = support_1.sts.struct(function () {
    return {
        depositor: exports.AccountId32,
        amount: support_1.sts.bigint(),
    }
})
exports.Bid = support_1.sts.struct(function () {
    return {
        bidder: exports.AccountId32,
        price: support_1.sts.bigint(),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.ImOnlineEvent = support_1.sts.closedEnum(function () {
    return {
        AllGood: support_1.sts.unit(),
        HeartbeatReceived: support_1.sts.enumStruct({
            authorityId: support_1.sts.bytes(),
        }),
        SomeOffline: support_1.sts.enumStruct({
            offline: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [exports.AccountId32, exports.Exposure]
                })
            }),
        }),
    }
})
exports.Exposure = support_1.sts.struct(function () {
    return {
        total: support_1.sts.bigint(),
        own: support_1.sts.bigint(),
        others: support_1.sts.array(function () {
            return exports.IndividualExposure
        }),
    }
})
exports.IndividualExposure = support_1.sts.struct(function () {
    return {
        who: exports.AccountId32,
        value: support_1.sts.bigint(),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.IdentityEvent = support_1.sts.closedEnum(function () {
    return {
        AuthorityAdded: support_1.sts.enumStruct({
            authority: exports.AccountId32,
        }),
        AuthorityRemoved: support_1.sts.enumStruct({
            authority: exports.AccountId32,
        }),
        DanglingUsernameRemoved: support_1.sts.enumStruct({
            who: exports.AccountId32,
            username: support_1.sts.bytes(),
        }),
        IdentityCleared: support_1.sts.enumStruct({
            who: exports.AccountId32,
            deposit: support_1.sts.bigint(),
        }),
        IdentityKilled: support_1.sts.enumStruct({
            who: exports.AccountId32,
            deposit: support_1.sts.bigint(),
        }),
        IdentitySet: support_1.sts.enumStruct({
            who: exports.AccountId32,
        }),
        JudgementGiven: support_1.sts.enumStruct({
            target: exports.AccountId32,
            registrarIndex: support_1.sts.number(),
        }),
        JudgementRequested: support_1.sts.enumStruct({
            who: exports.AccountId32,
            registrarIndex: support_1.sts.number(),
        }),
        JudgementUnrequested: support_1.sts.enumStruct({
            who: exports.AccountId32,
            registrarIndex: support_1.sts.number(),
        }),
        PreapprovalExpired: support_1.sts.enumStruct({
            whose: exports.AccountId32,
        }),
        PrimaryUsernameSet: support_1.sts.enumStruct({
            who: exports.AccountId32,
            username: support_1.sts.bytes(),
        }),
        RegistrarAdded: support_1.sts.enumStruct({
            registrarIndex: support_1.sts.number(),
        }),
        SubIdentityAdded: support_1.sts.enumStruct({
            sub: exports.AccountId32,
            main: exports.AccountId32,
            deposit: support_1.sts.bigint(),
        }),
        SubIdentityRemoved: support_1.sts.enumStruct({
            sub: exports.AccountId32,
            main: exports.AccountId32,
            deposit: support_1.sts.bigint(),
        }),
        SubIdentityRevoked: support_1.sts.enumStruct({
            sub: exports.AccountId32,
            main: exports.AccountId32,
            deposit: support_1.sts.bigint(),
        }),
        UsernameQueued: support_1.sts.enumStruct({
            who: exports.AccountId32,
            username: support_1.sts.bytes(),
            expiration: support_1.sts.number(),
        }),
        UsernameSet: support_1.sts.enumStruct({
            who: exports.AccountId32,
            username: support_1.sts.bytes(),
        }),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.HrmpEvent = support_1.sts.closedEnum(function () {
    return {
        ChannelClosed: support_1.sts.enumStruct({
            byParachain: exports.Id,
            channelId: exports.HrmpChannelId,
        }),
        HrmpChannelForceOpened: support_1.sts.enumStruct({
            sender: exports.Id,
            recipient: exports.Id,
            proposedMaxCapacity: support_1.sts.number(),
            proposedMaxMessageSize: support_1.sts.number(),
        }),
        HrmpSystemChannelOpened: support_1.sts.enumStruct({
            sender: exports.Id,
            recipient: exports.Id,
            proposedMaxCapacity: support_1.sts.number(),
            proposedMaxMessageSize: support_1.sts.number(),
        }),
        OpenChannelAccepted: support_1.sts.enumStruct({
            sender: exports.Id,
            recipient: exports.Id,
        }),
        OpenChannelCanceled: support_1.sts.enumStruct({
            byParachain: exports.Id,
            channelId: exports.HrmpChannelId,
        }),
        OpenChannelDepositsUpdated: support_1.sts.enumStruct({
            sender: exports.Id,
            recipient: exports.Id,
        }),
        OpenChannelRequested: support_1.sts.enumStruct({
            sender: exports.Id,
            recipient: exports.Id,
            proposedMaxCapacity: support_1.sts.number(),
            proposedMaxMessageSize: support_1.sts.number(),
        }),
    }
})
exports.HrmpChannelId = support_1.sts.struct(function () {
    return {
        sender: exports.Id,
        recipient: exports.Id,
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.GrandpaEvent = support_1.sts.closedEnum(function () {
    return {
        NewAuthorities: support_1.sts.enumStruct({
            authoritySet: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [exports.Public, support_1.sts.bigint()]
                })
            }),
        }),
        Paused: support_1.sts.unit(),
        Resumed: support_1.sts.unit(),
    }
})
exports.Public = support_1.sts.bytes()
/**
 * The `Event` enum of this pallet
 */
exports.FuelTanksEvent = support_1.sts.closedEnum(function () {
    return {
        AccountAdded: support_1.sts.enumStruct({
            tankId: exports.AccountId32,
            userId: exports.AccountId32,
            tankDeposit: support_1.sts.bigint(),
            userDeposit: support_1.sts.bigint(),
            totalReceived: support_1.sts.bigint(),
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
        MigrationStep: support_1.sts.enumStruct({
            itemsProcessed: support_1.sts.number(),
            phase: support_1.sts.number(),
        }),
        RuleSetInserted: support_1.sts.enumStruct({
            tankId: exports.AccountId32,
            ruleSetId: support_1.sts.number(),
        }),
        RuleSetRemoved: support_1.sts.enumStruct({
            tankId: exports.AccountId32,
            ruleSetId: support_1.sts.number(),
        }),
    }
})
exports.DefaultTankMutation = support_1.sts.struct(function () {
    return {
        userAccountManagement: exports.Type_296,
        coveragePolicy: support_1.sts.option(function () {
            return exports.CoveragePolicy
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
exports.CoveragePolicy = support_1.sts.closedEnum(function () {
    return {
        Fees: support_1.sts.unit(),
        FeesAndDeposit: support_1.sts.unit(),
    }
})
exports.Type_296 = support_1.sts.closedEnum(function () {
    return {
        NoMutation: support_1.sts.unit(),
        SomeMutation: support_1.sts.option(function () {
            return exports.UserAccountManagement
        }),
    }
})
exports.UserAccountManagement = support_1.sts.struct(function () {
    return {
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
        MinimumInfusion: support_1.sts.unit(),
        PermittedCalls: support_1.sts.unit(),
        PermittedExtrinsics: support_1.sts.unit(),
        RequireSignature: support_1.sts.unit(),
        RequireToken: support_1.sts.unit(),
        TankFuelBudget: support_1.sts.unit(),
        UserFuelBudget: support_1.sts.unit(),
        WhitelistedCallers: support_1.sts.unit(),
        WhitelistedCollections: support_1.sts.unit(),
        WhitelistedPallets: support_1.sts.unit(),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.FellowshipReferendaEvent = support_1.sts.closedEnum(function () {
    return {
        Approved: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        Cancelled: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            tally: exports.Type_748,
        }),
        ConfirmAborted: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        ConfirmStarted: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        Confirmed: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            tally: exports.Type_748,
        }),
        DecisionDepositPlaced: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        DecisionDepositRefunded: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        DecisionStarted: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            track: support_1.sts.number(),
            proposal: exports.Bounded,
            tally: exports.Type_748,
        }),
        DepositSlashed: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Killed: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            tally: exports.Type_748,
        }),
        MetadataCleared: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            hash: exports.H256,
        }),
        MetadataSet: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            hash: exports.H256,
        }),
        Rejected: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            tally: exports.Type_748,
        }),
        SubmissionDepositRefunded: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Submitted: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            track: support_1.sts.number(),
            proposal: exports.Bounded,
        }),
        TimedOut: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            tally: exports.Type_748,
        }),
    }
})
exports.Type_748 = support_1.sts.struct(function () {
    return {
        bareAyes: support_1.sts.number(),
        ayes: support_1.sts.number(),
        nays: support_1.sts.number(),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.FellowshipCollectiveEvent = support_1.sts.closedEnum(function () {
    return {
        MemberAdded: support_1.sts.enumStruct({
            who: exports.AccountId32,
        }),
        MemberExchanged: support_1.sts.enumStruct({
            who: exports.AccountId32,
            newWho: exports.AccountId32,
        }),
        MemberRemoved: support_1.sts.enumStruct({
            who: exports.AccountId32,
            rank: support_1.sts.number(),
        }),
        RankChanged: support_1.sts.enumStruct({
            who: exports.AccountId32,
            rank: support_1.sts.number(),
        }),
        Voted: support_1.sts.enumStruct({
            who: exports.AccountId32,
            poll: support_1.sts.number(),
            vote: exports.VoteRecord,
            tally: exports.Type_748,
        }),
    }
})
exports.VoteRecord = support_1.sts.closedEnum(function () {
    return {
        Aye: support_1.sts.number(),
        Nay: support_1.sts.number(),
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
 * The `Event` enum of this pallet
 */
exports.ElectionProviderMultiPhaseEvent = support_1.sts.closedEnum(function () {
    return {
        ElectionFailed: support_1.sts.unit(),
        ElectionFinalized: support_1.sts.enumStruct({
            compute: exports.ElectionCompute,
            score: exports.ElectionScore,
        }),
        PhaseTransitioned: support_1.sts.enumStruct({
            from: exports.Phase,
            to: exports.Phase,
            round: support_1.sts.number(),
        }),
        Rewarded: support_1.sts.enumStruct({
            account: exports.AccountId32,
            value: support_1.sts.bigint(),
        }),
        Slashed: support_1.sts.enumStruct({
            account: exports.AccountId32,
            value: support_1.sts.bigint(),
        }),
        SolutionStored: support_1.sts.enumStruct({
            compute: exports.ElectionCompute,
            origin: support_1.sts.option(function () {
                return exports.AccountId32
            }),
            prevEjected: support_1.sts.boolean(),
        }),
    }
})
exports.Phase = support_1.sts.closedEnum(function () {
    return {
        Emergency: support_1.sts.unit(),
        Off: support_1.sts.unit(),
        Signed: support_1.sts.unit(),
        Unsigned: support_1.sts.tuple(function () {
            return [support_1.sts.boolean(), support_1.sts.number()]
        }),
    }
})
exports.ElectionScore = support_1.sts.struct(function () {
    return {
        minimalStake: support_1.sts.bigint(),
        sumStake: support_1.sts.bigint(),
        sumStakeSquared: support_1.sts.bigint(),
    }
})
exports.ElectionCompute = support_1.sts.closedEnum(function () {
    return {
        Emergency: support_1.sts.unit(),
        Fallback: support_1.sts.unit(),
        OnChain: support_1.sts.unit(),
        Signed: support_1.sts.unit(),
        Unsigned: support_1.sts.unit(),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.CrowdloanEvent = support_1.sts.closedEnum(function () {
    return {
        AddedToNewRaise: support_1.sts.enumStruct({
            paraId: exports.Id,
        }),
        AllRefunded: support_1.sts.enumStruct({
            paraId: exports.Id,
        }),
        Contributed: support_1.sts.enumStruct({
            who: exports.AccountId32,
            fundIndex: exports.Id,
            amount: support_1.sts.bigint(),
        }),
        Created: support_1.sts.enumStruct({
            paraId: exports.Id,
        }),
        Dissolved: support_1.sts.enumStruct({
            paraId: exports.Id,
        }),
        Edited: support_1.sts.enumStruct({
            paraId: exports.Id,
        }),
        HandleBidResult: support_1.sts.enumStruct({
            paraId: exports.Id,
            result: support_1.sts.result(
                function () {
                    return support_1.sts.unit()
                },
                function () {
                    return exports.DispatchError
                }
            ),
        }),
        MemoUpdated: support_1.sts.enumStruct({
            who: exports.AccountId32,
            paraId: exports.Id,
            memo: support_1.sts.bytes(),
        }),
        PartiallyRefunded: support_1.sts.enumStruct({
            paraId: exports.Id,
        }),
        Withdrew: support_1.sts.enumStruct({
            who: exports.AccountId32,
            fundIndex: exports.Id,
            amount: support_1.sts.bigint(),
        }),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.ConvictionVotingEvent = support_1.sts.closedEnum(function () {
    return {
        Delegated: support_1.sts.tuple(function () {
            return [exports.AccountId32, exports.AccountId32]
        }),
        Undelegated: exports.AccountId32,
        VoteRemoved: support_1.sts.enumStruct({
            who: exports.AccountId32,
            vote: exports.AccountVote,
        }),
        Voted: support_1.sts.enumStruct({
            who: exports.AccountId32,
            vote: exports.AccountVote,
        }),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.BalancesEvent = support_1.sts.closedEnum(function () {
    return {
        BalanceSet: support_1.sts.enumStruct({
            who: exports.AccountId32,
            free: support_1.sts.bigint(),
        }),
        Burned: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
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
        Frozen: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Issued: support_1.sts.enumStruct({
            amount: support_1.sts.bigint(),
        }),
        Locked: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Minted: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Rescinded: support_1.sts.enumStruct({
            amount: support_1.sts.bigint(),
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
        Restored: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Slashed: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Suspended: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Thawed: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        TotalIssuanceForced: support_1.sts.enumStruct({
            old: support_1.sts.bigint(),
            new: support_1.sts.bigint(),
        }),
        Transfer: support_1.sts.enumStruct({
            from: exports.AccountId32,
            to: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Unlocked: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Unreserved: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Upgraded: support_1.sts.enumStruct({
            who: exports.AccountId32,
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
/**
 * The `Event` enum of this pallet
 */
exports.AuctionsEvent = support_1.sts.closedEnum(function () {
    return {
        AuctionClosed: support_1.sts.enumStruct({
            auctionIndex: support_1.sts.number(),
        }),
        AuctionStarted: support_1.sts.enumStruct({
            auctionIndex: support_1.sts.number(),
            leasePeriod: support_1.sts.number(),
            ending: support_1.sts.number(),
        }),
        BidAccepted: support_1.sts.enumStruct({
            bidder: exports.AccountId32,
            paraId: exports.Id,
            amount: support_1.sts.bigint(),
            firstSlot: support_1.sts.number(),
            lastSlot: support_1.sts.number(),
        }),
        ReserveConfiscated: support_1.sts.enumStruct({
            paraId: exports.Id,
            leaser: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Reserved: support_1.sts.enumStruct({
            bidder: exports.AccountId32,
            extraReserved: support_1.sts.bigint(),
            totalAmount: support_1.sts.bigint(),
        }),
        Unreserved: support_1.sts.enumStruct({
            bidder: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        WinningOffset: support_1.sts.enumStruct({
            auctionIndex: support_1.sts.number(),
            blockNumber: support_1.sts.number(),
        }),
    }
})
/**
 * The `Event` enum of this pallet
 */
exports.AssignedSlotsEvent = support_1.sts.closedEnum(function () {
    return {
        MaxPermanentSlotsChanged: support_1.sts.enumStruct({
            slots: support_1.sts.number(),
        }),
        MaxTemporarySlotsChanged: support_1.sts.enumStruct({
            slots: support_1.sts.number(),
        }),
        PermanentSlotAssigned: exports.Id,
        TemporarySlotAssigned: exports.Id,
    }
})
exports.Type_752 = support_1.sts.closedEnum(function () {
    return {
        ApplyExtrinsic: support_1.sts.number(),
        Finalization: support_1.sts.unit(),
        Initialization: support_1.sts.unit(),
    }
})
exports.FutureBlockVotingProof = support_1.sts.struct(function () {
    return {
        vote: exports.VoteMessage,
    }
})
exports.VoteMessage = support_1.sts.struct(function () {
    return {
        commitment: exports.Commitment,
        id: support_1.sts.bytes(),
        signature: support_1.sts.bytes(),
    }
})
exports.Commitment = support_1.sts.struct(function () {
    return {
        payload: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.bytes(), support_1.sts.bytes()]
            })
        }),
        blockNumber: support_1.sts.number(),
        validatorSetId: support_1.sts.bigint(),
    }
})
exports.ForkVotingProof = support_1.sts.struct(function () {
    return {
        vote: exports.VoteMessage,
        ancestryProof: exports.AncestryProof,
        header: exports.Header,
    }
})
exports.Header = support_1.sts.struct(function () {
    return {
        parentHash: exports.H256,
        number: support_1.sts.number(),
        stateRoot: exports.H256,
        extrinsicsRoot: exports.H256,
        digest: exports.Digest,
    }
})
exports.Digest = support_1.sts.struct(function () {
    return {
        logs: support_1.sts.array(function () {
            return exports.DigestItem
        }),
    }
})
exports.DigestItem = support_1.sts.closedEnum(function () {
    return {
        Consensus: support_1.sts.tuple(function () {
            return [support_1.sts.bytes(), support_1.sts.bytes()]
        }),
        Other: support_1.sts.bytes(),
        PreRuntime: support_1.sts.tuple(function () {
            return [support_1.sts.bytes(), support_1.sts.bytes()]
        }),
        RuntimeEnvironmentUpdated: support_1.sts.unit(),
        Seal: support_1.sts.tuple(function () {
            return [support_1.sts.bytes(), support_1.sts.bytes()]
        }),
    }
})
exports.AncestryProof = support_1.sts.struct(function () {
    return {
        prevPeaks: support_1.sts.array(function () {
            return exports.H256
        }),
        prevLeafCount: support_1.sts.bigint(),
        leafCount: support_1.sts.bigint(),
        items: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.bigint(), exports.H256]
            })
        }),
    }
})
exports.MembershipProof = support_1.sts.struct(function () {
    return {
        session: support_1.sts.number(),
        trieNodes: support_1.sts.array(function () {
            return support_1.sts.bytes()
        }),
        validatorCount: support_1.sts.number(),
    }
})
exports.DoubleVotingProof = support_1.sts.struct(function () {
    return {
        first: exports.VoteMessage,
        second: exports.VoteMessage,
    }
})
exports.V3WeightLimit = support_1.sts.closedEnum(function () {
    return {
        Limited: exports.Weight,
        Unlimited: support_1.sts.unit(),
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
        V4: support_1.sts.array(function () {
            return exports.V4Instruction
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
            originKind: exports.V3OriginKind,
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
exports.V3QueryResponseInfo = support_1.sts.struct(function () {
    return {
        destination: exports.V3MultiLocation,
        queryId: support_1.sts.bigint(),
        maxWeight: exports.Weight,
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
        PolkadotBulletin: support_1.sts.unit(),
        Rococo: support_1.sts.unit(),
        Westend: support_1.sts.unit(),
        Wococo: support_1.sts.unit(),
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
exports.V3AssetId = support_1.sts.closedEnum(function () {
    return {
        Abstract: support_1.sts.bytes(),
        Concrete: exports.V3MultiLocation,
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
exports.V3MultiLocation = support_1.sts.struct(function () {
    return {
        parents: support_1.sts.number(),
        interior: exports.V3Junctions,
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
exports.V2OriginKind = support_1.sts.closedEnum(function () {
    return {
        Native: support_1.sts.unit(),
        SovereignAccount: support_1.sts.unit(),
        Superuser: support_1.sts.unit(),
        Xcm: support_1.sts.unit(),
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
exports.V2AssetId = support_1.sts.closedEnum(function () {
    return {
        Abstract: support_1.sts.bytes(),
        Concrete: exports.V2MultiLocation,
    }
})
exports.V2MultiLocation = support_1.sts.struct(function () {
    return {
        parents: support_1.sts.number(),
        interior: exports.V2Junctions,
    }
})
exports.V2WeightLimit = support_1.sts.closedEnum(function () {
    return {
        Limited: support_1.sts.bigint(),
        Unlimited: support_1.sts.unit(),
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
exports.VersionedAssetId = support_1.sts.closedEnum(function () {
    return {
        V3: exports.V3AssetId,
        V4: exports.V4AssetId,
    }
})
exports.TransferType = support_1.sts.closedEnum(function () {
    return {
        DestinationReserve: support_1.sts.unit(),
        LocalReserve: support_1.sts.unit(),
        RemoteReserve: exports.VersionedLocation,
        Teleport: support_1.sts.unit(),
    }
})
exports.VersionedAssets = support_1.sts.closedEnum(function () {
    return {
        V2: support_1.sts.array(function () {
            return exports.V2MultiAsset
        }),
        V3: support_1.sts.array(function () {
            return exports.V3MultiAsset
        }),
        V4: support_1.sts.array(function () {
            return exports.V4Asset
        }),
    }
})
exports.VersionedLocation = support_1.sts.closedEnum(function () {
    return {
        V2: exports.V2MultiLocation,
        V3: exports.V3MultiLocation,
        V4: exports.V4Location,
    }
})
exports.Id = support_1.sts.number()
exports.UnlockChunk = support_1.sts.struct(function () {
    return {
        value: support_1.sts.bigint(),
        era: support_1.sts.number(),
    }
})
exports.CounterOfferResponse = support_1.sts.closedEnum(function () {
    return {
        Accept: support_1.sts.unit(),
        Counter: support_1.sts.bigint(),
        Reject: support_1.sts.unit(),
    }
})
exports.ListingDescriptor = support_1.sts.struct(function () {
    return {
        makeAssetId: exports.AssetId,
        takeAssetId: exports.AssetId,
        amount: support_1.sts.bigint(),
        price: support_1.sts.bigint(),
        startBlock: support_1.sts.option(function () {
            return support_1.sts.number()
        }),
        salt: support_1.sts.bytes(),
        usesWhitelist: support_1.sts.boolean(),
        data: exports.ListingData,
    }
})
exports.ListingData = support_1.sts.closedEnum(function () {
    return {
        Auction: exports.AuctionData,
        FixedPrice: support_1.sts.unit(),
        Offer: exports.OfferData,
    }
})
exports.OfferData = support_1.sts.struct(function () {
    return {
        expiration: support_1.sts.option(function () {
            return support_1.sts.number()
        }),
    }
})
exports.AuctionData = support_1.sts.struct(function () {
    return {
        endBlock: support_1.sts.number(),
    }
})
exports.AssetId = support_1.sts.struct(function () {
    return {
        collectionId: support_1.sts.bigint(),
        tokenId: support_1.sts.bigint(),
    }
})
exports.RuleSetDescriptor = support_1.sts.struct(function () {
    return {
        rules: support_1.sts.array(function () {
            return exports.DispatchRuleDescriptor
        }),
        requireAccount: support_1.sts.boolean(),
    }
})
exports.DispatchRuleDescriptor = support_1.sts.closedEnum(function () {
    return {
        MaxFuelBurnPerTransaction: exports.MaxFuelBurnPerTransactionRule,
        MinimumInfusion: exports.MinimumInfusionRule,
        PermittedCalls: support_1.sts.array(function () {
            return support_1.sts.bytes()
        }),
        PermittedExtrinsics: support_1.sts.array(function () {
            return exports.Call
        }),
        RequireSignature: exports.RequireSignatureRule,
        RequireToken: exports.RequireTokenRule,
        TankFuelBudget: exports.TankFuelBudgetRuleDescriptor,
        UserFuelBudget: exports.UserFuelBudgetRuleDescriptor,
        WhitelistedCallers: support_1.sts.array(function () {
            return exports.AccountId32
        }),
        WhitelistedCollections: support_1.sts.array(function () {
            return support_1.sts.bigint()
        }),
        WhitelistedPallets: support_1.sts.array(function () {
            return exports.Call
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
exports.RequireSignatureRule = support_1.sts.bytes()
exports.MinimumInfusionRule = support_1.sts.bigint()
exports.MaxFuelBurnPerTransactionRule = support_1.sts.bigint()
exports.DispatchSettings = support_1.sts.struct(function () {
    return {
        useNoneOrigin: support_1.sts.boolean(),
        paysRemainingFee: support_1.sts.boolean(),
        signature: support_1.sts.option(function () {
            return exports.ExpirableSignature
        }),
    }
})
exports.ExpirableSignature = support_1.sts.struct(function () {
    return {
        signature: support_1.sts.bytes(),
        expiryBlock: support_1.sts.number(),
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
                return [support_1.sts.number(), exports.RuleSetDescriptor]
            })
        }),
        coveragePolicy: exports.CoveragePolicy,
        accountRules: support_1.sts.array(function () {
            return exports.AccountRuleDescriptor
        }),
    }
})
exports.H160 = support_1.sts.bytes()
exports.FlexibleMintParams = support_1.sts.closedEnum(function () {
    return {
        CreateOrMint: exports.CreateTokenParams,
        Mint: support_1.sts.enumStruct({
            tokenId: support_1.sts.bigint(),
            amount: support_1.sts.bigint(),
            depositor: support_1.sts.option(function () {
                return exports.AccountId32
            }),
        }),
    }
})
exports.CreateTokenParams = support_1.sts.struct(function () {
    return {
        tokenId: support_1.sts.bigint(),
        amount: support_1.sts.bigint(),
        accountDepositCount: support_1.sts.number(),
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
        infusion: support_1.sts.bigint(),
        anyoneCanInfuse: support_1.sts.boolean(),
        metadata: exports.CreateTokenMetadata,
        privilegedParams: support_1.sts.option(function () {
            return exports.PrivilegedCreateTokenParams
        }),
    }
})
exports.PrivilegedCreateTokenParams = support_1.sts.struct(function () {
    return {
        requiresDeposit: support_1.sts.boolean(),
        foreignParams: support_1.sts.option(function () {
            return exports.ForeignTokenCreationParams
        }),
        depositor: support_1.sts.option(function () {
            return exports.AccountId32
        }),
    }
})
exports.ForeignTokenCreationParams = support_1.sts.struct(function () {
    return {
        location: support_1.sts.option(function () {
            return exports.V4Location
        }),
        unitsPerSecond: support_1.sts.option(function () {
            return support_1.sts.bigint()
        }),
    }
})
exports.CreateTokenMetadata = support_1.sts.struct(function () {
    return {
        name: exports.BoundedString,
        symbol: support_1.sts.bytes(),
        decimalCount: support_1.sts.number(),
    }
})
exports.BoundedString = support_1.sts.bytes()
exports.AttributeKeyValuePair = support_1.sts.struct(function () {
    return {
        key: support_1.sts.bytes(),
        value: support_1.sts.bytes(),
    }
})
exports.TokenMarketBehavior = support_1.sts.closedEnum(function () {
    return {
        HasRoyalty: exports.DefaultRoyalty,
        IsCurrency: support_1.sts.unit(),
    }
})
exports.DefaultRoyalty = support_1.sts.struct(function () {
    return {
        beneficiaries: support_1.sts.array(function () {
            return exports.DefaultRoyaltyInfo
        }),
    }
})
exports.DefaultRoyaltyInfo = support_1.sts.struct(function () {
    return {
        beneficiary: exports.AccountId32,
        percentage: support_1.sts.number(),
    }
})
exports.TokenCap = support_1.sts.closedEnum(function () {
    return {
        CollapsingSupply: support_1.sts.bigint(),
        Supply: support_1.sts.bigint(),
    }
})
exports.Type_611 = support_1.sts.struct(function () {
    return {
        accountId: exports.AccountId32,
        params: exports.DefaultMintParams,
    }
})
exports.DefaultMintParams = support_1.sts.closedEnum(function () {
    return {
        CreateToken: support_1.sts.enumStruct({
            tokenId: support_1.sts.bigint(),
            initialSupply: support_1.sts.bigint(),
            accountDepositCount: support_1.sts.number(),
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
            infusion: support_1.sts.bigint(),
            anyoneCanInfuse: support_1.sts.boolean(),
            metadata: exports.CreateTokenMetadata,
            privilegedParams: support_1.sts.option(function () {
                return exports.PrivilegedCreateTokenParams
            }),
        }),
        Mint: support_1.sts.enumStruct({
            tokenId: support_1.sts.bigint(),
            amount: support_1.sts.bigint(),
            depositor: support_1.sts.option(function () {
                return exports.AccountId32
            }),
        }),
    }
})
exports.MultiAddress = support_1.sts.closedEnum(function () {
    return {
        Address20: support_1.sts.bytes(),
        Address32: support_1.sts.bytes(),
        Id: exports.AccountId32,
        Index: support_1.sts.unit(),
        Raw: support_1.sts.bytes(),
    }
})
exports.DefaultCollectionDescriptor = support_1.sts.struct(function () {
    return {
        policy: exports.DefaultCollectionPolicyDescriptor,
        depositor: support_1.sts.option(function () {
            return exports.AccountId32
        }),
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
        forceCollapsingSupply: support_1.sts.boolean(),
    }
})
exports.Timepoint = support_1.sts.struct(function () {
    return {
        height: support_1.sts.number(),
        index: support_1.sts.number(),
    }
})
exports.Weight = support_1.sts.struct(function () {
    return {
        refTime: support_1.sts.bigint(),
        proofSize: support_1.sts.bigint(),
    }
})
exports.OriginCaller = support_1.sts.closedEnum(function () {
    return {
        Origins: exports.Type_465,
        ParachainsOrigin: exports.Origin,
        Void: exports.Void,
        XcmPallet: exports.Type_464,
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
exports.Type_464 = support_1.sts.closedEnum(function () {
    return {
        Response: exports.V4Location,
        Xcm: exports.V4Location,
    }
})
exports.Void = support_1.sts.closedEnum(function () {
    return {}
})
exports.Origin = support_1.sts.closedEnum(function () {
    return {
        Parachain: exports.Id,
    }
})
exports.Type_465 = support_1.sts.closedEnum(function () {
    return {
        AuctionAdmin: support_1.sts.unit(),
        BigSpender: support_1.sts.unit(),
        BigTipper: support_1.sts.unit(),
        Fellows: support_1.sts.unit(),
        Fellowship1Dan: support_1.sts.unit(),
        Fellowship2Dan: support_1.sts.unit(),
        Fellowship3Dan: support_1.sts.unit(),
        Fellowship4Dan: support_1.sts.unit(),
        Fellowship5Dan: support_1.sts.unit(),
        Fellowship6Dan: support_1.sts.unit(),
        Fellowship7Dan: support_1.sts.unit(),
        Fellowship8Dan: support_1.sts.unit(),
        Fellowship9Dan: support_1.sts.unit(),
        FellowshipAdmin: support_1.sts.unit(),
        FellowshipExperts: support_1.sts.unit(),
        FellowshipInitiates: support_1.sts.unit(),
        FellowshipMasters: support_1.sts.unit(),
        FuelTanksAdmin: support_1.sts.unit(),
        GeneralAdmin: support_1.sts.unit(),
        LeaseAdmin: support_1.sts.unit(),
        MediumSpender: support_1.sts.unit(),
        MultiTokensAdmin: support_1.sts.unit(),
        ParachainsAdmin: support_1.sts.unit(),
        ReferendumCanceller: support_1.sts.unit(),
        ReferendumKiller: support_1.sts.unit(),
        SmallSpender: support_1.sts.unit(),
        SmallTipper: support_1.sts.unit(),
        StakingAdmin: support_1.sts.unit(),
        TreasuryAdmin: support_1.sts.unit(),
        WhitelistAdmin: support_1.sts.unit(),
        WhitelistedCaller: support_1.sts.unit(),
    }
})
exports.Call = support_1.sts.closedEnum(function () {
    return {
        AssignedSlots: exports.AssignedSlotsCall,
        Auctions: exports.AuctionsCall,
        Babe: exports.BabeCall,
        Balances: exports.BalancesCall,
        Beefy: exports.BeefyCall,
        Configuration: exports.ConfigurationCall,
        ConvictionVoting: exports.ConvictionVotingCall,
        Crowdloan: exports.CrowdloanCall,
        ElectionProviderMultiPhase: exports.ElectionProviderMultiPhaseCall,
        ExtrinsicPause: exports.ExtrinsicPauseCall,
        FellowshipCollective: exports.FellowshipCollectiveCall,
        FellowshipReferenda: exports.FellowshipReferendaCall,
        FuelTanks: exports.FuelTanksCall,
        Grandpa: exports.GrandpaCall,
        Hrmp: exports.HrmpCall,
        Identity: exports.IdentityCall,
        ImOnline: exports.ImOnlineCall,
        Initializer: exports.InitializerCall,
        Marketplace: exports.MarketplaceCall,
        MessageQueue: exports.MessageQueueCall,
        Migrations: exports.MigrationsCall,
        MultiTokens: exports.MultiTokensCall,
        Multisig: exports.MultisigCall,
        NominationPools: exports.NominationPoolsCall,
        ParaInclusion: exports.ParaInclusionCall,
        ParaInherent: exports.ParaInherentCall,
        Paras: exports.ParasCall,
        ParasDisputes: exports.ParasDisputesCall,
        ParasShared: exports.ParasSharedCall,
        ParasSlashing: exports.ParasSlashingCall,
        ParasSudoWrapper: exports.ParasSudoWrapperCall,
        Preimage: exports.PreimageCall,
        Proxy: exports.ProxyCall,
        Referenda: exports.ReferendaCall,
        Registrar: exports.RegistrarCall,
        SafeMode: exports.SafeModeCall,
        Scheduler: exports.SchedulerCall,
        Session: exports.SessionCall,
        Slots: exports.SlotsCall,
        StakeExchange: exports.StakeExchangeCall,
        Staking: exports.StakingCall,
        Sudo: exports.SudoCall,
        System: exports.SystemCall,
        Timestamp: exports.TimestampCall,
        Treasury: exports.TreasuryCall,
        Utility: exports.UtilityCall,
        ValidatorManager: exports.ValidatorManagerCall,
        VoteManager: exports.VoteManagerCall,
        VoterList: exports.VoterListCall,
        Whitelist: exports.WhitelistCall,
        XcmPallet: exports.XcmPalletCall,
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.XcmPalletCall = support_1.sts.closedEnum(function () {
    return {
        claim_assets: support_1.sts.enumStruct({
            assets: exports.VersionedAssets,
            beneficiary: exports.VersionedLocation,
        }),
        execute: support_1.sts.enumStruct({
            message: exports.Type_568,
            maxWeight: exports.Weight,
        }),
        force_default_xcm_version: support_1.sts.enumStruct({
            maybeXcmVersion: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        }),
        force_subscribe_version_notify: support_1.sts.enumStruct({
            location: exports.VersionedLocation,
        }),
        force_suspension: support_1.sts.enumStruct({
            suspended: support_1.sts.boolean(),
        }),
        force_unsubscribe_version_notify: support_1.sts.enumStruct({
            location: exports.VersionedLocation,
        }),
        force_xcm_version: support_1.sts.enumStruct({
            location: exports.V4Location,
            version: support_1.sts.number(),
        }),
        limited_reserve_transfer_assets: support_1.sts.enumStruct({
            dest: exports.VersionedLocation,
            beneficiary: exports.VersionedLocation,
            assets: exports.VersionedAssets,
            feeAssetItem: support_1.sts.number(),
            weightLimit: exports.V3WeightLimit,
        }),
        limited_teleport_assets: support_1.sts.enumStruct({
            dest: exports.VersionedLocation,
            beneficiary: exports.VersionedLocation,
            assets: exports.VersionedAssets,
            feeAssetItem: support_1.sts.number(),
            weightLimit: exports.V3WeightLimit,
        }),
        reserve_transfer_assets: support_1.sts.enumStruct({
            dest: exports.VersionedLocation,
            beneficiary: exports.VersionedLocation,
            assets: exports.VersionedAssets,
            feeAssetItem: support_1.sts.number(),
        }),
        send: support_1.sts.enumStruct({
            dest: exports.VersionedLocation,
            message: exports.VersionedXcm,
        }),
        teleport_assets: support_1.sts.enumStruct({
            dest: exports.VersionedLocation,
            beneficiary: exports.VersionedLocation,
            assets: exports.VersionedAssets,
            feeAssetItem: support_1.sts.number(),
        }),
        transfer_assets: support_1.sts.enumStruct({
            dest: exports.VersionedLocation,
            beneficiary: exports.VersionedLocation,
            assets: exports.VersionedAssets,
            feeAssetItem: support_1.sts.number(),
            weightLimit: exports.V3WeightLimit,
        }),
        transfer_assets_using_type_and_then: support_1.sts.enumStruct({
            dest: exports.VersionedLocation,
            assets: exports.VersionedAssets,
            assetsTransferType: exports.TransferType,
            remoteFeesId: exports.VersionedAssetId,
            feesTransferType: exports.TransferType,
            customXcmOnDest: exports.VersionedXcm,
            weightLimit: exports.V3WeightLimit,
        }),
    }
})
exports.Type_568 = support_1.sts.closedEnum(function () {
    return {
        V2: support_1.sts.array(function () {
            return exports.Type_571
        }),
        V3: support_1.sts.array(function () {
            return exports.Type_575
        }),
        V4: support_1.sts.array(function () {
            return exports.Type_578
        }),
    }
})
exports.Type_578 = support_1.sts.closedEnum(function () {
    return {
        AliasOrigin: exports.V4Location,
        BurnAsset: support_1.sts.array(function () {
            return exports.V4Asset
        }),
        BuyExecution: support_1.sts.enumStruct({
            fees: exports.V4Asset,
            weightLimit: exports.V3WeightLimit,
        }),
        ClaimAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V4Asset
            }),
            ticket: exports.V4Location,
        }),
        ClearError: support_1.sts.unit(),
        ClearOrigin: support_1.sts.unit(),
        ClearTopic: support_1.sts.unit(),
        ClearTransactStatus: support_1.sts.unit(),
        DepositAsset: support_1.sts.enumStruct({
            assets: exports.V4AssetFilter,
            beneficiary: exports.V4Location,
        }),
        DepositReserveAsset: support_1.sts.enumStruct({
            assets: exports.V4AssetFilter,
            dest: exports.V4Location,
            xcm: support_1.sts.array(function () {
                return exports.V4Instruction
            }),
        }),
        DescendOrigin: exports.V4Junctions,
        ExchangeAsset: support_1.sts.enumStruct({
            give: exports.V4AssetFilter,
            want: support_1.sts.array(function () {
                return exports.V4Asset
            }),
            maximal: support_1.sts.boolean(),
        }),
        ExpectAsset: support_1.sts.array(function () {
            return exports.V4Asset
        }),
        ExpectError: support_1.sts.option(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), exports.V3Error]
            })
        }),
        ExpectOrigin: support_1.sts.option(function () {
            return exports.V4Location
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
            network: exports.V4NetworkId,
            destination: exports.V4Junctions,
            xcm: support_1.sts.array(function () {
                return exports.V4Instruction
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
            assets: exports.V4AssetFilter,
            reserve: exports.V4Location,
            xcm: support_1.sts.array(function () {
                return exports.V4Instruction
            }),
        }),
        InitiateTeleport: support_1.sts.enumStruct({
            assets: exports.V4AssetFilter,
            dest: exports.V4Location,
            xcm: support_1.sts.array(function () {
                return exports.V4Instruction
            }),
        }),
        LockAsset: support_1.sts.enumStruct({
            asset: exports.V4Asset,
            unlocker: exports.V4Location,
        }),
        NoteUnlockable: support_1.sts.enumStruct({
            asset: exports.V4Asset,
            owner: exports.V4Location,
        }),
        QueryPallet: support_1.sts.enumStruct({
            moduleName: support_1.sts.bytes(),
            responseInfo: exports.V4QueryResponseInfo,
        }),
        QueryResponse: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            response: exports.V4Response,
            maxWeight: exports.Weight,
            querier: support_1.sts.option(function () {
                return exports.V4Location
            }),
        }),
        ReceiveTeleportedAsset: support_1.sts.array(function () {
            return exports.V4Asset
        }),
        RefundSurplus: support_1.sts.unit(),
        ReportError: exports.V4QueryResponseInfo,
        ReportHolding: support_1.sts.enumStruct({
            responseInfo: exports.V4QueryResponseInfo,
            assets: exports.V4AssetFilter,
        }),
        ReportTransactStatus: exports.V4QueryResponseInfo,
        RequestUnlock: support_1.sts.enumStruct({
            asset: exports.V4Asset,
            locker: exports.V4Location,
        }),
        ReserveAssetDeposited: support_1.sts.array(function () {
            return exports.V4Asset
        }),
        SetAppendix: support_1.sts.array(function () {
            return exports.Type_578
        }),
        SetErrorHandler: support_1.sts.array(function () {
            return exports.Type_578
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
            originKind: exports.V3OriginKind,
            requireWeightAtMost: exports.Weight,
            call: exports.Type_572,
        }),
        TransferAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V4Asset
            }),
            beneficiary: exports.V4Location,
        }),
        TransferReserveAsset: support_1.sts.enumStruct({
            assets: support_1.sts.array(function () {
                return exports.V4Asset
            }),
            dest: exports.V4Location,
            xcm: support_1.sts.array(function () {
                return exports.V4Instruction
            }),
        }),
        Trap: support_1.sts.bigint(),
        UniversalOrigin: exports.V4Junction,
        UnlockAsset: support_1.sts.enumStruct({
            asset: exports.V4Asset,
            target: exports.V4Location,
        }),
        UnpaidExecution: support_1.sts.enumStruct({
            weightLimit: exports.V3WeightLimit,
            checkOrigin: support_1.sts.option(function () {
                return exports.V4Location
            }),
        }),
        UnsubscribeVersion: support_1.sts.unit(),
        WithdrawAsset: support_1.sts.array(function () {
            return exports.V4Asset
        }),
    }
})
exports.Type_572 = support_1.sts.struct(function () {
    return {
        encoded: support_1.sts.bytes(),
    }
})
exports.Type_575 = support_1.sts.closedEnum(function () {
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
            return exports.Type_575
        }),
        SetErrorHandler: support_1.sts.array(function () {
            return exports.Type_575
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
            originKind: exports.V3OriginKind,
            requireWeightAtMost: exports.Weight,
            call: exports.Type_572,
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
exports.Type_571 = support_1.sts.closedEnum(function () {
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
            return exports.Type_571
        }),
        SetErrorHandler: support_1.sts.array(function () {
            return exports.Type_571
        }),
        SubscribeVersion: support_1.sts.enumStruct({
            queryId: support_1.sts.bigint(),
            maxResponseWeight: support_1.sts.bigint(),
        }),
        Transact: support_1.sts.enumStruct({
            originType: exports.V2OriginKind,
            requireWeightAtMost: support_1.sts.bigint(),
            call: exports.Type_572,
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.WhitelistCall = support_1.sts.closedEnum(function () {
    return {
        dispatch_whitelisted_call: support_1.sts.enumStruct({
            callHash: exports.H256,
            callEncodedLen: support_1.sts.number(),
            callWeightWitness: exports.Weight,
        }),
        dispatch_whitelisted_call_with_preimage: support_1.sts.enumStruct({
            call: exports.Call,
        }),
        remove_whitelisted_call: support_1.sts.enumStruct({
            callHash: exports.H256,
        }),
        whitelist_call: support_1.sts.enumStruct({
            callHash: exports.H256,
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.VoterListCall = support_1.sts.closedEnum(function () {
    return {
        put_in_front_of: support_1.sts.enumStruct({
            lighter: exports.MultiAddress,
        }),
        put_in_front_of_other: support_1.sts.enumStruct({
            heavier: exports.MultiAddress,
            lighter: exports.MultiAddress,
        }),
        rebag: support_1.sts.enumStruct({
            dislocated: exports.MultiAddress,
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.VoteManagerCall = support_1.sts.closedEnum(function () {
    return {
        remove_other_vote: support_1.sts.enumStruct({
            target: exports.MultiAddress,
            class: support_1.sts.number(),
            index: support_1.sts.number(),
        }),
        remove_vote: support_1.sts.enumStruct({
            class: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            index: support_1.sts.number(),
        }),
        unlock: support_1.sts.enumStruct({
            class: support_1.sts.number(),
            target: exports.MultiAddress,
            index: support_1.sts.number(),
        }),
        vote: support_1.sts.enumStruct({
            pollIndex: support_1.sts.number(),
            vote: exports.AccountVote,
            currency: exports.VoteCurrency,
        }),
    }
})
exports.VoteCurrency = support_1.sts.closedEnum(function () {
    return {
        Enj: support_1.sts.unit(),
        SEnj: support_1.sts.bigint(),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.ValidatorManagerCall = support_1.sts.closedEnum(function () {
    return {
        deregister_validators: support_1.sts.enumStruct({
            validators: support_1.sts.array(function () {
                return exports.AccountId32
            }),
        }),
        register_validators: support_1.sts.enumStruct({
            validators: support_1.sts.array(function () {
                return exports.AccountId32
            }),
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.TreasuryCall = support_1.sts.closedEnum(function () {
    return {
        check_status: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        payout: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        remove_approval: support_1.sts.enumStruct({
            proposalId: support_1.sts.number(),
        }),
        spend: support_1.sts.enumStruct({
            amount: support_1.sts.bigint(),
            beneficiary: exports.AccountId32,
            validFrom: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        }),
        spend_local: support_1.sts.enumStruct({
            amount: support_1.sts.bigint(),
            beneficiary: exports.MultiAddress,
        }),
        void_spend: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.TimestampCall = support_1.sts.closedEnum(function () {
    return {
        set: support_1.sts.enumStruct({
            now: support_1.sts.bigint(),
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.SystemCall = support_1.sts.closedEnum(function () {
    return {
        apply_authorized_upgrade: support_1.sts.enumStruct({
            code: support_1.sts.bytes(),
        }),
        authorize_upgrade: support_1.sts.enumStruct({
            codeHash: exports.H256,
        }),
        authorize_upgrade_without_checks: support_1.sts.enumStruct({
            codeHash: exports.H256,
        }),
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.SudoCall = support_1.sts.closedEnum(function () {
    return {
        remove_key: support_1.sts.unit(),
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.StakingCall = support_1.sts.closedEnum(function () {
    return {
        bond: support_1.sts.enumStruct({
            value: support_1.sts.bigint(),
            payee: exports.RewardDestination,
        }),
        bond_extra: support_1.sts.enumStruct({
            maxAdditional: support_1.sts.bigint(),
        }),
        cancel_deferred_slash: support_1.sts.enumStruct({
            era: support_1.sts.number(),
            slashIndices: support_1.sts.array(function () {
                return support_1.sts.number()
            }),
        }),
        chill: support_1.sts.unit(),
        chill_other: support_1.sts.enumStruct({
            stash: exports.AccountId32,
        }),
        deprecate_controller_batch: support_1.sts.enumStruct({
            controllers: support_1.sts.array(function () {
                return exports.AccountId32
            }),
        }),
        force_apply_min_commission: support_1.sts.enumStruct({
            validatorStash: exports.AccountId32,
        }),
        force_new_era: support_1.sts.unit(),
        force_new_era_always: support_1.sts.unit(),
        force_no_eras: support_1.sts.unit(),
        force_unstake: support_1.sts.enumStruct({
            stash: exports.AccountId32,
            numSlashingSpans: support_1.sts.number(),
        }),
        increase_validator_count: support_1.sts.enumStruct({
            additional: support_1.sts.number(),
        }),
        kick: support_1.sts.enumStruct({
            who: support_1.sts.array(function () {
                return exports.MultiAddress
            }),
        }),
        nominate: support_1.sts.enumStruct({
            targets: support_1.sts.array(function () {
                return exports.MultiAddress
            }),
        }),
        payout_stakers: support_1.sts.enumStruct({
            validatorStash: exports.AccountId32,
            era: support_1.sts.number(),
        }),
        payout_stakers_by_page: support_1.sts.enumStruct({
            validatorStash: exports.AccountId32,
            era: support_1.sts.number(),
            page: support_1.sts.number(),
        }),
        reap_stash: support_1.sts.enumStruct({
            stash: exports.AccountId32,
            numSlashingSpans: support_1.sts.number(),
        }),
        rebond: support_1.sts.enumStruct({
            value: support_1.sts.bigint(),
        }),
        restore_ledger: support_1.sts.enumStruct({
            stash: exports.AccountId32,
            maybeController: support_1.sts.option(function () {
                return exports.AccountId32
            }),
            maybeTotal: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            maybeUnlocking: support_1.sts.option(function () {
                return support_1.sts.array(function () {
                    return exports.UnlockChunk
                })
            }),
        }),
        scale_validator_count: support_1.sts.enumStruct({
            factor: exports.Percent,
        }),
        set_controller: support_1.sts.unit(),
        set_invulnerables: support_1.sts.enumStruct({
            invulnerables: support_1.sts.array(function () {
                return exports.AccountId32
            }),
        }),
        set_min_commission: support_1.sts.enumStruct({
            new: exports.Perbill,
        }),
        set_payee: support_1.sts.enumStruct({
            payee: exports.RewardDestination,
        }),
        set_staking_configs: support_1.sts.enumStruct({
            minNominatorBond: exports.ConfigOp,
            minValidatorBond: exports.ConfigOp,
            maxNominatorCount: exports.Type_423,
            maxValidatorCount: exports.Type_423,
            chillThreshold: exports.Type_424,
            minCommission: exports.Type_425,
            maxStakedRewards: exports.Type_424,
        }),
        set_validator_count: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        unbond: support_1.sts.enumStruct({
            value: support_1.sts.bigint(),
        }),
        update_payee: support_1.sts.enumStruct({
            controller: exports.AccountId32,
        }),
        validate: support_1.sts.enumStruct({
            prefs: exports.ValidatorPrefs,
        }),
        withdraw_unbonded: support_1.sts.enumStruct({
            numSlashingSpans: support_1.sts.number(),
        }),
    }
})
exports.Type_425 = support_1.sts.closedEnum(function () {
    return {
        Noop: support_1.sts.unit(),
        Remove: support_1.sts.unit(),
        Set: exports.Perbill,
    }
})
exports.Type_424 = support_1.sts.closedEnum(function () {
    return {
        Noop: support_1.sts.unit(),
        Remove: support_1.sts.unit(),
        Set: exports.Percent,
    }
})
exports.Type_423 = support_1.sts.closedEnum(function () {
    return {
        Noop: support_1.sts.unit(),
        Remove: support_1.sts.unit(),
        Set: support_1.sts.number(),
    }
})
exports.ConfigOp = support_1.sts.closedEnum(function () {
    return {
        Noop: support_1.sts.unit(),
        Remove: support_1.sts.unit(),
        Set: support_1.sts.bigint(),
    }
})
exports.Percent = support_1.sts.number()
/**
 * The pallet's extrinsics.
 */
exports.StakeExchangeCall = support_1.sts.closedEnum(function () {
    return {
        add_liquidity: support_1.sts.enumStruct({
            offerId: support_1.sts.bigint(),
            amount: support_1.sts.bigint(),
        }),
        buy: support_1.sts.enumStruct({
            offerId: support_1.sts.bigint(),
            amount: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
        }),
        cancel_offer: support_1.sts.enumStruct({
            offerId: support_1.sts.bigint(),
        }),
        configure_liquidity_account: support_1.sts.enumStruct({
            config: exports.LiquidityAccountConfig,
        }),
        create_offer: support_1.sts.enumStruct({
            offer: exports.CreateOffer,
        }),
        withdraw_liquidity: support_1.sts.enumStruct({
            offerId: support_1.sts.bigint(),
            amount: support_1.sts.bigint(),
        }),
    }
})
exports.CreateOffer = support_1.sts.struct(function () {
    return {
        account: exports.AccountId32,
        total: support_1.sts.bigint(),
        rate: support_1.sts.number(),
        minAverageRewardRate: support_1.sts.bigint(),
        tokenFilter: exports.TokenFilter,
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.SlotsCall = support_1.sts.closedEnum(function () {
    return {
        clear_all_leases: support_1.sts.enumStruct({
            para: exports.Id,
        }),
        force_lease: support_1.sts.enumStruct({
            para: exports.Id,
            leaser: exports.AccountId32,
            amount: support_1.sts.bigint(),
            periodBegin: support_1.sts.number(),
            periodCount: support_1.sts.number(),
        }),
        trigger_onboard: support_1.sts.enumStruct({
            para: exports.Id,
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
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
        grandpa: exports.Public,
        babe: support_1.sts.bytes(),
        imOnline: support_1.sts.bytes(),
        paraValidator: support_1.sts.bytes(),
        paraAssignment: support_1.sts.bytes(),
        authorityDiscovery: support_1.sts.bytes(),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
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
        cancel_retry: support_1.sts.enumStruct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
        }),
        cancel_retry_named: support_1.sts.enumStruct({
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
        set_retry: support_1.sts.enumStruct({
            task: support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            }),
            retries: support_1.sts.number(),
            period: support_1.sts.number(),
        }),
        set_retry_named: support_1.sts.enumStruct({
            id: support_1.sts.bytes(),
            retries: support_1.sts.number(),
            period: support_1.sts.number(),
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.SafeModeCall = support_1.sts.closedEnum(function () {
    return {
        enter: support_1.sts.unit(),
        extend: support_1.sts.unit(),
        force_enter: support_1.sts.unit(),
        force_exit: support_1.sts.unit(),
        force_extend: support_1.sts.unit(),
        force_release_deposit: support_1.sts.enumStruct({
            account: exports.AccountId32,
            block: support_1.sts.number(),
        }),
        force_slash_deposit: support_1.sts.enumStruct({
            account: exports.AccountId32,
            block: support_1.sts.number(),
        }),
        release_deposit: support_1.sts.enumStruct({
            account: exports.AccountId32,
            block: support_1.sts.number(),
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.RegistrarCall = support_1.sts.closedEnum(function () {
    return {
        add_lock: support_1.sts.enumStruct({
            para: exports.Id,
        }),
        deregister: support_1.sts.enumStruct({
            id: exports.Id,
        }),
        force_register: support_1.sts.enumStruct({
            who: exports.AccountId32,
            deposit: support_1.sts.bigint(),
            id: exports.Id,
            genesisHead: exports.HeadData,
            validationCode: exports.ValidationCode,
        }),
        register: support_1.sts.enumStruct({
            id: exports.Id,
            genesisHead: exports.HeadData,
            validationCode: exports.ValidationCode,
        }),
        remove_lock: support_1.sts.enumStruct({
            para: exports.Id,
        }),
        reserve: support_1.sts.unit(),
        schedule_code_upgrade: support_1.sts.enumStruct({
            para: exports.Id,
            newCode: exports.ValidationCode,
        }),
        set_current_head: support_1.sts.enumStruct({
            para: exports.Id,
            newHead: exports.HeadData,
        }),
        swap: support_1.sts.enumStruct({
            id: exports.Id,
            other: exports.Id,
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.ReferendaCall = support_1.sts.closedEnum(function () {
    return {
        cancel: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        kill: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        nudge_referendum: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        one_fewer_deciding: support_1.sts.enumStruct({
            track: support_1.sts.number(),
        }),
        place_decision_deposit: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        refund_decision_deposit: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        refund_submission_deposit: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        set_metadata: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            maybeHash: support_1.sts.option(function () {
                return exports.H256
            }),
        }),
        submit: support_1.sts.enumStruct({
            proposalOrigin: exports.OriginCaller,
            proposal: exports.Bounded,
            enactmentMoment: exports.DispatchTime,
        }),
    }
})
exports.DispatchTime = support_1.sts.closedEnum(function () {
    return {
        After: support_1.sts.number(),
        At: support_1.sts.number(),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.ProxyCall = support_1.sts.closedEnum(function () {
    return {
        add_proxy: support_1.sts.enumStruct({
            delegate: exports.MultiAddress,
            proxyType: exports.ProxyType,
            delay: support_1.sts.number(),
        }),
        announce: support_1.sts.enumStruct({
            real: exports.MultiAddress,
            callHash: exports.H256,
        }),
        create_pure: support_1.sts.enumStruct({
            proxyType: exports.ProxyType,
            delay: support_1.sts.number(),
            index: support_1.sts.number(),
        }),
        kill_pure: support_1.sts.enumStruct({
            spawner: exports.MultiAddress,
            proxyType: exports.ProxyType,
            index: support_1.sts.number(),
            height: support_1.sts.number(),
            extIndex: support_1.sts.number(),
        }),
        proxy: support_1.sts.enumStruct({
            real: exports.MultiAddress,
            forceProxyType: support_1.sts.option(function () {
                return exports.ProxyType
            }),
            call: exports.Call,
        }),
        proxy_announced: support_1.sts.enumStruct({
            delegate: exports.MultiAddress,
            real: exports.MultiAddress,
            forceProxyType: support_1.sts.option(function () {
                return exports.ProxyType
            }),
            call: exports.Call,
        }),
        reject_announcement: support_1.sts.enumStruct({
            delegate: exports.MultiAddress,
            callHash: exports.H256,
        }),
        remove_announcement: support_1.sts.enumStruct({
            real: exports.MultiAddress,
            callHash: exports.H256,
        }),
        remove_proxies: support_1.sts.unit(),
        remove_proxy: support_1.sts.enumStruct({
            delegate: exports.MultiAddress,
            proxyType: exports.ProxyType,
            delay: support_1.sts.number(),
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.PreimageCall = support_1.sts.closedEnum(function () {
    return {
        ensure_updated: support_1.sts.enumStruct({
            hashes: support_1.sts.array(function () {
                return exports.H256
            }),
        }),
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.ParasSudoWrapperCall = support_1.sts.closedEnum(function () {
    return {
        sudo_establish_hrmp_channel: support_1.sts.enumStruct({
            sender: exports.Id,
            recipient: exports.Id,
            maxCapacity: support_1.sts.number(),
            maxMessageSize: support_1.sts.number(),
        }),
        sudo_queue_downward_xcm: support_1.sts.enumStruct({
            id: exports.Id,
            xcm: exports.VersionedXcm,
        }),
        sudo_schedule_para_cleanup: support_1.sts.enumStruct({
            id: exports.Id,
        }),
        sudo_schedule_para_initialize: support_1.sts.enumStruct({
            id: exports.Id,
            genesis: exports.ParaGenesisArgs,
        }),
        sudo_schedule_parachain_downgrade: support_1.sts.enumStruct({
            id: exports.Id,
        }),
        sudo_schedule_parathread_upgrade: support_1.sts.enumStruct({
            id: exports.Id,
        }),
    }
})
exports.ParaGenesisArgs = support_1.sts.struct(function () {
    return {
        genesisHead: exports.HeadData,
        validationCode: exports.ValidationCode,
        paraKind: support_1.sts.boolean(),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.ParasSlashingCall = support_1.sts.closedEnum(function () {
    return {
        report_dispute_lost_unsigned: support_1.sts.enumStruct({
            disputeProof: exports.V8DisputeProof,
            keyOwnerProof: exports.MembershipProof,
        }),
    }
})
exports.V8DisputeProof = support_1.sts.struct(function () {
    return {
        timeSlot: exports.V8DisputesTimeSlot,
        kind: exports.V8SlashingOffenceKind,
        validatorIndex: exports.V8ValidatorIndex,
        validatorId: support_1.sts.bytes(),
    }
})
exports.V8ValidatorIndex = support_1.sts.number()
exports.V8SlashingOffenceKind = support_1.sts.closedEnum(function () {
    return {
        AgainstValid: support_1.sts.unit(),
        ForInvalid: support_1.sts.unit(),
    }
})
exports.V8DisputesTimeSlot = support_1.sts.struct(function () {
    return {
        sessionIndex: support_1.sts.number(),
        candidateHash: exports.CandidateHash,
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.ParasSharedCall = support_1.sts.closedEnum(function () {
    return {}
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.ParasDisputesCall = support_1.sts.closedEnum(function () {
    return {
        force_unfreeze: support_1.sts.unit(),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.ParasCall = support_1.sts.closedEnum(function () {
    return {
        add_trusted_validation_code: support_1.sts.enumStruct({
            validationCode: exports.ValidationCode,
        }),
        force_note_new_head: support_1.sts.enumStruct({
            para: exports.Id,
            newHead: exports.HeadData,
        }),
        force_queue_action: support_1.sts.enumStruct({
            para: exports.Id,
        }),
        force_schedule_code_upgrade: support_1.sts.enumStruct({
            para: exports.Id,
            newCode: exports.ValidationCode,
            relayParentNumber: support_1.sts.number(),
        }),
        force_set_current_code: support_1.sts.enumStruct({
            para: exports.Id,
            newCode: exports.ValidationCode,
        }),
        force_set_current_head: support_1.sts.enumStruct({
            para: exports.Id,
            newHead: exports.HeadData,
        }),
        force_set_most_recent_context: support_1.sts.enumStruct({
            para: exports.Id,
            context: support_1.sts.number(),
        }),
        include_pvf_check_statement: support_1.sts.enumStruct({
            stmt: exports.V8PvfCheckStatement,
            signature: support_1.sts.bytes(),
        }),
        poke_unused_validation_code: support_1.sts.enumStruct({
            validationCodeHash: exports.ValidationCodeHash,
        }),
    }
})
exports.V8PvfCheckStatement = support_1.sts.struct(function () {
    return {
        accept: support_1.sts.boolean(),
        subject: exports.ValidationCodeHash,
        sessionIndex: support_1.sts.number(),
        validatorIndex: exports.V8ValidatorIndex,
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.ParaInherentCall = support_1.sts.closedEnum(function () {
    return {
        enter: support_1.sts.enumStruct({
            data: exports.V8InherentData,
        }),
    }
})
exports.V8InherentData = support_1.sts.struct(function () {
    return {
        bitfields: support_1.sts.array(function () {
            return exports.V8UncheckedSigned
        }),
        backedCandidates: support_1.sts.array(function () {
            return exports.V8BackedCandidate
        }),
        disputes: support_1.sts.array(function () {
            return exports.V8DisputeStatementSet
        }),
        parentHeader: exports.Header,
    }
})
exports.V8DisputeStatementSet = support_1.sts.struct(function () {
    return {
        candidateHash: exports.CandidateHash,
        session: support_1.sts.number(),
        statements: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [exports.V8DisputeStatement, exports.V8ValidatorIndex, support_1.sts.bytes()]
            })
        }),
    }
})
exports.V8DisputeStatement = support_1.sts.closedEnum(function () {
    return {
        Invalid: exports.V8InvalidDisputeStatementKind,
        Valid: exports.V8ValidDisputeStatementKind,
    }
})
exports.V8ValidDisputeStatementKind = support_1.sts.closedEnum(function () {
    return {
        ApprovalChecking: support_1.sts.unit(),
        ApprovalCheckingMultipleCandidates: support_1.sts.array(function () {
            return exports.CandidateHash
        }),
        BackingSeconded: exports.H256,
        BackingValid: exports.H256,
        Explicit: support_1.sts.unit(),
    }
})
exports.V8InvalidDisputeStatementKind = support_1.sts.closedEnum(function () {
    return {
        Explicit: support_1.sts.unit(),
    }
})
exports.V8BackedCandidate = support_1.sts.struct(function () {
    return {
        candidate: exports.V8CommittedCandidateReceipt,
        validityVotes: support_1.sts.array(function () {
            return exports.V8ValidityAttestation
        }),
        validatorIndices: support_1.sts.bitseq(),
    }
})
exports.V8ValidityAttestation = support_1.sts.closedEnum(function () {
    return {
        Explicit: support_1.sts.bytes(),
        Implicit: support_1.sts.bytes(),
    }
})
exports.V8CommittedCandidateReceipt = support_1.sts.struct(function () {
    return {
        descriptor: exports.V8CandidateDescriptor,
        commitments: exports.V8CandidateCommitments,
    }
})
exports.V8UncheckedSigned = support_1.sts.struct(function () {
    return {
        payload: exports.V8AvailabilityBitfield,
        validatorIndex: exports.V8ValidatorIndex,
        signature: support_1.sts.bytes(),
    }
})
exports.V8AvailabilityBitfield = support_1.sts.bitseq()
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.ParaInclusionCall = support_1.sts.closedEnum(function () {
    return {}
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.NominationPoolsCall = support_1.sts.closedEnum(function () {
    return {
        bond: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            amount: exports.BondValue,
        }),
        chill: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
        }),
        create: support_1.sts.enumStruct({
            tokenId: support_1.sts.bigint(),
            deposit: support_1.sts.bigint(),
            capacity: support_1.sts.bigint(),
            duration: support_1.sts.number(),
            name: exports.BoundedVec,
        }),
        destroy: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
        }),
        mutate: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            mutation: exports.PoolMutation,
        }),
        nominate: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            validators: support_1.sts.array(function () {
                return exports.AccountId32
            }),
        }),
        payout_rewards: support_1.sts.enumStruct({
            validatorStash: exports.AccountId32,
            era: support_1.sts.number(),
        }),
        pool_withdraw_unbonded: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            numSlashingSpans: support_1.sts.number(),
        }),
        process_payouts: support_1.sts.enumStruct({
            poolCount: support_1.sts.number(),
        }),
        remove_early_bird_shares: support_1.sts.enumStruct({
            count: support_1.sts.number(),
        }),
        set_configs: support_1.sts.enumStruct({
            minJoinBond: exports.Type_454,
            minCreateBond: exports.Type_454,
            globalMaxCommission: exports.Type_455,
            requiredPayoutCount: exports.Type_455,
        }),
        set_staking_info: support_1.sts.enumStruct({
            info: exports.StakingInfo,
        }),
        unbond: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            memberAccount: exports.MultiAddress,
            unbondingPoints: support_1.sts.bigint(),
        }),
        unbond_deposit: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
        }),
        withdraw_deposit: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
        }),
        withdraw_free_balance: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            destination: exports.MultiAddress,
            amount: support_1.sts.bigint(),
        }),
        withdraw_unbonded: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            memberAccount: exports.MultiAddress,
            numSlashingSpans: support_1.sts.number(),
        }),
    }
})
exports.StakingInfo = support_1.sts.struct(function () {
    return {
        annualInflationRate: exports.Perbill,
        collatorPayoutCut: exports.Perbill,
        treasuryPayoutCut: exports.Perbill,
    }
})
exports.Type_455 = support_1.sts.closedEnum(function () {
    return {
        Noop: support_1.sts.unit(),
        Remove: support_1.sts.unit(),
        Set: exports.Perbill,
    }
})
exports.Type_454 = support_1.sts.closedEnum(function () {
    return {
        Noop: support_1.sts.unit(),
        Remove: support_1.sts.unit(),
        Set: support_1.sts.bigint(),
    }
})
exports.BondValue = support_1.sts.closedEnum(function () {
    return {
        Amount: support_1.sts.bigint(),
        Fill: support_1.sts.unit(),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.MultiTokensCall = support_1.sts.closedEnum(function () {
    return {
        accept_collection_transfer: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
        }),
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
                return exports.Type_611
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
            depositor: support_1.sts.option(function () {
                return exports.MultiAddress
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
        cancel_collection_transfer: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
        }),
        claim_collections: support_1.sts.enumStruct({
            destination: exports.AccountId32,
            ethereumSignature: support_1.sts.bytes(),
            ethereumAddress: exports.H160,
            collectionCount: support_1.sts.number(),
        }),
        claim_tokens: support_1.sts.enumStruct({
            destination: exports.AccountId32,
            ethereumSignature: support_1.sts.bytes(),
            ethereumAddress: exports.H160,
        }),
        create_collection: support_1.sts.enumStruct({
            descriptor: exports.DefaultCollectionDescriptor,
        }),
        destroy_collection: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
        }),
        finish_claim_tokens: support_1.sts.enumStruct({
            destination: exports.AccountId32,
            ethereumAddress: exports.H160,
        }),
        force_approve_collection: support_1.sts.enumStruct({
            caller: exports.MultiAddress,
            collectionId: support_1.sts.bigint(),
            operator: exports.AccountId32,
            expiration: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        }),
        force_burn: support_1.sts.enumStruct({
            caller: exports.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: exports.DefaultBurnParams,
        }),
        force_create_collection: support_1.sts.enumStruct({
            owner: exports.AccountId32,
            collectionId: support_1.sts.bigint(),
            descriptor: exports.DefaultCollectionDescriptor,
        }),
        force_create_ethereum_collection: support_1.sts.enumStruct({
            owner: exports.AccountId32,
            claimer: exports.H160,
            ethereumCollectionId: support_1.sts.bigint(),
            descriptor: exports.DefaultCollectionDescriptor,
        }),
        force_freeze: support_1.sts.enumStruct({
            info: exports.Freeze,
        }),
        force_mint: support_1.sts.enumStruct({
            caller: support_1.sts.option(function () {
                return exports.MultiAddress
            }),
            recipient: exports.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: exports.FlexibleMintParams,
            depositor: support_1.sts.option(function () {
                return exports.MultiAddress
            }),
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
        force_set_ethereum_account: support_1.sts.enumStruct({
            address: exports.H160,
            value: support_1.sts.option(function () {
                return support_1.sts.array(function () {
                    return support_1.sts.bigint()
                })
            }),
        }),
        force_set_ethereum_collection_id: support_1.sts.enumStruct({
            ethereumCollectionId: support_1.sts.bigint(),
            nativeCollectionId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
        }),
        force_set_ethereum_unmintable_token_ids: support_1.sts.enumStruct({
            ethereumCollectionId: support_1.sts.bigint(),
            baseTokenId: support_1.sts.bigint(),
            tokenIndex: support_1.sts.bigint(),
        }),
        force_set_next_collection_id: support_1.sts.enumStruct({
            value: support_1.sts.bigint(),
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
        force_set_unmintable_token_ids: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            baseTokenId: support_1.sts.bigint(),
            tokenIndex: support_1.sts.bigint(),
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
        infuse: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            amount: support_1.sts.bigint(),
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
        recalculate_collection_deposit: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenCount: support_1.sts.number(),
            attributeCount: support_1.sts.number(),
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
            depositor: support_1.sts.option(function () {
                return exports.MultiAddress
            }),
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
        update_account_deposit: support_1.sts.enumStruct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            deltaAccountCount: support_1.sts.number(),
        }),
        upgrade_collections: support_1.sts.enumStruct({
            collectionKeys: support_1.sts.array(function () {
                return support_1.sts.bigint()
            }),
        }),
        upgrade_token_accounts: support_1.sts.enumStruct({
            tokenAccountKeys: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.bigint(), support_1.sts.bigint(), exports.AccountId32]
                })
            }),
        }),
        upgrade_tokens: support_1.sts.enumStruct({
            tokenKeys: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.bigint(), support_1.sts.bigint()]
                })
            }),
        }),
    }
})
exports.DefaultTransferParams = support_1.sts.closedEnum(function () {
    return {
        Operator: support_1.sts.enumStruct({
            tokenId: support_1.sts.bigint(),
            source: exports.AccountId32,
            amount: support_1.sts.bigint(),
            depositor: support_1.sts.option(function () {
                return exports.AccountId32
            }),
        }),
        Simple: support_1.sts.enumStruct({
            tokenId: support_1.sts.bigint(),
            amount: support_1.sts.bigint(),
            depositor: support_1.sts.option(function () {
                return exports.AccountId32
            }),
        }),
    }
})
exports.Attribute = support_1.sts.struct(function () {
    return {
        value: support_1.sts.bytes(),
        deposit: support_1.sts.bigint(),
        depositor: support_1.sts.option(function () {
            return exports.AccountId32
        }),
    }
})
exports.DefaultBurnParams = support_1.sts.struct(function () {
    return {
        tokenId: support_1.sts.bigint(),
        amount: support_1.sts.bigint(),
        removeTokenStorage: support_1.sts.boolean(),
    }
})
exports.Recipient = support_1.sts.struct(function () {
    return {
        accountId: exports.AccountId32,
        params: exports.DefaultTransferParams,
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.MigrationsCall = support_1.sts.closedEnum(function () {
    return {
        clear_historic: support_1.sts.enumStruct({
            selector: exports.HistoricCleanupSelector,
        }),
        force_onboard_mbms: support_1.sts.unit(),
        force_set_active_cursor: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            innerCursor: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
            startedAt: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        }),
        force_set_cursor: support_1.sts.enumStruct({
            cursor: support_1.sts.option(function () {
                return exports.MigrationCursor
            }),
        }),
    }
})
exports.MigrationCursor = support_1.sts.closedEnum(function () {
    return {
        Active: exports.ActiveCursor,
        Stuck: support_1.sts.unit(),
    }
})
exports.ActiveCursor = support_1.sts.struct(function () {
    return {
        index: support_1.sts.number(),
        innerCursor: support_1.sts.option(function () {
            return support_1.sts.bytes()
        }),
        startedAt: support_1.sts.number(),
    }
})
exports.HistoricCleanupSelector = support_1.sts.closedEnum(function () {
    return {
        Specific: support_1.sts.array(function () {
            return support_1.sts.bytes()
        }),
        Wildcard: support_1.sts.enumStruct({
            limit: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            previousCursor: support_1.sts.option(function () {
                return support_1.sts.bytes()
            }),
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.MessageQueueCall = support_1.sts.closedEnum(function () {
    return {
        execute_overweight: support_1.sts.enumStruct({
            messageOrigin: exports.AggregateMessageOrigin,
            page: support_1.sts.number(),
            index: support_1.sts.number(),
            weightLimit: exports.Weight,
        }),
        reap_page: support_1.sts.enumStruct({
            messageOrigin: exports.AggregateMessageOrigin,
            pageIndex: support_1.sts.number(),
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.MarketplaceCall = support_1.sts.closedEnum(function () {
    return {
        add_whitelisted_accounts: support_1.sts.enumStruct({
            listingId: exports.H256,
            accounts: support_1.sts.array(function () {
                return exports.WhitelistAddAccount
            }),
        }),
        answer_counter_offer: support_1.sts.enumStruct({
            listingId: exports.H256,
            creator: exports.AccountId32,
            response: exports.CounterOfferResponse,
            currentPrice: support_1.sts.bigint(),
            royaltyBeneficiaryCount: support_1.sts.number(),
        }),
        cancel_listing: support_1.sts.enumStruct({
            listingId: exports.H256,
        }),
        create_listing: support_1.sts.enumStruct({
            descriptor: exports.ListingDescriptor,
            depositor: support_1.sts.option(function () {
                return exports.MultiAddress
            }),
        }),
        fill_listing: support_1.sts.enumStruct({
            listingId: exports.H256,
            amount: support_1.sts.bigint(),
            royaltyBeneficiaryCount: support_1.sts.number(),
        }),
        finalize_auction: support_1.sts.enumStruct({
            listingId: exports.H256,
            royaltyBeneficiaryCount: support_1.sts.number(),
        }),
        force_cancel_listing: support_1.sts.enumStruct({
            listingId: exports.H256,
        }),
        force_create_listing: support_1.sts.enumStruct({
            seller: exports.MultiAddress,
            descriptor: exports.ListingDescriptor,
            depositBacker: support_1.sts.option(function () {
                return exports.MultiAddress
            }),
        }),
        force_place_bid: support_1.sts.enumStruct({
            bidder: exports.MultiAddress,
            listingId: exports.H256,
            price: support_1.sts.bigint(),
            fundsBacker: support_1.sts.option(function () {
                return exports.MultiAddress
            }),
        }),
        place_bid: support_1.sts.enumStruct({
            listingId: exports.H256,
            price: support_1.sts.bigint(),
        }),
        place_counter_offer: support_1.sts.enumStruct({
            listingId: exports.H256,
            price: support_1.sts.bigint(),
            depositor: support_1.sts.option(function () {
                return exports.MultiAddress
            }),
        }),
        remove_expired_listing: support_1.sts.enumStruct({
            listingId: exports.H256,
        }),
        remove_whitelisted_accounts: support_1.sts.enumStruct({
            listingId: exports.H256,
            accountIds: support_1.sts.array(function () {
                return exports.AccountId32
            }),
        }),
        set_protocol_fee: support_1.sts.enumStruct({
            protocolFee: exports.Perbill,
        }),
        upgrade_listings: support_1.sts.enumStruct({
            listingIds: support_1.sts.array(function () {
                return exports.H256
            }),
        }),
    }
})
exports.WhitelistAddAccount = support_1.sts.struct(function () {
    return {
        accountId: exports.AccountId32,
        allowance: support_1.sts.option(function () {
            return support_1.sts.bigint()
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.InitializerCall = support_1.sts.closedEnum(function () {
    return {
        force_approve: support_1.sts.enumStruct({
            upTo: support_1.sts.number(),
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.ImOnlineCall = support_1.sts.closedEnum(function () {
    return {
        heartbeat: support_1.sts.enumStruct({
            heartbeat: exports.Heartbeat,
            signature: support_1.sts.bytes(),
        }),
    }
})
exports.Heartbeat = support_1.sts.struct(function () {
    return {
        blockNumber: support_1.sts.number(),
        sessionIndex: support_1.sts.number(),
        authorityIndex: support_1.sts.number(),
        validatorsLen: support_1.sts.number(),
    }
})
/**
 * Identity pallet declaration.
 */
exports.IdentityCall = support_1.sts.closedEnum(function () {
    return {
        accept_username: support_1.sts.enumStruct({
            username: support_1.sts.bytes(),
        }),
        add_registrar: support_1.sts.enumStruct({
            account: exports.MultiAddress,
        }),
        add_sub: support_1.sts.enumStruct({
            sub: exports.MultiAddress,
            data: exports.Data,
        }),
        add_username_authority: support_1.sts.enumStruct({
            authority: exports.MultiAddress,
            suffix: support_1.sts.bytes(),
            allocation: support_1.sts.number(),
        }),
        cancel_request: support_1.sts.enumStruct({
            regIndex: support_1.sts.number(),
        }),
        clear_identity: support_1.sts.unit(),
        kill_identity: support_1.sts.enumStruct({
            target: exports.MultiAddress,
        }),
        provide_judgement: support_1.sts.enumStruct({
            regIndex: support_1.sts.number(),
            target: exports.MultiAddress,
            judgement: exports.Judgement,
            identity: exports.H256,
        }),
        quit_sub: support_1.sts.unit(),
        remove_dangling_username: support_1.sts.enumStruct({
            username: support_1.sts.bytes(),
        }),
        remove_expired_approval: support_1.sts.enumStruct({
            username: support_1.sts.bytes(),
        }),
        remove_sub: support_1.sts.enumStruct({
            sub: exports.MultiAddress,
        }),
        remove_username_authority: support_1.sts.enumStruct({
            authority: exports.MultiAddress,
        }),
        rename_sub: support_1.sts.enumStruct({
            sub: exports.MultiAddress,
            data: exports.Data,
        }),
        request_judgement: support_1.sts.enumStruct({
            regIndex: support_1.sts.number(),
            maxFee: support_1.sts.bigint(),
        }),
        set_account_id: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            new: exports.MultiAddress,
        }),
        set_fee: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            fee: support_1.sts.bigint(),
        }),
        set_fields: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            fields: support_1.sts.bigint(),
        }),
        set_identity: support_1.sts.enumStruct({
            info: exports.IdentityInfo,
        }),
        set_primary_username: support_1.sts.enumStruct({
            username: support_1.sts.bytes(),
        }),
        set_subs: support_1.sts.enumStruct({
            subs: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [exports.AccountId32, exports.Data]
                })
            }),
        }),
        set_username_for: support_1.sts.enumStruct({
            who: exports.MultiAddress,
            username: support_1.sts.bytes(),
            signature: support_1.sts.option(function () {
                return exports.MultiSignature
            }),
        }),
    }
})
exports.MultiSignature = support_1.sts.closedEnum(function () {
    return {
        Ecdsa: support_1.sts.bytes(),
        Ed25519: support_1.sts.bytes(),
        Sr25519: support_1.sts.bytes(),
    }
})
exports.IdentityInfo = support_1.sts.struct(function () {
    return {
        additional: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [exports.Data, exports.Data]
            })
        }),
        display: exports.Data,
        legal: exports.Data,
        web: exports.Data,
        riot: exports.Data,
        email: exports.Data,
        pgpFingerprint: support_1.sts.option(function () {
            return support_1.sts.bytes()
        }),
        image: exports.Data,
        twitter: exports.Data,
    }
})
exports.Judgement = support_1.sts.closedEnum(function () {
    return {
        Erroneous: support_1.sts.unit(),
        FeePaid: support_1.sts.bigint(),
        KnownGood: support_1.sts.unit(),
        LowQuality: support_1.sts.unit(),
        OutOfDate: support_1.sts.unit(),
        Reasonable: support_1.sts.unit(),
        Unknown: support_1.sts.unit(),
    }
})
exports.Data = support_1.sts.closedEnum(function () {
    return {
        BlakeTwo256: support_1.sts.bytes(),
        Keccak256: support_1.sts.bytes(),
        None: support_1.sts.unit(),
        Raw0: support_1.sts.bytes(),
        Raw1: support_1.sts.bytes(),
        Raw10: support_1.sts.bytes(),
        Raw11: support_1.sts.bytes(),
        Raw12: support_1.sts.bytes(),
        Raw13: support_1.sts.bytes(),
        Raw14: support_1.sts.bytes(),
        Raw15: support_1.sts.bytes(),
        Raw16: support_1.sts.bytes(),
        Raw17: support_1.sts.bytes(),
        Raw18: support_1.sts.bytes(),
        Raw19: support_1.sts.bytes(),
        Raw2: support_1.sts.bytes(),
        Raw20: support_1.sts.bytes(),
        Raw21: support_1.sts.bytes(),
        Raw22: support_1.sts.bytes(),
        Raw23: support_1.sts.bytes(),
        Raw24: support_1.sts.bytes(),
        Raw25: support_1.sts.bytes(),
        Raw26: support_1.sts.bytes(),
        Raw27: support_1.sts.bytes(),
        Raw28: support_1.sts.bytes(),
        Raw29: support_1.sts.bytes(),
        Raw3: support_1.sts.bytes(),
        Raw30: support_1.sts.bytes(),
        Raw31: support_1.sts.bytes(),
        Raw32: support_1.sts.bytes(),
        Raw4: support_1.sts.bytes(),
        Raw5: support_1.sts.bytes(),
        Raw6: support_1.sts.bytes(),
        Raw7: support_1.sts.bytes(),
        Raw8: support_1.sts.bytes(),
        Raw9: support_1.sts.bytes(),
        Sha256: support_1.sts.bytes(),
        ShaThree256: support_1.sts.bytes(),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.HrmpCall = support_1.sts.closedEnum(function () {
    return {
        establish_channel_with_system: support_1.sts.enumStruct({
            targetSystemChain: exports.Id,
        }),
        establish_system_channel: support_1.sts.enumStruct({
            sender: exports.Id,
            recipient: exports.Id,
        }),
        force_clean_hrmp: support_1.sts.enumStruct({
            para: exports.Id,
            numInbound: support_1.sts.number(),
            numOutbound: support_1.sts.number(),
        }),
        force_open_hrmp_channel: support_1.sts.enumStruct({
            sender: exports.Id,
            recipient: exports.Id,
            maxCapacity: support_1.sts.number(),
            maxMessageSize: support_1.sts.number(),
        }),
        force_process_hrmp_close: support_1.sts.enumStruct({
            channels: support_1.sts.number(),
        }),
        force_process_hrmp_open: support_1.sts.enumStruct({
            channels: support_1.sts.number(),
        }),
        hrmp_accept_open_channel: support_1.sts.enumStruct({
            sender: exports.Id,
        }),
        hrmp_cancel_open_request: support_1.sts.enumStruct({
            channelId: exports.HrmpChannelId,
            openRequests: support_1.sts.number(),
        }),
        hrmp_close_channel: support_1.sts.enumStruct({
            channelId: exports.HrmpChannelId,
        }),
        hrmp_init_open_channel: support_1.sts.enumStruct({
            recipient: exports.Id,
            proposedMaxCapacity: support_1.sts.number(),
            proposedMaxMessageSize: support_1.sts.number(),
        }),
        poke_channel_deposits: support_1.sts.enumStruct({
            sender: exports.Id,
            recipient: exports.Id,
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.GrandpaCall = support_1.sts.closedEnum(function () {
    return {
        note_stalled: support_1.sts.enumStruct({
            delay: support_1.sts.number(),
            bestFinalizedBlockNumber: support_1.sts.number(),
        }),
        report_equivocation: support_1.sts.enumStruct({
            equivocationProof: exports.Type_437,
            keyOwnerProof: exports.MembershipProof,
        }),
        report_equivocation_unsigned: support_1.sts.enumStruct({
            equivocationProof: exports.Type_437,
            keyOwnerProof: exports.MembershipProof,
        }),
    }
})
exports.Type_437 = support_1.sts.struct(function () {
    return {
        setId: support_1.sts.bigint(),
        equivocation: exports.Equivocation,
    }
})
exports.Equivocation = support_1.sts.closedEnum(function () {
    return {
        Precommit: exports.Type_443,
        Prevote: exports.Type_439,
    }
})
exports.Type_439 = support_1.sts.struct(function () {
    return {
        roundNumber: support_1.sts.bigint(),
        identity: exports.Public,
        first: support_1.sts.tuple(function () {
            return [exports.Prevote, exports.Signature]
        }),
        second: support_1.sts.tuple(function () {
            return [exports.Prevote, exports.Signature]
        }),
    }
})
exports.Signature = support_1.sts.bytes()
exports.Prevote = support_1.sts.struct(function () {
    return {
        targetHash: exports.H256,
        targetNumber: support_1.sts.number(),
    }
})
exports.Type_443 = support_1.sts.struct(function () {
    return {
        roundNumber: support_1.sts.bigint(),
        identity: exports.Public,
        first: support_1.sts.tuple(function () {
            return [exports.Precommit, exports.Signature]
        }),
        second: support_1.sts.tuple(function () {
            return [exports.Precommit, exports.Signature]
        }),
    }
})
exports.Precommit = support_1.sts.struct(function () {
    return {
        targetHash: exports.H256,
        targetNumber: support_1.sts.number(),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
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
            settings: support_1.sts.option(function () {
                return exports.DispatchSettings
            }),
        }),
        dispatch_and_touch: support_1.sts.enumStruct({
            tankId: exports.MultiAddress,
            ruleSetId: support_1.sts.number(),
            call: exports.Call,
            settings: support_1.sts.option(function () {
                return exports.DispatchSettings
            }),
        }),
        force_batch_add_account: support_1.sts.enumStruct({
            owner: exports.MultiAddress,
            tankId: exports.MultiAddress,
            userIds: support_1.sts.array(function () {
                return exports.MultiAddress
            }),
        }),
        force_create_fuel_tank: support_1.sts.enumStruct({
            owner: exports.MultiAddress,
            descriptor: exports.FuelTankDescriptor,
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
            ruleSet: exports.RuleSetDescriptor,
        }),
        mutate_freeze_state: support_1.sts.enumStruct({
            tankId: exports.MultiAddress,
            ruleSetId: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            isFrozen: support_1.sts.boolean(),
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
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.FellowshipReferendaCall = support_1.sts.closedEnum(function () {
    return {
        cancel: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        kill: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        nudge_referendum: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        one_fewer_deciding: support_1.sts.enumStruct({
            track: support_1.sts.number(),
        }),
        place_decision_deposit: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        refund_decision_deposit: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        refund_submission_deposit: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        set_metadata: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            maybeHash: support_1.sts.option(function () {
                return exports.H256
            }),
        }),
        submit: support_1.sts.enumStruct({
            proposalOrigin: exports.OriginCaller,
            proposal: exports.Bounded,
            enactmentMoment: exports.DispatchTime,
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.FellowshipCollectiveCall = support_1.sts.closedEnum(function () {
    return {
        add_member: support_1.sts.enumStruct({
            who: exports.MultiAddress,
        }),
        cleanup_poll: support_1.sts.enumStruct({
            pollIndex: support_1.sts.number(),
            max: support_1.sts.number(),
        }),
        demote_member: support_1.sts.enumStruct({
            who: exports.MultiAddress,
        }),
        exchange_member: support_1.sts.enumStruct({
            who: exports.MultiAddress,
            newWho: exports.MultiAddress,
        }),
        promote_member: support_1.sts.enumStruct({
            who: exports.MultiAddress,
        }),
        remove_member: support_1.sts.enumStruct({
            who: exports.MultiAddress,
            minRank: support_1.sts.number(),
        }),
        vote: support_1.sts.enumStruct({
            poll: support_1.sts.number(),
            aye: support_1.sts.boolean(),
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.ElectionProviderMultiPhaseCall = support_1.sts.closedEnum(function () {
    return {
        governance_fallback: support_1.sts.enumStruct({
            maybeMaxVoters: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            maybeMaxTargets: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        }),
        set_emergency_election_result: support_1.sts.enumStruct({
            supports: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [exports.AccountId32, exports.Support]
                })
            }),
        }),
        set_minimum_untrusted_score: support_1.sts.enumStruct({
            maybeNextScore: support_1.sts.option(function () {
                return exports.ElectionScore
            }),
        }),
        submit: support_1.sts.enumStruct({
            rawSolution: exports.RawSolution,
        }),
        submit_unsigned: support_1.sts.enumStruct({
            rawSolution: exports.RawSolution,
            witness: exports.SolutionOrSnapshotSize,
        }),
    }
})
exports.SolutionOrSnapshotSize = support_1.sts.struct(function () {
    return {
        voters: support_1.sts.number(),
        targets: support_1.sts.number(),
    }
})
exports.RawSolution = support_1.sts.struct(function () {
    return {
        solution: exports.NposSolution16,
        score: exports.ElectionScore,
        round: support_1.sts.number(),
    }
})
exports.NposSolution16 = support_1.sts.struct(function () {
    return {
        votes1: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.number()]
            })
        }),
        votes2: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.tuple(function () {
                        return [support_1.sts.number(), support_1.sts.number()]
                    }),
                    support_1.sts.number(),
                ]
            })
        }),
        votes3: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return support_1.sts.tuple(function () {
                            return [support_1.sts.number(), support_1.sts.number()]
                        })
                    }),
                    support_1.sts.number(),
                ]
            })
        }),
        votes4: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return support_1.sts.tuple(function () {
                            return [support_1.sts.number(), support_1.sts.number()]
                        })
                    }),
                    support_1.sts.number(),
                ]
            })
        }),
        votes5: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return support_1.sts.tuple(function () {
                            return [support_1.sts.number(), support_1.sts.number()]
                        })
                    }),
                    support_1.sts.number(),
                ]
            })
        }),
        votes6: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return support_1.sts.tuple(function () {
                            return [support_1.sts.number(), support_1.sts.number()]
                        })
                    }),
                    support_1.sts.number(),
                ]
            })
        }),
        votes7: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return support_1.sts.tuple(function () {
                            return [support_1.sts.number(), support_1.sts.number()]
                        })
                    }),
                    support_1.sts.number(),
                ]
            })
        }),
        votes8: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return support_1.sts.tuple(function () {
                            return [support_1.sts.number(), support_1.sts.number()]
                        })
                    }),
                    support_1.sts.number(),
                ]
            })
        }),
        votes9: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return support_1.sts.tuple(function () {
                            return [support_1.sts.number(), support_1.sts.number()]
                        })
                    }),
                    support_1.sts.number(),
                ]
            })
        }),
        votes10: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return support_1.sts.tuple(function () {
                            return [support_1.sts.number(), support_1.sts.number()]
                        })
                    }),
                    support_1.sts.number(),
                ]
            })
        }),
        votes11: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return support_1.sts.tuple(function () {
                            return [support_1.sts.number(), support_1.sts.number()]
                        })
                    }),
                    support_1.sts.number(),
                ]
            })
        }),
        votes12: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return support_1.sts.tuple(function () {
                            return [support_1.sts.number(), support_1.sts.number()]
                        })
                    }),
                    support_1.sts.number(),
                ]
            })
        }),
        votes13: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return support_1.sts.tuple(function () {
                            return [support_1.sts.number(), support_1.sts.number()]
                        })
                    }),
                    support_1.sts.number(),
                ]
            })
        }),
        votes14: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return support_1.sts.tuple(function () {
                            return [support_1.sts.number(), support_1.sts.number()]
                        })
                    }),
                    support_1.sts.number(),
                ]
            })
        }),
        votes15: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return support_1.sts.tuple(function () {
                            return [support_1.sts.number(), support_1.sts.number()]
                        })
                    }),
                    support_1.sts.number(),
                ]
            })
        }),
        votes16: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return support_1.sts.tuple(function () {
                            return [support_1.sts.number(), support_1.sts.number()]
                        })
                    }),
                    support_1.sts.number(),
                ]
            })
        }),
    }
})
exports.Support = support_1.sts.struct(function () {
    return {
        total: support_1.sts.bigint(),
        voters: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [exports.AccountId32, support_1.sts.bigint()]
            })
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.CrowdloanCall = support_1.sts.closedEnum(function () {
    return {
        add_memo: support_1.sts.enumStruct({
            index: exports.Id,
            memo: support_1.sts.bytes(),
        }),
        contribute: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            value: support_1.sts.bigint(),
            signature: support_1.sts.option(function () {
                return exports.MultiSignature
            }),
        }),
        contribute_all: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            signature: support_1.sts.option(function () {
                return exports.MultiSignature
            }),
        }),
        create: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            cap: support_1.sts.bigint(),
            firstPeriod: support_1.sts.number(),
            lastPeriod: support_1.sts.number(),
            end: support_1.sts.number(),
            verifier: support_1.sts.option(function () {
                return exports.MultiSigner
            }),
        }),
        dissolve: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        edit: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            cap: support_1.sts.bigint(),
            firstPeriod: support_1.sts.number(),
            lastPeriod: support_1.sts.number(),
            end: support_1.sts.number(),
            verifier: support_1.sts.option(function () {
                return exports.MultiSigner
            }),
        }),
        poke: support_1.sts.enumStruct({
            index: exports.Id,
        }),
        refund: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        withdraw: support_1.sts.enumStruct({
            who: exports.AccountId32,
            index: support_1.sts.number(),
        }),
    }
})
exports.MultiSigner = support_1.sts.closedEnum(function () {
    return {
        Ecdsa: support_1.sts.bytes(),
        Ed25519: support_1.sts.bytes(),
        Sr25519: support_1.sts.bytes(),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.ConvictionVotingCall = support_1.sts.closedEnum(function () {
    return {
        delegate: support_1.sts.enumStruct({
            class: support_1.sts.number(),
            to: exports.MultiAddress,
            conviction: exports.Conviction,
            balance: support_1.sts.bigint(),
        }),
        remove_other_vote: support_1.sts.enumStruct({
            target: exports.MultiAddress,
            class: support_1.sts.number(),
            index: support_1.sts.number(),
        }),
        remove_vote: support_1.sts.enumStruct({
            class: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            index: support_1.sts.number(),
        }),
        undelegate: support_1.sts.enumStruct({
            class: support_1.sts.number(),
        }),
        unlock: support_1.sts.enumStruct({
            class: support_1.sts.number(),
            target: exports.MultiAddress,
        }),
        vote: support_1.sts.enumStruct({
            pollIndex: support_1.sts.number(),
            vote: exports.AccountVote,
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.ConfigurationCall = support_1.sts.closedEnum(function () {
    return {
        set_approval_voting_params: support_1.sts.enumStruct({
            new: exports.V8ApprovalVotingParams,
        }),
        set_async_backing_params: support_1.sts.enumStruct({
            new: exports.V8AsyncBackingParams,
        }),
        set_bypass_consistency_check: support_1.sts.enumStruct({
            new: support_1.sts.boolean(),
        }),
        set_code_retention_period: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_coretime_cores: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_dispute_period: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_dispute_post_conclusion_acceptance_period: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_executor_params: support_1.sts.enumStruct({
            new: support_1.sts.array(function () {
                return exports.V8ExecutorParam
            }),
        }),
        set_group_rotation_frequency: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_hrmp_channel_max_capacity: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_hrmp_channel_max_message_size: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_hrmp_channel_max_total_size: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_hrmp_max_message_num_per_candidate: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_hrmp_max_parachain_inbound_channels: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_hrmp_max_parachain_outbound_channels: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_hrmp_open_request_ttl: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_hrmp_recipient_deposit: support_1.sts.enumStruct({
            new: support_1.sts.bigint(),
        }),
        set_hrmp_sender_deposit: support_1.sts.enumStruct({
            new: support_1.sts.bigint(),
        }),
        set_max_availability_timeouts: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_max_code_size: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_max_downward_message_size: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_max_head_data_size: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_max_pov_size: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_max_upward_message_num_per_candidate: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_max_upward_message_size: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_max_upward_queue_count: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_max_upward_queue_size: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_max_validators: support_1.sts.enumStruct({
            new: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        }),
        set_max_validators_per_core: support_1.sts.enumStruct({
            new: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        }),
        set_minimum_backing_votes: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_minimum_validation_upgrade_delay: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_n_delay_tranches: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_needed_approvals: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_no_show_slots: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_node_feature: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            value: support_1.sts.boolean(),
        }),
        set_on_demand_base_fee: support_1.sts.enumStruct({
            new: support_1.sts.bigint(),
        }),
        set_on_demand_fee_variability: support_1.sts.enumStruct({
            new: exports.Perbill,
        }),
        set_on_demand_queue_max_size: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_on_demand_target_queue_utilization: support_1.sts.enumStruct({
            new: exports.Perbill,
        }),
        set_on_demand_ttl: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_paras_availability_period: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_pvf_voting_ttl: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_relay_vrf_modulo_samples: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_scheduler_params: support_1.sts.enumStruct({
            new: exports.V8SchedulerParams,
        }),
        set_scheduling_lookahead: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_validation_upgrade_cooldown: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_validation_upgrade_delay: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
        set_zeroth_delay_tranche_width: support_1.sts.enumStruct({
            new: support_1.sts.number(),
        }),
    }
})
exports.V8SchedulerParams = support_1.sts.struct(function () {
    return {
        groupRotationFrequency: support_1.sts.number(),
        parasAvailabilityPeriod: support_1.sts.number(),
        maxValidatorsPerCore: support_1.sts.option(function () {
            return support_1.sts.number()
        }),
        lookahead: support_1.sts.number(),
        numCores: support_1.sts.number(),
        maxAvailabilityTimeouts: support_1.sts.number(),
        onDemandQueueMaxSize: support_1.sts.number(),
        onDemandTargetQueueUtilization: exports.Perbill,
        onDemandFeeVariability: exports.Perbill,
        onDemandBaseFee: support_1.sts.bigint(),
        ttl: support_1.sts.number(),
    }
})
exports.V8ExecutorParam = support_1.sts.closedEnum(function () {
    return {
        MaxMemoryPages: support_1.sts.number(),
        PrecheckingMaxMemory: support_1.sts.bigint(),
        PvfExecTimeout: support_1.sts.tuple(function () {
            return [exports.V8PvfExecKind, support_1.sts.bigint()]
        }),
        PvfPrepTimeout: support_1.sts.tuple(function () {
            return [exports.V8PvfPrepKind, support_1.sts.bigint()]
        }),
        StackLogicalMax: support_1.sts.number(),
        StackNativeMax: support_1.sts.number(),
        WasmExtBulkMemory: support_1.sts.unit(),
    }
})
exports.V8PvfPrepKind = support_1.sts.closedEnum(function () {
    return {
        Precheck: support_1.sts.unit(),
        Prepare: support_1.sts.unit(),
    }
})
exports.V8PvfExecKind = support_1.sts.closedEnum(function () {
    return {
        Approval: support_1.sts.unit(),
        Backing: support_1.sts.unit(),
    }
})
exports.V8AsyncBackingParams = support_1.sts.struct(function () {
    return {
        maxCandidateDepth: support_1.sts.number(),
        allowedAncestryLen: support_1.sts.number(),
    }
})
exports.V8ApprovalVotingParams = support_1.sts.struct(function () {
    return {
        maxApprovalCoalesceCount: support_1.sts.number(),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.BeefyCall = support_1.sts.closedEnum(function () {
    return {
        report_double_voting: support_1.sts.enumStruct({
            equivocationProof: exports.DoubleVotingProof,
            keyOwnerProof: exports.MembershipProof,
        }),
        report_double_voting_unsigned: support_1.sts.enumStruct({
            equivocationProof: exports.DoubleVotingProof,
            keyOwnerProof: exports.MembershipProof,
        }),
        report_fork_voting: support_1.sts.enumStruct({
            equivocationProof: exports.ForkVotingProof,
            keyOwnerProof: exports.MembershipProof,
        }),
        report_fork_voting_unsigned: support_1.sts.enumStruct({
            equivocationProof: exports.ForkVotingProof,
            keyOwnerProof: exports.MembershipProof,
        }),
        report_future_block_voting: support_1.sts.enumStruct({
            equivocationProof: exports.FutureBlockVotingProof,
            keyOwnerProof: exports.MembershipProof,
        }),
        report_future_block_voting_unsigned: support_1.sts.enumStruct({
            equivocationProof: exports.FutureBlockVotingProof,
            keyOwnerProof: exports.MembershipProof,
        }),
        set_new_genesis: support_1.sts.enumStruct({
            delayInBlocks: support_1.sts.number(),
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.BalancesCall = support_1.sts.closedEnum(function () {
    return {
        burn: support_1.sts.enumStruct({
            value: support_1.sts.bigint(),
            keepAlive: support_1.sts.boolean(),
        }),
        force_adjust_total_issuance: support_1.sts.enumStruct({
            direction: exports.AdjustmentDirection,
            delta: support_1.sts.bigint(),
        }),
        force_set_balance: support_1.sts.enumStruct({
            who: exports.MultiAddress,
            newFree: support_1.sts.bigint(),
        }),
        force_transfer: support_1.sts.enumStruct({
            source: exports.MultiAddress,
            dest: exports.MultiAddress,
            value: support_1.sts.bigint(),
        }),
        force_unreserve: support_1.sts.enumStruct({
            who: exports.MultiAddress,
            amount: support_1.sts.bigint(),
        }),
        transfer_all: support_1.sts.enumStruct({
            dest: exports.MultiAddress,
            keepAlive: support_1.sts.boolean(),
        }),
        transfer_allow_death: support_1.sts.enumStruct({
            dest: exports.MultiAddress,
            value: support_1.sts.bigint(),
        }),
        transfer_keep_alive: support_1.sts.enumStruct({
            dest: exports.MultiAddress,
            value: support_1.sts.bigint(),
        }),
        upgrade_accounts: support_1.sts.enumStruct({
            who: support_1.sts.array(function () {
                return exports.AccountId32
            }),
        }),
    }
})
exports.AdjustmentDirection = support_1.sts.closedEnum(function () {
    return {
        Decrease: support_1.sts.unit(),
        Increase: support_1.sts.unit(),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.BabeCall = support_1.sts.closedEnum(function () {
    return {
        plan_config_change: support_1.sts.enumStruct({
            config: exports.NextConfigDescriptor,
        }),
        report_equivocation: support_1.sts.enumStruct({
            equivocationProof: exports.EquivocationProof,
            keyOwnerProof: exports.MembershipProof,
        }),
        report_equivocation_unsigned: support_1.sts.enumStruct({
            equivocationProof: exports.EquivocationProof,
            keyOwnerProof: exports.MembershipProof,
        }),
    }
})
exports.EquivocationProof = support_1.sts.struct(function () {
    return {
        offender: support_1.sts.bytes(),
        slot: exports.Slot,
        firstHeader: exports.Header,
        secondHeader: exports.Header,
    }
})
exports.Slot = support_1.sts.bigint()
exports.NextConfigDescriptor = support_1.sts.closedEnum(function () {
    return {
        V1: support_1.sts.enumStruct({
            c: support_1.sts.tuple(function () {
                return [support_1.sts.bigint(), support_1.sts.bigint()]
            }),
            allowedSlots: exports.AllowedSlots,
        }),
    }
})
exports.AllowedSlots = support_1.sts.closedEnum(function () {
    return {
        PrimaryAndSecondaryPlainSlots: support_1.sts.unit(),
        PrimaryAndSecondaryVRFSlots: support_1.sts.unit(),
        PrimarySlots: support_1.sts.unit(),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.AuctionsCall = support_1.sts.closedEnum(function () {
    return {
        bid: support_1.sts.enumStruct({
            para: support_1.sts.number(),
            auctionIndex: support_1.sts.number(),
            firstSlot: support_1.sts.number(),
            lastSlot: support_1.sts.number(),
            amount: support_1.sts.bigint(),
        }),
        cancel_auction: support_1.sts.unit(),
        new_auction: support_1.sts.enumStruct({
            duration: support_1.sts.number(),
            leasePeriodIndex: support_1.sts.number(),
        }),
    }
})
/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
exports.AssignedSlotsCall = support_1.sts.closedEnum(function () {
    return {
        assign_perm_parachain_slot: support_1.sts.enumStruct({
            id: exports.Id,
        }),
        assign_temp_parachain_slot: support_1.sts.enumStruct({
            id: exports.Id,
            leasePeriodStart: exports.SlotLeasePeriodStart,
        }),
        set_max_permanent_slots: support_1.sts.enumStruct({
            slots: support_1.sts.number(),
        }),
        set_max_temporary_slots: support_1.sts.enumStruct({
            slots: support_1.sts.number(),
        }),
        unassign_parachain_slot: support_1.sts.enumStruct({
            id: exports.Id,
        }),
    }
})
exports.SlotLeasePeriodStart = support_1.sts.closedEnum(function () {
    return {
        Current: support_1.sts.unit(),
        Next: support_1.sts.unit(),
    }
})
exports.AccountVote = support_1.sts.closedEnum(function () {
    return {
        Split: support_1.sts.enumStruct({
            aye: support_1.sts.bigint(),
            nay: support_1.sts.bigint(),
        }),
        SplitAbstain: support_1.sts.enumStruct({
            aye: support_1.sts.bigint(),
            nay: support_1.sts.bigint(),
            abstain: support_1.sts.bigint(),
        }),
        Standard: support_1.sts.enumStruct({
            vote: exports.Vote,
            balance: support_1.sts.bigint(),
        }),
    }
})
exports.Vote = support_1.sts.number()
exports.ProxyType = support_1.sts.closedEnum(function () {
    return {
        Any: support_1.sts.unit(),
        CancelProxy: support_1.sts.unit(),
        FuelTanks: support_1.sts.unit(),
        Governance: support_1.sts.unit(),
        Marketplace: support_1.sts.unit(),
        MultiTokens: support_1.sts.unit(),
        NominationPools: support_1.sts.unit(),
        Staking: support_1.sts.unit(),
        Tokens: support_1.sts.unit(),
    }
})
exports.ProcessMessageError = support_1.sts.closedEnum(function () {
    return {
        BadFormat: support_1.sts.unit(),
        Corrupt: support_1.sts.unit(),
        Overweight: exports.Weight,
        StackLimitReached: support_1.sts.unit(),
        Unsupported: support_1.sts.unit(),
        Yield: support_1.sts.unit(),
    }
})
exports.AggregateMessageOrigin = support_1.sts.closedEnum(function () {
    return {
        Ump: exports.UmpQueueId,
    }
})
exports.UmpQueueId = support_1.sts.closedEnum(function () {
    return {
        Para: exports.Id,
    }
})
exports.Listing = support_1.sts.struct(function () {
    return {
        creator: exports.AccountId32,
        makeAssetId: exports.AssetId,
        takeAssetId: exports.AssetId,
        amount: support_1.sts.bigint(),
        price: support_1.sts.bigint(),
        minReceived: support_1.sts.bigint(),
        feeSide: exports.FeeSide,
        creationBlock: support_1.sts.number(),
        startBlock: support_1.sts.option(function () {
            return support_1.sts.number()
        }),
        whitelistedAccountCount: support_1.sts.option(function () {
            return support_1.sts.number()
        }),
        deposit: exports.Deposit,
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
        Offer: exports.OfferState,
    }
})
exports.OfferState = support_1.sts.struct(function () {
    return {
        counterOfferCount: support_1.sts.number(),
    }
})
exports.AuctionState = support_1.sts.struct(function () {
    return {
        highBid: support_1.sts.option(function () {
            return exports.Bid
        }),
    }
})
exports.FeeSide = support_1.sts.closedEnum(function () {
    return {
        Make: support_1.sts.unit(),
        NoFee: support_1.sts.unit(),
        Take: support_1.sts.unit(),
    }
})
exports.H256 = support_1.sts.bytes()
exports.RootOrSigned = support_1.sts.closedEnum(function () {
    return {
        Root: support_1.sts.unit(),
        Signed: exports.AccountId32,
    }
})
exports.TokenAccount = support_1.sts.struct(function () {
    return {
        balance: support_1.sts.bigint(),
        reservedBalance: support_1.sts.bigint(),
        lockedBalance: support_1.sts.bigint(),
        holds: support_1.sts.array(function () {
            return exports.TokenAccountReserve
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
        deposit: support_1.sts.option(function () {
            return exports.Deposit
        }),
        storageVersion: support_1.sts.number(),
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
exports.TokenAccountReserve = support_1.sts.struct(function () {
    return {
        reason: exports.RuntimeHoldReason,
        balance: support_1.sts.bigint(),
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
        requiresDeposit: support_1.sts.boolean(),
        creationDeposit: exports.AmbiguousDeposit,
        ownerDeposit: support_1.sts.bigint(),
        totalTokenAccountDeposit: support_1.sts.bigint(),
        attributeCount: support_1.sts.number(),
        accountCount: support_1.sts.number(),
        marketBehavior: support_1.sts.option(function () {
            return exports.TokenMarketBehavior
        }),
        listingForbidden: support_1.sts.boolean(),
        metadata: exports.DefaultTokenMetadata,
        infusion: support_1.sts.bigint(),
        anyoneCanInfuse: support_1.sts.boolean(),
        groups: support_1.sts.array(function () {
            return support_1.sts.bigint()
        }),
    }
})
exports.DefaultTokenMetadata = support_1.sts.struct(function () {
    return {
        decimalCount: support_1.sts.number(),
        name: exports.BoundedString,
        symbol: support_1.sts.bytes(),
        foreign: support_1.sts.option(function () {
            return exports.DefaultForeignTokenMetadata
        }),
    }
})
exports.DefaultForeignTokenMetadata = support_1.sts.struct(function () {
    return {
        location: support_1.sts.option(function () {
            return exports.V4Location
        }),
        unitsPerSecond: support_1.sts.option(function () {
            return support_1.sts.bigint()
        }),
    }
})
exports.AmbiguousDeposit = support_1.sts.struct(function () {
    return {
        depositor: support_1.sts.option(function () {
            return exports.AccountId32
        }),
        amount: support_1.sts.bigint(),
    }
})
exports.Collection = support_1.sts.struct(function () {
    return {
        owner: exports.AccountId32,
        policy: exports.DefaultCollectionPolicy,
        tokenCount: support_1.sts.bigint(),
        attributeCount: support_1.sts.number(),
        creationDeposit: exports.Deposit,
        totalDeposit: support_1.sts.bigint(),
        explicitRoyaltyCurrencies: support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [exports.AssetId, support_1.sts.unit()]
            })
        }),
        totalInfusion: support_1.sts.bigint(),
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
        forceCollapsingSupply: support_1.sts.boolean(),
    }
})
exports.RuntimeHoldReason = support_1.sts.closedEnum(function () {
    return {
        FuelTanks: exports.Type_235,
        Marketplace: exports.Type_236,
        MultiTokens: exports.Type_234,
        Preimage: exports.Type_237,
        SafeMode: exports.Type_233,
        StakeExchange: exports.HoldReason,
    }
})
exports.HoldReason = support_1.sts.closedEnum(function () {
    return {
        StakeExchange: support_1.sts.unit(),
    }
})
exports.Type_233 = support_1.sts.closedEnum(function () {
    return {
        EnterOrExtend: support_1.sts.unit(),
    }
})
exports.Type_237 = support_1.sts.closedEnum(function () {
    return {
        Preimage: support_1.sts.unit(),
    }
})
exports.Type_234 = support_1.sts.closedEnum(function () {
    return {
        MultiTokens: support_1.sts.unit(),
    }
})
exports.Type_236 = support_1.sts.closedEnum(function () {
    return {
        Marketplace: support_1.sts.unit(),
    }
})
exports.Type_235 = support_1.sts.closedEnum(function () {
    return {
        FuelTanks: support_1.sts.unit(),
    }
})
exports.AccountId32 = support_1.sts.bytes()
exports.DefaultTokenMutation = support_1.sts.struct(function () {
    return {
        behavior: exports.Type_219,
        listingForbidden: exports.Type_222,
        anyoneCanInfuse: exports.Type_222,
        name: exports.Type_223,
    }
})
exports.Type_223 = support_1.sts.closedEnum(function () {
    return {
        NoMutation: support_1.sts.unit(),
        SomeMutation: exports.BoundedString,
    }
})
exports.Type_222 = support_1.sts.closedEnum(function () {
    return {
        NoMutation: support_1.sts.unit(),
        SomeMutation: support_1.sts.boolean(),
    }
})
exports.Type_219 = support_1.sts.closedEnum(function () {
    return {
        NoMutation: support_1.sts.unit(),
        SomeMutation: support_1.sts.option(function () {
            return exports.TokenMarketBehavior
        }),
    }
})
exports.DefaultCollectionMutation = support_1.sts.struct(function () {
    return {
        owner: support_1.sts.option(function () {
            return exports.AccountId32
        }),
        royalty: exports.Type_211,
        explicitRoyaltyCurrencies: support_1.sts.option(function () {
            return support_1.sts.array(function () {
                return exports.AssetId
            })
        }),
    }
})
exports.Type_211 = support_1.sts.closedEnum(function () {
    return {
        NoMutation: support_1.sts.unit(),
        SomeMutation: support_1.sts.option(function () {
            return exports.DefaultRoyalty
        }),
    }
})
