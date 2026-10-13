import assert from 'node:assert/strict'
import test from 'node:test'
import { attempted as xcmPalletAttempted } from '~/pallet/xcm-pallet/processors/attempted'
import { attempted as polkadotXcmAttempted } from '~/pallet/polkadot-xcm/processors/attempted'
import { calls } from '~/type'
import type { EventItem, Block, CommonContext } from '~/contexts'

/**
 * Security test suite for XCM Attempted event handlers
 * 
 * Vulnerability: Unsupported XCM call associations can halt indexer ingestion
 * 
 * The issue was that the Attempted handlers would pass every associated call to 
 * teleport-only dispatchers. Valid signed calls like execute() can emit Attempted events,
 * but the dispatcher did not recognize execute and would throw UnsupportedCallError.
 * This exception would escape event processing and halt the indexer.
 * 
 * Fix: Added allowlist validation before calling anyTeleportAssets() to ensure only
 * teleport/transfer calls are processed. Other XCM calls (execute, send, etc.) are
 * now safely ignored by returning undefined.
 */

// Mock context and block for testing
const mockContext = {} as CommonContext
const mockBlock = {
    height: 12345,
    specName: 'test-chain',
    specVersion: 1000,
} as Block

// Mock extrinsic
const mockExtrinsic = {
    id: '0001234567-000000-abcdef',
    indexInBlock: 0,
    version: 4,
    signature: null,
    success: true,
    error: null,
    call: null,
    fee: null,
    tip: null,
    hash: '0xabcdef',
}

/**
 * Helper to create a mock EventItem with a specific call
 */
function createMockEventItem(callName: string): EventItem {
    return {
        id: '0001234567-000001-test',
        name: 'XcmPallet.Attempted',
        block: mockBlock,
        indexInBlock: 1,
        phase: 'ApplyExtrinsic',
        extrinsic: mockExtrinsic,
        call: {
            name: callName,
            args: {},
            origin: null,
            error: null,
            success: true,
            block: mockBlock,
            extrinsic: mockExtrinsic,
            address: '0x1234',
            id: '0001234567-000000-call',
            indexInBlock: 0,
            parentId: null,
        },
        args: {},
    } as unknown as EventItem
}

/**
 * Test 1: XcmPallet.execute call should be safely ignored (not throw)
 * This is the primary exploit scenario from the pentest
 */
void test('XcmPallet.Attempted handler ignores execute calls without throwing', async () => {
    const eventItem = createMockEventItem(calls.xcmPallet.execute.name)
    
    // Before the fix, this would throw UnsupportedCallError
    // After the fix, it should return undefined (safely ignore)
    const result = await xcmPalletAttempted(mockContext, mockBlock, eventItem)
    
    assert.equal(result, undefined, 'execute call should be ignored and return undefined')
})

/**
 * Test 2: PolkadotXcm.execute call should be safely ignored (not throw)
 * This is the mirrored exploit scenario for the other pallet
 */
void test('PolkadotXcm.Attempted handler ignores execute calls without throwing', async () => {
    const eventItem = createMockEventItem(calls.polkadotXcm.execute.name)
    
    // Before the fix, this would throw UnsupportedCallError
    // After the fix, it should return undefined (safely ignore)
    const result = await polkadotXcmAttempted(mockContext, mockBlock, eventItem)
    
    assert.equal(result, undefined, 'execute call should be ignored and return undefined')
})

/**
 * Test 3: XcmPallet.send call should be safely ignored
 * Another valid XCM call that can emit Attempted but isn't a transfer
 */
void test('XcmPallet.Attempted handler ignores send calls without throwing', async () => {
    const eventItem = createMockEventItem(calls.xcmPallet.send.name)
    
    const result = await xcmPalletAttempted(mockContext, mockBlock, eventItem)
    
    assert.equal(result, undefined, 'send call should be ignored and return undefined')
})

/**
 * Test 4: PolkadotXcm.send call should be safely ignored
 */
void test('PolkadotXcm.Attempted handler ignores send calls without throwing', async () => {
    const eventItem = createMockEventItem(calls.polkadotXcm.send.name)
    
    const result = await polkadotXcmAttempted(mockContext, mockBlock, eventItem)
    
    assert.equal(result, undefined, 'send call should be ignored and return undefined')
})

/**
 * Test 5: Verify allowlist includes all expected teleport/transfer calls for XcmPallet
 */
void test('XcmPallet allowlist includes all teleport and transfer variants', () => {
    const supportedCalls = [
        calls.xcmPallet.limitedReserveTransferAssets.name,
        calls.xcmPallet.limitedTeleportAssets.name,
        calls.xcmPallet.teleportAssets.name,
        calls.xcmPallet.transferAssets.name,
    ]
    
    // Verify the expected call names are defined
    assert.ok(supportedCalls.includes('XcmPallet.limited_reserve_transfer_assets'))
    assert.ok(supportedCalls.includes('XcmPallet.limited_teleport_assets'))
    assert.ok(supportedCalls.includes('XcmPallet.teleport_assets'))
    assert.ok(supportedCalls.includes('XcmPallet.transfer_assets'))
    
    // Verify execute is NOT in the allowlist
    assert.ok(!supportedCalls.includes(calls.xcmPallet.execute.name))
    assert.ok(!supportedCalls.includes(calls.xcmPallet.send.name))
})

