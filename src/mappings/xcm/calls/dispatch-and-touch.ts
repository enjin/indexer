// import { UnsupportedCallError, UnsupportedEventError } from '@enjin/indexer/common/errors'
// import { calls } from '../../../types/generated'
// import { CallItem } from '@enjin/indexer/common/types/contexts'
// import { match } from 'ts-pattern'
//
// export async function teleportAssets(call: CallItem) {
//     return match(call)
//         .returnType<>()
//         .when(calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV1012.is, () => calls.polkadotXcm.limitedTeleportAssets.matrixEnjinV1012.decode(call))
//         .otherwise(() => {
//             throw new UnsupportedCallError(call)
//         })
//
//     if (call.name === 'FuelTanks.dispatch_and_touch' || call.name === 'FuelTanks.dispatch') {
//         const data = call.name === 'FuelTanks.dispatch' ? calls.fuelTanks.dispatch : calls.fuelTanks.dispatchAndTouch
//
//         let callData: any = null
//
//         if (data.matrixEnjinV1012.is(call)) {
//             callData = data.matrixEnjinV1012.decode(call)
//         }
//         if (data.matrixEnjinV1005.is(call)) {
//             callData = data.matrixEnjinV1005.decode(call)
//         }
//         if (data.matrixEnjinV1004.is(call)) {
//             callData = data.matrixEnjinV1004.decode(call)
//         }
//         if (data.matrixEnjinV1003.is(call)) {
//             callData = data.matrixEnjinV1003.decode(call)
//         }
//         if (data.matrixEnjinV1000.is(call)) {
//             callData = data.matrixEnjinV1000.decode(call)
//         }
//         if (data.matrixEnjinV603.is(call)) {
//             callData = data.matrixEnjinV603.decode(call)
//         }
//
//         if (data.v1012.is(call)) {
//             callData = data.v1012.decode(call)
//         }
//         if (data.v1011.is(call)) {
//             callData = data.v1011.decode(call)
//         }
//         if (data.v1010.is(call)) {
//             callData = data.v1010.decode(call)
//         }
//         if (data.v1005.is(call)) {
//             callData = data.v1005.decode(call)
//         }
//         if (data.v1004.is(call)) {
//             callData = data.v1004.decode(call)
//         }
//         if (data.v1003.is(call)) {
//             callData = data.v1003.decode(call)
//         }
//         if (data.v1000.is(call)) {
//             callData = data.v1000.decode(call)
//         }
//         if (data.v604.is(call)) {
//             callData = data.v604.decode(call)
//         }
//         if (data.v602.is(call)) {
//             callData = data.v602.decode(call)
//         }
//         if (data.v601.is(call)) {
//             callData = data.v601.decode(call)
//         }
//         if (data.v600.is(call)) {
//             callData = data.v600.decode(call)
//         }
//         if (data.v500.is(call)) {
//             callData = data.v500.decode(call)
//         }
//
//         if (
//             callData?.call.__kind === 'PolkadotXcm' &&
//             ['teleport_assets', 'limited_teleport_assets'].includes(callData?.call.value.__kind)
//         ) {
//             return callData!.call.value
//         }
//     }
//
//     throw new UnsupportedCallError(call)
// }
