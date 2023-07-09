import { Metadata } from "next";

import { revalidatePath } from "next/cache";
import AddButton from "../components/AddButton";
import Todos from "./Todos";

const todos = ["Hello world"];

const getTodos = () => todos;

async function setTodos(todo: string) {
  "use server";
  todos.push(todo);
  revalidatePath("/");
  return todos;
}

async function RootPage() {
  const todos = getTodos();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-5">Todos ({todos.length})</h1>
      <Todos todos={todos} />
      <AddButton setTodos={setTodos} />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Root | Next.js",
};

export default RootPage;
