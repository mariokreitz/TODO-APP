/**
 * Renders the Footer component with copyright information and version.
 *
 * @return {JSX.Element} The rendered Footer component.
 */
const Footer = (): JSX.Element => (
  <footer className="mt-3 flex w-full max-w-screen-lg items-center justify-between border-t border-gray-200 px-4 py-2 text-xs text-gray-600 opacity-70">
    <small>
      &copy; {new Date().getFullYear()} Copyright by mariokreitz.github.io
    </small>
    <p>
      Version <b>1.0.0</b>
    </p>
  </footer>
);

export default Footer;
