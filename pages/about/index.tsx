import Layout from "../../components/layout";

export const About: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold">About</h1>
      <p className="my-4">
        Frequenter allows you to keep track of your financial portfolio in a
        minimalistic way, without exposing your personal data. It's just
        numbers, no accounts and no integration required. It's possible to use
        without account. You may treat as pen and paper with some basic
        calculations. A common place to see the big picture of your finances.
      </p>
      <h2 className="text-2xl font-bold">Why?</h2>
      <p className="my-4">
        There a lot of portfolio trackers out there, why we need one more? This
        project is build for my own convenience as I find available trackers
        aren't suitable for my needs. They are either overloaded with not
        essential information or only stock/crypto based. I prefere to have one
        place to rule them all. That is why this app has been built.
      </p>

      <h2 className="text-2xl font-bold">How it works?</h2>
      <p className="my-4">
        You're responsible for you data. You're going to manage your small txt
        file by your own. Thus you're responsible for your data. That is ok. We
        trust you.
      </p>
      <p className="my-4">
        Start with filling up your portfolio data. After a session you may
        export txt file and save it where you find suitable. You may leverage
        the sign-in option to store txt file in the browser's local storage.
        Before using app just import your txt file into the application.
      </p>
    </Layout>
  );
};

export default About;
