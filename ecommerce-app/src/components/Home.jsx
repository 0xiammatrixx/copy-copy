import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the eCommerce App</h1>
      <p>This app allows admins, sellers, and shoppers to manage users, post products, and make purchases.</p>
      
      <div className="home-navigation">
        <h2>Get Started:</h2>
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Go to Dashboard</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
