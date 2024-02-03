import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { users, setUsers } from '../Data';
const AccountPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundUser = users.find((u) => u.username === username);
    setUser(foundUser);
    setLoading(false);
  }, [username, users]);

  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newMobileNo, setNewMobileNo] = useState('');

  const Navigate = useNavigate() ;
  const handleUpdateAccount = () => {
     
    const updatedUsers = users.map((user) => {
      if (user.username === username) {
        return {
          ...user,
          username: newUsername || user.username,
          password: newPassword || user.password,
          email: newEmail || user.email,
          mobileNo: newMobileNo || user.mobileNo,
        };
      }
      return user;
    });

    setUsers(updatedUsers);
    alert('Account updated successfully');
  };

    const handleDeleteAccount = () => {
      // Confirm deletion
      if (window.confirm('Are you sure you want to delete your account?')) {
        // Remove user from the array and update localStorage
        const updatedUsers = users.filter((user) => user.username !== username);
        setUsers(updatedUsers);
        Navigate('/login');
        alert('Account deleted successfully');
      }
    };

    if (loading) {
      return (<div>Loading...</div>);
    }
    if (!user) {
      // User not found
      window.location.reload();
    }

  return (
    
    <div className="flex flex-col items-center mt-8 bg-slate-400 py-2 px-7 border-4 border-[#E6E6FA]">
      <h2 className="text-2xl font-bold mb-4">Account Page</h2>
     <div className='w-full text-left font-semibold text-blue-700 mb-1'> <p>Username: {username}</p>
      <p>Password: {user.password}</p>
      <p>Email: {user.email}</p>
      <p>Mobile No: {user.mobileNo}</p></div>
      <input
        type="text"
        placeholder="New Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        className="mb-2 p-2 border"
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="mb-2 p-2 border"
      />

      <input
        type="email"
        placeholder="New email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        className="mb-2 p-2 border"
      />
      <input
        type="email"
        placeholder="New email"
        value={newMobileNo}
        onChange={(e) => setNewMobileNo(e.target.value)}
        className="mb-2 p-2 border"
      />

      <button onClick={handleUpdateAccount} className="bg-yellow-500 text-white p-2 rounded">
        Update Account
      </button>
      <button onClick={handleDeleteAccount} className=" mt-2 bg-red-500 text-white py-2 px-4 rounded ml-2">
        Delete Account
      </button>
    </div>
  );
};

export default AccountPage;
