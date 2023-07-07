import { addTodo } from "../app/actions";

function AddButton() {
  // const ref = useRef<HTMLFormElement>(null);

  const handleAction = async (formData: FormData) => {
    // ref.current?.reset();
    "use server";
    const todos = await addTodo(formData.get("todo") as string);
    console.log("ACTION HAS BEEN CALLED ", todos);
  };

  return (
    <form action={handleAction} className="flex gap-4 px-4">
      <input
        type="text"
        className="py-2 px-3 outline-none border border-gray-900 rounded-md"
        name="todo"
        placeholder="Write todo "
      />
      <button
        className={`bg-gray-900 text-white py-3 px-5 text-sm rounded-lg hover:bg-gray-800 
        duration-200 cursor-pointer border-none outline-none active:scale-95`}
      >
        Add todo
      </button>
    </form>
  );
}

export default AddButton;
