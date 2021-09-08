import { useAppContext } from "../contexts/app.context";

export const useAuthentication = () => {
  const { state, updateState } = useAppContext();

  const logIn = (user: string, password: string) => {
    updateState({
      isAutorized: true,
    });
  };

  const logOut = () => {
    updateState({
      isAutorized: false,
    });
  }

  return { isAuthorized: state.isAutorized, logIn, logOut };
};
