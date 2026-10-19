import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { calls, events } from '~/type'

const PALLET_DIR = path.resolve(__dirname, '../src/pallet')
const DECODER_REF = /\b(calls|events)\.(\w+)\.(\w+)\.(\w+)\.is\(/g
const TYPE_IMPORT = /import\s*\{([^}]*)\}\s*from\s*'~\/type\/(calls|events)'/g

function listSources(dir: string): string[] {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name)
        if (entry.isDirectory()) return listSources(full)
        return entry.name.endsWith('.ts') ? [full] : []
    })
}

// Every `<kind>.<pallet>.<name>.<version>.is(` reference found in the pallet decoders, keyed by `<kind>.<pallet>.<name>`.
function collectDecoderVersions(): Map<string, Set<string>> {
    const used = new Map<string, Set<string>>()
    for (const file of listSources(PALLET_DIR)) {
        const source = fs.readFileSync(file, 'utf8')
        const add = (kind: string, pallet: string, name: string, version: string) => {
            const key = `${kind}.${pallet}.${name}`
            if (!used.has(key)) used.set(key, new Set())
            used.get(key)?.add(version)
        }
        // Style 1: `calls.<pallet>.<name>.<version>.is(`
        for (const [, kind, pallet, name, version] of source.matchAll(DECODER_REF)) add(kind, pallet, name, version)
        // Style 2: `import { <pallet> } from '~/type/calls'` and then `<pallet>.<name>.<version>.is(`
        for (const [, names, kind] of source.matchAll(TYPE_IMPORT)) {
            for (const spec of names.split(',')) {
                const [pallet, alias = pallet] = spec.trim().split(/\s+as\s+/)
                if (!pallet) continue
                const ref = new RegExp(`\\b${alias}\\.(\\w+)\\.(\\w+)\\.is\\(`, 'g')
                for (const [, name, version] of source.matchAll(ref)) add(kind, pallet, name, version)
            }
        }
    }
    return used
}

function generatedVersions(key: string): string[] {
    const [kind, pallet, name] = key.split('.')
    const group = (kind === 'calls' ? calls : events) as Record<string, Record<string, Record<string, unknown>>>
    const type = group[pallet][name] as Record<string, unknown> | undefined
    assert.ok(type, `${key} does not exist in the generated types`)
    return Object.keys(type).filter((v) => typeof (type[v] as { is?: unknown }).is === 'function')
}

const used = collectDecoderVersions()

void test('decoders reference a sane number of generated types', () => {
    assert.ok(used.size > 150, `expected to scan many decoders, found ${used.size}`)
})

void test('every generated version is matched by its decoder (no silent Unsupported*Error on resync)', () => {
    const gaps: string[] = []
    for (const [key, versions] of [...used].sort(([a], [b]) => a.localeCompare(b))) {
        const missing = generatedVersions(key).filter((v) => !versions.has(v))
        if (missing.length > 0) gaps.push(`${key}: ${missing.join(', ')}`)
    }
    assert.deepEqual(gaps, [], `decoders missing generated versions:\n${gaps.join('\n')}`)
})

void test('previously incomplete decoders are scanned', () => {
    for (const key of [
        'calls.fuelTanks.dispatch',
        'calls.fuelTanks.dispatchAndTouch',
        'calls.fuelTanks.createFuelTank',
        'calls.fuelTanks.forceCreateFuelTank',
        'calls.fuelTanks.insertRuleSet',
        'calls.xcmPallet.limitedTeleportAssets',
        'calls.xcmPallet.limitedReserveTransferAssets',
        'calls.xcmPallet.teleportAssets',
        'calls.polkadotXcm.limitedReserveTransferAssets',
        'calls.utility.batchAll',
        'calls.nominationPools.create',
        'calls.multiTokens.mint',
    ]) {
        assert.ok(used.has(key), `${key} decoder was not found`)
    }
})
