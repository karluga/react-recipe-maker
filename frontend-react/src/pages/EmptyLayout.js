import { Outlet, Link } from "react-router-dom";

const EmptyLayout = ({ children }) => {
    return (
      <>
        <Outlet />
      </>
    );
  };
  

export default EmptyLayout;