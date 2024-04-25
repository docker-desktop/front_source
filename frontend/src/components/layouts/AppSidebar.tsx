import { Link } from "react-router-dom";

const AppSidebar = () => {
  return (
    <div className="hidden lg:flex fixed left-0 top-0 w-40 h-full p-2 ustify-between flex-col items-center bg-gray-700 text-white text-2xl">
      <div className="text-center flex-1">
        <h1 className="text-2xl">Application</h1>
      </div>
      <div>
        <ul>
          <li className="text-center"><Link to="#">Settings</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default AppSidebar;
