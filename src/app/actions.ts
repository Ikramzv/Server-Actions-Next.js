"use server";

import { revalidatePath } from "next/cache";
import { getTodos, setTodos } from "./data";

export async function addTodo(todo: string) {
  setTodos(todo);
  revalidatePath("/");
}

export async function handleAddTodo(formData: FormData) {
  await addTodo(formData.get("todo") as string);
  const todos = getTodos();
  console.log("ACTION HAS BEEN CALLED ", todos);
}
