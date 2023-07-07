import { Metadata } from "next";
import AddButton from "../components/AddButton";
import Todos from "./TodosC";

async function getTodos() {
  const res = await fetch("http://localhost:3000/api", {
    next: { tags: ["todos"], revalidate: 10 },
  });
  const todos = await res.json();
  return todos;
}

async function RootPage() {
  const todos = await getTodos();
  console.log(todos);

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
