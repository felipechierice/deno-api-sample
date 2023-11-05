import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

export const up = (db: Client) => db.queryArray(`
    CREATE TABLE phrasal_verbs (
        id SERIAL PRIMARY KEY,
        verb VARCHAR(255) NOT NULL,
        translation TEXT NOT NULL,
        example TEXT NOT NULL
    );
`);
