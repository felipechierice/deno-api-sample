import { Client } from 'https://deno.land/x/postgres@v0.17.0/mod.ts';
import * as createTablePhrasalVerbs from './20231105141300-create-phrasal-verbs-table.ts';

export const run = (db: Client) => Promise.all([
    createTablePhrasalVerbs.up(db)
]);
