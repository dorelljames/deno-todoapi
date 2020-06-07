import { opine, json } from "https://deno.land/x/opine@master/mod.ts";
import * as flags from "https://deno.land/std@v0.50.0/flags/mod.ts";
import { BASE_URL, PORT, handleError } from "./config/app.ts";
import routes from "./routes/index.ts";

const app = opine();

const DEFAULT_PORT = +PORT;
const argPort = flags.parse(Deno.args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)) {
  console.error("Port is not a number.");
  Deno.exit(1);
}

app.use(json());
app.use(routes);
app.use(handleError);

app.listen(port);
console.log(`App started at ${BASE_URL}:${port}`);
