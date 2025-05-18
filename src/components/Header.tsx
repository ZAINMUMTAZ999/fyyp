import { Link } from "react-router-dom";
import { AppContext } from "../context/AppNotify";

import DropDownUser from "./DropDownUser";

const Header = () => {
  const { isLogged } = AppContext();

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/landingPage" className="text-2xl font-bold text-indigo-600">Online Booking </Link>
            </div>
          </div>
          <div className="flex items-center">
            {isLogged ? (
              <>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  {/* <div className="ml-4">Services</div>
                  <div className="ml-4">Blogs</div> */}

                  <Link  className="bg-blue-600 text-white px-4 py-2 m-2 rounded-md hover:bg-blue-700 shadow transition duration-200" to="/addBus" >Add Bus</Link>
                  <Link   className="bg-blue-600 text-white px-4 py-2 rounded-md m-2 hover:bg-blue-700 shadow transition duration-200" to="/allBuses" >All Buses</Link>
                  <Link   className="bg-blue-600 text-white px-4 py-2 rounded-md m-2 hover:bg-blue-700 shadow transition duration-200" to="/contactUs" >ContactUs</Link>
                  
                </div>
                <div className="relative flex items-center ml-12">
                  <DropDownUser />
                </div>
              </>
            ) : (
              <div className="flex items-center">
                <span className="text-indigo-600 font-semibold hover:text-indigo-800 cursor-pointer">
                  Sign In
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
     
    </header>
  );
};

export default Header;
