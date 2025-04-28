// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::types::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128',
    flags: 'u128'
  },
  /**
   * Lookup9: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup10: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup15: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup17: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup20: frame_system::EventRecord<enjin_matrix_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup22: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256',
      },
      UpgradeAuthorized: {
        codeHash: 'H256',
        checkVersion: 'bool'
      }
    }
  },
  /**
   * Lookup23: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup24: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup25: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup26: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpArithmeticArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null',
      RootNotAllowed: 'Null'
    }
  },
  /**
   * Lookup27: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup28: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
  },
  /**
   * Lookup29: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup30: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup31: cumulus_pallet_parachain_system::pallet::Event<T>
   **/
  CumulusPalletParachainSystemEvent: {
    _enum: {
      ValidationFunctionStored: 'Null',
      ValidationFunctionApplied: {
        relayChainBlockNum: 'u32',
      },
      ValidationFunctionDiscarded: 'Null',
      DownwardMessagesReceived: {
        count: 'u32',
      },
      DownwardMessagesProcessed: {
        weightUsed: 'SpWeightsWeightV2Weight',
        dmqHead: 'H256',
      },
      UpwardMessageSent: {
        messageHash: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup33: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup34: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      RetrySet: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        period: 'u32',
        retries: 'u8',
      },
      RetryCancelled: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      CallUnavailable: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PeriodicFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      RetryFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PermanentlyOverweight: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup38: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup39: pallet_safe_mode::pallet::Event<T>
   **/
  PalletSafeModeEvent: {
    _enum: {
      Entered: {
        until: 'u32',
      },
      Extended: {
        until: 'u32',
      },
      Exited: {
        reason: 'PalletSafeModeExitReason',
      },
      DepositPlaced: {
        account: 'AccountId32',
        amount: 'u128',
      },
      DepositReleased: {
        account: 'AccountId32',
        amount: 'u128',
      },
      DepositSlashed: {
        account: 'AccountId32',
        amount: 'u128',
      },
      CannotDeposit: 'Null',
      CannotRelease: 'Null'
    }
  },
  /**
   * Lookup40: pallet_safe_mode::pallet::ExitReason
   **/
  PalletSafeModeExitReason: {
    _enum: ['Timeout', 'Force']
  },
  /**
   * Lookup41: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Minted: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Suspended: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Restored: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Upgraded: {
        who: 'AccountId32',
      },
      Issued: {
        amount: 'u128',
      },
      Rescinded: {
        amount: 'u128',
      },
      Locked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Frozen: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Thawed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      TotalIssuanceForced: {
        _alias: {
          new_: 'new',
        },
        old: 'u128',
        new_: 'u128'
      }
    }
  },
  /**
   * Lookup42: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup43: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup44: pallet_democracy::pallet::Event<T>
   **/
  PalletDemocracyEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      Tabled: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      ExternalTabled: 'Null',
      Started: {
        refIndex: 'u32',
        threshold: 'PalletDemocracyVoteThreshold',
      },
      Passed: {
        refIndex: 'u32',
      },
      NotPassed: {
        refIndex: 'u32',
      },
      Cancelled: {
        refIndex: 'u32',
      },
      Delegated: {
        who: 'AccountId32',
        target: 'AccountId32',
      },
      Undelegated: {
        account: 'AccountId32',
      },
      Vetoed: {
        who: 'AccountId32',
        proposalHash: 'H256',
        until: 'u32',
      },
      Blacklisted: {
        proposalHash: 'H256',
      },
      Voted: {
        voter: 'AccountId32',
        refIndex: 'u32',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      Seconded: {
        seconder: 'AccountId32',
        propIndex: 'u32',
      },
      ProposalCanceled: {
        propIndex: 'u32',
      },
      MetadataSet: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataCleared: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataTransferred: {
        _alias: {
          hash_: 'hash',
        },
        prevOwner: 'PalletDemocracyMetadataOwner',
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup45: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup46: pallet_democracy::vote::AccountVote<Balance>
   **/
  PalletDemocracyVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128'
      }
    }
  },
  /**
   * Lookup48: pallet_democracy::types::MetadataOwner
   **/
  PalletDemocracyMetadataOwner: {
    _enum: {
      External: 'Null',
      Proposal: 'u32',
      Referendum: 'u32'
    }
  },
  /**
   * Lookup49: pallet_collective::pallet::Event<T, I>
   **/
  PalletCollectiveEvent: {
    _enum: {
      Proposed: {
        account: 'AccountId32',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'AccountId32',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32'
      }
    }
  },
  /**
   * Lookup51: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32',
      },
      UpdatedInactive: {
        reactivated: 'u128',
        deactivated: 'u128',
      },
      AssetSpendApproved: {
        index: 'u32',
        assetKind: 'Null',
        amount: 'u128',
        beneficiary: 'AccountId32',
        validFrom: 'u32',
        expireAt: 'u32',
      },
      AssetSpendVoided: {
        index: 'u32',
      },
      Paid: {
        index: 'u32',
        paymentId: 'Null',
      },
      PaymentFailed: {
        index: 'u32',
        paymentId: 'Null',
      },
      SpendProcessed: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup52: pallet_membership::pallet::Event<T, I>
   **/
  PalletMembershipEvent: {
    _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
  },
  /**
   * Lookup53: pallet_multisig::pallet::Event<T>
   **/
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: 'AccountId32',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigApproval: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigExecuted: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MultisigCancelled: {
        cancelling: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup54: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup55: pallet_collator_staking::pallet::Event<T>
   **/
  PalletCollatorStakingEvent: {
    _enum: {
      NewInvulnerables: {
        _alias: {
          new_: 'new',
        },
        new_: 'Vec<AccountId32>',
      },
      RoundFinalized: {
        number: 'u32',
      },
      CandidateJoined: {
        accountId: 'AccountId32',
        amount: 'u128',
        rewardsCut: 'Perbill',
      },
      CandidateRemoved: {
        accountId: 'AccountId32',
      },
      Nominated: {
        accountId: 'AccountId32',
        collatorId: 'AccountId32',
        amount: 'u128',
      },
      NominationRemoved: {
        accountId: 'AccountId32',
        collatorId: 'AccountId32',
        amount: 'u128',
      },
      CollatorSelected: {
        accountId: 'AccountId32'
      }
    }
  },
  /**
   * Lookup58: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup59: cumulus_pallet_xcmp_queue::pallet::Event<T>
   **/
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      XcmpMessageSent: {
        messageHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup60: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: {
        outcome: 'StagingXcmV4TraitsOutcome',
      },
      Sent: {
        origin: 'StagingXcmV4Location',
        destination: 'StagingXcmV4Location',
        message: 'StagingXcmV4Xcm',
        messageId: '[u8;32]',
      },
      UnexpectedResponse: {
        origin: 'StagingXcmV4Location',
        queryId: 'u64',
      },
      ResponseReady: {
        queryId: 'u64',
        response: 'StagingXcmV4Response',
      },
      Notified: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyOverweight: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
        actualWeight: 'SpWeightsWeightV2Weight',
        maxBudgetedWeight: 'SpWeightsWeightV2Weight',
      },
      NotifyDispatchError: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyDecodeFailed: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      InvalidResponder: {
        origin: 'StagingXcmV4Location',
        queryId: 'u64',
        expectedLocation: 'Option<StagingXcmV4Location>',
      },
      InvalidResponderVersion: {
        origin: 'StagingXcmV4Location',
        queryId: 'u64',
      },
      ResponseTaken: {
        queryId: 'u64',
      },
      AssetsTrapped: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV4Location',
        assets: 'XcmVersionedAssets',
      },
      VersionChangeNotified: {
        destination: 'StagingXcmV4Location',
        result: 'u32',
        cost: 'StagingXcmV4AssetAssets',
        messageId: '[u8;32]',
      },
      SupportedVersionChanged: {
        location: 'StagingXcmV4Location',
        version: 'u32',
      },
      NotifyTargetSendFail: {
        location: 'StagingXcmV4Location',
        queryId: 'u64',
        error: 'XcmV3TraitsError',
      },
      NotifyTargetMigrationFail: {
        location: 'XcmVersionedLocation',
        queryId: 'u64',
      },
      InvalidQuerierVersion: {
        origin: 'StagingXcmV4Location',
        queryId: 'u64',
      },
      InvalidQuerier: {
        origin: 'StagingXcmV4Location',
        queryId: 'u64',
        expectedQuerier: 'StagingXcmV4Location',
        maybeActualQuerier: 'Option<StagingXcmV4Location>',
      },
      VersionNotifyStarted: {
        destination: 'StagingXcmV4Location',
        cost: 'StagingXcmV4AssetAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyRequested: {
        destination: 'StagingXcmV4Location',
        cost: 'StagingXcmV4AssetAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyUnrequested: {
        destination: 'StagingXcmV4Location',
        cost: 'StagingXcmV4AssetAssets',
        messageId: '[u8;32]',
      },
      FeesPaid: {
        paying: 'StagingXcmV4Location',
        fees: 'StagingXcmV4AssetAssets',
      },
      AssetsClaimed: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV4Location',
        assets: 'XcmVersionedAssets',
      },
      VersionMigrationFinished: {
        version: 'u32'
      }
    }
  },
  /**
   * Lookup61: staging_xcm::v4::traits::Outcome
   **/
  StagingXcmV4TraitsOutcome: {
    _enum: {
      Complete: {
        used: 'SpWeightsWeightV2Weight',
      },
      Incomplete: {
        used: 'SpWeightsWeightV2Weight',
        error: 'XcmV3TraitsError',
      },
      Error: {
        error: 'XcmV3TraitsError'
      }
    }
  },
  /**
   * Lookup62: xcm::v3::traits::Error
   **/
  XcmV3TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      LocationFull: 'Null',
      LocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      ExpectationFalse: 'Null',
      PalletNotFound: 'Null',
      NameMismatch: 'Null',
      VersionIncompatible: 'Null',
      HoldingWouldOverflow: 'Null',
      ExportError: 'Null',
      ReanchorFailed: 'Null',
      NoDeal: 'Null',
      FeesNotMet: 'Null',
      LockError: 'Null',
      NoPermission: 'Null',
      Unanchored: 'Null',
      NotDepositable: 'Null',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'SpWeightsWeightV2Weight',
      Barrier: 'Null',
      WeightNotComputable: 'Null',
      ExceedsStackLimit: 'Null'
    }
  },
  /**
   * Lookup63: staging_xcm::v4::location::Location
   **/
  StagingXcmV4Location: {
    parents: 'u8',
    interior: 'StagingXcmV4Junctions'
  },
  /**
   * Lookup64: staging_xcm::v4::junctions::Junctions
   **/
  StagingXcmV4Junctions: {
    _enum: {
      Here: 'Null',
      X1: '[Lookup66;1]',
      X2: '[Lookup66;2]',
      X3: '[Lookup66;3]',
      X4: '[Lookup66;4]',
      X5: '[Lookup66;5]',
      X6: '[Lookup66;6]',
      X7: '[Lookup66;7]',
      X8: '[Lookup66;8]'
    }
  },
  /**
   * Lookup66: staging_xcm::v4::junction::Junction
   **/
  StagingXcmV4Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<StagingXcmV4JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<StagingXcmV4JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<StagingXcmV4JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV3JunctionBodyId',
        part: 'XcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'StagingXcmV4JunctionNetworkId'
    }
  },
  /**
   * Lookup69: staging_xcm::v4::junction::NetworkId
   **/
  StagingXcmV4JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null',
      PolkadotBulletin: 'Null'
    }
  },
  /**
   * Lookup72: xcm::v3::junction::BodyId
   **/
  XcmV3JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Moniker: '[u8;4]',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup73: xcm::v3::junction::BodyPart
   **/
  XcmV3JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup81: staging_xcm::v4::Xcm<Call>
   **/
  StagingXcmV4Xcm: 'Vec<StagingXcmV4Instruction>',
  /**
   * Lookup83: staging_xcm::v4::Instruction<Call>
   **/
  StagingXcmV4Instruction: {
    _enum: {
      WithdrawAsset: 'StagingXcmV4AssetAssets',
      ReserveAssetDeposited: 'StagingXcmV4AssetAssets',
      ReceiveTeleportedAsset: 'StagingXcmV4AssetAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'StagingXcmV4Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<StagingXcmV4Location>',
      },
      TransferAsset: {
        assets: 'StagingXcmV4AssetAssets',
        beneficiary: 'StagingXcmV4Location',
      },
      TransferReserveAsset: {
        assets: 'StagingXcmV4AssetAssets',
        dest: 'StagingXcmV4Location',
        xcm: 'StagingXcmV4Xcm',
      },
      Transact: {
        originKind: 'XcmV3OriginKind',
        requireWeightAtMost: 'SpWeightsWeightV2Weight',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'StagingXcmV4Junctions',
      ReportError: 'StagingXcmV4QueryResponseInfo',
      DepositAsset: {
        assets: 'StagingXcmV4AssetAssetFilter',
        beneficiary: 'StagingXcmV4Location',
      },
      DepositReserveAsset: {
        assets: 'StagingXcmV4AssetAssetFilter',
        dest: 'StagingXcmV4Location',
        xcm: 'StagingXcmV4Xcm',
      },
      ExchangeAsset: {
        give: 'StagingXcmV4AssetAssetFilter',
        want: 'StagingXcmV4AssetAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'StagingXcmV4AssetAssetFilter',
        reserve: 'StagingXcmV4Location',
        xcm: 'StagingXcmV4Xcm',
      },
      InitiateTeleport: {
        assets: 'StagingXcmV4AssetAssetFilter',
        dest: 'StagingXcmV4Location',
        xcm: 'StagingXcmV4Xcm',
      },
      ReportHolding: {
        responseInfo: 'StagingXcmV4QueryResponseInfo',
        assets: 'StagingXcmV4AssetAssetFilter',
      },
      BuyExecution: {
        fees: 'StagingXcmV4Asset',
        weightLimit: 'XcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'StagingXcmV4Xcm',
      SetAppendix: 'StagingXcmV4Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'StagingXcmV4AssetAssets',
        ticket: 'StagingXcmV4Location',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'StagingXcmV4AssetAssets',
      ExpectAsset: 'StagingXcmV4AssetAssets',
      ExpectOrigin: 'Option<StagingXcmV4Location>',
      ExpectError: 'Option<(u32,XcmV3TraitsError)>',
      ExpectTransactStatus: 'XcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'StagingXcmV4QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'StagingXcmV4QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'StagingXcmV4Junction',
      ExportMessage: {
        network: 'StagingXcmV4JunctionNetworkId',
        destination: 'StagingXcmV4Junctions',
        xcm: 'StagingXcmV4Xcm',
      },
      LockAsset: {
        asset: 'StagingXcmV4Asset',
        unlocker: 'StagingXcmV4Location',
      },
      UnlockAsset: {
        asset: 'StagingXcmV4Asset',
        target: 'StagingXcmV4Location',
      },
      NoteUnlockable: {
        asset: 'StagingXcmV4Asset',
        owner: 'StagingXcmV4Location',
      },
      RequestUnlock: {
        asset: 'StagingXcmV4Asset',
        locker: 'StagingXcmV4Location',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'StagingXcmV4Location',
      UnpaidExecution: {
        weightLimit: 'XcmV3WeightLimit',
        checkOrigin: 'Option<StagingXcmV4Location>'
      }
    }
  },
  /**
   * Lookup84: staging_xcm::v4::asset::Assets
   **/
  StagingXcmV4AssetAssets: 'Vec<StagingXcmV4Asset>',
  /**
   * Lookup86: staging_xcm::v4::asset::Asset
   **/
  StagingXcmV4Asset: {
    id: 'StagingXcmV4AssetAssetId',
    fun: 'StagingXcmV4AssetFungibility'
  },
  /**
   * Lookup87: staging_xcm::v4::asset::AssetId
   **/
  StagingXcmV4AssetAssetId: 'StagingXcmV4Location',
  /**
   * Lookup88: staging_xcm::v4::asset::Fungibility
   **/
  StagingXcmV4AssetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'StagingXcmV4AssetAssetInstance'
    }
  },
  /**
   * Lookup89: staging_xcm::v4::asset::AssetInstance
   **/
  StagingXcmV4AssetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup92: staging_xcm::v4::Response
   **/
  StagingXcmV4Response: {
    _enum: {
      Null: 'Null',
      Assets: 'StagingXcmV4AssetAssets',
      ExecutionResult: 'Option<(u32,XcmV3TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<StagingXcmV4PalletInfo>',
      DispatchResult: 'XcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup96: staging_xcm::v4::PalletInfo
   **/
  StagingXcmV4PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup99: xcm::v3::MaybeErrorCode
   **/
  XcmV3MaybeErrorCode: {
    _enum: {
      Success: 'Null',
      Error: 'Bytes',
      TruncatedError: 'Bytes'
    }
  },
  /**
   * Lookup102: xcm::v3::OriginKind
   **/
  XcmV3OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup103: xcm::double_encoded::DoubleEncoded<T>
   **/
  XcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup104: staging_xcm::v4::QueryResponseInfo
   **/
  StagingXcmV4QueryResponseInfo: {
    destination: 'StagingXcmV4Location',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup105: staging_xcm::v4::asset::AssetFilter
   **/
  StagingXcmV4AssetAssetFilter: {
    _enum: {
      Definite: 'StagingXcmV4AssetAssets',
      Wild: 'StagingXcmV4AssetWildAsset'
    }
  },
  /**
   * Lookup106: staging_xcm::v4::asset::WildAsset
   **/
  StagingXcmV4AssetWildAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'StagingXcmV4AssetAssetId',
        fun: 'StagingXcmV4AssetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'StagingXcmV4AssetAssetId',
        fun: 'StagingXcmV4AssetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup107: staging_xcm::v4::asset::WildFungibility
   **/
  StagingXcmV4AssetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup108: xcm::v3::WeightLimit
   **/
  XcmV3WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'SpWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup109: xcm::VersionedAssets
   **/
  XcmVersionedAssets: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiassetMultiAssets',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetMultiAssets',
      V4: 'StagingXcmV4AssetAssets'
    }
  },
  /**
   * Lookup110: xcm::v2::multiasset::MultiAssets
   **/
  XcmV2MultiassetMultiAssets: 'Vec<XcmV2MultiAsset>',
  /**
   * Lookup112: xcm::v2::multiasset::MultiAsset
   **/
  XcmV2MultiAsset: {
    id: 'XcmV2MultiassetAssetId',
    fun: 'XcmV2MultiassetFungibility'
  },
  /**
   * Lookup113: xcm::v2::multiasset::AssetId
   **/
  XcmV2MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV2MultiLocation',
      Abstract: 'Bytes'
    }
  },
  /**
   * Lookup114: xcm::v2::multilocation::MultiLocation
   **/
  XcmV2MultiLocation: {
    parents: 'u8',
    interior: 'XcmV2MultilocationJunctions'
  },
  /**
   * Lookup115: xcm::v2::multilocation::Junctions
   **/
  XcmV2MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV2Junction',
      X2: '(XcmV2Junction,XcmV2Junction)',
      X3: '(XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X4: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X5: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X6: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X7: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X8: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)'
    }
  },
  /**
   * Lookup116: xcm::v2::junction::Junction
   **/
  XcmV2Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV2NetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV2NetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV2NetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV2BodyId',
        part: 'XcmV2BodyPart'
      }
    }
  },
  /**
   * Lookup117: xcm::v2::NetworkId
   **/
  XcmV2NetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  /**
   * Lookup119: xcm::v2::BodyId
   **/
  XcmV2BodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup120: xcm::v2::BodyPart
   **/
  XcmV2BodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup121: xcm::v2::multiasset::Fungibility
   **/
  XcmV2MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV2MultiassetAssetInstance'
    }
  },
  /**
   * Lookup122: xcm::v2::multiasset::AssetInstance
   **/
  XcmV2MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]',
      Blob: 'Bytes'
    }
  },
  /**
   * Lookup123: xcm::v3::multiasset::MultiAssets
   **/
  XcmV3MultiassetMultiAssets: 'Vec<XcmV3MultiAsset>',
  /**
   * Lookup125: xcm::v3::multiasset::MultiAsset
   **/
  XcmV3MultiAsset: {
    id: 'XcmV3MultiassetAssetId',
    fun: 'XcmV3MultiassetFungibility'
  },
  /**
   * Lookup126: xcm::v3::multiasset::AssetId
   **/
  XcmV3MultiassetAssetId: {
    _enum: {
      Concrete: 'StagingXcmV3MultiLocation',
      Abstract: '[u8;32]'
    }
  },
  /**
   * Lookup127: staging_xcm::v3::multilocation::MultiLocation
   **/
  StagingXcmV3MultiLocation: {
    parents: 'u8',
    interior: 'XcmV3Junctions'
  },
  /**
   * Lookup128: xcm::v3::junctions::Junctions
   **/
  XcmV3Junctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV3Junction',
      X2: '(XcmV3Junction,XcmV3Junction)',
      X3: '(XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X4: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X5: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X6: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X7: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X8: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)'
    }
  },
  /**
   * Lookup129: xcm::v3::junction::Junction
   **/
  XcmV3Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<XcmV3JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<XcmV3JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<XcmV3JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV3JunctionBodyId',
        part: 'XcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'XcmV3JunctionNetworkId'
    }
  },
  /**
   * Lookup131: xcm::v3::junction::NetworkId
   **/
  XcmV3JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null',
      PolkadotBulletin: 'Null'
    }
  },
  /**
   * Lookup132: xcm::v3::multiasset::Fungibility
   **/
  XcmV3MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV3MultiassetAssetInstance'
    }
  },
  /**
   * Lookup133: xcm::v3::multiasset::AssetInstance
   **/
  XcmV3MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup134: xcm::VersionedLocation
   **/
  XcmVersionedLocation: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiLocation',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiLocation',
      V4: 'StagingXcmV4Location'
    }
  },
  /**
   * Lookup135: cumulus_pallet_xcm::pallet::Event<T>
   **/
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: '[u8;32]',
      UnsupportedVersion: '[u8;32]',
      ExecutedDownward: '([u8;32],StagingXcmV4TraitsOutcome)'
    }
  },
  /**
   * Lookup136: cumulus_pallet_dmp_queue::pallet::Event<T>
   **/
  CumulusPalletDmpQueueEvent: {
    _enum: {
      StartedExport: 'Null',
      Exported: {
        page: 'u32',
      },
      ExportFailed: {
        page: 'u32',
      },
      CompletedExport: 'Null',
      StartedOverweightExport: 'Null',
      ExportedOverweight: {
        index: 'u64',
      },
      ExportOverweightFailed: {
        index: 'u64',
      },
      CompletedOverweightExport: 'Null',
      StartedCleanup: 'Null',
      CleanedSome: {
        keysRemoved: 'u32',
      },
      Completed: {
        error: 'bool'
      }
    }
  },
  /**
   * Lookup137: orml_xcm::module::Event<T>
   **/
  OrmlXcmModuleEvent: {
    _enum: {
      Sent: {
        to: 'StagingXcmV4Location',
        message: 'StagingXcmV4Xcm'
      }
    }
  },
  /**
   * Lookup138: matrix_pallet_xcm::pallet::Event<T>
   **/
  MatrixPalletXcmEvent: {
    _enum: {
      MinimumWeightUpdated: 'MatrixPalletXcmMinimumWeightFeePair',
      XcmTransferFailed: 'SpRuntimeDispatchError'
    }
  },
  /**
   * Lookup139: matrix_pallet_xcm::types::MinimumWeightFeePair<sp_weights::weight_v2::Weight, Balance>
   **/
  MatrixPalletXcmMinimumWeightFeePair: {
    minimumWeight: 'SpWeightsWeightV2Weight',
    fee: 'Compact<u128>'
  },
  /**
   * Lookup140: orml_unknown_tokens::module::Event
   **/
  OrmlUnknownTokensModuleEvent: {
    _enum: {
      Deposited: {
        asset: 'StagingXcmV4Asset',
        who: 'StagingXcmV4Location',
      },
      Withdrawn: {
        asset: 'StagingXcmV4Asset',
        who: 'StagingXcmV4Location'
      }
    }
  },
  /**
   * Lookup141: orml_xtokens::module::Event<T>
   **/
  OrmlXtokensModuleEvent: {
    _enum: {
      TransferredAssets: {
        sender: 'AccountId32',
        assets: 'StagingXcmV4AssetAssets',
        fee: 'StagingXcmV4Asset',
        dest: 'StagingXcmV4Location'
      }
    }
  },
  /**
   * Lookup142: pallet_message_queue::pallet::Event<T>
   **/
  PalletMessageQueueEvent: {
    _enum: {
      ProcessingFailed: {
        id: 'H256',
        origin: 'CumulusPrimitivesCoreAggregateMessageOrigin',
        error: 'FrameSupportMessagesProcessMessageError',
      },
      Processed: {
        id: 'H256',
        origin: 'CumulusPrimitivesCoreAggregateMessageOrigin',
        weightUsed: 'SpWeightsWeightV2Weight',
        success: 'bool',
      },
      OverweightEnqueued: {
        id: '[u8;32]',
        origin: 'CumulusPrimitivesCoreAggregateMessageOrigin',
        pageIndex: 'u32',
        messageIndex: 'u32',
      },
      PageReaped: {
        origin: 'CumulusPrimitivesCoreAggregateMessageOrigin',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup143: cumulus_primitives_core::AggregateMessageOrigin
   **/
  CumulusPrimitivesCoreAggregateMessageOrigin: {
    _enum: {
      Here: 'Null',
      Parent: 'Null',
      Sibling: 'u32'
    }
  },
  /**
   * Lookup145: frame_support::traits::messages::ProcessMessageError
   **/
  FrameSupportMessagesProcessMessageError: {
    _enum: {
      BadFormat: 'Null',
      Corrupt: 'Null',
      Unsupported: 'Null',
      Overweight: 'SpWeightsWeightV2Weight',
      Yield: 'Null',
      StackLimitReached: 'Null'
    }
  },
  /**
   * Lookup146: pallet_bounties::pallet::Event<T, I>
   **/
  PalletBountiesEvent: {
    _enum: {
      BountyProposed: {
        index: 'u32',
      },
      BountyRejected: {
        index: 'u32',
        bond: 'u128',
      },
      BountyBecameActive: {
        index: 'u32',
      },
      BountyAwarded: {
        index: 'u32',
        beneficiary: 'AccountId32',
      },
      BountyClaimed: {
        index: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      BountyCanceled: {
        index: 'u32',
      },
      BountyExtended: {
        index: 'u32',
      },
      BountyApproved: {
        index: 'u32',
      },
      CuratorProposed: {
        bountyId: 'u32',
        curator: 'AccountId32',
      },
      CuratorUnassigned: {
        bountyId: 'u32',
      },
      CuratorAccepted: {
        bountyId: 'u32',
        curator: 'AccountId32'
      }
    }
  },
  /**
   * Lookup147: pallet_multi_tokens::pallet::Event<T>
   **/
  PalletMultiTokensEvent: {
    _enum: {
      CollectionCreated: {
        collectionId: 'u128',
        owner: 'AccountId32',
      },
      CollectionDestroyed: {
        collectionId: 'u128',
        caller: 'AccountId32',
      },
      CollectionMutated: {
        collectionId: 'u128',
        mutation: 'EpMultiTokensCollectionDefaultCollectionMutation',
      },
      Minted: {
        collectionId: 'u128',
        tokenId: 'u128',
        issuer: 'EpMultiTokensRootOrSigned',
        recipient: 'AccountId32',
        amount: 'u128',
      },
      TokenCreated: {
        collectionId: 'u128',
        tokenId: 'u128',
        issuer: 'EpMultiTokensRootOrSigned',
        initialSupply: 'u128',
      },
      TokenMutated: {
        collectionId: 'u128',
        tokenId: 'u128',
        mutation: 'EpMultiTokensTokenDefaultTokenMutation',
      },
      Burned: {
        collectionId: 'u128',
        tokenId: 'u128',
        accountId: 'AccountId32',
        amount: 'u128',
      },
      TokenDestroyed: {
        collectionId: 'u128',
        tokenId: 'u128',
        caller: 'AccountId32',
      },
      Transferred: {
        collectionId: 'u128',
        tokenId: 'u128',
        operator: 'AccountId32',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Frozen: 'EpMultiTokensFreeze',
      Thawed: 'EpMultiTokensFreeze',
      AttributeSet: {
        collectionId: 'u128',
        tokenId: 'Option<u128>',
        key: 'Bytes',
        value: 'Bytes',
      },
      AttributeRemoved: {
        collectionId: 'u128',
        tokenId: 'Option<u128>',
        key: 'Bytes',
      },
      Approved: {
        collectionId: 'u128',
        tokenId: 'Option<u128>',
        owner: 'AccountId32',
        operator: 'AccountId32',
        amount: 'Option<u128>',
        expiration: 'Option<u32>',
      },
      Unapproved: {
        collectionId: 'u128',
        tokenId: 'Option<u128>',
        owner: 'AccountId32',
        operator: 'AccountId32',
      },
      CollectionAccountCreated: {
        collectionId: 'u128',
        accountId: 'AccountId32',
      },
      TokenAccountCreated: {
        collectionId: 'u128',
        tokenId: 'u128',
        accountId: 'AccountId32',
        balance: 'u128',
      },
      CollectionAccountDestroyed: {
        collectionId: 'u128',
        accountId: 'AccountId32',
      },
      TokenAccountDestroyed: {
        collectionId: 'u128',
        tokenId: 'u128',
        accountId: 'AccountId32',
      },
      TokenAccountDepositUpdated: {
        collectionId: 'u128',
        tokenId: 'u128',
        depositor: 'AccountId32',
        deltaAccountCount: 'i32',
      },
      Reserved: {
        collectionId: 'u128',
        tokenId: 'u128',
        accountId: 'AccountId32',
        amount: 'u128',
        reserveId: 'EnjinMatrixRuntimeRuntimeHoldReason',
      },
      Unreserved: {
        collectionId: 'u128',
        tokenId: 'u128',
        accountId: 'AccountId32',
        amount: 'u128',
        reserveId: 'EnjinMatrixRuntimeRuntimeHoldReason',
      },
      MovedReserves: {
        collectionId: 'u128',
        tokenId: 'u128',
        source: 'AccountId32',
        destination: 'AccountId32',
        amount: 'u128',
        reserveId: 'EnjinMatrixRuntimeRuntimeHoldReason',
      },
      ReserveRepatriated: {
        collectionId: 'u128',
        tokenId: 'u128',
        source: 'AccountId32',
        destination: 'AccountId32',
        amount: 'u128',
        reserveId: 'EnjinMatrixRuntimeRuntimeHoldReason',
      },
      BalanceSet: {
        collectionId: 'u128',
        tokenId: 'u128',
        accountId: 'AccountId32',
        balance: 'u128',
        reservedBalance: 'u128',
      },
      Withdraw: {
        collectionId: 'u128',
        tokenId: 'u128',
        accountId: 'AccountId32',
        amount: 'u128',
      },
      Deposit: {
        collectionId: 'u128',
        tokenId: 'u128',
        accountId: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        collectionId: 'u128',
        tokenId: 'u128',
        accountId: 'AccountId32',
        amount: 'u128',
      },
      CollectionUpdated: {
        collectionId: 'u128',
        value: 'Option<EpMultiTokensCollection>',
      },
      TokenUpdated: {
        collectionId: 'u128',
        tokenId: 'u128',
        value: 'Option<EpMultiTokensToken>',
      },
      NextCollectionIdUpdated: {
        collectionId: 'u128',
      },
      CollectionAccountUpdated: {
        collectionId: 'u128',
        accountId: 'AccountId32',
        value: 'Option<PalletMultiTokensFeaturesCollectionTypesCollectionAccount>',
      },
      TokenAccountUpdated: {
        collectionId: 'u128',
        tokenId: 'u128',
        accountId: 'AccountId32',
        value: 'Option<PalletMultiTokensFeaturesTokenTypesTokenAccount>',
      },
      ClaimedCollections: {
        accountId: 'AccountId32',
        ethereumAddress: 'H160',
        collectionIds: 'Vec<u128>',
      },
      ClaimedTokens: {
        accountId: 'AccountId32',
        ethereumAddress: 'H160',
        assetIds: 'Vec<PalletMultiTokensFeaturesClaimAssetIdWithEth>',
        moreTokensRemain: 'bool',
      },
      ClaimTokensInitiated: {
        accountId: 'AccountId32',
        ethereumAddress: 'H160',
      },
      ClaimTokensCompleted: {
        destination: 'AccountId32',
        ethereumAddress: 'H160',
      },
      CollectionTransferred: {
        collectionId: 'u128',
        newOwner: 'AccountId32',
      },
      CollectionTransferCancelled: {
        collectionId: 'u128',
      },
      Infused: {
        collectionId: 'u128',
        tokenId: 'u128',
        accountId: 'EpMultiTokensRootOrSigned',
        amount: 'u128',
      },
      MigrationStep: {
        itemsProcessed: 'u32',
        phase: 'u8',
      },
      CollectionDepositRecalculationInProgress: {
        collectionId: 'u128',
        processedTokens: 'u32',
        processedAttributes: 'u32',
      },
      CollectionDepositUpdateCompleted: {
        collectionId: 'u128',
      },
      TokenAccountUpgraded: {
        collectionId: 'u128',
        tokenId: 'u128',
        accountId: 'AccountId32',
        storageVersion: 'u8',
      },
      TokenUpgraded: {
        collectionId: 'u128',
        tokenId: 'u128',
        storageVersion: 'u8',
      },
      CollectionUpgraded: {
        collectionId: 'u128',
        storageVersion: 'u8',
      },
      CollectionAccountApprovalsUpdated: {
        collectionId: 'u128',
        accountId: 'AccountId32',
        oldApprovals: 'Vec<(AccountId32,Option<u32>)>',
      },
      CollectionAccountApprovalsMismatch: {
        collectionId: 'u128',
        accountId: 'AccountId32',
      },
      TokenGroupCreated: {
        collectionId: 'u128',
        tokenGroupId: 'u128',
      },
      TokenGroupDestroyed: {
        tokenGroupId: 'u128',
      },
      TokenGroupAdded: {
        collectionId: 'u128',
        tokenId: 'u128',
        tokenGroupId: 'u128',
      },
      TokenGroupRemoved: {
        collectionId: 'u128',
        tokenId: 'u128',
        tokenGroupId: 'u128',
      },
      TokenGroupsUpdated: {
        collectionId: 'u128',
        tokenId: 'u128',
        tokenGroups: 'Vec<u128>',
      },
      TokenGroupAttributeSet: {
        tokenGroupId: 'u128',
        key: 'Bytes',
        value: 'Bytes',
      },
      TokenGroupAttributeRemoved: {
        tokenGroupId: 'u128',
        key: 'Bytes'
      }
    }
  },
  /**
   * Lookup148: ep_multi_tokens::collection::DefaultCollectionMutation<sp_core::crypto::AccountId32, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32, ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries>, bounded_collections::bounded_vec::BoundedVec<ep_multi_tokens::token::AssetId<CollectionId, TokenId>, S>>
   **/
  EpMultiTokensCollectionDefaultCollectionMutation: {
    owner: 'Option<AccountId32>',
    royalty: {
      _enum: {
        NoMutation: 'Null',
        SomeMutation: 'Option<EpMultiTokensPolicyMarketDefaultRoyalty>'
      }
    },
    explicitRoyaltyCurrencies: 'Option<Vec<EpMultiTokensTokenAssetId>>'
  },
  /**
   * Lookup149: ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32, ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries>
   **/
  EpMultiTokensPolicyMarketDefaultRoyalty: {
    beneficiaries: 'Vec<EpMultiTokensPolicyMarketDefaultRoyaltyInfo>'
  },
  /**
   * Lookup150: ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries
   **/
  EpMultiTokensFrameParametersMultiTokensMaxRoyaltyBeneficiaries: 'Null',
  /**
   * Lookup152: ep_multi_tokens::policy::market::DefaultRoyaltyInfo<sp_core::crypto::AccountId32>
   **/
  EpMultiTokensPolicyMarketDefaultRoyaltyInfo: {
    beneficiary: 'AccountId32',
    percentage: 'Compact<Perbill>'
  },
  /**
   * Lookup156: ep_multi_tokens::token::AssetId<CollectionId, TokenId>
   **/
  EpMultiTokensTokenAssetId: {
    collectionId: 'Compact<u128>',
    tokenId: 'Compact<u128>'
  },
  /**
   * Lookup162: ep_multi_tokens::types::RootOrSigned<sp_core::crypto::AccountId32>
   **/
  EpMultiTokensRootOrSigned: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32'
    }
  },
  /**
   * Lookup163: ep_multi_tokens::token::DefaultTokenMutation<ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32, ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>>
   **/
  EpMultiTokensTokenDefaultTokenMutation: {
    behavior: {
      _enum: {
        NoMutation: 'Null',
        SomeMutation: 'Option<EpMultiTokensTokenTokenMarketBehavior>'
      }
    },
    listingForbidden: 'EpMultiTokensShouldMutateBool',
    anyoneCanInfuse: 'EpMultiTokensShouldMutateBool',
    name: 'EpMultiTokensShouldMutateBoundedString'
  },
  /**
   * Lookup165: enjin_matrix_runtime::ForeignTokenNameLength
   **/
  EnjinMatrixRuntimeForeignTokenNameLength: 'Null',
  /**
   * Lookup169: ep_multi_tokens::token::TokenMarketBehavior<ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32, ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries>>
   **/
  EpMultiTokensTokenTokenMarketBehavior: {
    _enum: {
      HasRoyalty: 'EpMultiTokensPolicyMarketDefaultRoyalty',
      IsCurrency: 'Null'
    }
  },
  /**
   * Lookup170: ep_multi_tokens::types::ShouldMutate<T>
   **/
  EpMultiTokensShouldMutateBool: {
    _enum: {
      NoMutation: 'Null',
      SomeMutation: 'bool'
    }
  },
  /**
   * Lookup171: ep_multi_tokens::types::ShouldMutate<ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>>
   **/
  EpMultiTokensShouldMutateBoundedString: {
    _enum: {
      NoMutation: 'Null',
      SomeMutation: 'Bytes'
    }
  },
  /**
   * Lookup172: ep_multi_tokens::types::Freeze<sp_core::crypto::AccountId32, CollectionId, TokenId>
   **/
  EpMultiTokensFreeze: {
    collectionId: 'Compact<u128>',
    freezeType: 'EpMultiTokensFreezeType'
  },
  /**
   * Lookup173: ep_multi_tokens::types::FreezeType<sp_core::crypto::AccountId32, TokenId>
   **/
  EpMultiTokensFreezeType: {
    _enum: {
      Collection: 'Null',
      Token: {
        tokenId: 'u128',
        freezeState: 'Option<EpMultiTokensTokenFreezeState>',
      },
      CollectionAccount: 'AccountId32',
      TokenAccount: {
        tokenId: 'Compact<u128>',
        accountId: 'AccountId32'
      }
    }
  },
  /**
   * Lookup175: ep_multi_tokens::token::FreezeState
   **/
  EpMultiTokensTokenFreezeState: {
    _enum: ['Permanent', 'Temporary', 'Never']
  },
  /**
   * Lookup181: enjin_matrix_runtime::RuntimeHoldReason
   **/
  EnjinMatrixRuntimeRuntimeHoldReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      Preimage: 'PalletPreimageHoldReason',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      CollatorStaking: 'PalletCollatorStakingHoldReason',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      MultiTokens: 'PalletMultiTokensHoldReason',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      Marketplace: 'PalletMarketplaceHoldReason',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      FuelTanks: 'PalletFuelTanksHoldReason',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      SafeMode: 'PalletSafeModeHoldReason'
    }
  },
  /**
   * Lookup182: pallet_preimage::pallet::HoldReason
   **/
  PalletPreimageHoldReason: {
    _enum: ['Preimage']
  },
  /**
   * Lookup183: pallet_safe_mode::pallet::HoldReason
   **/
  PalletSafeModeHoldReason: {
    _enum: ['EnterOrExtend']
  },
  /**
   * Lookup184: pallet_collator_staking::pallet::HoldReason
   **/
  PalletCollatorStakingHoldReason: {
    _enum: ['CollatorStaking']
  },
  /**
   * Lookup185: pallet_multi_tokens::pallet::HoldReason
   **/
  PalletMultiTokensHoldReason: {
    _enum: ['MultiTokens']
  },
  /**
   * Lookup186: pallet_fuel_tanks::pallet::HoldReason
   **/
  PalletFuelTanksHoldReason: {
    _enum: ['FuelTanks']
  },
  /**
   * Lookup187: pallet_marketplace::pallet::HoldReason
   **/
  PalletMarketplaceHoldReason: {
    _enum: ['Marketplace']
  },
  /**
   * Lookup189: ep_multi_tokens::collection::Collection<sp_core::crypto::AccountId32, Balance, ep_multi_tokens::policy::DefaultCollectionPolicy<TokenBalance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32, ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries>>, bounded_collections::bounded_btree_map::BoundedBTreeMap<ep_multi_tokens::token::AssetId<CollectionId, TokenId>, V, S>>
   **/
  EpMultiTokensCollection: {
    owner: 'AccountId32',
    policy: 'EpMultiTokensPolicyDefaultCollectionPolicy',
    tokenCount: 'Compact<u64>',
    attributeCount: 'Compact<u32>',
    creationDeposit: 'EpCoreFrameTypesDeposit',
    totalDeposit: 'Compact<u128>',
    explicitRoyaltyCurrencies: 'BTreeMap<EpMultiTokensTokenAssetId, Null>',
    totalInfusion: 'Compact<u128>',
    tokenGroupCount: 'Compact<u32>'
  },
  /**
   * Lookup190: ep_multi_tokens::policy::DefaultCollectionPolicy<TokenBalance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32, ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries>>
   **/
  EpMultiTokensPolicyDefaultCollectionPolicy: {
    mint: 'EpMultiTokensPolicyMintDefaultMintPolicy',
    burn: 'EpMultiTokensPolicyBurnDefaultBurnPolicy',
    transfer: 'EpMultiTokensPolicyTransferDefaultTransferPolicy',
    attribute: 'EpMultiTokensPolicyAttributeDefaultAttributePolicy',
    market: 'EpMultiTokensPolicyMarketDefaultMarketPolicy'
  },
  /**
   * Lookup191: ep_multi_tokens::policy::mint::DefaultMintPolicy<TokenBalance>
   **/
  EpMultiTokensPolicyMintDefaultMintPolicy: {
    maxTokenCount: 'Option<u64>',
    maxTokenSupply: 'Option<u128>',
    forceCollapsingSupply: 'bool'
  },
  /**
   * Lookup193: ep_multi_tokens::policy::burn::DefaultBurnPolicy
   **/
  EpMultiTokensPolicyBurnDefaultBurnPolicy: 'Null',
  /**
   * Lookup194: ep_multi_tokens::policy::transfer::DefaultTransferPolicy
   **/
  EpMultiTokensPolicyTransferDefaultTransferPolicy: {
    isFrozen: 'bool'
  },
  /**
   * Lookup195: ep_multi_tokens::policy::attribute::DefaultAttributePolicy
   **/
  EpMultiTokensPolicyAttributeDefaultAttributePolicy: 'Null',
  /**
   * Lookup196: ep_multi_tokens::policy::market::DefaultMarketPolicy<ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32, ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries>>
   **/
  EpMultiTokensPolicyMarketDefaultMarketPolicy: {
    royalty: 'Option<EpMultiTokensPolicyMarketDefaultRoyalty>'
  },
  /**
   * Lookup201: ep_core::frame::types::Deposit<sp_core::crypto::AccountId32, Balance>
   **/
  EpCoreFrameTypesDeposit: {
    depositor: 'AccountId32',
    amount: 'Compact<u128>'
  },
  /**
   * Lookup203: ep_multi_tokens::token::Token<sp_core::crypto::AccountId32, TokenBalance, Balance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32, ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries>, ep_multi_tokens::frame::DefaultTokenMetadata<ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>, ep_multi_tokens::frame::DefaultForeignTokenMetadata<staging_xcm::v4::location::Location>>, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  EpMultiTokensToken: {
    supply: 'Compact<u128>',
    cap: 'Option<EpMultiTokensTokenTokenCap>',
    freezeState: 'Option<EpMultiTokensTokenFreezeState>',
    requiresDeposit: 'bool',
    creationDeposit: 'EpCoreFrameTypesAmbiguousDeposit',
    ownerDeposit: 'Compact<u128>',
    totalTokenAccountDeposit: 'Compact<u128>',
    attributeCount: 'Compact<u32>',
    accountCount: 'Compact<u32>',
    marketBehavior: 'Option<EpMultiTokensTokenTokenMarketBehavior>',
    listingForbidden: 'bool',
    metadata: 'EpMultiTokensFrameDefaultTokenMetadata',
    infusion: 'u128',
    anyoneCanInfuse: 'bool',
    groups: 'Vec<u128>'
  },
  /**
   * Lookup204: ep_multi_tokens::frame::DefaultTokenMetadata<ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>, ep_multi_tokens::frame::DefaultForeignTokenMetadata<staging_xcm::v4::location::Location>>
   **/
  EpMultiTokensFrameDefaultTokenMetadata: {
    decimalCount: 'u8',
    name: 'Bytes',
    symbol: 'Bytes',
    foreign: 'Option<EpMultiTokensFrameDefaultForeignTokenMetadata>'
  },
  /**
   * Lookup206: enjin_matrix_runtime::ForeignTokenSymbolLength
   **/
  EnjinMatrixRuntimeForeignTokenSymbolLength: 'Null',
  /**
   * Lookup208: ep_multi_tokens::frame::DefaultForeignTokenMetadata<staging_xcm::v4::location::Location>
   **/
  EpMultiTokensFrameDefaultForeignTokenMetadata: {
    location: 'Option<StagingXcmV4Location>',
    unitsPerSecond: 'Option<u128>'
  },
  /**
   * Lookup213: ep_multi_tokens::token::TokenCap<TokenBalance>
   **/
  EpMultiTokensTokenTokenCap: {
    _enum: {
      Supply: 'Compact<u128>',
      CollapsingSupply: 'Compact<u128>'
    }
  },
  /**
   * Lookup214: ep_core::frame::types::AmbiguousDeposit<sp_core::crypto::AccountId32, Balance>
   **/
  EpCoreFrameTypesAmbiguousDeposit: {
    depositor: 'Option<AccountId32>',
    amount: 'Compact<u128>'
  },
  /**
   * Lookup216: pallet_multi_tokens::features::collection::types::CollectionAccount<sp_core::crypto::AccountId32, Option<T>, enjin_matrix_runtime::MaxOperatorsPerAccount>
   **/
  PalletMultiTokensFeaturesCollectionTypesCollectionAccount: {
    isFrozen: 'bool',
    approvals: 'BTreeMap<AccountId32, Option<u32>>',
    accountCount: 'Compact<u32>'
  },
  /**
   * Lookup217: enjin_matrix_runtime::MaxOperatorsPerAccount
   **/
  EnjinMatrixRuntimeMaxOperatorsPerAccount: 'Null',
  /**
   * Lookup223: pallet_multi_tokens::features::token::types::TokenAccount<sp_core::crypto::AccountId32, Balance, TokenBalance, pallet_multi_tokens::features::operator::types::Approval<TokenBalance, Option<T>>, enjin_matrix_runtime::MaxOperatorsPerAccount, enjin_matrix_runtime::RuntimeHoldReason, LockId, enjin_matrix_runtime::MaxLocks>
   **/
  PalletMultiTokensFeaturesTokenTypesTokenAccount: {
    balance: 'Compact<u128>',
    reservedBalance: 'Compact<u128>',
    lockedBalance: 'Compact<u128>',
    holds: 'Vec<PalletMultiTokensFeaturesTokenTypesTokenAccountReserve>',
    locks: 'BTreeMap<[u8;8], u128>',
    approvals: 'BTreeMap<AccountId32, PalletMultiTokensFeaturesOperatorTypesApproval>',
    isFrozen: 'bool',
    deposit: 'Option<EpCoreFrameTypesDeposit>',
    storageVersion: 'u8'
  },
  /**
   * Lookup224: pallet_multi_tokens::features::operator::types::Approval<TokenBalance, Option<T>>
   **/
  PalletMultiTokensFeaturesOperatorTypesApproval: {
    amount: 'Compact<u128>',
    expiration: 'Option<u32>'
  },
  /**
   * Lookup225: enjin_matrix_runtime::MaxLocks
   **/
  EnjinMatrixRuntimeMaxLocks: 'Null',
  /**
   * Lookup227: pallet_multi_tokens::features::token::types::TokenAccountReserve<TokenBalance, enjin_matrix_runtime::RuntimeHoldReason>
   **/
  PalletMultiTokensFeaturesTokenTypesTokenAccountReserve: {
    reason: 'EnjinMatrixRuntimeRuntimeHoldReason',
    balance: 'u128'
  },
  /**
   * Lookup240: pallet_multi_tokens::features::claim::AssetIdWithEth<CollectionId, TokenId>
   **/
  PalletMultiTokensFeaturesClaimAssetIdWithEth: {
    ethereumCollectionId: 'u128',
    collectionId: 'u128',
    tokenId: 'u128'
  },
  /**
   * Lookup242: pallet_pools::pallet::Event<T>
   **/
  PalletPoolsEvent: {
    _enum: {
      PoolsMutated: 'PalletPoolsPoolsMutation'
    }
  },
  /**
   * Lookup243: pallet_pools::types::PoolsMutation
   **/
  PalletPoolsPoolsMutation: {
    community: 'EpCoreFrameTypesPool',
    collator: 'EpCoreFrameTypesPool',
    fuelTanks: 'EpCoreFrameTypesPool',
    priceDiscovery: 'EpCoreFrameTypesPool'
  },
  /**
   * Lookup244: ep_core::frame::types::Pool
   **/
  EpCoreFrameTypesPool: {
    feeShare: 'Perbill'
  },
  /**
   * Lookup245: pallet_fuel_tanks::pallet::Event<T>
   **/
  PalletFuelTanksEvent: {
    _enum: {
      FuelTankCreated: {
        owner: 'AccountId32',
        name: 'Bytes',
        tankId: 'AccountId32',
      },
      FuelTankMutated: {
        tankId: 'AccountId32',
        mutation: 'PalletFuelTanksImplsDefaultTankMutation',
      },
      FuelTankDestroyed: {
        tankId: 'AccountId32',
      },
      CallDispatched: {
        caller: 'AccountId32',
        tankId: 'AccountId32',
      },
      AccountAdded: {
        tankId: 'AccountId32',
        userId: 'AccountId32',
        tankDeposit: 'u128',
        userDeposit: 'u128',
        totalReceived: 'u128',
      },
      AccountRemoved: {
        tankId: 'AccountId32',
        userId: 'AccountId32',
      },
      AccountRuleDataRemoved: {
        tankId: 'AccountId32',
        userId: 'AccountId32',
        ruleSetId: 'u32',
        ruleKind: 'PalletFuelTanksRulesDispatchRuleKind',
      },
      RuleSetInserted: {
        tankId: 'AccountId32',
        ruleSetId: 'u32',
      },
      RuleSetRemoved: {
        tankId: 'AccountId32',
        ruleSetId: 'u32',
      },
      FreezeStateMutated: {
        tankId: 'AccountId32',
        ruleSetId: 'Option<u32>',
        isFrozen: 'bool',
      },
      DispatchFailed: {
        tankId: 'AccountId32',
        caller: 'AccountId32',
        error: 'SpRuntimeDispatchError',
      },
      ConsumptionSet: {
        tankId: 'AccountId32',
        userId: 'Option<AccountId32>',
        ruleSetId: 'u32',
        consumption: 'PalletFuelTanksConsumption',
      },
      MigrationStep: {
        itemsProcessed: 'u32',
        phase: 'u8'
      }
    }
  },
  /**
   * Lookup247: enjin_matrix_runtime::MaxFuelTankNameLength
   **/
  EnjinMatrixRuntimeMaxFuelTankNameLength: 'Null',
  /**
   * Lookup249: pallet_fuel_tanks::impls::DefaultTankMutation<enjin_matrix_runtime::Runtime>
   **/
  PalletFuelTanksImplsDefaultTankMutation: {
    userAccountManagement: 'EpMultiTokensShouldMutateOption',
    coveragePolicy: 'Option<PalletFuelTanksCoveragePolicy>',
    accountRules: 'Option<Vec<PalletFuelTanksRulesAccountRuleDescriptor>>'
  },
  /**
   * Lookup250: enjin_matrix_runtime::Runtime
   **/
  EnjinMatrixRuntimeRuntime: 'Null',
  /**
   * Lookup251: ep_multi_tokens::types::ShouldMutate<Option<pallet_fuel_tanks::types::UserAccountManagement>>
   **/
  EpMultiTokensShouldMutateOption: {
    _enum: {
      NoMutation: 'Null',
      SomeMutation: 'Option<PalletFuelTanksUserAccountManagement>'
    }
  },
  /**
   * Lookup253: pallet_fuel_tanks::types::UserAccountManagement
   **/
  PalletFuelTanksUserAccountManagement: {
    tankReservesAccountCreationDeposit: 'bool'
  },
  /**
   * Lookup255: pallet_fuel_tanks::types::CoveragePolicy
   **/
  PalletFuelTanksCoveragePolicy: {
    _enum: ['Fees', 'FeesAndDeposit']
  },
  /**
   * Lookup258: pallet_fuel_tanks::rules::AccountRuleDescriptor<T>
   **/
  PalletFuelTanksRulesAccountRuleDescriptor: {
    _enum: {
      WhitelistedCallers: 'PalletFuelTanksRulesWhitelistedCallersWhitelistedCallersRule',
      RequireToken: 'PalletFuelTanksRulesRequireTokenRequireTokenRule'
    }
  },
  /**
   * Lookup259: pallet_fuel_tanks::rules::whitelisted_callers::WhitelistedCallersRule<sp_core::crypto::AccountId32, enjin_matrix_runtime::MaxWhitelistedCallers>
   **/
  PalletFuelTanksRulesWhitelistedCallersWhitelistedCallersRule: 'BTreeSet<AccountId32>',
  /**
   * Lookup260: enjin_matrix_runtime::MaxWhitelistedCallers
   **/
  EnjinMatrixRuntimeMaxWhitelistedCallers: 'Null',
  /**
   * Lookup263: pallet_fuel_tanks::rules::require_token::RequireTokenRule<CollectionId, TokenId>
   **/
  PalletFuelTanksRulesRequireTokenRequireTokenRule: {
    collectionId: 'u128',
    tokenId: 'u128'
  },
  /**
   * Lookup265: pallet_fuel_tanks::rules::DispatchRuleKind
   **/
  PalletFuelTanksRulesDispatchRuleKind: {
    _enum: ['WhitelistedCallers', 'WhitelistedCollections', 'MaxFuelBurnPerTransaction', 'UserFuelBudget', 'TankFuelBudget', 'RequireToken', 'PermittedCalls', 'PermittedExtrinsics', 'WhitelistedPallets', 'RequireSignature', 'MinimumInfusion']
  },
  /**
   * Lookup266: pallet_fuel_tanks::types::Consumption<Balance, BlockNumber>
   **/
  PalletFuelTanksConsumption: {
    totalConsumed: 'Compact<u128>',
    lastResetBlock: 'Option<u32>'
  },
  /**
   * Lookup267: pallet_marketplace::pallet::Event<T>
   **/
  PalletMarketplaceEvent: {
    _enum: {
      ListingCreated: {
        listingId: 'H256',
        listing: 'PalletMarketplaceFeaturesListing',
      },
      ListingCancelled: {
        listingId: 'H256',
      },
      ListingFilled: {
        listingId: 'H256',
        buyer: 'AccountId32',
        price: 'u128',
        amountFilled: 'u128',
        amountRemaining: 'u128',
        protocolFee: 'u128',
        royalty: 'u128',
      },
      BidPlaced: {
        listingId: 'H256',
        bid: 'PalletMarketplaceFeaturesAuctionBid',
      },
      AuctionFinalized: {
        listingId: 'H256',
        winningBid: 'Option<PalletMarketplaceFeaturesAuctionBid>',
        protocolFee: 'u128',
        royalty: 'u128',
      },
      ProtocolFeeSet: {
        protocolFee: 'Perbill',
      },
      ExpiredListingRemoved: {
        listingId: 'H256',
      },
      CounterOfferPlaced: {
        listingId: 'H256',
        counterOffer: 'PalletMarketplaceFeaturesOfferCounterOffer',
      },
      CounterOfferAnswered: {
        listingId: 'H256',
        creator: 'AccountId32',
        response: 'PalletMarketplaceFeaturesOfferCounterOfferResponse',
      },
      CounterOfferRemoved: {
        listingId: 'H256',
        creator: 'AccountId32',
      },
      MigrationStep: {
        itemsProcessed: 'u32',
        phase: 'u8',
      },
      ListingRemovedUnderMinimum: {
        listingId: 'H256',
      },
      ListingUpgraded: {
        listingId: 'H256',
      },
      WhitelistedAccountsAdded: {
        listingId: 'H256',
        accounts: 'Vec<PalletMarketplaceFeaturesWhitelistWhitelistAddAccount>',
      },
      WhitelistedAccountsRemoved: {
        listingId: 'H256',
        accountIds: 'Vec<AccountId32>'
      }
    }
  },
  /**
   * Lookup268: pallet_marketplace::features::listing::Listing<T>
   **/
  PalletMarketplaceFeaturesListing: {
    creator: 'AccountId32',
    makeAssetId: 'EpMultiTokensTokenAssetId',
    takeAssetId: 'EpMultiTokensTokenAssetId',
    amount: 'Compact<u128>',
    price: 'Compact<u128>',
    minReceived: 'Compact<u128>',
    feeSide: 'PalletMarketplaceFeaturesListingFeeSide',
    creationBlock: 'Compact<u32>',
    startBlock: 'Option<u32>',
    whitelistedAccountCount: 'Option<u32>',
    deposit: 'EpCoreFrameTypesDeposit',
    salt: 'Bytes',
    data: 'PalletMarketplaceFeaturesListingListingData',
    state: 'PalletMarketplaceFeaturesListingListingState'
  },
  /**
   * Lookup269: pallet_marketplace::features::listing::FeeSide
   **/
  PalletMarketplaceFeaturesListingFeeSide: {
    _enum: ['NoFee', 'Make', 'Take']
  },
  /**
   * Lookup271: pallet_marketplace::features::listing::ListingData<BlockNumber>
   **/
  PalletMarketplaceFeaturesListingListingData: {
    _enum: {
      FixedPrice: 'Null',
      Auction: 'PalletMarketplaceFeaturesAuctionAuctionData',
      Offer: 'PalletMarketplaceFeaturesOfferOfferData'
    }
  },
  /**
   * Lookup272: pallet_marketplace::features::auction::AuctionData<BlockNumber>
   **/
  PalletMarketplaceFeaturesAuctionAuctionData: {
    endBlock: 'Compact<u32>'
  },
  /**
   * Lookup273: pallet_marketplace::features::offer::OfferData<BlockNumber>
   **/
  PalletMarketplaceFeaturesOfferOfferData: {
    expiration: 'Option<u32>'
  },
  /**
   * Lookup274: pallet_marketplace::features::listing::ListingState<T>
   **/
  PalletMarketplaceFeaturesListingListingState: {
    _enum: {
      FixedPrice: {
        amountFilled: 'Compact<u128>',
      },
      Auction: 'PalletMarketplaceFeaturesAuctionAuctionState',
      Offer: 'PalletMarketplaceFeaturesOfferOfferState'
    }
  },
  /**
   * Lookup275: pallet_marketplace::features::auction::AuctionState<T>
   **/
  PalletMarketplaceFeaturesAuctionAuctionState: {
    highBid: 'Option<PalletMarketplaceFeaturesAuctionBid>'
  },
  /**
   * Lookup277: pallet_marketplace::features::auction::Bid<T>
   **/
  PalletMarketplaceFeaturesAuctionBid: {
    bidder: 'AccountId32',
    price: 'Compact<u128>'
  },
  /**
   * Lookup278: pallet_marketplace::features::offer::OfferState
   **/
  PalletMarketplaceFeaturesOfferOfferState: {
    counterOfferCount: 'Compact<u32>'
  },
  /**
   * Lookup279: pallet_marketplace::features::offer::CounterOffer<T>
   **/
  PalletMarketplaceFeaturesOfferCounterOffer: {
    sellerPrice: 'Compact<u128>',
    buyerPrice: 'Option<u128>',
    deposit: 'EpCoreFrameTypesDeposit'
  },
  /**
   * Lookup280: pallet_marketplace::features::offer::CounterOfferResponse<Balance>
   **/
  PalletMarketplaceFeaturesOfferCounterOfferResponse: {
    _enum: {
      Accept: 'Null',
      Reject: 'Null',
      Counter: 'Compact<u128>'
    }
  },
  /**
   * Lookup282: pallet_marketplace::features::whitelist::WhitelistAddAccount<T>
   **/
  PalletMarketplaceFeaturesWhitelistWhitelistAddAccount: {
    accountId: 'AccountId32',
    allowance: 'Option<u128>'
  },
  /**
   * Lookup285: pallet_extrinsic_pause::pallet::Event<T>
   **/
  PalletExtrinsicPauseEvent: {
    _enum: {
      PalletPaused: {
        palletName: 'Bytes',
      },
      PalletResumed: {
        palletName: 'Bytes',
      },
      ExtrinsicPaused: {
        palletName: 'Bytes',
        extrinsicName: 'Bytes',
      },
      ExtrinsicResumed: {
        palletName: 'Bytes',
        extrinsicName: 'Bytes'
      }
    }
  },
  /**
   * Lookup287: enjin_matrix_runtime::MaxNameLength
   **/
  EnjinMatrixRuntimeMaxNameLength: 'Null',
  /**
   * Lookup289: pallet_matrix_utility::pallet::Event
   **/
  PalletMatrixUtilityEvent: {
    _enum: {
      BatchDispatched: 'Null',
      BatchPartiallyDispatched: 'Vec<(u32,SpRuntimeDispatchError)>',
      BatchFailed: {
        index: 'u32',
        error: 'SpRuntimeDispatchError'
      }
    }
  },
  /**
   * Lookup292: pallet_claims::pallet::Event<T>
   **/
  PalletClaimsEvent: {
    _enum: {
      ClaimRequested: {
        who: 'H160',
        amountBurned: 'u128',
        transactionHash: 'H256',
        isEfiToken: 'bool',
        amountClaimable: 'u128',
      },
      Claimed: {
        who: 'AccountId32',
        ethereumAddress: 'Option<H160>',
        amount: 'u128',
      },
      EthereumBlocksProcessed: {
        blockNumber: 'u32',
      },
      ClaimMinted: {
        who: 'H160',
        amount: 'u128',
      },
      ClaimMoved: {
        _alias: {
          new_: 'new',
        },
        old: 'H160',
        new_: 'H160',
      },
      ExchangeRateSet: {
        exchangeRate: 'Perbill',
      },
      DelayTimeForClaimSet: {
        delayTime: 'u32',
      },
      ClaimRejected: {
        account: 'H160',
        transactionHash: 'H256'
      }
    }
  },
  /**
   * Lookup294: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'AccountId32',
      },
      IdentityCleared: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'AccountId32',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRemoved: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      AuthorityAdded: {
        authority: 'AccountId32',
      },
      AuthorityRemoved: {
        authority: 'AccountId32',
      },
      UsernameSet: {
        who: 'AccountId32',
        username: 'Bytes',
      },
      UsernameQueued: {
        who: 'AccountId32',
        username: 'Bytes',
        expiration: 'u32',
      },
      PreapprovalExpired: {
        whose: 'AccountId32',
      },
      PrimaryUsernameSet: {
        who: 'AccountId32',
        username: 'Bytes',
      },
      DanglingUsernameRemoved: {
        who: 'AccountId32',
        username: 'Bytes'
      }
    }
  },
  /**
   * Lookup296: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      PureCreated: {
        pure: 'AccountId32',
        who: 'AccountId32',
        proxyType: 'RuntimeCommonImplsProxyProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'AccountId32',
        proxy: 'AccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'RuntimeCommonImplsProxyProxyType',
        delay: 'u32',
      },
      ProxyRemoved: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'RuntimeCommonImplsProxyProxyType',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup297: runtime_common::impls::proxy::ProxyType
   **/
  RuntimeCommonImplsProxyProxyType: {
    _enum: ['Any', 'Tokens', 'Governance']
  },
  /**
   * Lookup299: pallet_migrations::pallet::Event<T>
   **/
  PalletMigrationsEvent: {
    _enum: {
      UpgradeStarted: {
        migrations: 'u32',
      },
      UpgradeCompleted: 'Null',
      UpgradeFailed: 'Null',
      MigrationSkipped: {
        index: 'u32',
      },
      MigrationAdvanced: {
        index: 'u32',
        took: 'u32',
      },
      MigrationCompleted: {
        index: 'u32',
        took: 'u32',
      },
      MigrationFailed: {
        index: 'u32',
        took: 'u32',
      },
      HistoricCleared: {
        nextCursor: 'Option<Bytes>'
      }
    }
  },
  /**
   * Lookup301: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup304: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup306: frame_system::CodeUpgradeAuthorization<T>
   **/
  FrameSystemCodeUpgradeAuthorization: {
    codeHash: 'H256',
    checkVersion: 'bool'
  },
  /**
   * Lookup307: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes',
      },
      __Unused8: 'Null',
      authorize_upgrade: {
        codeHash: 'H256',
      },
      authorize_upgrade_without_checks: {
        codeHash: 'H256',
      },
      apply_authorized_upgrade: {
        code: 'Bytes'
      }
    }
  },
  /**
   * Lookup311: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup312: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup313: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup315: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup316: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup317: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup318: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup322: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered', 'MultiBlockMigrationsOngoing', 'NothingAuthorized', 'Unauthorized']
  },
  /**
   * Lookup324: cumulus_pallet_parachain_system::unincluded_segment::Ancestor<primitive_types::H256>
   **/
  CumulusPalletParachainSystemUnincludedSegmentAncestor: {
    usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
    paraHeadHash: 'Option<H256>',
    consumedGoAheadSignal: 'Option<PolkadotPrimitivesV8UpgradeGoAhead>'
  },
  /**
   * Lookup325: cumulus_pallet_parachain_system::unincluded_segment::UsedBandwidth
   **/
  CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: {
    umpMsgCount: 'u32',
    umpTotalBytes: 'u32',
    hrmpOutgoing: 'BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>'
  },
  /**
   * Lookup327: cumulus_pallet_parachain_system::unincluded_segment::HrmpChannelUpdate
   **/
  CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: {
    msgCount: 'u32',
    totalBytes: 'u32'
  },
  /**
   * Lookup332: polkadot_primitives::v8::UpgradeGoAhead
   **/
  PolkadotPrimitivesV8UpgradeGoAhead: {
    _enum: ['Abort', 'GoAhead']
  },
  /**
   * Lookup333: cumulus_pallet_parachain_system::unincluded_segment::SegmentTracker<primitive_types::H256>
   **/
  CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: {
    usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
    hrmpWatermark: 'Option<u32>',
    consumedGoAheadSignal: 'Option<PolkadotPrimitivesV8UpgradeGoAhead>'
  },
  /**
   * Lookup334: polkadot_primitives::v8::PersistedValidationData<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV8PersistedValidationData: {
    parentHead: 'Bytes',
    relayParentNumber: 'u32',
    relayParentStorageRoot: 'H256',
    maxPovSize: 'u32'
  },
  /**
   * Lookup337: polkadot_primitives::v8::UpgradeRestriction
   **/
  PolkadotPrimitivesV8UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup338: sp_trie::storage_proof::StorageProof
   **/
  SpTrieStorageProof: {
    trieNodes: 'BTreeSet<Bytes>'
  },
  /**
   * Lookup340: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
   **/
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: 'H256',
    relayDispatchQueueRemainingCapacity: 'CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity',
    ingressChannels: 'Vec<(u32,PolkadotPrimitivesV8AbridgedHrmpChannel)>',
    egressChannels: 'Vec<(u32,PolkadotPrimitivesV8AbridgedHrmpChannel)>'
  },
  /**
   * Lookup341: cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispatchQueueRemainingCapacity
   **/
  CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: {
    remainingCount: 'u32',
    remainingSize: 'u32'
  },
  /**
   * Lookup344: polkadot_primitives::v8::AbridgedHrmpChannel
   **/
  PolkadotPrimitivesV8AbridgedHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>'
  },
  /**
   * Lookup345: polkadot_primitives::v8::AbridgedHostConfiguration
   **/
  PolkadotPrimitivesV8AbridgedHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32',
    asyncBackingParams: 'PolkadotPrimitivesV8AsyncBackingAsyncBackingParams'
  },
  /**
   * Lookup346: polkadot_primitives::v8::async_backing::AsyncBackingParams
   **/
  PolkadotPrimitivesV8AsyncBackingAsyncBackingParams: {
    maxCandidateDepth: 'u32',
    allowedAncestryLen: 'u32'
  },
  /**
   * Lookup352: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain_primitives::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup354: cumulus_pallet_parachain_system::pallet::Call<T>
   **/
  CumulusPalletParachainSystemCall: {
    _enum: {
      set_validation_data: {
        data: 'CumulusPrimitivesParachainInherentParachainInherentData',
      },
      sudo_send_upward_message: {
        message: 'Bytes'
      }
    }
  },
  /**
   * Lookup355: cumulus_primitives_parachain_inherent::ParachainInherentData
   **/
  CumulusPrimitivesParachainInherentParachainInherentData: {
    validationData: 'PolkadotPrimitivesV8PersistedValidationData',
    relayChainState: 'SpTrieStorageProof',
    downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
    horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>'
  },
  /**
   * Lookup357: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup360: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup363: cumulus_pallet_parachain_system::pallet::Error<T>
   **/
  CumulusPalletParachainSystemError: {
    _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled', 'NothingAuthorized', 'Unauthorized']
  },
  /**
   * Lookup364: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup365: staging_parachain_info::pallet::Call<T>
   **/
  StagingParachainInfoCall: 'Null',
  /**
   * Lookup366: pallet_preimage::OldRequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageOldRequestStatus: {
    _enum: {
      Unrequested: {
        deposit: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        deposit: 'Option<(AccountId32,u128)>',
        count: 'u32',
        len: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup369: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, frame_support::traits::tokens::fungible::HoldConsideration<A, F, R, D, Fp>>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        ticket: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        maybeTicket: 'Option<(AccountId32,u128)>',
        count: 'u32',
        maybeLen: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup375: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      ensure_updated: {
        hashes: 'Vec<H256>'
      }
    }
  },
  /**
   * Lookup376: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested', 'TooMany', 'TooFew']
  },
  /**
   * Lookup379: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<enjin_matrix_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, BlockNumber, enjin_matrix_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'EnjinMatrixRuntimeOriginCaller'
  },
  /**
   * Lookup380: frame_support::traits::preimages::Bounded<enjin_matrix_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>
   **/
  FrameSupportPreimagesBounded: {
    _enum: {
      Legacy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Inline: 'Bytes',
      Lookup: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        len: 'u32'
      }
    }
  },
  /**
   * Lookup382: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: '[u8;32]',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel_named: {
        id: '[u8;32]',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      schedule_named_after: {
        id: '[u8;32]',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      set_retry: {
        task: '(u32,u32)',
        retries: 'u8',
        period: 'u32',
      },
      set_retry_named: {
        id: '[u8;32]',
        retries: 'u8',
        period: 'u32',
      },
      cancel_retry: {
        task: '(u32,u32)',
      },
      cancel_retry_named: {
        id: '[u8;32]'
      }
    }
  },
  /**
   * Lookup384: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'EnjinMatrixRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>',
      },
      with_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup386: enjin_matrix_runtime::OriginCaller
   **/
  EnjinMatrixRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      Void: 'SpCoreVoid',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      Council: 'PalletCollectiveRawOrigin',
      TechnicalCommittee: 'PalletCollectiveRawOrigin',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      PolkadotXcm: 'PalletXcmOrigin',
      CumulusXcm: 'CumulusPalletXcmOrigin'
    }
  },
  /**
   * Lookup387: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup388: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup390: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'StagingXcmV4Location',
      Response: 'StagingXcmV4Location'
    }
  },
  /**
   * Lookup391: cumulus_pallet_xcm::pallet::Origin
   **/
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: 'Null',
      SiblingParachain: 'u32'
    }
  },
  /**
   * Lookup392: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup393: pallet_safe_mode::pallet::Call<T>
   **/
  PalletSafeModeCall: {
    _enum: {
      enter: 'Null',
      force_enter: 'Null',
      extend: 'Null',
      force_extend: 'Null',
      force_exit: 'Null',
      force_slash_deposit: {
        account: 'AccountId32',
        block: 'u32',
      },
      release_deposit: {
        account: 'AccountId32',
        block: 'u32',
      },
      force_release_deposit: {
        account: 'AccountId32',
        block: 'u32'
      }
    }
  },
  /**
   * Lookup394: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      __Unused1: 'Null',
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128',
      },
      upgrade_accounts: {
        who: 'Vec<AccountId32>',
      },
      __Unused7: 'Null',
      force_set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
      },
      force_adjust_total_issuance: {
        direction: 'PalletBalancesAdjustmentDirection',
        delta: 'Compact<u128>',
      },
      burn: {
        value: 'Compact<u128>',
        keepAlive: 'bool'
      }
    }
  },
  /**
   * Lookup397: pallet_balances::types::AdjustmentDirection
   **/
  PalletBalancesAdjustmentDirection: {
    _enum: ['Increase', 'Decrease']
  },
  /**
   * Lookup398: pallet_democracy::pallet::Call<T>
   **/
  PalletDemocracyCall: {
    _enum: {
      propose: {
        proposal: 'FrameSupportPreimagesBounded',
        value: 'Compact<u128>',
      },
      second: {
        proposal: 'Compact<u32>',
      },
      vote: {
        refIndex: 'Compact<u32>',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      emergency_cancel: {
        refIndex: 'u32',
      },
      external_propose: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_majority: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_default: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      fast_track: {
        proposalHash: 'H256',
        votingPeriod: 'u32',
        delay: 'u32',
      },
      veto_external: {
        proposalHash: 'H256',
      },
      cancel_referendum: {
        refIndex: 'Compact<u32>',
      },
      delegate: {
        to: 'MultiAddress',
        conviction: 'PalletDemocracyConviction',
        balance: 'u128',
      },
      undelegate: 'Null',
      clear_public_proposals: 'Null',
      unlock: {
        target: 'MultiAddress',
      },
      remove_vote: {
        index: 'u32',
      },
      remove_other_vote: {
        target: 'MultiAddress',
        index: 'u32',
      },
      blacklist: {
        proposalHash: 'H256',
        maybeRefIndex: 'Option<u32>',
      },
      cancel_proposal: {
        propIndex: 'Compact<u32>',
      },
      set_metadata: {
        owner: 'PalletDemocracyMetadataOwner',
        maybeHash: 'Option<H256>'
      }
    }
  },
  /**
   * Lookup399: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup400: pallet_collective::pallet::Call<T, I>
   **/
  PalletCollectiveCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId32>',
        prime: 'Option<AccountId32>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      __Unused4: 'Null',
      disapprove_proposal: {
        proposalHash: 'H256',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'SpWeightsWeightV2Weight',
        lengthBound: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup402: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      spend_local: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        assetKind: 'Null',
        amount: 'Compact<u128>',
        beneficiary: 'AccountId32',
        validFrom: 'Option<u32>',
      },
      payout: {
        index: 'u32',
      },
      check_status: {
        index: 'u32',
      },
      void_spend: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup403: pallet_membership::pallet::Call<T, I>
   **/
  PalletMembershipCall: {
    _enum: {
      add_member: {
        who: 'MultiAddress',
      },
      remove_member: {
        who: 'MultiAddress',
      },
      swap_member: {
        remove: 'MultiAddress',
        add: 'MultiAddress',
      },
      reset_members: {
        members: 'Vec<AccountId32>',
      },
      change_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      set_prime: {
        who: 'MultiAddress',
      },
      clear_prime: 'Null'
    }
  },
  /**
   * Lookup404: pallet_multisig::pallet::Call<T>
   **/
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<AccountId32>',
        call: 'Call',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        call: 'Call',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        timepoint: 'PalletMultisigTimepoint',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup406: pallet_collator_staking::pallet::Call<T>
   **/
  PalletCollatorStakingCall: {
    _enum: {
      set_invulnerables: {
        accounts: 'Vec<AccountId32>',
      },
      join_candidates: {
        amount: 'u128',
        rewardsCut: 'Perbill',
      },
      unbond: 'Null',
      nominate: {
        collatorId: 'AccountId32',
        amount: 'u128',
      },
      remove_nomination: {
        collatorId: 'AccountId32',
      },
      force_set_current_max_candidates: {
        maxCandidates: 'u32',
      },
      force_set_min_collator_stake: {
        minCollatorStake: 'u128'
      }
    }
  },
  /**
   * Lookup407: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'EnjinMatrixRuntimeSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup408: enjin_matrix_runtime::SessionKeys
   **/
  EnjinMatrixRuntimeSessionKeys: {
    aura: 'SpConsensusAuraSr25519AppSr25519Public',
    pools: 'SpConsensusAuraSr25519AppSr25519Public'
  },
  /**
   * Lookup409: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: '[u8;32]',
  /**
   * Lookup410: cumulus_pallet_xcmp_queue::pallet::Call<T>
   **/
  CumulusPalletXcmpQueueCall: {
    _enum: {
      __Unused0: 'Null',
      suspend_xcm_execution: 'Null',
      resume_xcm_execution: 'Null',
      update_suspend_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_drop_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_resume_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32'
      }
    }
  },
  /**
   * Lookup411: pallet_xcm::pallet::Call<T>
   **/
  PalletXcmCall: {
    _enum: {
      send: {
        dest: 'XcmVersionedLocation',
        message: 'XcmVersionedXcm',
      },
      teleport_assets: {
        dest: 'XcmVersionedLocation',
        beneficiary: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        feeAssetItem: 'u32',
      },
      reserve_transfer_assets: {
        dest: 'XcmVersionedLocation',
        beneficiary: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        feeAssetItem: 'u32',
      },
      execute: {
        message: 'XcmVersionedXcm',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      force_xcm_version: {
        location: 'StagingXcmV4Location',
        version: 'u32',
      },
      force_default_xcm_version: {
        maybeXcmVersion: 'Option<u32>',
      },
      force_subscribe_version_notify: {
        location: 'XcmVersionedLocation',
      },
      force_unsubscribe_version_notify: {
        location: 'XcmVersionedLocation',
      },
      limited_reserve_transfer_assets: {
        dest: 'XcmVersionedLocation',
        beneficiary: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'XcmVersionedLocation',
        beneficiary: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      force_suspension: {
        suspended: 'bool',
      },
      transfer_assets: {
        dest: 'XcmVersionedLocation',
        beneficiary: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      claim_assets: {
        assets: 'XcmVersionedAssets',
        beneficiary: 'XcmVersionedLocation',
      },
      transfer_assets_using_type_and_then: {
        dest: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        assetsTransferType: 'StagingXcmExecutorAssetTransferTransferType',
        remoteFeesId: 'XcmVersionedAssetId',
        feesTransferType: 'StagingXcmExecutorAssetTransferTransferType',
        customXcmOnDest: 'XcmVersionedXcm',
        weightLimit: 'XcmV3WeightLimit'
      }
    }
  },
  /**
   * Lookup412: xcm::VersionedXcm<RuntimeCall>
   **/
  XcmVersionedXcm: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'XcmV2Xcm',
      V3: 'XcmV3Xcm',
      V4: 'StagingXcmV4Xcm'
    }
  },
  /**
   * Lookup413: xcm::v2::Xcm<RuntimeCall>
   **/
  XcmV2Xcm: 'Vec<XcmV2Instruction>',
  /**
   * Lookup415: xcm::v2::Instruction<RuntimeCall>
   **/
  XcmV2Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV2MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV2MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV2MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV2Response',
        maxWeight: 'Compact<u64>',
      },
      TransferAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        beneficiary: 'XcmV2MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      Transact: {
        originType: 'XcmV2OriginKind',
        requireWeightAtMost: 'Compact<u64>',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV2MultilocationJunctions',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'XcmV2MultiLocation',
        maxResponseWeight: 'Compact<u64>',
      },
      DepositAsset: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        beneficiary: 'XcmV2MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV2MultiassetMultiAssetFilter',
        receive: 'XcmV2MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        reserve: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV2MultiLocation',
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxResponseWeight: 'Compact<u64>',
      },
      BuyExecution: {
        fees: 'XcmV2MultiAsset',
        weightLimit: 'XcmV2WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV2Xcm',
      SetAppendix: 'XcmV2Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        ticket: 'XcmV2MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>',
      },
      UnsubscribeVersion: 'Null'
    }
  },
  /**
   * Lookup416: xcm::v2::Response
   **/
  XcmV2Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV2MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV2TraitsError)>',
      Version: 'u32'
    }
  },
  /**
   * Lookup419: xcm::v2::traits::Error
   **/
  XcmV2TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'u64',
      Barrier: 'Null',
      WeightNotComputable: 'Null'
    }
  },
  /**
   * Lookup420: xcm::v2::OriginKind
   **/
  XcmV2OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup421: xcm::v2::multiasset::MultiAssetFilter
   **/
  XcmV2MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV2MultiassetMultiAssets',
      Wild: 'XcmV2MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup422: xcm::v2::multiasset::WildMultiAsset
   **/
  XcmV2MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV2MultiassetAssetId',
        fun: 'XcmV2MultiassetWildFungibility'
      }
    }
  },
  /**
   * Lookup423: xcm::v2::multiasset::WildFungibility
   **/
  XcmV2MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup424: xcm::v2::WeightLimit
   **/
  XcmV2WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },
  /**
   * Lookup425: xcm::v3::Xcm<Call>
   **/
  XcmV3Xcm: 'Vec<XcmV3Instruction>',
  /**
   * Lookup427: xcm::v3::Instruction<Call>
   **/
  XcmV3Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV3MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV3MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV3MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV3Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<StagingXcmV3MultiLocation>',
      },
      TransferAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      Transact: {
        originKind: 'XcmV3OriginKind',
        requireWeightAtMost: 'SpWeightsWeightV2Weight',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV3Junctions',
      ReportError: 'XcmV3QueryResponseInfo',
      DepositAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV3MultiassetMultiAssetFilter',
        want: 'XcmV3MultiassetMultiAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        reserve: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ReportHolding: {
        responseInfo: 'XcmV3QueryResponseInfo',
        assets: 'XcmV3MultiassetMultiAssetFilter',
      },
      BuyExecution: {
        fees: 'XcmV3MultiAsset',
        weightLimit: 'XcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV3Xcm',
      SetAppendix: 'XcmV3Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        ticket: 'StagingXcmV3MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'XcmV3MultiassetMultiAssets',
      ExpectAsset: 'XcmV3MultiassetMultiAssets',
      ExpectOrigin: 'Option<StagingXcmV3MultiLocation>',
      ExpectError: 'Option<(u32,XcmV3TraitsError)>',
      ExpectTransactStatus: 'XcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'XcmV3QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'XcmV3QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'XcmV3Junction',
      ExportMessage: {
        network: 'XcmV3JunctionNetworkId',
        destination: 'XcmV3Junctions',
        xcm: 'XcmV3Xcm',
      },
      LockAsset: {
        asset: 'XcmV3MultiAsset',
        unlocker: 'StagingXcmV3MultiLocation',
      },
      UnlockAsset: {
        asset: 'XcmV3MultiAsset',
        target: 'StagingXcmV3MultiLocation',
      },
      NoteUnlockable: {
        asset: 'XcmV3MultiAsset',
        owner: 'StagingXcmV3MultiLocation',
      },
      RequestUnlock: {
        asset: 'XcmV3MultiAsset',
        locker: 'StagingXcmV3MultiLocation',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'StagingXcmV3MultiLocation',
      UnpaidExecution: {
        weightLimit: 'XcmV3WeightLimit',
        checkOrigin: 'Option<StagingXcmV3MultiLocation>'
      }
    }
  },
  /**
   * Lookup428: xcm::v3::Response
   **/
  XcmV3Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV3MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV3TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<XcmV3PalletInfo>',
      DispatchResult: 'XcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup430: xcm::v3::PalletInfo
   **/
  XcmV3PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup434: xcm::v3::QueryResponseInfo
   **/
  XcmV3QueryResponseInfo: {
    destination: 'StagingXcmV3MultiLocation',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup435: xcm::v3::multiasset::MultiAssetFilter
   **/
  XcmV3MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV3MultiassetMultiAssets',
      Wild: 'XcmV3MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup436: xcm::v3::multiasset::WildMultiAsset
   **/
  XcmV3MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup437: xcm::v3::multiasset::WildFungibility
   **/
  XcmV3MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup449: staging_xcm_executor::traits::asset_transfer::TransferType
   **/
  StagingXcmExecutorAssetTransferTransferType: {
    _enum: {
      Teleport: 'Null',
      LocalReserve: 'Null',
      DestinationReserve: 'Null',
      RemoteReserve: 'XcmVersionedLocation'
    }
  },
  /**
   * Lookup450: xcm::VersionedAssetId
   **/
  XcmVersionedAssetId: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetAssetId',
      V4: 'StagingXcmV4AssetAssetId'
    }
  },
  /**
   * Lookup451: cumulus_pallet_xcm::pallet::Call<T>
   **/
  CumulusPalletXcmCall: 'Null',
  /**
   * Lookup452: cumulus_pallet_dmp_queue::pallet::Call<T>
   **/
  CumulusPalletDmpQueueCall: 'Null',
  /**
   * Lookup453: orml_xcm::module::Call<T>
   **/
  OrmlXcmModuleCall: {
    _enum: {
      send_as_sovereign: {
        dest: 'XcmVersionedLocation',
        message: 'XcmVersionedXcm'
      }
    }
  },
  /**
   * Lookup454: matrix_pallet_xcm::pallet::Call<T>
   **/
  MatrixPalletXcmCall: {
    _enum: {
      transfer_to_parachain: {
        paraId: 'MatrixPalletXcmImplsParachainId',
        beneficiary: 'EpCoreFrameTypesAccount',
        amount: 'u128',
        destWeight: 'Option<u64>',
      },
      transfer_asset_to_parachain: {
        paraId: 'MatrixPalletXcmImplsParachainId',
        beneficiary: 'EpCoreFrameTypesAccount',
        currencyId: 'EpMultiTokensTokenAssetId',
        amount: 'u128',
        destWeight: 'Option<u64>',
      },
      force_set_minimum_weight: {
        xcmCall: 'MatrixPalletXcmXcmOperation',
        xcmWeightFeeMisc: 'MatrixPalletXcmMinimumWeightFeePair',
      },
      transfer_asset_with_fee: {
        assetPair: 'MatrixPalletXcmCurrencyIdAmountPair',
        feePair: 'MatrixPalletXcmCurrencyIdAmountPair',
        paraId: 'MatrixPalletXcmImplsParachainId',
        beneficiary: 'EpCoreFrameTypesAccount',
        destWeight: 'Option<u64>'
      }
    }
  },
  /**
   * Lookup455: matrix_pallet_xcm::impls::ParachainId
   **/
  MatrixPalletXcmImplsParachainId: {
    _enum: ['__Unused0', '__Unused1', '__Unused2', '__Unused3', '__Unused4', '__Unused5', '__Unused6', '__Unused7', '__Unused8', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', '__Unused16', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', '__Unused32', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', '__Unused64', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', '__Unused128', '__Unused129', '__Unused130', '__Unused131', '__Unused132', '__Unused133', '__Unused134', '__Unused135', '__Unused136', '__Unused137', '__Unused138', '__Unused139', '__Unused140', '__Unused141', '__Unused142', '__Unused143', '__Unused144', '__Unused145', '__Unused146', '__Unused147', '__Unused148', '__Unused149', '__Unused150', '__Unused151', '__Unused152', '__Unused153', '__Unused154', '__Unused155', '__Unused156', '__Unused157', '__Unused158', '__Unused159', '__Unused160', '__Unused161', '__Unused162', '__Unused163', '__Unused164', '__Unused165', '__Unused166', '__Unused167', '__Unused168', '__Unused169', '__Unused170', '__Unused171', '__Unused172', '__Unused173', '__Unused174', '__Unused175', '__Unused176', '__Unused177', '__Unused178', '__Unused179', '__Unused180', '__Unused181', '__Unused182', '__Unused183', '__Unused184', '__Unused185', '__Unused186', '__Unused187', '__Unused188', '__Unused189', '__Unused190', '__Unused191', '__Unused192', '__Unused193', '__Unused194', '__Unused195', '__Unused196', '__Unused197', '__Unused198', '__Unused199', '__Unused200', '__Unused201', '__Unused202', '__Unused203', '__Unused204', '__Unused205', '__Unused206', '__Unused207', 'Acala', '__Unused209', '__Unused210', '__Unused211', 'Moonbeam', '__Unused213', '__Unused214', '__Unused215', '__Unused216', '__Unused217', '__Unused218', '__Unused219', '__Unused220', '__Unused221', '__Unused222', '__Unused223', '__Unused224', '__Unused225', '__Unused226', '__Unused227', '__Unused228', '__Unused229', '__Unused230', '__Unused231', 'Statemint']
  },
  /**
   * Lookup456: ep_core::frame::types::Account<sp_core::crypto::AccountId32>
   **/
  EpCoreFrameTypesAccount: {
    _enum: {
      Substrate: 'AccountId32',
      EVM: 'H160'
    }
  },
  /**
   * Lookup457: matrix_pallet_xcm::types::CurrencyIdAmountPair<ep_multi_tokens::token::AssetId<CollectionId, TokenId>, Balance>
   **/
  MatrixPalletXcmCurrencyIdAmountPair: {
    currencyId: 'EpMultiTokensTokenAssetId',
    amount: 'Compact<u128>'
  },
  /**
   * Lookup458: matrix_pallet_xcm::types::XcmOperation
   **/
  MatrixPalletXcmXcmOperation: {
    _enum: {
      XTokensTransfer: 'Null',
      ParachainFee: 'StagingXcmV4Location'
    }
  },
  /**
   * Lookup459: orml_xtokens::module::Call<T>
   **/
  OrmlXtokensModuleCall: {
    _enum: {
      transfer: {
        currencyId: 'EpMultiTokensTokenAssetId',
        amount: 'u128',
        dest: 'XcmVersionedLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multiasset: {
        asset: 'XcmVersionedAsset',
        dest: 'XcmVersionedLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_with_fee: {
        currencyId: 'EpMultiTokensTokenAssetId',
        amount: 'u128',
        fee: 'u128',
        dest: 'XcmVersionedLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multiasset_with_fee: {
        asset: 'XcmVersionedAsset',
        fee: 'XcmVersionedAsset',
        dest: 'XcmVersionedLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multicurrencies: {
        currencies: 'Vec<(EpMultiTokensTokenAssetId,u128)>',
        feeItem: 'u32',
        dest: 'XcmVersionedLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multiassets: {
        assets: 'XcmVersionedAssets',
        feeItem: 'u32',
        dest: 'XcmVersionedLocation',
        destWeightLimit: 'XcmV3WeightLimit'
      }
    }
  },
  /**
   * Lookup460: xcm::VersionedAsset
   **/
  XcmVersionedAsset: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiAsset',
      __Unused2: 'Null',
      V3: 'XcmV3MultiAsset',
      V4: 'StagingXcmV4Asset'
    }
  },
  /**
   * Lookup463: pallet_message_queue::pallet::Call<T>
   **/
  PalletMessageQueueCall: {
    _enum: {
      reap_page: {
        messageOrigin: 'CumulusPrimitivesCoreAggregateMessageOrigin',
        pageIndex: 'u32',
      },
      execute_overweight: {
        messageOrigin: 'CumulusPrimitivesCoreAggregateMessageOrigin',
        page: 'u32',
        index: 'u32',
        weightLimit: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup464: pallet_bounties::pallet::Call<T, I>
   **/
  PalletBountiesCall: {
    _enum: {
      propose_bounty: {
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      approve_bounty: {
        bountyId: 'Compact<u32>',
      },
      propose_curator: {
        bountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      unassign_curator: {
        bountyId: 'Compact<u32>',
      },
      accept_curator: {
        bountyId: 'Compact<u32>',
      },
      award_bounty: {
        bountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_bounty: {
        bountyId: 'Compact<u32>',
      },
      close_bounty: {
        bountyId: 'Compact<u32>',
      },
      extend_bounty_expiry: {
        bountyId: 'Compact<u32>',
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup465: pallet_multi_tokens::pallet::Call<T>
   **/
  PalletMultiTokensCall: {
    _enum: {
      create_collection: {
        descriptor: 'EpMultiTokensCollectionDefaultCollectionDescriptor',
      },
      destroy_collection: {
        collectionId: 'Compact<u128>',
      },
      mutate_collection: {
        collectionId: 'Compact<u128>',
        mutation: 'EpMultiTokensCollectionDefaultCollectionMutation',
      },
      mutate_token: {
        collectionId: 'Compact<u128>',
        tokenId: 'Compact<u128>',
        mutation: 'EpMultiTokensTokenDefaultTokenMutation',
      },
      mint: {
        recipient: 'MultiAddress',
        collectionId: 'Compact<u128>',
        params: 'EpMultiTokensPolicyMintDefaultMintParams',
      },
      burn: {
        collectionId: 'Compact<u128>',
        params: 'EpMultiTokensPolicyBurnDefaultBurnParams',
      },
      transfer: {
        recipient: 'MultiAddress',
        collectionId: 'Compact<u128>',
        params: 'EpMultiTokensPolicyTransferDefaultTransferParams',
      },
      freeze: {
        info: 'EpMultiTokensFreeze',
      },
      thaw: {
        info: 'EpMultiTokensFreeze',
      },
      set_attribute: {
        collectionId: 'Compact<u128>',
        tokenId: 'Option<u128>',
        key: 'Bytes',
        value: 'Bytes',
        depositor: 'Option<MultiAddress>',
      },
      remove_attribute: {
        collectionId: 'Compact<u128>',
        tokenId: 'Option<u128>',
        key: 'Bytes',
      },
      remove_all_attributes: {
        collectionId: 'Compact<u128>',
        tokenId: 'Option<u128>',
        attributeCount: 'u32',
      },
      batch_transfer: {
        collectionId: 'Compact<u128>',
        recipients: 'Vec<EpMultiTokensBatchRecipientDefaultTransferParams>',
      },
      batch_mint: {
        collectionId: 'Compact<u128>',
        recipients: 'Vec<EpMultiTokensBatchRecipientDefaultMintParams>',
      },
      batch_set_attribute: {
        collectionId: 'Compact<u128>',
        tokenId: 'Option<u128>',
        attributes: 'Vec<EpMultiTokensBatchAttributeKeyValuePair>',
        depositor: 'Option<MultiAddress>',
      },
      approve_collection: {
        collectionId: 'Compact<u128>',
        operator: 'AccountId32',
        expiration: 'Option<u32>',
      },
      unapprove_collection: {
        collectionId: 'Compact<u128>',
        operator: 'AccountId32',
      },
      approve_token: {
        collectionId: 'Compact<u128>',
        tokenId: 'Compact<u128>',
        operator: 'AccountId32',
        amount: 'Compact<u128>',
        expiration: 'Option<u32>',
        currentAmount: 'Compact<u128>',
      },
      unapprove_token: {
        collectionId: 'Compact<u128>',
        tokenId: 'Compact<u128>',
        operator: 'AccountId32',
      },
      force_mutate_collection: {
        collectionId: 'Compact<u128>',
        mutation: 'EpMultiTokensCollectionDefaultCollectionMutation',
      },
      force_transfer: {
        source: 'MultiAddress',
        destination: 'MultiAddress',
        collectionId: 'Compact<u128>',
        params: 'EpMultiTokensPolicyTransferDefaultTransferParams',
      },
      force_set_collection: {
        collectionId: 'Compact<u128>',
        value: 'Option<EpMultiTokensCollection>',
      },
      force_set_token: {
        collectionId: 'Compact<u128>',
        tokenId: 'Compact<u128>',
        value: 'Option<EpMultiTokensToken>',
      },
      force_set_attribute: {
        collectionId: 'Compact<u128>',
        tokenId: 'Option<u128>',
        key: 'Bytes',
        value: 'Option<EpMultiTokensAttribute>',
      },
      force_set_collection_account: {
        collectionId: 'Compact<u128>',
        accountId: 'MultiAddress',
        value: 'Option<PalletMultiTokensFeaturesCollectionTypesCollectionAccount>',
      },
      force_set_token_account: {
        collectionId: 'Compact<u128>',
        tokenId: 'Compact<u128>',
        accountId: 'MultiAddress',
        value: 'Option<PalletMultiTokensFeaturesTokenTypesTokenAccount>',
      },
      force_create_collection: {
        owner: 'AccountId32',
        collectionId: 'Compact<u128>',
        descriptor: 'EpMultiTokensCollectionDefaultCollectionDescriptor',
      },
      force_mint: {
        caller: 'Option<MultiAddress>',
        recipient: 'MultiAddress',
        collectionId: 'Compact<u128>',
        params: 'EpMultiTokensPolicyMintFlexibleMintParams',
        depositor: 'Option<MultiAddress>',
      },
      force_burn: {
        caller: 'MultiAddress',
        collectionId: 'Compact<u128>',
        params: 'EpMultiTokensPolicyBurnDefaultBurnParams',
      },
      force_approve_collection: {
        caller: 'MultiAddress',
        collectionId: 'Compact<u128>',
        operator: 'AccountId32',
        expiration: 'Option<u32>',
      },
      force_freeze: {
        info: 'EpMultiTokensFreeze',
      },
      force_set_next_collection_id: {
        value: 'Compact<u128>',
      },
      claim_collections: {
        destination: 'AccountId32',
        ethereumSignature: '[u8;65]',
        ethereumAddress: 'H160',
        collectionCount: 'Compact<u32>',
      },
      claim_tokens: {
        destination: 'AccountId32',
        ethereumSignature: '[u8;65]',
        ethereumAddress: 'H160',
      },
      force_set_ethereum_account: {
        address: 'H160',
        value: 'Option<Vec<u128>>',
      },
      force_set_ethereum_collection_id: {
        ethereumCollectionId: 'Compact<u128>',
        nativeCollectionId: 'Option<u128>',
      },
      finish_claim_tokens: {
        destination: 'AccountId32',
        ethereumAddress: 'H160',
      },
      __Unused37: 'Null',
      force_set_unmintable_token_ids: {
        collectionId: 'Compact<u128>',
        baseTokenId: 'Compact<u64>',
        tokenIndex: 'Compact<u64>',
      },
      force_create_ethereum_collection: {
        owner: 'AccountId32',
        claimer: 'H160',
        ethereumCollectionId: 'Compact<u128>',
        descriptor: 'EpMultiTokensCollectionDefaultCollectionDescriptor',
      },
      force_set_ethereum_unmintable_token_ids: {
        ethereumCollectionId: 'Compact<u128>',
        baseTokenId: 'Compact<u64>',
        tokenIndex: 'Compact<u64>',
      },
      accept_collection_transfer: {
        collectionId: 'Compact<u128>',
      },
      cancel_collection_transfer: {
        collectionId: 'Compact<u128>',
      },
      update_account_deposit: {
        collectionId: 'Compact<u128>',
        tokenId: 'Compact<u128>',
        deltaAccountCount: 'i32',
      },
      infuse: {
        collectionId: 'Compact<u128>',
        tokenId: 'Compact<u128>',
        amount: 'Compact<u128>',
      },
      recalculate_collection_deposit: {
        collectionId: 'Compact<u128>',
        tokenCount: 'u32',
        attributeCount: 'u32',
      },
      upgrade_token_accounts: {
        tokenAccountKeys: 'Vec<(u128,u128,AccountId32)>',
      },
      upgrade_tokens: {
        tokenKeys: 'Vec<(u128,u128)>',
      },
      upgrade_collections: {
        collectionKeys: 'Vec<u128>',
      },
      create_token_group: {
        collectionId: 'Compact<u128>',
        depositor: 'Option<MultiAddress>',
      },
      destroy_token_group: {
        tokenGroupId: 'Compact<u128>',
      },
      add_token_to_group: {
        collectionId: 'Compact<u128>',
        tokenId: 'Compact<u128>',
        tokenGroupId: 'Compact<u128>',
      },
      remove_token_from_group: {
        collectionId: 'Compact<u128>',
        tokenId: 'Compact<u128>',
        tokenGroupId: 'Compact<u128>',
      },
      set_token_group_attribute: {
        tokenGroupId: 'Compact<u128>',
        key: 'Bytes',
        value: 'Bytes',
        depositor: 'Option<MultiAddress>',
      },
      remove_token_group_attribute: {
        tokenGroupId: 'Compact<u128>',
        key: 'Bytes',
      },
      update_collection_account_approvals: {
        collectionAccountParameters: 'Vec<(u128,AccountId32,Vec<(AccountId32,Option<u32>)>)>',
      },
      set_token_groups: {
        collectionId: 'Compact<u128>',
        tokenId: 'Compact<u128>',
        tokenGroups: 'Vec<u128>'
      }
    }
  },
  /**
   * Lookup466: ep_multi_tokens::collection::DefaultCollectionDescriptor<sp_core::crypto::AccountId32, TokenBalance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32, ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries>, bounded_collections::bounded_vec::BoundedVec<ep_multi_tokens::token::AssetId<CollectionId, TokenId>, S>, bounded_collections::bounded_vec::BoundedVec<ep_multi_tokens::batch::AttributeKeyValuePair<bounded_collections::bounded_vec::BoundedVec<T, S>, bounded_collections::bounded_vec::BoundedVec<T, S>>, S>>
   **/
  EpMultiTokensCollectionDefaultCollectionDescriptor: {
    policy: 'EpMultiTokensPolicyDefaultCollectionPolicyDescriptor',
    depositor: 'Option<AccountId32>',
    explicitRoyaltyCurrencies: 'Vec<EpMultiTokensTokenAssetId>',
    attributes: 'Vec<EpMultiTokensBatchAttributeKeyValuePair>'
  },
  /**
   * Lookup468: ep_multi_tokens::batch::AttributeKeyValuePair<bounded_collections::bounded_vec::BoundedVec<T, S>, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  EpMultiTokensBatchAttributeKeyValuePair: {
    key: 'Bytes',
    value: 'Bytes'
  },
  /**
   * Lookup470: ep_multi_tokens::policy::DefaultCollectionPolicyDescriptor<TokenBalance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32, ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries>>
   **/
  EpMultiTokensPolicyDefaultCollectionPolicyDescriptor: {
    mint: 'EpMultiTokensPolicyMintDefaultMintPolicyDescriptor',
    burn: 'EpMultiTokensPolicyBurnDefaultBurnPolicyDescriptor',
    transfer: 'EpMultiTokensPolicyTransferDefaultTransferPolicyDescriptor',
    attribute: 'EpMultiTokensPolicyAttributeDefaultAttributePolicyDescriptor',
    market: 'EpMultiTokensPolicyMarketDefaultMarketPolicyDescriptor'
  },
  /**
   * Lookup471: ep_multi_tokens::policy::mint::DefaultMintPolicyDescriptor<TokenBalance>
   **/
  EpMultiTokensPolicyMintDefaultMintPolicyDescriptor: {
    maxTokenCount: 'Option<u64>',
    maxTokenSupply: 'Option<u128>',
    forceCollapsingSupply: 'bool'
  },
  /**
   * Lookup472: ep_multi_tokens::policy::burn::DefaultBurnPolicyDescriptor
   **/
  EpMultiTokensPolicyBurnDefaultBurnPolicyDescriptor: 'Null',
  /**
   * Lookup473: ep_multi_tokens::policy::transfer::DefaultTransferPolicyDescriptor
   **/
  EpMultiTokensPolicyTransferDefaultTransferPolicyDescriptor: 'Null',
  /**
   * Lookup474: ep_multi_tokens::policy::attribute::DefaultAttributePolicyDescriptor
   **/
  EpMultiTokensPolicyAttributeDefaultAttributePolicyDescriptor: 'Null',
  /**
   * Lookup475: ep_multi_tokens::policy::market::DefaultMarketPolicyDescriptor<ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32, ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries>>
   **/
  EpMultiTokensPolicyMarketDefaultMarketPolicyDescriptor: {
    royalty: 'Option<EpMultiTokensPolicyMarketDefaultRoyalty>'
  },
  /**
   * Lookup476: ep_multi_tokens::policy::mint::DefaultMintParams<sp_core::crypto::AccountId32, TokenId, TokenBalance, Balance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32, ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries>, bounded_collections::bounded_vec::BoundedVec<ep_multi_tokens::batch::AttributeKeyValuePair<bounded_collections::bounded_vec::BoundedVec<T, S>, bounded_collections::bounded_vec::BoundedVec<T, S>>, S>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>, staging_xcm::v4::location::Location>
   **/
  EpMultiTokensPolicyMintDefaultMintParams: {
    _enum: {
      CreateToken: {
        tokenId: 'Compact<u128>',
        initialSupply: 'Compact<u128>',
        accountDepositCount: 'Compact<u32>',
        cap: 'Option<EpMultiTokensTokenTokenCap>',
        behavior: 'Option<EpMultiTokensTokenTokenMarketBehavior>',
        listingForbidden: 'bool',
        freezeState: 'Option<EpMultiTokensTokenFreezeState>',
        attributes: 'Vec<EpMultiTokensBatchAttributeKeyValuePair>',
        infusion: 'Compact<u128>',
        anyoneCanInfuse: 'bool',
        metadata: 'EpMultiTokensPolicyMintCreateTokenMetadata',
        privilegedParams: 'Option<EpMultiTokensPolicyMintPrivilegedCreateTokenParams>',
      },
      Mint: {
        tokenId: 'Compact<u128>',
        amount: 'Compact<u128>',
        depositor: 'Option<AccountId32>'
      }
    }
  },
  /**
   * Lookup477: ep_multi_tokens::policy::mint::CreateTokenMetadata<ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>>
   **/
  EpMultiTokensPolicyMintCreateTokenMetadata: {
    name: 'Bytes',
    symbol: 'Bytes',
    decimalCount: 'u8'
  },
  /**
   * Lookup479: ep_multi_tokens::policy::mint::PrivilegedCreateTokenParams<sp_core::crypto::AccountId32, staging_xcm::v4::location::Location>
   **/
  EpMultiTokensPolicyMintPrivilegedCreateTokenParams: {
    requiresDeposit: 'bool',
    foreignParams: 'Option<EpMultiTokensPolicyMintForeignTokenCreationParams>',
    depositor: 'Option<AccountId32>'
  },
  /**
   * Lookup481: ep_multi_tokens::policy::mint::ForeignTokenCreationParams<staging_xcm::v4::location::Location>
   **/
  EpMultiTokensPolicyMintForeignTokenCreationParams: {
    location: 'Option<StagingXcmV4Location>',
    unitsPerSecond: 'Option<u128>'
  },
  /**
   * Lookup482: ep_multi_tokens::policy::burn::DefaultBurnParams<TokenId, TokenBalance>
   **/
  EpMultiTokensPolicyBurnDefaultBurnParams: {
    tokenId: 'Compact<u128>',
    amount: 'Compact<u128>',
    removeTokenStorage: 'bool'
  },
  /**
   * Lookup483: ep_multi_tokens::policy::transfer::DefaultTransferParams<sp_core::crypto::AccountId32, TokenId, TokenBalance>
   **/
  EpMultiTokensPolicyTransferDefaultTransferParams: {
    _enum: {
      Simple: {
        tokenId: 'Compact<u128>',
        amount: 'Compact<u128>',
        depositor: 'Option<AccountId32>',
      },
      Operator: {
        tokenId: 'Compact<u128>',
        source: 'AccountId32',
        amount: 'Compact<u128>',
        operatorPaysDeposit: 'bool',
        depositor: 'Option<AccountId32>'
      }
    }
  },
  /**
   * Lookup486: ep_multi_tokens::batch::Recipient<sp_core::crypto::AccountId32, ep_multi_tokens::policy::transfer::DefaultTransferParams<sp_core::crypto::AccountId32, TokenId, TokenBalance>>
   **/
  EpMultiTokensBatchRecipientDefaultTransferParams: {
    accountId: 'AccountId32',
    params: 'EpMultiTokensPolicyTransferDefaultTransferParams'
  },
  /**
   * Lookup489: ep_multi_tokens::batch::Recipient<sp_core::crypto::AccountId32, ep_multi_tokens::policy::mint::DefaultMintParams<sp_core::crypto::AccountId32, TokenId, TokenBalance, Balance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32, ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries>, bounded_collections::bounded_vec::BoundedVec<ep_multi_tokens::batch::AttributeKeyValuePair<bounded_collections::bounded_vec::BoundedVec<T, S>, bounded_collections::bounded_vec::BoundedVec<T, S>>, S>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>, staging_xcm::v4::location::Location>>
   **/
  EpMultiTokensBatchRecipientDefaultMintParams: {
    accountId: 'AccountId32',
    params: 'EpMultiTokensPolicyMintDefaultMintParams'
  },
  /**
   * Lookup494: ep_multi_tokens::attribute::Attribute<bounded_collections::bounded_vec::BoundedVec<T, S>, sp_core::crypto::AccountId32, Balance>
   **/
  EpMultiTokensAttribute: {
    value: 'Bytes',
    deposit: 'Compact<u128>',
    depositor: 'Option<AccountId32>'
  },
  /**
   * Lookup495: ep_multi_tokens::policy::mint::FlexibleMintParams<sp_core::crypto::AccountId32, TokenId, TokenBalance, Balance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32, ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries>, bounded_collections::bounded_vec::BoundedVec<ep_multi_tokens::batch::AttributeKeyValuePair<bounded_collections::bounded_vec::BoundedVec<T, S>, bounded_collections::bounded_vec::BoundedVec<T, S>>, S>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>, staging_xcm::v4::location::Location>
   **/
  EpMultiTokensPolicyMintFlexibleMintParams: {
    _enum: {
      CreateOrMint: 'EpMultiTokensPolicyMintCreateTokenParams',
      Mint: {
        tokenId: 'Compact<u128>',
        amount: 'Compact<u128>',
        depositor: 'Option<AccountId32>'
      }
    }
  },
  /**
   * Lookup496: ep_multi_tokens::policy::mint::CreateTokenParams<sp_core::crypto::AccountId32, TokenId, TokenBalance, Balance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32, ep_multi_tokens::frame::parameters::multi_tokens::MaxRoyaltyBeneficiaries>, bounded_collections::bounded_vec::BoundedVec<ep_multi_tokens::batch::AttributeKeyValuePair<bounded_collections::bounded_vec::BoundedVec<T, S>, bounded_collections::bounded_vec::BoundedVec<T, S>>, S>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>, staging_xcm::v4::location::Location>
   **/
  EpMultiTokensPolicyMintCreateTokenParams: {
    tokenId: 'Compact<u128>',
    amount: 'Compact<u128>',
    accountDepositCount: 'Compact<u32>',
    cap: 'Option<EpMultiTokensTokenTokenCap>',
    behavior: 'Option<EpMultiTokensTokenTokenMarketBehavior>',
    listingForbidden: 'bool',
    freezeState: 'Option<EpMultiTokensTokenFreezeState>',
    attributes: 'Vec<EpMultiTokensBatchAttributeKeyValuePair>',
    infusion: 'Compact<u128>',
    anyoneCanInfuse: 'bool',
    metadata: 'EpMultiTokensPolicyMintCreateTokenMetadata',
    privilegedParams: 'Option<EpMultiTokensPolicyMintPrivilegedCreateTokenParams>'
  },
  /**
   * Lookup509: pallet_pools::pallet::Call<T>
   **/
  PalletPoolsCall: {
    _enum: {
      mutate_pools: {
        mutation: 'PalletPoolsPoolsMutation'
      }
    }
  },
  /**
   * Lookup510: pallet_fuel_tanks::pallet::Call<T>
   **/
  PalletFuelTanksCall: {
    _enum: {
      create_fuel_tank: {
        descriptor: 'PalletFuelTanksFuelTankDescriptor',
      },
      mutate_fuel_tank: {
        tankId: 'MultiAddress',
        mutation: 'PalletFuelTanksImplsDefaultTankMutation',
      },
      add_account: {
        tankId: 'MultiAddress',
        userId: 'MultiAddress',
      },
      remove_account: {
        tankId: 'MultiAddress',
        userId: 'MultiAddress',
      },
      remove_account_rule_data: {
        tankId: 'MultiAddress',
        userId: 'MultiAddress',
        ruleSetId: 'u32',
        ruleKind: 'PalletFuelTanksRulesDispatchRuleKind',
      },
      dispatch: {
        tankId: 'MultiAddress',
        ruleSetId: 'u32',
        call: 'Call',
        settings: 'Option<PalletFuelTanksDispatchSettings>',
      },
      dispatch_and_touch: {
        tankId: 'MultiAddress',
        ruleSetId: 'u32',
        call: 'Call',
        settings: 'Option<PalletFuelTanksDispatchSettings>',
      },
      mutate_freeze_state: {
        tankId: 'MultiAddress',
        ruleSetId: 'Option<u32>',
        isFrozen: 'bool',
      },
      insert_rule_set: {
        tankId: 'MultiAddress',
        ruleSetId: 'u32',
        ruleSet: 'PalletFuelTanksRulesRuleSetDescriptor',
      },
      remove_rule_set: {
        tankId: 'MultiAddress',
        ruleSetId: 'u32',
      },
      batch_add_account: {
        tankId: 'MultiAddress',
        userIds: 'Vec<MultiAddress>',
      },
      batch_remove_account: {
        tankId: 'MultiAddress',
        userIds: 'Vec<MultiAddress>',
      },
      force_set_consumption: {
        tankId: 'MultiAddress',
        userId: 'Option<MultiAddress>',
        ruleSetId: 'u32',
        consumption: 'PalletFuelTanksConsumption',
      },
      destroy_fuel_tank: {
        tankId: 'MultiAddress',
      },
      force_create_fuel_tank: {
        owner: 'MultiAddress',
        descriptor: 'PalletFuelTanksFuelTankDescriptor',
      },
      force_batch_add_account: {
        owner: 'MultiAddress',
        tankId: 'MultiAddress',
        userIds: 'Vec<MultiAddress>'
      }
    }
  },
  /**
   * Lookup511: pallet_fuel_tanks::types::FuelTankDescriptor<ep_core::frame::types::BoundedString<enjin_matrix_runtime::MaxFuelTankNameLength>, bounded_collections::bounded_btree_map::BoundedBTreeMap<K, pallet_fuel_tanks::rules::RuleSetDescriptor<pallet_fuel_tanks::rules::DispatchRuleDescriptor<T>, enjin_matrix_runtime::MaxRulesPerSet>, S>, bounded_collections::bounded_vec::BoundedVec<pallet_fuel_tanks::rules::AccountRuleDescriptor<T>, S>>
   **/
  PalletFuelTanksFuelTankDescriptor: {
    name: 'Bytes',
    userAccountManagement: 'Option<PalletFuelTanksUserAccountManagement>',
    ruleSets: 'BTreeMap<u32, PalletFuelTanksRulesRuleSetDescriptor>',
    coveragePolicy: 'PalletFuelTanksCoveragePolicy',
    accountRules: 'Vec<PalletFuelTanksRulesAccountRuleDescriptor>'
  },
  /**
   * Lookup513: pallet_fuel_tanks::rules::RuleSetDescriptor<pallet_fuel_tanks::rules::DispatchRuleDescriptor<T>, enjin_matrix_runtime::MaxRulesPerSet>
   **/
  PalletFuelTanksRulesRuleSetDescriptor: {
    rules: 'Vec<PalletFuelTanksRulesDispatchRuleDescriptor>',
    requireAccount: 'bool'
  },
  /**
   * Lookup514: pallet_fuel_tanks::rules::DispatchRuleDescriptor<T>
   **/
  PalletFuelTanksRulesDispatchRuleDescriptor: {
    _enum: {
      WhitelistedCallers: 'PalletFuelTanksRulesWhitelistedCallersWhitelistedCallersRule',
      WhitelistedCollections: 'PalletFuelTanksRulesWhitelistedCollectionsWhitelistedCollectionsRule',
      MaxFuelBurnPerTransaction: 'u128',
      UserFuelBudget: 'PalletFuelTanksRulesUserFuelBudgetUserFuelBudgetRuleDescriptor',
      TankFuelBudget: 'PalletFuelTanksRulesTankFuelBudgetTankFuelBudgetRuleDescriptor',
      RequireToken: 'PalletFuelTanksRulesRequireTokenRequireTokenRule',
      PermittedCalls: 'PalletFuelTanksRulesPermittedCallsPermittedCallsRule',
      PermittedExtrinsics: 'PalletFuelTanksRulesPermittedExtrinsicsPermittedExtrinsicsDescriptor',
      WhitelistedPallets: 'PalletFuelTanksRulesWhitelistedPalletsWhitelistedPalletsDescriptor',
      RequireSignature: 'PalletFuelTanksRulesRequireSignatureRequireSignatureRule',
      MinimumInfusion: 'u128'
    }
  },
  /**
   * Lookup515: pallet_fuel_tanks::rules::whitelisted_collections::WhitelistedCollectionsRule<CollectionId, enjin_matrix_runtime::MaxCollectionIds>
   **/
  PalletFuelTanksRulesWhitelistedCollectionsWhitelistedCollectionsRule: 'BTreeSet<u128>',
  /**
   * Lookup516: enjin_matrix_runtime::MaxCollectionIds
   **/
  EnjinMatrixRuntimeMaxCollectionIds: 'Null',
  /**
   * Lookup520: pallet_fuel_tanks::rules::user_fuel_budget::UserFuelBudgetRuleDescriptor<pallet_fuel_tanks::types::Budget<Balance, BlockNumber>>
   **/
  PalletFuelTanksRulesUserFuelBudgetUserFuelBudgetRuleDescriptor: 'PalletFuelTanksBudget',
  /**
   * Lookup521: pallet_fuel_tanks::types::Budget<Balance, BlockNumber>
   **/
  PalletFuelTanksBudget: {
    amount: 'Compact<u128>',
    resetPeriod: 'u32'
  },
  /**
   * Lookup522: pallet_fuel_tanks::rules::tank_fuel_budget::TankFuelBudgetRuleDescriptor<pallet_fuel_tanks::types::Budget<Balance, BlockNumber>>
   **/
  PalletFuelTanksRulesTankFuelBudgetTankFuelBudgetRuleDescriptor: 'PalletFuelTanksBudget',
  /**
   * Lookup523: pallet_fuel_tanks::rules::permitted_calls::PermittedCallsRule<bounded_collections::bounded_vec::BoundedVec<T, S>, enjin_matrix_runtime::MaxCallFilters>
   **/
  PalletFuelTanksRulesPermittedCallsPermittedCallsRule: 'BTreeSet<Bytes>',
  /**
   * Lookup525: enjin_matrix_runtime::MaxCallFilters
   **/
  EnjinMatrixRuntimeMaxCallFilters: 'Null',
  /**
   * Lookup529: pallet_fuel_tanks::rules::permitted_extrinsics::PermittedExtrinsicsDescriptor<enjin_matrix_runtime::RuntimeCall, enjin_matrix_runtime::MaxPermittedExtrinsicLength>
   **/
  PalletFuelTanksRulesPermittedExtrinsicsPermittedExtrinsicsDescriptor: 'Vec<Call>',
  /**
   * Lookup530: enjin_matrix_runtime::MaxPermittedExtrinsicLength
   **/
  EnjinMatrixRuntimeMaxPermittedExtrinsicLength: 'Null',
  /**
   * Lookup532: pallet_fuel_tanks::rules::whitelisted_pallets::WhitelistedPalletsDescriptor<enjin_matrix_runtime::RuntimeCall, enjin_matrix_runtime::MaxPermittedExtrinsicLength>
   **/
  PalletFuelTanksRulesWhitelistedPalletsWhitelistedPalletsDescriptor: 'Vec<Call>',
  /**
   * Lookup533: pallet_fuel_tanks::rules::require_signature::RequireSignatureRule<PublicKey>
   **/
  PalletFuelTanksRulesRequireSignatureRequireSignatureRule: '[u8;32]',
  /**
   * Lookup535: enjin_matrix_runtime::MaxRulesPerSet
   **/
  EnjinMatrixRuntimeMaxRulesPerSet: 'Null',
  /**
   * Lookup542: pallet_fuel_tanks::types::DispatchSettings<Signature, BlockNumber>
   **/
  PalletFuelTanksDispatchSettings: {
    useNoneOrigin: 'bool',
    paysRemainingFee: 'bool',
    signature: 'Option<PalletFuelTanksExpirableSignature>'
  },
  /**
   * Lookup545: pallet_fuel_tanks::traits::ExpirableSignature<Signature, BlockNumber>
   **/
  PalletFuelTanksExpirableSignature: {
    signature: '[u8;64]',
    expiryBlock: 'u32'
  },
  /**
   * Lookup548: pallet_marketplace::pallet::Call<T>
   **/
  PalletMarketplaceCall: {
    _enum: {
      create_listing: {
        descriptor: 'PalletMarketplaceFeaturesListingListingDescriptor',
        depositor: 'Option<MultiAddress>',
      },
      cancel_listing: {
        listingId: 'H256',
      },
      fill_listing: {
        listingId: 'H256',
        amount: 'Compact<u128>',
        royaltyBeneficiaryCount: 'u32',
      },
      place_bid: {
        listingId: 'H256',
        price: 'Compact<u128>',
      },
      finalize_auction: {
        listingId: 'H256',
        royaltyBeneficiaryCount: 'u32',
      },
      set_protocol_fee: {
        protocolFee: 'Perbill',
      },
      force_create_listing: {
        seller: 'MultiAddress',
        descriptor: 'PalletMarketplaceFeaturesListingListingDescriptor',
        depositBacker: 'Option<MultiAddress>',
      },
      force_place_bid: {
        bidder: 'MultiAddress',
        listingId: 'H256',
        price: 'Compact<u128>',
        fundsBacker: 'Option<MultiAddress>',
      },
      remove_expired_listing: {
        listingId: 'H256',
      },
      place_counter_offer: {
        listingId: 'H256',
        price: 'Compact<u128>',
        depositor: 'Option<MultiAddress>',
      },
      answer_counter_offer: {
        listingId: 'H256',
        creator: 'AccountId32',
        response: 'PalletMarketplaceFeaturesOfferCounterOfferResponse',
        currentPrice: 'Compact<u128>',
        royaltyBeneficiaryCount: 'u32',
      },
      force_cancel_listing: {
        listingId: 'H256',
      },
      add_whitelisted_accounts: {
        listingId: 'H256',
        accounts: 'Vec<PalletMarketplaceFeaturesWhitelistWhitelistAddAccount>',
      },
      remove_whitelisted_accounts: {
        listingId: 'H256',
        accountIds: 'Vec<AccountId32>',
      },
      upgrade_listings: {
        listingIds: 'Vec<H256>'
      }
    }
  },
  /**
   * Lookup549: pallet_marketplace::features::listing::ListingDescriptor<ep_multi_tokens::token::AssetId<CollectionId, TokenId>, TokenBalance, BlockNumber, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PalletMarketplaceFeaturesListingListingDescriptor: {
    makeAssetId: 'EpMultiTokensTokenAssetId',
    takeAssetId: 'EpMultiTokensTokenAssetId',
    amount: 'Compact<u128>',
    price: 'Compact<u128>',
    startBlock: 'Option<u32>',
    salt: 'Bytes',
    usesWhitelist: 'bool',
    data: 'PalletMarketplaceFeaturesListingListingData'
  },
  /**
   * Lookup551: pallet_extrinsic_pause::pallet::Call<T>
   **/
  PalletExtrinsicPauseCall: {
    _enum: {
      pause_extrinsic: {
        call: 'Call',
        pauseOnlyExtrinsic: 'bool',
      },
      resume_extrinsic: {
        call: 'Call',
        resumeOnlyExtrinsic: 'bool'
      }
    }
  },
  /**
   * Lookup552: pallet_matrix_utility::pallet::Call<T>
   **/
  PalletMatrixUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
        continueOnFailure: 'bool'
      }
    }
  },
  /**
   * Lookup553: pallet_claims::pallet::Call<T>
   **/
  PalletClaimsCall: {
    _enum: {
      claim: {
        dest: 'AccountId32',
        ethereumSignature: '[u8;65]',
        ethereumAddress: 'H160',
      },
      mint_claim: {
        who: 'H160',
        value: 'u128',
      },
      move_claim: {
        _alias: {
          new_: 'new',
        },
        old: 'H160',
        new_: 'H160',
      },
      request_claims: {
        blockNumber: 'u32',
        batchData: 'Vec<PalletClaimsClaim>',
      },
      __Unused4: 'Null',
      reject_claims: {
        batchData: 'Vec<PalletClaimsRejectData>',
      },
      __Unused6: 'Null',
      __Unused7: 'Null',
      set_exchange_rate: {
        numerator: 'u128',
        denominator: 'u128',
      },
      set_delay_time: {
        delayTime: 'u32'
      }
    }
  },
  /**
   * Lookup555: pallet_claims::types::Claim<Balance, primitive_types::H256>
   **/
  PalletClaimsClaim: {
    _alias: {
      hash_: 'hash'
    },
    hash_: 'H256',
    claim: 'PalletClaimsTransactionData',
    isEfiToken: 'bool'
  },
  /**
   * Lookup556: pallet_claims::types::TransactionData<Balance>
   **/
  PalletClaimsTransactionData: {
    account: 'H160',
    amount: 'u128'
  },
  /**
   * Lookup559: pallet_claims::types::RejectData<primitive_types::H256>
   **/
  PalletClaimsRejectData: {
    _alias: {
      hash_: 'hash'
    },
    account: 'H160',
    hash_: 'H256'
  },
  /**
   * Lookup561: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'MultiAddress',
      },
      set_identity: {
        info: 'PalletIdentityLegacyIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(AccountId32,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'MultiAddress',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'u64',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'MultiAddress',
        judgement: 'PalletIdentityJudgement',
        identity: 'H256',
      },
      kill_identity: {
        target: 'MultiAddress',
      },
      add_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      rename_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      remove_sub: {
        sub: 'MultiAddress',
      },
      quit_sub: 'Null',
      add_username_authority: {
        authority: 'MultiAddress',
        suffix: 'Bytes',
        allocation: 'u32',
      },
      remove_username_authority: {
        authority: 'MultiAddress',
      },
      set_username_for: {
        who: 'MultiAddress',
        username: 'Bytes',
        signature: 'Option<SpRuntimeMultiSignature>',
      },
      accept_username: {
        username: 'Bytes',
      },
      remove_expired_approval: {
        username: 'Bytes',
      },
      set_primary_username: {
        username: 'Bytes',
      },
      remove_dangling_username: {
        username: 'Bytes'
      }
    }
  },
  /**
   * Lookup562: pallet_identity::legacy::IdentityInfo<FieldLimit>
   **/
  PalletIdentityLegacyIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup598: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup600: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: '[u8;64]',
      Sr25519: '[u8;64]',
      Ecdsa: '[u8;65]'
    }
  },
  /**
   * Lookup601: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'MultiAddress',
        forceProxyType: 'Option<RuntimeCommonImplsProxyProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'RuntimeCommonImplsProxyProxyType',
        delay: 'u32',
      },
      remove_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'RuntimeCommonImplsProxyProxyType',
        delay: 'u32',
      },
      remove_proxies: 'Null',
      create_pure: {
        proxyType: 'RuntimeCommonImplsProxyProxyType',
        delay: 'u32',
        index: 'u16',
      },
      kill_pure: {
        spawner: 'MultiAddress',
        proxyType: 'RuntimeCommonImplsProxyProxyType',
        index: 'u16',
        height: 'Compact<u32>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'MultiAddress',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'MultiAddress',
        real: 'MultiAddress',
        forceProxyType: 'Option<RuntimeCommonImplsProxyProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup603: pallet_migrations::pallet::Call<T>
   **/
  PalletMigrationsCall: {
    _enum: {
      force_set_cursor: {
        cursor: 'Option<PalletMigrationsMigrationCursor>',
      },
      force_set_active_cursor: {
        index: 'u32',
        innerCursor: 'Option<Bytes>',
        startedAt: 'Option<u32>',
      },
      force_onboard_mbms: 'Null',
      clear_historic: {
        selector: 'PalletMigrationsHistoricCleanupSelector'
      }
    }
  },
  /**
   * Lookup605: pallet_migrations::MigrationCursor<bounded_collections::bounded_vec::BoundedVec<T, S>, BlockNumber>
   **/
  PalletMigrationsMigrationCursor: {
    _enum: {
      Active: 'PalletMigrationsActiveCursor',
      Stuck: 'Null'
    }
  },
  /**
   * Lookup607: pallet_migrations::ActiveCursor<bounded_collections::bounded_vec::BoundedVec<T, S>, BlockNumber>
   **/
  PalletMigrationsActiveCursor: {
    index: 'u32',
    innerCursor: 'Option<Bytes>',
    startedAt: 'u32'
  },
  /**
   * Lookup609: pallet_migrations::HistoricCleanupSelector<bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PalletMigrationsHistoricCleanupSelector: {
    _enum: {
      Specific: 'Vec<Bytes>',
      Wildcard: {
        limit: 'Option<u32>',
        previousCursor: 'Option<Bytes>'
      }
    }
  },
  /**
   * Lookup612: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup615: pallet_scheduler::RetryConfig<Period>
   **/
  PalletSchedulerRetryConfig: {
    totalRetries: 'u8',
    remaining: 'u8',
    period: 'u32'
  },
  /**
   * Lookup616: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup617: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup619: pallet_safe_mode::pallet::Error<T>
   **/
  PalletSafeModeError: {
    _enum: ['Entered', 'Exited', 'NotConfigured', 'NoDeposit', 'AlreadyDeposited', 'CannotReleaseYet', 'CurrencyError']
  },
  /**
   * Lookup621: pallet_balances::types::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup622: pallet_balances::types::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup625: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup631: frame_support::traits::tokens::misc::IdAmount<Id, Balance>
   **/
  FrameSupportTokensMiscIdAmount: {
    id: 'Null',
    amount: 'u128'
  },
  /**
   * Lookup633: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes', 'IssuanceDeactivated', 'DeltaZero']
  },
  /**
   * Lookup634: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup639: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<enjin_matrix_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance>
   **/
  PalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: 'PalletDemocracyReferendumStatus',
      Finished: {
        approved: 'bool',
        end: 'u32'
      }
    }
  },
  /**
   * Lookup640: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<enjin_matrix_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u32',
    proposal: 'FrameSupportPreimagesBounded',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u32',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup641: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup642: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
   **/
  PalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock',
      },
      Delegating: {
        balance: 'u128',
        target: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock'
      }
    }
  },
  /**
   * Lookup646: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup647: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u32,u128)',
  /**
   * Lookup650: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'ReferendumInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooMany', 'VotingPeriodLow', 'PreimageNotExist']
  },
  /**
   * Lookup652: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u32'
  },
  /**
   * Lookup653: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength', 'PrimeAccountNotMember']
  },
  /**
   * Lookup656: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup659: pallet_treasury::SpendStatus<AssetKind, AssetBalance, sp_core::crypto::AccountId32, BlockNumber, PaymentId>
   **/
  PalletTreasurySpendStatus: {
    assetKind: 'Null',
    amount: 'u128',
    beneficiary: 'AccountId32',
    validFrom: 'u32',
    expireAt: 'u32',
    status: 'PalletTreasuryPaymentState'
  },
  /**
   * Lookup660: pallet_treasury::PaymentState<Id>
   **/
  PalletTreasuryPaymentState: {
    _enum: {
      Pending: 'Null',
      Attempted: {
        id: 'Null',
      },
      Failed: 'Null'
    }
  },
  /**
   * Lookup662: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup663: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved', 'FailedToConvertBalance', 'SpendExpired', 'EarlyPayout', 'AlreadyAttempted', 'PayoutError', 'NotAttempted', 'Inconclusive']
  },
  /**
   * Lookup665: pallet_membership::pallet::Error<T, I>
   **/
  PalletMembershipError: {
    _enum: ['AlreadyMember', 'NotMember', 'TooManyMembers']
  },
  /**
   * Lookup667: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup669: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup671: pallet_collator_staking::types::Collator<sp_core::crypto::AccountId32, Amount, enjin_matrix_runtime::MaxNominationPerCollator>
   **/
  PalletCollatorStakingCollator: {
    account: 'AccountId32',
    amount: 'u128',
    totalStake: 'u128',
    rewardsCut: 'Perbill',
    nominators: 'Vec<AccountId32>'
  },
  /**
   * Lookup672: enjin_matrix_runtime::MaxNominationPerCollator
   **/
  EnjinMatrixRuntimeMaxNominationPerCollator: 'Null',
  /**
   * Lookup676: pallet_collator_staking::types::CandidateSet<sp_core::crypto::AccountId32, Amount, enjin_matrix_runtime::MaxNominationPerCollator, enjin_matrix_runtime::MaxCandidates>
   **/
  PalletCollatorStakingCandidateSet: 'Vec<PalletCollatorStakingCollator>',
  /**
   * Lookup677: enjin_matrix_runtime::MaxCandidates
   **/
  EnjinMatrixRuntimeMaxCandidates: 'Null',
  /**
   * Lookup679: pallet_collator_staking::types::Nomination<sp_core::crypto::AccountId32, Amount>
   **/
  PalletCollatorStakingNomination: {
    account: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup680: pallet_collator_staking::types::Round<BlockNumber, sp_core::crypto::AccountId32, Amount, enjin_matrix_runtime::MaxCollators, enjin_matrix_runtime::MaxNominationPerCollator>
   **/
  PalletCollatorStakingRound: {
    number: 'u32',
    startingBlock: 'u32',
    collators: 'Vec<PalletCollatorStakingCollator>'
  },
  /**
   * Lookup681: enjin_matrix_runtime::MaxCollators
   **/
  EnjinMatrixRuntimeMaxCollators: 'Null',
  /**
   * Lookup682: pallet_collator_staking::types::CollatorSessionInfo
   **/
  PalletCollatorStakingCollatorSessionInfo: {
    authoredBlockCount: 'Compact<u32>',
    uptime: 'Compact<Perbill>'
  },
  /**
   * Lookup683: pallet_collator_staking::pallet::Error<T>
   **/
  PalletCollatorStakingError: {
    _enum: ['CandidateExists', 'CandidateDoesNotExist', 'NominationExists', 'NominationDoesNotExist', 'BelowMinStakeAmount', 'BelowMinNominationStakeAmount', 'ExitInProgress', 'TooManyInvulnerables', 'TooManyCandidates', 'TooManyNominations', 'NotCollator', 'CannotUnbondInvulnerable', 'AccountIdNotRegistered', 'NoAssociatedValidatorId']
  },
  /**
   * Lookup687: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup688: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup697: cumulus_pallet_xcmp_queue::OutboundChannelDetails
   **/
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: 'u32',
    state: 'CumulusPalletXcmpQueueOutboundState',
    signalsExist: 'bool',
    firstIndex: 'u16',
    lastIndex: 'u16'
  },
  /**
   * Lookup698: cumulus_pallet_xcmp_queue::OutboundState
   **/
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup702: cumulus_pallet_xcmp_queue::QueueConfigData
   **/
  CumulusPalletXcmpQueueQueueConfigData: {
    suspendThreshold: 'u32',
    dropThreshold: 'u32',
    resumeThreshold: 'u32'
  },
  /**
   * Lookup703: cumulus_pallet_xcmp_queue::pallet::Error<T>
   **/
  CumulusPalletXcmpQueueError: {
    _enum: ['BadQueueConfig', 'AlreadySuspended', 'AlreadyResumed', 'TooManyActiveOutboundChannels', 'TooBig']
  },
  /**
   * Lookup704: pallet_xcm::pallet::QueryStatus<BlockNumber>
   **/
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: 'XcmVersionedLocation',
        maybeMatchQuerier: 'Option<XcmVersionedLocation>',
        maybeNotify: 'Option<(u8,u8)>',
        timeout: 'u32',
      },
      VersionNotifier: {
        origin: 'XcmVersionedLocation',
        isActive: 'bool',
      },
      Ready: {
        response: 'XcmVersionedResponse',
        at: 'u32'
      }
    }
  },
  /**
   * Lookup708: xcm::VersionedResponse
   **/
  XcmVersionedResponse: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'XcmV2Response',
      V3: 'XcmV3Response',
      V4: 'StagingXcmV4Response'
    }
  },
  /**
   * Lookup714: pallet_xcm::pallet::VersionMigrationStage
   **/
  PalletXcmVersionMigrationStage: {
    _enum: {
      MigrateSupportedVersion: 'Null',
      MigrateVersionNotifiers: 'Null',
      NotifyCurrentTargets: 'Option<Bytes>',
      MigrateAndNotifyOldTargets: 'Null'
    }
  },
  /**
   * Lookup716: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
   **/
  PalletXcmRemoteLockedFungibleRecord: {
    amount: 'u128',
    owner: 'XcmVersionedLocation',
    locker: 'XcmVersionedLocation',
    consumers: 'Vec<(Null,u128)>'
  },
  /**
   * Lookup723: pallet_xcm::pallet::Error<T>
   **/
  PalletXcmError: {
    _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed', 'CannotCheckOutTeleport', 'LowBalance', 'TooManyLocks', 'AccountNotSovereign', 'FeesNotMet', 'LockNotFound', 'InUse', '__Unused20', 'InvalidAssetUnknownReserve', 'InvalidAssetUnsupportedReserve', 'TooManyReserves', 'LocalExecutionIncomplete']
  },
  /**
   * Lookup724: cumulus_pallet_dmp_queue::pallet::MigrationState
   **/
  CumulusPalletDmpQueueMigrationState: {
    _enum: {
      NotStarted: 'Null',
      StartedExport: {
        nextBeginUsed: 'u32',
      },
      CompletedExport: 'Null',
      StartedOverweightExport: {
        nextOverweightIndex: 'u64',
      },
      CompletedOverweightExport: 'Null',
      StartedCleanup: {
        cursor: 'Option<Bytes>',
      },
      Completed: 'Null'
    }
  },
  /**
   * Lookup727: orml_xcm::module::Error<T>
   **/
  OrmlXcmModuleError: {
    _enum: ['Unreachable', 'SendFailure', 'BadVersion']
  },
  /**
   * Lookup728: matrix_pallet_xcm::pallet::Error<T>
   **/
  MatrixPalletXcmError: {
    _enum: ['InvalidAddress', 'NotTransferable']
  },
  /**
   * Lookup731: orml_unknown_tokens::module::Error<T>
   **/
  OrmlUnknownTokensModuleError: {
    _enum: ['BalanceTooLow', 'BalanceOverflow', 'UnhandledAsset']
  },
  /**
   * Lookup732: orml_xtokens::module::Error<T>
   **/
  OrmlXtokensModuleError: {
    _enum: ['AssetHasNoReserve', 'NotCrossChainTransfer', 'InvalidDest', 'NotCrossChainTransferableCurrency', 'UnweighableMessage', 'XcmExecutionFailed', 'CannotReanchor', 'InvalidAncestry', 'InvalidAsset', 'DestinationNotInvertible', 'BadVersion', 'DistinctReserveForAssetAndFee', 'ZeroFee', 'ZeroAmount', 'TooManyAssetsBeingSent', 'AssetIndexNonExistent', 'FeeNotEnough', 'NotSupportedLocation', 'MinXcmFeeNotDefined', 'RateLimited']
  },
  /**
   * Lookup733: pallet_message_queue::BookState<cumulus_primitives_core::AggregateMessageOrigin>
   **/
  PalletMessageQueueBookState: {
    _alias: {
      size_: 'size'
    },
    begin: 'u32',
    end: 'u32',
    count: 'u32',
    readyNeighbours: 'Option<PalletMessageQueueNeighbours>',
    messageCount: 'u64',
    size_: 'u64'
  },
  /**
   * Lookup735: pallet_message_queue::Neighbours<cumulus_primitives_core::AggregateMessageOrigin>
   **/
  PalletMessageQueueNeighbours: {
    prev: 'CumulusPrimitivesCoreAggregateMessageOrigin',
    next: 'CumulusPrimitivesCoreAggregateMessageOrigin'
  },
  /**
   * Lookup737: pallet_message_queue::Page<Size, HeapSize>
   **/
  PalletMessageQueuePage: {
    remaining: 'u32',
    remainingSize: 'u32',
    firstIndex: 'u32',
    first: 'u32',
    last: 'u32',
    heap: 'Bytes'
  },
  /**
   * Lookup739: pallet_message_queue::pallet::Error<T>
   **/
  PalletMessageQueueError: {
    _enum: ['NotReapable', 'NoPage', 'NoMessage', 'AlreadyProcessed', 'Queued', 'InsufficientWeight', 'TemporarilyUnprocessable', 'QueuePaused', 'RecursiveDisallowed']
  },
  /**
   * Lookup740: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletBountiesBounty: {
    proposer: 'AccountId32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    bond: 'u128',
    status: 'PalletBountiesBountyStatus'
  },
  /**
   * Lookup741: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletBountiesBountyStatus: {
    _enum: {
      Proposed: 'Null',
      Approved: 'Null',
      Funded: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
        updateDue: 'u32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup743: pallet_bounties::pallet::Error<T, I>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
  },
  /**
   * Lookup745: pallet_multi_tokens::features::group::types::TokenGroup<T>
   **/
  PalletMultiTokensFeaturesGroupTypesTokenGroup: {
    collectionId: 'Compact<u128>',
    attributeCount: 'Compact<u32>',
    tokenCount: 'Compact<u64>',
    deposit: 'EpCoreFrameTypesAmbiguousDeposit'
  },
  /**
   * Lookup749: pallet_multi_tokens::types::CollectionDepositUpdateStatus<T>
   **/
  PalletMultiTokensCollectionDepositUpdateStatus: {
    collectionId: 'u128',
    lastUpdatedTokenKey: 'PalletMultiTokensLastUpdatedKeyStatus',
    lastUpdatedAttributeKey: 'PalletMultiTokensLastUpdatedKeyStatus',
    calculatedDeposit: 'u128'
  },
  /**
   * Lookup750: pallet_multi_tokens::types::LastUpdatedKeyStatus<T>
   **/
  PalletMultiTokensLastUpdatedKeyStatus: {
    _enum: {
      NotStarted: 'Null',
      InProgress: 'Bytes',
      Finished: 'Null'
    }
  },
  /**
   * Lookup752: ep_multi_tokens::types::NativeAssetInfo<ep_multi_tokens::token::AssetId<CollectionId, TokenId>>
   **/
  EpMultiTokensNativeAssetInfo: {
    id: 'EpMultiTokensTokenAssetId',
    unitsPerSecond: 'u128'
  },
  /**
   * Lookup753: pallet_multi_tokens::pallet::Error<T>
   **/
  PalletMultiTokensError: {
    _enum: ['CollectionNotFound', 'CollectionAccountNotFound', 'TokenNotFound', 'TokenAccountNotFound', 'NoPermission', 'BalanceLow', 'Frozen', 'HasNeverFreezeState', 'PermanentlyFrozen', 'InvalidFreezeState', 'AmountZero', 'InvalidAttributeKey', 'MaxTokenCountExceeded', 'TokenMintCapExceeded', 'TokenAlreadyExists', 'DestroyForbiddenByAttributeCount', 'DestroyForbiddenByRemainingTokens', 'DestroyForbiddenByCollectionEvent', 'DepositReserveFailed', 'DepositUnreserveFailed', 'MintFailedRequirements', 'IdleOperationQueueFull', 'ReservesLow', 'TooManyReserves', 'TooManyLocks', 'LiquidityRestrictions', 'PercentageOutOfBounds', 'CurrencyIncompatibleWithCollectionRoyalty', 'MaxApprovalsExceeded', 'AlreadyExpired', 'CollectionAlreadyApproved', 'InsufficientAllowance', 'WrongCurrentApprovedAmount', 'CannotApproveSelf', 'CannotTransferToSelf', 'TransferParamCreationFailed', 'OperationNotAllowedForNativeToken', 'InvalidExplicitRoyaltyCurrencies', 'InvalidAttributeCount', 'ConflictingLocation', 'CollectionIdAlreadyInUse', 'FreezeStateRequired', 'PremintExceeded', 'TokenMetadataCreationFailed', 'NoClaimAvailable', 'InvalidEthereumSignature', 'InvalidEthereumAddress', 'TokenIdReservedForClaim', 'CollectionCountExceeded', 'WrongCount', 'InvalidMintParams', 'NoPendingCollectionTransfer', 'AlreadyCollectionOwner', 'InsufficientDeposit', 'IncompatibleToken', 'MaxDecimalCountExceeded', 'AccountDepositNotAllowedWithDepositor', 'CollectionDepositRecalculationStatus', 'BatchLimitExceeded', 'ExceededMaxKeyLength', 'TwoDepositors', 'TokenGroupNotFound', 'IncompatibleTokenGroup', 'MaxTokenGroupsExceeded', 'TokenAlreadyInGroup', 'DestroyForbiddenByTokenGroupCount']
  },
  /**
   * Lookup758: ep_core::frame::types::PoolAccountIds<sp_core::crypto::AccountId32>
   **/
  EpCoreFrameTypesPoolAccountIds: {
    collator: 'AccountId32',
    community: 'AccountId32',
    fuelTanks: 'AccountId32',
    priceDiscovery: 'AccountId32'
  },
  /**
   * Lookup759: pallet_pools::pallet::Error<T>
   **/
  PalletPoolsError: {
    _enum: ['InvalidFeeShares', 'PoolCountExceeded']
  },
  /**
   * Lookup760: pallet_fuel_tanks::types::FuelTank<ep_core::frame::types::BoundedString<enjin_matrix_runtime::MaxFuelTankNameLength>, sp_core::crypto::AccountId32, Balance, bounded_collections::bounded_btree_map::BoundedBTreeMap<K, pallet_fuel_tanks::rules::RuleSet<pallet_fuel_tanks::rules::DispatchRuleWrapper<T>, enjin_matrix_runtime::MaxRulesPerSet>, S>, bounded_collections::bounded_btree_map::BoundedBTreeMap<pallet_fuel_tanks::rules::AccountRuleKind, pallet_fuel_tanks::rules::AccountRuleWrapper<T>, S>>
   **/
  PalletFuelTanksFuelTank: {
    owner: 'AccountId32',
    name: 'Bytes',
    ruleSets: 'BTreeMap<u32, PalletFuelTanksRulesRuleSet>',
    totalReserved: 'Compact<u128>',
    accountCount: 'Compact<u32>',
    userAccountManagement: 'Option<PalletFuelTanksUserAccountManagement>',
    isFrozen: 'bool',
    coveragePolicy: 'PalletFuelTanksCoveragePolicy',
    accountRules: 'BTreeMap<PalletFuelTanksRulesAccountRuleKind, PalletFuelTanksRulesAccountRuleWrapper>'
  },
  /**
   * Lookup762: pallet_fuel_tanks::rules::RuleSet<pallet_fuel_tanks::rules::DispatchRuleWrapper<T>, enjin_matrix_runtime::MaxRulesPerSet>
   **/
  PalletFuelTanksRulesRuleSet: {
    rules: 'BTreeMap<PalletFuelTanksRulesDispatchRuleKind, PalletFuelTanksRulesDispatchRuleWrapper>',
    isFrozen: 'bool',
    requireAccount: 'bool'
  },
  /**
   * Lookup763: pallet_fuel_tanks::rules::DispatchRuleWrapper<T>
   **/
  PalletFuelTanksRulesDispatchRuleWrapper: {
    _enum: {
      WhitelistedCallers: 'PalletFuelTanksRulesWhitelistedCallersWhitelistedCallersRule',
      WhitelistedCollections: 'PalletFuelTanksRulesWhitelistedCollectionsWhitelistedCollectionsRule',
      MaxFuelBurnPerTransaction: 'u128',
      UserFuelBudget: 'PalletFuelTanksRulesUserFuelBudgetUserFuelBudgetRule',
      TankFuelBudget: 'PalletFuelTanksRulesTankFuelBudgetTankFuelBudgetRule',
      RequireToken: 'PalletFuelTanksRulesRequireTokenRequireTokenRule',
      PermittedCalls: 'PalletFuelTanksRulesPermittedCallsPermittedCallsRule',
      PermittedExtrinsics: 'PalletFuelTanksRulesPermittedExtrinsicsPermittedExtrinsicsRule',
      WhitelistedPallets: 'PalletFuelTanksRulesWhitelistedPalletsWhitelistedPalletsRule',
      RequireSignature: 'PalletFuelTanksRulesRequireSignatureRequireSignatureRule',
      MinimumInfusion: 'u128'
    }
  },
  /**
   * Lookup764: pallet_fuel_tanks::rules::user_fuel_budget::UserFuelBudgetRule<pallet_fuel_tanks::types::Budget<Balance, BlockNumber>>
   **/
  PalletFuelTanksRulesUserFuelBudgetUserFuelBudgetRule: {
    budget: 'PalletFuelTanksBudget',
    userCount: 'Compact<u32>'
  },
  /**
   * Lookup765: pallet_fuel_tanks::rules::tank_fuel_budget::TankFuelBudgetRule<Balance, BlockNumber>
   **/
  PalletFuelTanksRulesTankFuelBudgetTankFuelBudgetRule: {
    budget: 'PalletFuelTanksBudget',
    consumption: 'PalletFuelTanksConsumption'
  },
  /**
   * Lookup766: pallet_fuel_tanks::rules::permitted_extrinsics::PermittedExtrinsicsRule<pallet_fuel_tanks::types::ExtrinsicInfo<enjin_matrix_runtime::MaxExtrinsicNameLength>, enjin_matrix_runtime::MaxPermittedExtrinsicLength>
   **/
  PalletFuelTanksRulesPermittedExtrinsicsPermittedExtrinsicsRule: 'Vec<PalletFuelTanksExtrinsicInfo>',
  /**
   * Lookup767: pallet_fuel_tanks::types::ExtrinsicInfo<enjin_matrix_runtime::MaxExtrinsicNameLength>
   **/
  PalletFuelTanksExtrinsicInfo: {
    palletName: 'Bytes',
    extrinsicName: 'Bytes'
  },
  /**
   * Lookup768: enjin_matrix_runtime::MaxExtrinsicNameLength
   **/
  EnjinMatrixRuntimeMaxExtrinsicNameLength: 'Null',
  /**
   * Lookup773: pallet_fuel_tanks::rules::whitelisted_pallets::WhitelistedPalletsRule<ep_core::frame::types::BoundedString<enjin_matrix_runtime::MaxExtrinsicNameLength>, enjin_matrix_runtime::MaxCallFilters>
   **/
  PalletFuelTanksRulesWhitelistedPalletsWhitelistedPalletsRule: 'Vec<Bytes>',
  /**
   * Lookup784: pallet_fuel_tanks::rules::AccountRuleKind
   **/
  PalletFuelTanksRulesAccountRuleKind: {
    _enum: ['WhitelistedCallers', 'RequireToken']
  },
  /**
   * Lookup785: pallet_fuel_tanks::rules::AccountRuleWrapper<T>
   **/
  PalletFuelTanksRulesAccountRuleWrapper: {
    _enum: {
      WhitelistedCallers: 'PalletFuelTanksRulesWhitelistedCallersWhitelistedCallersRule',
      RequireToken: 'PalletFuelTanksRulesRequireTokenRequireTokenRule'
    }
  },
  /**
   * Lookup790: pallet_fuel_tanks::types::UserAccount<Balance, RuleSetId, enjin_matrix_runtime::MaxRuleSets, enjin_matrix_runtime::MaxRulesPerSet, enjin_matrix_runtime::MaxAccountRuleDataLength>
   **/
  PalletFuelTanksUserAccount: {
    tankDeposit: 'Compact<u128>',
    userDeposit: 'Compact<u128>',
    totalReceived: 'Compact<u128>',
    ruleDataSets: 'BTreeMap<u32, BTreeMap<PalletFuelTanksRulesDispatchRuleKind, Bytes>>'
  },
  /**
   * Lookup791: enjin_matrix_runtime::MaxRuleSets
   **/
  EnjinMatrixRuntimeMaxRuleSets: 'Null',
  /**
   * Lookup792: enjin_matrix_runtime::MaxAccountRuleDataLength
   **/
  EnjinMatrixRuntimeMaxAccountRuleDataLength: 'Null',
  /**
   * Lookup802: pallet_fuel_tanks::pallet::Error<T>
   **/
  PalletFuelTanksError: {
    _enum: ['FuelTankNotFound', 'FuelTankAlreadyExists', 'InsufficientBalance', 'UsageRestricted', 'FuelTankOutOfFunds', 'RuleSetNotFound', 'RuleNotFound', 'NoPermission', 'AccountAlreadyExists', 'AccountNotFound', 'DestroyWithExistingAccounts', 'MaxRuleSetsExceeded', 'UserRuleDataExceededMaxSize', 'DecodeUserRuleDataFailed', 'MissingRequiredRule', 'MissingRequiredRuleUserData', 'InvalidRuleSet', 'AccountContainsRuleData', 'CannotRemoveRuleThatIsStoringAccountData', 'DuplicateRuleKinds', 'DepositCalculationError', 'CallerDoesNotHaveRuleSetTokenBalance', 'NoDataToRemove', 'RuleSetsCannotBeEmpty']
  },
  /**
   * Lookup803: pallet_marketplace::types::MarketPlaceInfo
   **/
  PalletMarketplaceMarketPlaceInfo: {
    protocolFee: 'Compact<Perbill>'
  },
  /**
   * Lookup806: pallet_marketplace::types::PendingAction<primitive_types::H256, sp_core::crypto::AccountId32>
   **/
  PalletMarketplacePendingAction: {
    _enum: {
      RemoveCounterOffers: {
        listingId: 'H256',
      },
      RemoveWhitelistedAccounts: {
        listingId: 'H256',
        listingCreator: 'AccountId32'
      }
    }
  },
  /**
   * Lookup808: pallet_marketplace::features::whitelist::WhitelistedAccount<T>
   **/
  PalletMarketplaceFeaturesWhitelistWhitelistedAccount: {
    allowance: 'Option<u128>',
    amountUsed: 'Compact<u128>',
    deposit: 'u128'
  },
  /**
   * Lookup809: pallet_marketplace::pallet::Error<T>
   **/
  PalletMarketplaceError: {
    _enum: ['UnableToFill', 'ListingNotFound', 'NoPermission', 'MaxRoundingErrorExceeded', 'LowBaseCurrencyBalance', 'LowTokenBalance', 'TransferParamCreationFailed', 'ReceivedValueUnderMinimum', 'ListingAlreadyExists', 'InvalidAuctionEnd', 'InactiveAuction', 'AuctionNotOver', 'ListingIsWrongType', 'InvalidAmount', 'InvalidPrice', 'InvalidListingStart', 'ListingForbidden', 'NoCurrency', 'ListingNotActive', 'CurrencyNotAllowedAsRoyalty', 'BuyerIsSeller', 'MakeAssetFrozen', 'TakeAssetFrozen', 'CannotCancelAuctionWithBid', 'CannotCancelAuctionAfterEndBlock', 'InvalidExpiration', 'NotExpired', 'NoCounterOffer', 'PartialFillNotAllowed', 'InvalidFeeSide', 'WrongCurrentPrice', 'CannotCounterSelf', 'MaxPendingActionsExceeded', 'CounterOfferExists', 'ListingExpired', 'CannotAcceptOwnCounterOffer', 'AccountNotWhitelisted', 'WhitelistAmountAllowedExceeded', 'ListingDoesNotUseWhitelist', 'IncorrectRoyaltyBeneficiaryCount']
  },
  /**
   * Lookup810: ep_core::frame::types::ExtrinsicInfo<enjin_matrix_runtime::MaxNameLength>
   **/
  EpCoreFrameTypesExtrinsicInfo: {
    palletName: 'Bytes',
    extrinsicName: 'Option<Bytes>'
  },
  /**
   * Lookup812: pallet_extrinsic_pause::pallet::Error<T>
   **/
  PalletExtrinsicPauseError: {
    _enum: ['CannotPauseSelf', 'CannotProcessInput']
  },
  /**
   * Lookup813: pallet_matrix_utility::pallet::Error<T>
   **/
  PalletMatrixUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup815: pallet_claims::types::ClaimData<Balance, primitive_types::H256, BlockNumber>
   **/
  PalletClaimsClaimData: {
    _alias: {
      hash_: 'hash'
    },
    hash_: 'Option<H256>',
    amount: 'u128',
    isEfiToken: 'bool',
    startBlockNumber: 'u32'
  },
  /**
   * Lookup817: pallet_claims::pallet::Error<T>
   **/
  PalletClaimsError: {
    _enum: ['InvalidEthereumSignature', 'SignerHasNoClaim', 'AmountZero', 'InvalidClaimRequestTimestamp', 'ExchangeRateIsNotSet', 'OutOfBounds', 'InvalidClaimTimestamp', 'DelayTimeForClaimNotSet', 'DelayTimeSetTooLow', 'InvalidEthereumAddress', 'DelayTimeForClaimNotEnded', 'SameEthereumAddress']
  },
  /**
   * Lookup819: pallet_identity::types::Registration<Balance, MaxJudgements, pallet_identity::legacy::IdentityInfo<FieldLimit>>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityLegacyIdentityInfo'
  },
  /**
   * Lookup828: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32, IdField>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'u64'
  },
  /**
   * Lookup830: pallet_identity::types::AuthorityProperties<bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PalletIdentityAuthorityProperties: {
    suffix: 'Bytes',
    allocation: 'u32'
  },
  /**
   * Lookup832: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed', 'InvalidSuffix', 'NotUsernameAuthority', 'NoAllocation', 'InvalidSignature', 'RequiresSignature', 'InvalidUsername', 'UsernameTaken', 'NoUsername', 'NotExpired']
  },
  /**
   * Lookup835: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, runtime_common::impls::proxy::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'RuntimeCommonImplsProxyProxyType',
    delay: 'u32'
  },
  /**
   * Lookup839: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup841: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup842: pallet_migrations::pallet::Error<T>
   **/
  PalletMigrationsError: {
    _enum: ['Ongoing']
  },
  /**
   * Lookup845: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup846: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup847: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup850: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup851: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup852: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup853: pallet_fuel_tanks::extension::CheckFuelTank<T>
   **/
  PalletFuelTanksExtensionCheckFuelTank: 'Null',
  /**
   * Lookup854: frame_metadata_hash_extension::CheckMetadataHash<T>
   **/
  FrameMetadataHashExtensionCheckMetadataHash: {
    mode: 'FrameMetadataHashExtensionMode'
  },
  /**
   * Lookup855: frame_metadata_hash_extension::Mode
   **/
  FrameMetadataHashExtensionMode: {
    _enum: ['Disabled', 'Enabled']
  }
};
