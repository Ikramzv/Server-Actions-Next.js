import { Metadata } from "next";
import AddButton from "../components/AddButton";
import Todos from "./Todos";
import { getTodos } from "./data";

async function RootPage() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-5">Todos ({getTodos().length})</h1>
      <Todos todos={getTodos()} />
      <AddButton />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Root | Next.js",
};

export default RootPage;
