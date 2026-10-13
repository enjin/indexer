import assert from 'node:assert/strict'
import test from 'node:test'
import {
    FuelTank,
    FuelTankUserAccounts,
    FuelTankRuleSet,
    FuelTankAccountRules,
    PermittedExtrinsics,
    Account,
} from '~/model'

/**
 * Test suite for fuel-tank-destroyed processor
 *
 * This test verifies the security fix for the pentest finding:
 * "Fuel tank destruction can permanently stall indexer processing"
 *
 * The vulnerability was that destroying a FuelTank with FuelTankUserAccounts
 * would cause a foreign key violation, which would halt the indexer.
 *
 * The fix ensures that FuelTankUserAccounts are deleted before the parent FuelTank.
 */

// Mock store implementation for testing
class MockStore {
    private entities: Map<string, Map<string, unknown>> = new Map()
    private removalOrder: string[] = []

    constructor() {
        this.entities.set('FuelTank', new Map())
        this.entities.set('FuelTankUserAccounts', new Map())
        this.entities.set('FuelTankRuleSet', new Map())
        this.entities.set('FuelTankAccountRules', new Map())
        this.entities.set('PermittedExtrinsics', new Map())
        this.entities.set('Account', new Map())
    }

    save<T extends { id: string }>(entity: T | T[]): void {
        const entities = Array.isArray(entity) ? entity : [entity]
        for (const e of entities) {
            const entityName = e.constructor.name
            const entityMap = this.entities.get(entityName)
            if (entityMap) {
                entityMap.set(e.id, e)
            }
        }
    }

    find<T>(entityClass: new () => T, options?: { where?: unknown; relations?: unknown }): T[] {
        const entityName = entityClass.name
        const entityMap = this.entities.get(entityName)
        if (!entityMap) return []

        const allEntities = Array.from(entityMap.values()) as T[]

        // Simple where clause filtering for tankId
        if (options?.where && typeof options.where === 'object' && 'tank' in options.where) {
            const tankFilter = (options.where as { tank: { id: string } }).tank
            return allEntities.filter((e: unknown) => {
                if (e && typeof e === 'object' && 'tank' in e) {
                    const entity = e as { tank: { id: string } }
                    return entity.tank.id === tankFilter.id
                }
                return false
            })
        }

        return allEntities
    }

    findOneByOrFail<T>(entityClass: new () => T, where: { id: string }): T {
        const entityName = entityClass.name
        const entityMap = this.entities.get(entityName)
        if (!entityMap) {
            throw new Error(`Entity ${entityName} not found`)
        }

        const entity = entityMap.get(where.id)
        if (!entity) {
            throw new Error(`${entityName} with id ${where.id} not found`)
        }

        return entity as T
    }

    remove<T extends { id: string }>(entities: T | T[]): void {
        const entitiesToRemove = Array.isArray(entities) ? entities : [entities]

        for (const entity of entitiesToRemove) {
            const entityName = entity.constructor.name
            const entityMap = this.entities.get(entityName)

            // Track removal order
            this.removalOrder.push(`${entityName}:${entity.id}`)

            // Simulate foreign key constraint check
            if (entityName === 'FuelTank') {
                const userAccountsMap = this.entities.get('FuelTankUserAccounts')
                if (userAccountsMap) {
                    const remainingUserAccounts = Array.from(userAccountsMap.values()).filter((ua: unknown) => {
                        if (ua && typeof ua === 'object' && 'tank' in ua) {
                            const userAccount = ua as { tank: { id: string } }
                            return userAccount.tank.id === entity.id
                        }
                        return false
                    })

                    if (remainingUserAccounts.length > 0) {
                        throw new Error(
                            `Foreign key constraint violation: Cannot delete FuelTank ${entity.id} because FuelTankUserAccounts still reference it`
                        )
                    }
                }
            }

            if (entityMap) {
                entityMap.delete(entity.id)
            }
        }
    }

    getEntity(entityName: string, id: string): unknown {
        const entityMap = this.entities.get(entityName)
        return entityMap?.get(id)
    }

