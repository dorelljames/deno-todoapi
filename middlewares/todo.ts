import { getTodoById } from "../actions/todo.ts";
import {
  Response,
  Request,
  NextFunction,
} from "https://deno.land/x/opine@0.21.3/src/types.ts";
import objectid from "https://cdn.pika.dev/validate-objectid";

export const verifyId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!objectid(req.params.id)) {
    return res.setStatus(400).json({
      message: "Todo ID is invalid!",
    });
  }

  const [err, todo] = await getTodoById(req.params.id);
  if (err) {
    return res.setStatus(404).json({
      message: "Todo resource not found!",
    });
  }

  next();
};
