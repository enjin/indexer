import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV101 from '../enjinV101'
import * as v102 from '../v102'
import * as v106 from '../v106'
import * as matrixV500 from '../matrixV500'
import * as matrixV600 from '../matrixV600'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as matrixV1000 from '../matrixV1000'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as matrixV1010 from '../matrixV1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1020 from '../matrixV1020'
import * as enjinV1021 from '../enjinV1021'
import * as v1021 from '../v1021'
import * as matrixEnjinV1022 from '../matrixEnjinV1022'
import * as matrixV1023 from '../matrixV1023'
import * as v1030 from '../v1030'
import * as matrixV1030 from '../matrixV1030'
import * as enjinV1032 from '../enjinV1032'
import * as enjinV1050 from '../enjinV1050'
import * as v1050 from '../v1050'
import * as v1060 from '../v1060'

export const collectionCreated = {
    name: 'MultiTokens.CollectionCreated',
    /**
     * A new collection was created
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.CollectionCreated',
        sts.struct({
            /**
             * The id of the [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: sts.bigint(),
            /**
             * The owner of the [`Collection`](ep_multi_tokens::Collection)
             */
            owner: matrixEnjinV603.AccountId32,
        })
    ),
}

export const collectionDestroyed = {
    name: 'MultiTokens.CollectionDestroyed',
    /**
     * A collection was destroyed.
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.CollectionDestroyed',
        sts.struct({
            /**
             * id of collection destroyed
             */
            collectionId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that destroyed the collection
             */
            caller: matrixEnjinV603.AccountId32,
        })
    ),
}

export const collectionMutated = {
    name: 'MultiTokens.CollectionMutated',
    /**
     * A collection was mutated
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.CollectionMutated',
        sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of the
             * [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: matrixEnjinV603.DefaultCollectionMutation,
        })
    ),
    /**
     * A collection was mutated
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.CollectionMutated',
        sts.struct({
            /**
             * collection id of the Collection
             */
            collectionId: sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: matrixEnjinV1022.DefaultCollectionMutation,
        })
    ),
    /**
     * A [`Collection`](ep_multi_tokens::Collection) was mutated
     */
    matrixV500: new EventType(
        'MultiTokens.CollectionMutated',
        sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of the
             * [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: matrixV500.DefaultCollectionMutation,
        })
    ),
    /**
     * A collection was mutated
     */
    matrixV1020: new EventType(
        'MultiTokens.CollectionMutated',
        sts.struct({
            /**
             * collection id of the Collection
             */
            collectionId: sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: matrixV1020.DefaultCollectionMutation,
        })
    ),
    /**
     * A [`Collection`](ep_multi_tokens::Collection) was mutated
     */
    enjinV100: new EventType(
        'MultiTokens.CollectionMutated',
        sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of the
             * [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: enjinV100.DefaultCollectionMutation,
        })
    ),
    /**
     * A collection was mutated
     */
    enjinV1050: new EventType(
        'MultiTokens.CollectionMutated',
        sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of the
             * [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: enjinV1050.DefaultCollectionMutation,
        })
    ),
    /**
     * A [`Collection`](ep_multi_tokens::Collection) was mutated
     */
    v100: new EventType(
        'MultiTokens.CollectionMutated',
        sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of the
             * [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: v100.DefaultCollectionMutation,
        })
    ),
    /**
     * A collection was mutated
     */
    v1050: new EventType(
        'MultiTokens.CollectionMutated',
        sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of the
             * [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: v1050.DefaultCollectionMutation,
        })
    ),
}

export const minted = {
    name: 'MultiTokens.Minted',
    /**
     * Units of a token were minted
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Minted',
        sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of minted token
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) minted
             */
            tokenId: sts.bigint(),
            /**
             * issuer of minted token
             */
            issuer: matrixEnjinV603.RootOrSigned,
            /**
             * The receiver of the token
             */
            recipient: matrixEnjinV603.AccountId32,
            /**
             * the amount of units minted
             */
            amount: sts.bigint(),
        })
    ),
}

export const tokenCreated = {
    name: 'MultiTokens.TokenCreated',
    /**
     * A token was created
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.TokenCreated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) minted
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) minted
             */
            tokenId: sts.bigint(),
            /**
             * issuer of minted [`Token`](ep_multi_tokens::Token)
             */
            issuer: matrixEnjinV603.RootOrSigned,
            /**
             * the initial supply of the [`Token`](ep_multi_tokens::Token)
             */
            initialSupply: sts.bigint(),
        })
    ),
}

