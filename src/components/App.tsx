import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

/**
 * Renders the main App component.
 *
 * @return {JSX.Element} The main App component JSX.
 */
const App = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 font-sans">
      <BackgroundHeading />

      <main className="container mx-auto mt-8 grid grid-cols-1 gap-8 rounded-lg bg-white px-4 py-6 shadow-lg md:grid-cols-3">
        <div className="md:col-span-2">
          <Header />
          <TodoList />
        </div>
        <div className="md:col-span-1">
          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
