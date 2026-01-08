import { URL } from 'url'
import dns from 'dns'
import { promisify } from 'util'
import net from 'net'

const dnsLookup = promisify(dns.lookup)

/**
 * Checks if an IP address falls within a private/internal range
 */
function isPrivateIP(ip: string): boolean {
    // Handle IPv4
    if (net.isIPv4(ip)) {
        const parts = ip.split('.').map(Number)

        // 10.0.0.0/8
        if (parts[0] === 10) {
            return true
        }

        // 127.0.0.0/8 (loopback)
        if (parts[0] === 127) {
            return true
        }

        // 172.16.0.0/12
        if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) {
            return true
        }

        // 192.168.0.0/16
        if (parts[0] === 192 && parts[1] === 168) {
            return true
        }

        return false
    }

    // Handle IPv6
    if (net.isIPv6(ip)) {
        // Normalize IPv6 address
        const normalized = ip.toLowerCase()

        // ::1 (loopback)
        if (normalized === '::1' || normalized === '0000:0000:0000:0000:0000:0000:0000:0001') {
            return true
        }

        // fc00::/7 (unique local addresses)
        if (normalized.startsWith('fc') || normalized.startsWith('fd')) {
            return true
        }

        return false
    }

    return false
}

/**
 * Validates a URL to prevent SSRF attacks by checking if it resolves to private IP ranges
 * @param url The URL to validate
 * @throws Error if the URL is invalid or resolves to a private IP
 */
export async function validateUrlForSSRF(url: string): Promise<void> {
    let parsedUrl: URL

    try {
        parsedUrl = new URL(url)
    } catch (error) {
        throw new Error(`Invalid URL: ${url}`)
    }

    // Only check HTTP/HTTPS URLs
    if (!parsedUrl.protocol.startsWith('http')) {
        return
    }

    const hostname = parsedUrl.hostname

    // Check if hostname is already an IP address
    if (net.isIP(hostname)) {
        if (isPrivateIP(hostname)) {
            throw new Error(`SSRF attempt detected: URL resolves to private IP range (${hostname})`)
        }
        return
    }

    // Resolve hostname to IP address
    try {
        const resolved = await dnsLookup(hostname)

        if (isPrivateIP(resolved.address)) {
            throw new Error(`SSRF attempt detected: ${hostname} resolves to private IP range (${resolved.address})`)
        }
    } catch (error: any) {
        // If DNS lookup fails, let it propagate
        if (error.message?.includes('SSRF attempt detected')) {
            throw error
        }
        // For DNS resolution errors, we might want to let the request fail naturally
        // or we could throw here - depends on desired behavior
        throw new Error(`Failed to resolve hostname ${hostname}: ${error.message}`)
    }
}
