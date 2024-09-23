import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import DropDown from "./components/Headers/DropDown";
import DropDownWithLogo from "./components/Headers/DropDownWithLogo";
import Navbar from "./components/Headers/Navbar";
import NavbarTwo from "./components/Headers/NavbarTwo";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <>
      {/* <Navbar/> */}
      {/* <NavbarTwo/> */}
      <Sidebar sidebarToggle={sidebarToggle}/>
      <Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
      {/* <DropDown/> */}
      {/* <DropDownWithLogo/> */}
    </>
  );
}

export default App;
