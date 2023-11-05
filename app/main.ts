import { Application, Router } from "../deps.ts";
import { PhrasalVerbController } from "./controller/phrasal-verbs.controller.ts";

const app = new Application();
const router = new Router();

router.get('/phrasal-verbs', PhrasalVerbController.list);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
