import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl m-2 p-2 mx-auto">
        <div className="font-bold text-sm sm:text-2xl flex flex-wrap">
          <Link to="/">
            <span className="text-cyan-600">Paul</span>
            <span className="text-slate-600">Estate</span>
          </Link>
        </div>
        <div className="bg-slate-100 rounded-lg flex items-center p-1">
          <input
            type="text"
            placeholder="search"
            className="bg-transparent p-1 focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500 m-1" />
        </div>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="text-slate-600 font-bold hidden sm:inline">Home</li>
          </Link>
          <Link to="about">
            <li className="text-slate-600 font-bold hidden sm:inline">About</li>
          </Link>
          <Link to="sign-in">
            <li className="text-slate-600 font-bold">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
