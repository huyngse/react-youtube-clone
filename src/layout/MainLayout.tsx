import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="max-h-[100vh] flex flex-col">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