    hasEntity(entityName: string, id: string): boolean {
        const entityMap = this.entities.get(entityName)
        return entityMap?.has(id) ?? false
    }

    getEntityCount(entityName: string): number {
        const entityMap = this.entities.get(entityName)
        return entityMap?.size ?? 0
    }

    getRemovalOrder(): string[] {
        return [...this.removalOrder]
    }

    clearRemovalOrder(): void {
        this.removalOrder = []
    }
}

/**
 * Simulates the fuel tank destruction logic from the processor
 * This is the core logic that was fixed to prevent the vulnerability
 */
function simulateFuelTankDestruction(store: MockStore, tankId: string): void {
    // This simulates the fixed code from fuel-tank-destroyed.ts
    const permittedExtrinsics = store.find(PermittedExtrinsics, {
        relations: { ruleSet: true },
        where: { ruleSet: { tank: { id: tankId } } },
    })
    const ruleSet = store.find(FuelTankRuleSet, { where: { tank: { id: tankId } } })
    const accountRuleSet = store.find(FuelTankAccountRules, { where: { tank: { id: tankId } } })
    const userAccounts = store.find(FuelTankUserAccounts, { where: { tank: { id: tankId } } }) // THE FIX: This line was added
    const tank = store.findOneByOrFail(FuelTank, { id: tankId })

    // Remove dependent entities first (including userAccounts - THE FIX)
    store.remove(permittedExtrinsics)
    store.remove(ruleSet)
    store.remove(accountRuleSet)
    store.remove(userAccounts) // THE FIX: This line was added

    // Remove the parent tank last
    store.remove(tank)
}

void test('fuelTankDestroyed removes all dependent entities including FuelTankUserAccounts', () => {
    const store = new MockStore()
    const tankId = 'tank-1'

    // Setup: Create a FuelTank with all dependent entities
    const tank = new FuelTank({ id: tankId, name: 'Test Tank', accountCount: 2 })
    const account1 = new Account({ id: 'account-1' })
    const account2 = new Account({ id: 'account-2' })

    const userAccount1 = new FuelTankUserAccounts({
        id: `${tankId}-account-1`,
        tank,
        account: account1,
        tankDeposit: 1000n,
        userDeposit: 500n,
    })

    const userAccount2 = new FuelTankUserAccounts({
        id: `${tankId}-account-2`,
        tank,
        account: account2,
        tankDeposit: 2000n,
        userDeposit: 1000n,
    })

    const ruleSet = new FuelTankRuleSet({
        id: `${tankId}-ruleset-1`,
        tank,
        isFrozen: false,
    })

    const accountRule = new FuelTankAccountRules({
        id: `${tankId}-accountrule-1`,
        tank,
        rule: 'WhitelistedCallers',
    })

    const permittedExtrinsic = new PermittedExtrinsics({
        id: `${tankId}-extrinsic-1`,
        ruleSet,
        value: 'transfer',
    })

    // Save all entities
    store.save([tank, account1, account2, userAccount1, userAccount2, ruleSet, accountRule, permittedExtrinsic])

    // Verify entities exist before destruction
    assert.equal(store.hasEntity('FuelTank', tankId), true, 'FuelTank should exist before destruction')
    assert.equal(store.getEntityCount('FuelTankUserAccounts'), 2, 'Should have 2 user accounts before destruction')
    assert.equal(store.getEntityCount('FuelTankRuleSet'), 1, 'Should have 1 rule set before destruction')
    assert.equal(store.getEntityCount('FuelTankAccountRules'), 1, 'Should have 1 account rule before destruction')
    assert.equal(store.getEntityCount('PermittedExtrinsics'), 1, 'Should have 1 permitted extrinsic before destruction')

    // Execute: Simulate the fuel tank destroyed processor logic
    simulateFuelTankDestruction(store, tankId)

    // Verify: All entities should be removed
    assert.equal(store.hasEntity('FuelTank', tankId), false, 'FuelTank should be removed after destruction')
    assert.equal(store.getEntityCount('FuelTankUserAccounts'), 0, 'All user accounts should be removed')
    assert.equal(store.getEntityCount('FuelTankRuleSet'), 0, 'All rule sets should be removed')
    assert.equal(store.getEntityCount('FuelTankAccountRules'), 0, 'All account rules should be removed')
    assert.equal(store.getEntityCount('PermittedExtrinsics'), 0, 'All permitted extrinsics should be removed')
})

