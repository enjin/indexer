import { Codec, Src, TypeKind, type Type } from '@subsquid/scale-codec'
import type { Runtime } from '@subsquid/substrate-runtime'
import { CodecLimitError, MAX_SCALE_DEPTH, MAX_SCALE_SEQUENCE_ITEMS, MAX_SCALE_VALUES } from '~/codec/limits'

/** Bound recursive SCALE work before allocating attacker-supplied collection lengths. */
export class BoundedScaleCodec extends Codec {
    private depth = 0
    private values = 0

    constructor(private readonly sourceTypes: Type[]) {
        super(sourceTypes)
    }

    override decode(type: number, src: Src): unknown {
        if (this.depth === 0) this.values = 0
        if (this.depth >= MAX_SCALE_DEPTH || ++this.values > MAX_SCALE_VALUES) {
            throw new CodecLimitError('SCALE input exceeds the depth or value limit')
        }
        this.depth++
        try {
            const def = this.sourceTypes[type]
            if (def.kind === TypeKind.Sequence) {
                const length = src.compactLength()
                if (length > MAX_SCALE_SEQUENCE_ITEMS) {
                    throw new CodecLimitError('SCALE sequence exceeds the item limit')
                }
                return Array.from({ length }, () => this.decode(def.type, src))
            }
            return super.decode(type, src)
        } finally {
            this.depth--
        }
    }
}

const codecs = new WeakMap<Runtime, Codec>()

export function getBoundedScaleCodec(runtime: Runtime): Codec {
    let codec = codecs.get(runtime)
    if (!codec) {
        codec = new BoundedScaleCodec(runtime.description.types)
        codecs.set(runtime, codec)
    }
    return codec
}
