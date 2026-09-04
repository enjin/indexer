import { Logger } from '~/util/logger'
import config from '~/util/config'
import { initializeCrashReporting, reportCrash } from '~/util/crash-report'

const role = process.env.CONTAINER_EXIT_ROLE || 'unknown'
const phase = process.env.CONTAINER_EXIT_PHASE || 'runtime'
const exitCode = Number.parseInt(process.env.CONTAINER_EXIT_CODE || '1', 10)
const signal = exitCode > 128 ? exitCode - 128 : undefined
const signalName = signal ? getSignalName(signal) : undefined
const possibleCause = exitCode === 137 ? 'SIGKILL; check the pod status for OOMKilled or forced termination' : undefined
const logger = new Logger(`sqd:${role}`, config.logLevel)

initializeCrashReporting(role)

const error = new Error(
    `Container ${role} ${phase} exited with code ${exitCode}${signalName ? ` (${signalName})` : ''}`
)

void reportCrash(error, logger, role, 'container.exit', {
    exitCode,
    phase,
    possibleCause,
    signal,
    signalName,
}).finally(() => {
    process.exitCode = 0
})

function getSignalName(signalNumber: number): string | undefined {
    const signals: Record<number, string> = {
        1: 'SIGHUP',
        2: 'SIGINT',
        3: 'SIGQUIT',
        6: 'SIGABRT',
        9: 'SIGKILL',
        11: 'SIGSEGV',
        15: 'SIGTERM',
    }

    return signals[signalNumber]
}
