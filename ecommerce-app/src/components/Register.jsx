import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/userSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('shopper');
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), name, role };
    dispatch(registerUser(newUser));
    // Reset form or navigate
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="admin">Admin</option>
        <option value="seller">Seller</option>
        <option value="shopper">Shopper</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
