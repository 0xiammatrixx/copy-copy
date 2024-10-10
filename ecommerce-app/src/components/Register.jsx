import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/userSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('shopper'); // Default to shopper role
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), name, role }; // You can replace Date.now() with a proper ID generation method.
    dispatch(registerUser(newUser));
    setName('');
    setRole('shopper');
  };

  return (
    <div className="register-container">
      <h2>Register New User</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="seller">Seller</option>
          <option value="shopper">Shopper</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
