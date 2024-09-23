import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className="bg-gray-800 px-4 py-3 flex justify-between ">
      {/* left site navbar icons title  */}
      <div className="flex items-center text-xl">
        {sidebarToggle ? (
          <VscChromeClose
            onClick={() => setSidebarToggle(!sidebarToggle)}
            className="text-white me-4 cursor-pointer"
          />
        ) : (
          <FaBars
            className="text-white me-4 cursor-pointer"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          />
        )}
        <span className="text-white font-semibold">E-commerce</span>
      </div>
      {/* right site icons div  */}
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-64">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <FaSearch />
            </button>
          </span>
          <input
            type="text"
            className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
          />
        </div>
        <div className="text-white">
          <FaBell className="w-6 h-6" />
        </div>
        <div className="relative">
          <button className="text-white group">
            <FaUserCircle className="w-6 h-6 mt-1" />
            <div className="z-10 hidden bg-white absolute rounded-lg shadow w-32 group-focus:block top-full right-0">
              <ul className="py-2 text-sm text-gray-900">
                <li>
                  <a href="">Profile</a>
                </li>
                <li>
                  <a href="">Setting</a>
                </li>
                <li>
                  <a href="">Log Out</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
