"use client";

import { useState } from "react";

function AddButton({
  setTodos,
}: {
  setTodos: (todo: string) => Promise<string[]>;
}) {
  const [value, setValue] = useState("");
  const add = async () => {
    await setTodos(value);
    setValue("");
  };

  return (
    <form action={add} className="flex gap-4 px-4">
      <input
        type="text"
        className="py-2 px-3 outline-none border border-gray-900 rounded-md"
        name="todo"
        placeholder="Write todo "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className={`bg-gray-900 text-white py-3 px-5 text-sm rounded-lg hover:bg-gray-800 
        duration-200 cursor-pointer border-none outline-none active:scale-95`}
        type="submit"
      >
        Add todo
      </button>
    </form>
  );
}

export default AddButton;
