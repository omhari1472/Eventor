import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/signup/SignUp';
import Welcome from './components/dashboard/Welcome.jsx';
import LogIn from './components/login/LogIn';
// import Dashboard from './components/dashboard/Dashboard';
import Event from './components/event/Event';
import Venue from './components/venue/Venue';
import Checkout from './components/payment/Checkout';
import RSVPInvitation from './components/invitation/RSVPInvitation';
import EventGuest from './components/eventguest/EventGuest';
import Home from './components/dashboard/Dashboard';
import ContactUs from './components/contactus/ContactUs';
import Profile from './components/profile/Profile';
import Dashboard from './components/admin/Dashboard';
// import WelcomePage from './components/welcome/Welcome';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <>
      <Routes>
         <Route
          path="/"
          element={<LogIn/>}
        />
         <Route
          path="/admin"
          element={<Dashboard/>}
        />
         <Route
          path="/venue"
          element={<Venue isAuthenticated={isAuthenticated} />}
        />
         <Route
          path="/welcome"
          element={<Welcome />}
        />
         <Route
          path="/profile"
          element={<Profile />}
        />
         <Route
          path="/rsvp"
          element={<RSVPInvitation isAuthenticated={isAuthenticated} />}
        />
         <Route
          path="/checkout"
          element={<Checkout isAuthenticated={isAuthenticated} />}
        />
         <Route
          path="/contactus"
          element={<ContactUs isAuthenticated={isAuthenticated} />}
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
