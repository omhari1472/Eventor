import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/signup/SignUp';
import Welcome from './components/welcome/Welcome';
import LogIn from './components/login/LogIn';
import Dashboard from './components/dashboard/Dashboard';
import Event from './components/event/Event';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
      <Routes>
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
          element={<Event/>}
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
