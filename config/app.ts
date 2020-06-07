import {
  Response,
  Request,
  NextFunction,
} from "https://deno.land/x/opine@master/src/types.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();

export const PORT = env.PORT || 3000;
export const BASE_URL = env.BASE_URL || "http://localhost";
export const MONGO_URL = env.MONGO_URL || "mongodb://localhost:27017";

export const handleError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.setStatus(500).json(
    { message: "Internal Server Error", error: err.message },
  );
};
