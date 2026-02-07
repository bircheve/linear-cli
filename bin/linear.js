#!/usr/bin/env node

import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readdirSync } from 'node:fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { failHandler } from '../src/error.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const pkg = require('../package.json');

const commandsDir = join(__dirname, '..', 'src', 'commands');

// Dynamically import all command modules (ESM-compatible)
const commandFiles = readdirSync(commandsDir).filter(f => f.endsWith('.js'));
const commandModules = await Promise.all(
  commandFiles.map(f => import(join(commandsDir, f)))
);

let cli = yargs(hideBin(process.argv))
  .scriptName('linear')
  .version(pkg.version)
  .option('json', {
    type: 'boolean',
    describe: 'Output as JSON',
    global: true,
  })
  .option('no-color', {
    type: 'boolean',
    describe: 'Disable color output',
    global: true,
  })
  .option('verbose', {
    type: 'boolean',
    describe: 'Enable verbose output',
    global: true,
  });

for (const mod of commandModules) {
  cli = cli.command(mod);
}

cli
  .demandCommand(1, 'You must specify a command. Run --help to see available commands.')
  .strict()
  .fail(failHandler)
  .help()
  .alias('h', 'help')
  .wrap(Math.min(120, process.stdout.columns || 80))
  .parse();
