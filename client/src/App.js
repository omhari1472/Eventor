import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/signup/SignUp';
import Welcome from './components/welcome/Welcome';
import LogIn from './components/login/LogIn';
import Dashboard from './components/dashboard/Dashboard';
import Event from './components/event/Event';
import Venue from './components/venue/Venue';
import Checkout from './components/payment/Checkout';
import RSVPInvitation from './components/invitation/RSVPInvitation';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
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
          path="/checkout"
          element={<Checkout/>}
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
          path="/welcome"
          element={<Welcome isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard isAuthenticated={isAuthenticated} />}
        />
      </Routes>
  );
};

export default App;
