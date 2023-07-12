#!/usr/bin/env bash
set -a
source .env
set +a

docker compose build indexer_processor --no-cache
aws ecr get-login-password --region "${AWS_ECR_REGION}" | docker login --username "${AWS_ECR_USER}" --password-stdin "${AWS_ECR_URL}"
docker tag ghcr.io/efinity/indexer:latest "${AWS_ECR_URL}"/indexer-matrixchain-graphql:latest
docker push "${AWS_ECR_URL}"/indexer-matrixchain-graphql:latest
docker tag "${AWS_ECR_URL}"/indexer-matrixchain-graphql:latest "${AWS_ECR_URL}"/indexer-matrixchain-processor:latest
docker push "${AWS_ECR_URL}"/indexer-matrixchain-processor:latest
docker tag "${AWS_ECR_URL}"/indexer-matrixchain-processor:latest "${AWS_ECR_URL}"/indexer-matrixchain-graphql:"${TAG_VERSION}"
docker push "${AWS_ECR_URL}"/indexer-matrixchain-graphql:"${TAG_VERSION}"
docker tag "${AWS_ECR_URL}"/indexer-matrixchain-graphql:"${TAG_VERSION}" "${AWS_ECR_URL}"/indexer-matrixchain-processor:"${TAG_VERSION}"
docker push "${AWS_ECR_URL}"/indexer-matrixchain-processor:"${TAG_VERSION}"

echo "Deployment finished!"
