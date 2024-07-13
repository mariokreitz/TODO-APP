import React from "react";

interface ButtonProps {
  onClick?: () => void;
  buttonType?: "secondary" | "primary";
  children: React.ReactNode;
}

/**
 * Renders a button component with different styles based on the button type.
 *
 * @param {() => void} onClick - The function to be executed on button click.
 * @param {"secondary" | "primary"} buttonType - The type of button (secondary or primary).
 * @param {React.ReactNode} children - The content inside the button.
 * @return {JSX.Element} The button component with the specified styles.
 */
const Button: React.FC<ButtonProps> = ({ onClick, buttonType, children }) => {
  const baseClassName =
    "h-12 w-full cursor-pointer rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150";
  const primaryClassName = "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500";
  const secondaryClassName =
    "bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 opacity-85";

  const buttonClassName =
    buttonType === "secondary"
      ? `${baseClassName} ${secondaryClassName}`
      : `${baseClassName} ${primaryClassName}`;

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button;