export const tokenMutated = {
    name: 'MultiTokens.TokenMutated',
    /**
     * A token was mutated
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.TokenMutated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: matrixEnjinV603.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    matrixEnjinV1012: new EventType(
        'MultiTokens.TokenMutated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: matrixEnjinV1012.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.TokenMutated',
        sts.struct({
            /**
             * The collection id where the Token belongs
             */
            collectionId: sts.bigint(),
            /**
             * Id of the Token mutated
             */
            tokenId: sts.bigint(),
            /**
             * mutation that was applied to the Token
             */
            mutation: matrixEnjinV1022.DefaultTokenMutation,
        })
    ),
    /**
     * A [`Token`](ep_multi_tokens::Token) was mutated
     */
    matrixV500: new EventType(
        'MultiTokens.TokenMutated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: matrixV500.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    matrixV1010: new EventType(
        'MultiTokens.TokenMutated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: matrixV1010.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    matrixV1020: new EventType(
        'MultiTokens.TokenMutated',
        sts.struct({
            /**
             * The collection id where the Token belongs
             */
            collectionId: sts.bigint(),
            /**
             * Id of the Token mutated
             */
            tokenId: sts.bigint(),
            /**
             * mutation that was applied to the Token
             */
            mutation: matrixV1020.DefaultTokenMutation,
        })
    ),
    /**
     * A [`Token`](ep_multi_tokens::Token) was mutated
     */
    enjinV100: new EventType(
        'MultiTokens.TokenMutated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: enjinV100.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    enjinV1032: new EventType(
        'MultiTokens.TokenMutated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: enjinV1032.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    enjinV1050: new EventType(
        'MultiTokens.TokenMutated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: enjinV1050.DefaultTokenMutation,
        })
    ),
    /**
     * A [`Token`](ep_multi_tokens::Token) was mutated
     */
    v100: new EventType(
        'MultiTokens.TokenMutated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: v100.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    v1030: new EventType(
        'MultiTokens.TokenMutated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: v1030.DefaultTokenMutation,
        })
    ),
    /**
     * A token was mutated
     */
    v1050: new EventType(
        'MultiTokens.TokenMutated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: v1050.DefaultTokenMutation,
        })
    ),
}

export const burned = {
    name: 'MultiTokens.Burned',
    /**
     * Units of a token were burned
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Burned',
        sts.struct({
            /**
             * collection id of tokens burned
             */
            collectionId: sts.bigint(),
            /**
             * the token id that was burned
             */
            tokenId: sts.bigint(),
            /**
             * the account the tokens were burned from
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount that was burned for each token_id
             */
            amount: sts.bigint(),
        })
    ),
}

export const tokenDestroyed = {
    name: 'MultiTokens.TokenDestroyed',
    /**
     * A token was destroyed
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.TokenDestroyed',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) destroyed
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) destroyed
             */
            tokenId: sts.bigint(),
            /**
             * the [`AccountId`](frame_system::Config::AccountId) that destroyed the
             * [`Token`](ep_multi_tokens::Token)
             */
            caller: matrixEnjinV603.AccountId32,
        })
    ),
}

export const transferred = {
    name: 'MultiTokens.Transferred',
    /**
     * Units of a token were transferred
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Transferred',
        sts.struct({
            /**
             * collection_id of transferred collection
             */
            collectionId: sts.bigint(),
            /**
             * [`TokenId`](Config::TokenId) transferred
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that performed the transfer
             */
            operator: matrixEnjinV603.AccountId32,
            /**
             * transaction sender
             */
            from: matrixEnjinV603.AccountId32,
            /**
             * transaction recipient
             */
            to: matrixEnjinV603.AccountId32,
            /**
             * number of units transferred
             */
            amount: sts.bigint(),
        })
    ),
}

export const frozen = {
    name: 'MultiTokens.Frozen',
    /**
     * Collection, token or account was frozen
     */
    matrixEnjinV603: new EventType('MultiTokens.Frozen', matrixEnjinV603.Freeze),
}

export const thawed = {
    name: 'MultiTokens.Thawed',
    /**
     * Collection, token or account was unfrozen
     */
    matrixEnjinV603: new EventType('MultiTokens.Thawed', matrixEnjinV603.Freeze),
}

export const attributeSet = {
    name: 'MultiTokens.AttributeSet',
    /**
     * New attribute has been set
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.AttributeSet',
        sts.struct({
            /**
             * collectionId of collection modified
             */
            collectionId: sts.bigint(),
            /**
             * [`TokenId`](Config::TokenId) of [`Token`](ep_multi_tokens::Token) modified
             */
            tokenId: sts.option(() => sts.bigint()),
            /**
             * key of attribute set
             */
            key: sts.bytes(),
            /**
             * value of attribute set
             */
            value: sts.bytes(),
        })
    ),
}

export const attributeRemoved = {
    name: 'MultiTokens.AttributeRemoved',
    /**
     * An attribute has been removed
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.AttributeRemoved',
        sts.struct({
            /**
             * collectionId of collection modified
             */
            collectionId: sts.bigint(),
            /**
             * tokenid of token modified
             */
            tokenId: sts.option(() => sts.bigint()),
            /**
             * key of attribute cleared
             */
            key: sts.bytes(),
        })
    ),
}

export const approved = {
    name: 'MultiTokens.Approved',
    /**
     * An approval took place. If `token_id` is `None`, it applies to the whole collection.
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Approved',
        sts.struct({
            /**
             * The collection that was approved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was approved
             */
            tokenId: sts.option(() => sts.bigint()),
            /**
             * The account that made the approval
             */
            owner: matrixEnjinV603.AccountId32,
            /**
             * The account that was approved to operate
             */
            operator: matrixEnjinV603.AccountId32,
            /**
             * The amount approved for
             */
            amount: sts.option(() => sts.bigint()),
            /**
             * The expiration of the approval
             */
            expiration: sts.option(() => sts.number()),
        })
    ),
}

