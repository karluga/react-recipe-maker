
import '../App.css';

import { Outlet, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";


const Layout = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="links">
        <IoMdHome />

          <Link to="/" className="underline">Home</Link>
          <Link to="/add-recipe">Add recipe</Link>
          <Link to="/edit-recipe">Edit recipe</Link>
          <Link to="/my-recipes">My recipes</Link>
        </div>
        <div className="search-bar">
          <form>
            <input type="text" className="input-bar"placeholder="Search recipe"/>
            <FaSearch />
          </form>
        </div>
        <div className="links">
          <Link to="/login">Register</Link>
          <Link to="/login">Sign in</Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;