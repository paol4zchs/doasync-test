
import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode;
}


export default function Title ({ children }: TitleProps){
  return (
    <h1 className="text-white font-semibold text-[2.2rem]">
        { children }
    </h1>
  );
}