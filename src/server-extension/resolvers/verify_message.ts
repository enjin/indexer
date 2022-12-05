/* eslint-disable max-classes-per-file */
import { Query, Resolver, Arg, ObjectType, Field } from 'type-graphql'
import { signatureVerify } from '@polkadot/util-crypto'
import 'reflect-metadata'

@ObjectType()
export class VerifyMessageResult {
    @Field({ nullable: false })
    isValid!: boolean

    @Field({ nullable: false })
    isWrapped!: boolean

    @Field({ nullable: false })
    crypto!: string

    constructor(props: Partial<VerifyMessageResult>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class VerifyMessageResolver {
    @Query(() => VerifyMessageResult)
    verifyMessage(
        @Arg('message', { description: 'The message that was signed in hexadecimal' }) message: string,
        @Arg('signature', { description: 'The signed message in hexadecimal' }) signature: string,
        @Arg('publicKey', { description: 'The public key of the signer' }) publicKey: string
    ): VerifyMessageResult {
        const { isValid, isWrapped, crypto } = signatureVerify(message, signature, publicKey)

        return new VerifyMessageResult({
            isValid,
            isWrapped,
            crypto,
        })
    }
}
