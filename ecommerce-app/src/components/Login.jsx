import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../features/userSlice';

const Login = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.name === name);
    if (user) {
      dispatch(setCurrentUser(user));
    } else {
      alert('User not found');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
