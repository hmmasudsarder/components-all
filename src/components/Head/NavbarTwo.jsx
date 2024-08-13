
const NavbarTwo = () => {
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/800">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <h2 className="h-10 w-10 text-xl tracking-tight">VirtualR</h2>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        <li>
                            <a href="#home">HOME</a>
                        </li>
                        <li>
                            <a href="#home">ABOUT</a>
                        </li>
                        <li>
                            <a href="#home">CONTACT</a>
                        </li>
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sign In
                        </a>
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                            Create an account
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarTwo;