import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/signup/SignUp';
import Welcome from './components/welcome/Welcome';
import LogIn from './components/login/LogIn';

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<LogIn/>} />
      <Route path='/welcome' element={<Welcome/>} />
    </Routes>
  );
}

export default App;
