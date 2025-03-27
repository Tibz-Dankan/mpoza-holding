import React, { ReactNode } from "react";
import ReactQueryProvider from "./ReactQueryProvider";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: React.FC<ProvidersProps> = (props) => {
  return <ReactQueryProvider>{props.children}</ReactQueryProvider>;
};
