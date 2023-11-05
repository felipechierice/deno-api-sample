import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

export class Repository<E> {
    constructor(
        private readonly db: Client,
        private readonly tableName: string,
    ) { }
    
    async list(columns: string[] = ['*'], where: string[] = []): Promise<E[]> {
        const _columns = columns.join(', ');
        const _where = where.length > 0 ? `WHERE ${where.join(' AND ')}` : '';
        const sql = `SELECT ${_columns} FROM ${this.tableName} ${_where};`;
        const { rows } = await this.db.queryObject(sql);
        return rows as E[];
    }
}
