#!/usr/bin/env sh
set -e

ROLE=${CONTAINER_ROLE:-processor}
TRUNCATE_DATABASE=${TRUNCATE_DATABASE:-false}

send_crash_report() {
    crash_status=$1
    crash_phase=$2

    # SIGINT and SIGTERM are expected during an operator stop or Kubernetes rollout.
    if [ "$crash_status" -eq 130 ] || [ "$crash_status" -eq 143 ]; then
        echo "Container $ROLE $crash_phase stopped by signal (exit code $crash_status)"
        return 0
    fi

    echo "Container $ROLE $crash_phase crashed (exit code $crash_status); sending crash report"
    CONTAINER_EXIT_CODE="$crash_status" \
        CONTAINER_EXIT_PHASE="$crash_phase" \
        CONTAINER_EXIT_ROLE="$ROLE" \
        node -r dotenv/config lib/report-container-exit.js || echo "Failed to send container crash report"
}

run_and_report() {
    crash_phase=$1
    shift

    if "$@"; then
        return 0
    else
        crash_status=$?
    fi

    send_crash_report "$crash_status" "$crash_phase"

    return "$crash_status"
}

stop_graphql_processes() {
    [ -z "$graphql_pid" ] || kill -TERM "$graphql_pid" 2>/dev/null || true
    [ -z "$metrics_pid" ] || kill -TERM "$metrics_pid" 2>/dev/null || true
    [ -z "$decoder_pid" ] || kill -TERM "$decoder_pid" 2>/dev/null || true
}

run_graphql() {
    graphql_pid=
    metrics_pid=
    decoder_pid=
    graphql_shutdown_requested=false

    trap 'graphql_shutdown_requested=true; stop_graphql_processes' INT TERM

    pnpm run metrics &
    metrics_pid=$!
    pnpm run decoder &
    decoder_pid=$!
    node \
        -r dotenv/config \
        -r ./lib/graphql-bootstrap.js \
        node_modules/@subsquid/graphql-server/bin/run.js \
        --subscriptions \
        --dumb-cache redis \
        --dumb-cache-max-age 3000 \
        --max-root-fields 10 \
        --sql-statement-timeout 30000 &
    graphql_pid=$!

    if wait "$graphql_pid"; then
        graphql_status=0
    else
        graphql_status=$?
    fi

    trap - INT TERM
    stop_graphql_processes
    wait "$metrics_pid" 2>/dev/null || true
    wait "$decoder_pid" 2>/dev/null || true

    if [ "$graphql_shutdown_requested" = "true" ]; then
        return "$graphql_status"
    fi

    send_crash_report "$graphql_status" runtime
    return "$graphql_status"
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
    # Keep the shell alive as a supervisor so it can report the GraphQL exit,
    # then terminate the side processes and exit so Kubernetes restarts the pod.
    run_graphql
elif [ "$ROLE" = "worker" ]; then
    run_and_report runtime pnpm run worker
else
    echo "Could not match the container role \"$ROLE\""
    exit 1
fi
