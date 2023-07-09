"use server";

import { revalidatePath } from "next/cache";

export const addTodo = async (todo: string) => {
  const postRes = await fetch("http://localhost:3001/todos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: todo }),
  });

  if (postRes.status === 201) {
    revalidatePath("/");
  }
};
