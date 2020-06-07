import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import { MONGO_URL, MONGO_DBNAME } from "./app.ts";

const client = new MongoClient();
client.connectWithUri(MONGO_URL);

const db = client.database(MONGO_DBNAME);

export default db;
