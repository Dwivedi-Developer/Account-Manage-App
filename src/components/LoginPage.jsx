import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  const Navigate = useNavigate();

  const handleLogin = () => {
    // fetching user data from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('user_data')) || [];
    const user = storedUsers.find((user) => user.username === username && user.password === password);
    if (user) {
      Navigate(`/account/${username}`);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 bg-slate-400 py-2 px-11 border-4 border-[#E6E6FA]">
      <h2 className="text-2xl font-bold mb-4">Login Page</h2>
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
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </div>
  );
};

export default LoginPage;
