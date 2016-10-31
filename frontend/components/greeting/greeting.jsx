import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ currentUser, logout }) => {
  const handleLogout = e => logout();

  if (currentUser) {
    return (
      <div className="greeting-logged-out">
        <h1>
          Welcome, {currentUser.username}!
        </h1>

        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="greeting-logged-in">
        <p><Link to="/#/signup">Sign Up</Link></p>
        <p><Link to="/#/login">Log In</Link></p>
      </div>
    );
  }
};

export default Greeting;
