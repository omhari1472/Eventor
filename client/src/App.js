import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/signup/SignUp';
import Welcome from './components/dashboard/Welcome.jsx';
import LogIn from './components/login/LogIn';
import Dashboard from './components/dashboard/Dashboard';
import Event from './components/event/Event';
import Venue from './components/venue/Venue';
import Checkout from './components/payment/Checkout';
import RSVPInvitation from './components/invitation/RSVPInvitation';
import EventGuest from './components/eventguest/EventGuest';
import ResponsiveAppBar from './components/header/Test';
import Home from './components/dashboard/Dashboard';
import ContactUs from './components/contactus/ContactUs';
// import WelcomePage from './components/welcome/Welcome';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [selectedVendor, setSelectedVendor] = useState(null);


  return (
    <>
      {/* <ResponsiveAppBar isAuthenticated={isAuthenticated} /> */}
      <Routes>
         <Route
          path="/"
          element={<Event/>}
        />
         <Route
          path="/venue"
          element={<Venue/>}
        />
         <Route
          path="/welcome"
          element={<Welcome />}
        />
         <Route
          path="/rsvp"
          element={<RSVPInvitation />}
        />
         <Route
          path="/checkout"
          element={<Checkout/>}
        />
         <Route
          path="/contactus"
          element={<ContactUs/>}
        />
         <Route
          path="/invitation"
          element={<RSVPInvitation/>}
        />
        <Route
          path="/signup"
          element={<SignUp setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/login"
          element={<LogIn setIsAuthenticated={setIsAuthenticated} />}
        />
        
        <Route
          path="/event"
          element={<Event isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/eventguest"
          element={<EventGuest isAuthenticated={isAuthenticated} />}
        />
        {/* <Route
          path="/welcome"
          element={<Welcome isAuthenticated={isAuthenticated} />}
        /> */}
        <Route
          path="/home"
          element={<Home isAuthenticated={isAuthenticated} />}
        />
      </Routes>

      </>
  );
};

export default App;
