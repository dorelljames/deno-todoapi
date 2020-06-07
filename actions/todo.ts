import Todo, { TodoCreate } from "../models/Todo.ts";

export const getAllTodos = async () => {
  let todos;

  try {
    todos = await Todo.find({});
  } catch (err) {
    return [err, null];
  }

  return [null, todos];
};

export const createTodo = async (params: TodoCreate) => {
  let todo, err;
  let data = {
    description: params.description,
    completed: false,
  };

  try {
    todo = await Todo.insertOne(data);
  } catch (err) {
    return [err, null];
  }

  return getTodoById(todo.$oid);
};

export const getTodoById = async (id: string) => {
  let err = null;
  let todo;

  try {
    todo = await Todo.findOne({ _id: { $oid: id } });
  } catch (err) {
    err = err;
  }

  return [err, todo];
};

export const updateTodoById = async (id: string, data: any) => {
  let err;

  try {
    await Todo.updateOne(
      { _id: { $oid: id } },
      { $set: data },
    );
  } catch (err) {
    return [err, null];
  }

  return getTodoById(id);
};

export const deleteTodoById = async (id: string) => {
  let todo;

  try {
    todo = await Todo.deleteOne({ _id: id });
    console.log("deleteTodoById -> todo", todo);
  } catch (err) {
    return [err, null];
  }

  return [null, todo];
};
