// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::types::AccountData<Balance>>
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
   * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup9: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup14: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup16: sp_runtime::generic::digest::DigestItem
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
   * Lookup19: frame_system::EventRecord<enjin_matrix_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup21: frame_system::pallet::Event<T>
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
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup22: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup23: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup24: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup25: sp_runtime::DispatchError
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
   * Lookup26: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup27: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
  },
  /**
   * Lookup28: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup29: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup30: cumulus_pallet_parachain_system::pallet::Event<T>
   **/
  CumulusPalletParachainSystemEvent: {
    _enum: {
      ValidationFunctionStored: 'Null',
      ValidationFunctionApplied: {
        relayChainBlockNum: 'u32',
      },
      ValidationFunctionDiscarded: 'Null',
      UpgradeAuthorized: {
        codeHash: 'H256',
      },
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
   * Lookup32: pallet_preimage::pallet::Event<T>
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
   * Lookup33: pallet_scheduler::pallet::Event<T>
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
      CallUnavailable: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PeriodicFailed: {
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
   * Lookup37: pallet_utility::pallet::Event
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
   * Lookup38: pallet_balances::pallet::Event<T, I>
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
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup39: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup40: pallet_transaction_payment::pallet::Event<T>
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
   * Lookup41: pallet_democracy::pallet::Event<T>
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
   * Lookup42: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup43: pallet_democracy::vote::AccountVote<Balance>
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
   * Lookup45: pallet_democracy::types::MetadataOwner
   **/
  PalletDemocracyMetadataOwner: {
    _enum: {
      External: 'Null',
      Proposal: 'u32',
      Referendum: 'u32'
    }
  },
  /**
   * Lookup46: pallet_collective::pallet::Event<T, I>
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
   * Lookup49: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
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
        deactivated: 'u128'
      }
    }
  },
  /**
   * Lookup50: pallet_membership::pallet::Event<T, I>
   **/
  PalletMembershipEvent: {
    _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
  },
  /**
   * Lookup51: pallet_multisig::pallet::Event<T>
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
   * Lookup52: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup53: pallet_collator_staking::pallet::Event<T>
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
   * Lookup56: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup57: cumulus_pallet_xcmp_queue::pallet::Event<T>
   **/
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      Success: {
        messageHash: 'Option<[u8;32]>',
        weight: 'SpWeightsWeightV2Weight',
      },
      Fail: {
        messageHash: 'Option<[u8;32]>',
        error: 'XcmV3TraitsError',
        weight: 'SpWeightsWeightV2Weight',
      },
      BadVersion: {
        messageHash: 'Option<[u8;32]>',
      },
      BadFormat: {
        messageHash: 'Option<[u8;32]>',
      },
      XcmpMessageSent: {
        messageHash: 'Option<[u8;32]>',
      },
      OverweightEnqueued: {
        sender: 'u32',
        sentAt: 'u32',
        index: 'u64',
        required: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        index: 'u64',
        used: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup58: xcm::v3::traits::Error
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
   * Lookup60: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: 'XcmV3TraitsOutcome',
      Sent: '(XcmV3MultiLocation,XcmV3MultiLocation,XcmV3Xcm)',
      UnexpectedResponse: '(XcmV3MultiLocation,u64)',
      ResponseReady: '(u64,XcmV3Response)',
      Notified: '(u64,u8,u8)',
      NotifyOverweight: '(u64,u8,u8,SpWeightsWeightV2Weight,SpWeightsWeightV2Weight)',
      NotifyDispatchError: '(u64,u8,u8)',
      NotifyDecodeFailed: '(u64,u8,u8)',
      InvalidResponder: '(XcmV3MultiLocation,u64,Option<XcmV3MultiLocation>)',
      InvalidResponderVersion: '(XcmV3MultiLocation,u64)',
      ResponseTaken: 'u64',
      AssetsTrapped: '(H256,XcmV3MultiLocation,XcmVersionedMultiAssets)',
      VersionChangeNotified: '(XcmV3MultiLocation,u32,XcmV3MultiassetMultiAssets)',
      SupportedVersionChanged: '(XcmV3MultiLocation,u32)',
      NotifyTargetSendFail: '(XcmV3MultiLocation,u64,XcmV3TraitsError)',
      NotifyTargetMigrationFail: '(XcmVersionedMultiLocation,u64)',
      InvalidQuerierVersion: '(XcmV3MultiLocation,u64)',
      InvalidQuerier: '(XcmV3MultiLocation,u64,XcmV3MultiLocation,Option<XcmV3MultiLocation>)',
      VersionNotifyStarted: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
      VersionNotifyRequested: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
      VersionNotifyUnrequested: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
      FeesPaid: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
      AssetsClaimed: '(H256,XcmV3MultiLocation,XcmVersionedMultiAssets)'
    }
  },
  /**
   * Lookup61: xcm::v3::traits::Outcome
   **/
  XcmV3TraitsOutcome: {
    _enum: {
      Complete: 'SpWeightsWeightV2Weight',
      Incomplete: '(SpWeightsWeightV2Weight,XcmV3TraitsError)',
      Error: 'XcmV3TraitsError'
    }
  },
  /**
   * Lookup62: xcm::v3::multilocation::MultiLocation
   **/
  XcmV3MultiLocation: {
    parents: 'u8',
    interior: 'XcmV3Junctions'
  },
  /**
   * Lookup63: xcm::v3::junctions::Junctions
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
   * Lookup64: xcm::v3::junction::Junction
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
   * Lookup67: xcm::v3::junction::NetworkId
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
      BitcoinCash: 'Null'
    }
  },
  /**
   * Lookup70: xcm::v3::junction::BodyId
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
   * Lookup71: xcm::v3::junction::BodyPart
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
   * Lookup72: xcm::v3::Xcm<Call>
   **/
  XcmV3Xcm: 'Vec<XcmV3Instruction>',
  /**
   * Lookup74: xcm::v3::Instruction<Call>
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
        querier: 'Option<XcmV3MultiLocation>',
      },
      TransferAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        beneficiary: 'XcmV3MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        dest: 'XcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      Transact: {
        originKind: 'XcmV2OriginKind',
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
        beneficiary: 'XcmV3MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'XcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV3MultiassetMultiAssetFilter',
        want: 'XcmV3MultiassetMultiAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        reserve: 'XcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'XcmV3MultiLocation',
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
        ticket: 'XcmV3MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'XcmV3MultiassetMultiAssets',
      ExpectAsset: 'XcmV3MultiassetMultiAssets',
      ExpectOrigin: 'Option<XcmV3MultiLocation>',
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
        unlocker: 'XcmV3MultiLocation',
      },
      UnlockAsset: {
        asset: 'XcmV3MultiAsset',
        target: 'XcmV3MultiLocation',
      },
      NoteUnlockable: {
        asset: 'XcmV3MultiAsset',
        owner: 'XcmV3MultiLocation',
      },
      RequestUnlock: {
        asset: 'XcmV3MultiAsset',
        locker: 'XcmV3MultiLocation',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'XcmV3MultiLocation',
      UnpaidExecution: {
        weightLimit: 'XcmV3WeightLimit',
        checkOrigin: 'Option<XcmV3MultiLocation>'
      }
    }
  },
  /**
   * Lookup75: xcm::v3::multiasset::MultiAssets
   **/
  XcmV3MultiassetMultiAssets: 'Vec<XcmV3MultiAsset>',
  /**
   * Lookup77: xcm::v3::multiasset::MultiAsset
   **/
  XcmV3MultiAsset: {
    id: 'XcmV3MultiassetAssetId',
    fun: 'XcmV3MultiassetFungibility'
  },
  /**
   * Lookup78: xcm::v3::multiasset::AssetId
   **/
  XcmV3MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV3MultiLocation',
      Abstract: '[u8;32]'
    }
  },
  /**
   * Lookup79: xcm::v3::multiasset::Fungibility
   **/
  XcmV3MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV3MultiassetAssetInstance'
    }
  },
  /**
   * Lookup80: xcm::v3::multiasset::AssetInstance
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
   * Lookup83: xcm::v3::Response
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
   * Lookup87: xcm::v3::PalletInfo
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
   * Lookup90: xcm::v3::MaybeErrorCode
   **/
  XcmV3MaybeErrorCode: {
    _enum: {
      Success: 'Null',
      Error: 'Bytes',
      TruncatedError: 'Bytes'
    }
  },
  /**
   * Lookup93: xcm::v2::OriginKind
   **/
  XcmV2OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup94: xcm::double_encoded::DoubleEncoded<T>
   **/
  XcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup95: xcm::v3::QueryResponseInfo
   **/
  XcmV3QueryResponseInfo: {
    destination: 'XcmV3MultiLocation',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup96: xcm::v3::multiasset::MultiAssetFilter
   **/
  XcmV3MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV3MultiassetMultiAssets',
      Wild: 'XcmV3MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup97: xcm::v3::multiasset::WildMultiAsset
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
   * Lookup98: xcm::v3::multiasset::WildFungibility
   **/
  XcmV3MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup99: xcm::v3::WeightLimit
   **/
  XcmV3WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'SpWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup100: xcm::VersionedMultiAssets
   **/
  XcmVersionedMultiAssets: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiassetMultiAssets',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetMultiAssets'
    }
  },
  /**
   * Lookup101: xcm::v2::multiasset::MultiAssets
   **/
  XcmV2MultiassetMultiAssets: 'Vec<XcmV2MultiAsset>',
  /**
   * Lookup103: xcm::v2::multiasset::MultiAsset
   **/
  XcmV2MultiAsset: {
    id: 'XcmV2MultiassetAssetId',
    fun: 'XcmV2MultiassetFungibility'
  },
  /**
   * Lookup104: xcm::v2::multiasset::AssetId
   **/
  XcmV2MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV2MultiLocation',
      Abstract: 'Bytes'
    }
  },
  /**
   * Lookup105: xcm::v2::multilocation::MultiLocation
   **/
  XcmV2MultiLocation: {
    parents: 'u8',
    interior: 'XcmV2MultilocationJunctions'
  },
  /**
   * Lookup106: xcm::v2::multilocation::Junctions
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
   * Lookup107: xcm::v2::junction::Junction
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
   * Lookup108: xcm::v2::NetworkId
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
   * Lookup110: xcm::v2::BodyId
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
   * Lookup111: xcm::v2::BodyPart
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
   * Lookup112: xcm::v2::multiasset::Fungibility
   **/
  XcmV2MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV2MultiassetAssetInstance'
    }
  },
  /**
   * Lookup113: xcm::v2::multiasset::AssetInstance
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
   * Lookup114: xcm::VersionedMultiLocation
   **/
  XcmVersionedMultiLocation: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiLocation',
      __Unused2: 'Null',
      V3: 'XcmV3MultiLocation'
    }
  },
  /**
   * Lookup115: cumulus_pallet_xcm::pallet::Event<T>
   **/
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: '[u8;32]',
      UnsupportedVersion: '[u8;32]',
      ExecutedDownward: '([u8;32],XcmV3TraitsOutcome)'
    }
  },
  /**
   * Lookup116: cumulus_pallet_dmp_queue::pallet::Event<T>
   **/
  CumulusPalletDmpQueueEvent: {
    _enum: {
      InvalidFormat: {
        messageId: '[u8;32]',
      },
      UnsupportedVersion: {
        messageId: '[u8;32]',
      },
      ExecutedDownward: {
        messageId: '[u8;32]',
        outcome: 'XcmV3TraitsOutcome',
      },
      WeightExhausted: {
        messageId: '[u8;32]',
        remainingWeight: 'SpWeightsWeightV2Weight',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightEnqueued: {
        messageId: '[u8;32]',
        overweightIndex: 'u64',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        overweightIndex: 'u64',
        weightUsed: 'SpWeightsWeightV2Weight',
      },
      MaxMessagesExhausted: {
        messageId: '[u8;32]'
      }
    }
  },
  /**
   * Lookup117: orml_xcm::module::Event<T>
   **/
  OrmlXcmModuleEvent: {
    _enum: {
      Sent: {
        to: 'XcmV3MultiLocation',
        message: 'XcmV3Xcm'
      }
    }
  },
  /**
   * Lookup118: matrix_pallet_xcm::pallet::Event<T>
   **/
  MatrixPalletXcmEvent: {
    _enum: {
      MinimumWeightUpdated: 'MatrixPalletXcmMinimumWeightFeePair',
      XcmTransferFailed: 'SpRuntimeDispatchError'
    }
  },
  /**
   * Lookup119: matrix_pallet_xcm::types::MinimumWeightFeePair<sp_weights::weight_v2::Weight, Balance>
   **/
  MatrixPalletXcmMinimumWeightFeePair: {
    minimumWeight: 'SpWeightsWeightV2Weight',
    fee: 'Compact<u128>'
  },
  /**
   * Lookup120: orml_unknown_tokens::module::Event
   **/
  OrmlUnknownTokensModuleEvent: {
    _enum: {
      Deposited: {
        asset: 'XcmV3MultiAsset',
        who: 'XcmV3MultiLocation',
      },
      Withdrawn: {
        asset: 'XcmV3MultiAsset',
        who: 'XcmV3MultiLocation'
      }
    }
  },
  /**
   * Lookup121: orml_xtokens::module::Event<T>
   **/
  OrmlXtokensModuleEvent: {
    _enum: {
      TransferredMultiAssets: {
        sender: 'AccountId32',
        assets: 'XcmV3MultiassetMultiAssets',
        fee: 'XcmV3MultiAsset',
        dest: 'XcmV3MultiLocation'
      }
    }
  },
  /**
   * Lookup122: pallet_bounties::pallet::Event<T, I>
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
        index: 'u32'
      }
    }
  },
  /**
   * Lookup123: pallet_multi_tokens::pallet::Event<T>
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
      Reserved: {
        collectionId: 'u128',
        tokenId: 'u128',
        accountId: 'AccountId32',
        amount: 'u128',
        reserveId: 'Option<[u8;8]>',
      },
      Unreserved: {
        collectionId: 'u128',
        tokenId: 'u128',
        accountId: 'AccountId32',
        amount: 'u128',
        reserveId: 'Option<[u8;8]>',
      },
      MovedReserves: {
        collectionId: 'u128',
        tokenId: 'u128',
        source: 'AccountId32',
        destination: 'AccountId32',
        amount: 'u128',
        reserveId: 'Option<[u8;8]>',
      },
      ReserveRepatriated: {
        collectionId: 'u128',
        tokenId: 'u128',
        source: 'AccountId32',
        destination: 'AccountId32',
        amount: 'u128',
        reserveId: 'Option<[u8;8]>',
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
      MigrationStatusUpdated: {
        stage: 'EpCoreFrameMigrationsMigrationStage',
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
        ethereumAddress: 'H160'
      }
    }
  },
  /**
   * Lookup124: ep_multi_tokens::collection::DefaultCollectionMutation<sp_core::crypto::AccountId32, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32>, bounded_collections::bounded_vec::BoundedVec<ep_multi_tokens::token::AssetId<CollectionId, TokenId>, S>>
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
   * Lookup125: ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32>
   **/
  EpMultiTokensPolicyMarketDefaultRoyalty: {
    beneficiary: 'AccountId32',
    percentage: 'Compact<Perbill>'
  },
  /**
   * Lookup128: ep_multi_tokens::token::AssetId<CollectionId, TokenId>
   **/
  EpMultiTokensTokenAssetId: {
    collectionId: 'Compact<u128>',
    tokenId: 'Compact<u128>'
  },
  /**
   * Lookup134: ep_multi_tokens::types::RootOrSigned<sp_core::crypto::AccountId32>
   **/
  EpMultiTokensRootOrSigned: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32'
    }
  },
  /**
   * Lookup135: ep_multi_tokens::token::DefaultTokenMutation<ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32>, ep_multi_tokens::frame::DefaultTokenMetadata<ep_multi_tokens::frame::DefaultForeignTokenMetadata<TokenBalance, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>, xcm::v3::multilocation::MultiLocation>>>
   **/
  EpMultiTokensTokenDefaultTokenMutation: {
    behavior: {
      _enum: {
        NoMutation: 'Null',
        SomeMutation: 'Option<EpMultiTokensTokenTokenMarketBehavior>'
      }
    },
    listingForbidden: 'EpMultiTokensShouldMutateBool',
    metadata: 'EpMultiTokensShouldMutateDefaultTokenMetadata'
  },
  /**
   * Lookup136: ep_multi_tokens::frame::DefaultTokenMetadata<ep_multi_tokens::frame::DefaultForeignTokenMetadata<TokenBalance, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>, xcm::v3::multilocation::MultiLocation>>
   **/
  EpMultiTokensFrameDefaultTokenMetadata: {
    _enum: {
      Native: 'Null',
      Foreign: 'EpMultiTokensFrameDefaultForeignTokenMetadata'
    }
  },
  /**
   * Lookup137: ep_multi_tokens::frame::DefaultForeignTokenMetadata<TokenBalance, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>, xcm::v3::multilocation::MultiLocation>
   **/
  EpMultiTokensFrameDefaultForeignTokenMetadata: {
    decimalCount: 'Compact<u32>',
    name: 'Bytes',
    symbol: 'Bytes',
    location: 'Option<XcmV3MultiLocation>',
    unitsPerSecond: 'Option<u128>',
    premintedSupply: 'Compact<u128>'
  },
  /**
   * Lookup139: enjin_matrix_runtime::ForeignTokenNameLength
   **/
  EnjinMatrixRuntimeForeignTokenNameLength: 'Null',
  /**
   * Lookup142: enjin_matrix_runtime::ForeignTokenSymbolLength
   **/
  EnjinMatrixRuntimeForeignTokenSymbolLength: 'Null',
  /**
   * Lookup147: ep_multi_tokens::token::TokenMarketBehavior<ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32>>
   **/
  EpMultiTokensTokenTokenMarketBehavior: {
    _enum: {
      HasRoyalty: 'EpMultiTokensPolicyMarketDefaultRoyalty',
      IsCurrency: 'Null'
    }
  },
  /**
   * Lookup148: ep_multi_tokens::types::ShouldMutate<T>
   **/
  EpMultiTokensShouldMutateBool: {
    _enum: {
      NoMutation: 'Null',
      SomeMutation: 'bool'
    }
  },
  /**
   * Lookup149: ep_multi_tokens::types::ShouldMutate<ep_multi_tokens::frame::DefaultTokenMetadata<ep_multi_tokens::frame::DefaultForeignTokenMetadata<TokenBalance, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>, xcm::v3::multilocation::MultiLocation>>>
   **/
  EpMultiTokensShouldMutateDefaultTokenMetadata: {
    _enum: {
      NoMutation: 'Null',
      SomeMutation: 'EpMultiTokensFrameDefaultTokenMetadata'
    }
  },
  /**
   * Lookup150: ep_multi_tokens::types::Freeze<sp_core::crypto::AccountId32, CollectionId, TokenId>
   **/
  EpMultiTokensFreeze: {
    collectionId: 'Compact<u128>',
    freezeType: 'EpMultiTokensFreezeType'
  },
  /**
   * Lookup151: ep_multi_tokens::types::FreezeType<sp_core::crypto::AccountId32, TokenId>
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
   * Lookup153: ep_multi_tokens::token::FreezeState
   **/
  EpMultiTokensTokenFreezeState: {
    _enum: ['Permanent', 'Temporary', 'Never']
  },
  /**
   * Lookup159: ep_multi_tokens::collection::Collection<sp_core::crypto::AccountId32, Balance, ep_multi_tokens::policy::DefaultCollectionPolicy<TokenBalance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32>>, bounded_collections::bounded_btree_map::BoundedBTreeMap<ep_multi_tokens::token::AssetId<CollectionId, TokenId>, V, S>>
   **/
  EpMultiTokensCollection: {
    owner: 'AccountId32',
    policy: 'EpMultiTokensPolicyDefaultCollectionPolicy',
    tokenCount: 'Compact<u64>',
    attributeCount: 'Compact<u32>',
    totalDeposit: 'Compact<u128>',
    explicitRoyaltyCurrencies: 'BTreeMap<EpMultiTokensTokenAssetId, Null>'
  },
  /**
   * Lookup160: ep_multi_tokens::policy::DefaultCollectionPolicy<TokenBalance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32>>
   **/
  EpMultiTokensPolicyDefaultCollectionPolicy: {
    mint: 'EpMultiTokensPolicyMintDefaultMintPolicy',
    burn: 'EpMultiTokensPolicyBurnDefaultBurnPolicy',
    transfer: 'EpMultiTokensPolicyTransferDefaultTransferPolicy',
    attribute: 'EpMultiTokensPolicyAttributeDefaultAttributePolicy',
    market: 'EpMultiTokensPolicyMarketDefaultMarketPolicy'
  },
  /**
   * Lookup161: ep_multi_tokens::policy::mint::DefaultMintPolicy<TokenBalance>
   **/
  EpMultiTokensPolicyMintDefaultMintPolicy: {
    maxTokenCount: 'Option<u64>',
    maxTokenSupply: 'Option<u128>',
    forceSingleMint: 'bool'
  },
  /**
   * Lookup163: ep_multi_tokens::policy::burn::DefaultBurnPolicy
   **/
  EpMultiTokensPolicyBurnDefaultBurnPolicy: 'Null',
  /**
   * Lookup164: ep_multi_tokens::policy::transfer::DefaultTransferPolicy
   **/
  EpMultiTokensPolicyTransferDefaultTransferPolicy: {
    isFrozen: 'bool'
  },
  /**
   * Lookup165: ep_multi_tokens::policy::attribute::DefaultAttributePolicy
   **/
  EpMultiTokensPolicyAttributeDefaultAttributePolicy: 'Null',
  /**
   * Lookup166: ep_multi_tokens::policy::market::DefaultMarketPolicy<ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32>>
   **/
  EpMultiTokensPolicyMarketDefaultMarketPolicy: {
    royalty: 'Option<EpMultiTokensPolicyMarketDefaultRoyalty>'
  },
  /**
   * Lookup172: ep_multi_tokens::token::Token<TokenBalance, Balance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32>, ep_multi_tokens::frame::DefaultTokenMetadata<ep_multi_tokens::frame::DefaultForeignTokenMetadata<TokenBalance, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>, xcm::v3::multilocation::MultiLocation>>>
   **/
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
    metadata: 'EpMultiTokensFrameDefaultTokenMetadata'
  },
  /**
   * Lookup174: ep_multi_tokens::token::TokenCap<TokenBalance>
   **/
  EpMultiTokensTokenTokenCap: {
    _enum: {
      SingleMint: 'Null',
      Supply: 'Compact<u128>',
      CollapsingSupply: 'Compact<u128>'
    }
  },
  /**
   * Lookup175: ep_multi_tokens::token::Sufficiency<Balance>
   **/
  EpMultiTokensTokenSufficiency: {
    _enum: {
      Sufficient: 'Null',
      Insufficient: {
        unitPrice: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup177: pallet_multi_tokens::features::collection::types::CollectionAccount<sp_core::crypto::AccountId32, Option<T>, enjin_matrix_runtime::MaxOperatorsPerAccount>
   **/
  PalletMultiTokensFeaturesCollectionTypesCollectionAccount: {
    isFrozen: 'bool',
    approvals: 'BTreeMap<AccountId32, Option<u32>>',
    accountCount: 'Compact<u32>'
  },
  /**
   * Lookup178: enjin_matrix_runtime::MaxOperatorsPerAccount
   **/
  EnjinMatrixRuntimeMaxOperatorsPerAccount: 'Null',
  /**
   * Lookup184: pallet_multi_tokens::features::token::types::TokenAccount<sp_core::crypto::AccountId32, TokenBalance, pallet_multi_tokens::features::operator::types::Approval<TokenBalance, Option<T>>, enjin_matrix_runtime::MaxOperatorsPerAccount, ReserveIdentifier, LockId, enjin_matrix_runtime::MaxReserves, enjin_matrix_runtime::MaxLocks>
   **/
  PalletMultiTokensFeaturesTokenTypesTokenAccount: {
    balance: 'Compact<u128>',
    reservedBalance: 'Compact<u128>',
    lockedBalance: 'Compact<u128>',
    namedReserves: 'BTreeMap<[u8;8], u128>',
    locks: 'BTreeMap<[u8;8], u128>',
    approvals: 'BTreeMap<AccountId32, PalletMultiTokensFeaturesOperatorTypesApproval>',
    isFrozen: 'bool'
  },
  /**
   * Lookup185: pallet_multi_tokens::features::operator::types::Approval<TokenBalance, Option<T>>
   **/
  PalletMultiTokensFeaturesOperatorTypesApproval: {
    amount: 'Compact<u128>',
    expiration: 'Option<u32>'
  },
  /**
   * Lookup186: enjin_matrix_runtime::MaxReserves
   **/
  EnjinMatrixRuntimeMaxReserves: 'Null',
  /**
   * Lookup187: enjin_matrix_runtime::MaxLocks
   **/
  EnjinMatrixRuntimeMaxLocks: 'Null',
  /**
   * Lookup197: ep_core::frame::migrations::MigrationStage
   **/
  EpCoreFrameMigrationsMigrationStage: {
    _enum: ['NotStarted', 'InProgress', 'Completed', 'Failed']
  },
  /**
   * Lookup201: pallet_multi_tokens::features::claim::AssetIdWithEth<CollectionId, TokenId>
   **/
  PalletMultiTokensFeaturesClaimAssetIdWithEth: {
    ethereumCollectionId: 'u128',
    collectionId: 'u128',
    tokenId: 'u128'
  },
  /**
   * Lookup202: pallet_pools::pallet::Event<T>
   **/
  PalletPoolsEvent: {
    _enum: {
      PoolsMutated: 'PalletPoolsPoolsMutation'
    }
  },
  /**
   * Lookup203: pallet_pools::types::PoolsMutation
   **/
  PalletPoolsPoolsMutation: {
    community: 'EpCoreFrameTypesPool',
    collator: 'EpCoreFrameTypesPool',
    fuelTanks: 'EpCoreFrameTypesPool',
    priceDiscovery: 'EpCoreFrameTypesPool'
  },
  /**
   * Lookup204: ep_core::frame::types::Pool
   **/
  EpCoreFrameTypesPool: {
    feeShare: 'Perbill'
  },
  /**
   * Lookup205: pallet_fuel_tanks::pallet::Event<T>
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
        consumption: 'PalletFuelTanksConsumption'
      }
    }
  },
  /**
   * Lookup207: enjin_matrix_runtime::MaxFuelTankNameLength
   **/
  EnjinMatrixRuntimeMaxFuelTankNameLength: 'Null',
  /**
   * Lookup209: pallet_fuel_tanks::impls::DefaultTankMutation<enjin_matrix_runtime::Runtime>
   **/
  PalletFuelTanksImplsDefaultTankMutation: {
    userAccountManagement: 'EpMultiTokensShouldMutateOption',
    providesDeposit: 'Option<bool>',
    accountRules: 'Option<Vec<PalletFuelTanksRulesAccountRuleDescriptor>>'
  },
  /**
   * Lookup210: enjin_matrix_runtime::Runtime
   **/
  EnjinMatrixRuntimeRuntime: 'Null',
  /**
   * Lookup211: ep_multi_tokens::types::ShouldMutate<Option<pallet_fuel_tanks::types::UserAccountManagement>>
   **/
  EpMultiTokensShouldMutateOption: {
    _enum: {
      NoMutation: 'Null',
      SomeMutation: 'Option<PalletFuelTanksUserAccountManagement>'
    }
  },
  /**
   * Lookup213: pallet_fuel_tanks::types::UserAccountManagement
   **/
  PalletFuelTanksUserAccountManagement: {
    tankReservesExistentialDeposit: 'bool',
    tankReservesAccountCreationDeposit: 'bool'
  },
  /**
   * Lookup217: pallet_fuel_tanks::rules::AccountRuleDescriptor<T>
   **/
  PalletFuelTanksRulesAccountRuleDescriptor: {
    _enum: {
      WhitelistedCallers: 'PalletFuelTanksRulesWhitelistedCallersWhitelistedCallersRule',
      RequireToken: 'PalletFuelTanksRulesRequireTokenRequireTokenRule'
    }
  },
  /**
   * Lookup218: pallet_fuel_tanks::rules::whitelisted_callers::WhitelistedCallersRule<sp_core::crypto::AccountId32, enjin_matrix_runtime::MaxWhitelistedCallers>
   **/
  PalletFuelTanksRulesWhitelistedCallersWhitelistedCallersRule: 'BTreeSet<AccountId32>',
  /**
   * Lookup219: enjin_matrix_runtime::MaxWhitelistedCallers
   **/
  EnjinMatrixRuntimeMaxWhitelistedCallers: 'Null',
  /**
   * Lookup222: pallet_fuel_tanks::rules::require_token::RequireTokenRule<CollectionId, TokenId>
   **/
  PalletFuelTanksRulesRequireTokenRequireTokenRule: {
    collectionId: 'u128',
    tokenId: 'u128'
  },
  /**
   * Lookup224: pallet_fuel_tanks::rules::DispatchRuleKind
   **/
  PalletFuelTanksRulesDispatchRuleKind: {
    _enum: ['WhitelistedCallers', 'WhitelistedCollections', 'MaxFuelBurnPerTransaction', 'UserFuelBudget', 'TankFuelBudget', 'RequireToken', 'PermittedCalls', 'PermittedExtrinsics', 'WhitelistedPallets']
  },
  /**
   * Lookup225: pallet_fuel_tanks::types::Consumption<Balance, BlockNumber>
   **/
  PalletFuelTanksConsumption: {
    totalConsumed: 'Compact<u128>',
    lastResetBlock: 'Option<u32>'
  },
  /**
   * Lookup226: pallet_marketplace::pallet::Event<T>
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
        protocolFee: 'Perbill'
      }
    }
  },
  /**
   * Lookup227: pallet_marketplace::features::listing::Listing<CollectionId, TokenId, sp_core::crypto::AccountId32, TokenBalance, Balance, BlockNumber, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PalletMarketplaceFeaturesListing: {
    seller: 'AccountId32',
    makeAssetId: 'EpMultiTokensTokenAssetId',
    takeAssetId: 'EpMultiTokensTokenAssetId',
    amount: 'Compact<u128>',
    price: 'Compact<u128>',
    minTakeValue: 'Compact<u128>',
    feeSide: 'PalletMarketplaceFeaturesListingFeeSide',
    creationBlock: 'Compact<u32>',
    deposit: 'Compact<u128>',
    salt: 'Bytes',
    data: 'PalletMarketplaceFeaturesListingListingData',
    state: 'PalletMarketplaceFeaturesListingListingState'
  },
  /**
   * Lookup229: pallet_marketplace::features::listing::FeeSide
   **/
  PalletMarketplaceFeaturesListingFeeSide: {
    _enum: ['NoFee', 'Make', 'Take']
  },
  /**
   * Lookup230: pallet_marketplace::features::listing::ListingData<BlockNumber>
   **/
  PalletMarketplaceFeaturesListingListingData: {
    _enum: {
      FixedPrice: 'Null',
      Auction: 'PalletMarketplaceFeaturesAuctionAuctionData'
    }
  },
  /**
   * Lookup231: pallet_marketplace::features::auction::AuctionData<BlockNumber>
   **/
  PalletMarketplaceFeaturesAuctionAuctionData: {
    startBlock: 'Compact<u32>',
    endBlock: 'Compact<u32>'
  },
  /**
   * Lookup232: pallet_marketplace::features::listing::ListingState<sp_core::crypto::AccountId32, TokenBalance>
   **/
  PalletMarketplaceFeaturesListingListingState: {
    _enum: {
      FixedPrice: {
        amountFilled: 'Compact<u128>',
      },
      Auction: 'PalletMarketplaceFeaturesAuctionAuctionState'
    }
  },
  /**
   * Lookup233: pallet_marketplace::features::auction::AuctionState<sp_core::crypto::AccountId32, TokenBalance>
   **/
  PalletMarketplaceFeaturesAuctionAuctionState: {
    highBid: 'Option<PalletMarketplaceFeaturesAuctionBid>'
  },
  /**
   * Lookup235: pallet_marketplace::features::auction::Bid<sp_core::crypto::AccountId32, TokenBalance>
   **/
  PalletMarketplaceFeaturesAuctionBid: {
    bidder: 'AccountId32',
    price: 'Compact<u128>'
  },
  /**
   * Lookup236: pallet_extrinsic_pause::pallet::Event<T>
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
   * Lookup238: enjin_matrix_runtime::MaxNameLength
   **/
  EnjinMatrixRuntimeMaxNameLength: 'Null',
  /**
   * Lookup240: pallet_matrix_utility::pallet::Event
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
   * Lookup243: pallet_multi_tokens_cross_chain_migration::pallet::Event<T>
   **/
  PalletMultiTokensCrossChainMigrationEvent: {
    _enum: {
      MigratedCollections: 'u32',
      MigratedTokens: 'u32',
      MigratedCollectionAccounts: 'u32',
      MigratedTokenAccounts: 'u32',
      MigratedAttributes: 'u32',
      MigrationFinished: 'Null'
    }
  },
  /**
   * Lookup244: pallet_claims::pallet::Event<T>
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
   * Lookup246: pallet_identity::pallet::Event<T>
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
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup247: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup250: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup252: frame_system::pallet::Call<T>
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
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup256: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup257: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup258: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup260: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup261: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup262: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup263: sp_version::RuntimeVersion
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
   * Lookup268: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup269: polkadot_primitives::v4::PersistedValidationData<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV4PersistedValidationData: {
    parentHead: 'Bytes',
    relayParentNumber: 'u32',
    relayParentStorageRoot: 'H256',
    maxPovSize: 'u32'
  },
  /**
   * Lookup272: polkadot_primitives::v4::UpgradeRestriction
   **/
  PolkadotPrimitivesV4UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup273: sp_trie::storage_proof::StorageProof
   **/
  SpTrieStorageProof: {
    trieNodes: 'BTreeSet<Bytes>'
  },
  /**
   * Lookup275: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
   **/
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: 'H256',
    relayDispatchQueueSize: 'CumulusPalletParachainSystemRelayStateSnapshotRelayDispachQueueSize',
    ingressChannels: 'Vec<(u32,PolkadotPrimitivesV4AbridgedHrmpChannel)>',
    egressChannels: 'Vec<(u32,PolkadotPrimitivesV4AbridgedHrmpChannel)>'
  },
  /**
   * Lookup276: cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispachQueueSize
   **/
  CumulusPalletParachainSystemRelayStateSnapshotRelayDispachQueueSize: {
    remainingCount: 'u32',
    remainingSize: 'u32'
  },
  /**
   * Lookup279: polkadot_primitives::v4::AbridgedHrmpChannel
   **/
  PolkadotPrimitivesV4AbridgedHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>'
  },
  /**
   * Lookup281: polkadot_primitives::v4::AbridgedHostConfiguration
   **/
  PolkadotPrimitivesV4AbridgedHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32'
  },
  /**
   * Lookup287: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup288: cumulus_pallet_parachain_system::CodeUpgradeAuthorization<T>
   **/
  CumulusPalletParachainSystemCodeUpgradeAuthorization: {
    codeHash: 'H256',
    checkVersion: 'bool'
  },
  /**
   * Lookup289: cumulus_pallet_parachain_system::pallet::Call<T>
   **/
  CumulusPalletParachainSystemCall: {
    _enum: {
      set_validation_data: {
        data: 'CumulusPrimitivesParachainInherentParachainInherentData',
      },
      sudo_send_upward_message: {
        message: 'Bytes',
      },
      authorize_upgrade: {
        codeHash: 'H256',
        checkVersion: 'bool',
      },
      enact_authorized_upgrade: {
        code: 'Bytes'
      }
    }
  },
  /**
   * Lookup290: cumulus_primitives_parachain_inherent::ParachainInherentData
   **/
  CumulusPrimitivesParachainInherentParachainInherentData: {
    validationData: 'PolkadotPrimitivesV4PersistedValidationData',
    relayChainState: 'SpTrieStorageProof',
    downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
    horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>'
  },
  /**
   * Lookup292: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup295: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup298: cumulus_pallet_parachain_system::pallet::Error<T>
   **/
  CumulusPalletParachainSystemError: {
    _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled', 'NothingAuthorized', 'Unauthorized']
  },
  /**
   * Lookup299: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup300: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageRequestStatus: {
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
   * Lookup305: pallet_preimage::pallet::Call<T>
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
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup306: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
  },
  /**
   * Lookup309: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<enjin_matrix_runtime::RuntimeCall>, BlockNumber, enjin_matrix_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'EnjinMatrixRuntimeOriginCaller'
  },
  /**
   * Lookup310: frame_support::traits::preimages::Bounded<enjin_matrix_runtime::RuntimeCall>
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
   * Lookup312: pallet_scheduler::pallet::Call<T>
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
        call: 'Call'
      }
    }
  },
  /**
   * Lookup314: pallet_utility::pallet::Call<T>
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
   * Lookup316: enjin_matrix_runtime::OriginCaller
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
   * Lookup317: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup318: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup320: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'XcmV3MultiLocation',
      Response: 'XcmV3MultiLocation'
    }
  },
  /**
   * Lookup321: cumulus_pallet_xcm::pallet::Origin
   **/
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: 'Null',
      SiblingParachain: 'u32'
    }
  },
  /**
   * Lookup322: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup323: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance_deprecated: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        oldReserved: 'Compact<u128>',
      },
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
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      force_set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup326: pallet_democracy::pallet::Call<T>
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
   * Lookup327: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup328: pallet_collective::pallet::Call<T, I>
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
   * Lookup330: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup331: pallet_membership::pallet::Call<T, I>
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
   * Lookup332: pallet_multisig::pallet::Call<T>
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
   * Lookup334: pallet_collator_staking::pallet::Call<T>
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
   * Lookup335: pallet_session::pallet::Call<T>
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
   * Lookup336: enjin_matrix_runtime::SessionKeys
   **/
  EnjinMatrixRuntimeSessionKeys: {
    aura: 'SpConsensusAuraSr25519AppSr25519Public',
    pools: 'SpConsensusAuraSr25519AppSr25519Public'
  },
  /**
   * Lookup337: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup338: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup339: cumulus_pallet_xcmp_queue::pallet::Call<T>
   **/
  CumulusPalletXcmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'SpWeightsWeightV2Weight',
      },
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
        new_: 'u32',
      },
      update_threshold_weight: {
        _alias: {
          new_: 'new',
        },
        new_: 'SpWeightsWeightV2Weight',
      },
      update_weight_restrict_decay: {
        _alias: {
          new_: 'new',
        },
        new_: 'SpWeightsWeightV2Weight',
      },
      update_xcmp_max_individual_weight: {
        _alias: {
          new_: 'new',
        },
        new_: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup340: pallet_xcm::pallet::Call<T>
   **/
  PalletXcmCall: {
    _enum: {
      send: {
        dest: 'XcmVersionedMultiLocation',
        message: 'XcmVersionedXcm',
      },
      teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      execute: {
        message: 'XcmVersionedXcm',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      force_xcm_version: {
        location: 'XcmV3MultiLocation',
        xcmVersion: 'u32',
      },
      force_default_xcm_version: {
        maybeXcmVersion: 'Option<u32>',
      },
      force_subscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      force_unsubscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      limited_reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      force_suspension: {
        suspended: 'bool'
      }
    }
  },
  /**
   * Lookup341: xcm::VersionedXcm<RuntimeCall>
   **/
  XcmVersionedXcm: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'XcmV2Xcm',
      V3: 'XcmV3Xcm'
    }
  },
  /**
   * Lookup342: xcm::v2::Xcm<RuntimeCall>
   **/
  XcmV2Xcm: 'Vec<XcmV2Instruction>',
  /**
   * Lookup344: xcm::v2::Instruction<RuntimeCall>
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
   * Lookup345: xcm::v2::Response
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
   * Lookup348: xcm::v2::traits::Error
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
   * Lookup349: xcm::v2::multiasset::MultiAssetFilter
   **/
  XcmV2MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV2MultiassetMultiAssets',
      Wild: 'XcmV2MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup350: xcm::v2::multiasset::WildMultiAsset
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
   * Lookup351: xcm::v2::multiasset::WildFungibility
   **/
  XcmV2MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup352: xcm::v2::WeightLimit
   **/
  XcmV2WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },
  /**
   * Lookup361: cumulus_pallet_xcm::pallet::Call<T>
   **/
  CumulusPalletXcmCall: 'Null',
  /**
   * Lookup362: cumulus_pallet_dmp_queue::pallet::Call<T>
   **/
  CumulusPalletDmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup363: orml_xcm::module::Call<T>
   **/
  OrmlXcmModuleCall: {
    _enum: {
      send_as_sovereign: {
        dest: 'XcmVersionedMultiLocation',
        message: 'XcmVersionedXcm'
      }
    }
  },
  /**
   * Lookup364: matrix_pallet_xcm::pallet::Call<T>
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
   * Lookup365: matrix_pallet_xcm::impls::ParachainId
   **/
  MatrixPalletXcmImplsParachainId: {
    _enum: ['__Unused0', '__Unused1', '__Unused2', '__Unused3', '__Unused4', '__Unused5', '__Unused6', '__Unused7', '__Unused8', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', '__Unused16', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', '__Unused32', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', '__Unused64', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', '__Unused128', '__Unused129', '__Unused130', '__Unused131', '__Unused132', '__Unused133', '__Unused134', '__Unused135', '__Unused136', '__Unused137', '__Unused138', '__Unused139', '__Unused140', '__Unused141', '__Unused142', '__Unused143', '__Unused144', '__Unused145', '__Unused146', '__Unused147', '__Unused148', '__Unused149', '__Unused150', '__Unused151', '__Unused152', '__Unused153', '__Unused154', '__Unused155', '__Unused156', '__Unused157', '__Unused158', '__Unused159', '__Unused160', '__Unused161', '__Unused162', '__Unused163', '__Unused164', '__Unused165', '__Unused166', '__Unused167', '__Unused168', '__Unused169', '__Unused170', '__Unused171', '__Unused172', '__Unused173', '__Unused174', '__Unused175', '__Unused176', '__Unused177', '__Unused178', '__Unused179', '__Unused180', '__Unused181', '__Unused182', '__Unused183', '__Unused184', '__Unused185', '__Unused186', '__Unused187', '__Unused188', '__Unused189', '__Unused190', '__Unused191', '__Unused192', '__Unused193', '__Unused194', '__Unused195', '__Unused196', '__Unused197', '__Unused198', '__Unused199', '__Unused200', '__Unused201', '__Unused202', '__Unused203', '__Unused204', '__Unused205', '__Unused206', '__Unused207', 'Acala', '__Unused209', '__Unused210', '__Unused211', 'Moonbeam', '__Unused213', '__Unused214', '__Unused215', '__Unused216', '__Unused217', '__Unused218', '__Unused219', '__Unused220', '__Unused221', '__Unused222', '__Unused223', '__Unused224', '__Unused225', '__Unused226', '__Unused227', '__Unused228', '__Unused229', '__Unused230', '__Unused231', 'Statemint']
  },
  /**
   * Lookup366: ep_core::frame::types::Account<sp_core::crypto::AccountId32>
   **/
  EpCoreFrameTypesAccount: {
    _enum: {
      Substrate: 'AccountId32',
      EVM: 'H160'
    }
  },
  /**
   * Lookup367: matrix_pallet_xcm::types::CurrencyIdAmountPair<ep_multi_tokens::token::AssetId<CollectionId, TokenId>, Balance>
   **/
  MatrixPalletXcmCurrencyIdAmountPair: {
    currencyId: 'EpMultiTokensTokenAssetId',
    amount: 'Compact<u128>'
  },
  /**
   * Lookup368: matrix_pallet_xcm::types::XcmOperation
   **/
  MatrixPalletXcmXcmOperation: {
    _enum: {
      XTokensTransfer: 'Null',
      ParachainFee: 'XcmV3MultiLocation'
    }
  },
  /**
   * Lookup369: orml_xtokens::module::Call<T>
   **/
  OrmlXtokensModuleCall: {
    _enum: {
      transfer: {
        currencyId: 'EpMultiTokensTokenAssetId',
        amount: 'u128',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multiasset: {
        asset: 'XcmVersionedMultiAsset',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_with_fee: {
        currencyId: 'EpMultiTokensTokenAssetId',
        amount: 'u128',
        fee: 'u128',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multiasset_with_fee: {
        asset: 'XcmVersionedMultiAsset',
        fee: 'XcmVersionedMultiAsset',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multicurrencies: {
        currencies: 'Vec<(EpMultiTokensTokenAssetId,u128)>',
        feeItem: 'u32',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multiassets: {
        assets: 'XcmVersionedMultiAssets',
        feeItem: 'u32',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit'
      }
    }
  },
  /**
   * Lookup370: xcm::VersionedMultiAsset
   **/
  XcmVersionedMultiAsset: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiAsset',
      __Unused2: 'Null',
      V3: 'XcmV3MultiAsset'
    }
  },
  /**
   * Lookup373: pallet_bounties::pallet::Call<T, I>
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
   * Lookup374: pallet_multi_tokens::pallet::Call<T>
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
        ethereumSignature: 'SpCoreEcdsaSignature',
        ethereumAddress: 'H160',
        collectionCount: 'Compact<u32>',
      },
      claim_tokens: {
        destination: 'AccountId32',
        ethereumSignature: 'SpCoreEcdsaSignature',
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
        tokenIndex: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup375: ep_multi_tokens::collection::DefaultCollectionDescriptor<TokenBalance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32>, bounded_collections::bounded_vec::BoundedVec<ep_multi_tokens::token::AssetId<CollectionId, TokenId>, S>, bounded_collections::bounded_vec::BoundedVec<ep_multi_tokens::batch::AttributeKeyValuePair<bounded_collections::bounded_vec::BoundedVec<T, S>, bounded_collections::bounded_vec::BoundedVec<T, S>>, S>>
   **/
  EpMultiTokensCollectionDefaultCollectionDescriptor: {
    policy: 'EpMultiTokensPolicyDefaultCollectionPolicyDescriptor',
    explicitRoyaltyCurrencies: 'Vec<EpMultiTokensTokenAssetId>',
    attributes: 'Vec<EpMultiTokensBatchAttributeKeyValuePair>'
  },
  /**
   * Lookup377: ep_multi_tokens::batch::AttributeKeyValuePair<bounded_collections::bounded_vec::BoundedVec<T, S>, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  EpMultiTokensBatchAttributeKeyValuePair: {
    key: 'Bytes',
    value: 'Bytes'
  },
  /**
   * Lookup379: ep_multi_tokens::policy::DefaultCollectionPolicyDescriptor<TokenBalance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32>>
   **/
  EpMultiTokensPolicyDefaultCollectionPolicyDescriptor: {
    mint: 'EpMultiTokensPolicyMintDefaultMintPolicyDescriptor',
    burn: 'EpMultiTokensPolicyBurnDefaultBurnPolicyDescriptor',
    transfer: 'EpMultiTokensPolicyTransferDefaultTransferPolicyDescriptor',
    attribute: 'EpMultiTokensPolicyAttributeDefaultAttributePolicyDescriptor',
    market: 'EpMultiTokensPolicyMarketDefaultMarketPolicyDescriptor'
  },
  /**
   * Lookup380: ep_multi_tokens::policy::mint::DefaultMintPolicyDescriptor<TokenBalance>
   **/
  EpMultiTokensPolicyMintDefaultMintPolicyDescriptor: {
    maxTokenCount: 'Option<u64>',
    maxTokenSupply: 'Option<u128>',
    forceSingleMint: 'bool'
  },
  /**
   * Lookup381: ep_multi_tokens::policy::burn::DefaultBurnPolicyDescriptor
   **/
  EpMultiTokensPolicyBurnDefaultBurnPolicyDescriptor: 'Null',
  /**
   * Lookup382: ep_multi_tokens::policy::transfer::DefaultTransferPolicyDescriptor
   **/
  EpMultiTokensPolicyTransferDefaultTransferPolicyDescriptor: 'Null',
  /**
   * Lookup383: ep_multi_tokens::policy::attribute::DefaultAttributePolicyDescriptor
   **/
  EpMultiTokensPolicyAttributeDefaultAttributePolicyDescriptor: 'Null',
  /**
   * Lookup384: ep_multi_tokens::policy::market::DefaultMarketPolicyDescriptor<ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32>>
   **/
  EpMultiTokensPolicyMarketDefaultMarketPolicyDescriptor: {
    royalty: 'Option<EpMultiTokensPolicyMarketDefaultRoyalty>'
  },
  /**
   * Lookup385: ep_multi_tokens::policy::mint::DefaultMintParams<TokenId, TokenBalance, Balance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32>, bounded_collections::bounded_vec::BoundedVec<ep_multi_tokens::batch::AttributeKeyValuePair<bounded_collections::bounded_vec::BoundedVec<T, S>, bounded_collections::bounded_vec::BoundedVec<T, S>>, S>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>, xcm::v3::multilocation::MultiLocation>
   **/
  EpMultiTokensPolicyMintDefaultMintParams: {
    _enum: {
      CreateToken: {
        tokenId: 'Compact<u128>',
        initialSupply: 'Compact<u128>',
        sufficiency: 'EpMultiTokensPolicyMintSufficiencyParam',
        cap: 'Option<EpMultiTokensTokenTokenCap>',
        behavior: 'Option<EpMultiTokensTokenTokenMarketBehavior>',
        listingForbidden: 'bool',
        freezeState: 'Option<EpMultiTokensTokenFreezeState>',
        attributes: 'Vec<EpMultiTokensBatchAttributeKeyValuePair>',
        foreignParams: 'Option<EpMultiTokensPolicyMintForeignTokenCreationParams>',
      },
      Mint: {
        tokenId: 'Compact<u128>',
        amount: 'Compact<u128>',
        unitPrice: 'Option<u128>'
      }
    }
  },
  /**
   * Lookup386: ep_multi_tokens::policy::mint::SufficiencyParam<Balance, TokenBalance>
   **/
  EpMultiTokensPolicyMintSufficiencyParam: {
    _enum: {
      Insufficient: {
        unitPrice: 'Option<u128>',
      },
      Sufficient: {
        minimumBalance: 'u128'
      }
    }
  },
  /**
   * Lookup388: ep_multi_tokens::policy::mint::ForeignTokenCreationParams<ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>, xcm::v3::multilocation::MultiLocation>
   **/
  EpMultiTokensPolicyMintForeignTokenCreationParams: {
    decimalCount: 'Compact<u32>',
    name: 'Bytes',
    symbol: 'Bytes',
    location: 'Option<XcmV3MultiLocation>',
    unitsPerSecond: 'Option<u128>'
  },
  /**
   * Lookup389: ep_multi_tokens::policy::burn::DefaultBurnParams<TokenId, TokenBalance>
   **/
  EpMultiTokensPolicyBurnDefaultBurnParams: {
    tokenId: 'Compact<u128>',
    amount: 'Compact<u128>',
    keepAlive: 'bool',
    removeTokenStorage: 'bool'
  },
  /**
   * Lookup390: ep_multi_tokens::policy::transfer::DefaultTransferParams<sp_core::crypto::AccountId32, TokenId, TokenBalance>
   **/
  EpMultiTokensPolicyTransferDefaultTransferParams: {
    _enum: {
      Simple: {
        tokenId: 'Compact<u128>',
        amount: 'Compact<u128>',
        keepAlive: 'bool',
      },
      Operator: {
        tokenId: 'Compact<u128>',
        source: 'AccountId32',
        amount: 'Compact<u128>',
        keepAlive: 'bool'
      }
    }
  },
  /**
   * Lookup392: ep_multi_tokens::batch::Recipient<sp_core::crypto::AccountId32, ep_multi_tokens::policy::transfer::DefaultTransferParams<sp_core::crypto::AccountId32, TokenId, TokenBalance>>
   **/
  EpMultiTokensBatchRecipientDefaultTransferParams: {
    accountId: 'AccountId32',
    params: 'EpMultiTokensPolicyTransferDefaultTransferParams'
  },
  /**
   * Lookup395: ep_multi_tokens::batch::Recipient<sp_core::crypto::AccountId32, ep_multi_tokens::policy::mint::DefaultMintParams<TokenId, TokenBalance, Balance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32>, bounded_collections::bounded_vec::BoundedVec<ep_multi_tokens::batch::AttributeKeyValuePair<bounded_collections::bounded_vec::BoundedVec<T, S>, bounded_collections::bounded_vec::BoundedVec<T, S>>, S>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>, xcm::v3::multilocation::MultiLocation>>
   **/
  EpMultiTokensBatchRecipientDefaultMintParams: {
    accountId: 'AccountId32',
    params: 'EpMultiTokensPolicyMintDefaultMintParams'
  },
  /**
   * Lookup397: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup401: ep_multi_tokens::attribute::Attribute<bounded_collections::bounded_vec::BoundedVec<T, S>, Balance>
   **/
  EpMultiTokensAttribute: {
    value: 'Bytes',
    deposit: 'Compact<u128>'
  },
  /**
   * Lookup403: ep_multi_tokens::policy::mint::FlexibleMintParams<TokenId, TokenBalance, Balance, ep_multi_tokens::policy::market::DefaultRoyalty<sp_core::crypto::AccountId32>, bounded_collections::bounded_vec::BoundedVec<ep_multi_tokens::batch::AttributeKeyValuePair<bounded_collections::bounded_vec::BoundedVec<T, S>, bounded_collections::bounded_vec::BoundedVec<T, S>>, S>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenNameLength>, ep_core::frame::types::BoundedString<enjin_matrix_runtime::ForeignTokenSymbolLength>, xcm::v3::multilocation::MultiLocation>
   **/
  EpMultiTokensPolicyMintFlexibleMintParams: {
    _enum: {
      CreateToken: {
        tokenId: 'Compact<u128>',
        initialSupply: 'Compact<u128>',
        sufficiency: 'EpMultiTokensPolicyMintSufficiencyParam',
        cap: 'Option<EpMultiTokensTokenTokenCap>',
        behavior: 'Option<EpMultiTokensTokenTokenMarketBehavior>',
        listingForbidden: 'bool',
        freezeState: 'Option<EpMultiTokensTokenFreezeState>',
        attributes: 'Vec<EpMultiTokensBatchAttributeKeyValuePair>',
        foreignParams: 'Option<EpMultiTokensPolicyMintForeignTokenCreationParams>',
      },
      Mint: {
        tokenId: 'Compact<u128>',
        amount: 'Compact<u128>',
        unitPrice: 'Option<u128>',
      },
      CreateOrMint: {
        tokenId: 'Compact<u128>',
        amount: 'Compact<u128>',
        sufficiency: 'EpMultiTokensPolicyMintSufficiencyParam',
        cap: 'Option<EpMultiTokensTokenTokenCap>',
        behavior: 'Option<EpMultiTokensTokenTokenMarketBehavior>',
        listingForbidden: 'bool',
        freezeState: 'Option<EpMultiTokensTokenFreezeState>',
        attributes: 'Vec<EpMultiTokensBatchAttributeKeyValuePair>',
        foreignParams: 'Option<EpMultiTokensPolicyMintForeignTokenCreationParams>'
      }
    }
  },
  /**
   * Lookup406: pallet_pools::pallet::Call<T>
   **/
  PalletPoolsCall: {
    _enum: {
      mutate_pools: {
        mutation: 'PalletPoolsPoolsMutation'
      }
    }
  },
  /**
   * Lookup407: pallet_fuel_tanks::pallet::Call<T>
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
        rules: 'Vec<PalletFuelTanksRulesDispatchRuleDescriptor>',
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
   * Lookup408: pallet_fuel_tanks::types::FuelTankDescriptor<ep_core::frame::types::BoundedString<enjin_matrix_runtime::MaxFuelTankNameLength>, bounded_collections::bounded_btree_map::BoundedBTreeMap<K, pallet_fuel_tanks::rules::RuleSetDescriptor<pallet_fuel_tanks::rules::DispatchRuleDescriptor<T>, enjin_matrix_runtime::MaxRulesPerSet>, S>, bounded_collections::bounded_vec::BoundedVec<pallet_fuel_tanks::rules::AccountRuleDescriptor<T>, S>>
   **/
  PalletFuelTanksFuelTankDescriptor: {
    name: 'Bytes',
    userAccountManagement: 'Option<PalletFuelTanksUserAccountManagement>',
    ruleSets: 'BTreeMap<u32, PalletFuelTanksRulesRuleSetDescriptor>',
    providesDeposit: 'bool',
    accountRules: 'Vec<PalletFuelTanksRulesAccountRuleDescriptor>'
  },
  /**
   * Lookup410: pallet_fuel_tanks::rules::RuleSetDescriptor<pallet_fuel_tanks::rules::DispatchRuleDescriptor<T>, enjin_matrix_runtime::MaxRulesPerSet>
   **/
  PalletFuelTanksRulesRuleSetDescriptor: 'Vec<PalletFuelTanksRulesDispatchRuleDescriptor>',
  /**
   * Lookup411: pallet_fuel_tanks::rules::DispatchRuleDescriptor<T>
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
      WhitelistedPallets: 'PalletFuelTanksRulesWhitelistedPalletsWhitelistedPalletsDescriptor'
    }
  },
  /**
   * Lookup412: pallet_fuel_tanks::rules::whitelisted_collections::WhitelistedCollectionsRule<CollectionId, enjin_matrix_runtime::MaxCollectionIds>
   **/
  PalletFuelTanksRulesWhitelistedCollectionsWhitelistedCollectionsRule: 'BTreeSet<u128>',
  /**
   * Lookup413: enjin_matrix_runtime::MaxCollectionIds
   **/
  EnjinMatrixRuntimeMaxCollectionIds: 'Null',
  /**
   * Lookup417: pallet_fuel_tanks::rules::user_fuel_budget::UserFuelBudgetRuleDescriptor<pallet_fuel_tanks::types::Budget<Balance, BlockNumber>>
   **/
  PalletFuelTanksRulesUserFuelBudgetUserFuelBudgetRuleDescriptor: 'PalletFuelTanksBudget',
  /**
   * Lookup418: pallet_fuel_tanks::types::Budget<Balance, BlockNumber>
   **/
  PalletFuelTanksBudget: {
    amount: 'Compact<u128>',
    resetPeriod: 'u32'
  },
  /**
   * Lookup419: pallet_fuel_tanks::rules::tank_fuel_budget::TankFuelBudgetRuleDescriptor<pallet_fuel_tanks::types::Budget<Balance, BlockNumber>>
   **/
  PalletFuelTanksRulesTankFuelBudgetTankFuelBudgetRuleDescriptor: 'PalletFuelTanksBudget',
  /**
   * Lookup420: pallet_fuel_tanks::rules::permitted_calls::PermittedCallsRule<bounded_collections::bounded_vec::BoundedVec<T, S>, enjin_matrix_runtime::MaxCallFilters>
   **/
  PalletFuelTanksRulesPermittedCallsPermittedCallsRule: 'BTreeSet<Bytes>',
  /**
   * Lookup422: enjin_matrix_runtime::MaxCallFilters
   **/
  EnjinMatrixRuntimeMaxCallFilters: 'Null',
  /**
   * Lookup426: pallet_fuel_tanks::rules::permitted_extrinsics::PermittedExtrinsicsDescriptor<enjin_matrix_runtime::RuntimeCall, enjin_matrix_runtime::MaxPermittedExtrinsicLength>
   **/
  PalletFuelTanksRulesPermittedExtrinsicsPermittedExtrinsicsDescriptor: 'Vec<Call>',
  /**
   * Lookup427: enjin_matrix_runtime::MaxPermittedExtrinsicLength
   **/
  EnjinMatrixRuntimeMaxPermittedExtrinsicLength: 'Null',
  /**
   * Lookup429: pallet_fuel_tanks::rules::whitelisted_pallets::WhitelistedPalletsDescriptor<enjin_matrix_runtime::RuntimeCall, enjin_matrix_runtime::MaxPermittedExtrinsicLength>
   **/
  PalletFuelTanksRulesWhitelistedPalletsWhitelistedPalletsDescriptor: 'Vec<Call>',
  /**
   * Lookup430: enjin_matrix_runtime::MaxRulesPerSet
   **/
  EnjinMatrixRuntimeMaxRulesPerSet: 'Null',
  /**
   * Lookup437: pallet_fuel_tanks::types::DispatchSettings
   **/
  PalletFuelTanksDispatchSettings: {
    useNoneOrigin: 'bool',
    paysRemainingFee: 'bool'
  },
  /**
   * Lookup440: pallet_marketplace::pallet::Call<T>
   **/
  PalletMarketplaceCall: {
    _enum: {
      create_listing: {
        makeAssetId: 'EpMultiTokensTokenAssetId',
        takeAssetId: 'EpMultiTokensTokenAssetId',
        amount: 'Compact<u128>',
        price: 'Compact<u128>',
        salt: 'Bytes',
        auctionData: 'Option<PalletMarketplaceFeaturesAuctionAuctionData>',
      },
      cancel_listing: {
        listingId: 'H256',
      },
      fill_listing: {
        listingId: 'H256',
        amount: 'Compact<u128>',
      },
      place_bid: {
        listingId: 'H256',
        price: 'Compact<u128>',
      },
      finalize_auction: {
        listingId: 'H256',
      },
      set_protocol_fee: {
        protocolFee: 'Perbill',
      },
      force_create_listing: {
        seller: 'MultiAddress',
        makeAssetId: 'EpMultiTokensTokenAssetId',
        takeAssetId: 'EpMultiTokensTokenAssetId',
        amount: 'Compact<u128>',
        price: 'Compact<u128>',
        salt: 'Bytes',
        auctionData: 'Option<PalletMarketplaceFeaturesAuctionAuctionData>',
        depositBacker: 'Option<MultiAddress>',
      },
      force_place_bid: {
        bidder: 'MultiAddress',
        listingId: 'H256',
        price: 'Compact<u128>',
        fundsBacker: 'Option<MultiAddress>'
      }
    }
  },
  /**
   * Lookup442: pallet_extrinsic_pause::pallet::Call<T>
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
   * Lookup443: pallet_matrix_utility::pallet::Call<T>
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
   * Lookup444: pallet_multi_tokens_cross_chain_migration::pallet::Call<T>
   **/
  PalletMultiTokensCrossChainMigrationCall: {
    _enum: {
      migrate_collections: {
        collections: 'Vec<(u128,EpMultiTokensCollection)>',
      },
      migrate_tokens: {
        tokens: 'Vec<(u128,u128,EpMultiTokensToken)>',
      },
      migrate_collection_accounts: {
        accounts: 'Vec<(u128,AccountId32,PalletMultiTokensFeaturesCollectionTypesCollectionAccount)>',
      },
      migrate_token_accounts: {
        accounts: 'Vec<(u128,u128,AccountId32,PalletMultiTokensFeaturesTokenTypesTokenAccount)>',
      },
      migrate_attributes: {
        attributes: 'Vec<(u128,Option<u128>,Bytes,EpMultiTokensAttribute)>',
      },
      finalize: {
        nextCollectionId: 'u128'
      }
    }
  },
  /**
   * Lookup460: pallet_claims::pallet::Call<T>
   **/
  PalletClaimsCall: {
    _enum: {
      claim: {
        dest: 'AccountId32',
        ethereumSignature: 'SpCoreEcdsaSignature',
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
   * Lookup462: pallet_claims::types::Claim<Balance, primitive_types::H256>
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
   * Lookup463: pallet_claims::types::TransactionData<Balance>
   **/
  PalletClaimsTransactionData: {
    account: 'H160',
    amount: 'u128'
  },
  /**
   * Lookup466: pallet_claims::types::RejectData<primitive_types::H256>
   **/
  PalletClaimsRejectData: {
    _alias: {
      hash_: 'hash'
    },
    account: 'H160',
    hash_: 'H256'
  },
  /**
   * Lookup468: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'MultiAddress',
      },
      set_identity: {
        info: 'PalletIdentityIdentityInfo',
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
        fields: 'PalletIdentityBitFlags',
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
      quit_sub: 'Null'
    }
  },
  /**
   * Lookup469: pallet_identity::types::IdentityInfo<FieldLimit>
   **/
  PalletIdentityIdentityInfo: {
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
   * Lookup505: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
   **/
  PalletIdentityBitFlags: {
    _bitLength: 64,
    Display: 1,
    Legal: 2,
    Web: 4,
    Riot: 8,
    Email: 16,
    PgpFingerprint: 32,
    Image: 64,
    Twitter: 128
  },
  /**
   * Lookup506: pallet_identity::types::IdentityField
   **/
  PalletIdentityIdentityField: {
    _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
  },
  /**
   * Lookup507: pallet_identity::types::Judgement<Balance>
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
   * Lookup510: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup511: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup513: pallet_balances::types::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup514: pallet_balances::types::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup517: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup520: pallet_balances::types::IdAmount<Id, Balance>
   **/
  PalletBalancesIdAmount: {
    id: 'Null',
    amount: 'u128'
  },
  /**
   * Lookup522: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes']
  },
  /**
   * Lookup524: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup530: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<enjin_matrix_runtime::RuntimeCall>, Balance>
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
   * Lookup531: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<enjin_matrix_runtime::RuntimeCall>, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u32',
    proposal: 'FrameSupportPreimagesBounded',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u32',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup532: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup533: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
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
   * Lookup537: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup538: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u32,u128)',
  /**
   * Lookup541: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'ReferendumInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooMany', 'VotingPeriodLow', 'PreimageNotExist']
  },
  /**
   * Lookup543: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u32'
  },
  /**
   * Lookup544: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
  },
  /**
   * Lookup547: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup551: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup552: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
  },
  /**
   * Lookup554: pallet_membership::pallet::Error<T, I>
   **/
  PalletMembershipError: {
    _enum: ['AlreadyMember', 'NotMember', 'TooManyMembers']
  },
  /**
   * Lookup556: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup558: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup560: pallet_collator_staking::types::Collator<sp_core::crypto::AccountId32, Amount, enjin_matrix_runtime::MaxNominationPerCollator>
   **/
  PalletCollatorStakingCollator: {
    account: 'AccountId32',
    amount: 'u128',
    totalStake: 'u128',
    rewardsCut: 'Perbill',
    nominators: 'Vec<AccountId32>'
  },
  /**
   * Lookup561: enjin_matrix_runtime::MaxNominationPerCollator
   **/
  EnjinMatrixRuntimeMaxNominationPerCollator: 'Null',
  /**
   * Lookup565: pallet_collator_staking::types::CandidateSet<sp_core::crypto::AccountId32, Amount, enjin_matrix_runtime::MaxNominationPerCollator, enjin_matrix_runtime::MaxCandidates>
   **/
  PalletCollatorStakingCandidateSet: 'Vec<PalletCollatorStakingCollator>',
  /**
   * Lookup566: enjin_matrix_runtime::MaxCandidates
   **/
  EnjinMatrixRuntimeMaxCandidates: 'Null',
  /**
   * Lookup568: pallet_collator_staking::types::Nomination<sp_core::crypto::AccountId32, Amount>
   **/
  PalletCollatorStakingNomination: {
    account: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup569: pallet_collator_staking::types::Round<BlockNumber, sp_core::crypto::AccountId32, Amount, enjin_matrix_runtime::MaxCollators, enjin_matrix_runtime::MaxNominationPerCollator>
   **/
  PalletCollatorStakingRound: {
    number: 'u32',
    startingBlock: 'u32',
    collators: 'Vec<PalletCollatorStakingCollator>'
  },
  /**
   * Lookup570: enjin_matrix_runtime::MaxCollators
   **/
  EnjinMatrixRuntimeMaxCollators: 'Null',
  /**
   * Lookup572: pallet_collator_staking::types::CollatorSessionInfo
   **/
  PalletCollatorStakingCollatorSessionInfo: {
    authoredBlockCount: 'Compact<u32>',
    uptime: 'Compact<Perbill>'
  },
  /**
   * Lookup573: pallet_collator_staking::pallet::Error<T>
   **/
  PalletCollatorStakingError: {
    _enum: ['CandidateExists', 'CandidateDoesNotExist', 'NominationExists', 'NominationDoesNotExist', 'BelowMinStakeAmount', 'BelowMinNominationStakeAmount', 'ExitInProgress', 'TooManyInvulnerables', 'TooManyCandidates', 'TooManyNominations', 'NotCollator', 'CannotUnbondInvulnerable', 'AccountIdNotRegistered', 'NoAssociatedValidatorId']
  },
  /**
   * Lookup577: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup578: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup580: cumulus_pallet_xcmp_queue::InboundChannelDetails
   **/
  CumulusPalletXcmpQueueInboundChannelDetails: {
    sender: 'u32',
    state: 'CumulusPalletXcmpQueueInboundState',
    messageMetadata: 'Vec<(u32,PolkadotParachainPrimitivesXcmpMessageFormat)>'
  },
  /**
   * Lookup581: cumulus_pallet_xcmp_queue::InboundState
   **/
  CumulusPalletXcmpQueueInboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup584: polkadot_parachain::primitives::XcmpMessageFormat
   **/
  PolkadotParachainPrimitivesXcmpMessageFormat: {
    _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
  },
  /**
   * Lookup587: cumulus_pallet_xcmp_queue::OutboundChannelDetails
   **/
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: 'u32',
    state: 'CumulusPalletXcmpQueueOutboundState',
    signalsExist: 'bool',
    firstIndex: 'u16',
    lastIndex: 'u16'
  },
  /**
   * Lookup588: cumulus_pallet_xcmp_queue::OutboundState
   **/
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup590: cumulus_pallet_xcmp_queue::QueueConfigData
   **/
  CumulusPalletXcmpQueueQueueConfigData: {
    suspendThreshold: 'u32',
    dropThreshold: 'u32',
    resumeThreshold: 'u32',
    thresholdWeight: 'SpWeightsWeightV2Weight',
    weightRestrictDecay: 'SpWeightsWeightV2Weight',
    xcmpMaxIndividualWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup592: cumulus_pallet_xcmp_queue::pallet::Error<T>
   **/
  CumulusPalletXcmpQueueError: {
    _enum: ['FailedToSend', 'BadXcmOrigin', 'BadXcm', 'BadOverweightIndex', 'WeightOverLimit']
  },
  /**
   * Lookup593: pallet_xcm::pallet::QueryStatus<BlockNumber>
   **/
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: 'XcmVersionedMultiLocation',
        maybeMatchQuerier: 'Option<XcmVersionedMultiLocation>',
        maybeNotify: 'Option<(u8,u8)>',
        timeout: 'u32',
      },
      VersionNotifier: {
        origin: 'XcmVersionedMultiLocation',
        isActive: 'bool',
      },
      Ready: {
        response: 'XcmVersionedResponse',
        at: 'u32'
      }
    }
  },
  /**
   * Lookup597: xcm::VersionedResponse
   **/
  XcmVersionedResponse: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'XcmV2Response',
      V3: 'XcmV3Response'
    }
  },
  /**
   * Lookup603: pallet_xcm::pallet::VersionMigrationStage
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
   * Lookup606: xcm::VersionedAssetId
   **/
  XcmVersionedAssetId: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetAssetId'
    }
  },
  /**
   * Lookup607: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
   **/
  PalletXcmRemoteLockedFungibleRecord: {
    amount: 'u128',
    owner: 'XcmVersionedMultiLocation',
    locker: 'XcmVersionedMultiLocation',
    consumers: 'Vec<(Null,u128)>'
  },
  /**
   * Lookup614: pallet_xcm::pallet::Error<T>
   **/
  PalletXcmError: {
    _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed', 'InvalidAsset', 'LowBalance', 'TooManyLocks', 'AccountNotSovereign', 'FeesNotMet', 'LockNotFound', 'InUse']
  },
  /**
   * Lookup615: cumulus_pallet_xcm::pallet::Error<T>
   **/
  CumulusPalletXcmError: 'Null',
  /**
   * Lookup616: cumulus_pallet_dmp_queue::ConfigData
   **/
  CumulusPalletDmpQueueConfigData: {
    maxIndividual: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup617: cumulus_pallet_dmp_queue::PageIndexData
   **/
  CumulusPalletDmpQueuePageIndexData: {
    beginUsed: 'u32',
    endUsed: 'u32',
    overweightCount: 'u64'
  },
  /**
   * Lookup620: cumulus_pallet_dmp_queue::pallet::Error<T>
   **/
  CumulusPalletDmpQueueError: {
    _enum: ['Unknown', 'OverLimit']
  },
  /**
   * Lookup621: orml_xcm::module::Error<T>
   **/
  OrmlXcmModuleError: {
    _enum: ['Unreachable', 'SendFailure', 'BadVersion']
  },
  /**
   * Lookup622: matrix_pallet_xcm::pallet::Error<T>
   **/
  MatrixPalletXcmError: {
    _enum: ['InvalidAddress', 'NotTransferable']
  },
  /**
   * Lookup623: orml_unknown_tokens::module::Error<T>
   **/
  OrmlUnknownTokensModuleError: {
    _enum: ['BalanceTooLow', 'BalanceOverflow', 'UnhandledAsset']
  },
  /**
   * Lookup624: orml_xtokens::module::Error<T>
   **/
  OrmlXtokensModuleError: {
    _enum: ['AssetHasNoReserve', 'NotCrossChainTransfer', 'InvalidDest', 'NotCrossChainTransferableCurrency', 'UnweighableMessage', 'XcmExecutionFailed', 'CannotReanchor', 'InvalidAncestry', 'InvalidAsset', 'DestinationNotInvertible', 'BadVersion', 'DistinctReserveForAssetAndFee', 'ZeroFee', 'ZeroAmount', 'TooManyAssetsBeingSent', 'AssetIndexNonExistent', 'FeeNotEnough', 'NotSupportedMultiLocation', 'MinXcmFeeNotDefined']
  },
  /**
   * Lookup625: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
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
   * Lookup626: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
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
   * Lookup628: pallet_bounties::pallet::Error<T, I>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
  },
  /**
   * Lookup634: ep_core::frame::migrations::Migration<enjin_matrix_runtime::MaxMigrationKeyLength>
   **/
  EpCoreFrameMigrationsMigration: {
    stage: 'EpCoreFrameMigrationsMigrationStage',
    lastIteratedKey: 'Option<Bytes>'
  },
  /**
   * Lookup635: enjin_matrix_runtime::MaxMigrationKeyLength
   **/
  EnjinMatrixRuntimeMaxMigrationKeyLength: 'Null',
  /**
   * Lookup638: ep_multi_tokens::types::NativeAssetInfo<ep_multi_tokens::token::AssetId<CollectionId, TokenId>>
   **/
  EpMultiTokensNativeAssetInfo: {
    id: 'EpMultiTokensTokenAssetId',
    unitsPerSecond: 'u128'
  },
  /**
   * Lookup640: ep_core::frame::types::ExtrinsicInfo<enjin_matrix_runtime::MaxNameLength>
   **/
  EpCoreFrameTypesExtrinsicInfo: {
    palletName: 'Bytes',
    extrinsicName: 'Option<Bytes>'
  },
  /**
   * Lookup643: pallet_multi_tokens::pallet::Error<T>
   **/
  PalletMultiTokensError: {
    _enum: ['CollectionNotFound', 'CollectionAccountNotFound', 'TokenNotFound', 'TokenAccountNotFound', 'NoPermission', 'BalanceLow', 'Frozen', 'HasNeverFreezeState', 'PermanentlyFrozen', 'InvalidFreezeState', 'AmountZero', 'InvalidAttributeKey', 'MaxTokenCountExceeded', 'TokenMintCapExceeded', 'TokenAlreadyExists', 'DestroyForbiddenByAttributeCount', 'DestroyForbiddenByRemainingTokens', 'DestroyForbiddenByCollectionEvent', 'DepositReserveFailed', 'DepositUnreserveFailed', 'InvalidUnitPrice', 'BalanceBelowMinimumRequirement', 'MintFailedRequirements', 'IdleOperationQueueFull', 'ReservesLow', 'TooManyReserves', 'TooManyLocks', 'LiquidityRestrictions', 'PercentageOutOfBounds', 'CurrencyIncompatibleWithCollectionRoyalty', 'MaxApprovalsExceeded', 'AlreadyExpired', 'CollectionAlreadyApproved', 'InsufficientAllowance', 'WrongCurrentApprovedAmount', 'CannotApproveSelf', 'CannotTransferToSelf', 'TransferParamCreationFailed', 'OperationNotAllowedForNativeToken', 'InvalidExplicitRoyaltyCurrencies', 'InvalidAttributeCount', 'ConflictingLocation', 'CollectionIdAlreadyInUse', 'FreezeStateRequired', 'PremintExceeded', 'TokenMetadataCreationFailed', 'NoClaimAvailable', 'InvalidEthereumSignature', 'InvalidEthereumAddress', 'TokenIdReservedForClaim', 'CollectionCountExceeded', 'WrongCount', 'InvalidMintParams']
  },
  /**
   * Lookup648: ep_core::frame::types::PoolAccountIds<sp_core::crypto::AccountId32>
   **/
  EpCoreFrameTypesPoolAccountIds: {
    collator: 'AccountId32',
    community: 'AccountId32',
    fuelTanks: 'AccountId32',
    priceDiscovery: 'AccountId32'
  },
  /**
   * Lookup649: pallet_pools::pallet::Error<T>
   **/
  PalletPoolsError: {
    _enum: ['InvalidFeeShares', 'PoolCountExceeded']
  },
  /**
   * Lookup650: pallet_fuel_tanks::types::FuelTank<ep_core::frame::types::BoundedString<enjin_matrix_runtime::MaxFuelTankNameLength>, sp_core::crypto::AccountId32, Balance, bounded_collections::bounded_btree_map::BoundedBTreeMap<K, pallet_fuel_tanks::rules::RuleSet<pallet_fuel_tanks::rules::DispatchRuleWrapper<T>, enjin_matrix_runtime::MaxRulesPerSet>, S>, bounded_collections::bounded_btree_map::BoundedBTreeMap<pallet_fuel_tanks::rules::AccountRuleKind, pallet_fuel_tanks::rules::AccountRuleWrapper<T>, S>>
   **/
  PalletFuelTanksFuelTank: {
    owner: 'AccountId32',
    name: 'Bytes',
    ruleSets: 'BTreeMap<u32, PalletFuelTanksRulesRuleSet>',
    totalReserved: 'Compact<u128>',
    accountCount: 'Compact<u32>',
    userAccountManagement: 'Option<PalletFuelTanksUserAccountManagement>',
    isFrozen: 'bool',
    providesDeposit: 'bool',
    accountRules: 'BTreeMap<PalletFuelTanksRulesAccountRuleKind, PalletFuelTanksRulesAccountRuleWrapper>'
  },
  /**
   * Lookup652: pallet_fuel_tanks::rules::RuleSet<pallet_fuel_tanks::rules::DispatchRuleWrapper<T>, enjin_matrix_runtime::MaxRulesPerSet>
   **/
  PalletFuelTanksRulesRuleSet: {
    rules: 'BTreeMap<PalletFuelTanksRulesDispatchRuleKind, PalletFuelTanksRulesDispatchRuleWrapper>',
    isFrozen: 'bool'
  },
  /**
   * Lookup653: pallet_fuel_tanks::rules::DispatchRuleWrapper<T>
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
      WhitelistedPallets: 'PalletFuelTanksRulesWhitelistedPalletsWhitelistedPalletsRule'
    }
  },
  /**
   * Lookup654: pallet_fuel_tanks::rules::user_fuel_budget::UserFuelBudgetRule<pallet_fuel_tanks::types::Budget<Balance, BlockNumber>>
   **/
  PalletFuelTanksRulesUserFuelBudgetUserFuelBudgetRule: {
    budget: 'PalletFuelTanksBudget',
    userCount: 'Compact<u32>'
  },
  /**
   * Lookup655: pallet_fuel_tanks::rules::tank_fuel_budget::TankFuelBudgetRule<Balance, BlockNumber>
   **/
  PalletFuelTanksRulesTankFuelBudgetTankFuelBudgetRule: {
    budget: 'PalletFuelTanksBudget',
    consumption: 'PalletFuelTanksConsumption'
  },
  /**
   * Lookup656: pallet_fuel_tanks::rules::permitted_extrinsics::PermittedExtrinsicsRule<pallet_fuel_tanks::types::ExtrinsicInfo<enjin_matrix_runtime::MaxExtrinsicNameLength>, enjin_matrix_runtime::MaxPermittedExtrinsicLength>
   **/
  PalletFuelTanksRulesPermittedExtrinsicsPermittedExtrinsicsRule: 'Vec<PalletFuelTanksExtrinsicInfo>',
  /**
   * Lookup657: pallet_fuel_tanks::types::ExtrinsicInfo<enjin_matrix_runtime::MaxExtrinsicNameLength>
   **/
  PalletFuelTanksExtrinsicInfo: {
    palletName: 'Bytes',
    extrinsicName: 'Bytes'
  },
  /**
   * Lookup658: enjin_matrix_runtime::MaxExtrinsicNameLength
   **/
  EnjinMatrixRuntimeMaxExtrinsicNameLength: 'Null',
  /**
   * Lookup663: pallet_fuel_tanks::rules::whitelisted_pallets::WhitelistedPalletsRule<ep_core::frame::types::BoundedString<enjin_matrix_runtime::MaxExtrinsicNameLength>, enjin_matrix_runtime::MaxCallFilters>
   **/
  PalletFuelTanksRulesWhitelistedPalletsWhitelistedPalletsRule: 'Vec<Bytes>',
  /**
   * Lookup674: pallet_fuel_tanks::rules::AccountRuleKind
   **/
  PalletFuelTanksRulesAccountRuleKind: {
    _enum: ['WhitelistedCallers', 'RequireToken']
  },
  /**
   * Lookup675: pallet_fuel_tanks::rules::AccountRuleWrapper<T>
   **/
  PalletFuelTanksRulesAccountRuleWrapper: {
    _enum: {
      WhitelistedCallers: 'PalletFuelTanksRulesWhitelistedCallersWhitelistedCallersRule',
      RequireToken: 'PalletFuelTanksRulesRequireTokenRequireTokenRule'
    }
  },
  /**
   * Lookup680: pallet_fuel_tanks::types::UserAccount<Balance, RuleSetId, enjin_matrix_runtime::MaxRuleSets, enjin_matrix_runtime::MaxRulesPerSet, enjin_matrix_runtime::MaxAccountRuleDataLength>
   **/
  PalletFuelTanksUserAccount: {
    tankDeposit: 'Compact<u128>',
    userDeposit: 'Compact<u128>',
    totalReceived: 'Compact<u128>',
    ruleDataSets: 'BTreeMap<u32, BTreeMap<PalletFuelTanksRulesDispatchRuleKind, Bytes>>'
  },
  /**
   * Lookup681: enjin_matrix_runtime::MaxRuleSets
   **/
  EnjinMatrixRuntimeMaxRuleSets: 'Null',
  /**
   * Lookup682: enjin_matrix_runtime::MaxAccountRuleDataLength
   **/
  EnjinMatrixRuntimeMaxAccountRuleDataLength: 'Null',
  /**
   * Lookup692: pallet_fuel_tanks::pallet::Error<T>
   **/
  PalletFuelTanksError: {
    _enum: ['FuelTankNotFound', 'FuelTankAlreadyExists', 'InsufficientBalance', 'UsageRestricted', 'FuelTankOutOfFunds', 'RuleSetNotFound', 'RuleNotFound', 'NoPermission', 'AccountAlreadyExists', 'AccountNotFound', 'DestroyWithExistingAccounts', 'DestroyUnfrozenTank', 'MaxRuleSetsExceeded', 'UserRuleDataExceededMaxSize', 'DecodeUserRuleDataFailed', 'RequiresFrozenTankOrRuleset', 'RequiresFrozenTank', 'MissingRequiredRule', 'MissingRequiredRuleUserData', 'InvalidRuleSet', 'AccountContainsRuleData', 'CannotRemoveRuleThatIsStoringAccountData', 'DuplicateRuleKinds', 'DepositCalculationError', 'FuelTankFrozen', 'CallerDoesNotHaveRuleSetTokenBalance', 'NoDataToRemove']
  },
  /**
   * Lookup693: pallet_marketplace::types::MarketPlaceInfo
   **/
  PalletMarketplaceMarketPlaceInfo: {
    protocolFee: 'Compact<Perbill>'
  },
  /**
   * Lookup694: pallet_marketplace::pallet::Error<T>
   **/
  PalletMarketplaceError: {
    _enum: ['UnableToFill', 'ListingNotFound', 'NoPermission', 'MaxRoundingErrorExceeded', 'LowBaseCurrencyBalance', 'LowTokenBalance', 'TransferParamCreationFailed', 'TakeValueUnderMinimum', 'ListingAlreadyExists', 'InvalidAuctionStart', 'InvalidAuctionEnd', 'InactiveAuction', 'AuctionNotOver', 'ListingIsWrongType', 'InvalidAmount', 'InvalidPrice', 'ListingForbidden', 'NoCurrency', 'ListingNotActive', 'CurrencyNotAllowedAsRoyalty', 'BuyerIsSeller', 'MakeAssetFrozen', 'TakeAssetFrozen']
  },
  /**
   * Lookup695: pallet_extrinsic_pause::pallet::Error<T>
   **/
  PalletExtrinsicPauseError: {
    _enum: ['CannotPauseSelf', 'CannotProcessInput']
  },
  /**
   * Lookup696: pallet_matrix_utility::pallet::Error<T>
   **/
  PalletMatrixUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup697: pallet_multi_tokens_cross_chain_migration::pallet::Error<T>
   **/
  PalletMultiTokensCrossChainMigrationError: {
    _enum: ['MigrationAlreadyCompleted', 'OnlyFinalizeOngoing']
  },
  /**
   * Lookup699: pallet_claims::types::ClaimData<Balance, primitive_types::H256, BlockNumber>
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
   * Lookup701: pallet_claims::pallet::Error<T>
   **/
  PalletClaimsError: {
    _enum: ['InvalidEthereumSignature', 'SignerHasNoClaim', 'AmountZero', 'InvalidClaimRequestTimestamp', 'ExchangeRateIsNotSet', 'OutOfBounds', 'InvalidClaimTimestamp', 'DelayTimeForClaimNotSet', 'DelayTimeSetTooLow', 'InvalidEthereumAddress', 'DelayTimeForClaimNotEnded', 'SameEthereumAddress']
  },
  /**
   * Lookup702: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityIdentityInfo'
  },
  /**
   * Lookup710: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup712: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed']
  },
  /**
   * Lookup714: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup715: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup717: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup719: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup720: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup721: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup724: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup725: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup726: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup727: pallet_fuel_tanks::extension::CheckFuelTank<T>
   **/
  PalletFuelTanksExtensionCheckFuelTank: 'Null'
};
