import { Outlet } from "react-router-dom";

import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

// HTML DIV
interface IAppOutletProps extends React.HTMLAttributes<HTMLDivElement> {
}

const AppOutlet = ({ }: IAppOutletProps) => {
  return (
    <div className="w-full h-full">
      <AppHeader />
      <AppSidebar />
      <main className="w-full min-h-full p-2 pt-16 lg:pl-44 bg-gray-500 text-white ">
        <Outlet />
      </main>
    </div>
  );
};

export default AppOutlet;
