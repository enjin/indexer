import { CommonContext } from '~/contexts'
import {
    GovernanceActivity,
    GovernanceDelegation,
    GovernanceFellowshipMember,
    GovernanceReferendum,
    GovernanceTreasuryItem,
    GovernanceVote,
    GovernanceWhitelistedCall,
} from '~/model'
import { storage } from '~/type'
import { Block } from '~/type/support'
import { In } from 'typeorm'

type GovernanceContext = Pick<CommonContext, 'store'>
type GovernanceEvent = {
    id: string
    name: string
    args: unknown
    call?: { args: unknown }
    extrinsic?: { id: string }
}

type StorageReader = {
    is(block: Block): boolean
    get(block: Block, index: number): Promise<unknown>
}

type ReferendumInfo = {
    __kind: string
    value?: {
        track?: number
        proposal?: unknown
        tally?: { ayes: bigint; nays: bigint; support: bigint }
        submissionDeposit?: unknown
        decisionDeposit?: unknown
        submitted?: number
    }
}

const referendumPallets = new Set(['Referenda', 'FellowshipReferenda'])
const maxStoredPreimageBytes = 64 * 1024

// Runtime JSON may contain bigints and byte arrays, neither of which JSONB accepts directly.
function jsonValue(value: unknown): unknown {
    if (typeof value === 'bigint') return value.toString()
    if (value instanceof Uint8Array) return `0x${Buffer.from(value).toString('hex')}`
    if (Array.isArray(value)) return value.map(jsonValue)
    if (value && typeof value === 'object') {
        return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, jsonValue(item)]))
    }
    return value
}

function record(value: unknown): Record<string, unknown> {
    return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {}
}

function index(value: unknown): number | undefined {
    return typeof value === 'number' && Number.isSafeInteger(value) && value >= 0 ? value : undefined
}

function account(value: unknown): string | undefined {
    return typeof value === 'string'
        ? value
        : value instanceof Uint8Array
          ? `0x${Buffer.from(value).toString('hex')}`
          : undefined
}

function currencyKey(value: unknown): string {
    const currency = record(value)
    if (currency.__kind === 'SEnj') return `SEnj:${String(currency.tokenId)}`
    return typeof currency.__kind === 'string' ? currency.__kind : 'Enj'
}

function balance(value: unknown): bigint | null {
    if (typeof value === 'bigint') return value
    return typeof value === 'string' && /^\d+$/.test(value) ? BigInt(value) : null
}

function eventIndex(
    pallet: string,
    args: Record<string, unknown>,
    callArgs: Record<string, unknown>
): number | undefined {
    if (referendumPallets.has(pallet)) return index(args.index)
    if (pallet === 'ConvictionVoting') return index(args.pollIndex) ?? index(callArgs.pollIndex)
    if (pallet === 'FellowshipCollective') return index(args.poll)
    if (pallet === 'Treasury') return index(args.proposalIndex) ?? index(args.index)
    return undefined
}

function eventAccount(value: unknown): string | undefined {
    const args = record(value)
    return (
        account(value) ??
        account(args.who) ??
        account(args.account) ??
        account(args.voter) ??
        account(args.beneficiary) ??
        (Array.isArray(value) ? account(value[0]) : undefined)
    )
}

function targetAccount(value: unknown): string | undefined {
    const address = record(value)
    return account(value) ?? account(address.value)
}

async function updatePreimage(
    block: Block,
    referendum: GovernanceReferendum,
    proposal: unknown,
    retry = false
): Promise<void> {
    const bounded = record(proposal)
    if (bounded.__kind === 'Inline') {
        referendum.proposalPreimageHash = null
        referendum.proposalPreimageStatus = 'Inline'
        referendum.proposalPreimage = null
        return
    }
    if (bounded.__kind !== 'Lookup' && bounded.__kind !== 'Legacy') return

    const hash = account(bounded.hash)
    if (!hash) return
    if (referendum.proposalPreimageHash !== hash) {
        referendum.proposalPreimageHash = hash
        referendum.proposalPreimage = null
        referendum.proposalPreimageStatus = 'Unresolved'
    }
    if (
        ['Resolved', 'AvailableTooLarge'].includes(referendum.proposalPreimageStatus ?? '') ||
        (referendum.proposalPreimageStatus === 'Missing' && !retry) ||
        bounded.__kind !== 'Lookup'
    ) {
        return
    }

    const len = index(bounded.len)
    const preimageStorage = storage.preimage.preimageFor.matrixEnjinV603
    if (len === undefined || !preimageStorage.is(block)) return
    const bytes = await preimageStorage.get(block, [hash, len])
    if (!bytes) {
        referendum.proposalPreimageStatus = 'Missing'
        return
    }
    const byteLength = (bytes.length - 2) / 2
    referendum.proposalPreimageStatus = byteLength > maxStoredPreimageBytes ? 'AvailableTooLarge' : 'Resolved'
    referendum.proposalPreimage = byteLength > maxStoredPreimageBytes ? null : bytes
}

