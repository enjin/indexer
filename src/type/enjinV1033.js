'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.WhitelistEvent =
    exports.V4Location =
    exports.V2AssetId =
    exports.V2AssetInstance =
    exports.V2Fungibility =
    exports.V2MultiAsset =
    exports.V3AssetId =
    exports.V3AssetInstance =
    exports.V3Fungibility =
    exports.V3MultiAsset =
    exports.VersionedAssets =
    exports.V4Outcome =
    exports.V4AssetInstance =
    exports.V4Fungibility =
    exports.V4Asset =
    exports.Weight =
    exports.V2NetworkId =
    exports.WeakBoundedVec =
    exports.V2BodyId =
    exports.V2BodyPart =
    exports.V2Junction =
    exports.V2Junctions =
    exports.V2MultiLocation =
    exports.V3NetworkId =
    exports.V3Junction =
    exports.V3Junctions =
    exports.V3MultiLocation =
    exports.VersionedLocation =
    exports.V3Error =
    exports.V4PalletInfo =
    exports.V4Response =
    exports.V3WeightLimit =
    exports.V4AssetId =
    exports.V4WildFungibility =
    exports.V4WildAsset =
    exports.V4AssetFilter =
    exports.V4Junctions =
    exports.V3MaybeErrorCode =
    exports.V4NetworkId =
    exports.V4QueryResponseInfo =
    exports.V2OriginKind =
    exports.DoubleEncoded =
    exports.V3BodyId =
    exports.V3BodyPart =
    exports.V4Junction =
    exports.V4Instruction =
    exports.XcmPalletEvent =
    exports.Event =
    exports.H256 =
    exports.EventRecord =
        void 0
exports.V6CoreIndex =
    exports.V6GroupIndex =
    exports.ParaInclusionEvent =
    exports.ValidationCodeHash =
    exports.ParasEvent =
    exports.CandidateHash =
    exports.DisputeResult =
    exports.DisputeLocation =
    exports.ParasDisputesEvent =
    exports.PreimageEvent =
    exports.ProxyType =
    exports.ProxyEvent =
    exports.Tally =
    exports.Bounded =
    exports.ReferendaEvent =
    exports.RegistrarEvent =
    exports.ExitReason =
    exports.SafeModeEvent =
    exports.SchedulerEvent =
    exports.SessionEvent =
    exports.Id =
    exports.SlotsEvent =
    exports.LiquidityAccountConfig =
    exports.TokenFilter =
    exports.Offer =
    exports.StakeExchangeEvent =
    exports.Forcing =
    exports.RewardDestination =
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
    exports.Vote =
    exports.AccountVote =
    exports.VoteManagerEvent =
    exports.VoterListEvent =
    exports.Pays =
    exports.PostDispatchInfo =
    exports.ArithmeticError =
    exports.ModuleError =
    exports.TokenError =
    exports.TransactionalError =
    exports.DispatchError =
    exports.DispatchErrorWithPostInfo =
        void 0
exports.AggregateMessageOrigin =
    exports.ProcessMessageError =
    exports.MessageQueueEvent =
    exports.MigrationsEvent =
    exports.H160 =
    exports.AssetIdWithEth =
    exports.CollectionAccount =
    exports.Type_210 =
    exports.DefaultCollectionMutation =
    exports.DefaultMintPolicy =
    exports.DefaultTransferPolicy =
    exports.DefaultMarketPolicy =
    exports.DefaultCollectionPolicy =
    exports.AssetId =
    exports.Collection =
    exports.FreezeType =
    exports.Freeze =
    exports.RootOrSigned =
    exports.Approval =
    exports.Deposit =
    exports.TokenAccount =
    exports.Type_218 =
    exports.Type_221 =
    exports.Type_222 =
    exports.DefaultTokenMutation =
    exports.TokenCap =
    exports.FreezeState =
    exports.AmbiguousDeposit =
    exports.DefaultRoyalty =
    exports.TokenMarketBehavior =
    exports.BoundedString =
    exports.DefaultForeignTokenMetadata =
    exports.DefaultTokenMetadata =
    exports.Token =
    exports.MultiTokensEvent =
    exports.Timepoint =
    exports.MultisigEvent =
    exports.CommissionPayment =
    exports.ShouldMutate =
    exports.CommissionChangeRate =
    exports.BoundedVec =
    exports.PoolMutation =
    exports.PoolState =
    exports.NominationPoolsEvent =
    exports.OffencesEvent =
    exports.V6Public =
    exports.V6Signature =
    exports.V6CandidateDescriptor =
    exports.V6CandidateReceipt =
    exports.HeadData =
        void 0
