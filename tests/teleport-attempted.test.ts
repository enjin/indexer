import assert from 'node:assert/strict'
import test from 'node:test'
import type { VersionedAssets, VersionedLocation } from '~/pallet/common/xcm'
import { getRuntimeCached } from '~/decoder/metadata'
import { nativeTeleportAmount, teleportBeneficiary } from '~/pallet/common/teleport'

const beneficiary = `0x${'22'.repeat(32)}`
const amount = '10000000000000000000'

function teleportArgs(chain: 'matrix' | 'relay', version: 'V3' | 'V4') {
    const destination =
        chain === 'matrix'
            ? { __kind: 'Here' }
            : {
                  __kind: 'X1',
                  value:
                      version === 'V3' ? { __kind: 'Parachain', value: 1000 } : [{ __kind: 'Parachain', value: 1000 }],
              }
    const assetLocation = { parents: chain === 'matrix' ? 1 : 0, interior: { __kind: 'Here' } }

    return {
        dest: { __kind: version, value: { parents: chain === 'matrix' ? 1 : 0, interior: destination } },
        beneficiary: {
            __kind: version,
            value: {
                parents: 0,
                interior: {
                    __kind: 'X1',
                    value:
                        version === 'V3'
                            ? { __kind: 'AccountId32', id: beneficiary }
                            : [{ __kind: 'AccountId32', id: beneficiary }],
                },
            },
        },
        assets: {
            __kind: version,
            value: [
                {
                    id: version === 'V3' ? { __kind: 'Concrete', value: assetLocation } : assetLocation,
                    fun: { __kind: 'Fungible', value: amount },
                },
            ],
        },
        feeAssetItem: 0,
        weightLimit: { __kind: 'Unlimited' },
    }
}

for (const [chain, network, oldSpec, newSpec, pallet] of [
    ['matrix', 'canary-matrixchain', 1040, 1041, 'PolkadotXcm'],
    ['relay', 'canary-relaychain', 1070, 1080, 'XcmPallet'],
] as const) {
    for (const [version, spec] of [
        ['V3', oldSpec],
        ['V4', newSpec],
    ] as const) {
        void test(`${chain} ${version} teleport call normalizes beneficiary and native amount`, async () => {
            const runtime = await getRuntimeCached(network, spec)
            const call = {
                name: `${pallet}.limited_teleport_assets`,
                args: teleportArgs(chain, version),
            }
            const decoded = runtime.decodeJsonCallRecordArguments(call) as {
                beneficiary: VersionedLocation
                assets: VersionedAssets
            }

            assert.equal(teleportBeneficiary(decoded.beneficiary), beneficiary)
            assert.equal(nativeTeleportAmount(decoded.assets), BigInt(amount))
        })
    }
}

void test('teleport normalization rejects a non-account beneficiary and non-native asset', () => {
    const location = {
        __kind: 'V4',
        value: { parents: 0, interior: { __kind: 'X1', value: [{ __kind: 'Parachain', value: 1000 }] } },
    } as VersionedLocation
    const assets = {
        __kind: 'V4',
        value: [
            {
                id: { parents: 0, interior: { __kind: 'X1', value: [{ __kind: 'Parachain', value: 1000 }] } },
                fun: { __kind: 'Fungible', value: 1n },
            },
        ],
    } as VersionedAssets

    assert.equal(teleportBeneficiary(location), null)
    assert.equal(nativeTeleportAmount(assets), null)
})
