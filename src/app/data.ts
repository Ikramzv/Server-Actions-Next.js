const data: { todos: string[] } = {
  todos: ["Hello world"],
};

export function getTodos() {
  console.log("I am calling on the server");
  return data.todos;
}

export async function setTodos(todo: string | ((data: string[]) => string[])) {
  if (typeof todo === "function") {
    const result = todo(getTodos());
    if (typeof result[Symbol.iterator] === "undefined")
      throw new Error("Must be array type");

    data.todos = result;
    console.log(result);
    return data.todos;
  }

  data.todos.push(todo);
  return data.todos;
}
