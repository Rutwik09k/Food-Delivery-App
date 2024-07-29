import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Header() {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className="flex justify-between items-center py-4 px-6 text-lg font-semibold border-b-2 border-gray-100 relative">
      {/* Logo */}
      <div>
        <Link to="/" className="text-xl">
          Yumii<span className="text-[#FFB200]">Food</span>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-10">
        <Link to="/" className="hover:text-[#fcb531]"><li>Home</li></Link>
        <Link to="/aboutus" className="hover:text-[#fcb531]"><li>About Us</li></Link>
        <Link to="/ourfood" className="hover:text-[#fcb531]"><li>Our Food</li></Link>
        <Link to="/signin" className="hover:text-[#fcb531]"><li>Sign In</li></Link>
      </ul>

      {/* Mobile Navigation Toggle */}
      <div className="flex items-center gap-6">
        <GiHamburgerMenu
          size={30}
          className="sm:hidden cursor-pointer"
          onClick={() => setSideNav(true)}
        />
        <FaCartShopping size={30} />
      </div>

      {/* Side Navigation */}
      {sideNav && (
        <div className="bg-[#EEEEEE] fixed top-0 right-0 h-full w-64 flex flex-col items-center py-10 px-4 shadow-lg z-50">
          <RxCross2
            className="absolute top-5 right-5 cursor-pointer"
            size={30}
            onClick={() => setSideNav(false)}
          />
          <ul className="flex flex-col gap-10 text-lg">
            <Link to="/" onClick={() => setSideNav(false)}><li>Home</li></Link>
            <Link to="/aboutus" onClick={() => setSideNav(false)}><li>About Us</li></Link>
            <Link to="/ourfood" onClick={() => setSideNav(false)}><li>Our Food</li></Link>
            <Link to="/signin" onClick={() => setSideNav(false)}><li>Sign In</li></Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
