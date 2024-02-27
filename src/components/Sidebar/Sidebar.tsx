import {
  IoGameControllerOutline,
  IoHomeOutline,
  IoMusicalNotesOutline,
} from "react-icons/io5";
import { Button } from "../ui/button";
import { GoTrophy } from "react-icons/go";
import { LuNewspaper } from "react-icons/lu";
import { GrTechnology } from "react-icons/gr";
import { BsPersonVideo } from "react-icons/bs";
import { PiTelevisionBold } from "react-icons/pi";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type SidebarProps = {
  isCollapse?: boolean;
};

const Sidebar = ({ isCollapse = false }: SidebarProps) => {
  const sidebarButtonStyle =
  `w-full gap-2 flex  bg-white text-black hover:bg-slate-200 ${isCollapse ? "justify-center" : "justify-start"}`;
  return (
    <div className={`${!isCollapse ? "max-w-[240px]" : "max-w-fit"}`}>
      <ul className="flex flex-col">
        <li>
          <Button className={sidebarButtonStyle}>
            <IoHomeOutline />
            {!isCollapse && <p>Home</p>}
          </Button>
        </li>
        <li>
          <Button className={sidebarButtonStyle}>
            <IoGameControllerOutline />
            {!isCollapse && <p>Gaming</p>}
          </Button>
        </li>
        <li>
          <Button className={sidebarButtonStyle}>
            <GoTrophy />
            {!isCollapse && <p>Sports</p>}
          </Button>
        </li>
        <li>
          <Button className={sidebarButtonStyle}>
            <PiTelevisionBold />
            {!isCollapse && <p>Entertainment</p>}
          </Button>
        </li>
        <li>
          <Button className={sidebarButtonStyle}>
            <GrTechnology />
            {!isCollapse && <p>Technology</p>}
          </Button>
        </li>
        <li>
          <Button className={sidebarButtonStyle}>
            <IoMusicalNotesOutline />
            {!isCollapse && <p>Music</p>}
          </Button>
        </li>
        <li>
          <Button className={sidebarButtonStyle}>
            <BsPersonVideo />
            {!isCollapse && <p>Blog</p>}
          </Button>
        </li>
        <li>
          <Button className={sidebarButtonStyle}>
            <LuNewspaper />
            {!isCollapse && <p>News</p>}
          </Button>
        </li>
      </ul>
      <hr className="m-3" />
      {!isCollapse && <h3 className="m-3">Subscribed</h3>}

      <ul>
        <li>
          <Button className={sidebarButtonStyle}>
            <Avatar className="w-[24px] h-[24px]">
              <AvatarImage src="https://yt3.ggpht.com/t1m5ErpCFmyYSQG5QmECS3Yh_T64hfUlsvHpK3Ck_XYv5fCpz6p1w3h4Zcj0P4GzoqQYsGkG=s88-c-k-c0x00ffffff-no-rj" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {!isCollapse && <p>Shiey</p>}
          </Button>
        </li>
        <li>
          <Button className={sidebarButtonStyle}>
            <Avatar className="w-[24px] h-[24px]">
              <AvatarImage src="https://yt3.ggpht.com/3CRWKfZlf5EnmlvvV_XmMyL9uXYFoIB79h0a9Ucpnpt7P4_yv5SqGdJriykHeXTpgDpChBdu=s88-c-k-c0x00ffffff-no-rj" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {!isCollapse && <p>Adventuring with Nala</p>}
          </Button>
        </li>
        <li>
          <Button className={sidebarButtonStyle}>
            <Avatar className="w-[24px] h-[24px]">
              <AvatarImage src="https://yt3.ggpht.com/ytc/AIdro_mk_RWXQdJSdSqrM41HBpozpxT3bQkW83csX__g=s88-c-k-c0x00ffffff-no-rj" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {!isCollapse && <p>Ze Frank</p>}
          </Button>
        </li>
        <li>
          <Button className={sidebarButtonStyle}>
            <Avatar className="w-[24px] h-[24px]">
              <AvatarImage src="https://yt3.ggpht.com/_P2SZSNumrneZ-5la5f3zW_h0U43ftBEOBFl2bhM8G7-0GGDxZNSw0Sep7_NfR2NMayxelLAyE0=s88-c-k-c0x00ffffff-no-rj" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {!isCollapse && <p>Shimanagi</p>}
          </Button>
        </li>
        <li>
          <Button className={sidebarButtonStyle}>
            <Avatar className="w-[24px] h-[24px]">
              <AvatarImage src="https://yt3.ggpht.com/ytc/AIdro_ngIjtanAPdrwevZ3hqb2ZBYULw5hXCLP_-fO5bRQ=s88-c-k-c0x00ffffff-no-rj" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {!isCollapse && <p>Let's Game It Out</p>}
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
