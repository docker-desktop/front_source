import { useLocation } from "react-router-dom";

import Badge from "../Badge";

const AppHeader = () => {
  const location = useLocation()

  const pageName = location.pathname == "/" ? ["Docker Desktop"] : location.pathname.slice(1).split("/")

  return (
    <header className="w-full fixed top-0 p-2 lg:pl-44 bg-gray-500 text-white">
      <h1 className="font-bold">
        {pageName && pageName.length > 0 && pageName.map((pageNameItem, index) => (
          pageNameItem && pageNameItem.length > 0 && <Badge key={index} type="Yellow" className="text-2xl">{pageNameItem.toUpperCase()}</Badge>
        ))}
      </h1>
    </header>
  )
}

export default AppHeader;
