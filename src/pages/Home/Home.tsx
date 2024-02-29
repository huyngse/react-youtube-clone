import Feeds from "@/components/Feeds";
import Sidebar from "@/components/Sidebar/Sidebar";
import MainLayout from "@/layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="flex flex-1 overflow-auto">
        <div className="flex">
          <div className="overflow-auto">
            <Sidebar isCollapse />
          </div>
        </div>
        <div className="flex-1 px-5 overflow-auto">
          <Feeds />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
