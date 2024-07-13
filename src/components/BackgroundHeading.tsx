/**
 * Renders a heading component with a background positioned in the center of the screen.
 *
 * @return {JSX.Element} The heading component JSX.
 */
const BackgroundHeading = (): JSX.Element => {
  return (
    <h1 className="absolute left-1/2 -translate-x-1/2 transform text-8xl font-bold uppercase tracking-wider text-gray-500">
      Todo App
    </h1>
  );
};

export default BackgroundHeading;
