import { Metadata } from "next";

import AddButton from "../components/AddButton";
import Todos from "./Todos";

const getTodos = async () => {
  const todoRes = await fetch("http://localhost:3001/todos");
  const todos = await todoRes.json();

  return todos;
};

async function RootPage() {
  const todos = await getTodos();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-5">Todos ({todos.length})</h1>
      <Todos todos={todos} />
      <AddButton />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Root | Next.js",
};

export default RootPage;