export const unapproved = {
    name: 'MultiTokens.Unapproved',
    /**
     * An unapproval took place. If `token_id` is `None`, it applies to the collection.
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Unapproved',
        sts.struct({
            /**
             * The collection that was unapproved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was unapproved
             */
            tokenId: sts.option(() => sts.bigint()),
            /**
             * The account that `operator` was unapproved for
             */
            owner: matrixEnjinV603.AccountId32,
            /**
             * The account that was unapproved to operate
             */
            operator: matrixEnjinV603.AccountId32,
        })
    ),
}

export const collectionAccountCreated = {
    name: 'MultiTokens.CollectionAccountCreated',
    /**
     * A new collection account was created
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.CollectionAccountCreated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the account is created
             */
            collectionId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the account
             */
            accountId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const tokenAccountCreated = {
    name: 'MultiTokens.TokenAccountCreated',
    /**
     * A new token account was created
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.TokenAccountCreated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the account is created
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the account is created
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the account
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The balance that this account holds
             */
            balance: sts.bigint(),
        })
    ),
}

export const collectionAccountDestroyed = {
    name: 'MultiTokens.CollectionAccountDestroyed',
    /**
     * A collection account was destroyed
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.CollectionAccountDestroyed',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) of the destroyed account
             */
            collectionId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the destroyed account
             */
            accountId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const tokenAccountDestroyed = {
    name: 'MultiTokens.TokenAccountDestroyed',
    /**
     * A token account was destroyed
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.TokenAccountDestroyed',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the account is created
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) fof the destroyed account
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the destroyed account
             */
            accountId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const reserved = {
    name: 'MultiTokens.Reserved',
    /**
     * Token units were reserved
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Reserved',
        sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Token units were reserved
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.Reserved',
        sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: matrixEnjinV1022.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: matrixEnjinV1022.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were reserved
     */
    matrixV500: new EventType(
        'MultiTokens.Reserved',
        sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: matrixV500.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Token units were reserved
     */
    matrixV1020: new EventType(
        'MultiTokens.Reserved',
        sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: matrixV1020.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: matrixV1020.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were reserved
     */
    matrixV1023: new EventType(
        'MultiTokens.Reserved',
        sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: matrixV1023.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: matrixV1023.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were reserved
     */
    enjinV100: new EventType(
        'MultiTokens.Reserved',
        sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: enjinV100.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Token units were reserved
     */
    enjinV1050: new EventType(
        'MultiTokens.Reserved',
        sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: enjinV1050.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: enjinV1050.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were reserved
     */
    v100: new EventType(
        'MultiTokens.Reserved',
        sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: v100.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Token units were reserved
     */
    v1050: new EventType(
        'MultiTokens.Reserved',
        sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: v1050.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: v1050.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were reserved
     */
    matrixV1030: new EventType(
        'MultiTokens.Reserved',
        sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: matrixV1030.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: matrixV1030.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were reserved
     */
    v1060: new EventType(
        'MultiTokens.Reserved',
        sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: v1060.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: v1060.RuntimeHoldReason,
        })
    ),
}

export const unreserved = {
    name: 'MultiTokens.Unreserved',
    /**
     * Token units were unreserved
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Unreserved',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was unreserved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was unreserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Token units were unreserved
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.Unreserved',
        sts.struct({
            /**
             * The collection id in which token was unreserved
             */
            collectionId: sts.bigint(),
            /**
             * The token id that was unreserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: matrixEnjinV1022.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: matrixEnjinV1022.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were unreserved
     */
    matrixV500: new EventType(
        'MultiTokens.Unreserved',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was unreserved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was unreserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: matrixV500.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Token units were unreserved
     */
    matrixV1020: new EventType(
        'MultiTokens.Unreserved',
        sts.struct({
            /**
             * The collection id in which token was unreserved
             */
            collectionId: sts.bigint(),
            /**
             * The token id that was unreserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: matrixV1020.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: matrixV1020.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were unreserved
     */
    matrixV1023: new EventType(
        'MultiTokens.Unreserved',
        sts.struct({
            /**
             * The collection id in which token was unreserved
             */
            collectionId: sts.bigint(),
            /**
             * The token id that was unreserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: matrixV1023.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: matrixV1023.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were unreserved
     */
    enjinV100: new EventType(
        'MultiTokens.Unreserved',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was unreserved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was unreserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: enjinV100.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Token units were unreserved
     */
    enjinV1050: new EventType(
        'MultiTokens.Unreserved',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was unreserved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was unreserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: enjinV1050.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: enjinV1050.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were unreserved
     */
    v100: new EventType(
        'MultiTokens.Unreserved',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was unreserved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was unreserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: v100.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Token units were unreserved
     */
    v1050: new EventType(
        'MultiTokens.Unreserved',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was unreserved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was unreserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: v1050.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: v1050.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were unreserved
     */
    matrixV1030: new EventType(
        'MultiTokens.Unreserved',
        sts.struct({
            /**
             * The collection id in which token was unreserved
             */
            collectionId: sts.bigint(),
            /**
             * The token id that was unreserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: matrixV1030.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: matrixV1030.RuntimeHoldReason,
        })
    ),
    /**
     * Token units were unreserved
     */
    v1060: new EventType(
        'MultiTokens.Unreserved',
        sts.struct({
            /**
             * The collection id in which token was unreserved
             */
            collectionId: sts.bigint(),
            /**
             * The token id that was unreserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: v1060.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: v1060.RuntimeHoldReason,
        })
    ),
}

export const movedReserves = {
    name: 'MultiTokens.MovedReserves',
    /**
     * Reserved token units were moved
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.MovedReserves',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixEnjinV603.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixEnjinV603.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Reserved token units were moved
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.MovedReserves',
        sts.struct({
            /**
             * The collection id in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The token id that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixEnjinV1022.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixEnjinV1022.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: matrixEnjinV1022.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were moved
     */
    matrixV500: new EventType(
        'MultiTokens.MovedReserves',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixV500.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixV500.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Reserved token units were moved
     */
    matrixV1020: new EventType(
        'MultiTokens.MovedReserves',
        sts.struct({
            /**
             * The collection id in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The token id that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixV1020.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixV1020.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: matrixV1020.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were moved
     */
    matrixV1023: new EventType(
        'MultiTokens.MovedReserves',
        sts.struct({
            /**
             * The collection id in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The token id that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixV1023.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixV1023.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: matrixV1023.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were moved
     */
    enjinV100: new EventType(
        'MultiTokens.MovedReserves',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: enjinV100.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: enjinV100.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Reserved token units were moved
     */
    enjinV1050: new EventType(
        'MultiTokens.MovedReserves',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: enjinV1050.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: enjinV1050.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: enjinV1050.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were moved
     */
    v100: new EventType(
        'MultiTokens.MovedReserves',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: v100.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: v100.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Reserved token units were moved
     */
    v1050: new EventType(
        'MultiTokens.MovedReserves',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: v1050.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: v1050.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: v1050.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were moved
     */
    matrixV1030: new EventType(
        'MultiTokens.MovedReserves',
        sts.struct({
            /**
             * The collection id in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The token id that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixV1030.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixV1030.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: matrixV1030.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were moved
     */
    v1060: new EventType(
        'MultiTokens.MovedReserves',
        sts.struct({
            /**
             * The collection id in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The token id that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: v1060.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: v1060.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: v1060.RuntimeHoldReason,
        })
    ),
}

export const reserveRepatriated = {
    name: 'MultiTokens.ReserveRepatriated',
    /**
     * Reserved token units were transferred
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.ReserveRepatriated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixEnjinV603.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixEnjinV603.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Reserved token units were transferred
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.ReserveRepatriated',
        sts.struct({
            /**
             * The collection id in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The token id that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixEnjinV1022.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixEnjinV1022.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: matrixEnjinV1022.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were transferred
     */
    matrixV500: new EventType(
        'MultiTokens.ReserveRepatriated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixV500.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixV500.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Reserved token units were transferred
     */
    matrixV1020: new EventType(
        'MultiTokens.ReserveRepatriated',
        sts.struct({
            /**
             * The collection id in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The token id that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixV1020.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixV1020.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: matrixV1020.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were transferred
     */
    matrixV1023: new EventType(
        'MultiTokens.ReserveRepatriated',
        sts.struct({
            /**
             * The collection id in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The token id that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixV1023.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixV1023.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: matrixV1023.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were transferred
     */
    enjinV100: new EventType(
        'MultiTokens.ReserveRepatriated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: enjinV100.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: enjinV100.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Reserved token units were transferred
     */
    enjinV1050: new EventType(
        'MultiTokens.ReserveRepatriated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: enjinV1050.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: enjinV1050.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: enjinV1050.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were transferred
     */
    v100: new EventType(
        'MultiTokens.ReserveRepatriated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: v100.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: v100.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Reserved token units were transferred
     */
    v1050: new EventType(
        'MultiTokens.ReserveRepatriated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: v1050.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: v1050.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: v1050.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were transferred
     */
    matrixV1030: new EventType(
        'MultiTokens.ReserveRepatriated',
        sts.struct({
            /**
             * The collection id in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The token id that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixV1030.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixV1030.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: matrixV1030.RuntimeHoldReason,
        })
    ),
    /**
     * Reserved token units were transferred
     */
    v1060: new EventType(
        'MultiTokens.ReserveRepatriated',
        sts.struct({
            /**
             * The collection id in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The token id that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: v1060.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: v1060.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: v1060.RuntimeHoldReason,
        })
    ),
}

export const balanceSet = {
    name: 'MultiTokens.BalanceSet',
    /**
     * The balance of an account was set
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.BalanceSet',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which balance was set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which balance was set
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that balance was set for
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The balance of the account
             */
            balance: sts.bigint(),
            /**
             * The reserved balance of the account
             */
            reservedBalance: sts.bigint(),
        })
    ),
}

export const withdraw = {
    name: 'MultiTokens.Withdraw',
    /**
     * Token units were withdrawn
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Withdraw',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) of the tokens withdrawn
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the tokens withdrawn
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) withdrawn from
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount of tokens withdrawn
             */
            amount: sts.bigint(),
        })
    ),
}

export const deposit = {
    name: 'MultiTokens.Deposit',
    /**
     * Token units were deposited
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Deposit',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) of the tokens deposited
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the tokens deposited
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) deposited to
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount of tokens deposited
             */
            amount: sts.bigint(),
        })
    ),
}

export const slashed = {
    name: 'MultiTokens.Slashed',
    /**
     * An amount of tokens were slashed from account
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Slashed',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) of the tokens slashed
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the tokens slashed
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) slashed
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount of tokens slashed
             */
            amount: sts.bigint(),
        })
    ),
}

export const collectionUpdated = {
    name: 'MultiTokens.CollectionUpdated',
    /**
     * Collection storage was set to `value`
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.CollectionUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: sts.option(() => matrixEnjinV603.Collection),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    matrixEnjinV1012: new EventType(
        'MultiTokens.CollectionUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: sts.option(() => matrixEnjinV1012.Collection),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.CollectionUpdated',
        sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: sts.option(() => matrixEnjinV1022.Collection),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    matrixV500: new EventType(
        'MultiTokens.CollectionUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: sts.option(() => matrixV500.Collection),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    matrixV1010: new EventType(
        'MultiTokens.CollectionUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: sts.option(() => matrixV1010.Collection),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    matrixV1020: new EventType(
        'MultiTokens.CollectionUpdated',
        sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: sts.option(() => matrixV1020.Collection),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    enjinV100: new EventType(
        'MultiTokens.CollectionUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: sts.option(() => enjinV100.Collection),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    enjinV1032: new EventType(
        'MultiTokens.CollectionUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: sts.option(() => enjinV1032.Collection),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    enjinV1050: new EventType(
        'MultiTokens.CollectionUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: sts.option(() => enjinV1050.Collection),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    v100: new EventType(
        'MultiTokens.CollectionUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: sts.option(() => v100.Collection),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    v1030: new EventType(
        'MultiTokens.CollectionUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: sts.option(() => v1030.Collection),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    v1050: new EventType(
        'MultiTokens.CollectionUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: sts.option(() => v1050.Collection),
        })
    ),
    /**
     * Collection storage was set to `value`
     */
    matrixV1030: new EventType(
        'MultiTokens.CollectionUpdated',
        sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: sts.option(() => matrixV1030.Collection),
        })
    ),
}

export const tokenUpdated = {
    name: 'MultiTokens.TokenUpdated',
    /**
     * Token storage was set to `value`
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => matrixEnjinV603.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    matrixEnjinV1012: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => matrixEnjinV1012.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The token id for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => matrixEnjinV1022.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    matrixV500: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => matrixV500.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    matrixV600: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => matrixV600.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    matrixV1010: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => matrixV1010.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    matrixV1020: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The token id for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => matrixV1020.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    enjinV100: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => enjinV100.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    enjinV1032: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => enjinV1032.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    enjinV1050: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => enjinV1050.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    v100: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => v100.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    v102: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => v102.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    v1030: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => v1030.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    v1050: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => v1050.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    matrixV1030: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The token id for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => matrixV1030.Token),
        })
    ),
}

export const nextCollectionIdUpdated = {
    name: 'MultiTokens.NextCollectionIdUpdated',
    /**
     * NextCollectionId storage was set to `collection_id`
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.NextCollectionIdUpdated',
        sts.struct({
            collectionId: sts.bigint(),
        })
    ),
}

export const collectionAccountUpdated = {
    name: 'MultiTokens.CollectionAccountUpdated',
    /**
     * TokenAccount storage was set to `value`
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.CollectionAccountUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => matrixEnjinV603.CollectionAccount),
        })
    ),
}

export const tokenAccountUpdated = {
    name: 'MultiTokens.TokenAccountUpdated',
    /**
     * TokenAccount storage was set to `value`
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => matrixEnjinV603.TokenAccount),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    matrixEnjinV1012: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: matrixEnjinV1012.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => matrixEnjinV1012.TokenAccount),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The token id of the updated account
             */
            tokenId: sts.bigint(),
            /**
             * The account id that owned the token account
             */
            accountId: matrixEnjinV1022.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => matrixEnjinV1022.TokenAccount),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    matrixV500: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: matrixV500.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => matrixV500.TokenAccount),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    matrixV1010: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: matrixV1010.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => matrixV1010.TokenAccount),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    matrixV1020: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The token id of the updated account
             */
            tokenId: sts.bigint(),
            /**
             * The account id that owned the token account
             */
            accountId: matrixV1020.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => matrixV1020.TokenAccount),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    matrixV1023: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The token id of the updated account
             */
            tokenId: sts.bigint(),
            /**
             * The account id that owned the token account
             */
            accountId: matrixV1023.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => matrixV1023.TokenAccount),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    enjinV100: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: enjinV100.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => enjinV100.TokenAccount),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    enjinV1032: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: enjinV1032.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => enjinV1032.TokenAccount),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    enjinV1050: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: enjinV1050.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => enjinV1050.TokenAccount),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    v100: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: v100.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => v100.TokenAccount),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    v1030: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: v1030.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => v1030.TokenAccount),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    v1050: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: v1050.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => v1050.TokenAccount),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    matrixV1030: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The token id of the updated account
             */
            tokenId: sts.bigint(),
            /**
             * The account id that owned the token account
             */
            accountId: matrixV1030.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => matrixV1030.TokenAccount),
        })
    ),
    /**
     * TokenAccount storage was set to `value`
     */
    v1060: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The collection id for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The token id of the updated account
             */
            tokenId: sts.bigint(),
            /**
             * The account id that owned the token account
             */
            accountId: v1060.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => v1060.TokenAccount),
        })
    ),
}

export const migrationStatusUpdated = {
    name: 'MultiTokens.MigrationStatusUpdated',
    /**
     * Migration stage updated
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.MigrationStatusUpdated',
        sts.struct({
            stage: matrixEnjinV603.MigrationStage,
        })
    ),
}

export const claimedCollections = {
    name: 'MultiTokens.ClaimedCollections',
    /**
     * Collections were claimed
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.ClaimedCollections',
        sts.struct({
            /**
             * The account that received the claim
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixEnjinV603.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: sts.array(() => matrixEnjinV603.CollectionIdPair),
        })
    ),
    /**
     * Collections were claimed
     */
    matrixEnjinV1000: new EventType(
        'MultiTokens.ClaimedCollections',
        sts.struct({
            /**
             * The account that received the claim
             */
            accountId: matrixEnjinV1000.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixEnjinV1000.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: sts.array(() => sts.bigint()),
        })
    ),
    /**
     * Collections were claimed
     */
    matrixV604: new EventType(
        'MultiTokens.ClaimedCollections',
        sts.struct({
            /**
             * The account that received the claim
             */
            accountId: matrixV604.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixV604.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: sts.array(() => matrixV604.CollectionIdPair),
        })
    ),
    /**
     * Collections were claimed
     */
    matrixV1000: new EventType(
        'MultiTokens.ClaimedCollections',
        sts.struct({
            /**
             * The account that received the claim
             */
            accountId: matrixV1000.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixV1000.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: sts.array(() => sts.bigint()),
        })
    ),
    /**
     * Collections were claimed
     */
    enjinV101: new EventType(
        'MultiTokens.ClaimedCollections',
        sts.struct({
            /**
             * The account that received the claim
             */
            accountId: enjinV101.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: enjinV101.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: sts.array(() => enjinV101.CollectionIdPair),
        })
    ),
    /**
     * Collections were claimed
     */
    enjinV1021: new EventType(
        'MultiTokens.ClaimedCollections',
        sts.struct({
            /**
             * The account that received the claim
             */
            accountId: enjinV1021.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: enjinV1021.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: sts.array(() => sts.bigint()),
        })
    ),
    /**
     * Collections were claimed
     */
    v106: new EventType(
        'MultiTokens.ClaimedCollections',
        sts.struct({
            /**
             * The account that received the claim
             */
            accountId: v106.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: v106.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: sts.array(() => v106.CollectionIdPair),
        })
    ),
    /**
     * Collections were claimed
     */
    v1021: new EventType(
        'MultiTokens.ClaimedCollections',
        sts.struct({
            /**
             * The account that received the claim
             */
            accountId: v1021.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: v1021.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: sts.array(() => sts.bigint()),
        })
    ),
}

export const claimedTokens = {
    name: 'MultiTokens.ClaimedTokens',
    /**
     * Tokens were claimed
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.ClaimedTokens',
        sts.struct({
            /**
             * The account that received the tokens
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixEnjinV603.H160,
            /**
             * The asset ids that were claimed
             */
            assetIds: sts.array(() => matrixEnjinV603.AssetIdWithEth),
            /**
             * This is true if there are still more tokens to claim
             */
            moreTokensRemain: sts.boolean(),
        })
    ),
}

export const claimTokensInitiated = {
    name: 'MultiTokens.ClaimTokensInitiated',
    /**
     * Claims tokens initiated
     */
    matrixEnjinV1000: new EventType(
        'MultiTokens.ClaimTokensInitiated',
        sts.struct({
            /**
             * The account that will receive the tokens
             */
            accountId: matrixEnjinV1000.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixEnjinV1000.H160,
        })
    ),
}

export const claimTokensCompleted = {
    name: 'MultiTokens.ClaimTokensCompleted',
    /**
     * Finished claiming the tokens
     */
    matrixEnjinV1000: new EventType(
        'MultiTokens.ClaimTokensCompleted',
        sts.struct({
            /**
             * The account that received the tokens
             */
            destination: matrixEnjinV1000.AccountId32,
            /**
             * The ethereum address that initiated the claim
             */
            ethereumAddress: matrixEnjinV1000.H160,
        })
    ),
}

export const collectionTransferred = {
    name: 'MultiTokens.CollectionTransferred',
    /**
     * Collection ownership was transferred
     */
    matrixEnjinV1004: new EventType(
        'MultiTokens.CollectionTransferred',
        sts.struct({
            /**
             * The collection that was transferred
             */
            collectionId: sts.bigint(),
            /**
             * The new owner of the collection
             */
            newOwner: matrixEnjinV1004.AccountId32,
        })
    ),
}

export const collectionTransferCancelled = {
    name: 'MultiTokens.CollectionTransferCancelled',
    /**
     * A pending collection transfer was cancelled
     */
    matrixEnjinV1004: new EventType(
        'MultiTokens.CollectionTransferCancelled',
        sts.struct({
            /**
             * The collection id of the cancelled transfer
             */
            collectionId: sts.bigint(),
        })
    ),
}

export const tokenAccountDepositUpdated = {
    name: 'MultiTokens.TokenAccountDepositUpdated',
    /**
     * The deposit for number of accounts supported by a token changed
     */
    matrixEnjinV1012: new EventType(
        'MultiTokens.TokenAccountDepositUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the account is created
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) fof the destroyed account
             */
            tokenId: sts.bigint(),
            /**
             * The account that deposited or removed deposit
             */
            depositor: matrixEnjinV1012.AccountId32,
            /**
             * The change in the number of accounts
             */
            deltaAccountCount: sts.number(),
        })
    ),
}

export const infused = {
    name: 'MultiTokens.Infused',
    /**
     * The token was infused with ENJ
     */
    matrixEnjinV1012: new EventType(
        'MultiTokens.Infused',
        sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: matrixEnjinV1012.AccountId32,
            /**
             * The amount that was infused
             */
            amount: sts.bigint(),
        })
    ),
    /**
     * The token was infused with ENJ
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.Infused',
        sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: matrixEnjinV1022.RootOrSigned,
            /**
             * The amount that was infused
             */
            amount: sts.bigint(),
        })
    ),
    /**
     * The token was infused with ENJ
     */
    matrixV1010: new EventType(
        'MultiTokens.Infused',
        sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: matrixV1010.AccountId32,
            /**
             * The amount that was infused
             */
            amount: sts.bigint(),
        })
    ),
    /**
     * The token was infused with ENJ
     */
    matrixV1020: new EventType(
        'MultiTokens.Infused',
        sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: matrixV1020.RootOrSigned,
            /**
             * The amount that was infused
             */
            amount: sts.bigint(),
        })
    ),
    /**
     * The token was infused with ENJ
     */
    enjinV1032: new EventType(
        'MultiTokens.Infused',
        sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: enjinV1032.AccountId32,
            /**
             * The amount that was infused
             */
            amount: sts.bigint(),
        })
    ),
    /**
     * The token was infused with ENJ
     */
    enjinV1050: new EventType(
        'MultiTokens.Infused',
        sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: enjinV1050.RootOrSigned,
            /**
             * The amount that was infused
             */
            amount: sts.bigint(),
        })
    ),
    /**
     * The token was infused with ENJ
     */
    v1030: new EventType(
        'MultiTokens.Infused',
        sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: v1030.AccountId32,
            /**
             * The amount that was infused
             */
            amount: sts.bigint(),
        })
    ),
    /**
     * The token was infused with ENJ
     */
    v1050: new EventType(
        'MultiTokens.Infused',
        sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: v1050.RootOrSigned,
            /**
             * The amount that was infused
             */
            amount: sts.bigint(),
        })
    ),
    /**
     * The token was infused with ENJ
     */
    matrixV1030: new EventType(
        'MultiTokens.Infused',
        sts.struct({
            /**
             * The collection that was infused
             */
            collectionId: sts.bigint(),
            /**
             * The token that was infused
             */
            tokenId: sts.bigint(),
            /**
             * The account that infused the token
             */
            accountId: matrixV1030.RootOrSigned,
            /**
             * The amount that was infused. This is the total infusion that was added, not the per
             * unit amount.
             */
            totalAmount: sts.bigint(),
        })
    ),
}

export const migrationStep = {
    name: 'MultiTokens.MigrationStep',
    /**
     * The migration step has completed
     */
    matrixEnjinV1012: new EventType(
        'MultiTokens.MigrationStep',
        sts.struct({
            /**
             * The number of items processed within this step
             */
            itemsProcessed: sts.number(),
            /**
             * The migration phase
             */
            phase: sts.number(),
        })
    ),
}

export const collectionDepositRecalculationInProgress = {
    name: 'MultiTokens.CollectionDepositRecalculationInProgress',
    /**
     * Collection deposit update in progress
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.CollectionDepositRecalculationInProgress',
        sts.struct({
            /**
             * The collection id
             */
            collectionId: sts.bigint(),
            /**
             * The number of tokens processed
             */
            processedTokens: sts.number(),
            /**
             * The number of attributes processed
             */
            processedAttributes: sts.number(),
        })
    ),
}