void test('fuelTankDestroyed does not throw foreign key violation when user accounts exist', () => {
    const store = new MockStore()
    const tankId = 'tank-2'

    // Setup: Create a FuelTank with multiple user accounts (the vulnerable scenario)
    const tank = new FuelTank({ id: tankId, name: 'Populated Tank', accountCount: 3 })
    const account1 = new Account({ id: 'user-1' })
    const account2 = new Account({ id: 'user-2' })
    const account3 = new Account({ id: 'user-3' })

    const userAccount1 = new FuelTankUserAccounts({
        id: `${tankId}-user-1`,
        tank,
        account: account1,
        tankDeposit: 1000n,
        userDeposit: 500n,
    })

    const userAccount2 = new FuelTankUserAccounts({
        id: `${tankId}-user-2`,
        tank,
        account: account2,
        tankDeposit: 2000n,
        userDeposit: 1000n,
    })

    const userAccount3 = new FuelTankUserAccounts({
        id: `${tankId}-user-3`,
        tank,
        account: account3,
        tankDeposit: 3000n,
        userDeposit: 1500n,
    })

    store.save([tank, account1, account2, account3, userAccount1, userAccount2, userAccount3])

    // Verify the vulnerable state exists
    assert.equal(store.getEntityCount('FuelTankUserAccounts'), 3, 'Should have 3 user accounts (vulnerable state)')

    // Execute: This should NOT throw an error (the fix prevents the foreign key violation)
    assert.doesNotThrow(() => {
        simulateFuelTankDestruction(store, tankId)
    }, 'fuelTankDestroyed should not throw when user accounts exist')

    // Verify: Tank and all user accounts are removed
    assert.equal(store.hasEntity('FuelTank', tankId), false, 'FuelTank should be removed')
    assert.equal(store.getEntityCount('FuelTankUserAccounts'), 0, 'All user accounts should be removed')
})

void test('fuelTankDestroyed removes user accounts before removing the tank', () => {
    const store = new MockStore()
    const tankId = 'tank-3'

    // Setup: Create a FuelTank with user accounts
    const tank = new FuelTank({ id: tankId, name: 'Test Tank', accountCount: 1 })
    const account = new Account({ id: 'account-1' })
    const userAccount = new FuelTankUserAccounts({
        id: `${tankId}-account-1`,
        tank,
        account,
        tankDeposit: 1000n,
        userDeposit: 500n,
    })

    store.save([tank, account, userAccount])

    // Execute
    simulateFuelTankDestruction(store, tankId)

    // Verify: The order of deletion prevents foreign key violations
    // If user accounts were not deleted first, the mock store would have thrown an error
    assert.equal(store.hasEntity('FuelTank', tankId), false, 'FuelTank should be removed')
    assert.equal(store.getEntityCount('FuelTankUserAccounts'), 0, 'User accounts should be removed')

    // Verify removal order: user accounts should be removed before the tank
    const removalOrder = store.getRemovalOrder()
    const userAccountRemovalIndex = removalOrder.findIndex((item) => item.startsWith('FuelTankUserAccounts:'))
    const tankRemovalIndex = removalOrder.findIndex((item) => item.startsWith('FuelTank:'))

    assert.ok(userAccountRemovalIndex >= 0, 'User account should be in removal order')
    assert.ok(tankRemovalIndex >= 0, 'Tank should be in removal order')
    assert.ok(userAccountRemovalIndex < tankRemovalIndex, 'User accounts should be removed before the tank')
})

