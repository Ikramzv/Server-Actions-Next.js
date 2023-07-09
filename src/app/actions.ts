"use server";

import { revalidatePath } from "next/cache";
import { getTodos, setTodos } from "./data";

export async function addTodo(todo: string) {
  const data = await setTodos(todo);
  revalidatePath("/");
  return data;
}

export async function removeTodo(todo: string) {
  const data = await setTodos((todos) => {
    return todos.filter((t) => t !== todo);
  });
  revalidatePath("/");
  return data;
}

export async function handleAddTodo(formData: FormData) {
  await addTodo(formData.get("todo") as string);
  const todos = getTodos();
  console.log("ACTION HAS BEEN CALLED ", todos);
}