async function referendumInfo(
    block: Block,
    pallet: string,
    referendumIndex: number
): Promise<ReferendumInfo | undefined> {
    const variants =
        pallet === 'Referenda' ? storage.referenda.referendumInfoFor : storage.fellowshipReferenda.referendumInfoFor
    const reader = Object.values(variants).find((variant) => (variant as StorageReader).is(block)) as
        StorageReader | undefined
    if (!reader) throw new Error(`Unsupported ${pallet}.ReferendumInfoFor runtime at block ${block.height}`)
    return (await reader.get(block, referendumIndex)) as ReferendumInfo | undefined
}

async function refreshReferendum(
    ctx: GovernanceContext,
    block: Block,
    pallet: string,
    referendumIndex: number,
    eventName: string,
    args: Record<string, unknown>
): Promise<void> {
    const id = `${pallet}:${referendumIndex}`
    const existing = await ctx.store.findOneBy(GovernanceReferendum, { id })
    if (existing && existing.updatedAtBlock > block.height) return
    const referendum =
        existing ??
        new GovernanceReferendum({ id, pallet, referendumIndex, status: 'Ongoing', updatedAtBlock: block.height })

    const info = await referendumInfo(block, pallet, referendumIndex)
    if (info?.__kind === 'Ongoing' && info.value) {
        referendum.track = info.value.track ?? referendum.track
        referendum.proposal = jsonValue(info.value.proposal) ?? referendum.proposal
        referendum.submissionDeposit = jsonValue(info.value.submissionDeposit) ?? null
        referendum.decisionDeposit = jsonValue(info.value.decisionDeposit) ?? null
        referendum.tallyAyes = info.value.tally?.ayes ?? null
        referendum.tallyNays = info.value.tally?.nays ?? null
        referendum.tallySupport = info.value.tally?.support ?? null
        referendum.submittedAtBlock = info.value.submitted ?? referendum.submittedAtBlock
        await updatePreimage(block, referendum, info.value.proposal)
    } else if (info?.__kind) {
        referendum.status = info.__kind
    }

    if (eventName === 'Submitted') {
        referendum.status = 'Ongoing'
        referendum.track = index(args.track) ?? referendum.track
        referendum.proposal = jsonValue(args.proposal) ?? referendum.proposal
        referendum.submittedAtBlock = block.height
        await updatePreimage(block, referendum, args.proposal)
    } else if (eventName === 'DecisionStarted' || eventName === 'ConfirmStarted' || eventName === 'Confirmed') {
        referendum.status = eventName.replace('DecisionStarted', 'Deciding').replace('ConfirmStarted', 'Confirming')
    } else if (eventName === 'ConfirmAborted') {
        referendum.status = 'Deciding'
    } else if (['Approved', 'Rejected', 'TimedOut', 'Cancelled', 'Killed'].includes(eventName)) {
        referendum.status = eventName
    }

    if (eventName === 'MetadataSet') referendum.metadataHash = account(args.hash) ?? null
    if (eventName === 'MetadataCleared') referendum.metadataHash = null
    if (eventName === 'DecisionDepositRefunded') referendum.decisionDeposit = null
    if (eventName === 'SubmissionDepositRefunded') referendum.submissionDeposit = null
    referendum.updatedAtBlock = block.height
    await ctx.store.save(referendum)
}

