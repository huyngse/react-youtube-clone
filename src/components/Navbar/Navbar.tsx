import { GiHamburgerMenu } from "react-icons/gi";
import YoutubeLogo from "../../assets/icons/youtube.png";
import { CiSearch } from "react-icons/ci";
import { CgExtension } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";
import avatar from "../../assets/images/mike.webp";
import "./Navbar.css";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MdVideoCall } from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 py-2 items-center sticky shadow-lg">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" size="icon">
              <GiHamburgerMenu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-2 w-fit overflow-auto" side="left">
            <SheetHeader>
              <SheetTitle className="px-2">
                {" "}
                <button className="flex items-center gap-2">
                  <img
                    src={YoutubeLogo}
                    alt="Youtube logo"
                    className="h-[24px]"
                  />
                  <div className="font-bold">Youtube</div>
                </button>
              </SheetTitle>
              <SheetDescription>
                <Sidebar></Sidebar>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <button className="flex items-center gap-2">
          <img src={YoutubeLogo} alt="Youtube logo" className="h-[24px]" />
          <div className="font-bold">Youtube</div>
        </button>
      </div>
      <div className="border border-black rounded-full overflow-hidden flex items-center">
        <input
          type="text"
          className="focus:outline-none ml-5"
          placeholder="Search"
        />
        <Button variant="ghost" size="sm">
          <CiSearch className="w-5 h-5" />
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="ghost" size="icon">
          <MdVideoCall className="w-5 h-5 text-red-600" />
        </Button>
        <Button variant="ghost" size="icon">
          <CgExtension className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <FaRegBell className="w-5 h-5" />
        </Button>
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;
