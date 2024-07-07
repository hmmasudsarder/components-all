import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="bg-cyan-400">
      <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-start">
          <span className="text-2xl font-[Poppins] cursor-pointer">Hello</span>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            <CiMenuBurger />
          </span>
        </div>
        {/* menu items change here  */}
        <ul className="md:flex md:items-center z-[1] md:z-auto md:static absolute bg-white w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[400px] transition-all ease-in duration-500 left-0">
          <li className="mx-4 my-6 md:my-0">
            <a href="" className="text-xl hover:text-cyan-500 duration-500">
              Home
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="" className="text-xl hover:text-cyan-500 duration-500">
              Blog
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="" className="text-xl hover:text-cyan-500 duration-500">
              Service
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="" className="text-xl hover:text-cyan-500 duration-500">
              About
            </a>
          </li>
          <li className="mx-4">
            <a href="" className="text-xl hover:text-cyan-500 duration-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
