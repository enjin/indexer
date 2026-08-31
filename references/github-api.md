# GitHub API contract

Use an authenticated GitHub API connector. If a connector does not expose a required operation, use an authenticated direct GitHub REST request. Do not fall back to Chrome, browser automation, HTML scraping, local Git, or workflow-oriented CLI commands.

## Repositories

- Source: `enjin/indexer`
- Build: `enjin/indexer-internal`
- Deployment: `enjin/kubernetes-indexer`

## Resolve a pushed branch

Read the exact remote branch ref:

```http
GET /repos/enjin/indexer/git/ref/heads/{url-encoded-branch}
```

Use `object.sha` and require 40 lowercase or uppercase hexadecimal characters. A branch name containing `/` must be URL encoded as a path value.

## Dispatch the build

```http
POST /repos/enjin/indexer-internal/actions/workflows/build.yml/dispatches
```

```json
{
  "ref": "master",
  "inputs": {
    "ref": "<full-indexer-sha>",
    "force_internal_repo_ref": "false"
  }
}
```

An HTTP `204` means the dispatch was accepted. Stop interacting with Actions after this response. Do not list or fetch workflow runs.

Workflow page: `https://github.com/enjin/indexer-internal/actions/workflows/build.yml`

## Environment map

| Chain | Stage | Variant | Path | Expected image name |
|---|---|---|---|---|
| matrixchain | staging | canary | `matrixchain/canary-staging/kustomization.yml` | `enjin/indexer-matrixchain` |
| matrixchain | staging | enjin | `matrixchain/enjin-staging/kustomization.yml` | `enjin/indexer-matrixchain` |
| matrixchain | production | canary | `matrixchain/canary-production/kustomization.yml` | `enjin/indexer-matrixchain` |
| matrixchain | production | enjin | `matrixchain/enjin-production/kustomization.yml` | `enjin/indexer-matrixchain` |
| relaychain | staging | canary | `relaychain/canary-staging/kustomization.yml` | `enjin/indexer-relaychain` |
| relaychain | staging | enjin | `relaychain/enjin-staging/kustomization.yml` | `enjin/indexer-relaychain` |
| relaychain | production | canary | `relaychain/canary-production/kustomization.yml` | `enjin/indexer-relaychain` |
| relaychain | production | enjin | `relaychain/enjin-production/kustomization.yml` | `enjin/indexer-relaychain` |

## Read and update the manifest

Read the selected file and retain its blob SHA:

```http
GET /repos/enjin/kubernetes-indexer/contents/{path}?ref=master
```

Decode `content`, change exactly one expected `newTag`, and preserve the rest of the UTF-8 file byte-for-byte. Write the complete file:

```http
PUT /repos/enjin/kubernetes-indexer/contents/{path}
```

```json
{
  "branch": "master",
  "message": "Deploy indexer <short-sha> to <chain>/<variant>-<stage>",
  "content": "<base64-encoded-complete-file>",
  "sha": "<blob-sha-from-confirmed-preview>"
}
```

Use the response commit SHA and HTML URL in the final report. Never create a branch or pull request.
