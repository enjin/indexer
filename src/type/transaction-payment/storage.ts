import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1043 from '../matrixEnjinV1043'
import * as enjinV1080 from '../enjinV1080'
import * as v1080 from '../v1080'

export const nextFeeMultiplier = {
    matrixEnjinV603: new StorageType(
        'TransactionPayment.NextFeeMultiplier',
        'Default',
        [],
        matrixEnjinV603.FixedU128
    ) as NextFeeMultiplierMatrixEnjinV603,
}

export interface NextFeeMultiplierMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.FixedU128
    get(block: Block): Promise<matrixEnjinV603.FixedU128 | undefined>
}

export const storageVersion = {
    matrixEnjinV603: new StorageType(
        'TransactionPayment.StorageVersion',
        'Default',
        [],
        matrixEnjinV603.Releases
    ) as StorageVersionMatrixEnjinV603,
}

export interface StorageVersionMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.Releases
    get(block: Block): Promise<matrixEnjinV603.Releases | undefined>
}

export const txPaymentCredit = {
    /**
     *  The `OnChargeTransaction` stores the withdrawn tx fee here.
     *
     *  Use `withdraw_txfee` and `remaining_txfee` to access from outside the crate.
     */
    matrixEnjinV1043: new StorageType(
        'TransactionPayment.TxPaymentCredit',
        'Optional',
        [],
        matrixEnjinV1043.NoDrop
    ) as TxPaymentCreditMatrixEnjinV1043,
    /**
     *  The `OnChargeTransaction` stores the withdrawn tx fee here.
     *
     *  Use `withdraw_txfee` and `remaining_txfee` to access from outside the crate.
     */
    enjinV1070: new StorageType(
        'TransactionPayment.TxPaymentCredit',
        'Optional',
        [],
        sts.unit()
    ) as TxPaymentCreditEnjinV1070,
    /**
     *  The `OnChargeTransaction` stores the withdrawn tx fee here.
     *
     *  Use `withdraw_txfee` and `remaining_txfee` to access from outside the crate.
     */
    enjinV1080: new StorageType(
        'TransactionPayment.TxPaymentCredit',
        'Optional',
        [],
        enjinV1080.NoDrop
    ) as TxPaymentCreditEnjinV1080,
    /**
     *  The `OnChargeTransaction` stores the withdrawn tx fee here.
     *
     *  Use `withdraw_txfee` and `remaining_txfee` to access from outside the crate.
     */
    v1070: new StorageType('TransactionPayment.TxPaymentCredit', 'Optional', [], sts.unit()) as TxPaymentCreditV1070,
    /**
     *  The `OnChargeTransaction` stores the withdrawn tx fee here.
     *
     *  Use `withdraw_txfee` and `remaining_txfee` to access from outside the crate.
     */
    v1080: new StorageType('TransactionPayment.TxPaymentCredit', 'Optional', [], v1080.NoDrop) as TxPaymentCreditV1080,
}

/**
 *  The `OnChargeTransaction` stores the withdrawn tx fee here.
 *
 *  Use `withdraw_txfee` and `remaining_txfee` to access from outside the crate.
 */
export interface TxPaymentCreditMatrixEnjinV1043 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV1043.NoDrop | undefined>
}

/**
 *  The `OnChargeTransaction` stores the withdrawn tx fee here.
 *
 *  Use `withdraw_txfee` and `remaining_txfee` to access from outside the crate.
 */
export interface TxPaymentCreditEnjinV1070 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<null | undefined>
}

/**
 *  The `OnChargeTransaction` stores the withdrawn tx fee here.
 *
 *  Use `withdraw_txfee` and `remaining_txfee` to access from outside the crate.
 */
export interface TxPaymentCreditEnjinV1080 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<enjinV1080.NoDrop | undefined>
}

/**
 *  The `OnChargeTransaction` stores the withdrawn tx fee here.
 *
 *  Use `withdraw_txfee` and `remaining_txfee` to access from outside the crate.
 */
export interface TxPaymentCreditV1070 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<null | undefined>
}

/**
 *  The `OnChargeTransaction` stores the withdrawn tx fee here.
 *
 *  Use `withdraw_txfee` and `remaining_txfee` to access from outside the crate.
 */
export interface TxPaymentCreditV1080 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<v1080.NoDrop | undefined>
}
