import type { ExtrinsicItem } from '~/contexts'
import { calls } from '~/type'

export function shouldIndexExtrinsic(extrinsic: Pick<ExtrinsicItem, 'call'>): boolean {
    const name = extrinsic.call?.name
    return name !== calls.parachainSystem.setValidationData.name && name !== calls.timestamp.set.name
}
