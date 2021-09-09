import { useStoreon } from "storeon/react";
import { AuthSetAuthEvent, AuthLoadEvent } from "./../store/auth.module";
import { State, Events } from "../store";

export const Authentication: React.FC = () => {
  const { auth, dispatch } = useStoreon<State, Events>("auth");
  const buttonText = auth.isAuthenticated ? "Log out" : "Log in";
  const loadingText = auth.isLoading ? "Loading pelase wait" : "";

  const LogInButton = () => (
    <button
      className="bg-black hover:bg-gray-600 text-white py-1 px-2 rounded mr-2"
      onClick={() => dispatch(AuthSetAuthEvent, true)}
    >
      {buttonText}
    </button>
  );
  const LogOutButton = () => (
    <button
      className="bg-black hover:bg-gray-600 text-white py-1 px-2 rounded mr-2"
      onClick={() => dispatch(AuthSetAuthEvent, false)}
    >
      {buttonText}
    </button>
  );

  const LoadButton = () => (
    <button
      className="bg-black hover:bg-gray-600 text-white py-1 px-2 rounded mr-2"
      onClick={() => dispatch(AuthLoadEvent)}
    >
      load
    </button>
  );

  return (
    <div>
      <p>You're {auth.isAuthenticated ? "logged in" : "not logged in"}</p>
      <p>{auth.isAuthenticated ? loadingText : ''}</p>
      {auth.isAuthenticated ? <LogOutButton /> : <LogInButton />}
      {auth.isAuthenticated ? <LoadButton /> : ''}
    </div>
  );
};
