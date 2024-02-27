import { ReactNode } from "react";
import { Button } from "../ui/button";

type SidebarItemProps = {
  href: string;
  children: ReactNode;
  title: string;
};
const SidebarItem = ({ children }: SidebarItemProps) => {
  return <Button>{children}</Button>;
};

export default SidebarItem;
//TODO: skeleton