export const collectionDepositUpdateCompleted = {
    name: 'MultiTokens.CollectionDepositUpdateCompleted',
    /**
     * Collection deposit update completed
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.CollectionDepositUpdateCompleted',
        sts.struct({
            /**
             * The collection id
             */
            collectionId: sts.bigint(),
        })
    ),
}

export const tokenAccountUpgraded = {
    name: 'MultiTokens.TokenAccountUpgraded',
    /**
     * A token account was upgraded
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.TokenAccountUpgraded',
        sts.struct({
            /**
             * The account's collection id
             */
            collectionId: sts.bigint(),
            /**
             * The account's token id
             */
            tokenId: sts.bigint(),
            /**
             * The holder of the account
             */
            accountId: matrixEnjinV1022.AccountId32,
            /**
             * The version of the storage this element was migrated to
             */
            storageVersion: sts.number(),
        })
    ),
}

export const tokenUpgraded = {
    name: 'MultiTokens.TokenUpgraded',
    /**
     * A token was upgraded
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.TokenUpgraded',
        sts.struct({
            /**
             * The collection id of the token
             */
            collectionId: sts.bigint(),
            /**
             * The token id
             */
            tokenId: sts.bigint(),
            /**
             * The version of the storage this element was migrated to
             */
            storageVersion: sts.number(),
        })
    ),
}