exports.AccountId32 =
    exports.Perbill =
    exports.Type_722 =
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
    exports.Type_718 =
    exports.FellowshipReferendaEvent =
    exports.DispatchRuleKind =
    exports.Consumption =
    exports.UserAccountManagement =
    exports.Type_288 =
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
    exports.CounterOfferResponse =
    exports.CounterOffer =
    exports.FeeSide =
    exports.AuctionData =
    exports.OfferData =
    exports.ListingData =
    exports.AuctionState =
    exports.OfferState =
    exports.ListingState =
    exports.Listing =
    exports.MarketplaceEvent =
    exports.UmpQueueId =
        void 0
var support_1 = require('./support')
exports.EventRecord = support_1.sts.struct(function () {
    return {
        phase: exports.Type_722,
        event: exports.Event,
        topics: support_1.sts.array(function () {
            return exports.H256
        }),
    }
})
exports.H256 = support_1.sts.bytes()
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
            originKind: exports.V2OriginKind,
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
exports.V2OriginKind = support_1.sts.closedEnum(function () {
    return {
        Native: support_1.sts.unit(),
        SovereignAccount: support_1.sts.unit(),
        Superuser: support_1.sts.unit(),
        Xcm: support_1.sts.unit(),
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
exports.V3WeightLimit = support_1.sts.closedEnum(function () {
    return {
        Limited: exports.Weight,
        Unlimited: support_1.sts.unit(),
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
exports.VersionedLocation = support_1.sts.closedEnum(function () {
    return {
        V2: exports.V2MultiLocation,
        V3: exports.V3MultiLocation,
        V4: exports.V4Location,
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
exports.Weight = support_1.sts.struct(function () {
    return {
        refTime: support_1.sts.bigint(),
        proofSize: support_1.sts.bigint(),
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
exports.V4Location = support_1.sts.struct(function () {
    return {
        parents: support_1.sts.number(),
        interior: exports.V4Junctions,
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
exports.Id = support_1.sts.number()
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
exports.ProxyType = support_1.sts.closedEnum(function () {
    return {
        Any: support_1.sts.unit(),
        Governance: support_1.sts.unit(),
        Tokens: support_1.sts.unit(),
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
exports.CandidateHash = support_1.sts.bytes()
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
exports.ValidationCodeHash = support_1.sts.bytes()
/**
 * The `Event` enum of this pallet
 */
exports.ParaInclusionEvent = support_1.sts.closedEnum(function () {
    return {
        CandidateBacked: support_1.sts.tuple(function () {
            return [exports.V6CandidateReceipt, exports.HeadData, exports.V6CoreIndex, exports.V6GroupIndex]
        }),
        CandidateIncluded: support_1.sts.tuple(function () {
            return [exports.V6CandidateReceipt, exports.HeadData, exports.V6CoreIndex, exports.V6GroupIndex]
        }),
        CandidateTimedOut: support_1.sts.tuple(function () {
            return [exports.V6CandidateReceipt, exports.HeadData, exports.V6CoreIndex]
        }),
        UpwardMessagesReceived: support_1.sts.enumStruct({
            from: exports.Id,
            count: support_1.sts.number(),
        }),
    }
})
exports.V6GroupIndex = support_1.sts.number()
exports.V6CoreIndex = support_1.sts.number()
exports.HeadData = support_1.sts.bytes()
exports.V6CandidateReceipt = support_1.sts.struct(function () {
    return {
        descriptor: exports.V6CandidateDescriptor,
        commitmentsHash: exports.H256,
    }
})
exports.V6CandidateDescriptor = support_1.sts.struct(function () {
    return {
        paraId: exports.Id,
        relayParent: exports.H256,
        collator: exports.V6Public,
        persistedValidationDataHash: exports.H256,
        povHash: exports.H256,
        erasureRoot: exports.H256,
        signature: exports.V6Signature,
        paraHead: exports.H256,
        validationCodeHash: exports.ValidationCodeHash,
    }
})
exports.V6Signature = support_1.sts.bytes()
exports.V6Public = support_1.sts.bytes()
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
        EarlyBirdBonusCalculated: support_1.sts.enumStruct({
            totalAmount: support_1.sts.bigint(),
        }),
        EarlyBirdBonusDistributed: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            amount: support_1.sts.bigint(),
        }),
        EarlyBirdBonusPaid: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            paymentId: support_1.sts.number(),
            totalAccounts: support_1.sts.number(),
        }),
        EarlyBirdBonusPaymentUnlocked: support_1.sts.enumStruct({
            paymentId: support_1.sts.number(),
            nextPaymentBlock: support_1.sts.number(),
        }),
        EarlyBirdSharesCaptured: support_1.sts.enumStruct({
            poolId: support_1.sts.number(),
            totalAccounts: support_1.sts.number(),
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
exports.Timepoint = support_1.sts.struct(function () {
    return {
        height: support_1.sts.number(),
        index: support_1.sts.number(),
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
            accountId: exports.AccountId32,
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
exports.AmbiguousDeposit = support_1.sts.struct(function () {
    return {
        depositor: support_1.sts.option(function () {
            return exports.AccountId32
        }),
        amount: support_1.sts.bigint(),
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
        Supply: support_1.sts.bigint(),
    }
})
exports.DefaultTokenMutation = support_1.sts.struct(function () {
    return {
        behavior: exports.Type_218,
        listingForbidden: exports.Type_221,
        anyoneCanInfuse: exports.Type_221,
        name: exports.Type_222,
    }
})
exports.Type_222 = support_1.sts.closedEnum(function () {
    return {
        NoMutation: support_1.sts.unit(),
        SomeMutation: exports.BoundedString,
    }
})
exports.Type_221 = support_1.sts.closedEnum(function () {
    return {
        NoMutation: support_1.sts.unit(),
        SomeMutation: support_1.sts.boolean(),
    }
})
exports.Type_218 = support_1.sts.closedEnum(function () {
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
        deposit: support_1.sts.option(function () {
            return exports.Deposit
        }),
    }
})
exports.Deposit = support_1.sts.struct(function () {
    return {
        depositor: exports.AccountId32,
        amount: support_1.sts.bigint(),
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
        forceCollapsingSupply: support_1.sts.boolean(),
    }
})
exports.DefaultCollectionMutation = support_1.sts.struct(function () {
    return {
        owner: support_1.sts.option(function () {
            return exports.AccountId32
        }),
        royalty: exports.Type_210,
        explicitRoyaltyCurrencies: support_1.sts.option(function () {
            return support_1.sts.array(function () {
                return exports.AssetId
            })
        }),
    }
})
exports.Type_210 = support_1.sts.closedEnum(function () {
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
exports.AssetIdWithEth = support_1.sts.struct(function () {
    return {
        ethereumCollectionId: support_1.sts.bigint(),
        collectionId: support_1.sts.bigint(),
        tokenId: support_1.sts.bigint(),
    }
})
exports.H160 = support_1.sts.bytes()
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
exports.ProcessMessageError = support_1.sts.closedEnum(function () {
    return {
        BadFormat: support_1.sts.unit(),
        Corrupt: support_1.sts.unit(),
        Overweight: exports.Weight,
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
        MigrationStep: support_1.sts.enumStruct({
            itemsProcessed: support_1.sts.number(),
            phase: support_1.sts.number(),
        }),
        ProtocolFeeSet: support_1.sts.enumStruct({
            protocolFee: exports.Perbill,
        }),
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
exports.CounterOffer = support_1.sts.struct(function () {
    return {
        sellerPrice: support_1.sts.bigint(),
        buyerPrice: support_1.sts.option(function () {
            return support_1.sts.bigint()
        }),
        deposit: exports.Deposit,
    }
})
exports.CounterOfferResponse = support_1.sts.closedEnum(function () {
    return {
        Accept: support_1.sts.unit(),
        Counter: support_1.sts.bigint(),
        Reject: support_1.sts.unit(),
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
        userAccountManagement: exports.Type_288,
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
exports.Type_288 = support_1.sts.closedEnum(function () {
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
            tally: exports.Type_718,
        }),
        ConfirmAborted: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        ConfirmStarted: support_1.sts.enumStruct({
            index: support_1.sts.number(),
        }),
        Confirmed: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            tally: exports.Type_718,
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
            tally: exports.Type_718,
        }),
        DepositSlashed: support_1.sts.enumStruct({
            who: exports.AccountId32,
            amount: support_1.sts.bigint(),
        }),
        Killed: support_1.sts.enumStruct({
            index: support_1.sts.number(),
            tally: exports.Type_718,
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
            tally: exports.Type_718,
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
            tally: exports.Type_718,
        }),
    }
})
exports.Type_718 = support_1.sts.struct(function () {
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
            tally: exports.Type_718,
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
exports.Type_722 = support_1.sts.closedEnum(function () {
    return {
        ApplyExtrinsic: support_1.sts.number(),
        Finalization: support_1.sts.unit(),
        Initialization: support_1.sts.unit(),
    }
})
exports.Perbill = support_1.sts.number()
exports.AccountId32 = support_1.sts.bytes()
