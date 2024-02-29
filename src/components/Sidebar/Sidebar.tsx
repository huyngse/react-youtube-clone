import {
  IoGameControllerOutline,
  IoHomeOutline,
  IoMusicalNotesOutline,
} from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { LuNewspaper } from "react-icons/lu";
import { GrTechnology } from "react-icons/gr";
import { BsPersonVideo } from "react-icons/bs";
import { PiTelevisionBold } from "react-icons/pi";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SidebarItem from "./SidebarItem";

type SidebarProps = {
  isCollapse?: boolean;
};

const Sidebar = ({ isCollapse = false }: SidebarProps) => {
  return (
    <div className={`${!isCollapse ? "max-w-[240px]" : "max-w-fit"}`}>
      <ul className={`flex flex-col ${isCollapse && "items-center"}`}>
        <li>
          <SidebarItem
            href="https://youtu.be/tCO4i2t-Aso?si=lIcOjwucw4UOFWw1"
            isCollapse={isCollapse}
            title="Home"
          >
            <IoHomeOutline />
            {!isCollapse && <p>Home</p>}
          </SidebarItem>
        </li>
        <li>
          <SidebarItem
            href="https://youtu.be/tCO4i2t-Aso?si=lIcOjwucw4UOFWw1"
            isCollapse={isCollapse}
            title="Gaming"
          >
            <IoGameControllerOutline />
            {!isCollapse && <p>Gaming</p>}
          </SidebarItem>
        </li>
        <li>
          <SidebarItem
            href="https://youtu.be/tCO4i2t-Aso?si=lIcOjwucw4UOFWw1"
            isCollapse={isCollapse}
            title="Sports"
          >
            <GoTrophy />
            {!isCollapse && <p>Sports</p>}
          </SidebarItem>
        </li>
        <li>
          <SidebarItem
            href="https://youtu.be/tCO4i2t-Aso?si=lIcOjwucw4UOFWw1"
            isCollapse={isCollapse}
            title="Entertainment"
          >
            <PiTelevisionBold />
            {!isCollapse && <p>Entertainment</p>}
          </SidebarItem>
        </li>
        <li>
          <SidebarItem
            href="https://youtu.be/tCO4i2t-Aso?si=lIcOjwucw4UOFWw1"
            isCollapse={isCollapse}
            title="Technology"
          >
            <GrTechnology />
            {!isCollapse && <p>Technology</p>}
          </SidebarItem>
        </li>
        <li>
          <SidebarItem
            href="https://youtu.be/tCO4i2t-Aso?si=lIcOjwucw4UOFWw1"
            isCollapse={isCollapse}
            title="Music"
          >
            <IoMusicalNotesOutline />
            {!isCollapse && <p>Music</p>}
          </SidebarItem>
        </li>
        <li>
          <SidebarItem
            href="https://youtu.be/tCO4i2t-Aso?si=lIcOjwucw4UOFWw1"
            isCollapse={isCollapse}
            title="Blog"
          >
            <BsPersonVideo />
            {!isCollapse && <p>Blog</p>}
          </SidebarItem>
        </li>
        <li>
          <SidebarItem
            href="https://youtu.be/tCO4i2t-Aso?si=lIcOjwucw4UOFWw1"
            isCollapse={isCollapse}
            title="News"
          >
            <LuNewspaper />
            {!isCollapse && <p>News</p>}
          </SidebarItem>
        </li>
      </ul>
      <hr className="m-3" />
      {!isCollapse && <h3 className="m-3">Subscribed</h3>}

      <ul className={`flex flex-col ${isCollapse && "items-center"}`}>
        <li>
          <SidebarItem
            href="https://youtu.be/tCO4i2t-Aso?si=lIcOjwucw4UOFWw1"
            isCollapse={isCollapse}
            title="Shiey"
          >
            <Avatar className="w-[24px] h-[24px]">
              <AvatarImage src="https://yt3.ggpht.com/t1m5ErpCFmyYSQG5QmECS3Yh_T64hfUlsvHpK3Ck_XYv5fCpz6p1w3h4Zcj0P4GzoqQYsGkG=s88-c-k-c0x00ffffff-no-rj" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {!isCollapse && <p>Shiey</p>}
          </SidebarItem>
        </li>
        <li>
          <SidebarItem
            href="https://youtu.be/tCO4i2t-Aso?si=lIcOjwucw4UOFWw1"
            isCollapse={isCollapse}
            title="Adventuring with Nala"
          >
            <Avatar className="w-[24px] h-[24px]">
              <AvatarImage src="https://yt3.ggpht.com/3CRWKfZlf5EnmlvvV_XmMyL9uXYFoIB79h0a9Ucpnpt7P4_yv5SqGdJriykHeXTpgDpChBdu=s88-c-k-c0x00ffffff-no-rj" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {!isCollapse && <p>Adventuring with Nala</p>}
          </SidebarItem>
        </li>
        <li>
          <SidebarItem
            href="https://youtu.be/tCO4i2t-Aso?si=lIcOjwucw4UOFWw1"
            isCollapse={isCollapse}
            title="Ze Frank"
          >
            <Avatar className="w-[24px] h-[24px]">
              <AvatarImage src="https://yt3.ggpht.com/ytc/AIdro_mk_RWXQdJSdSqrM41HBpozpxT3bQkW83csX__g=s88-c-k-c0x00ffffff-no-rj" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {!isCollapse && <p>Ze Frank</p>}
          </SidebarItem>
        </li>
        <li>
          <SidebarItem
            href="https://youtu.be/tCO4i2t-Aso?si=lIcOjwucw4UOFWw1"
            isCollapse={isCollapse}
            title="Shimanagi"
          >
            <Avatar className="w-[24px] h-[24px]">
              <AvatarImage src="https://yt3.ggpht.com/_P2SZSNumrneZ-5la5f3zW_h0U43ftBEOBFl2bhM8G7-0GGDxZNSw0Sep7_NfR2NMayxelLAyE0=s88-c-k-c0x00ffffff-no-rj" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {!isCollapse && <p>Shimanagi</p>}
          </SidebarItem>
        </li>
        <li>
          <SidebarItem
            href="https://youtu.be/tCO4i2t-Aso?si=lIcOjwucw4UOFWw1"
            isCollapse={isCollapse}
            title="Let's Game It Out"
          >
            <Avatar className="w-[24px] h-[24px]">
              <AvatarImage src="https://yt3.ggpht.com/ytc/AIdro_ngIjtanAPdrwevZ3hqb2ZBYULw5hXCLP_-fO5bRQ=s88-c-k-c0x00ffffff-no-rj" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {!isCollapse && <p>Let's Game It Out</p>}
          </SidebarItem>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
