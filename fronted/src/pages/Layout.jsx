import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="Layout__header"></div>
      <div className="Layout__body">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
