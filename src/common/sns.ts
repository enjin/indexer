import { MessageAttributeValue, PublishCommand, SNSClient } from '@aws-sdk/client-sns'
import config from '../config'
import { safeJsonString } from './tools'

export class Sns {
    private static instance: Sns | undefined = undefined
    private static client: SNSClient | undefined = undefined

    static SNS_TOPIC_ARN: string = ''
    static SNS_GROUP_ID: string = ''

    private constructor() {
        if (!config.amazonSns.topicArn) {
            return
        }

        Sns.SNS_TOPIC_ARN = config.amazonSns.topicArn
        Sns.SNS_GROUP_ID = config.chainName

        Sns.client = new SNSClient({
            region: config.amazonSns.region,
            credentials: {
                accessKeyId: config.amazonSns.credentials.accessKeyId,
                secretAccessKey: config.amazonSns.credentials.secretAccessKey,
            },
        })
    }

    private static getClient(): SNSClient {
        if (!Sns.client) {
            throw new Error('SNS client not initialized')
        }
        return Sns.client
    }

    public static getInstance(): Sns {
        if (!Sns.instance) {
            Sns.instance = new Sns()
        }
        return Sns.instance
    }

    public async send(message: { id: string; name: string; body: Record<string, unknown> }): Promise<void> {
        const messageBlockHeight = parseInt(message.id.split('-')[0], 10)
        if (messageBlockHeight < config.lastBlockHeight) {
            return
        }

        const toString = (value: unknown): string => {
            if (typeof value === 'string') {
                return value
            }
            return JSON.stringify(value)
        }

        const attr: Record<string, MessageAttributeValue> = {
            EventId: { DataType: 'String', StringValue: message.id },
            EventName: { DataType: 'String', StringValue: message.name },
        }

        if (message.body.extrinsic) {
            attr.Extrinsic = { DataType: 'String', StringValue: toString(message.body.extrinsic) }
        }

        if (message.body.account || message.body.who) {
            attr.Account = {
                DataType: 'String',
                StringValue: toString(message.body.account ?? message.body.who),
            }
        }

        const command = new PublishCommand({
            TopicArn: Sns.SNS_TOPIC_ARN,
            Message: safeJsonString(message.body),
            MessageAttributes: attr,
            MessageGroupId: Sns.SNS_GROUP_ID,
            MessageDeduplicationId: message.id,
        })

        try {
            await Sns.getClient().send(command)
        } catch (error) {
            console.error('Error sending SNS message', error)
        }
    }
}
