import { useAuthentication } from "./authenitcation.hook";

export const Authentication: React.FC = () => {
  const { isAuthorized, logIn, logOut } = useAuthentication();

  const buttonText = isAuthorized ? "Log out" : "Log in";
  const LogInButton = () => (
    <button
      className="bg-black hover:bg-gray-600 text-white py-1 px-2 rounded mr-2"
      onClick={() => logIn("test", "test")}
    >
      {buttonText}
    </button>
  );
  const LogOutButton = () => (
    <button
      className="bg-black hover:bg-gray-600 text-white py-1 px-2 rounded mr-2"
      onClick={() => logOut()}
    >
      {buttonText}
    </button>
  );
  return (
    <div>
      <p>You're {isAuthorized ? "logged in" : "not logged in"}</p>
      {isAuthorized ? <LogOutButton /> : <LogInButton />}
    </div>
  );
};
