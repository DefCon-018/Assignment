import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function Navbar() {
  const token = localStorage.getItem('token');
  const [stateToken, setStateToken] = useState(token);
  if (token) {
    var decode = jwt_decode(token);
    console.log(decode);
  }
  console.log('d', token);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setStateToken(null);
  };

  return (
    <Paper elevation={2}>
      <div className='navbar'>
        <div className='left'>
          <h2>Ensvee</h2>
        </div>
        <div className='right'>
          {token && (
            <div className='flex-group'>
              <h2 style={{ color: 'blue' }}>
                <Link
                  to='/profile'
                  style={{ textDecoration: 'none', color: 'blue' }}
                >
                  Hi! {decode ? decode.name : ''}
                </Link>
              </h2>
              <button className='secondary-btn' onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
          {!token && (
            <div className='flex-group'>
              <button className='primary-btn'>
                <Link
                  style={{ textDecoration: 'none', color: 'blue' }}
                  to='/signin'
                >
                  Sign In
                </Link>
              </button>
              <button className='secondary-btn'>
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to='/signup'
                >
                  Sign Up
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </Paper>
  );
}

export default Navbar;
