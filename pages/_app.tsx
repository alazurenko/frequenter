import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import './../components/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