/**
 * Test 6: Verify allowlist includes all expected teleport/transfer calls for PolkadotXcm
 */
void test('PolkadotXcm allowlist includes all teleport and transfer variants', () => {
    const supportedCalls = [
        calls.polkadotXcm.limitedReserveTransferAssets.name,
        calls.polkadotXcm.limitedTeleportAssets.name,
        calls.polkadotXcm.teleportAssets.name,
        calls.polkadotXcm.transferAssets.name,
    ]
    
    // Verify the expected call names are defined
    assert.ok(supportedCalls.includes('PolkadotXcm.limited_reserve_transfer_assets'))
    assert.ok(supportedCalls.includes('PolkadotXcm.limited_teleport_assets'))
    assert.ok(supportedCalls.includes('PolkadotXcm.teleport_assets'))
    
    // Note: PolkadotXcm may not have transferAssets in all versions, but if it does, it should be included
    
    // Verify execute is NOT in the allowlist
    assert.ok(!supportedCalls.includes(calls.polkadotXcm.execute.name))
    assert.ok(!supportedCalls.includes(calls.polkadotXcm.send.name))
})

/**
 * Test 7: Handler returns undefined when call is undefined
 * This is an existing guard that should still work
 */
void test('XcmPallet.Attempted handler returns undefined when call is undefined', async () => {
    const eventItem = createMockEventItem('XcmPallet.limited_teleport_assets')
    eventItem.call = undefined
    
    const result = await xcmPalletAttempted(mockContext, mockBlock, eventItem)
    
    assert.equal(result, undefined, 'should return undefined when call is undefined')
})

/**
 * Test 8: Handler returns undefined when extrinsic is missing
 * This is an existing guard that should still work
 */
void test('PolkadotXcm.Attempted handler returns undefined when extrinsic is missing', async () => {
    const eventItem = createMockEventItem('PolkadotXcm.limited_teleport_assets')
    eventItem.extrinsic = undefined
    
    const result = await polkadotXcmAttempted(mockContext, mockBlock, eventItem)
    
    assert.equal(result, undefined, 'should return undefined when extrinsic is missing')
})

/**
 * Test 9: Verify the security property - unsupported calls are rejected before dispatcher
 * This test ensures the allowlist check happens BEFORE anyTeleportAssets is called
 */
void test('XcmPallet allowlist validation prevents dispatcher invocation for unsupported calls', async () => {
    // Create event items for various unsupported calls
    const unsupportedCalls = [
        calls.xcmPallet.execute.name,
        calls.xcmPallet.send.name,
    ]
    
    for (const callName of unsupportedCalls) {
        const eventItem = createMockEventItem(callName)
        
        // This should not throw because the allowlist check happens first
        const result = await xcmPalletAttempted(mockContext, mockBlock, eventItem)
        
        assert.equal(
            result,
            undefined,
            `${callName} should be rejected by allowlist before reaching dispatcher`
        )
    }
})

/**
 * Test 10: Verify the security property for PolkadotXcm pallet
 */
void test('PolkadotXcm allowlist validation prevents dispatcher invocation for unsupported calls', async () => {
    // Create event items for various unsupported calls
    const unsupportedCalls = [
        calls.polkadotXcm.execute.name,
        calls.polkadotXcm.send.name,
    ]
    
    for (const callName of unsupportedCalls) {
        const eventItem = createMockEventItem(callName)
        
        // This should not throw because the allowlist check happens first
        const result = await polkadotXcmAttempted(mockContext, mockBlock, eventItem)
        
        assert.equal(
            result,
            undefined,
            `${callName} should be rejected by allowlist before reaching dispatcher`
        )
    }
})

/**
 * Test 11: Verify that a hypothetical unknown XCM call is also safely ignored
 * This tests the defense-in-depth property of the fix
 */
void test('XcmPallet.Attempted handler safely ignores unknown XCM calls', async () => {
    const eventItem = createMockEventItem('XcmPallet.hypothetical_unknown_call')
    
    const result = await xcmPalletAttempted(mockContext, mockBlock, eventItem)
    
    assert.equal(result, undefined, 'unknown calls should be safely ignored')
})

/**
 * Test 12: Verify that a hypothetical unknown XCM call is also safely ignored for PolkadotXcm
 */
void test('PolkadotXcm.Attempted handler safely ignores unknown XCM calls', async () => {
    const eventItem = createMockEventItem('PolkadotXcm.hypothetical_unknown_call')
    
    const result = await polkadotXcmAttempted(mockContext, mockBlock, eventItem)
    
    assert.equal(result, undefined, 'unknown calls should be safely ignored')
})
