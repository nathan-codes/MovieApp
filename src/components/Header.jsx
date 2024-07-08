import logo from "../assets/Images/logo.png";
import { NavLink, Link } from "react-router-dom";
import userIcon from "../assets/Images/user.png";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { navigation } from "../constants/navigation.jsx";

const Header = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-75 z-40">
      <div className=" container mx-auto w-full  px-4 lg:px-10 flex items-center h-full">
        <div>
          <Link to="/">
            <img src={logo} alt="" width={120} />
          </Link>
        </div>

        <nav className="hidden lg:flex  items-center gap-2 ml-5">
          {navigation.map((navItem) => {
            return (
              <div key={navItem.label}>
                <NavLink
                  to={navItem.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-400 ${
                      isActive && "text-neutral-100"
                    }`
                  }
                >
                  {navItem.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

         
        <div className="ml-auto flex items-center h-full gap-3">
          <form
            action=""
            className="flex items-center gap-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button className="text-2xl text-white">
              <IoSearchSharp />
            </button>
          </form>

          <div className="w-8 h-8 rounded-full overflow-hidden  cursor-pointer active:scale-50 transition-all">
            <img src={userIcon} alt="" className="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;