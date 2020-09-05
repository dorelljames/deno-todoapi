import { Router } from "https://deno.land/x/opine@0.21.3/mod.ts";
import {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodoById,
  deleteTodoById,
} from "../actions/todo.ts";
import { verifyId } from "../middlewares/todo.ts";

const todo = Router();

todo.get("/", async (req, res, next) => {
  const [err, todos] = await getAllTodos();
  if (err) {
    return next(err);
  }

  res.send(todos);
});

todo.post("/", async (req, res, next) => {
  const { description } = req.parsedBody;

  const [err, todo] = await createTodo({ description });
  if (err) {
    return next(err);
  }

  res.send(todo);
});

todo.get("/:id", verifyId, async (req, res, next) => {
  const [err, todo] = await getTodoById(req.params.id);

  if (err) {
    console.log("err", err);
    return next(err);
  }

  res.send(todo);
});

todo.put("/:id", verifyId, async (req, res, next) => {
  const [err, todo] = await updateTodoById(req.params.id, req.parsedBody);

  if (err) {
    return next(err);
  }

  res.send(todo);
});

todo.delete("/:id", verifyId, async (req, res, next) => {
  const [err, todo] = await deleteTodoById(req.params.id);

  if (err) {
    return next(err);
  }

  res.setStatus(204).send();
});

export default todo;
