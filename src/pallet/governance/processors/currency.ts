export function sEnjCurrency(currency: Record<string, unknown>): string {
    const tokenId = currency.tokenId ?? currency.value
    if (
        (typeof tokenId !== 'bigint' && typeof tokenId !== 'number' && typeof tokenId !== 'string') ||
        !/^\d+$/.test(String(tokenId)) ||
        (typeof tokenId === 'number' && !Number.isSafeInteger(tokenId))
    ) {
        throw new Error('Governance sENJ currency contains an invalid token ID')
    }
    return `SEnj-${String(tokenId)}`
}
