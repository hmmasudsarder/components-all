import { FaHome } from "react-icons/fa";

const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
      <div className="my-2 mb-4">
        <h2 className="text-2xl text-white font-bold">Admin Dashboard</h2>
      </div>
      <hr /> 
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />
            Home
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