export const collectionUpgraded = {
    name: 'MultiTokens.CollectionUpgraded',
    /**
     * A collection was upgraded
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.CollectionUpgraded',
        sts.struct({
            /**
             * The collection id
             */
            collectionId: sts.bigint(),
            /**
             * The version of the storage this element was migrated to
             */
            storageVersion: sts.number(),
        })
    ),
}

export const collectionAccountApprovalsUpdated = {
    name: 'MultiTokens.CollectionAccountApprovalsUpdated',
    /**
     * A collection was upgraded
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.CollectionAccountApprovalsUpdated',
        sts.struct({
            /**
             * The collection id
             */
            collectionId: sts.bigint(),
            /**
             * The account that owns the collection
             */
            accountId: matrixEnjinV1022.AccountId32,
            /**
             * Approval expirations before the update call
             */
            oldApprovals: sts.array(() =>
                sts.tuple(() => [matrixEnjinV1022.AccountId32, sts.option(() => sts.number())])
            ),
        })
    ),
}

export const collectionAccountApprovalsMismatch = {
    name: 'MultiTokens.CollectionAccountApprovalsMismatch',
    /**
     * A given collection expiration list doesn't its current approvals
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.CollectionAccountApprovalsMismatch',
        sts.struct({
            /**
             * The collection id
             */
            collectionId: sts.bigint(),
            /**
             * The account that owns the collection
             */
            accountId: matrixEnjinV1022.AccountId32,
        })
    ),
}

