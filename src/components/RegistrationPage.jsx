import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users, setUsers } from '../Data';
const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const Navigate = useNavigate();

  const handleRegister = () => {
    // Check if username already exists
    const isExistingUser = users.some((user) => user.username === username);
    if (isExistingUser) {
      alert('Username already exists');
      return;
    }
 
    const newUser = { username, password, mobileNo, email };
    setUsers([...users, newUser]);

    alert('Registration successful');
    
    Navigate('/login');
  };  
    const handleInputChange = (e) => {
    const  varExp = /^[0-9]{0,10}$/ ;
    const inputVal = e.target.value ;
      if (inputVal.match(varExp) && inputVal.length<=10) {
     
      setMobileNo(inputVal);
    }
    else{
      e.target.focus();
    
      alert("Please Enter Valid Mobile Number");
    }};

  return (
    <div className="flex flex-col items-center mt-8 bg-slate-400 py-2 px-11 border-4 border-[#E6E6FA]">
      <h2 className="text-2xl font-bold mb-4">Registration Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 p-2 border"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 border"
      />
      <input
        type="email"
        placeholder="abc@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 border"
      />

      <input
        type="text"
        placeholder="Enter your Mobile no." 
        value={mobileNo}
        onChange={handleInputChange}
        className=" remove-arrow mb-2 p-2 border"
      />


      <button onClick={handleRegister} className="bg-green-500 text-white p-2 rounded">
        Register
      </button>
    </div>
  );
};

export default RegistrationPage;
