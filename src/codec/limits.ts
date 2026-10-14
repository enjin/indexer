export const MAX_CODEC_BATCH_ITEMS = 100
export const MAX_CODEC_IN_FLIGHT = 8
export const CODEC_REQUESTS_PER_SECOND = 20
export const CODEC_REQUEST_BURST = 40
export const MAX_SCALE_DEPTH = 128
export const MAX_SCALE_VALUES = 20_000
export const MAX_SCALE_SEQUENCE_ITEMS = 10_000

export class CodecLimitError extends Error {}
