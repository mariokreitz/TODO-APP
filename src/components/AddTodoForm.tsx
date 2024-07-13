import { useState } from "react";
import Button from "./Button";
import { useTodosContext } from "../lib/hooks";

/**
 * Renders the AddTodoForm component, allowing users to add new todos.
 *
 * @return {JSX.Element} The rendered AddTodoForm component.
 */
const AddTodoForm = (): JSX.Element => {
  const [newTodoText, setNewTodoText] = useState("");
  const { handleAddTodo } = useTodosContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddTodo(newTodoText);
    setNewTodoText("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Add a todo</h2>
      <input
        type="text"
        className="block h-12 w-full rounded-md border border-gray-300 px-4 text-sm placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        placeholder="What needs to be done?"
        value={newTodoText}
        onChange={(event) => setNewTodoText(event.target.value)}
      />
      <Button buttonType="primary">Add to list</Button>
    </form>
  );
};

export default AddTodoForm;