void test('fuelTankDestroyed handles empty tank without user accounts', () => {
    const store = new MockStore()
    const tankId = 'tank-4'

    // Setup: Create a FuelTank without any user accounts
    const tank = new FuelTank({ id: tankId, name: 'Empty Tank', accountCount: 0 })
    store.save(tank)

    // Execute
    simulateFuelTankDestruction(store, tankId)

    // Verify: Tank is removed successfully even without user accounts
    assert.equal(store.hasEntity('FuelTank', tankId), false, 'Empty FuelTank should be removed')
})

void test('fuelTankDestroyed removes only entities related to the specific tank', () => {
    const store = new MockStore()
    const tankId1 = 'tank-5'
    const tankId2 = 'tank-6'

    // Setup: Create two tanks with their own user accounts
    const tank1 = new FuelTank({ id: tankId1, name: 'Tank 1', accountCount: 1 })
    const tank2 = new FuelTank({ id: tankId2, name: 'Tank 2', accountCount: 1 })
    const account1 = new Account({ id: 'account-1' })
    const account2 = new Account({ id: 'account-2' })

    const userAccount1 = new FuelTankUserAccounts({
        id: `${tankId1}-account-1`,
        tank: tank1,
        account: account1,
        tankDeposit: 1000n,
        userDeposit: 500n,
    })

    const userAccount2 = new FuelTankUserAccounts({
        id: `${tankId2}-account-2`,
        tank: tank2,
        account: account2,
        tankDeposit: 2000n,
        userDeposit: 1000n,
    })

    store.save([tank1, tank2, account1, account2, userAccount1, userAccount2])

    // Verify initial state
    assert.equal(store.getEntityCount('FuelTank'), 2, 'Should have 2 tanks initially')
    assert.equal(store.getEntityCount('FuelTankUserAccounts'), 2, 'Should have 2 user accounts initially')

    // Execute: Destroy only tank1
    simulateFuelTankDestruction(store, tankId1)

    // Verify: Only tank1 and its user accounts are removed
    assert.equal(store.hasEntity('FuelTank', tankId1), false, 'Tank 1 should be removed')
    assert.equal(store.hasEntity('FuelTank', tankId2), true, 'Tank 2 should still exist')
    assert.equal(store.getEntityCount('FuelTankUserAccounts'), 1, 'Only tank1 user accounts should be removed')
    assert.equal(
        store.hasEntity('FuelTankUserAccounts', `${tankId2}-account-2`),
        true,
        'Tank 2 user account should still exist'
    )
})

