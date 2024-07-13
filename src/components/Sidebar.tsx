import AddTodoForm from "./AddTodoForm";
import Button from "./Button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Sidebar = () => {
  const { login, register, logout, isAuthenticated, user, isLoading } =
    useKindeAuth();

  return (
    <section className="col-span-1 flex flex-col rounded-lg bg-white p-4 shadow-lg">
      <AddTodoForm />

      <div className="mt-6 space-y-4">
        {isLoading ? null : isAuthenticated ? (
          <>
            <div className="flex items-center space-x-3">
              <p className="text-sm text-gray-700">Logged in as</p>
              <img
                className="h-8 w-8 rounded-full"
                src={user?.picture ?? ""}
                alt={user?.given_name ?? "User"}
              />
              <p className="text-sm text-gray-700">{user?.email}</p>
            </div>
            <Button onClick={logout} buttonType="secondary">
              Log out
            </Button>
          </>
        ) : (
          <>
            <Button onClick={login} buttonType="secondary">
              Log in
            </Button>
            <Button onClick={register} buttonType="secondary">
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default Sidebar;
