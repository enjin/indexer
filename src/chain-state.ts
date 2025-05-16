import { BlockHeader } from '@subsquid/substrate-processor'
import * as Sentry from '@sentry/node'
import { ChainInfo, Marketplace } from './model'
import processorConfig from './util/config'
import { CommonContext } from './contexts'
import Rpc from './util/rpc'
import { Compact } from '@polkadot/types'
import { Perbill } from '@polkadot/types/interfaces'

type PalletMarketplaceMarketPlaceInfo = {
    protocolFee: Compact<Perbill>
}

export async function chainState(
    ctx: CommonContext,
    block: BlockHeader<{ block: { timestamp: true; validator: true } }>
) {
    try {
        const { api } = await Rpc.getInstance()
        const apiAt = await api.at(block.hash)
        const [
            { transactionVersion },
            existentialDeposit,
            listingActiveDelay,
            listingDeposit,
            maxRoundingError,
            maxSaltLength,
            minimumBidIncreasePercentage,
            marketplaceInfo,
        ] = await Promise.all([
            apiAt.consts.system.version,
            apiAt.consts.balances.existentialDeposit,
            apiAt.consts.marketplace.listingActiveDelay,
            apiAt.consts.marketplace.listingDeposit,
            apiAt.consts.marketplace.maxRoundingError,
            apiAt.consts.marketplace.maxSaltLength,
            apiAt.consts.marketplace.minimumBidIncreasePercentage,
            apiAt.query.marketplace.info(),
        ])

        const marketplace = api.createType(
            'PalletMarketplaceMarketPlaceInfo',
            marketplaceInfo
        ) as unknown as PalletMarketplaceMarketPlaceInfo

        const state = new ChainInfo({
            id: block.hash,
            genesisHash: processorConfig.genesisHash,
            transactionVersion: transactionVersion.toNumber(),
            specVersion: Number(block.specVersion),
            blockNumber: block.height,
            blockHash: block.hash,
            existentialDeposit: existentialDeposit.toBigInt(),
            timestamp: new Date(block.timestamp ?? 0),
            validator: block.validator ?? null,
            marketplace: new Marketplace({
                protocolFee: marketplace.protocolFee.toNumber(),
                listingActiveDelay: Number(listingActiveDelay.toString()),
                listingDeposit: BigInt(listingDeposit.toString()),
                maxRoundingError: BigInt(maxRoundingError.toString()),
                maxSaltLength: Number(maxSaltLength.toString()),
                minimumBidIncreasePercentage: Number(minimumBidIncreasePercentage.toString()),
            }),
        })

        await ctx.store.save<ChainInfo>(state)
    } catch (error) {
        Sentry.captureException(error)
    }
}
