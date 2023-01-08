import { Outlet } from "react-router-dom";
import { ViewMenu } from "../components";

const LayoutMenu = () => {
  return (
    <div>
      <ViewMenu />
      <Outlet />
    </div>
  );
};
export default LayoutMenu;
