import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const maxKeyLen = {
    /**
     *  Maximal number of bytes that a key can have.
     *
     *  FRAME itself does not limit the key length.
     *  The concrete value must therefore depend on your storage usage.
     *  A [`frame_support::storage::StorageNMap`] for example can have an arbitrary number of
     *  keys which are then hashed and concatenated, resulting in arbitrarily long keys.
     *
     *  Use the *state migration RPC* to retrieve the length of the longest key in your
     *  storage: <https://github.com/paritytech/substrate/issues/11642>
     *
     *  The migration will halt with a `Halted` event if this value is too small.
     *  Since there is no real penalty from over-estimating, it is advised to use a large
     *  value. The default is 512 byte.
     *
     *  Some key lengths for reference:
     *  - [`frame_support::storage::StorageValue`]: 32 byte
     *  - [`frame_support::storage::StorageMap`]: 64 byte
     *  - [`frame_support::storage::StorageDoubleMap`]: 96 byte
     *
     *  For more info see
     *  <https://www.shawntabrizi.com/blog/substrate/querying-substrate-storage-via-rpc/>
     */
    matrixV1023: new ConstantType('StateTrieMigration.MaxKeyLen', sts.number()),
}
