import { opine, json } from "https://deno.land/x/opine@master/mod.ts";
import { BASE_URL, PORT, handleError } from "./config/app.ts";
import routes from "./routes/index.ts";

const app = opine();

app.use(json());
app.use(routes);
app.use(handleError);

app.listen(+PORT);
console.log(`App started at ${BASE_URL}:${+PORT}`);
