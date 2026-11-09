import { isEthereumAddress } from '@polkadot/util-crypto'

/**
 * Whether user input is a 20-byte Ethereum address, with or without a `0x`/`0X` prefix.
 * All-lowercase and all-uppercase hex is accepted; mixed case must carry a valid EIP-55 checksum.
 */
export function isEthereumAddressInput(value: string): boolean {
    return isEthereumAddress(`0x${value.replace(/^0x/i, '')}`)
}
