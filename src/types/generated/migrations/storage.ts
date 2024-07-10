import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV1010 from '../matrixEnjinV1010'

export const cursor =  {
    /**
     *  The currently active migration to run and its cursor.
     * 
     *  `None` indicates that no migration is running.
     */
    matrixEnjinV1010: new StorageType('Migrations.Cursor', 'Optional', [], matrixEnjinV1010.MigrationCursor) as CursorMatrixEnjinV1010,
}

/**
 *  The currently active migration to run and its cursor.
 * 
 *  `None` indicates that no migration is running.
 */
export interface CursorMatrixEnjinV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(matrixEnjinV1010.MigrationCursor | undefined)>
}

export const historic =  {
    /**
     *  Set of all successfully executed migrations.
     * 
     *  This is used as blacklist, to not re-execute migrations that have not been removed from the
     *  codebase yet. Governance can regularly clear this out via `clear_historic`.
     */
    matrixEnjinV1010: new StorageType('Migrations.Historic', 'Optional', [sts.bytes()], sts.unit()) as HistoricMatrixEnjinV1010,
}

/**
 *  Set of all successfully executed migrations.
 * 
 *  This is used as blacklist, to not re-execute migrations that have not been removed from the
 *  codebase yet. Governance can regularly clear this out via `clear_historic`.
 */
export interface HistoricMatrixEnjinV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<(null | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: (null | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: (null | undefined)][]>
}
