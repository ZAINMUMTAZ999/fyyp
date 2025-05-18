import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import HomeLayout from "./Layout/HomeLayout";
import { AppContext } from "./context/AppNotify";
import Logout from "./components/Logout";
import AddBus from "./pages/AddBus";
import AllBuses from "./pages/AllBuses";
import ContactUs from "./components/ContactUs";
import LandingPage from "./pages/LandingPage";



const App = () => {

  const { isLogged } = AppContext();
  return (
    <Router>
      <Routes>
        <Route path="/register" element={
          <HomeLayout>

            <Register />
          </HomeLayout>
        } />
        <Route path="/contactUs" element={
          <HomeLayout>

            <ContactUs />
          </HomeLayout>
        } />
        <Route path="/landingPage" element={
          <HomeLayout>

            <LandingPage />
          </HomeLayout>
        } />
        <Route path="/login" element={
          <HomeLayout>


            <Login />
          </HomeLayout>
        } />
 
 <Route path="/allBuses" element={
                <HomeLayout>

                  <AllBuses />
                </HomeLayout>
              } />
        {
          isLogged &&
          (
            <>
              
             
             
              <Route path="/login" element={
                <HomeLayout>

                  <Logout />
                </HomeLayout>
              } />
              <Route path="/addBus" element={
                <HomeLayout>

                  <AddBus />
                </HomeLayout>
              } />
             

            </>
          )
        }
        <Route path="*" element={
          <HomeLayout>
            <Login />


          </HomeLayout>
        } />

      </Routes>
    </Router>
  )
};
export default App;