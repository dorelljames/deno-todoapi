import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import { MONGO_URL } from "./app.ts";

const client = new MongoClient();
client.connectWithUri(MONGO_URL);

const db = client.database("deno_todoapi");

export default db;