export const tokenGroupCreated = {
    name: 'MultiTokens.TokenGroupCreated',
    /**
     * A new token group was created
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.TokenGroupCreated',
        sts.struct({
            /**
             * collection where the token group belongs
             */
            collectionId: sts.bigint(),
            /**
             * id of the token group
             */
            tokenGroupId: sts.bigint(),
        })
    ),
}

export const tokenGroupDestroyed = {
    name: 'MultiTokens.TokenGroupDestroyed',
    /**
     * A token group was destroyed
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.TokenGroupDestroyed',
        sts.struct({
            /**
             * id of the token group
             */
            tokenGroupId: sts.bigint(),
        })
    ),
}

export const tokenGroupAdded = {
    name: 'MultiTokens.TokenGroupAdded',
    /**
     * A token was added to a group
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.TokenGroupAdded',
        sts.struct({
            /**
             * collection id of the token
             */
            collectionId: sts.bigint(),
            /**
             * id of the token
             */
            tokenId: sts.bigint(),
            /**
             * id of the token group
             */
            tokenGroupId: sts.bigint(),
        })
    ),
}

export const tokenGroupRemoved = {
    name: 'MultiTokens.TokenGroupRemoved',
    /**
     * A token was removed from a group
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.TokenGroupRemoved',
        sts.struct({
            /**
             * collection id of the token
             */
            collectionId: sts.bigint(),
            /**
             * id of the token
             */
            tokenId: sts.bigint(),
            /**
             * id of the token group
             */
            tokenGroupId: sts.bigint(),
        })
    ),
}