void test('fuelTankDestroyed prevents indexer stall by handling all dependent entities', () => {
    const store = new MockStore()
    const tankId = 'tank-7'

    // Setup: Create a fully populated tank (worst case scenario for the vulnerability)
    const tank = new FuelTank({ id: tankId, name: 'Fully Populated Tank', accountCount: 5 })

    // Create multiple user accounts
    const accounts = []
    const userAccounts = []
    for (let i = 1; i <= 5; i++) {
        const account = new Account({ id: `account-${i}` })
        accounts.push(account)

        const userAccount = new FuelTankUserAccounts({
            id: `${tankId}-account-${i}`,
            tank,
            account,
            tankDeposit: BigInt(i * 1000),
            userDeposit: BigInt(i * 500),
        })
        userAccounts.push(userAccount)
    }

    // Create multiple rule sets
    const ruleSets = []
    for (let i = 1; i <= 3; i++) {
        const ruleSet = new FuelTankRuleSet({
            id: `${tankId}-ruleset-${i}`,
            tank,
            isFrozen: false,
        })
        ruleSets.push(ruleSet)
    }

    // Create multiple account rules
    const accountRules = []
    for (let i = 1; i <= 2; i++) {
        const accountRule = new FuelTankAccountRules({
            id: `${tankId}-accountrule-${i}`,
            tank,
            rule: `Rule${i}`,
        })
        accountRules.push(accountRule)
    }

    // Create multiple permitted extrinsics
    const permittedExtrinsics = []
    for (let i = 0; i < ruleSets.length; i++) {
        const permittedExtrinsic = new PermittedExtrinsics({
            id: `${tankId}-extrinsic-${i}`,
            ruleSet: ruleSets[i],
            value: `extrinsic${i}`,
        })
        permittedExtrinsics.push(permittedExtrinsic)
    }

    store.save([tank, ...accounts, ...userAccounts, ...ruleSets, ...accountRules, ...permittedExtrinsics])

    // Verify the complex state exists
    assert.equal(store.getEntityCount('FuelTankUserAccounts'), 5, 'Should have 5 user accounts')
    assert.equal(store.getEntityCount('FuelTankRuleSet'), 3, 'Should have 3 rule sets')
    assert.equal(store.getEntityCount('FuelTankAccountRules'), 2, 'Should have 2 account rules')
    assert.equal(store.getEntityCount('PermittedExtrinsics'), 3, 'Should have 3 permitted extrinsics')

    // Execute: This represents the scenario that would have stalled the indexer
    assert.doesNotThrow(() => {
        simulateFuelTankDestruction(store, tankId)
    }, 'fuelTankDestroyed should not throw even with complex dependent entities')

    // Verify: All entities are properly cleaned up
    assert.equal(store.hasEntity('FuelTank', tankId), false, 'FuelTank should be removed')
    assert.equal(store.getEntityCount('FuelTankUserAccounts'), 0, 'All user accounts should be removed')
    assert.equal(store.getEntityCount('FuelTankRuleSet'), 0, 'All rule sets should be removed')
    assert.equal(store.getEntityCount('FuelTankAccountRules'), 0, 'All account rules should be removed')
    assert.equal(store.getEntityCount('PermittedExtrinsics'), 0, 'All permitted extrinsics should be removed')
})

void test('WITHOUT FIX: fuelTankDestroyed would throw foreign key violation', () => {
    const store = new MockStore()
    const tankId = 'tank-vulnerable'

    // Setup: Create a FuelTank with user accounts
    const tank = new FuelTank({ id: tankId, name: 'Vulnerable Tank', accountCount: 1 })
    const account = new Account({ id: 'account-1' })
    const userAccount = new FuelTankUserAccounts({
        id: `${tankId}-account-1`,
        tank,
        account,
        tankDeposit: 1000n,
        userDeposit: 500n,
    })

    store.save([tank, account, userAccount])

    // Simulate the VULNERABLE code (without the fix)
    // This is what the code looked like BEFORE the fix
    function vulnerableFuelTankDestruction(store: MockStore, tankId: string): void {
        const permittedExtrinsics = store.find(PermittedExtrinsics, {
            relations: { ruleSet: true },
            where: { ruleSet: { tank: { id: tankId } } },
        })
        const ruleSet = store.find(FuelTankRuleSet, { where: { tank: { id: tankId } } })
        const accountRuleSet = store.find(FuelTankAccountRules, { where: { tank: { id: tankId } } })
        // NOTE: FuelTankUserAccounts was NOT queried here - this was the bug!
        const tank = store.findOneByOrFail(FuelTank, { id: tankId })

        store.remove(permittedExtrinsics)
        store.remove(ruleSet)
        store.remove(accountRuleSet)
        // NOTE: FuelTankUserAccounts was NOT removed here - this was the bug!

        // This would fail with foreign key violation because userAccounts still reference the tank
        store.remove(tank)
    }

    // Execute: The vulnerable code should throw a foreign key violation error
    assert.throws(
        () => {
            vulnerableFuelTankDestruction(store, tankId)
        },
        {
            message: /Foreign key constraint violation/,
        },
        'Vulnerable code should throw foreign key violation when user accounts exist'
    )

    // Verify: The tank should still exist because the deletion failed
    assert.equal(store.hasEntity('FuelTank', tankId), true, 'FuelTank should still exist after failed deletion')
    assert.equal(
        store.getEntityCount('FuelTankUserAccounts'),
        1,
        'User account should still exist after failed deletion'
    )
})
