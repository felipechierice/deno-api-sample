import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const db = new Client({
    user: "english",
    password: "english",
    database: "english",
    hostname: "localhost",
    port: 5432,
});

await db.connect();

export { db };
