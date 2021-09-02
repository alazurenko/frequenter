import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  let left = (
    <div className="my-10">
      <Link href="/home">
        <a className="bold text-4xl">Frequenter</a>
      </Link>
    </div>
  );

  let right = null;

  return (
    <nav>
      {left}
      {right}
    </nav>
  );
};
