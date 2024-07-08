import user from "../../assets/man.jpg";

const DropDownWithLogo = () => {
    return (
        <div>
            <div className="">
                <img src={user} className="h-20 w-20 object-cover border-4 border-gray-400 rounded-full cur" alt="" />
            </div>
        </div>
    );
};

export default DropDownWithLogo;