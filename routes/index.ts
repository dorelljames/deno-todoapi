import { Router } from "https://deno.land/x/opine@master/mod.ts";
import todoRouter from "./todo.ts";

const router = Router();

router.get("/", (req, res) => res.send({ message: "Hello Todo API!" }));
router.use("/todos", todoRouter);

export default router;
