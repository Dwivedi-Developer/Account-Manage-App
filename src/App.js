import React from 'react';
import { Link, Routes,Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import AccountPage from './components/AccountPage';

const App = () => {
  
  return (
    
      <div className="container mx-auto flex flex-col justify-center items-center h-[100vh] bg-[#FFE4B5]">
        <nav className="my-4 bg-white py-1 px-2 border-4 border-[#E6E6FA]">
          <ul className="flex space-x-4 font-semibold text-2xl ">
            <li>
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="text-green-500 hover:underline">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-yellow-500 hover:underline">
                Account
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/account/:username"
           element= {
              <AccountPage  />
            } />
         
       </Routes>
      </div>
    
  );
};

export default App;
