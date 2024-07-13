type DeleteButtonProps = {
  id: number;
  handleDeleteTodo: (id: number) => void;
};

/**
 * Renders a delete button component that triggers the handleDeleteTodo function on click.
 *
 * @param {number} id - The unique identifier for the delete button.
 * @param {(id: number) => void} handleDeleteTodo - The function to handle the deletion of the associated item.
 * @return {JSX.Element} The delete button component.
 */
const DeleteButton = ({
  id,
  handleDeleteTodo,
}: DeleteButtonProps): JSX.Element => (
  <button
    onClick={(event) => {
      event.stopPropagation();
      handleDeleteTodo(id);
    }}
  >
    ❌
  </button>
);

export default DeleteButton;
