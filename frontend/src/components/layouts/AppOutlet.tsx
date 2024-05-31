import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

// HTML DIV
interface IAppOutletProps extends React.HTMLAttributes<HTMLDivElement> {
}

const AppOutlet = ({ }: IAppOutletProps) => {
  return (
    <div className="w-full h-full">
			<ToastContainer />
      <AppHeader />
      <AppSidebar />
      <main className="w-full min-h-full p-2 pt-16 text-white bg-gray-500 lg:pl-44 ">
        <Outlet />
      </main>
    </div>
  );
};

export default AppOutlet;
