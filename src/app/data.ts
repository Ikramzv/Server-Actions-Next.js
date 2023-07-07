"server only";

const data: { todos: string[] } = {
  todos: ["Hello world"],
};

export const getTodos = () => {
  console.log("I am calling on the server");
  return data.todos;
};

export const setTodos = (todo: string | ((data: string[]) => string[])) => {
  if (typeof todo === "function") {
    const result = todo(getTodos());
    if (typeof result[Symbol.iterator] === "undefined")
      throw new Error("Must be array type");

    data.todos = result;
    return data.todos;
  }

  data.todos.push(todo);
  return data.todos;
};
