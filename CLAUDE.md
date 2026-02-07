# linear-cli

CLI for the Linear GraphQL API, auto-generated from the GraphQL schema.

## Architecture

Codegen-first: `codegen/generate.js` parses `schema/linear-schema.graphql` and emits
all commands, queries, mutations, enums, and column configs. 138 queries + 307 mutations
= 445 commands across 81 resource groups.

## Project Layout

```
schema/linear-schema.graphql   ← source of truth (download from Linear)
codegen/                       ← hand-written: schema parser, emitters, resource mapper
src/                           ← hand-written runtime: auth, client, error, output, pagination, flag-utils
src/commands/                  ← GENERATED (81 files) — DO NOT EDIT except auth.js and setup.js
src/generated/                 ← GENERATED: queries.js, mutations.js, enums.js, columns.js — DO NOT EDIT
bin/linear.js                  ← entry point
test/                          ← unit + integration tests (Jest, ESM)
```

## Key Commands

```bash
npm run generate        # regenerate all src/commands/ and src/generated/ from schema
npm test                # run all tests (Jest with --experimental-vm-modules)
npm run test:unit       # unit + codegen tests only
npm run test:integration
npm link                # install locally for development
```

## Important Patterns

- **ESM only** (`"type": "module"`). yargs `commandDir()` does NOT work with ESM —
  commands are loaded via dynamic `import()` and registered with `.command(mod)`.
- **Auth resolution order**: `LINEAR_API_KEY` env var → `~/.config/linear-cli/config.json` → error.
  Always use `await getApiKey()` (from `src/auth.js`), never read the env var directly.
- **Import name conflicts**: Some queries and mutations share names (e.g. `initiativeUpdate`).
  Generated code aliases them: `import { initiativeUpdate as initiativeUpdateQuery } from './queries.js'`.
- **Type unwrapping**: GraphQL NonNull → List → NonNull nesting is unwrapped recursively
  in `codegen/type-utils.js`.

## Hand-Written Files (safe to edit)

- `src/auth.js`, `src/client.js`, `src/error.js`, `src/output.js`, `src/pagination.js`, `src/flag-utils.js`
- `src/commands/auth.js`, `src/commands/setup.js`
- Everything in `codegen/`, `bin/`, `test/`

## Generated Files (do not edit — will be overwritten by `npm run generate`)

- `src/commands/*.js` (except `auth.js` and `setup.js`)
- `src/generated/*.js`
