// import Queue from 'bullmq'
// import connection from '../../../../connection'
// import { JobData } from '../../queues/old/delete-traits'
//
// export default async (job: Queue.Job<JobData>, done: Queue.DoneCallback) => {
//     if (!connection.isInitialized) {
//         await connection.initialize().catch((err) => {
//             throw err
//         })
//     }
//
//     const em = connection.manager
//
//     await em.query(
//         `
//         DELETE FROM trait_token WHERE token_id = $1
//     `,
//         [job.data.id]
//     )
//
//     await em.query(
//         `
//         DELETE FROM token_rarity WHERE token_id = $1
//     `,
//         [job.data.id]
//     )
//
//     done()
// }
