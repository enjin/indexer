#!/usr/bin/env sh
set -e

ROLE=${CONTAINER_ROLE:-processor}
TRUNCATE_DATABASE=${TRUNCATE_DATABASE:-false}

run_and_report() {
    crash_phase=$1
    shift

    if "$@"; then
        return 0
    else
        crash_status=$?
    fi

    # SIGINT and SIGTERM are expected during an operator stop or Kubernetes rollout.
    if [ "$crash_status" -eq 130 ] || [ "$crash_status" -eq 143 ]; then
        echo "Container $ROLE $crash_phase stopped by signal (exit code $crash_status)"
        return "$crash_status"
    fi

    echo "Container $ROLE $crash_phase crashed (exit code $crash_status); sending crash report"
    CONTAINER_EXIT_CODE="$crash_status" \
        CONTAINER_EXIT_PHASE="$crash_phase" \
        CONTAINER_EXIT_ROLE="$ROLE" \
        node -r dotenv/config lib/report-container-exit.js || echo "Failed to send container crash report"

    return "$crash_status"
}

if [ "$ROLE" = "processor" ]; then
    if [ "$TRUNCATE_DATABASE" != "true" ]; then
        echo "Running database migration..."
        run_and_report migration pnpm run db:migrate
        echo "Starting processor..."
        run_and_report runtime pnpm run processor
    else
        pnpm run db:wipe || exit
    fi
elif [ "$ROLE" = "graphql" ]; then
    pnpm run metrics &
    pnpm run decoder &
    # graphql-server must be the container's main process: if it dies, the
    # container has to exit so Kubernetes restarts it, instead of lingering
    # NotReady behind the still-alive metrics/decoder side processes.
    exec pnpm exec squid-graphql-server --subscriptions --dumb-cache redis --dumb-cache-max-age 3000 --max-root-fields 10 --sql-statement-timeout 30000
elif [ "$ROLE" = "worker" ]; then
    run_and_report runtime pnpm run worker
else
    echo "Could not match the container role \"$ROLE\""
    exit 1
fi
