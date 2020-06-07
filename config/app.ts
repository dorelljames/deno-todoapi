import {
  Response,
  Request,
  NextFunction,
} from "https://deno.land/x/opine@master/src/types.ts";

export const PORT = 3000;
export const BASE_URL = "http://localhost";

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