export const tokenGroupsUpdated = {
    name: 'MultiTokens.TokenGroupsUpdated',
    /**
     * A token's group list was set
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.TokenGroupsUpdated',
        sts.struct({
            /**
             * collection id of the group
             */
            collectionId: sts.bigint(),
            /**
             * token id of the groups
             */
            tokenId: sts.bigint(),
            /**
             * ids of the token groups
             */
            tokenGroups: sts.array(() => sts.bigint()),
        })
    ),
}

export const tokenGroupAttributeSet = {
    name: 'MultiTokens.TokenGroupAttributeSet',
    /**
     * New attribute has been set on a token group
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.TokenGroupAttributeSet',
        sts.struct({
            /**
             * id of the token group
             */
            tokenGroupId: sts.bigint(),
            /**
             * key of attribute set
             */
            key: sts.bytes(),
            /**
             * value of attribute set
             */
            value: sts.bytes(),
        })
    ),
}

export const tokenGroupAttributeRemoved = {
    name: 'MultiTokens.TokenGroupAttributeRemoved',
    /**
     * An attribute has been removed from a token group
     */
    matrixEnjinV1022: new EventType(
        'MultiTokens.TokenGroupAttributeRemoved',
        sts.struct({
            /**
             * id of the token group
             */
            tokenGroupId: sts.bigint(),
            /**
             * key of attribute cleared
             */
            key: sts.bytes(),
        })
    ),
}
