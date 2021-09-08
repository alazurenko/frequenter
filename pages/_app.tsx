import { AppProps } from "next/app";
import { AppContextProvider } from "../contexts/app.context";
import "tailwindcss/tailwind.css";
import "./../components/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} />;
    </AppContextProvider>
  );
};

export default App;
