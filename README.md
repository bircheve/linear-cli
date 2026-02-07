# linear-cli

A comprehensive CLI for the [Linear](https://linear.app) GraphQL API, auto-generated from the schema.

Covers **138 queries** and **307 mutations** across **81 resource groups** — 445 commands total.

## Install

**Homebrew** (recommended):

```bash
brew tap bircheve/linear-cli
brew install linear-cli
```

**npm**:

```bash
npm install -g linear-cli
```

## Quick Start

```bash
linear setup          # paste your API key (from https://linear.app/settings/api)
linear issue list     # you're in
```

Your key is saved to `~/.config/linear-cli/config.json` (mode 600).

### Authentication Commands

```bash
linear auth login     # save / update your API key
linear auth logout    # remove saved key
linear auth whoami    # show current user
```

Set `LINEAR_API_KEY` as an environment variable to override the stored key.

## Usage

```bash
linear <resource> <action> [options]
```

### Examples

```bash
# List first 10 issues
linear issue list --first 10

# Create an issue
linear issue create --team-id TEAM_ID --title "Bug fix" --priority 2

# Update an issue
linear issue update ISSUE_ID --state-id STATE_ID

# List projects as JSON
linear project list --json

# List all teams (auto-paginate)
linear team list --all

# Get a single issue
linear issue get ISSUE_ID

# Filter issues with JSON
linear issue list --filter-json '{"state":{"name":{"eq":"In Progress"}}}'

# Create from a JSON file
linear issue create --input-json @issue.json
```

### Global Options

| Flag | Description |
|------|-------------|
| `--json` | Output as JSON |
| `--no-color` | Disable color output |
| `--verbose` | Enable verbose output |
| `--help` | Show help |
| `--version` | Show version |

### Pagination

List commands support cursor-based pagination:

| Flag | Description |
|------|-------------|
| `--first N` | Fetch first N results (default: 50) |
| `--after CURSOR` | Cursor for forward pagination |
| `--last N` | Fetch last N results |
| `--before CURSOR` | Cursor for backward pagination |
| `--all` | Auto-paginate through all results (up to 10,000) |

### Input Formats

- **Individual flags**: `--title "My issue" --team-id TEAM_ID`
- **JSON string**: `--input-json '{"title":"My issue","teamId":"TEAM_ID"}'`
- **JSON file**: `--input-json @input.json`
- **Filter JSON**: `--filter-json '{"state":{"name":{"eq":"Done"}}}'`

## Regeneration

After updating the schema:

```bash
cp /path/to/new-schema.graphql schema/linear-schema.graphql
npm run generate
```

## Development

```bash
npm install
npm run generate    # Generate commands from schema
npm test            # Run tests
```

## License

MIT
