#!/usr/bin/env node
import { Command } from "commander";
import { cloneItem } from "./controller";

function errorColor(str: string) {
  // Add ANSI escape codes to display text in red.
  return `\x1b[31m${str}\x1b[0m`;
}

const program = new Command();

program
  .name("dynamo-cloner-cli")
  .description("CLI tool for DynamoDB item cloning");

program
  .command("clone")
  .description("Clone DynamoDB items")
  .argument("<table>", "Table name")
  .argument("<id>", "Item ID")
  .action(async (table: string, id: string) => {
    console.log(`Cloning item with ID: ${id} from table ${table}`);

    try {
      await cloneItem(id, table);
    } catch (error: unknown) {
      const err = error as Error;
      program.error(err.message);
    }
  });

program.parse(process.argv);

program.configureOutput({
  // Print error messages in red.
  writeErr: (str: string) => process.stderr.write(`[ERR] ${str}`),
  outputError: (str: string, write: (str: string) => void) =>
    write(errorColor(str)),
});
