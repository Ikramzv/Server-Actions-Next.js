"use server";

import { revalidatePath } from "next/cache";
import { setTodos } from "./data";

export async function addTodo(todo: string) {
  setTodos(todo);
  revalidatePath("/");
}
