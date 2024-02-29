import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from "react";

interface MainLayoutProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const MainLayout = ({ children, ...props }: MainLayoutProps) => {
  return (
    <div className="max-h-[100vh] flex flex-col">
      <Navbar />
      <div {...props}>{children}</div>
    </div>
  );
};

export default MainLayout;
