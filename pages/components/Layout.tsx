

import { ReactNode } from "react";

    interface LayoutProps {
        children: ReactNode;
    }

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen items-center ">
        <div className="gap-9 bg-[#2E7D32] h-screen w-[42vw] justify-center items-center flex flex-col shadow-xl shadow-black ">
           { children }
        </div>

        <div className="flex h-screen w-[58vw] items-center justify-center">
            <img src="/logo.png" width={450}/>
        </div>
    </main>
  );
}
