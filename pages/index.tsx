import { LayoutMain } from "../components/layout";
import Link from "next/link";

export const LandingPage: React.FC = () => {
  return (
    <LayoutMain>
      <section className="flex flex-col h-screen">
        <header className="my-8 flex flex-col">
          <h1 className="my-8 pt-48 text-8xl font-bold">Frequenter</h1>
          <h2 className="my-8 text-4xl">
            Minimalist Stock & Crypto Portfolio Tracker. Zero data. Zero
            integrations. One place.
          </h2>
        </header>
        <main>
          <Link href="/home">
            <button className="bg-black hover:bg-gray-600 text-white py-4 px-8 rounded">
              Track
            </button>
          </Link>
        </main>
      </section>
    </LayoutMain>
  );
};

export default LandingPage;
