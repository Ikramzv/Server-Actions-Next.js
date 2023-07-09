import AddButton from "../components/AddButton";
import Todos from "./Todos";
import { addTodo, removeTodo } from "./actions";
import { getTodos } from "./data";

async function RootPage() {
  const todos = getTodos();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-5">Todos ({todos.length})</h1>
      <Todos todos={todos} remove={removeTodo} />
      <AddButton addTodo={addTodo} />
    </div>
  );
}

export default RootPage;
