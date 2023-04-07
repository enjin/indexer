/* eslint-disable max-classes-per-file */
import { Query, Resolver, Arg, ObjectType, Field } from 'type-graphql'
import 'reflect-metadata'
import { Account, Balance, Claim, Extrinsic, Fee } from '../../model'
import * as crypto from 'crypto'
import { EntityManager } from 'typeorm'

@ObjectType()
export class ClaimResult {
    @Field({ nullable: false })
    claimId!: string

    @Field({ nullable: false })
    extrinsicId!: string

    constructor(props: Partial<ClaimResult>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class NewClaimResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => ClaimResult)
    async newClaim(
        @Arg('who', { description: 'The account who received the claim' }) publicKey: string,
        @Arg('amount', { description: 'The amount it was claimed' }) amount: string,
        @Arg('blockNumber', { description: 'The block number the claim was made' }) blockNumber: number
    ): Promise<ClaimResult> {
        const manager = await this.tx()

        let account = await manager.findOne(Account, {
            where: { id: publicKey },
        })

        if (!account) {
            account = new Account({
                id: publicKey,
                address: publicKey,
                balance: new Balance({
                    transferable: 0n,
                    free: 0n,
                    reserved: 0n,
                    miscFrozen: 0n,
                    feeFrozen: 0n,
                }),
                nonce: 0,
                tokenValues: 0n,
            })
            await manager.save(account)
        }

        const extrinsic = new Extrinsic({
            id: crypto.randomBytes(10).toString('hex'),
            hash: crypto.randomBytes(32).toString('hex'),
            blockNumber,
            blockHash: crypto.randomBytes(32).toString('hex'),
            success: true,
            pallet: 'Claims',
            method: 'MintEnjFromNativeEfi',
            signature: '0x00',
            signer: account,
            nonce: 1,
            tip: 0n,
            error: null,
            fee: new Fee({
                amount: 1000000n,
                who: account.id,
            }),
            createdAt: new Date(),
            participants: [account.id],
        })

        await manager.save(extrinsic)

        const claim = new Claim({
            id: crypto.randomBytes(10).toString('hex'),
            extrinsic,
            who: account,
            amount: BigInt(amount),
        })

        await manager.save(claim)

        return new ClaimResult({
            claimId: claim.id,
            extrinsicId: extrinsic.id,
        })
    }
}
