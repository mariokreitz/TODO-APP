import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";
import { TTodosContext } from "./types";

/**
 * Retrieves the TodosContext.
 *
 * @throws {Error} If the TodosContext provider is not found.
 * @returns {TTodosContext} The TodosContext.
 */
export const useTodosContext = (): TTodosContext => {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("TodosContext provider is missing");
  }

  return context;
};
