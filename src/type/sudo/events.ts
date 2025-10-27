import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV101 from '../enjinV101'
import * as v104 from '../v104'
import * as v105 from '../v105'
import * as matrixV500 from '../matrixV500'
import * as matrixV602 from '../matrixV602'
import * as matrixV1000 from '../matrixV1000'
import * as matrixV1010 from '../matrixV1010'
import * as matrixV1030 from '../matrixV1030'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'
import * as v1060 from '../v1060'

export const sudid = {
    name: 'Sudo.Sudid',
    /**
     * A sudo just took place. \[result\]
     */
    matrixV500: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => matrixV500.DispatchError
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    matrixV602: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => matrixV602.DispatchError
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    matrixV1000: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => matrixV1000.DispatchError
            ),
        })
    ),
    /**
     * A sudo call just took place.
     */
    matrixV1030: new EventType(
        'Sudo.Sudid',
        sts.struct({
            /**
             * The result of the call made by the sudo user.
             */
            sudoResult: sts.result(
                () => sts.unit(),
                () => matrixV1030.DispatchError
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    enjinV100: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => enjinV100.DispatchError
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    enjinV101: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => enjinV101.DispatchError
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v100: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => v100.DispatchError
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v104: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => v104.DispatchError
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v105: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => v105.DispatchError
            ),
        })
    ),
    /**
     * A sudo call just took place.
     */
    v1060: new EventType(
        'Sudo.Sudid',
        sts.struct({
            /**
             * The result of the call made by the sudo user.
             */
            sudoResult: sts.result(
                () => sts.unit(),
                () => v1060.DispatchError
            ),
        })
    ),
}

export const keyChanged = {
    name: 'Sudo.KeyChanged',
    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    matrixV500: new EventType(
        'Sudo.KeyChanged',
        sts.struct({
            oldSudoer: sts.option(() => matrixV500.AccountId32),
        })
    ),
    /**
     * The sudo key has been updated.
     */
    matrixV1010: new EventType(
        'Sudo.KeyChanged',
        sts.struct({
            /**
             * The old sudo key (if one was previously set).
             */
            old: sts.option(() => matrixV1010.AccountId32),
            /**
             * The new sudo key (if one was set).
             */
            new: matrixV1010.AccountId32,
        })
    ),
    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    enjinV100: new EventType(
        'Sudo.KeyChanged',
        sts.struct({
            oldSudoer: sts.option(() => enjinV100.AccountId32),
        })
    ),
    /**
     * The sudo key has been updated.
     */
    enjinV1032: new EventType(
        'Sudo.KeyChanged',
        sts.struct({
            /**
             * The old sudo key (if one was previously set).
             */
            old: sts.option(() => enjinV1032.AccountId32),
            /**
             * The new sudo key (if one was set).
             */
            new: enjinV1032.AccountId32,
        })
    ),
    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    v100: new EventType(
        'Sudo.KeyChanged',
        sts.struct({
            oldSudoer: sts.option(() => v100.AccountId32),
        })
    ),
    /**
     * The sudo key has been updated.
     */
    v1030: new EventType(
        'Sudo.KeyChanged',
        sts.struct({
            /**
             * The old sudo key (if one was previously set).
             */
            old: sts.option(() => v1030.AccountId32),
            /**
             * The new sudo key (if one was set).
             */
            new: v1030.AccountId32,
        })
    ),
}

export const sudoAsDone = {
    name: 'Sudo.SudoAsDone',
    /**
     * A sudo just took place. \[result\]
     */
    matrixV500: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => matrixV500.DispatchError
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    matrixV602: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => matrixV602.DispatchError
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    matrixV1000: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => matrixV1000.DispatchError
            ),
        })
    ),
    /**
     * A [sudo_as](Pallet::sudo_as) call just took place.
     */
    matrixV1030: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            /**
             * The result of the call made by the sudo user.
             */
            sudoResult: sts.result(
                () => sts.unit(),
                () => matrixV1030.DispatchError
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    enjinV100: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => enjinV100.DispatchError
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    enjinV101: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => enjinV101.DispatchError
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v100: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => v100.DispatchError
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v104: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => v104.DispatchError
            ),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v105: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(
                () => sts.unit(),
                () => v105.DispatchError
            ),
        })
    ),
    /**
     * A [sudo_as](Pallet::sudo_as) call just took place.
     */
    v1060: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            /**
             * The result of the call made by the sudo user.
             */
            sudoResult: sts.result(
                () => sts.unit(),
                () => v1060.DispatchError
            ),
        })
    ),
}

export const keyRemoved = {
    name: 'Sudo.KeyRemoved',
    /**
     * The key was permanently removed.
     */
    matrixV1010: new EventType('Sudo.KeyRemoved', sts.unit()),
}
