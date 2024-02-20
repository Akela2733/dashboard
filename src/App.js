import { Outlet } from "react-router-dom";
import "./App.css";
import DashboardView from "./Components/DashboardView";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="flex">
      <div className="basis-[12%] flex-1 border h-[100vh]">
        <SideBar />
      </div>

      <div className="basis-[88%] flex-1 border h-[100vh] overflow-scroll">
        <DashboardView />
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
