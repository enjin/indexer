import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v600 from '../v600'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as v1000 from '../v1000'
import * as matrixEnjinV1003 from '../matrixEnjinV1003'
import * as v1003 from '../v1003'
import * as v1010 from '../v1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as v1020 from '../v1020'

export const createCollection =  {
    name: 'MultiTokens.create_collection',
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     * 
     * # Errors
     * 
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.create_collection',
        sts.struct({
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
    matrixEnjinV1012: new CallType(
        'MultiTokens.create_collection',
        sts.struct({
            descriptor: matrixEnjinV1012.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     * 
     * # Errors
     * 
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    v500: new CallType(
        'MultiTokens.create_collection',
        sts.struct({
            descriptor: v500.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     * 
     * # Errors
     * 
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    v1010: new CallType(
        'MultiTokens.create_collection',
        sts.struct({
            descriptor: v1010.DefaultCollectionDescriptor,
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
    v1020: new CallType(
        'MultiTokens.create_collection',
        sts.struct({
            descriptor: v1020.DefaultCollectionDescriptor,
        })
    ),
}

export const destroyCollection =  {
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
    matrixEnjinV603: new CallType(
        'MultiTokens.destroy_collection',
        sts.struct({
            collectionId: sts.bigint(),
        })
    ),
}

export const mutateCollection =  {
    name: 'MultiTokens.mutate_collection',
    /**
     * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`
     * 
     * # Errors
     * 
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.mutate_collection',
        sts.struct({
            collectionId: sts.bigint(),
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
    v1020: new CallType(
        'MultiTokens.mutate_collection',
        sts.struct({
            collectionId: sts.bigint(),
            mutation: v1020.DefaultCollectionMutation,
        })
    ),
}

export const mutateToken =  {
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
    matrixEnjinV603: new CallType(
        'MultiTokens.mutate_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
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
    matrixEnjinV1012: new CallType(
        'MultiTokens.mutate_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            mutation: matrixEnjinV1012.DefaultTokenMutation,
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
    v500: new CallType(
        'MultiTokens.mutate_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            mutation: v500.DefaultTokenMutation,
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
    v1010: new CallType(
        'MultiTokens.mutate_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            mutation: v1010.DefaultTokenMutation,
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
    v1020: new CallType(
        'MultiTokens.mutate_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            mutation: v1020.DefaultTokenMutation,
        })
    ),
}

export const mint =  {
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
    matrixEnjinV603: new CallType(
        'MultiTokens.mint',
        sts.struct({
            recipient: matrixEnjinV603.MultiAddress,
            collectionId: sts.bigint(),
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
    matrixEnjinV1012: new CallType(
        'MultiTokens.mint',
        sts.struct({
            recipient: matrixEnjinV1012.MultiAddress,
            collectionId: sts.bigint(),
            params: matrixEnjinV1012.DefaultMintParams,
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
    v500: new CallType(
        'MultiTokens.mint',
        sts.struct({
            recipient: v500.MultiAddress,
            collectionId: sts.bigint(),
            params: v500.DefaultMintParams,
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
    v600: new CallType(
        'MultiTokens.mint',
        sts.struct({
            recipient: v600.MultiAddress,
            collectionId: sts.bigint(),
            params: v600.DefaultMintParams,
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
    v1010: new CallType(
        'MultiTokens.mint',
        sts.struct({
            recipient: v1010.MultiAddress,
            collectionId: sts.bigint(),
            params: v1010.DefaultMintParams,
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
    v1020: new CallType(
        'MultiTokens.mint',
        sts.struct({
            recipient: v1020.MultiAddress,
            collectionId: sts.bigint(),
            params: v1020.DefaultMintParams,
        })
    ),
}

export const burn =  {
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
    matrixEnjinV603: new CallType(
        'MultiTokens.burn',
        sts.struct({
            collectionId: sts.bigint(),
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
    matrixEnjinV1012: new CallType(
        'MultiTokens.burn',
        sts.struct({
            collectionId: sts.bigint(),
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
    v500: new CallType(
        'MultiTokens.burn',
        sts.struct({
            collectionId: sts.bigint(),
            params: v500.DefaultBurnParams,
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
    v1010: new CallType(
        'MultiTokens.burn',
        sts.struct({
            collectionId: sts.bigint(),
            params: v1010.DefaultBurnParams,
        })
    ),
}

export const transfer =  {
    name: 'MultiTokens.transfer',
    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.transfer',
        sts.struct({
            recipient: matrixEnjinV603.MultiAddress,
            collectionId: sts.bigint(),
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
    matrixEnjinV1012: new CallType(
        'MultiTokens.transfer',
        sts.struct({
            recipient: matrixEnjinV1012.MultiAddress,
            collectionId: sts.bigint(),
            params: matrixEnjinV1012.DefaultTransferParams,
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
    v500: new CallType(
        'MultiTokens.transfer',
        sts.struct({
            recipient: v500.MultiAddress,
            collectionId: sts.bigint(),
            params: v500.DefaultTransferParams,
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
    v1010: new CallType(
        'MultiTokens.transfer',
        sts.struct({
            recipient: v1010.MultiAddress,
            collectionId: sts.bigint(),
            params: v1010.DefaultTransferParams,
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
    v1020: new CallType(
        'MultiTokens.transfer',
        sts.struct({
            recipient: v1020.MultiAddress,
            collectionId: sts.bigint(),
            params: v1020.DefaultTransferParams,
        })
    ),
}

export const freeze =  {
    name: 'MultiTokens.freeze',
    /**
     * Freeze collection, token or account
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.freeze',
        sts.struct({
            info: matrixEnjinV603.Freeze,
        })
    ),
}

export const thaw =  {
    name: 'MultiTokens.thaw',
    /**
     * Thaw collection, token or account
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.thaw',
        sts.struct({
            info: matrixEnjinV603.Freeze,
        })
    ),
}

export const setAttribute =  {
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
    matrixEnjinV603: new CallType(
        'MultiTokens.set_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.bytes(),
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
    matrixEnjinV1012: new CallType(
        'MultiTokens.set_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.bytes(),
            depositor: sts.option(() => matrixEnjinV1012.MultiAddress),
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
    v500: new CallType(
        'MultiTokens.set_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.bytes(),
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
    v1010: new CallType(
        'MultiTokens.set_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.bytes(),
            depositor: sts.option(() => v1010.MultiAddress),
        })
    ),
}

export const removeAttribute =  {
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
    matrixEnjinV603: new CallType(
        'MultiTokens.remove_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
        })
    ),
}

export const removeAllAttributes =  {
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
    matrixEnjinV603: new CallType(
        'MultiTokens.remove_all_attributes',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            attributeCount: sts.number(),
        })
    ),
}

export const batchTransfer =  {
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
    matrixEnjinV603: new CallType(
        'MultiTokens.batch_transfer',
        sts.struct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => matrixEnjinV603.Recipient),
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
    matrixEnjinV1012: new CallType(
        'MultiTokens.batch_transfer',
        sts.struct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => matrixEnjinV1012.Recipient),
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
    v500: new CallType(
        'MultiTokens.batch_transfer',
        sts.struct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => v500.Recipient),
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
    v1010: new CallType(
        'MultiTokens.batch_transfer',
        sts.struct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => v1010.Recipient),
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
    v1020: new CallType(
        'MultiTokens.batch_transfer',
        sts.struct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => v1020.Recipient),
        })
    ),
}

export const batchMint =  {
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
    matrixEnjinV603: new CallType(
        'MultiTokens.batch_mint',
        sts.struct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => matrixEnjinV603.Type_395),
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
    matrixEnjinV1012: new CallType(
        'MultiTokens.batch_mint',
        sts.struct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => matrixEnjinV1012.Type_472),
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
    v500: new CallType(
        'MultiTokens.batch_mint',
        sts.struct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => v500.Type_380),
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
    v600: new CallType(
        'MultiTokens.batch_mint',
        sts.struct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => v600.Type_380),
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
    v1010: new CallType(
        'MultiTokens.batch_mint',
        sts.struct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => v1010.Type_463),
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
    v1020: new CallType(
        'MultiTokens.batch_mint',
        sts.struct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => v1020.Type_476),
        })
    ),
}

export const batchSetAttribute =  {
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
    matrixEnjinV603: new CallType(
        'MultiTokens.batch_set_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            attributes: sts.array(() => matrixEnjinV603.AttributeKeyValuePair),
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
    matrixEnjinV1012: new CallType(
        'MultiTokens.batch_set_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            attributes: sts.array(() => matrixEnjinV1012.AttributeKeyValuePair),
            depositor: sts.option(() => matrixEnjinV1012.MultiAddress),
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
    v500: new CallType(
        'MultiTokens.batch_set_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            attributes: sts.array(() => v500.AttributeKeyValuePair),
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
    v1010: new CallType(
        'MultiTokens.batch_set_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            attributes: sts.array(() => v1010.AttributeKeyValuePair),
            depositor: sts.option(() => v1010.MultiAddress),
        })
    ),
}

export const approveCollection =  {
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
    matrixEnjinV603: new CallType(
        'MultiTokens.approve_collection',
        sts.struct({
            collectionId: sts.bigint(),
            operator: matrixEnjinV603.AccountId32,
            expiration: sts.option(() => sts.number()),
        })
    ),
}

export const unapproveCollection =  {
    name: 'MultiTokens.unapprove_collection',
    /**
     * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `collection`
     * 
     * # Errors
     * 
     * - [`Error::CollectionAccountNotFound`] if the collection account cannot be found
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.unapprove_collection',
        sts.struct({
            collectionId: sts.bigint(),
            operator: matrixEnjinV603.AccountId32,
        })
    ),
}

export const approveToken =  {
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
    matrixEnjinV603: new CallType(
        'MultiTokens.approve_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            operator: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
            expiration: sts.option(() => sts.number()),
            currentAmount: sts.bigint(),
        })
    ),
}

export const unapproveToken =  {
    name: 'MultiTokens.unapprove_token',
    /**
     * Unapprove `operator` to transfer `origin`'s `token_id` of `collection_id`
     * 
     * # Errors
     * 
     * - [`Error::TokenAccountNotFound`] if the token account does not exist
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.unapprove_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            operator: matrixEnjinV603.AccountId32,
        })
    ),
}

export const claimCollections =  {
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
    matrixEnjinV603: new CallType(
        'MultiTokens.claim_collections',
        sts.struct({
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
    matrixEnjinV1000: new CallType(
        'MultiTokens.claim_collections',
        sts.struct({
            destination: matrixEnjinV1000.AccountId32,
            ethereumSignature: matrixEnjinV1000.Signature,
            ethereumAddress: matrixEnjinV1000.H160,
            collectionCount: sts.number(),
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
    v604: new CallType(
        'MultiTokens.claim_collections',
        sts.struct({
            destination: v604.AccountId32,
            ethereumSignature: v604.Signature,
            ethereumAddress: v604.H160,
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
    v1000: new CallType(
        'MultiTokens.claim_collections',
        sts.struct({
            destination: v1000.AccountId32,
            ethereumSignature: v1000.Signature,
            ethereumAddress: v1000.H160,
            collectionCount: sts.number(),
        })
    ),
}

export const claimTokens =  {
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
    matrixEnjinV603: new CallType(
        'MultiTokens.claim_tokens',
        sts.struct({
            destination: matrixEnjinV603.AccountId32,
            ethereumSignature: matrixEnjinV603.Signature,
            ethereumAddress: matrixEnjinV603.H160,
        })
    ),
}

export const forceMutateCollection =  {
    name: 'MultiTokens.force_mutate_collection',
    /**
     * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
     * root and the `caller` account should be specified.
     * 
     * # Errors
     * 
     * Same as [`mutate_collection`](Self::mutate_collection)
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_mutate_collection',
        sts.struct({
            collectionId: sts.bigint(),
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
    v1020: new CallType(
        'MultiTokens.force_mutate_collection',
        sts.struct({
            collectionId: sts.bigint(),
            mutation: v1020.DefaultCollectionMutation,
        })
    ),
}

export const forceTransfer =  {
    name: 'MultiTokens.force_transfer',
    /**
     * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
     * account should be specified.
     * 
     * # Errors
     * 
     * Same as [`transfer`](Self::transfer)
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_transfer',
        sts.struct({
            source: matrixEnjinV603.MultiAddress,
            destination: matrixEnjinV603.MultiAddress,
            collectionId: sts.bigint(),
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
    matrixEnjinV1012: new CallType(
        'MultiTokens.force_transfer',
        sts.struct({
            source: matrixEnjinV1012.MultiAddress,
            destination: matrixEnjinV1012.MultiAddress,
            collectionId: sts.bigint(),
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
    v500: new CallType(
        'MultiTokens.force_transfer',
        sts.struct({
            source: v500.MultiAddress,
            destination: v500.MultiAddress,
            collectionId: sts.bigint(),
            params: v500.DefaultTransferParams,
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
    v1010: new CallType(
        'MultiTokens.force_transfer',
        sts.struct({
            source: v1010.MultiAddress,
            destination: v1010.MultiAddress,
            collectionId: sts.bigint(),
            params: v1010.DefaultTransferParams,
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
    v1020: new CallType(
        'MultiTokens.force_transfer',
        sts.struct({
            source: v1020.MultiAddress,
            destination: v1020.MultiAddress,
            collectionId: sts.bigint(),
            params: v1020.DefaultTransferParams,
        })
    ),
}

export const forceSetCollection =  {
    name: 'MultiTokens.force_set_collection',
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_set_collection',
        sts.struct({
            collectionId: sts.bigint(),
            value: sts.option(() => matrixEnjinV603.Collection),
        })
    ),
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    matrixEnjinV1012: new CallType(
        'MultiTokens.force_set_collection',
        sts.struct({
            collectionId: sts.bigint(),
            value: sts.option(() => matrixEnjinV1012.Collection),
        })
    ),
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    v500: new CallType(
        'MultiTokens.force_set_collection',
        sts.struct({
            collectionId: sts.bigint(),
            value: sts.option(() => v500.Collection),
        })
    ),
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    v1010: new CallType(
        'MultiTokens.force_set_collection',
        sts.struct({
            collectionId: sts.bigint(),
            value: sts.option(() => v1010.Collection),
        })
    ),
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    v1020: new CallType(
        'MultiTokens.force_set_collection',
        sts.struct({
            collectionId: sts.bigint(),
            value: sts.option(() => v1020.Collection),
        })
    ),
}

export const forceSetToken =  {
    name: 'MultiTokens.force_set_token',
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_set_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            value: sts.option(() => matrixEnjinV603.Token),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixEnjinV1012: new CallType(
        'MultiTokens.force_set_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            value: sts.option(() => matrixEnjinV1012.Token),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    v500: new CallType(
        'MultiTokens.force_set_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            value: sts.option(() => v500.Token),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    v600: new CallType(
        'MultiTokens.force_set_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            value: sts.option(() => v600.Token),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    v1010: new CallType(
        'MultiTokens.force_set_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            value: sts.option(() => v1010.Token),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    v1020: new CallType(
        'MultiTokens.force_set_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            value: sts.option(() => v1020.Token),
        })
    ),
}

export const forceSetAttribute =  {
    name: 'MultiTokens.force_set_attribute',
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_set_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.option(() => matrixEnjinV603.Attribute),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixEnjinV1012: new CallType(
        'MultiTokens.force_set_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.option(() => matrixEnjinV1012.Attribute),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    v500: new CallType(
        'MultiTokens.force_set_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.option(() => v500.Attribute),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    v1010: new CallType(
        'MultiTokens.force_set_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.option(() => v1010.Attribute),
        })
    ),
}

export const forceSetCollectionAccount =  {
    name: 'MultiTokens.force_set_collection_account',
    /**
     * Set the CollectionAccounts storage to the given `value`, origin must be root
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_set_collection_account',
        sts.struct({
            collectionId: sts.bigint(),
            accountId: matrixEnjinV603.MultiAddress,
            value: sts.option(() => matrixEnjinV603.CollectionAccount),
        })
    ),
}

export const forceSetTokenAccount =  {
    name: 'MultiTokens.force_set_token_account',
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_set_token_account',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: matrixEnjinV603.MultiAddress,
            value: sts.option(() => matrixEnjinV603.TokenAccount),
        })
    ),
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    matrixEnjinV1012: new CallType(
        'MultiTokens.force_set_token_account',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: matrixEnjinV1012.MultiAddress,
            value: sts.option(() => matrixEnjinV1012.TokenAccount),
        })
    ),
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    v500: new CallType(
        'MultiTokens.force_set_token_account',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: v500.MultiAddress,
            value: sts.option(() => v500.TokenAccount),
        })
    ),
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    v1010: new CallType(
        'MultiTokens.force_set_token_account',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: v1010.MultiAddress,
            value: sts.option(() => v1010.TokenAccount),
        })
    ),
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    v1020: new CallType(
        'MultiTokens.force_set_token_account',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: v1020.MultiAddress,
            value: sts.option(() => v1020.TokenAccount),
        })
    ),
}

export const forceCreateCollection =  {
    name: 'MultiTokens.force_create_collection',
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     * 
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_create_collection',
        sts.struct({
            owner: matrixEnjinV603.AccountId32,
            collectionId: sts.bigint(),
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
    matrixEnjinV1012: new CallType(
        'MultiTokens.force_create_collection',
        sts.struct({
            owner: matrixEnjinV1012.AccountId32,
            collectionId: sts.bigint(),
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
    v500: new CallType(
        'MultiTokens.force_create_collection',
        sts.struct({
            owner: v500.AccountId32,
            collectionId: sts.bigint(),
            descriptor: v500.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     * 
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    v1010: new CallType(
        'MultiTokens.force_create_collection',
        sts.struct({
            owner: v1010.AccountId32,
            collectionId: sts.bigint(),
            descriptor: v1010.DefaultCollectionDescriptor,
        })
    ),
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     * 
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    v1020: new CallType(
        'MultiTokens.force_create_collection',
        sts.struct({
            owner: v1020.AccountId32,
            collectionId: sts.bigint(),
            descriptor: v1020.DefaultCollectionDescriptor,
        })
    ),
}

export const forceMint =  {
    name: 'MultiTokens.force_mint',
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::ForceOrigin`].
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_mint',
        sts.struct({
            caller: matrixEnjinV603.MultiAddress,
            recipient: matrixEnjinV603.MultiAddress,
            collectionId: sts.bigint(),
            params: matrixEnjinV603.DefaultMintParams,
            depositBacker: sts.option(() => matrixEnjinV603.MultiAddress),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    matrixEnjinV1003: new CallType(
        'MultiTokens.force_mint',
        sts.struct({
            caller: sts.option(() => matrixEnjinV1003.MultiAddress),
            recipient: matrixEnjinV1003.MultiAddress,
            collectionId: sts.bigint(),
            params: matrixEnjinV1003.FlexibleMintParams,
            depositor: sts.option(() => matrixEnjinV1003.MultiAddress),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    matrixEnjinV1012: new CallType(
        'MultiTokens.force_mint',
        sts.struct({
            caller: sts.option(() => matrixEnjinV1012.MultiAddress),
            recipient: matrixEnjinV1012.MultiAddress,
            collectionId: sts.bigint(),
            params: matrixEnjinV1012.FlexibleMintParams,
            depositor: sts.option(() => matrixEnjinV1012.MultiAddress),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::ForceOrigin`].
     */
    v604: new CallType(
        'MultiTokens.force_mint',
        sts.struct({
            caller: v604.MultiAddress,
            recipient: v604.MultiAddress,
            collectionId: sts.bigint(),
            params: v604.DefaultMintParams,
            depositBacker: sts.option(() => v604.MultiAddress),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    v1003: new CallType(
        'MultiTokens.force_mint',
        sts.struct({
            caller: sts.option(() => v1003.MultiAddress),
            recipient: v1003.MultiAddress,
            collectionId: sts.bigint(),
            params: v1003.FlexibleMintParams,
            depositor: sts.option(() => v1003.MultiAddress),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    v1010: new CallType(
        'MultiTokens.force_mint',
        sts.struct({
            caller: sts.option(() => v1010.MultiAddress),
            recipient: v1010.MultiAddress,
            collectionId: sts.bigint(),
            params: v1010.FlexibleMintParams,
            depositor: sts.option(() => v1010.MultiAddress),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    v1020: new CallType(
        'MultiTokens.force_mint',
        sts.struct({
            caller: sts.option(() => v1020.MultiAddress),
            recipient: v1020.MultiAddress,
            collectionId: sts.bigint(),
            params: v1020.FlexibleMintParams,
            depositor: sts.option(() => v1020.MultiAddress),
        })
    ),
}

export const forceBurn =  {
    name: 'MultiTokens.force_burn',
    /**
     * Same as [`burn`](Self::burn), but it is only callable by
     * [`Config::ForceOrigin`]. Executes the burn by `caller`.
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_burn',
        sts.struct({
            caller: matrixEnjinV603.MultiAddress,
            collectionId: sts.bigint(),
            params: matrixEnjinV603.DefaultBurnParams,
        })
    ),
    /**
     * Same as [`burn`](Self::burn), but it is only callable by
     * [`Config::ForceOrigin`]. Executes the burn by `caller`.
     */
    matrixEnjinV1012: new CallType(
        'MultiTokens.force_burn',
        sts.struct({
            caller: matrixEnjinV1012.MultiAddress,
            collectionId: sts.bigint(),
            params: matrixEnjinV1012.DefaultBurnParams,
        })
    ),
    /**
     * Same as [`burn`](Self::burn), but it is only callable by
     * [`Config::ForceOrigin`]. Executes the burn by `caller`.
     */
    v604: new CallType(
        'MultiTokens.force_burn',
        sts.struct({
            caller: v604.MultiAddress,
            collectionId: sts.bigint(),
            params: v604.DefaultBurnParams,
        })
    ),
    /**
     * Same as [`burn`](Self::burn), but it is only callable by
     * [`Config::ForceOrigin`]. Executes the burn by `caller`.
     */
    v1010: new CallType(
        'MultiTokens.force_burn',
        sts.struct({
            caller: v1010.MultiAddress,
            collectionId: sts.bigint(),
            params: v1010.DefaultBurnParams,
        })
    ),
}

export const forceApproveCollection =  {
    name: 'MultiTokens.force_approve_collection',
    /**
     * Same as [`approve_collection`](Self::approve_collection), but it is callable by
     * [`Config::ForceOrigin`].
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_approve_collection',
        sts.struct({
            caller: matrixEnjinV603.MultiAddress,
            collectionId: sts.bigint(),
            operator: matrixEnjinV603.AccountId32,
            expiration: sts.option(() => sts.number()),
        })
    ),
}

export const forceFreeze =  {
    name: 'MultiTokens.force_freeze',
    /**
     * Same as [`freeze`](Self::freeze), but it is callable by [`Config::ForceOrigin`]
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_freeze',
        sts.struct({
            info: matrixEnjinV603.Freeze,
        })
    ),
}

export const forceSetNextCollectionId =  {
    name: 'MultiTokens.force_set_next_collection_id',
    /**
     * Sets [`NextCollectionId`] to `value`. Only callable by [`Config::ForceOrigin`].
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_set_next_collection_id',
        sts.struct({
            value: sts.bigint(),
        })
    ),
}

export const finishClaimTokens =  {
    name: 'MultiTokens.finish_claim_tokens',
    /**
     * Sends an event that signifies claiming the tokens was completed. Only callable by
     * [`Config::EthereumMigrationOrigin`].
     */
    matrixEnjinV1000: new CallType(
        'MultiTokens.finish_claim_tokens',
        sts.struct({
            destination: matrixEnjinV1000.AccountId32,
            ethereumAddress: matrixEnjinV1000.H160,
        })
    ),
}

export const forceSetEthereumAccount =  {
    name: 'MultiTokens.force_set_ethereum_account',
    /**
     * Sets [`ClaimableCollectionIds`] to `value`. Only callable by [`Config::ForceOrigin`].
     */
    matrixEnjinV1000: new CallType(
        'MultiTokens.force_set_ethereum_account',
        sts.struct({
            address: matrixEnjinV1000.H160,
            value: sts.option(() => sts.array(() => sts.bigint())),
        })
    ),
}

export const forceSetEthereumCollectionId =  {
    name: 'MultiTokens.force_set_ethereum_collection_id',
    /**
     * Sets [`NativeCollectionIds`] to `native_collection_id`. Only callable by
     * [`Config::ForceOrigin`].
     */
    matrixEnjinV1000: new CallType(
        'MultiTokens.force_set_ethereum_collection_id',
        sts.struct({
            ethereumCollectionId: sts.bigint(),
            nativeCollectionId: sts.option(() => sts.bigint()),
        })
    ),
}

export const forceSetUnmintableTokenIds =  {
    name: 'MultiTokens.force_set_unmintable_token_ids',
    /**
     * Sets [`UnmintableTokenIds`] storage. Only callable by
     * [`Config::ForceOrigin`].
     */
    matrixEnjinV1000: new CallType(
        'MultiTokens.force_set_unmintable_token_ids',
        sts.struct({
            collectionId: sts.bigint(),
            baseTokenId: sts.bigint(),
            tokenIndex: sts.bigint(),
        })
    ),
}

export const forceCreateEthereumCollection =  {
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
    matrixEnjinV1000: new CallType(
        'MultiTokens.force_create_ethereum_collection',
        sts.struct({
            owner: matrixEnjinV1000.AccountId32,
            claimer: matrixEnjinV1000.H160,
            ethereumCollectionId: sts.bigint(),
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
    matrixEnjinV1012: new CallType(
        'MultiTokens.force_create_ethereum_collection',
        sts.struct({
            owner: matrixEnjinV1012.AccountId32,
            claimer: matrixEnjinV1012.H160,
            ethereumCollectionId: sts.bigint(),
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
    v1000: new CallType(
        'MultiTokens.force_create_ethereum_collection',
        sts.struct({
            owner: v1000.AccountId32,
            claimer: v1000.H160,
            ethereumCollectionId: sts.bigint(),
            descriptor: v1000.DefaultCollectionDescriptor,
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
    v1010: new CallType(
        'MultiTokens.force_create_ethereum_collection',
        sts.struct({
            owner: v1010.AccountId32,
            claimer: v1010.H160,
            ethereumCollectionId: sts.bigint(),
            descriptor: v1010.DefaultCollectionDescriptor,
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
    v1020: new CallType(
        'MultiTokens.force_create_ethereum_collection',
        sts.struct({
            owner: v1020.AccountId32,
            claimer: v1020.H160,
            ethereumCollectionId: sts.bigint(),
            descriptor: v1020.DefaultCollectionDescriptor,
        })
    ),
}

export const forceSetEthereumUnmintableTokenIds =  {
    name: 'MultiTokens.force_set_ethereum_unmintable_token_ids',
    /**
     * Sets [`UnmintableTokenIds`] using ethereum_collection_id, the function will fail if the
     * ethereum_collection_id is invalid
     */
    matrixEnjinV1000: new CallType(
        'MultiTokens.force_set_ethereum_unmintable_token_ids',
        sts.struct({
            ethereumCollectionId: sts.bigint(),
            baseTokenId: sts.bigint(),
            tokenIndex: sts.bigint(),
        })
    ),
}

export const acceptCollectionTransfer =  {
    name: 'MultiTokens.accept_collection_transfer',
    /**
     * See [`Pallet::accept_collection_transfer`].
     */
    matrixEnjinV1004: new CallType(
        'MultiTokens.accept_collection_transfer',
        sts.struct({
            collectionId: sts.bigint(),
        })
    ),
}

export const cancelCollectionTransfer =  {
    name: 'MultiTokens.cancel_collection_transfer',
    /**
     * See [`Pallet::cancel_collection_transfer`].
     */
    matrixEnjinV1004: new CallType(
        'MultiTokens.cancel_collection_transfer',
        sts.struct({
            collectionId: sts.bigint(),
        })
    ),
}

export const updateAccountDeposit =  {
    name: 'MultiTokens.update_account_deposit',
    /**
     * Can add or remove deposit for the number of accounts the token can accommodate. It is
     * permissionless if increased. Only the collection owner can decrease.
     * The locked amount is stored in the collection owner's account.
     */
    matrixEnjinV1012: new CallType(
        'MultiTokens.update_account_deposit',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            deltaAccountCount: sts.number(),
        })
    ),
}

export const infuse =  {
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
    matrixEnjinV1012: new CallType(
        'MultiTokens.infuse',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            amount: sts.bigint(),
        })
    ),
}

export const createTokenGroup =  {
    name: 'MultiTokens.create_token_group',
    /**
     * Creates a [`TokenGroup`] belonging to `collection_id`
     * 
     * # Errors
     * 
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    v1020: new CallType(
        'MultiTokens.create_token_group',
        sts.struct({
            collectionId: sts.bigint(),
            depositor: sts.option(() => v1020.MultiAddress),
        })
    ),
}

export const destroyTokenGroup =  {
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
    v1020: new CallType(
        'MultiTokens.destroy_token_group',
        sts.struct({
            tokenGroupId: sts.bigint(),
        })
    ),
}

export const addTokenToGroup =  {
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
     * - [`Error::TokenAlreadyInGroup`] if the token already belongs to its maximum number of
     *   groups.
     */
    v1020: new CallType(
        'MultiTokens.add_token_to_group',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            tokenGroupId: sts.bigint(),
        })
    ),
}

export const removeTokenFromGroup =  {
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
    v1020: new CallType(
        'MultiTokens.remove_token_from_group',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            tokenGroupId: sts.bigint(),
        })
    ),
}

export const setTokenGroupAttribute =  {
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
    v1020: new CallType(
        'MultiTokens.set_token_group_attribute',
        sts.struct({
            tokenGroupId: sts.bigint(),
            key: sts.bytes(),
            value: sts.bytes(),
            depositor: sts.option(() => v1020.MultiAddress),
        })
    ),
}

export const removeTokenGroupAttribute =  {
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
    v1020: new CallType(
        'MultiTokens.remove_token_group_attribute',
        sts.struct({
            tokenGroupId: sts.bigint(),
            key: sts.bytes(),
        })
    ),
}

export const recalculateCollectionDeposit =  {
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
    v1020: new CallType(
        'MultiTokens.recalculate_collection_deposit',
        sts.struct({
            collectionId: sts.bigint(),
            tokenCount: sts.number(),
            attributeCount: sts.number(),
        })
    ),
}

export const upgradeTokenAccounts =  {
    name: 'MultiTokens.upgrade_token_accounts',
    /**
     * Upgrade a collection of listings in storage.
     */
    v1020: new CallType(
        'MultiTokens.upgrade_token_accounts',
        sts.struct({
            tokenAccountKeys: sts.array(() => sts.tuple(() => [sts.bigint(), sts.bigint(), v1020.AccountId32])),
        })
    ),
}

export const upgradeTokens =  {
    name: 'MultiTokens.upgrade_tokens',
    /**
     * Upgrade a list of tokens in storage
     */
    v1020: new CallType(
        'MultiTokens.upgrade_tokens',
        sts.struct({
            tokenKeys: sts.array(() => sts.tuple(() => [sts.bigint(), sts.bigint()])),
        })
    ),
}

export const upgradeCollections =  {
    name: 'MultiTokens.upgrade_collections',
    /**
     * Upgrade a list of collections in storage
     */
    v1020: new CallType(
        'MultiTokens.upgrade_collections',
        sts.struct({
            collectionKeys: sts.array(() => sts.bigint()),
        })
    ),
}

export const updateCollectionAccountApprovals =  {
    name: 'MultiTokens.update_collection_account_approvals',
    /**
     * Upgrades approvals expiration block numbers on a list of collections in storage
     */
    v1020: new CallType(
        'MultiTokens.update_collection_account_approvals',
        sts.struct({
            collectionAccountParameters: sts.array(() => sts.tuple(() => [sts.bigint(), v1020.AccountId32, sts.array(() => sts.tuple(() => [v1020.AccountId32, sts.option(() => sts.number())]))])),
        })
    ),
}
