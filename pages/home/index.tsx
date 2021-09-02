import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layout";
// import { Post, PostProps } from "../components/post";
import Link from "next/link";
import { Dashboard } from './../../components/dashboard';

// export const getStaticProps: GetStaticProps = async () => {
//   const feed = [
//     {
//       id: 1,
//       title: "Prisma is the perfect ORM for Next.js",
//       content:
//         "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
//       published: false,
//       author: {
//         name: "Nikolas Burk",
//         email: "burk@prisma.io",
//       },
//     },
//   ];
//   return { props: { feed } };
// };

type Props = {
  // feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {
  const router = useRouter();
  // const isActive: (pathname: string) => boolean = (pathname) => router.pathname === pathname;

  return (
    <Layout>
      <div className="page">
        <main>
          <ul>
            <li>
              <Link href="/about">
                <a className="text-blue-400">About</a>
              </Link>
            </li>
          </ul>
          <Dashboard />
        </main>
      </div>
    </Layout>
  );
};

export default Blog;
