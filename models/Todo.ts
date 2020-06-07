import db from "../config/db.ts";

const Todo = db.collection("todos");

export interface TodoCreate {
  description: string;
}

export default Todo;
