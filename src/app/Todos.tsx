"use client";

interface Props {
  todos: string[];
  remove: (todo: string) => Promise<string[]>;
}

function Todos({ todos, remove }: Props) {
  const handleRemove = (todo: string) => {
    remove(todo);
  };

  return (
    <ul className="flex flex-col gap-3 p-3">
      {todos.map((todo: string) => (
        <li
          className="bg-gray-900 w-max rounded-lg text-white py-2 px-5 flex items-center gap-3"
          key={Math.random().toFixed(5)}
        >
          <p>{todo}</p>
          <button
            className="border border-red-700 p-2 rounded-md bg-white duration-200 cursor-pointer
          hover:bg-red-800 hover:text-red-50 text-red-800"
            onClick={() => handleRemove(todo)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
