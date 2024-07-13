import { useTodosContext } from "../lib/hooks";

/**
 * Renders a counter component that displays the number of completed todos
 * out of the total number of todos.
 *
 * @return {JSX.Element} The counter component.
 */
const Counter = (): JSX.Element => {
  const { completedTodos, totalTodos } = useTodosContext();

  return (
    <p>
      <b>{completedTodos}</b> / {totalTodos} todos completed
    </p>
  );
};

export default Counter;
