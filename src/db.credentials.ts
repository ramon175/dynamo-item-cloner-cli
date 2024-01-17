import "dotenv/config";

export const dbCredentials = {
  origin: {
    region: process.env.AWS_ORIGIN_REGION || "eu-west-1",
    credentials: {
      accessKeyId: process.env.AWS_ORIGIN_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_ORIGIN_SECRET_ACCESS_KEY!,
    },
  },
  destination: {
    region: process.env.AWS_DESTINATION_REGION || "cn-north-1",
    credentials: {
      accessKeyId: process.env.AWS_DESTINATION_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_DESTINATION_SECRET_ACCESS_KEY!,
    },
  },
};
