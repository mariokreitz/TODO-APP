import DeleteButton from "./DeleteButton";
import { Todo } from "../lib/types";
import { useTodosContext } from "../lib/hooks";

/**
 * Renders a list of todos with dynamic content based on the todos array.
 *
 * @return {JSX.Element} The todo list component JSX.
 */
const TodoList = (): JSX.Element => {
  const { todos, handleToggleTodo, handleDeleteTodo } = useTodosContext();
  return (
    <ul className="space-y-2">
      {todos.length === 0 && (
        <li className="flex h-full items-center justify-center font-semibold text-gray-700">
          Start by adding a todo
        </li>
      )}
      {todos.map((todo: Todo) => (
        <li
          key={todo.id}
          className="flex h-12 cursor-pointer items-center justify-between rounded-md border-b border-gray-200 bg-white px-4 py-2 shadow-sm transition-shadow duration-200 ease-in-out hover:shadow-md"
          onClick={() => handleToggleTodo(todo.id)}
        >
          <span
            className={
              todo.isCompleted ? "text-gray-400 line-through" : "text-gray-800"
            }
          >
            {todo.text}
          </span>
          <DeleteButton id={todo.id} handleDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
