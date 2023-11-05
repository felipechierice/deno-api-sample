import { Context } from "../../deps.ts";
import { PhrasalVerbModel } from "../model/phrasal-verb.model.ts";

export class PhrasalVerbController {
    static async list(ctx: Context) {
        const data = await PhrasalVerbModel.list(); 
        return ctx.response.body = data;
    }
}
