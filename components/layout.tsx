import React, { ReactNode } from "react";
import { Header } from "./header";

type Props = {
  children: ReactNode;
};

export const LayoutMain = ({ children }: Props) => {
  return <div className="container mx-auto text-2xl">{children}</div>;
};

export const Layout: React.FC<Props> = (props) => (
  <div className="container mx-auto text-2xl">
    <Header />
    <LayoutMain>{props.children}</LayoutMain>
  </div>
);

export default Layout;
