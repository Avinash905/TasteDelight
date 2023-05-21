import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiFillTag,
} from "react-icons/ai";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { BsFillSaveFill } from "react-icons/bs";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-center h-12 gap-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <AiOutlineMenu
              size={20}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              className="cursor-pointer"
            />
            <h1 className="text-lg md:text-xl font-bold">
              Taste{" "}
              <span className="text-red-500 font-extrabold">Delights</span>
            </h1>
          </div>
          <div className="hidden sm:flex bg-gray-200 rounded-full ">
            <span className="text-xs text-white rounded-full bg-black px-2 py-1">
              Delivery
            </span>
            <span className="text-xs px-2 p-1">Pickup</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-gray-200 py-1 px-3 rounded-full w-80">
          <AiOutlineSearch />
          <input
            type="text"
            placeholder="Search foods"
            className="bg-transparent outline-none"
          />
        </div>
        <div className="flex items-center gap-2 text-white bg-black rounded-full py-1 px-3">
          <AiOutlineShoppingCart />
          <span className="text-sm">Cart</span>
        </div>
      </div>
      {menuOpen && (
        <div
          className={`fixed top-0 left-0 bg-black/70 w-full h-full z-10 ease-linear duration-1000`}
        >
          <nav
            className={`fixed bg-white p-4 h-screen w-52 flex flex-col ${
              menuOpen ? "left-0" : "left-[-100%]"
            }`}
          >
            <h1 className="text-lg md:text-xl font-bold">
              Taste{" "}
              <span className="text-red-500 font-extrabold">Delights</span>
            </h1>
            <AiOutlineClose
              size={20}
              className="absolute top-5 right-3 cursor-pointer"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            />
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex gap-4 items-center">
                <TbTruckDelivery size={20} />
                <p>Orders</p>
              </div>
              <div className="flex gap-4 items-center">
                <MdFavorite size={20} />
                <p>Favorites</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaWallet size={20} />
                <p>Wallet</p>
              </div>
              <div className="flex gap-4 items-center">
                <MdHelp size={20} />
                <p>Help</p>
              </div>
              <div className="flex gap-4 items-center">
                <AiFillTag size={20} />
                <p>Promotions</p>
              </div>
              <div className="flex gap-4 items-center">
                <BsFillSaveFill size={20} />
                <p>Best One</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaUserFriends size={20} />
                <p>Invite Friends</p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
