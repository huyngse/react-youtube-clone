import { ReactNode } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

type SidebarItemProps = {
  href: string;
  children: ReactNode | string;
  title: string;
  isCollapse?: boolean;
};
const SidebarItem = ({
  children,
  href,
  isCollapse = false,
  title,
}: SidebarItemProps) => {
  const sidebarButtonStyle = `w-full gap-2 flex  bg-white text-black hover:bg-slate-200 ${
    isCollapse ? "justify-center" : "justify-start"
  }`;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-full">
          <Link to={href} >
            <Button className={sidebarButtonStyle}>{children}</Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SidebarItem;
//TODO: skeleton
