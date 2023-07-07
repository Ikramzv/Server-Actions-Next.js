"use server";

import { revalidatePath } from "next/cache";
import { setTodos } from "./data";

export async function addTodo(todo: string) {
  const todos = setTodos(todo);
  revalidatePath("/");
  return todos;
}
