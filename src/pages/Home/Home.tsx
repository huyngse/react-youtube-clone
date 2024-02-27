import Feeds from "@/components/Feeds";
import Sidebar from "@/components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="px-2 flex">
      <Sidebar isCollapse />
      <div className="flex-1 px-5">
        <Feeds />
      </div>
    </div>
  );
};

export default Home;
