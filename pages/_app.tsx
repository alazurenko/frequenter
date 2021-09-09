import { AppProps } from "next/app";
// import { AppContextProvider } from "../contexts/app.context";
import { StoreContext } from "storeon/react";
import {store} from '../store';
import "tailwindcss/tailwind.css";
import "./../components/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreContext.Provider value={store}>
      <Component {...pageProps} />;
    </StoreContext.Provider>
  );
};

export default App;
