import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import image from '../images/Screenshot (21).png';
import { makeStyles } from '@mui/styles';
import getFormBody from '../utils/util';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  paper: {
    borderRadius: '10px',
    boxShadow: '0px 0px 10px lightgray',
  },
  button: {
    width: '100%',
    color: 'white',
    textTransform: 'capitalize',
    marginTop: '5px',
    marginBottom: '5px',
  },
});

function Signup() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('hello');
    fetch('http://localhost:8000/api/users/create', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({
        name,
        email,
        password,
        confirm_password,
      }),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log('data', data);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      });
  };

  return (
    <div className='container'>
      <div className={classes.paper}>
        <Grid container>
          <Grid item md={6} sm={12}>
            <div className='left-part'>
              <h1>Sign Up</h1>
              <p className='m-8 para'>Don't have an account</p>
              <div>
                <form className='form'>
                  <div className='m-8'>
                    <label className='label' for='name'>
                      Full Name
                    </label>
                    <br />
                    <div style={{ position: 'relative' }}>
                      <input
                        type='text'
                        id='name'
                        placeholder='Ivan Pavlon'
                        onChange={handleNameChange}
                        value={name}
                        className={name ? 'textfield border-red' : 'textfield'}
                      ></input>
                      <span className='focus-border'></span>
                    </div>
                  </div>
                  <div className='m-20'>
                    <label className='label' for='email'>
                      Your Email
                    </label>
                    <br />
                    <div className='input-field'>
                      <input
                        type='email'
                        id='email'
                        placeholder='Ivan@gmail.com'
                        onChange={handleEmailChange}
                        value={email}
                        className={email ? 'textfield border-red' : 'textfield'}
                      ></input>
                      <span className='focus-border'></span>
                    </div>
                  </div>
                  <div className='m-20'>
                    <label className='label' for='password'>
                      Password
                    </label>
                    <br />
                    <div className='input-field'>
                      <input
                        type='password'
                        id='password'
                        placeholder='Enter your password'
                        onChange={handlePasswordChange}
                        value={password}
                        className={
                          password ? 'textfield border-red' : 'textfield'
                        }
                      ></input>
                      <span className='focus-border'></span>
                    </div>
                  </div>
                  <div className='m-20'>
                    <label className='label' for='confirm-password'>
                      Repeat Password
                    </label>
                    <br />
                    <div className='input-field'>
                      <input
                        type='password'
                        id='confirm-password'
                        placeholder='Enter your password'
                        onChange={handleConfirmPasswordChange}
                        value={confirm_password}
                        className={
                          confirm_password
                            ? 'textfield border-red'
                            : 'textfield'
                        }
                      ></input>
                      <span className='focus-border'></span>
                    </div>
                  </div>
                </form>

                <div style={{ marginTop: '14px' }}>
                  <button
                    className='button btn-secondary'
                    onClick={handleSignup}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <div className='right-part'>
              <div className='inner-right-part'>
                <h1 className='color-white'>Natus Vincere - </h1>
                <p className='color-white para'>Online team management</p>
                <div className='side-image'>
                  <img src={image} alt='image'></img>
                </div>
                <div className='below-link'>
                  <p className='para color-white center'>
                    Don't have an account?{' '}
                    <Link to='/signin' style={{ textDecoration: 'none' }}>
                      <span className='link'>Click here</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Signup;
