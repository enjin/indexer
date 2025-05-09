'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.futureCodeUpgradesAt =
    exports.mostRecentContext =
    exports.codeByHash =
    exports.codeByHashRefs =
    exports.upcomingParasGenesis =
    exports.actionsQueue =
    exports.upcomingUpgrades =
    exports.upgradeCooldowns =
    exports.upgradeRestrictionSignal =
    exports.upgradeGoAheadSignal =
    exports.futureCodeHash =
    exports.futureCodeUpgrades =
    exports.pastCodePruning =
    exports.pastCodeMeta =
    exports.pastCodeHash =
    exports.currentCodeHash =
    exports.heads =
    exports.paraLifecycles =
    exports.parachains =
    exports.pvfActiveVoteList =
    exports.pvfActiveVoteMap =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
var enjinV1050 = require('../enjinV1050')
var v1050 = require('../v1050')
exports.pvfActiveVoteMap = {
    /**
     *  All currently active PVF pre-checking votes.
     *
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    enjinV100: new support_1.StorageType(
        'Paras.PvfActiveVoteMap',
        'Optional',
        [enjinV100.ValidationCodeHash],
        enjinV100.PvfCheckActiveVoteState
    ),
    /**
     *  All currently active PVF pre-checking votes.
     *
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    enjinV1032: new support_1.StorageType(
        'Paras.PvfActiveVoteMap',
        'Optional',
        [enjinV1032.ValidationCodeHash],
        enjinV1032.PvfCheckActiveVoteState
    ),
    /**
     *  All currently active PVF pre-checking votes.
     *
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    enjinV1050: new support_1.StorageType(
        'Paras.PvfActiveVoteMap',
        'Optional',
        [enjinV1050.ValidationCodeHash],
        enjinV1050.PvfCheckActiveVoteState
    ),
    /**
     *  All currently active PVF pre-checking votes.
     *
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    v100: new support_1.StorageType(
        'Paras.PvfActiveVoteMap',
        'Optional',
        [v100.ValidationCodeHash],
        v100.PvfCheckActiveVoteState
    ),
    /**
     *  All currently active PVF pre-checking votes.
     *
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    v1030: new support_1.StorageType(
        'Paras.PvfActiveVoteMap',
        'Optional',
        [v1030.ValidationCodeHash],
        v1030.PvfCheckActiveVoteState
    ),
    /**
     *  All currently active PVF pre-checking votes.
     *
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    v1050: new support_1.StorageType(
        'Paras.PvfActiveVoteMap',
        'Optional',
        [v1050.ValidationCodeHash],
        v1050.PvfCheckActiveVoteState
    ),
}
exports.pvfActiveVoteList = {
    /**
     *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
     */
    enjinV100: new support_1.StorageType(
        'Paras.PvfActiveVoteList',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV100.ValidationCodeHash
        })
    ),
}
exports.parachains = {
    /**
     *  All parachains. Ordered ascending by `ParaId`. Parathreads are not included.
     *
     *  Consider using the [`ParachainsCache`] type of modifying.
     */
    enjinV100: new support_1.StorageType(
        'Paras.Parachains',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV100.Id
        })
    ),
}
exports.paraLifecycles = {
    /**
     *  The current lifecycle of a all known Para IDs.
     */
    enjinV100: new support_1.StorageType('Paras.ParaLifecycles', 'Optional', [enjinV100.Id], enjinV100.ParaLifecycle),
}
exports.heads = {
    /**
     *  The head-data of every registered para.
     */
    enjinV100: new support_1.StorageType('Paras.Heads', 'Optional', [enjinV100.Id], enjinV100.HeadData),
}
exports.currentCodeHash = {
    /**
     *  The validation code hash of every live para.
     *
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    enjinV100: new support_1.StorageType(
        'Paras.CurrentCodeHash',
        'Optional',
        [enjinV100.Id],
        enjinV100.ValidationCodeHash
    ),
}
exports.pastCodeHash = {
    /**
     *  Actual past code hash, indicated by the para id as well as the block number at which it
     *  became outdated.
     *
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    enjinV100: new support_1.StorageType(
        'Paras.PastCodeHash',
        'Optional',
        [
            support_1.sts.tuple(function () {
                return [enjinV100.Id, support_1.sts.number()]
            }),
        ],
        enjinV100.ValidationCodeHash
    ),
}
exports.pastCodeMeta = {
    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to keep it available for approval checkers.
     */
    enjinV100: new support_1.StorageType('Paras.PastCodeMeta', 'Default', [enjinV100.Id], enjinV100.ParaPastCodeMeta),
}
exports.pastCodePruning = {
    /**
     *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
     *  Note that this is the actual height of the included block, not the expected height at which the
     *  code upgrade would be applied, although they may be equal.
     *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
     *  from the time at which the parachain perceives a code upgrade as having occurred.
     *  Multiple entries for a single para are permitted. Ordered ascending by block number.
     */
    enjinV100: new support_1.StorageType(
        'Paras.PastCodePruning',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [enjinV100.Id, support_1.sts.number()]
            })
        })
    ),
}
exports.futureCodeUpgrades = {
    /**
     *  The block number at which the planned code change is expected for a para.
     *  The change will be applied after the first parablock for this ID included which executes
     *  in the context of a relay chain block with a number >= `expected_at`.
     */
    enjinV100: new support_1.StorageType(
        'Paras.FutureCodeUpgrades',
        'Optional',
        [enjinV100.Id],
        support_1.sts.number()
    ),
}
exports.futureCodeHash = {
    /**
     *  The actual future code hash of a para.
     *
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    enjinV100: new support_1.StorageType(
        'Paras.FutureCodeHash',
        'Optional',
        [enjinV100.Id],
        enjinV100.ValidationCodeHash
    ),
}
exports.upgradeGoAheadSignal = {
    /**
     *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade procedure.
     *
     *  This value is absent when there are no upgrades scheduled or during the time the relay chain
     *  performs the checks. It is set at the first relay-chain block when the corresponding parachain
     *  can switch its upgrade function. As soon as the parachain's block is included, the value
     *  gets reset to `None`.
     *
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    enjinV100: new support_1.StorageType(
        'Paras.UpgradeGoAheadSignal',
        'Optional',
        [enjinV100.Id],
        enjinV100.V4UpgradeGoAhead
    ),
}
exports.upgradeRestrictionSignal = {
    /**
     *  This is used by the relay-chain to communicate that there are restrictions for performing
     *  an upgrade for this parachain.
     *
     *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
     *  potential use case is when we want to perform some maintenance (such as storage migration)
     *  we could restrict upgrades to make the process simpler.
     *
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    enjinV100: new support_1.StorageType(
        'Paras.UpgradeRestrictionSignal',
        'Optional',
        [enjinV100.Id],
        enjinV100.V4UpgradeRestriction
    ),
}
exports.upgradeCooldowns = {
    /**
     *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
     *
     *  Ordered ascending by block number.
     */
    enjinV100: new support_1.StorageType(
        'Paras.UpgradeCooldowns',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [enjinV100.Id, support_1.sts.number()]
            })
        })
    ),
}
exports.upcomingUpgrades = {
    /**
     *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
     *  upgrade and at which relay-chain block it is expected at.
     *
     *  Ordered ascending by block number.
     */
    enjinV100: new support_1.StorageType(
        'Paras.UpcomingUpgrades',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [enjinV100.Id, support_1.sts.number()]
            })
        })
    ),
}
exports.actionsQueue = {
    /**
     *  The actions to perform during the start of a specific session index.
     */
    enjinV100: new support_1.StorageType(
        'Paras.ActionsQueue',
        'Default',
        [support_1.sts.number()],
        support_1.sts.array(function () {
            return enjinV100.Id
        })
    ),
}
exports.upcomingParasGenesis = {
    /**
     *  Upcoming paras instantiation arguments.
     *
     *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
     *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
     */
    enjinV100: new support_1.StorageType(
        'Paras.UpcomingParasGenesis',
        'Optional',
        [enjinV100.Id],
        enjinV100.ParaGenesisArgs
    ),
}
exports.codeByHashRefs = {
    /**
     *  The number of reference on the validation code in [`CodeByHash`] storage.
     */
    enjinV100: new support_1.StorageType(
        'Paras.CodeByHashRefs',
        'Default',
        [enjinV100.ValidationCodeHash],
        support_1.sts.number()
    ),
}
exports.codeByHash = {
    /**
     *  Validation code stored by its hash.
     *
     *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
     *  [`PastCodeHash`].
     */
    enjinV100: new support_1.StorageType(
        'Paras.CodeByHash',
        'Optional',
        [enjinV100.ValidationCodeHash],
        enjinV100.ValidationCode
    ),
}
exports.mostRecentContext = {
    /**
     *  The context (relay-chain block number) of the most recent parachain head.
     */
    enjinV1032: new support_1.StorageType(
        'Paras.MostRecentContext',
        'Optional',
        [enjinV1032.Id],
        support_1.sts.number()
    ),
}
exports.futureCodeUpgradesAt = {
    /**
     *  The list of upcoming future code upgrades.
     *
     *  Each item is a pair of the parachain and the expected block at which the upgrade should be
     *  applied. The upgrade will be applied at the given relay chain block. In contrast to
     *  [`FutureCodeUpgrades`] this code upgrade will be applied regardless the parachain making any
     *  progress or not.
     *
     *  Ordered ascending by block number.
     */
    enjinV1050: new support_1.StorageType(
        'Paras.FutureCodeUpgradesAt',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [enjinV1050.Id, support_1.sts.number()]
            })
        })
    ),
}
