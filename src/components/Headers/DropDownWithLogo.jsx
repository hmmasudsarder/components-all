import user from "../../assets/man.jpg";

const DropDownWithLogo = () => {
    return (
        <div className="h-screen bg-gray-200 flex justify-center pt-28">
            <div className="relative">
                <img src={user} className="h-20 w-20 object-cover border-4 border-gray-400 rounded-full cursor-pointer" alt="" />
                <div className="bg-white p-4 w-52 "></div>
            </div>
        </div>
    );
};

export default DropDownWithLogo;