'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.setTokenGroupAttribute =
    exports.setTokenGroups =
    exports.removeTokenFromGroup =
    exports.addTokenToGroup =
    exports.destroyTokenGroup =
    exports.createTokenGroup =
    exports.infuse =
    exports.updateAccountDeposit =
    exports.cancelCollectionTransfer =
    exports.acceptCollectionTransfer =
    exports.forceSetEthereumUnmintableTokenIds =
    exports.forceCreateEthereumCollection =
    exports.forceSetUnmintableTokenIds =
    exports.forceSetEthereumCollectionId =
    exports.forceSetEthereumAccount =
    exports.finishClaimTokens =
    exports.forceSetNextCollectionId =
    exports.forceFreeze =
    exports.forceApproveCollection =
    exports.forceBurn =
    exports.forceMint =
    exports.forceCreateCollection =
    exports.forceSetTokenAccount =
    exports.forceSetCollectionAccount =
    exports.forceSetAttribute =
    exports.forceSetToken =
    exports.forceSetCollection =
    exports.forceTransfer =
    exports.forceMutateCollection =
    exports.claimTokens =
    exports.claimCollections =
    exports.unapproveToken =
    exports.approveToken =
    exports.unapproveCollection =
    exports.approveCollection =
    exports.batchSetAttribute =
    exports.batchMint =
    exports.batchTransfer =
    exports.removeAllAttributes =
    exports.removeAttribute =
    exports.setAttribute =
    exports.thaw =
    exports.freeze =
    exports.transfer =
    exports.burn =
    exports.mint =
    exports.mutateToken =
    exports.mutateCollection =
    exports.destroyCollection =
    exports.createCollection =
        void 0
exports.updateCollectionAccountApprovals =
    exports.upgradeCollections =
    exports.upgradeTokens =
    exports.upgradeTokenAccounts =
    exports.recalculateCollectionDeposit =
    exports.removeTokenGroupAttribute =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v102 = require('../v102')
