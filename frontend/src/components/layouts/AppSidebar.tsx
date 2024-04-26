import { Link } from "react-router-dom";

import { SidebarList } from "../../constants/sidebar";

const AppSidebar = () => {
  return (
    <div className="hidden lg:flex fixed left-0 top-0 w-40 h-full p-2 flex-col items-center bg-gray-700 text-white">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">
          <Link to="/">Application</Link>
        </h1>
      </div>
      <div className="text-center flex-1 w-full">
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          { SidebarList.map((sidebarItem) => (
            <li key={sidebarItem.content} className="w-full p-2 bg-gray-600 rounded-md">
              <Link to={sidebarItem.path} className="p-2">{ sidebarItem.content}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center">
        <Link to="#">Settings</Link>
      </p>
    </div>
  );
}

export default AppSidebar;
