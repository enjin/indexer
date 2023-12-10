import { MessageAttributeValue, PublishCommand, SNSClient } from '@aws-sdk/client-sns'
import config from '../config'
import { safeJsonString } from './tools'

export class Sns {
    static instance: Sns

    static client: SNSClient

    static SNS_TOPIC_ARN: string

    static SNS_GROUP_ID: string

    private constructor() {
        if (config.amazonSns.topicArn === '') {
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

    public static getInstance(): Sns {
        if (!Sns.instance) {
            Sns.instance = new Sns()
        }

        return Sns.instance
    }

    public async send(message: { id: string; name: string; body: any }): Promise<any | null> {
        const messageBlockHeight = parseInt(message.id.split('-')[0], 10)

        if (messageBlockHeight < config.lastBlockHeight) {
            return null
        }

        if (!Sns.client) {
            return null
        }

        const attr: Record<string, MessageAttributeValue> = {}

        attr.EventId = {
            DataType: 'String',
            StringValue: message.id,
        }
        attr.EventName = {
            DataType: 'String',
            StringValue: message.name,
        }

        if (message.body.extrinsic) {
            attr.Extrinsic = {
                DataType: 'String',
                StringValue: message.body.extrinsic,
            }
        }

        if (message.body.account || message.body.who) {
            attr.Account = {
                DataType: 'String',
                StringValue: message.body.account ?? message.body.who,
            }
        }

        const command = new PublishCommand({
            TopicArn: Sns.SNS_TOPIC_ARN,
            Message: safeJsonString(message.body),
            MessageAttributes: attr,
            MessageGroupId: Sns.SNS_GROUP_ID,
            MessageDeduplicationId: message.id,
        })

        return Sns.client.send(command)
    }
}