var v105 = require('../v105')
var v106 = require('../v106')
var enjinV120 = require('../enjinV120')
var v120 = require('../v120')
var matrixV500 = require('../matrixV500')
var matrixV600 = require('../matrixV600')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
var matrixEnjinV1000 = require('../matrixEnjinV1000')
var matrixV1000 = require('../matrixV1000')
var matrixEnjinV1003 = require('../matrixEnjinV1003')
var matrixV1003 = require('../matrixV1003')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var matrixV1020 = require('../matrixV1020')
var enjinV1021 = require('../enjinV1021')
var v1021 = require('../v1021')
var matrixEnjinV1022 = require('../matrixEnjinV1022')
var enjinV1023 = require('../enjinV1023')
var v1023 = require('../v1023')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
var enjinV1050 = require('../enjinV1050')
var v1050 = require('../v1050')
exports.createCollection = {
    name: 'MultiTokens.create_collection',
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     *
     * # Errors
     *
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.create_collection',
        support_1.sts.struct({
            descriptor: matrixEnjinV603.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     *
     * See [`CollectionDescriptor`](ep_multi_tokens::DefaultCollectionDescriptor) and
     * [`CollectionPolicyDescriptor`](ep_multi_tokens::DefaultCollectionPolicyDescriptor)
     * for more info about specific parameters. The [Mint
     * Policy](ep_multi_tokens::DefaultMintPolicyDescriptor) has the most parameters.
     *
     * **Minting Policy**
     *
     * - Max token count (optional)
     * - Max token supply (optional)
     * - Force Single Mint
     *   - If Yes, each token minted in the collection MUST be an NFT with a cap of 1.
     *
     * **Royalty (optional)**
     *
     *   - Beneficiary address
     *   - The percentage of marketplace sale royalty that will be sent to the beneficiary.
     *
     * **Explicit Royalty Currencies (optional)**
     *
     *   Optionally provide a list of tokens (must be currencies).
     *   - If no currencies are provided here, then ALL currencies are allowed for royalties.
     *   - If one or more currencies are provided here, they will be whitelisted for use as a
     *     royalty currency and ONLY this list of currencies will be allowed for royalties.
     *
     * # Errors
     *
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.create_collection',
        support_1.sts.struct({
            descriptor: matrixEnjinV1012.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     *
     * See [`CollectionDescriptor`](ep_multi_tokens::DefaultCollectionDescriptor) and
     * [`CollectionPolicyDescriptor`](ep_multi_tokens::DefaultCollectionPolicyDescriptor)
     * for more info about specific parameters. The [Mint
     * Policy](ep_multi_tokens::DefaultMintPolicyDescriptor) has the most parameters.
     *
     * **Minting Policy**
     *
     * - Max token count (optional)
     * - Max token supply (optional)
     * - Force Single Mint
     *   - If Yes, each token minted in the collection MUST be an NFT with a cap of 1.
     *
     * **Royalty (optional)**
     *
     *   - Beneficiary address
     *   - The percentage of marketplace sale royalty that will be sent to the beneficiary.
     *
     * **Explicit Royalty Currencies (optional)**
     *
     *   Optionally provide a list of tokens (must be currencies).
     *   - If no currencies are provided here, then ALL currencies are allowed for royalties.
     *   - If one or more currencies are provided here, they will be whitelisted for use as a
     *     royalty currency and ONLY this list of currencies will be allowed for royalties.
     *
     * # Errors
     *
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.create_collection',
        support_1.sts.struct({
            descriptor: matrixEnjinV1022.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     *
     * # Errors
     *
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.create_collection',
        support_1.sts.struct({
            descriptor: matrixV500.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     *
     * # Errors
     *
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.create_collection',
        support_1.sts.struct({
            descriptor: matrixV1010.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     *
     * See [`CollectionDescriptor`](ep_multi_tokens::DefaultCollectionDescriptor) and
     * [`CollectionPolicyDescriptor`](ep_multi_tokens::DefaultCollectionPolicyDescriptor)
     * for more info about specific parameters. The [Mint
     * Policy](ep_multi_tokens::DefaultMintPolicyDescriptor) has the most parameters.
     *
     * **Minting Policy**
     *
     * - Max token count (optional)
     * - Max token supply (optional)
     * - Force Single Mint
     *   - If Yes, each token minted in the collection MUST be an NFT with a cap of 1.
     *
     * **Royalty (optional)**
     *
     *   - Beneficiary address
     *   - The percentage of marketplace sale royalty that will be sent to the beneficiary.
     *
     * **Explicit Royalty Currencies (optional)**
     *
     *   Optionally provide a list of tokens (must be currencies).
     *   - If no currencies are provided here, then ALL currencies are allowed for royalties.
     *   - If one or more currencies are provided here, they will be whitelisted for use as a
     *     royalty currency and ONLY this list of currencies will be allowed for royalties.
     *
     * # Errors
     *
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    matrixV1020: new support_1.CallType(
        'MultiTokens.create_collection',
        support_1.sts.struct({
            descriptor: matrixV1020.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     *
     * # Errors
     *
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.create_collection',
        support_1.sts.struct({
            descriptor: enjinV100.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     *
     * See [`CollectionDescriptor`](ep_multi_tokens::DefaultCollectionDescriptor) and
     * [`CollectionPolicyDescriptor`](ep_multi_tokens::DefaultCollectionPolicyDescriptor)
     * for more info about specific parameters. The [Mint
     * Policy](ep_multi_tokens::DefaultMintPolicyDescriptor) has the most parameters.
     *
     * **Minting Policy**
     *
     * - Max token count (optional)
     * - Max token supply (optional)
     * - Force Single Mint
     *   - If Yes, each token minted in the collection MUST be an NFT with a cap of 1.
     *
     * **Royalty (optional)**
     *
     *   - Beneficiary address
     *   - The percentage of marketplace sale royalty that will be sent to the beneficiary.
     *
     * **Explicit Royalty Currencies (optional)**
     *
     *   Optionally provide a list of tokens (must be currencies).
     *   - If no currencies are provided here, then ALL currencies are allowed for royalties.
     *   - If one or more currencies are provided here, they will be whitelisted for use as a
     *     royalty currency and ONLY this list of currencies will be allowed for royalties.
     *
     * # Errors
     *
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.create_collection',
        support_1.sts.struct({
            descriptor: enjinV1032.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     *
     * See [`CollectionDescriptor`](ep_multi_tokens::DefaultCollectionDescriptor) and
     * [`CollectionPolicyDescriptor`](ep_multi_tokens::DefaultCollectionPolicyDescriptor)
     * for more info about specific parameters. The [Mint
     * Policy](ep_multi_tokens::DefaultMintPolicyDescriptor) has the most parameters.
     *
     * **Minting Policy**
     *
     * - Max token count (optional)
     * - Max token supply (optional)
     * - Force Single Mint
     *   - If Yes, each token minted in the collection MUST be an NFT with a cap of 1.
     *
     * **Royalty (optional)**
     *
     *   - Beneficiary address
     *   - The percentage of marketplace sale royalty that will be sent to the beneficiary.
     *
     * **Explicit Royalty Currencies (optional)**
     *
     *   Optionally provide a list of tokens (must be currencies).
     *   - If no currencies are provided here, then ALL currencies are allowed for royalties.
     *   - If one or more currencies are provided here, they will be whitelisted for use as a
     *     royalty currency and ONLY this list of currencies will be allowed for royalties.
     *
     * # Errors
     *
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    enjinV1050: new support_1.CallType(
        'MultiTokens.create_collection',
        support_1.sts.struct({
            descriptor: enjinV1050.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     *
     * # Errors
     *
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    v100: new support_1.CallType(
        'MultiTokens.create_collection',
        support_1.sts.struct({
            descriptor: v100.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     *
     * # Errors
     *
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    v1030: new support_1.CallType(
        'MultiTokens.create_collection',
        support_1.sts.struct({
            descriptor: v1030.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     *
     * See [`CollectionDescriptor`](ep_multi_tokens::DefaultCollectionDescriptor) and
     * [`CollectionPolicyDescriptor`](ep_multi_tokens::DefaultCollectionPolicyDescriptor)
     * for more info about specific parameters. The [Mint
     * Policy](ep_multi_tokens::DefaultMintPolicyDescriptor) has the most parameters.
     *
     * **Minting Policy**
     *
     * - Max token count (optional)
     * - Max token supply (optional)
     * - Force Single Mint
     *   - If Yes, each token minted in the collection MUST be an NFT with a cap of 1.
     *
     * **Royalty (optional)**
     *
     *   - Beneficiary address
     *   - The percentage of marketplace sale royalty that will be sent to the beneficiary.
     *
     * **Explicit Royalty Currencies (optional)**
     *
     *   Optionally provide a list of tokens (must be currencies).
     *   - If no currencies are provided here, then ALL currencies are allowed for royalties.
     *   - If one or more currencies are provided here, they will be whitelisted for use as a
     *     royalty currency and ONLY this list of currencies will be allowed for royalties.
     *
     * # Errors
     *
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    v1050: new support_1.CallType(
        'MultiTokens.create_collection',
        support_1.sts.struct({
            descriptor: v1050.DefaultCollectionDescriptor,
        })
    ),
}
exports.destroyCollection = {
    name: 'MultiTokens.destroy_collection',
    /**
     * Destroys [`Collection`](ep_multi_tokens::Collection) with `id`. `origin` must be the
     * owner of the [`Collection`](ep_multi_tokens::Collection).
     *
     * # Errors
     *
     * - [`Error::NoPermission`] if `origin` is not the owner of the collection.
     * - [`Error::CollectionNotFound`] if `Collection` with `id` does not exist.
     * - [`Error::DestroyForbiddenByCollectionEvent`] if another pallet is blocking the
     *   collection's destruction
     * - [`Error::DestroyForbiddenByRemainingTokens`] if collection still has tokens when
     *   destroying
     * - [`Error::DestroyForbiddenByAttributeCount`] if collection still has attributes when
     *   destroying
     * current number of collection attributes.
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.destroy_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
        })
    ),
}
exports.mutateCollection = {
    name: 'MultiTokens.mutate_collection',
    /**
     * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`
     *
     * # Errors
     *
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: matrixEnjinV603.DefaultCollectionMutation,
        })
    ),
    /**
     * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`. See
     * ['CollectionMutation'] for more info.
     *
     * A new owner of the collection can be assigned. (optional)
     * Explicit Royalty Currencies can be set for the entire collection (see the Explicit
     * Royalty Currencies section for a detailed description)
     *
     * # Errors
     *
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: matrixEnjinV1022.DefaultCollectionMutation,
        })
    ),
    /**
     * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`
     *
     * # Errors
     *
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: matrixV500.DefaultCollectionMutation,
        })
    ),
    /**
     * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`. See
     * ['CollectionMutation'] for more info.
     *
     * A new owner of the collection can be assigned. (optional)
     * Explicit Royalty Currencies can be set for the entire collection (see the Explicit
     * Royalty Currencies section for a detailed description)
     *
     * # Errors
     *
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    matrixV1020: new support_1.CallType(
        'MultiTokens.mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: matrixV1020.DefaultCollectionMutation,
        })
    ),
    /**
     * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`
     *
     * # Errors
     *
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: enjinV100.DefaultCollectionMutation,
        })
    ),
    /**
     * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`. See
     * ['CollectionMutation'] for more info.
     *
     * A new owner of the collection can be assigned. (optional)
     * Explicit Royalty Currencies can be set for the entire collection (see the Explicit
     * Royalty Currencies section for a detailed description)
     *
     * # Errors
     *
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    enjinV1050: new support_1.CallType(
        'MultiTokens.mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: enjinV1050.DefaultCollectionMutation,
        })
    ),
    /**
     * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`
     *
     * # Errors
     *
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    v100: new support_1.CallType(
        'MultiTokens.mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: v100.DefaultCollectionMutation,
        })
    ),
    /**
     * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`. See
     * ['CollectionMutation'] for more info.
     *
     * A new owner of the collection can be assigned. (optional)
     * Explicit Royalty Currencies can be set for the entire collection (see the Explicit
     * Royalty Currencies section for a detailed description)
     *
     * # Errors
     *
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    v1050: new support_1.CallType(
        'MultiTokens.mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: v1050.DefaultCollectionMutation,
        })
    ),
}
exports.mutateToken = {
    name: 'MultiTokens.mutate_token',
    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     *
     * # Errors
     *
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.mutate_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            mutation: matrixEnjinV603.DefaultTokenMutation,
        })
    ),
    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     *
     * The collection creator/owner can mutate the settings of a token.
     * See [DefaultTokenMutation](ep_multi_tokens::DefaultTokenMutation) for specific fields
     * and descriptions.
     *
     * Note that `behavior` is a nested option of type
     * [TokenMarketBehavior](ep_multi_tokens::TokenMarketBehavior). This can either be set to
     * `None`, a `Currency`, or a royalty.
     *
     * All fields are `Optional`, so only set the specific fields you want to change to `Some`.
     *
     * # Errors
     *
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.mutate_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            mutation: matrixEnjinV1012.DefaultTokenMutation,
        })
    ),
    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     *
     * The collection creator/owner can mutate the settings of a token.
     * See [DefaultTokenMutation](ep_multi_tokens::DefaultTokenMutation) for specific fields
     * and descriptions.
     *
     * Note that `behavior` is a nested option of type
     * [TokenMarketBehavior](ep_multi_tokens::TokenMarketBehavior). This can either be set to
     * `None`, a `Currency`, or a royalty.
     *
     * All fields are `Optional`, so only set the specific fields you want to change to `Some`.
     *
     * # Errors
     *
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.mutate_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            mutation: matrixEnjinV1022.DefaultTokenMutation,
        })
    ),
    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     *
     * # Errors
     *
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.mutate_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            mutation: matrixV500.DefaultTokenMutation,
        })
    ),
    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     *
     * # Errors
     *
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.mutate_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            mutation: matrixV1010.DefaultTokenMutation,
        })
    ),
    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     *
     * The collection creator/owner can mutate the settings of a token.
     * See [DefaultTokenMutation](ep_multi_tokens::DefaultTokenMutation) for specific fields
     * and descriptions.
     *
     * Note that `behavior` is a nested option of type
     * [TokenMarketBehavior](ep_multi_tokens::TokenMarketBehavior). This can either be set to
     * `None`, a `Currency`, or a royalty.
     *
     * All fields are `Optional`, so only set the specific fields you want to change to `Some`.
     *
     * # Errors
     *
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    matrixV1020: new support_1.CallType(
        'MultiTokens.mutate_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            mutation: matrixV1020.DefaultTokenMutation,
        })
    ),
    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     *
     * # Errors
     *
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.mutate_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            mutation: enjinV100.DefaultTokenMutation,
        })
    ),
    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     *
     * The collection creator/owner can mutate the settings of a token.
     * See [DefaultTokenMutation](ep_multi_tokens::DefaultTokenMutation) for specific fields
     * and descriptions.
     *
     * Note that `behavior` is a nested option of type
     * [TokenMarketBehavior](ep_multi_tokens::TokenMarketBehavior). This can either be set to
     * `None`, a `Currency`, or a royalty.
     *
     * All fields are `Optional`, so only set the specific fields you want to change to `Some`.
     *
     * # Errors
     *
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.mutate_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            mutation: enjinV1032.DefaultTokenMutation,
        })
    ),
    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     *
     * The collection creator/owner can mutate the settings of a token.
     * See [DefaultTokenMutation](ep_multi_tokens::DefaultTokenMutation) for specific fields
     * and descriptions.
     *
     * Note that `behavior` is a nested option of type
     * [TokenMarketBehavior](ep_multi_tokens::TokenMarketBehavior). This can either be set to
     * `None`, a `Currency`, or a royalty.
     *
     * All fields are `Optional`, so only set the specific fields you want to change to `Some`.
     *
     * # Errors
     *
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    enjinV1050: new support_1.CallType(
        'MultiTokens.mutate_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            mutation: enjinV1050.DefaultTokenMutation,
        })
    ),
    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     *
     * # Errors
     *
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    v100: new support_1.CallType(
        'MultiTokens.mutate_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            mutation: v100.DefaultTokenMutation,
        })
    ),
    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     *
     * # Errors
     *
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    v1030: new support_1.CallType(
        'MultiTokens.mutate_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            mutation: v1030.DefaultTokenMutation,
        })
    ),
    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     *
     * The collection creator/owner can mutate the settings of a token.
     * See [DefaultTokenMutation](ep_multi_tokens::DefaultTokenMutation) for specific fields
     * and descriptions.
     *
     * Note that `behavior` is a nested option of type
     * [TokenMarketBehavior](ep_multi_tokens::TokenMarketBehavior). This can either be set to
     * `None`, a `Currency`, or a royalty.
     *
     * All fields are `Optional`, so only set the specific fields you want to change to `Some`.
     *
     * # Errors
     *
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    v1050: new support_1.CallType(
        'MultiTokens.mutate_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            mutation: v1050.DefaultTokenMutation,
        })
    ),
}
exports.mint = {
    name: 'MultiTokens.mint',
    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.mint',
        support_1.sts.struct({
            recipient: matrixEnjinV603.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV603.DefaultMintParams,
        })
    ),
    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     *
     * Tokens are minted using [`MintParams`], and it may only be done by the collection's
     * owner. There are two types of mint operations:
     *
     * **Create**
     *
     * This must be called the first time a token is being created. Any token id can be chosen
     * when creating a token. They do not have to be sequential.
     *
     * You can specify additional parameters that can apply constraints to the token or give it
     * a royalty. Some of these values can be changed later using the
     * [`mutateToken`](Self::mutate_token) extrinsic.
     *
     * **Mint**
     *
     * After a token is created, you can mint additional balance using this variant.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.mint',
        support_1.sts.struct({
            recipient: matrixEnjinV1012.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV1012.DefaultMintParams,
        })
    ),
    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     *
     * Tokens are minted using [`MintParams`], and it may only be done by the collection's
     * owner. There are two types of mint operations:
     *
     * **Create**
     *
     * This must be called the first time a token is being created. Any token id can be chosen
     * when creating a token. They do not have to be sequential.
     *
     * You can specify additional parameters that can apply constraints to the token or give it
     * a royalty. Some of these values can be changed later using the
     * [`mutateToken`](Self::mutate_token) extrinsic.
     *
     * **Mint**
     *
     * After a token is created, you can mint additional balance using this variant.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.mint',
        support_1.sts.struct({
            recipient: matrixEnjinV1022.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV1022.DefaultMintParams,
        })
    ),
    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.mint',
        support_1.sts.struct({
            recipient: matrixV500.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV500.DefaultMintParams,
        })
    ),
    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    matrixV600: new support_1.CallType(
        'MultiTokens.mint',
        support_1.sts.struct({
            recipient: matrixV600.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV600.DefaultMintParams,
        })
    ),
    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.mint',
        support_1.sts.struct({
            recipient: matrixV1010.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV1010.DefaultMintParams,
        })
    ),
    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     *
     * Tokens are minted using [`MintParams`], and it may only be done by the collection's
     * owner. There are two types of mint operations:
     *
     * **Create**
     *
     * This must be called the first time a token is being created. Any token id can be chosen
     * when creating a token. They do not have to be sequential.
     *
     * You can specify additional parameters that can apply constraints to the token or give it
     * a royalty. Some of these values can be changed later using the
     * [`mutateToken`](Self::mutate_token) extrinsic.
     *
     * **Mint**
     *
     * After a token is created, you can mint additional balance using this variant.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    matrixV1020: new support_1.CallType(
        'MultiTokens.mint',
        support_1.sts.struct({
            recipient: matrixV1020.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV1020.DefaultMintParams,
        })
    ),
    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.mint',
        support_1.sts.struct({
            recipient: enjinV100.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: enjinV100.DefaultMintParams,
        })
    ),
    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     *
     * Tokens are minted using [`MintParams`], and it may only be done by the collection's
     * owner. There are two types of mint operations:
     *
     * **Create**
     *
     * This must be called the first time a token is being created. Any token id can be chosen
     * when creating a token. They do not have to be sequential.
     *
     * You can specify additional parameters that can apply constraints to the token or give it
     * a royalty. Some of these values can be changed later using the
     * [`mutateToken`](Self::mutate_token) extrinsic.
     *
     * **Mint**
     *
     * After a token is created, you can mint additional balance using this variant.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.mint',
        support_1.sts.struct({
            recipient: enjinV1032.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: enjinV1032.DefaultMintParams,
        })
    ),
    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     *
     * Tokens are minted using [`MintParams`], and it may only be done by the collection's
     * owner. There are two types of mint operations:
     *
     * **Create**
     *
     * This must be called the first time a token is being created. Any token id can be chosen
     * when creating a token. They do not have to be sequential.
     *
     * You can specify additional parameters that can apply constraints to the token or give it
     * a royalty. Some of these values can be changed later using the
     * [`mutateToken`](Self::mutate_token) extrinsic.
     *
     * **Mint**
     *
     * After a token is created, you can mint additional balance using this variant.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    enjinV1050: new support_1.CallType(
        'MultiTokens.mint',
        support_1.sts.struct({
            recipient: enjinV1050.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: enjinV1050.DefaultMintParams,
        })
    ),
    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    v100: new support_1.CallType(
        'MultiTokens.mint',
        support_1.sts.struct({
            recipient: v100.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: v100.DefaultMintParams,
        })
    ),
    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    v102: new support_1.CallType(
        'MultiTokens.mint',
        support_1.sts.struct({
            recipient: v102.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: v102.DefaultMintParams,
        })
    ),
    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    v1030: new support_1.CallType(
        'MultiTokens.mint',
        support_1.sts.struct({
            recipient: v1030.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: v1030.DefaultMintParams,
        })
    ),
    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     *
     * Tokens are minted using [`MintParams`], and it may only be done by the collection's
     * owner. There are two types of mint operations:
     *
     * **Create**
     *
     * This must be called the first time a token is being created. Any token id can be chosen
     * when creating a token. They do not have to be sequential.
     *
     * You can specify additional parameters that can apply constraints to the token or give it
     * a royalty. Some of these values can be changed later using the
     * [`mutateToken`](Self::mutate_token) extrinsic.
     *
     * **Mint**
     *
     * After a token is created, you can mint additional balance using this variant.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    v1050: new support_1.CallType(
        'MultiTokens.mint',
        support_1.sts.struct({
            recipient: v1050.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: v1050.DefaultMintParams,
        })
    ),
}
exports.burn = {
    name: 'MultiTokens.burn',
    /**
     * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
     * It also updates the total supply of `collection_id`.
     *
     * # Errors
     * - [`Error::CollectionNotFound`] if `collection` does not exist.
     * - [`Error::BalanceLow`] if `owner` account does not has enough amount of any token in
     *   `tokens` of `collection`.
     * - [`Error::DepositUnreserveFailed`] if caller does not have enough reserved balance to
     *   unreserve
     * - [`Error::DestroyForbiddenByAttributeCount`] if removing token from storage but the
     *   attribute count is greater than zero
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.burn',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV603.DefaultBurnParams,
        })
    ),
    /**
     * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
     * It also updates the total supply of `collection_id`.
     *
     * # Errors
     * - [`Error::CollectionNotFound`] if `collection` does not exist.
     * - [`Error::BalanceLow`] if `owner` account does not has enough amount of any token in
     *   `tokens` of `collection`.
     * - [`Error::DepositUnreserveFailed`] if caller does not have enough reserved balance to
     *   unreserve
     * - [`Error::DestroyForbiddenByAttributeCount`] if removing token from storage but the
     *   attribute count is greater than zero
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.burn',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV1012.DefaultBurnParams,
        })
    ),
    /**
     * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
     * It also updates the total supply of `collection_id`.
     *
     * # Errors
     * - [`Error::CollectionNotFound`] if `collection` does not exist.
     * - [`Error::BalanceLow`] if `owner` account does not has enough amount of any token in
     *   `tokens` of `collection`.
     * - [`Error::DepositUnreserveFailed`] if caller does not have enough reserved balance to
     *   unreserve
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.burn',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            params: matrixV500.DefaultBurnParams,
        })
    ),
    /**
     * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
     * It also updates the total supply of `collection_id`.
     *
     * # Errors
     * - [`Error::CollectionNotFound`] if `collection` does not exist.
     * - [`Error::BalanceLow`] if `owner` account does not has enough amount of any token in
     *   `tokens` of `collection`.
     * - [`Error::DepositUnreserveFailed`] if caller does not have enough reserved balance to
     *   unreserve
     * - [`Error::DestroyForbiddenByAttributeCount`] if removing token from storage but the
     *   attribute count is greater than zero
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.burn',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            params: matrixV1010.DefaultBurnParams,
        })
    ),
    /**
     * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
     * It also updates the total supply of `collection_id`.
     *
     * # Errors
     * - [`Error::CollectionNotFound`] if `collection` does not exist.
     * - [`Error::BalanceLow`] if `owner` account does not has enough amount of any token in
     *   `tokens` of `collection`.
     * - [`Error::DepositUnreserveFailed`] if caller does not have enough reserved balance to
     *   unreserve
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.burn',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            params: enjinV100.DefaultBurnParams,
        })
    ),
    /**
     * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
     * It also updates the total supply of `collection_id`.
     *
     * # Errors
     * - [`Error::CollectionNotFound`] if `collection` does not exist.
     * - [`Error::BalanceLow`] if `owner` account does not has enough amount of any token in
     *   `tokens` of `collection`.
     * - [`Error::DepositUnreserveFailed`] if caller does not have enough reserved balance to
     *   unreserve
     * - [`Error::DestroyForbiddenByAttributeCount`] if removing token from storage but the
     *   attribute count is greater than zero
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.burn',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            params: enjinV1032.DefaultBurnParams,
        })
    ),
    /**
     * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
     * It also updates the total supply of `collection_id`.
     *
     * # Errors
     * - [`Error::CollectionNotFound`] if `collection` does not exist.
     * - [`Error::BalanceLow`] if `owner` account does not has enough amount of any token in
     *   `tokens` of `collection`.
     * - [`Error::DepositUnreserveFailed`] if caller does not have enough reserved balance to
     *   unreserve
     */
    v100: new support_1.CallType(
        'MultiTokens.burn',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            params: v100.DefaultBurnParams,
        })
    ),
    /**
     * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
     * It also updates the total supply of `collection_id`.
     *
     * # Errors
     * - [`Error::CollectionNotFound`] if `collection` does not exist.
     * - [`Error::BalanceLow`] if `owner` account does not has enough amount of any token in
     *   `tokens` of `collection`.
     * - [`Error::DepositUnreserveFailed`] if caller does not have enough reserved balance to
     *   unreserve
     * - [`Error::DestroyForbiddenByAttributeCount`] if removing token from storage but the
     *   attribute count is greater than zero
     */
    v1030: new support_1.CallType(
        'MultiTokens.burn',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            params: v1030.DefaultBurnParams,
        })
    ),
}
exports.transfer = {
    name: 'MultiTokens.transfer',
    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.transfer',
        support_1.sts.struct({
            recipient: matrixEnjinV603.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV603.DefaultTransferParams,
        })
    ),
    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     *
     * Can accept [`DefaultTransferParams`](ep_multi_tokens::DefaultTransferParams):
     *
     * - The `Simple` transfer is a regular transfer
     * - The `Operator` transfer is the same as `transfer_from` and requires approval. See
     *   [Operator](crate#operator) in the pallet's documentation for more info.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.transfer',
        support_1.sts.struct({
            recipient: matrixEnjinV1012.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV1012.DefaultTransferParams,
        })
    ),
    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     *
     * Can accept [`DefaultTransferParams`](ep_multi_tokens::DefaultTransferParams):
     *
     * - The `Simple` transfer is a regular transfer
     * - The `Operator` transfer is the same as `transfer_from` and requires approval. See
     *   [Operator](crate#operator) in the pallet's documentation for more info.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.transfer',
        support_1.sts.struct({
            recipient: matrixEnjinV1022.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV1022.DefaultTransferParams,
        })
    ),
    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.transfer',
        support_1.sts.struct({
            recipient: matrixV500.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV500.DefaultTransferParams,
        })
    ),
    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.transfer',
        support_1.sts.struct({
            recipient: matrixV1010.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV1010.DefaultTransferParams,
        })
    ),
    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     *
     * Can accept [`DefaultTransferParams`](ep_multi_tokens::DefaultTransferParams):
     *
     * - The `Simple` transfer is a regular transfer
     * - The `Operator` transfer is the same as `transfer_from` and requires approval. See
     *   [Operator](crate#operator) in the pallet's documentation for more info.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    matrixV1020: new support_1.CallType(
        'MultiTokens.transfer',
        support_1.sts.struct({
            recipient: matrixV1020.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV1020.DefaultTransferParams,
        })
    ),
    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.transfer',
        support_1.sts.struct({
            recipient: enjinV100.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: enjinV100.DefaultTransferParams,
        })
    ),
    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     *
     * Can accept [`DefaultTransferParams`](ep_multi_tokens::DefaultTransferParams):
     *
     * - The `Simple` transfer is a regular transfer
     * - The `Operator` transfer is the same as `transfer_from` and requires approval. See
     *   [Operator](crate#operator) in the pallet's documentation for more info.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.transfer',
        support_1.sts.struct({
            recipient: enjinV1032.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: enjinV1032.DefaultTransferParams,
        })
    ),
    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    v100: new support_1.CallType(
        'MultiTokens.transfer',
        support_1.sts.struct({
            recipient: v100.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: v100.DefaultTransferParams,
        })
    ),
    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    v1030: new support_1.CallType(
        'MultiTokens.transfer',
        support_1.sts.struct({
            recipient: v1030.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: v1030.DefaultTransferParams,
        })
    ),
}
exports.freeze = {
    name: 'MultiTokens.freeze',
    /**
     * Freeze collection, token or account
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.freeze',
        support_1.sts.struct({
            info: matrixEnjinV603.Freeze,
        })
    ),
}
exports.thaw = {
    name: 'MultiTokens.thaw',
    /**
     * Thaw collection, token or account
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.thaw',
        support_1.sts.struct({
            info: matrixEnjinV603.Freeze,
        })
    ),
}
exports.setAttribute = {
    name: 'MultiTokens.set_attribute',
    /**
     * Sets the attribute `key` to `value` for `collection_id`.
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     *
     * # Errors
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.bytes(),
        })
    ),
    /**
     * Sets the attribute `key` to `value` for `collection_id`.
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     * Only callable by the collection's owner.
     *
     * # Errors
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.bytes(),
            depositor: support_1.sts.option(function () {
                return matrixEnjinV1012.MultiAddress
            }),
        })
    ),
    /**
     * Sets the attribute `key` to `value` for `collection_id`.
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     *
     * # Errors
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.bytes(),
        })
    ),
    /**
     * Sets the attribute `key` to `value` for `collection_id`.
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     *
     * # Errors
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.bytes(),
            depositor: support_1.sts.option(function () {
                return matrixV1010.MultiAddress
            }),
        })
    ),
    /**
     * Sets the attribute `key` to `value` for `collection_id`.
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     *
     * # Errors
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.bytes(),
        })
    ),
    /**
     * Sets the attribute `key` to `value` for `collection_id`.
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     * Only callable by the collection's owner.
     *
     * # Errors
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.bytes(),
            depositor: support_1.sts.option(function () {
                return enjinV1032.MultiAddress
            }),
        })
    ),
    /**
     * Sets the attribute `key` to `value` for `collection_id`.
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     *
     * # Errors
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    v100: new support_1.CallType(
        'MultiTokens.set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.bytes(),
        })
    ),
    /**
     * Sets the attribute `key` to `value` for `collection_id`.
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     *
     * # Errors
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    v1030: new support_1.CallType(
        'MultiTokens.set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.bytes(),
            depositor: support_1.sts.option(function () {
                return v1030.MultiAddress
            }),
        })
    ),
}
exports.removeAttribute = {
    name: 'MultiTokens.remove_attribute',
    /**
     * Removes the `key` attribute from the given `collection_id` or `token_id`.
     *
     * # Errors
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `caller` is not the owner of the collection.
     * - `Underflow` if an attribute counter underflows
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.remove_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
        })
    ),
}
exports.removeAllAttributes = {
    name: 'MultiTokens.remove_all_attributes',
    /**
     * Removes all attributes from the given `collection_id` or `token_id`.
     *
     * # Errors
     * - `InvalidAttributeCount` if `attribute_count` doesn't match the number of attributes
     * - [`Error::CollectionNotFound`] if Collection with `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if Token with `token_id` does not exist.
     * - [`Error::NoPermission`] if `origin` account is not the owner of the Collection or
     *   Token
     * - other errors from `remove_attribute`
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.remove_all_attributes',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            attributeCount: support_1.sts.number(),
        })
    ),
}
exports.batchTransfer = {
    name: 'MultiTokens.batch_transfer',
    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account. A single failure will fail all transfers.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.batch_transfer',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return matrixEnjinV603.Recipient
            }),
        })
    ),
    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account. A single failure will fail all transfers.
     *
     * Performs multiple transfers in a single call. Can optionally continue if any calls fail,
     * depending on the `continueOnFailure` parameter.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.batch_transfer',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return matrixEnjinV1012.Recipient
            }),
        })
    ),
    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account. A single failure will fail all transfers.
     *
     * Performs multiple transfers in a single call. Can optionally continue if any calls fail,
     * depending on the `continueOnFailure` parameter.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.batch_transfer',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return matrixEnjinV1022.Recipient
            }),
        })
    ),
    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account. A single failure will fail all transfers.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.batch_transfer',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return matrixV500.Recipient
            }),
        })
    ),
    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account. A single failure will fail all transfers.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.batch_transfer',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return matrixV1010.Recipient
            }),
        })
    ),
    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account. A single failure will fail all transfers.
     *
     * Performs multiple transfers in a single call. Can optionally continue if any calls fail,
     * depending on the `continueOnFailure` parameter.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    matrixV1020: new support_1.CallType(
        'MultiTokens.batch_transfer',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return matrixV1020.Recipient
            }),
        })
    ),
    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account. A single failure will fail all transfers.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.batch_transfer',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return enjinV100.Recipient
            }),
        })
    ),
    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account. A single failure will fail all transfers.
     *
     * Performs multiple transfers in a single call. Can optionally continue if any calls fail,
     * depending on the `continueOnFailure` parameter.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.batch_transfer',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return enjinV1032.Recipient
            }),
        })
    ),
    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account. A single failure will fail all transfers.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    v100: new support_1.CallType(
        'MultiTokens.batch_transfer',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return v100.Recipient
            }),
        })
    ),
    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account. A single failure will fail all transfers.
     *
     * # Errors
     *
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    v1030: new support_1.CallType(
        'MultiTokens.batch_transfer',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return v1030.Recipient
            }),
        })
    ),
}
exports.batchMint = {
    name: 'MultiTokens.batch_mint',
    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     *
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.batch_mint',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return matrixEnjinV603.Type_395
            }),
        })
    ),
    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     *
     * Batch minting is slightly less expensive than performing the same number of mint calls
     * sequentially.
     *
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.batch_mint',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return matrixEnjinV1012.Type_472
            }),
        })
    ),
    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     *
     * Batch minting is slightly less expensive than performing the same number of mint calls
     * sequentially.
     *
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.batch_mint',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return matrixEnjinV1022.Type_489
            }),
        })
    ),
    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     *
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.batch_mint',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return matrixV500.Type_380
            }),
        })
    ),
    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     *
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     */
    matrixV600: new support_1.CallType(
        'MultiTokens.batch_mint',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return matrixV600.Type_380
            }),
        })
    ),
    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     *
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.batch_mint',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return matrixV1010.Type_463
            }),
        })
    ),
    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     *
     * Batch minting is slightly less expensive than performing the same number of mint calls
     * sequentially.
     *
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     */
    matrixV1020: new support_1.CallType(
        'MultiTokens.batch_mint',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return matrixV1020.Type_476
            }),
        })
    ),
    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     *
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.batch_mint',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return enjinV100.Type_523
            }),
        })
    ),
    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     *
     * Batch minting is slightly less expensive than performing the same number of mint calls
     * sequentially.
     *
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.batch_mint',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return enjinV1032.Type_597
            }),
        })
    ),
    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     *
     * Batch minting is slightly less expensive than performing the same number of mint calls
     * sequentially.
     *
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     */
    enjinV1050: new support_1.CallType(
        'MultiTokens.batch_mint',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return enjinV1050.Type_611
            }),
        })
    ),
    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     *
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     */
    v100: new support_1.CallType(
        'MultiTokens.batch_mint',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return v100.Type_469
            }),
        })
    ),
    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     *
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     */
    v102: new support_1.CallType(
        'MultiTokens.batch_mint',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return v102.Type_513
            }),
        })
    ),
    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     *
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     */
    v1030: new support_1.CallType(
        'MultiTokens.batch_mint',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return v1030.Type_597
            }),
        })
    ),
    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     *
     * Batch minting is slightly less expensive than performing the same number of mint calls
     * sequentially.
     *
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     */
    v1050: new support_1.CallType(
        'MultiTokens.batch_mint',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            recipients: support_1.sts.array(function () {
                return v1050.Type_611
            }),
        })
    ),
}
exports.batchSetAttribute = {
    name: 'MultiTokens.batch_set_attribute',
    /**
     * Collection owner sets `attributes` to `collection_id`
     *
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     *
     * # Errors
     *
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.batch_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            attributes: support_1.sts.array(function () {
                return matrixEnjinV603.AttributeKeyValuePair
            }),
        })
    ),
    /**
     * Collection owner sets `attributes` to `collection_id`
     *
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     *
     * # Errors
     *
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.batch_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            attributes: support_1.sts.array(function () {
                return matrixEnjinV1012.AttributeKeyValuePair
            }),
            depositor: support_1.sts.option(function () {
                return matrixEnjinV1012.MultiAddress
            }),
        })
    ),
    /**
     * Collection owner sets `attributes` to `collection_id`
     *
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     *
     * # Errors
     *
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.batch_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            attributes: support_1.sts.array(function () {
                return matrixV500.AttributeKeyValuePair
            }),
        })
    ),
    /**
     * Collection owner sets `attributes` to `collection_id`
     *
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     *
     * # Errors
     *
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.batch_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            attributes: support_1.sts.array(function () {
                return matrixV1010.AttributeKeyValuePair
            }),
            depositor: support_1.sts.option(function () {
                return matrixV1010.MultiAddress
            }),
        })
    ),
    /**
     * Collection owner sets `attributes` to `collection_id`
     *
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     *
     * # Errors
     *
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.batch_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            attributes: support_1.sts.array(function () {
                return enjinV100.AttributeKeyValuePair
            }),
        })
    ),
    /**
     * Collection owner sets `attributes` to `collection_id`
     *
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     *
     * # Errors
     *
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.batch_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            attributes: support_1.sts.array(function () {
                return enjinV1032.AttributeKeyValuePair
            }),
            depositor: support_1.sts.option(function () {
                return enjinV1032.MultiAddress
            }),
        })
    ),
    /**
     * Collection owner sets `attributes` to `collection_id`
     *
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     *
     * # Errors
     *
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    v100: new support_1.CallType(
        'MultiTokens.batch_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            attributes: support_1.sts.array(function () {
                return v100.AttributeKeyValuePair
            }),
        })
    ),
    /**
     * Collection owner sets `attributes` to `collection_id`
     *
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     *
     * # Errors
     *
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    v1030: new support_1.CallType(
        'MultiTokens.batch_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            attributes: support_1.sts.array(function () {
                return v1030.AttributeKeyValuePair
            }),
            depositor: support_1.sts.option(function () {
                return v1030.MultiAddress
            }),
        })
    ),
}
exports.approveCollection = {
    name: 'MultiTokens.approve_collection',
    /**
     * Approve the `operator` to manage all of `origin`'s tokens belonging to `collection_id`.
     * If an `expiration` is provided, the approval will end when it expires.
     *
     * # Errors
     *
     * - [`Error::CannotApproveSelf`] if `origin == operator`
     * - [`Error::AlreadyExpired`] if `expiration` is earlier than now
     * - [`Error::CollectionAccountNotFound`] if the collection account does not exist
     * - [`Error::MaxApprovalsExceeded`] if approval count has exceeded the maximum
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.approve_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            operator: matrixEnjinV603.AccountId32,
            expiration: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        })
    ),
}
exports.unapproveCollection = {
    name: 'MultiTokens.unapprove_collection',
    /**
     * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `collection`
     *
     * # Errors
     *
     * - [`Error::CollectionAccountNotFound`] if the collection account cannot be found
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.unapprove_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            operator: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.approveToken = {
    name: 'MultiTokens.approve_token',
    /**
     * Approve `operator` to transfer up to `amount` of `caller`'s balance for `token_id` of
     * `collection_id`. An `expiration` can be provided. `current_amount` must match the
     * current approved amount.
     *
     * # Errors
     * - [`Error::CannotApproveSelf`] if `origin == operator`
     * - [`Error::CollectionAlreadyApproved`] if `collection_id` is already approved
     * - [`Error::AlreadyExpired`] if `expiration` is earlier than now
     * - [`Error::TokenAccountNotFound`] if the token account does not exist
     * - [`Error::MaxApprovalsExceeded`] if approval count has exceeded the maximum
     * - [`Error::WrongCurrentApprovedAmount`] if `current_amount` does not match the current
     *   approval amount
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.approve_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            operator: matrixEnjinV603.AccountId32,
            amount: support_1.sts.bigint(),
            expiration: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            currentAmount: support_1.sts.bigint(),
        })
    ),
}
exports.unapproveToken = {
    name: 'MultiTokens.unapprove_token',
    /**
     * Unapprove `operator` to transfer `origin`'s `token_id` of `collection_id`
     *
     * # Errors
     *
     * - [`Error::TokenAccountNotFound`] if the token account does not exist
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.unapprove_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            operator: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.claimCollections = {
    name: 'MultiTokens.claim_collections',
    /**
     * Transfers ownership of collections to `destination` if the signature matches.
     *
     * The dispatch origin for this call must be _None_.
     *
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     *
     * > Ethereum Signed Message:
     * > (configured prefix string)(address) with nonce:{nonce}
     *
     * and `address` matches the `destination` account. The nonce must also match.
     *
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     *
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.claim_collections',
        support_1.sts.struct({
            destination: matrixEnjinV603.AccountId32,
            ethereumSignature: matrixEnjinV603.Signature,
            ethereumAddress: matrixEnjinV603.H160,
        })
    ),
    /**
     * Transfers ownership of collections to `destination` if the signature and
     * `collection_count` matches.
     *
     * The dispatch origin for this call must be _None_.
     *
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     *
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     *
     * and `address` matches the `destination` account.
     *
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     *
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address`: The Ethereum address from which the message is signed.
     * - `collection_count`: The number of collections that will be claimed. It can also be
     *   higher than the actual number, but if it's lower it will fail.
     */
    matrixEnjinV1000: new support_1.CallType(
        'MultiTokens.claim_collections',
        support_1.sts.struct({
            destination: matrixEnjinV1000.AccountId32,
            ethereumSignature: matrixEnjinV1000.Signature,
            ethereumAddress: matrixEnjinV1000.H160,
            collectionCount: support_1.sts.number(),
        })
    ),
    /**
     * Transfers ownership of collections to `destination` if the signature matches.
     *
     * The dispatch origin for this call must be _None_.
     *
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     *
     * > Ethereum Signed Message:
     * > (configured prefix string)(address) with nonce:{nonce}
     *
     * and `address` matches the `destination` account. The nonce must also match.
     *
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     *
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     */
    matrixV604: new support_1.CallType(
        'MultiTokens.claim_collections',
        support_1.sts.struct({
            destination: matrixV604.AccountId32,
            ethereumSignature: matrixV604.Signature,
            ethereumAddress: matrixV604.H160,
        })
    ),
    /**
     * Transfers ownership of collections to `destination` if the signature and
     * `collection_count` matches.
     *
     * The dispatch origin for this call must be _None_.
     *
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     *
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     *
     * and `address` matches the `destination` account.
     *
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     *
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address`: The Ethereum address from which the message is signed.
     * - `collection_count`: The number of collections that will be claimed. It can also be
     *   higher than the actual number, but if it's lower it will fail.
     */
    matrixV1000: new support_1.CallType(
        'MultiTokens.claim_collections',
        support_1.sts.struct({
            destination: matrixV1000.AccountId32,
            ethereumSignature: matrixV1000.Signature,
            ethereumAddress: matrixV1000.H160,
            collectionCount: support_1.sts.number(),
        })
    ),
    /**
     * Transfers ownership of collections to `destination` if the signature matches.
     *
     * The dispatch origin for this call must be _None_.
     *
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     *
     * > Ethereum Signed Message:
     * > (configured prefix string)(address) with nonce:{nonce}
     *
     * and `address` matches the `destination` account. The nonce must also match.
     *
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     *
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     */
    enjinV101: new support_1.CallType(
        'MultiTokens.claim_collections',
        support_1.sts.struct({
            destination: enjinV101.AccountId32,
            ethereumSignature: support_1.sts.bytes(),
            ethereumAddress: enjinV101.H160,
        })
    ),
    /**
     * Transfers ownership of collections to `destination` if the signature and
     * `collection_count` matches.
     *
     * The dispatch origin for this call must be _None_.
     *
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     *
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     *
     * and `address` matches the `destination` account.
     *
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     *
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address`: The Ethereum address from which the message is signed.
     * - `collection_count`: The number of collections that will be claimed. It can also be
     *   higher than the actual number, but if it's lower it will fail.
     */
    enjinV1021: new support_1.CallType(
        'MultiTokens.claim_collections',
        support_1.sts.struct({
            destination: enjinV1021.AccountId32,
            ethereumSignature: support_1.sts.bytes(),
            ethereumAddress: enjinV1021.H160,
            collectionCount: support_1.sts.number(),
        })
    ),
    /**
     * Transfers ownership of collections to `destination` if the signature matches.
     *
     * The dispatch origin for this call must be _None_.
     *
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     *
     * > Ethereum Signed Message:
     * > (configured prefix string)(address) with nonce:{nonce}
     *
     * and `address` matches the `destination` account. The nonce must also match.
     *
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     *
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     */
    v106: new support_1.CallType(
        'MultiTokens.claim_collections',
        support_1.sts.struct({
            destination: v106.AccountId32,
            ethereumSignature: support_1.sts.bytes(),
            ethereumAddress: v106.H160,
        })
    ),
    /**
     * Transfers ownership of collections to `destination` if the signature and
     * `collection_count` matches.
     *
     * The dispatch origin for this call must be _None_.
     *
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     *
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     *
     * and `address` matches the `destination` account.
     *
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     *
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address`: The Ethereum address from which the message is signed.
     * - `collection_count`: The number of collections that will be claimed. It can also be
     *   higher than the actual number, but if it's lower it will fail.
     */
    v1021: new support_1.CallType(
        'MultiTokens.claim_collections',
        support_1.sts.struct({
            destination: v1021.AccountId32,
            ethereumSignature: support_1.sts.bytes(),
            ethereumAddress: v1021.H160,
            collectionCount: support_1.sts.number(),
        })
    ),
}
exports.claimTokens = {
    name: 'MultiTokens.claim_tokens',
    /**
     * Transfers balances of tokens to `destination` if the signature matches. Mints tokens if
     * needed.
     *
     * The dispatch origin for this call must be _None_.
     *
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     *
     * > Ethereum Signed Message:
     * > (configured prefix string)(address) with nonce:{nonce}
     *
     * and `address` matches the `destination` account. The nonce must also match.
     *
     * This will always execute with weight of [`Config::MaxClaimableTokensPerCall`]
     * and it will reimburse weight for tokens under that number.
     *
     * ### Parameters:
     * - `destination`: The account that will receive token balances
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.claim_tokens',
        support_1.sts.struct({
            destination: matrixEnjinV603.AccountId32,
            ethereumSignature: matrixEnjinV603.Signature,
            ethereumAddress: matrixEnjinV603.H160,
        })
    ),
}
exports.forceMutateCollection = {
    name: 'MultiTokens.force_mutate_collection',
    /**
     * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
     * root and the `caller` account should be specified.
     *
     * # Errors
     *
     * Same as [`mutate_collection`](Self::mutate_collection)
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.force_mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: matrixEnjinV603.DefaultCollectionMutation,
        })
    ),
    /**
     * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
     * root and the `caller` account should be specified.
     *
     * # Errors
     *
     * Same as [`mutate_collection`](Self::mutate_collection)
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.force_mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: matrixEnjinV1022.DefaultCollectionMutation,
        })
    ),
    /**
     * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
     * root and the `caller` account should be specified.
     *
     * # Errors
     *
     * Same as [`mutate_collection`](Self::mutate_collection)
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.force_mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: matrixV500.DefaultCollectionMutation,
        })
    ),
    /**
     * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
     * root and the `caller` account should be specified.
     *
     * # Errors
     *
     * Same as [`mutate_collection`](Self::mutate_collection)
     */
    matrixV1020: new support_1.CallType(
        'MultiTokens.force_mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: matrixV1020.DefaultCollectionMutation,
        })
    ),
    /**
     * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
     * root and the `caller` account should be specified.
     *
     * # Errors
     *
     * Same as [`mutate_collection`](Self::mutate_collection)
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.force_mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: enjinV100.DefaultCollectionMutation,
        })
    ),
    /**
     * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
     * root and the `caller` account should be specified.
     *
     * # Errors
     *
     * Same as [`mutate_collection`](Self::mutate_collection)
     */
    enjinV1050: new support_1.CallType(
        'MultiTokens.force_mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: enjinV1050.DefaultCollectionMutation,
        })
    ),
    /**
     * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
     * root and the `caller` account should be specified.
     *
     * # Errors
     *
     * Same as [`mutate_collection`](Self::mutate_collection)
     */
    v100: new support_1.CallType(
        'MultiTokens.force_mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: v100.DefaultCollectionMutation,
        })
    ),
    /**
     * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
     * root and the `caller` account should be specified.
     *
     * # Errors
     *
     * Same as [`mutate_collection`](Self::mutate_collection)
     */
    v1050: new support_1.CallType(
        'MultiTokens.force_mutate_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            mutation: v1050.DefaultCollectionMutation,
        })
    ),
}
exports.forceTransfer = {
    name: 'MultiTokens.force_transfer',
    /**
     * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
     * account should be specified.
     *
     * # Errors
     *
     * Same as [`transfer`](Self::transfer)
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.force_transfer',
        support_1.sts.struct({
            source: matrixEnjinV603.MultiAddress,
            destination: matrixEnjinV603.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV603.DefaultTransferParams,
        })
    ),
    /**
     * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
     * account should be specified.
     *
     * # Errors
     *
     * Same as [`transfer`](Self::transfer)
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.force_transfer',
        support_1.sts.struct({
            source: matrixEnjinV1012.MultiAddress,
            destination: matrixEnjinV1012.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV1012.DefaultTransferParams,
        })
    ),
    /**
     * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
     * account should be specified.
     *
     * # Errors
     *
     * Same as [`transfer`](Self::transfer)
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.force_transfer',
        support_1.sts.struct({
            source: matrixEnjinV1022.MultiAddress,
            destination: matrixEnjinV1022.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV1022.DefaultTransferParams,
        })
    ),
    /**
     * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
     * account should be specified.
     *
     * # Errors
     *
     * Same as [`transfer`](Self::transfer)
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.force_transfer',
        support_1.sts.struct({
            source: matrixV500.MultiAddress,
            destination: matrixV500.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV500.DefaultTransferParams,
        })
    ),
    /**
     * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
     * account should be specified.
     *
     * # Errors
     *
     * Same as [`transfer`](Self::transfer)
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.force_transfer',
        support_1.sts.struct({
            source: matrixV1010.MultiAddress,
            destination: matrixV1010.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV1010.DefaultTransferParams,
        })
    ),
    /**
     * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
     * account should be specified.
     *
     * # Errors
     *
     * Same as [`transfer`](Self::transfer)
     */
    matrixV1020: new support_1.CallType(
        'MultiTokens.force_transfer',
        support_1.sts.struct({
            source: matrixV1020.MultiAddress,
            destination: matrixV1020.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV1020.DefaultTransferParams,
        })
    ),
    /**
     * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
     * account should be specified.
     *
     * # Errors
     *
     * Same as [`transfer`](Self::transfer)
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.force_transfer',
        support_1.sts.struct({
            source: enjinV100.MultiAddress,
            destination: enjinV100.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: enjinV100.DefaultTransferParams,
        })
    ),
    /**
     * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
     * account should be specified.
     *
     * # Errors
     *
     * Same as [`transfer`](Self::transfer)
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.force_transfer',
        support_1.sts.struct({
            source: enjinV1032.MultiAddress,
            destination: enjinV1032.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: enjinV1032.DefaultTransferParams,
        })
    ),
    /**
     * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
     * account should be specified.
     *
     * # Errors
     *
     * Same as [`transfer`](Self::transfer)
     */
    v100: new support_1.CallType(
        'MultiTokens.force_transfer',
        support_1.sts.struct({
            source: v100.MultiAddress,
            destination: v100.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: v100.DefaultTransferParams,
        })
    ),
    /**
     * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
     * account should be specified.
     *
     * # Errors
     *
     * Same as [`transfer`](Self::transfer)
     */
    v1030: new support_1.CallType(
        'MultiTokens.force_transfer',
        support_1.sts.struct({
            source: v1030.MultiAddress,
            destination: v1030.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: v1030.DefaultTransferParams,
        })
    ),
}
exports.forceSetCollection = {
    name: 'MultiTokens.force_set_collection',
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.force_set_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return matrixEnjinV603.Collection
            }),
        })
    ),
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.force_set_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return matrixEnjinV1012.Collection
            }),
        })
    ),
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.force_set_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return matrixEnjinV1022.Collection
            }),
        })
    ),
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.force_set_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return matrixV500.Collection
            }),
        })
    ),
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.force_set_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return matrixV1010.Collection
            }),
        })
    ),
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    matrixV1020: new support_1.CallType(
        'MultiTokens.force_set_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return matrixV1020.Collection
            }),
        })
    ),
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.force_set_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return enjinV100.Collection
            }),
        })
    ),
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.force_set_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return enjinV1032.Collection
            }),
        })
    ),
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    enjinV1050: new support_1.CallType(
        'MultiTokens.force_set_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return enjinV1050.Collection
            }),
        })
    ),
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    v100: new support_1.CallType(
        'MultiTokens.force_set_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return v100.Collection
            }),
        })
    ),
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    v1030: new support_1.CallType(
        'MultiTokens.force_set_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return v1030.Collection
            }),
        })
    ),
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    v1050: new support_1.CallType(
        'MultiTokens.force_set_collection',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return v1050.Collection
            }),
        })
    ),
}
exports.forceSetToken = {
    name: 'MultiTokens.force_set_token',
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.force_set_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return matrixEnjinV603.Token
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.force_set_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return matrixEnjinV1012.Token
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.force_set_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return matrixEnjinV1022.Token
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.force_set_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return matrixV500.Token
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixV600: new support_1.CallType(
        'MultiTokens.force_set_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return matrixV600.Token
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.force_set_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return matrixV1010.Token
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixV1020: new support_1.CallType(
        'MultiTokens.force_set_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return matrixV1020.Token
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.force_set_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return enjinV100.Token
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.force_set_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return enjinV1032.Token
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    enjinV1050: new support_1.CallType(
        'MultiTokens.force_set_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return enjinV1050.Token
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    v100: new support_1.CallType(
        'MultiTokens.force_set_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return v100.Token
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    v102: new support_1.CallType(
        'MultiTokens.force_set_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return v102.Token
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    v1030: new support_1.CallType(
        'MultiTokens.force_set_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return v1030.Token
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    v1050: new support_1.CallType(
        'MultiTokens.force_set_token',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return v1050.Token
            }),
        })
    ),
}
exports.forceSetAttribute = {
    name: 'MultiTokens.force_set_attribute',
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.force_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.option(function () {
                return matrixEnjinV603.Attribute
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.force_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.option(function () {
                return matrixEnjinV1012.Attribute
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.force_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.option(function () {
                return matrixV500.Attribute
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.force_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.option(function () {
                return matrixV1010.Attribute
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.force_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.option(function () {
                return enjinV100.Attribute
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.force_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.option(function () {
                return enjinV1032.Attribute
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    v100: new support_1.CallType(
        'MultiTokens.force_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.option(function () {
                return v100.Attribute
            }),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    v1030: new support_1.CallType(
        'MultiTokens.force_set_attribute',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
            key: support_1.sts.bytes(),
            value: support_1.sts.option(function () {
                return v1030.Attribute
            }),
        })
    ),
}
exports.forceSetCollectionAccount = {
    name: 'MultiTokens.force_set_collection_account',
    /**
     * Set the CollectionAccounts storage to the given `value`, origin must be root
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.force_set_collection_account',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            accountId: matrixEnjinV603.MultiAddress,
            value: support_1.sts.option(function () {
                return matrixEnjinV603.CollectionAccount
            }),
        })
    ),
}
exports.forceSetTokenAccount = {
    name: 'MultiTokens.force_set_token_account',
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.force_set_token_account',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: matrixEnjinV603.MultiAddress,
            value: support_1.sts.option(function () {
                return matrixEnjinV603.TokenAccount
            }),
        })
    ),
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.force_set_token_account',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: matrixEnjinV1012.MultiAddress,
            value: support_1.sts.option(function () {
                return matrixEnjinV1012.TokenAccount
            }),
        })
    ),
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.force_set_token_account',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: matrixEnjinV1022.MultiAddress,
            value: support_1.sts.option(function () {
                return matrixEnjinV1022.TokenAccount
            }),
        })
    ),
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.force_set_token_account',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: matrixV500.MultiAddress,
            value: support_1.sts.option(function () {
                return matrixV500.TokenAccount
            }),
        })
    ),
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.force_set_token_account',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: matrixV1010.MultiAddress,
            value: support_1.sts.option(function () {
                return matrixV1010.TokenAccount
            }),
        })
    ),
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    matrixV1020: new support_1.CallType(
        'MultiTokens.force_set_token_account',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: matrixV1020.MultiAddress,
            value: support_1.sts.option(function () {
                return matrixV1020.TokenAccount
            }),
        })
    ),
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.force_set_token_account',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: enjinV100.MultiAddress,
            value: support_1.sts.option(function () {
                return enjinV100.TokenAccount
            }),
        })
    ),
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.force_set_token_account',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: enjinV1032.MultiAddress,
            value: support_1.sts.option(function () {
                return enjinV1032.TokenAccount
            }),
        })
    ),
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    enjinV1050: new support_1.CallType(
        'MultiTokens.force_set_token_account',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: enjinV1050.MultiAddress,
            value: support_1.sts.option(function () {
                return enjinV1050.TokenAccount
            }),
        })
    ),
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    v100: new support_1.CallType(
        'MultiTokens.force_set_token_account',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: v100.MultiAddress,
            value: support_1.sts.option(function () {
                return v100.TokenAccount
            }),
        })
    ),
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    v1030: new support_1.CallType(
        'MultiTokens.force_set_token_account',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: v1030.MultiAddress,
            value: support_1.sts.option(function () {
                return v1030.TokenAccount
            }),
        })
    ),
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    v1050: new support_1.CallType(
        'MultiTokens.force_set_token_account',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            accountId: v1050.MultiAddress,
            value: support_1.sts.option(function () {
                return v1050.TokenAccount
            }),
        })
    ),
}
exports.forceCreateCollection = {
    name: 'MultiTokens.force_create_collection',
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.force_create_collection',
        support_1.sts.struct({
            owner: matrixEnjinV603.AccountId32,
            collectionId: support_1.sts.bigint(),
            descriptor: matrixEnjinV603.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.force_create_collection',
        support_1.sts.struct({
            owner: matrixEnjinV1012.AccountId32,
            collectionId: support_1.sts.bigint(),
            descriptor: matrixEnjinV1012.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.force_create_collection',
        support_1.sts.struct({
            owner: matrixEnjinV1022.AccountId32,
            collectionId: support_1.sts.bigint(),
            descriptor: matrixEnjinV1022.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    matrixV500: new support_1.CallType(
        'MultiTokens.force_create_collection',
        support_1.sts.struct({
            owner: matrixV500.AccountId32,
            collectionId: support_1.sts.bigint(),
            descriptor: matrixV500.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.force_create_collection',
        support_1.sts.struct({
            owner: matrixV1010.AccountId32,
            collectionId: support_1.sts.bigint(),
            descriptor: matrixV1010.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    matrixV1020: new support_1.CallType(
        'MultiTokens.force_create_collection',
        support_1.sts.struct({
            owner: matrixV1020.AccountId32,
            collectionId: support_1.sts.bigint(),
            descriptor: matrixV1020.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    enjinV100: new support_1.CallType(
        'MultiTokens.force_create_collection',
        support_1.sts.struct({
            owner: enjinV100.AccountId32,
            collectionId: support_1.sts.bigint(),
            descriptor: enjinV100.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.force_create_collection',
        support_1.sts.struct({
            owner: enjinV1032.AccountId32,
            collectionId: support_1.sts.bigint(),
            descriptor: enjinV1032.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    enjinV1050: new support_1.CallType(
        'MultiTokens.force_create_collection',
        support_1.sts.struct({
            owner: enjinV1050.AccountId32,
            collectionId: support_1.sts.bigint(),
            descriptor: enjinV1050.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    v100: new support_1.CallType(
        'MultiTokens.force_create_collection',
        support_1.sts.struct({
            owner: v100.AccountId32,
            collectionId: support_1.sts.bigint(),
            descriptor: v100.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    v1030: new support_1.CallType(
        'MultiTokens.force_create_collection',
        support_1.sts.struct({
            owner: v1030.AccountId32,
            collectionId: support_1.sts.bigint(),
            descriptor: v1030.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    v1050: new support_1.CallType(
        'MultiTokens.force_create_collection',
        support_1.sts.struct({
            owner: v1050.AccountId32,
            collectionId: support_1.sts.bigint(),
            descriptor: v1050.DefaultCollectionDescriptor,
        })
    ),
}
exports.forceMint = {
    name: 'MultiTokens.force_mint',
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::ForceOrigin`].
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: matrixEnjinV603.MultiAddress,
            recipient: matrixEnjinV603.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV603.DefaultMintParams,
            depositBacker: support_1.sts.option(function () {
                return matrixEnjinV603.MultiAddress
            }),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    matrixEnjinV1003: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: support_1.sts.option(function () {
                return matrixEnjinV1003.MultiAddress
            }),
            recipient: matrixEnjinV1003.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV1003.FlexibleMintParams,
            depositor: support_1.sts.option(function () {
                return matrixEnjinV1003.MultiAddress
            }),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: support_1.sts.option(function () {
                return matrixEnjinV1012.MultiAddress
            }),
            recipient: matrixEnjinV1012.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV1012.FlexibleMintParams,
            depositor: support_1.sts.option(function () {
                return matrixEnjinV1012.MultiAddress
            }),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: support_1.sts.option(function () {
                return matrixEnjinV1022.MultiAddress
            }),
            recipient: matrixEnjinV1022.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV1022.FlexibleMintParams,
            depositor: support_1.sts.option(function () {
                return matrixEnjinV1022.MultiAddress
            }),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::ForceOrigin`].
     */
    matrixV604: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: matrixV604.MultiAddress,
            recipient: matrixV604.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV604.DefaultMintParams,
            depositBacker: support_1.sts.option(function () {
                return matrixV604.MultiAddress
            }),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    matrixV1003: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: support_1.sts.option(function () {
                return matrixV1003.MultiAddress
            }),
            recipient: matrixV1003.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV1003.FlexibleMintParams,
            depositor: support_1.sts.option(function () {
                return matrixV1003.MultiAddress
            }),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: support_1.sts.option(function () {
                return matrixV1010.MultiAddress
            }),
            recipient: matrixV1010.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV1010.FlexibleMintParams,
            depositor: support_1.sts.option(function () {
                return matrixV1010.MultiAddress
            }),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    matrixV1020: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: support_1.sts.option(function () {
                return matrixV1020.MultiAddress
            }),
            recipient: matrixV1020.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV1020.FlexibleMintParams,
            depositor: support_1.sts.option(function () {
                return matrixV1020.MultiAddress
            }),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::ForceOrigin`].
     */
    enjinV101: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: enjinV101.MultiAddress,
            recipient: enjinV101.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: enjinV101.DefaultMintParams,
            depositBacker: support_1.sts.option(function () {
                return enjinV101.MultiAddress
            }),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    enjinV1023: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: support_1.sts.option(function () {
                return enjinV1023.MultiAddress
            }),
            recipient: enjinV1023.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: enjinV1023.FlexibleMintParams,
            depositor: support_1.sts.option(function () {
                return enjinV1023.MultiAddress
            }),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: support_1.sts.option(function () {
                return enjinV1032.MultiAddress
            }),
            recipient: enjinV1032.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: enjinV1032.FlexibleMintParams,
            depositor: support_1.sts.option(function () {
                return enjinV1032.MultiAddress
            }),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    enjinV1050: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: support_1.sts.option(function () {
                return enjinV1050.MultiAddress
            }),
            recipient: enjinV1050.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: enjinV1050.FlexibleMintParams,
            depositor: support_1.sts.option(function () {
                return enjinV1050.MultiAddress
            }),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::ForceOrigin`].
     */
    v105: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: v105.MultiAddress,
            recipient: v105.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: v105.DefaultMintParams,
            depositBacker: support_1.sts.option(function () {
                return v105.MultiAddress
            }),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    v1023: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: support_1.sts.option(function () {
                return v1023.MultiAddress
            }),
            recipient: v1023.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: v1023.FlexibleMintParams,
            depositor: support_1.sts.option(function () {
                return v1023.MultiAddress
            }),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    v1030: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: support_1.sts.option(function () {
                return v1030.MultiAddress
            }),
            recipient: v1030.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: v1030.FlexibleMintParams,
            depositor: support_1.sts.option(function () {
                return v1030.MultiAddress
            }),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    v1050: new support_1.CallType(
        'MultiTokens.force_mint',
        support_1.sts.struct({
            caller: support_1.sts.option(function () {
                return v1050.MultiAddress
            }),
            recipient: v1050.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: v1050.FlexibleMintParams,
            depositor: support_1.sts.option(function () {
                return v1050.MultiAddress
            }),
        })
    ),
}
exports.forceBurn = {
    name: 'MultiTokens.force_burn',
    /**
     * Same as [`burn`](Self::burn), but it is only callable by
     * [`Config::ForceOrigin`]. Executes the burn by `caller`.
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.force_burn',
        support_1.sts.struct({
            caller: matrixEnjinV603.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV603.DefaultBurnParams,
        })
    ),
    /**
     * Same as [`burn`](Self::burn), but it is only callable by
     * [`Config::ForceOrigin`]. Executes the burn by `caller`.
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.force_burn',
        support_1.sts.struct({
            caller: matrixEnjinV1012.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixEnjinV1012.DefaultBurnParams,
        })
    ),
    /**
     * Same as [`burn`](Self::burn), but it is only callable by
     * [`Config::ForceOrigin`]. Executes the burn by `caller`.
     */
    matrixV604: new support_1.CallType(
        'MultiTokens.force_burn',
        support_1.sts.struct({
            caller: matrixV604.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV604.DefaultBurnParams,
        })
    ),
    /**
     * Same as [`burn`](Self::burn), but it is only callable by
     * [`Config::ForceOrigin`]. Executes the burn by `caller`.
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.force_burn',
        support_1.sts.struct({
            caller: matrixV1010.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: matrixV1010.DefaultBurnParams,
        })
    ),
    /**
     * Same as [`burn`](Self::burn), but it is only callable by
     * [`Config::ForceOrigin`]. Executes the burn by `caller`.
     */
    enjinV101: new support_1.CallType(
        'MultiTokens.force_burn',
        support_1.sts.struct({
            caller: enjinV101.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: enjinV101.DefaultBurnParams,
        })
    ),
    /**
     * Same as [`burn`](Self::burn), but it is only callable by
     * [`Config::ForceOrigin`]. Executes the burn by `caller`.
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.force_burn',
        support_1.sts.struct({
            caller: enjinV1032.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: enjinV1032.DefaultBurnParams,
        })
    ),
    /**
     * Same as [`burn`](Self::burn), but it is only callable by
     * [`Config::ForceOrigin`]. Executes the burn by `caller`.
     */
    v105: new support_1.CallType(
        'MultiTokens.force_burn',
        support_1.sts.struct({
            caller: v105.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: v105.DefaultBurnParams,
        })
    ),
    /**
     * Same as [`burn`](Self::burn), but it is only callable by
     * [`Config::ForceOrigin`]. Executes the burn by `caller`.
     */
    v1030: new support_1.CallType(
        'MultiTokens.force_burn',
        support_1.sts.struct({
            caller: v1030.MultiAddress,
            collectionId: support_1.sts.bigint(),
            params: v1030.DefaultBurnParams,
        })
    ),
}
exports.forceApproveCollection = {
    name: 'MultiTokens.force_approve_collection',
    /**
     * Same as [`approve_collection`](Self::approve_collection), but it is callable by
     * [`Config::ForceOrigin`].
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.force_approve_collection',
        support_1.sts.struct({
            caller: matrixEnjinV603.MultiAddress,
            collectionId: support_1.sts.bigint(),
            operator: matrixEnjinV603.AccountId32,
            expiration: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
        })
    ),
}
exports.forceFreeze = {
    name: 'MultiTokens.force_freeze',
    /**
     * Same as [`freeze`](Self::freeze), but it is callable by [`Config::ForceOrigin`]
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.force_freeze',
        support_1.sts.struct({
            info: matrixEnjinV603.Freeze,
        })
    ),
}
exports.forceSetNextCollectionId = {
    name: 'MultiTokens.force_set_next_collection_id',
    /**
     * Sets [`NextCollectionId`] to `value`. Only callable by [`Config::ForceOrigin`].
     */
    matrixEnjinV603: new support_1.CallType(
        'MultiTokens.force_set_next_collection_id',
        support_1.sts.struct({
            value: support_1.sts.bigint(),
        })
    ),
}
exports.finishClaimTokens = {
    name: 'MultiTokens.finish_claim_tokens',
    /**
     * Sends an event that signifies claiming the tokens was completed. Only callable by
     * [`Config::EthereumMigrationOrigin`].
     */
    matrixEnjinV1000: new support_1.CallType(
        'MultiTokens.finish_claim_tokens',
        support_1.sts.struct({
            destination: matrixEnjinV1000.AccountId32,
            ethereumAddress: matrixEnjinV1000.H160,
        })
    ),
}
exports.forceSetEthereumAccount = {
    name: 'MultiTokens.force_set_ethereum_account',
    /**
     * Sets [`ClaimableCollectionIds`] to `value`. Only callable by [`Config::ForceOrigin`].
     */
    matrixEnjinV1000: new support_1.CallType(
        'MultiTokens.force_set_ethereum_account',
        support_1.sts.struct({
            address: matrixEnjinV1000.H160,
            value: support_1.sts.option(function () {
                return support_1.sts.array(function () {
                    return support_1.sts.bigint()
                })
            }),
        })
    ),
}
exports.forceSetEthereumCollectionId = {
    name: 'MultiTokens.force_set_ethereum_collection_id',
    /**
     * Sets [`NativeCollectionIds`] to `native_collection_id`. Only callable by
     * [`Config::ForceOrigin`].
     */
    matrixEnjinV1000: new support_1.CallType(
        'MultiTokens.force_set_ethereum_collection_id',
        support_1.sts.struct({
            ethereumCollectionId: support_1.sts.bigint(),
            nativeCollectionId: support_1.sts.option(function () {
                return support_1.sts.bigint()
            }),
        })
    ),
}
exports.forceSetUnmintableTokenIds = {
    name: 'MultiTokens.force_set_unmintable_token_ids',
    /**
     * Sets [`UnmintableTokenIds`] storage. Only callable by
     * [`Config::ForceOrigin`].
     */
    matrixEnjinV1000: new support_1.CallType(
        'MultiTokens.force_set_unmintable_token_ids',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            baseTokenId: support_1.sts.bigint(),
            tokenIndex: support_1.sts.bigint(),
        })
    ),
    /**
     * Sets [`UnmintableTokenIds`] to `value`. Only callable by [`Config::ForceOrigin`].
     */
    enjinV120: new support_1.CallType(
        'MultiTokens.force_set_unmintable_token_ids',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return enjinV120.RangeInclusive
            }),
        })
    ),
    /**
     * Sets [`UnmintableTokenIds`] storage. Only callable by
     * [`Config::ForceOrigin`].
     */
    enjinV1021: new support_1.CallType(
        'MultiTokens.force_set_unmintable_token_ids',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            baseTokenId: support_1.sts.bigint(),
            tokenIndex: support_1.sts.bigint(),
        })
    ),
    /**
     * Sets [`UnmintableTokenIds`] to `value`. Only callable by [`Config::ForceOrigin`].
     */
    v120: new support_1.CallType(
        'MultiTokens.force_set_unmintable_token_ids',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            value: support_1.sts.option(function () {
                return v120.RangeInclusive
            }),
        })
    ),
    /**
     * Sets [`UnmintableTokenIds`] storage. Only callable by
     * [`Config::ForceOrigin`].
     */
    v1021: new support_1.CallType(
        'MultiTokens.force_set_unmintable_token_ids',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            baseTokenId: support_1.sts.bigint(),
            tokenIndex: support_1.sts.bigint(),
        })
    ),
}
exports.forceCreateEthereumCollection = {
    name: 'MultiTokens.force_create_ethereum_collection',
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     *
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    matrixEnjinV1000: new support_1.CallType(
        'MultiTokens.force_create_ethereum_collection',
        support_1.sts.struct({
            owner: matrixEnjinV1000.AccountId32,
            claimer: matrixEnjinV1000.H160,
            ethereumCollectionId: support_1.sts.bigint(),
            descriptor: matrixEnjinV1000.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     *
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.force_create_ethereum_collection',
        support_1.sts.struct({
            owner: matrixEnjinV1012.AccountId32,
            claimer: matrixEnjinV1012.H160,
            ethereumCollectionId: support_1.sts.bigint(),
            descriptor: matrixEnjinV1012.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     *
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.force_create_ethereum_collection',
        support_1.sts.struct({
            owner: matrixEnjinV1022.AccountId32,
            claimer: matrixEnjinV1022.H160,
            ethereumCollectionId: support_1.sts.bigint(),
            descriptor: matrixEnjinV1022.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     *
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    matrixV1000: new support_1.CallType(
        'MultiTokens.force_create_ethereum_collection',
        support_1.sts.struct({
            owner: matrixV1000.AccountId32,
            claimer: matrixV1000.H160,
            ethereumCollectionId: support_1.sts.bigint(),
            descriptor: matrixV1000.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     *
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    matrixV1010: new support_1.CallType(
        'MultiTokens.force_create_ethereum_collection',
        support_1.sts.struct({
            owner: matrixV1010.AccountId32,
            claimer: matrixV1010.H160,
            ethereumCollectionId: support_1.sts.bigint(),
            descriptor: matrixV1010.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     *
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    matrixV1020: new support_1.CallType(
        'MultiTokens.force_create_ethereum_collection',
        support_1.sts.struct({
            owner: matrixV1020.AccountId32,
            claimer: matrixV1020.H160,
            ethereumCollectionId: support_1.sts.bigint(),
            descriptor: matrixV1020.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     * It differes from `force_create_collection` since it writes to NativeCollectionId and
     * UnmintableTokenIds
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    enjinV120: new support_1.CallType(
        'MultiTokens.force_create_ethereum_collection',
        support_1.sts.struct({
            owner: enjinV120.AccountId32,
            nativeCollectionId: support_1.sts.bigint(),
            ethereumCollectionId: support_1.sts.bigint(),
            tokenRange: enjinV120.RangeInclusive,
            descriptor: enjinV120.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     *
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    enjinV1021: new support_1.CallType(
        'MultiTokens.force_create_ethereum_collection',
        support_1.sts.struct({
            owner: enjinV1021.AccountId32,
            claimer: enjinV1021.H160,
            ethereumCollectionId: support_1.sts.bigint(),
            descriptor: enjinV1021.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     *
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    enjinV1032: new support_1.CallType(
        'MultiTokens.force_create_ethereum_collection',
        support_1.sts.struct({
            owner: enjinV1032.AccountId32,
            claimer: enjinV1032.H160,
            ethereumCollectionId: support_1.sts.bigint(),
            descriptor: enjinV1032.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     *
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    enjinV1050: new support_1.CallType(
        'MultiTokens.force_create_ethereum_collection',
        support_1.sts.struct({
            owner: enjinV1050.AccountId32,
            claimer: enjinV1050.H160,
            ethereumCollectionId: support_1.sts.bigint(),
            descriptor: enjinV1050.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     * It differes from `force_create_collection` since it writes to NativeCollectionId and
     * UnmintableTokenIds
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    v120: new support_1.CallType(
        'MultiTokens.force_create_ethereum_collection',
        support_1.sts.struct({
            owner: v120.AccountId32,
            nativeCollectionId: support_1.sts.bigint(),
            ethereumCollectionId: support_1.sts.bigint(),
            tokenRange: v120.RangeInclusive,
            descriptor: v120.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     *
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    v1021: new support_1.CallType(
        'MultiTokens.force_create_ethereum_collection',
        support_1.sts.struct({
            owner: v1021.AccountId32,
            claimer: v1021.H160,
            ethereumCollectionId: support_1.sts.bigint(),
            descriptor: v1021.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     *
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    v1030: new support_1.CallType(
        'MultiTokens.force_create_ethereum_collection',
        support_1.sts.struct({
            owner: v1030.AccountId32,
            claimer: v1030.H160,
            ethereumCollectionId: support_1.sts.bigint(),
            descriptor: v1030.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     *
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     *
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    v1050: new support_1.CallType(
        'MultiTokens.force_create_ethereum_collection',
        support_1.sts.struct({
            owner: v1050.AccountId32,
            claimer: v1050.H160,
            ethereumCollectionId: support_1.sts.bigint(),
            descriptor: v1050.DefaultCollectionDescriptor,
        })
    ),
}
exports.forceSetEthereumUnmintableTokenIds = {
    name: 'MultiTokens.force_set_ethereum_unmintable_token_ids',
    /**
     * Sets [`UnmintableTokenIds`] using ethereum_collection_id, the function will fail if the
     * ethereum_collection_id is invalid
     */
    matrixEnjinV1000: new support_1.CallType(
        'MultiTokens.force_set_ethereum_unmintable_token_ids',
        support_1.sts.struct({
            ethereumCollectionId: support_1.sts.bigint(),
            baseTokenId: support_1.sts.bigint(),
            tokenIndex: support_1.sts.bigint(),
        })
    ),
}
exports.acceptCollectionTransfer = {
    name: 'MultiTokens.accept_collection_transfer',
    /**
     * See [`Pallet::accept_collection_transfer`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'MultiTokens.accept_collection_transfer',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
        })
    ),
}
exports.cancelCollectionTransfer = {
    name: 'MultiTokens.cancel_collection_transfer',
    /**
     * See [`Pallet::cancel_collection_transfer`].
     */
    matrixEnjinV1004: new support_1.CallType(
        'MultiTokens.cancel_collection_transfer',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
        })
    ),
}
exports.updateAccountDeposit = {
    name: 'MultiTokens.update_account_deposit',
    /**
     * Can add or remove deposit for the number of accounts the token can accommodate. It is
     * permissionless if increased. Only the collection owner can decrease.
     * The locked amount is stored in the collection owner's account.
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.update_account_deposit',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            deltaAccountCount: support_1.sts.number(),
        })
    ),
}
exports.infuse = {
    name: 'MultiTokens.infuse',
    /**
     * Infuses ENJ into the token. The actual amount reserved is amount * supply
     * It is permissionless if the anyone_can_infuse is true
     *
     * See [Infusion](crate#infusions)
     *
     * The function calculates the total amount to be reserved by multiplying the infusion
     * amount by the token's supply.
     *
     * Note: If the caller is not the collection owner, the infusion amount is transferred from
     * the caller to the owner. The amount is then reserved in the owner's account.
     */
    matrixEnjinV1012: new support_1.CallType(
        'MultiTokens.infuse',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.createTokenGroup = {
    name: 'MultiTokens.create_token_group',
    /**
     * Creates a [`TokenGroup`] belonging to `collection_id`
     *
     * # Errors
     *
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.create_token_group',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            depositor: support_1.sts.option(function () {
                return matrixEnjinV1022.MultiAddress
            }),
        })
    ),
}
exports.destroyTokenGroup = {
    name: 'MultiTokens.destroy_token_group',
    /**
     * Destroys a [`TokenGroup`]
     *
     * # Errors
     *
     * - [`Error::TokenGroupNotFound`] if `token_group_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of the token group's collection.
     * - [`Error::DestroyForbiddenByRemainingTokens`] if there are still tokens in the group
     * - [`Error::DestroyForbiddenByAttributeCount`] if there are still attributes in the group
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.destroy_token_group',
        support_1.sts.struct({
            tokenGroupId: support_1.sts.bigint(),
        })
    ),
}
exports.addTokenToGroup = {
    name: 'MultiTokens.add_token_to_group',
    /**
     * Adds the token to a token group.
     *
     * # Errors
     *
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::TokenGroupNotFound`] if `token_group_id` does not exist.
     * - [`Error::IncompatibleTokenGroup`] if the token and the group are not in the same
     *   collection.
     * - [`Error::NoPermission`] if `origin` is not the owner of the collection.
     * - [`Error::MaxTokenGroupsExceeded`] if the token already belongs to its maximum number
     *   of groups.
     * - [`Error::TokenAlreadyInGroup`] if the token already belongs to the group.
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.add_token_to_group',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            tokenGroupId: support_1.sts.bigint(),
        })
    ),
}
exports.removeTokenFromGroup = {
    name: 'MultiTokens.remove_token_from_group',
    /**
     * Removes the token from a token group.
     *
     * # Errors
     *
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::TokenGroupNotFound`] if `token_group_id` does not exist or the token is not
     *   part of it.
     * - [`Error::NoPermission`] if `origin` is not the owner of the collection.
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.remove_token_from_group',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            tokenGroupId: support_1.sts.bigint(),
        })
    ),
}
exports.setTokenGroups = {
    name: 'MultiTokens.set_token_groups',
    /**
     * Set the list of [`TokenGroup`] that a token is part of
     *
     * # Errors
     *
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::TokenGroupNotFound`] if any token group does not exist.
     * - [`Error::IncompatibleTokenGroup`] if any group is from a different collection than the
     *   token.
     * - [`Error::NoPermission`] if `origin` is not the owner of the collection.
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.set_token_groups',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenId: support_1.sts.bigint(),
            tokenGroups: support_1.sts.array(function () {
                return support_1.sts.bigint()
            }),
        })
    ),
}
exports.setTokenGroupAttribute = {
    name: 'MultiTokens.set_token_group_attribute',
    /**
     * Sets the attribute `key` to `value` for `token_group_id`.
     * Only callable by the collection's owner.
     *
     * # Errors
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::TokenGroupNotFound`] if `token_group_id` does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.set_token_group_attribute',
        support_1.sts.struct({
            tokenGroupId: support_1.sts.bigint(),
            key: support_1.sts.bytes(),
            value: support_1.sts.bytes(),
            depositor: support_1.sts.option(function () {
                return matrixEnjinV1022.MultiAddress
            }),
        })
    ),
}
exports.removeTokenGroupAttribute = {
    name: 'MultiTokens.remove_token_group_attribute',
    /**
     * Removes the `key` attribute from the given `token_group_id`.
     * Only callable by the collection owner.
     *
     * # Errors
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::TokenGroupNotFound`] if `token_group_id` does not exist.
     * - [`Error::NoPermission`] if `caller` is not the owner of the collection.
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.remove_token_group_attribute',
        support_1.sts.struct({
            tokenGroupId: support_1.sts.bigint(),
            key: support_1.sts.bytes(),
        })
    ),
}
exports.recalculateCollectionDeposit = {
    name: 'MultiTokens.recalculate_collection_deposit',
    /**
     * Recalculates the deposit for a collection by processing tokens and attributes in
     * batches. This function can be called multiple times to process all items if they
     * exceed the batch limits.
     *
     * # Arguments
     * * `origin` - The origin of the call
     * * `collection_id` - The ID of the collection to recalculate deposits for
     * * `token_count` - The number of tokens to process
     * * `attribute_count` - The number of attributes to process
     *
     * # Returns
     * * `DispatchResult` - Success if the recalculation was performed without errors
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.recalculate_collection_deposit',
        support_1.sts.struct({
            collectionId: support_1.sts.bigint(),
            tokenCount: support_1.sts.number(),
            attributeCount: support_1.sts.number(),
        })
    ),
}
exports.upgradeTokenAccounts = {
    name: 'MultiTokens.upgrade_token_accounts',
    /**
     * Upgrade a collection of listings in storage.
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.upgrade_token_accounts',
        support_1.sts.struct({
            tokenAccountKeys: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.bigint(), support_1.sts.bigint(), matrixEnjinV1022.AccountId32]
                })
            }),
        })
    ),
}
exports.upgradeTokens = {
    name: 'MultiTokens.upgrade_tokens',
    /**
     * Upgrade a list of tokens in storage
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.upgrade_tokens',
        support_1.sts.struct({
            tokenKeys: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [support_1.sts.bigint(), support_1.sts.bigint()]
                })
            }),
        })
    ),
}
exports.upgradeCollections = {
    name: 'MultiTokens.upgrade_collections',
    /**
     * Upgrade a list of collections in storage
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.upgrade_collections',
        support_1.sts.struct({
            collectionKeys: support_1.sts.array(function () {
                return support_1.sts.bigint()
            }),
        })
    ),
}
exports.updateCollectionAccountApprovals = {
    name: 'MultiTokens.update_collection_account_approvals',
    /**
     * Upgrades approvals expiration block numbers on a list of collections in storage
     */
    matrixEnjinV1022: new support_1.CallType(
        'MultiTokens.update_collection_account_approvals',
        support_1.sts.struct({
            collectionAccountParameters: support_1.sts.array(function () {
                return support_1.sts.tuple(function () {
                    return [
                        support_1.sts.bigint(),
                        matrixEnjinV1022.AccountId32,
                        support_1.sts.array(function () {
                            return support_1.sts.tuple(function () {
                                return [
                                    matrixEnjinV1022.AccountId32,
                                    support_1.sts.option(function () {
                                        return support_1.sts.number()
                                    }),
                                ]
                            })
                        }),
                    ]
                })
            }),
        })
    ),
}
