import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'

export const cursorMaxLen =  {
    /**
     *  The maximal length of an encoded cursor.
     * 
     *  A good default needs to selected such that no migration will ever have a cursor with MEL
     *  above this limit. This is statically checked in `integrity_test`.
     */
    matrixEnjinV1012: new ConstantType(
        'Migrations.CursorMaxLen',
        sts.number()
    ),
}

export const identifierMaxLen =  {
    /**
     *  The maximal length of an encoded identifier.
     * 
     *  A good default needs to selected such that no migration will ever have an identifier
     *  with MEL above this limit. This is statically checked in `integrity_test`.
     */
    matrixEnjinV1012: new ConstantType(
        'Migrations.IdentifierMaxLen',
        sts.number()
    ),
}
