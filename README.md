## AWS DynamoDB Item Cloner CLI
 
A CLI tool that allows you to clone an item from a specified DynamoDB within a region into another, mainly built to avoid manual copy of items between ROW and China.

The CLI is built using NodeJS and Commander, and has a single commando called `clone`, that takes the following 2 mandatory arguments.

```
<table> - The table within DynamoDB that you want the item to be cloned from (table on the destination region has to match names)
<id> - The item id
```
 
Currently, to run it, a couple of environment variables need to be configured previously:
 
```
AWS_DESTINATION_ACCESS_KEY_ID=
AWS_DESTINATION_SECRET_ACCESS_KEY=
AWS_ORIGIN_ACCESS_KEY_ID=
AWS_ORIGIN_SECRET_ACCESS_KEY=
---Optional---
AWS_ORIGIN_REGION=
AWS_DESTINATION_REGION=
```

### Example usage

To link the cli tool, run the command `link-cli` on the scripts section of `package.json`.
After it's linked, build the project with `tsc` using the `build` script and finally run:

```
dynamo-cloner clone table_name 123
```
 
### Export variables from your .env file
 
`export $(grep -v '^#' .env | xargs)` or just use `dotenv`