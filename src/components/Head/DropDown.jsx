import { FaChevronDown } from "react-icons/fa";

const DropDown = () => {
  return (
    <div>
      <div className="grid place-items-center h-[100vh]">
        <div className="relative group">
          <button className="rounded-lg border-2 border-gray-500 w-52 py-3 px-2 flex justify-between shadow-md">
            MENU
            <FaChevronDown />
          </button>

          <ul className="dropdown-menu hidden group-hover:block absolute text-gray-700 pt-1 shadow-md w-full">
            <li>
              <a href="" className="rounded bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespance-no-wrap">One</a>
            </li>
            <li>
              <a href="" className="rounded bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespance-no-wrap">Two</a>
            </li>
            <li>
              <a href="" className="rounded bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespance-no-wrap">Three</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
