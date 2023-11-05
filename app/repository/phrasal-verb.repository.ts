import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { Repository } from "./repository.ts";
import { PhrasalVerbEntity } from "../entity/phrasal-verb.entity.ts";

const tableName = 'phrasal_verbs';

export class PhrasalVerbRepository extends Repository<PhrasalVerbEntity> {
    constructor(db: Client) {
        super(db, tableName);
    }
}