async function updateVote(
    ctx: GovernanceContext,
    block: Block,
    pallet: string,
    eventName: string,
    referendumIndex: number | undefined,
    voter: string | undefined,
    args: Record<string, unknown>,
    callArgs: Record<string, unknown>
): Promise<void> {
    if (referendumIndex === undefined || !voter) return
    const referendumId =
        pallet === 'FellowshipCollective' ? `FellowshipReferenda:${referendumIndex}` : `Referenda:${referendumIndex}`
    const currency = pallet === 'ConvictionVoting' ? currencyKey(args.currency ?? callArgs.currency) : null
    const id = `${referendumId}:${voter}:${currency ?? 'Fellowship'}`
    const existing = await ctx.store.findOneBy(GovernanceVote, { id })
    if (existing && existing.updatedAtBlock > block.height) return
    const vote =
        existing ??
        new GovernanceVote({
            id,
            referendumId,
            accountId: voter,
            currency,
            active: false,
            updatedAtBlock: block.height,
        })
    vote.active = eventName === 'Voted'
    vote.vote = eventName === 'Voted' ? (jsonValue(args.vote) ?? null) : null
    vote.updatedAtBlock = block.height
    await ctx.store.save(vote)
    await refreshReferendum(ctx, block, referendumId.split(':')[0], referendumIndex, '', {})
}

async function updateDelegation(
    ctx: GovernanceContext,
    block: Block,
    eventName: string,
    rawArgs: unknown,
    callArgs: Record<string, unknown>
): Promise<void> {
    const args = record(rawArgs)
    const tuple = Array.isArray(rawArgs) ? rawArgs : []
    const voter = eventAccount(rawArgs)
    if (!voter) return
    const track = index(args.class) ?? index(tuple[2]) ?? index(callArgs.class)
    const currency = currencyKey(args.currency ?? callArgs.currency)
    const id = `${voter}:${track ?? 'all'}:${currency}`
    const existing = await ctx.store.findOneBy(GovernanceDelegation, { id })
    if (existing && existing.updatedAtBlock > block.height) return
    const delegation =
        existing ??
        new GovernanceDelegation({
            id,
            accountId: voter,
            track: track ?? null,
            currency,
            active: false,
            updatedAtBlock: block.height,
        })
    delegation.active = eventName === 'Delegated'
    delegation.target = delegation.active ? (targetAccount(args.target ?? tuple[1] ?? callArgs.to) ?? null) : null
    delegation.balance = delegation.active ? balance(callArgs.balance) : null
    const convictionKind = record(callArgs.conviction).__kind
    delegation.conviction = delegation.active
        ? typeof convictionKind === 'string'
            ? convictionKind
            : typeof callArgs.conviction === 'string'
              ? callArgs.conviction
              : null
        : null
    delegation.updatedAtBlock = block.height
    await ctx.store.save(delegation)

    const referenda = await ctx.store.find(GovernanceReferendum, {
        where: {
            pallet: 'Referenda',
            status: In(['Ongoing', 'Deciding', 'Confirming', 'Confirmed']),
            ...(track === undefined ? {} : { track }),
        },
    })
    for (const referendum of referenda) {
        await refreshReferendum(ctx, block, 'Referenda', referendum.referendumIndex, '', {})
    }
}

async function updateFellowshipMember(ctx: GovernanceContext, block: Block, memberId: string): Promise<void> {
    const reader = storage.fellowshipCollective.members.matrixV1040
    if (!reader.is(block)) throw new Error(`Unsupported FellowshipCollective.Members runtime at block ${block.height}`)
    const state = await reader.get(block, memberId)
    const existing = await ctx.store.findOneBy(GovernanceFellowshipMember, { id: memberId })
    if (existing && existing.updatedAtBlock > block.height) return
    const member =
        existing ?? new GovernanceFellowshipMember({ id: memberId, active: false, updatedAtBlock: block.height })
    member.active = state !== undefined
    member.rank = state?.rank ?? null
    member.updatedAtBlock = block.height
    await ctx.store.save(member)
}

async function updateTreasuryItem(
    ctx: GovernanceContext,
    block: Block,
    eventName: string,
    args: Record<string, unknown>
): Promise<void> {
    const proposalIndex = index(args.proposalIndex)
    const spendIndex = index(args.index)
    const kind = proposalIndex !== undefined ? 'Proposal' : 'Spend'
    const itemIndex = proposalIndex ?? spendIndex
    if (itemIndex === undefined) return
    const id = `${kind}:${itemIndex}`
    const existing = await ctx.store.findOneBy(GovernanceTreasuryItem, { id })
    if (existing && existing.updatedAtBlock > block.height) return
    const item =
        existing ?? new GovernanceTreasuryItem({ id, kind, itemIndex, status: eventName, updatedAtBlock: block.height })

    const reader = kind === 'Proposal' ? storage.treasury.proposals.enjinV100 : storage.treasury.spends.enjinV1032
    if (!reader.is(block)) throw new Error(`Unsupported Treasury.${kind} storage at block ${block.height}`)
    const state = await reader.get(block, itemIndex)
    item.details = state === undefined ? (item.details ?? jsonValue(args)) : jsonValue(state)
    item.status = eventName
    item.updatedAtBlock = block.height
    await ctx.store.save(item)
}

