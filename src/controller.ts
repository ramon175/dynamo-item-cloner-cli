import DynamoDBInstance from "./db";
import { dbCredentials } from "./db.credentials";

const originDb = new DynamoDBInstance(dbCredentials.origin);
const destinationDb = new DynamoDBInstance(dbCredentials.destination);

export const cloneItem = async (id: string, tableName: string) => {
  const item = await originDb.getItem(tableName, { id });

  if (!item) {
    throw new Error(`Item with ID ${id} not found`);
  }

  await destinationDb.insertItem(tableName, item);
};
