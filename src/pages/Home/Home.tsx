import Feeds from "@/components/Feeds";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="max-h-[100vh] flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-auto">
        <div>
          <Sidebar isCollapse />
        </div>
        <div className="flex-1 px-5 overflow-auto">
          <Feeds />
        </div>
      </div>
    </div>
  );
};

export default Home;