async function updateWhitelistedCall(
    ctx: GovernanceContext,
    block: Block,
    eventName: string,
    args: Record<string, unknown>
): Promise<void> {
    const callHash = account(args.callHash)
    if (!callHash) return
    const existing = await ctx.store.findOneBy(GovernanceWhitelistedCall, { id: callHash })
    if (existing && existing.updatedAtBlock > block.height) return
    const call =
        existing ?? new GovernanceWhitelistedCall({ id: callHash, active: false, updatedAtBlock: block.height })
    const reader = storage.whitelist.whitelistedCall.matrixV1040
    if (reader.is(block)) {
        call.active = (await reader.get(block, callHash)) !== undefined
    } else if (eventName === 'CallWhitelisted') {
        call.active = true
    } else if (eventName === 'WhitelistedCallRemoved' || eventName === 'WhitelistedCallDispatched') {
        call.active = false
    }
    if (eventName === 'WhitelistedCallDispatched') call.lastDispatchedBlock = block.height
    call.updatedAtBlock = block.height
    await ctx.store.save(call)
}

export async function processEvent(ctx: GovernanceContext, block: Block, item: GovernanceEvent): Promise<void> {
    const [pallet, eventName] = item.name.split('.')
    const args = record(item.args)
    const callArgs = record(item.call?.args)
    const referendumIndex = eventIndex(pallet, args, callArgs)
    const voter = eventAccount(item.args)

    await ctx.store.save(
        new GovernanceActivity({
            id: item.id,
            pallet,
            name: item.name,
            referendumId:
                referendumIndex !== undefined && referendumPallets.has(pallet)
                    ? `${pallet}:${referendumIndex}`
                    : referendumIndex !== undefined && ['ConvictionVoting', 'FellowshipCollective'].includes(pallet)
                      ? `${pallet === 'ConvictionVoting' ? 'Referenda' : 'FellowshipReferenda'}:${referendumIndex}`
                      : null,
            accountId: voter ?? null,
            blockNumber: block.height,
            extrinsicId: item.extrinsic?.id ?? null,
            data: jsonValue(item.args),
        })
    )

    if (referendumPallets.has(pallet) && referendumIndex !== undefined) {
        await refreshReferendum(ctx, block, pallet, referendumIndex, eventName, args)
    } else if (
        (pallet === 'ConvictionVoting' && ['Voted', 'VoteRemoved'].includes(eventName)) ||
        (pallet === 'FellowshipCollective' && eventName === 'Voted')
    ) {
        await updateVote(ctx, block, pallet, eventName, referendumIndex, voter, args, callArgs)
    } else if (pallet === 'ConvictionVoting' && ['Delegated', 'Undelegated'].includes(eventName)) {
        await updateDelegation(ctx, block, eventName, item.args, callArgs)
    } else if (
        pallet === 'FellowshipCollective' &&
        ['MemberAdded', 'RankChanged', 'MemberRemoved', 'MemberExchanged'].includes(eventName)
    ) {
        if (voter) await updateFellowshipMember(ctx, block, voter)
        if (eventName === 'MemberExchanged') {
            const newMember = account(args.newWho)
            if (newMember) await updateFellowshipMember(ctx, block, newMember)
        }
    } else if (pallet === 'Treasury') {
        await updateTreasuryItem(ctx, block, eventName, args)
    } else if (pallet === 'Whitelist') {
        await updateWhitelistedCall(ctx, block, eventName, args)
    } else if (pallet === 'Preimage' && ['Noted', 'Cleared'].includes(eventName)) {
        const hash = account(args.hash)
        if (!hash) return
        const referenda = await ctx.store.find(GovernanceReferendum, { where: { proposalPreimageHash: hash } })
        for (const referendum of referenda) {
            if (referendum.updatedAtBlock > block.height) continue
            if (eventName === 'Cleared') {
                referendum.proposalPreimageStatus = 'Missing'
                referendum.proposalPreimage = null
            } else {
                await updatePreimage(block, referendum, referendum.proposal, true)
            }
            referendum.updatedAtBlock = block.height
            await ctx.store.save(referendum)
        }
    }
}
