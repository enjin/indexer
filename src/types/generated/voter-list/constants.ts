import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'

export const bagThresholds =  {
    /**
     *  The list of thresholds separating the various bags.
     * 
     *  Ids are separated into unsorted bags according to their score. This specifies the
     *  thresholds separating the bags. An id's bag is the largest bag for which the id's score
     *  is less than or equal to its upper threshold.
     * 
     *  When ids are iterated, higher bags are iterated completely before lower bags. This means
     *  that iteration is _semi-sorted_: ids of higher score tend to come before ids of lower
     *  score, but peer ids within a particular bag are sorted in insertion order.
     * 
     *  # Expressing the constant
     * 
     *  This constant must be sorted in strictly increasing order. Duplicate items are not
     *  permitted.
     * 
     *  There is an implied upper limit of `Score::MAX`; that value does not need to be
     *  specified within the bag. For any two threshold lists, if one ends with
     *  `Score::MAX`, the other one does not, and they are otherwise equal, the two
     *  lists will behave identically.
     * 
     *  # Calculation
     * 
     *  It is recommended to generate the set of thresholds in a geometric series, such that
     *  there exists some constant ratio such that `threshold[k + 1] == (threshold[k] *
     *  constant_ratio).max(threshold[k] + 1)` for all `k`.
     * 
     *  The helpers in the `/utils/frame/generate-bags` module can simplify this calculation.
     * 
     *  # Examples
     * 
     *  - If `BagThresholds::get().is_empty()`, then all ids are put into the same bag, and
     *    iteration is strictly in insertion order.
     *  - If `BagThresholds::get().len() == 64`, and the thresholds are determined according to
     *    the procedure given above, then the constant ratio is equal to 2.
     *  - If `BagThresholds::get().len() == 200`, and the thresholds are determined according to
     *    the procedure given above, then the constant ratio is approximately equal to 1.248.
     *  - If the threshold list begins `[1, 2, 3, ...]`, then an id with score 0 or 1 will fall
     *    into bag 0, an id with score 2 will fall into bag 1, etc.
     * 
     *  # Migration
     * 
     *  In the event that this list ever changes, a copy of the old bags list must be retained.
     *  With that `List::migrate` can be called, which will perform the appropriate migration.
     */
    enjinV100: new ConstantType(
        'VoterList.BagThresholds',
        sts.array(() => sts.bigint())
    ),
}
