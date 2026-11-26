#!/usr/bin/env sh
set -e

# Validate that HASURA_GRAPHQL_ADMIN_SECRET is set and not a placeholder
if [ -z "$HASURA_GRAPHQL_ADMIN_SECRET" ]; then
    echo "ERROR: HASURA_GRAPHQL_ADMIN_SECRET is not set."
    echo "Please set a strong random secret in your .env file."
    echo "Generate one with: openssl rand -base64 32"
    exit 1
fi

if [ "$HASURA_GRAPHQL_ADMIN_SECRET" = "CHANGE_ME" ]; then
    echo "ERROR: HASURA_GRAPHQL_ADMIN_SECRET is still set to the placeholder value 'CHANGE_ME'."
    echo "Please set a strong random secret in your .env file."
    echo "Generate one with: openssl rand -base64 32"
    exit 1
fi

# Validate minimum length (at least 16 characters for reasonable security)
secret_length=${#HASURA_GRAPHQL_ADMIN_SECRET}
if [ "$secret_length" -lt 16 ]; then
    echo "ERROR: HASURA_GRAPHQL_ADMIN_SECRET is too short (${secret_length} characters)."
    echo "Please use a secret of at least 16 characters."
    echo "Generate one with: openssl rand -base64 32"
    exit 1
fi

echo "HASURA_GRAPHQL_ADMIN_SECRET validation passed."

# Execute the original Hasura entrypoint
exec graphql-engine "$@"
