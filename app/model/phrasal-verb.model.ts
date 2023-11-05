import { PhrasalVerbEntity } from "../entity/phrasal-verb.entity.ts";
import { PhrasalVerbRepository } from "../repository/phrasal-verb.repository.ts";
import { Model } from "./model.ts";
import { db } from "../database/client.ts";

export class PhrasalVerbModel extends Model {
    constructor(
        readonly id: string,
        readonly verb: string,
        readonly translation: string,
        readonly example: string,
    ) {
        super();
    }

    static async list(): Promise<PhrasalVerbModel[]> {
        const repo = new PhrasalVerbRepository(db);
        const entities = await repo.list();
        const models = entities.map(entity => PhrasalVerbModel.fromEntity(entity));
        return models;
    }

    static fromEntity(
        entity: PhrasalVerbEntity
    ): PhrasalVerbModel {
        return new PhrasalVerbModel(
            entity.id,
            entity.verb,
            entity.translation,
            entity.example
        );
    }
}
