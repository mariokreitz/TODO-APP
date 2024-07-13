import { createContext, useEffect, useState } from "react";
import { Todo, TTodosContext } from "../lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type TodosCotextProviderProps = {
  children: React.ReactNode;
};

export const TodosContext = createContext<TTodosContext | null>(null);

/**
 * Retrieves the initial todos from local storage.
 *
 * @return {Todo[]} The initial todos array.
 */
const getInitialTodos = (): Todo[] => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
};

/**
 * Creates a context provider for managing todos.
 *
 * @param {TodosCotextProviderProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The children components.
 * @return {JSX.Element} The context provider component.
 */
const TodosContextProvider = ({ children }: TodosCotextProviderProps) => {
  // Using the useKindeAuth hook to check if the user is authenticated.
  const { isAuthenticated } = useKindeAuth();

  // Initializing the state for the todos array with an empty array. useState hook is used to manage state in functional components.
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

  // Derived state
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.isCompleted).length;

  /**
   * Handles the addition of a new todo.
   *
   * @param {string} todoText - The text of the todo to be added.
   * @return {void} This function does not return anything.
   */
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3 && !isAuthenticated) {
      alert("You need to log in to add more than 3 todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), text: todoText, isCompleted: false },
      ]);
    }
  };

  /**
   * Updates the completion status of a todo item based on the provided id.
   *
   * @param {number} id - The id of the todo item to toggle completion for.
   * @return {void}
   */
  const handleToggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      }),
    );
  };

  /**
   * Deletes a todo item based on the provided id.
   *
   * @param {number} id - The id of the todo item to delete.
   * @return {void}
   */
  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Side Effects
  // add todos to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Returning the TodosContext.Provider component with the values of todos, totalTodos, numberOfCompletedTodos, handleAddTodo, handleToggleTodo, and handleDeleteTodo.
  return (
    <TodosContext.Provider
      value={{
        todos,
        totalTodos,
        completedTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
