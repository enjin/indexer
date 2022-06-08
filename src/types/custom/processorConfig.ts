import { SubstrateProcessor } from '@subsquid/substrate-processor'
import chains from '../../chains'
import { ChainName } from './chainInfo'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Parameters<T> = T extends (...args: infer T) => any ? T : never

enum HandlerParams {
    NAME,
    OPTIONS,
    FUNC,
}

// type Handlers<T> = Record<
//     string,
//     Record<
//         string,
//         {
//             handler: Parameters<T>[HandlerParams.FUNC]
//             options?: Parameters<T>[HandlerParams.OPTIONS]
//         }
//     >
// >

export interface ProcessorConfig {
    chainName: ChainName
    prefix: number | string
    dataSource: Parameters<SubstrateProcessor['setDataSource']>[HandlerParams.NAME]
    // typesBundle: Parameters<SubstrateProcessor['setTypesBundle']>[HandlerParams.NAME]
    batchSize?: Parameters<SubstrateProcessor['setBatchSize']>[HandlerParams.NAME]
    // eventHandlers?: Handlers<SubstrateProcessor['addEventHandler']>
    // extrinsicsHandlers?: Handlers<SubstrateProcessor['addExtrinsicHandler']>
    port?: Parameters<SubstrateProcessor['setPrometheusPort']>[HandlerParams.NAME]
    blockRange?: Parameters<SubstrateProcessor['setBlockRange']>[HandlerParams.NAME]
}

// export function setupNewProcessor(config: ProcessorConfig): SubstrateProcessor {
//     // for (const sectionName in config.eventHandlers) {
//     //     const section = config.eventHandlers[sectionName]
//     //     for (const methodName in section) {
//     //         const method = section[methodName]
//     //         processor.addEventHandler(`${sectionName}.${methodName}`, method.options || {}, method.handler)
//     //     }
//     // }

//     // for (const sectionName in config.extrinsicsHandlers) {
//     //     const section = config.extrinsicsHandlers[sectionName]
//     //     for (const methodName in section) {
//     //         const method = section[methodName]
//     //         processor.addExtrinsicHandler(`${sectionName}.${methodName}`, method.options || {}, method.handler)
//     //     }
//     // }

//     return processor
// }
