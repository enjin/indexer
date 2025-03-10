FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install --global corepack@latest
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm exec papi
RUN pnpm run build

FROM base
LABEL org.opencontainers.image.source=https://github.com/enjin/indexer
LABEL org.opencontainers.image.description="Enjin Blockchain Indexer"
LABEL org.opencontainers.image.licenses=GPLv3

WORKDIR /squid

COPY --from=prod-deps /app/package.json /squid/package.json
COPY --from=prod-deps /app/node_modules /squid/node_modules
COPY --from=build /app/lib /squid/lib

ADD db db
ADD schema.graphql .
ENV PROCESSOR_PROMETHEUS_PORT 3000
EXPOSE 3000
EXPOSE 4000
EXPOSE 9090
EXPOSE 8080
EXPOSE 8000

COPY --chmod=0755 start.sh .

CMD ["/bin/sh", "-c", "/squid/start.sh"]