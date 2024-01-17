import { DynamoDBClient, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";

export default class DynamoDBInstance {
  private client: DynamoDBClient;
  private documentClient: DynamoDBDocumentClient;

  constructor(config: DynamoDBClientConfig) {
    this.client = new DynamoDBClient(config);
    this.documentClient = DynamoDBDocumentClient.from(this.client);
  }

  async getItem(tableName: string, key: Record<string, any>): Promise<any> {
    const command = new GetCommand({
      TableName: tableName,
      Key: key,
    });

    try {
      const response = await this.documentClient.send(command);
      return response.Item;
    } catch (error) {
      console.error("Error retrieving item:", error);
      throw error;
    }
  }

  async insertItem(
    tableName: string,
    item: Record<string, any>
  ): Promise<void> {
    const command = new PutCommand({
      TableName: tableName,
      Item: item,
    });

    try {
      await this.documentClient.send(command);
      console.log("Item inserted successfully");
    } catch (error) {
      console.error("Error inserting item:", error);
      throw error;
    }
  }
}
