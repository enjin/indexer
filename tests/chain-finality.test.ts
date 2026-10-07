import assert from 'node:assert/strict'
import test from 'node:test'
import type { FindOperator } from 'typeorm'
import { ChainInfo, Config } from '~/model'
import { chainState } from '~/chain-state'
import type { CommonContext } from '~/contexts'
import config from '~/util/config'
import Rpc from '~/util/rpc'

void test('a finality jump marks every canonical block and leaves a replaced block unfinalized', async (t) => {
    let finalizedHeight = 103
    const canonicalHashes = new Map([
        [100, '0x100'],
        [101, '0xcanonical101'],
        [102, '0x102'],
        [103, '0x103'],
        [104, '0x104'],
        [300, '0x300'],
    ])
    const rpcHeights: number[] = []
    const numeric = (value: number) => ({
        toNumber: () => value,
        toBigInt: () => BigInt(value),
        toString: () => String(value),
    })
    const api = {
        consts: {
            system: { version: { transactionVersion: numeric(1) } },
            balances: { existentialDeposit: numeric(1) },
            marketplace: {
                listingActiveDelay: numeric(1),
                listingDeposit: numeric(1),
                maxRoundingError: numeric(1),
                maxSaltLength: numeric(1),
                minimumBidIncreasePercentage: numeric(1),
            },
        },
        rpc: {
            chain: {
                getFinalizedHead: () => Promise.resolve('0x103'),
                getHeader: () => Promise.resolve({ number: numeric(finalizedHeight) }),
                getBlockHash: (height: number) => {
                    rpcHeights.push(height)
                    return Promise.resolve(canonicalHashes.get(height))
                },
            },
        },
    }
    t.mock.method(Rpc, 'getInstance', () => Promise.resolve({ api } as unknown as Rpc))

    const blocks = new Map(
        [
            [100, '0x100'],
            [101, '0xreplaced101'],
            [102, '0x102'],
            [103, '0x103'],
        ].map(([height, hash]) => [
            hash,
            new ChainInfo({
                id: String(hash),
                genesisHash: config.genesisHash,
                blockNumber: Number(height),
                blockHash: String(hash),
                finalized: false,
            }),
        ])
    )
    let checkpoint: Config | undefined
    const warnings: string[] = []
    const ctx = {
        isHead: true,
        log: { warn: (message: string) => warnings.push(message) },
        store: {
            findOneBy: () => Promise.resolve(checkpoint),
            find: (
                _entity: typeof ChainInfo,
                options: {
                    where: Array<{ blockNumber: FindOperator<number>; finalized: boolean | FindOperator<boolean> }>
                    take: number
                }
            ) => {
                const [lower, upper] = options.where[0].blockNumber.value as number[]
                return Promise.resolve(
                    [...blocks.values()]
                        .filter(
                            (block) =>
                                block.blockNumber >= lower && block.blockNumber <= upper && block.finalized !== true
                        )
                        .sort((a, b) => a.blockNumber - b.blockNumber)
                        .slice(0, options.take)
                        .map((block) => new ChainInfo(block))
                )
            },
            save: (input: ChainInfo | ChainInfo[] | Config) => {
                for (const block of Array.isArray(input) ? input : [input]) {
                    if (block instanceof Config) checkpoint = block
                    else blocks.set(block.id, block)
                }
                return Promise.resolve()
            },
        },
    } as unknown as CommonContext

    await chainState(ctx, {
        hash: '0x104',
        height: 104,
        specVersion: 1,
        timestamp: Date.now(),
        validator: null,
    } as Parameters<typeof chainState>[1])

    assert.equal(blocks.get('0x100')?.finalized, true)
    assert.equal(blocks.get('0xreplaced101')?.finalized, false)
    assert.equal(blocks.get('0x102')?.finalized, true)
    assert.equal(blocks.get('0x103')?.finalized, true)
    assert.equal(blocks.get('0x104')?.finalized, false)
    assert.match(warnings[0], /0xreplaced101 is not canonical/)
    assert.deepEqual(
        rpcHeights.sort((a, b) => a - b),
        [100, 101, 102, 103]
    )
    assert.equal(checkpoint?.stateBlock, 103)

    blocks.set(
        '0x300',
        new ChainInfo({
            id: '0x300',
            genesisHash: config.genesisHash,
            blockNumber: 300,
            blockHash: '0x300',
            finalized: false,
        })
    )
    finalizedHeight = 1000
    await chainState(ctx, {
        hash: '0x1001',
        height: 1001,
        specVersion: 1,
        timestamp: Date.now(),
        validator: null,
    } as Parameters<typeof chainState>[1])

    assert.equal(blocks.get('0x300')?.finalized, true, 'a large finalized-head jump must not skip old pending blocks')
    assert.equal(checkpoint.stateBlock, 1000)

    canonicalHashes.set(1001, '0x1001')
    for (let height = 1002; height <= 1131; height++) {
        const hash = `0x${height}`
        canonicalHashes.set(height, hash)
        blocks.set(
            hash,
            new ChainInfo({
                id: hash,
                genesisHash: config.genesisHash,
                blockNumber: height,
                blockHash: hash,
                finalized: false,
            })
        )
    }
    finalizedHeight = 1131
    for (const height of [1132, 1133, 1134]) {
        await chainState(ctx, {
            hash: `0x${height}`,
            height,
            specVersion: 1,
            timestamp: Date.now(),
            validator: null,
        } as Parameters<typeof chainState>[1])
    }

    assert.equal(checkpoint.stateBlock, 1131)
    assert.equal(blocks.get('0x1131')?.finalized, true, 'paged reconciliation must reach the end of the gap')
})
