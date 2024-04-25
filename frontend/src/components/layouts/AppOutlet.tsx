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
      <main className="w-full h-full p-2 mt-10 lg:pl-44 bg-gray-500 text-white">
        <Outlet />
      </main>
    </div>
  );
};

export default AppOutlet;
