// import { Link } from "react-router-dom";
// import { AppContext } from "../context/AppNotify";

// import DropDownUser from "./DropDownUser";

// const Header = () => {
//   const { isLogged } = AppContext();

//   return (
//     <header className="bg-white shadow">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             <div className="flex-shrink-0 flex items-center">
//               <Link to="/landingPage" className="text-2xl font-bold text-indigo-600">Online Booking </Link>
//             </div>
//           </div>
//           <div className="flex items-center">
//             {isLogged ? (
//               <>
//                 <div className="flex flex-wrap items-center gap-2 ml-2">
//                   {/* <div className="ml-4">Services</div>
//                   <div className="ml-4">Blogs</div> */}

//                   <Link  className="bg-blue-600 text-white px-4 py-2 m-2 rounded-md hover:bg-blue-700 shadow transition duration-200" to="/addBus" >Add Bus</Link>
//                   <Link   className="bg-blue-600 text-white px-4 py-2 rounded-md m-2 hover:bg-blue-700 shadow transition duration-200" to="/allBuses" >All Buses</Link>
//                   <Link   className="bg-blue-600 text-white px-4 py-2 rounded-md m-2 hover:bg-blue-700 shadow transition duration-200" to="/contactUs" >ContactUs</Link>
                  
//                 </div>
//                 <div className="relative flex items-center ml-12">
//                   <DropDownUser />
//                 </div>
//               </>
//             ) : (
//               <div className="flex items-center">
//                 <span className="text-indigo-600 font-semibold hover:text-indigo-800 cursor-pointer">
//                   Sign In
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
     
//     </header>
//   );
// };

// export default Header;
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppNotify";
import DropDownUser from "./DropDownUser";
import { Menu, X } from "lucide-react"; // optional icons

const Header = () => {
  const { isLogged } = AppContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/landingPage" className="text-2xl font-bold text-indigo-600">
              Online Booking
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menu for medium and larger screens */}
          <div className="hidden md:flex items-center space-x-4">
            {isLogged ? (
              <>
                <Link
                  to="/addBus"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow transition"
                >
                  Add Bus
                </Link>
                <Link
                  to="/allBuses"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow transition"
                >
                  All Buses
                </Link>
                <Link
                  to="/contactUs"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow transition"
                >
                  Contact Us
                </Link>
                <DropDownUser />
              </>
            ) : (
              <Link to="/login" className="text-indigo-600 font-semibold hover:text-indigo-800">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {isLogged ? (
            <>
              <Link
                to="/addBus"
                className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow transition"
                onClick={() => setMenuOpen(false)}
              >
                Add Bus
              </Link>
              <Link
                to="/allBuses"
                className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow transition"
                onClick={() => setMenuOpen(false)}
              >
                All Buses
              </Link>
              <Link
                to="/contactUs"
                className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="pt-2">
                <DropDownUser />
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="block text-indigo-600 font-semibold hover:text-indigo-800"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
