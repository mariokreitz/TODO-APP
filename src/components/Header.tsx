import Counter from "./Counter";
import Logo from "./Logo";

/**
 * Renders the Header component with the Logo and Counter components.
 *
 * @return {JSX.Element} The Header component JSX.
 */
const Header = (): JSX.Element => {
  return (
    <header className="col-[1/3] row-[1/2] flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
      <Logo />
      <Counter />
    </header>
  );
};

export default Header;
