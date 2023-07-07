"use server";

export async function addTodo(todo: string) {
  const res = await fetch("http://localhost:3000/api", {
    body: JSON.stringify({ todo }),
    method: "POST",
    cache: "no-store",
  });
  return await res.json();
}
