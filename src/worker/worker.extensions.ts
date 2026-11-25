import type { JobHandler } from '~/worker/processors/job-router.processor'

// Private builds can replace this module with their own queue-specific job handlers before compilation.
export const workerJobOverrides: ReadonlyMap<string, ReadonlyMap<string, JobHandler>> = new Map()
