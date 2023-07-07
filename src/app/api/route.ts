import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const todos = request.cookies.get("todos")?.value;

  return new NextResponse(todos || JSON.stringify(["Learn React"]), {
    status: 200,
  });
};

export const POST = async (request: NextRequest) => {
  let todos: any;
  const cookieStore = request.cookies;
  if (cookieStore.has("todos"))
    todos = JSON.parse(cookieStore.get("todos")?.value as string);
  else todos = [];

  revalidateTag("todos");
  const todo = (await request.json()).todo;
  todos.push(todo);

  return NextResponse.json(todos, {
    status: 200,
    headers: {
      "Set-Cookie": `todos=${JSON.stringify(todos)}`,
    },
  });
};
