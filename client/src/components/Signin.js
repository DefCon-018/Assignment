import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import image from '../images/Screenshot (21).png';
import { makeStyles } from '@mui/styles';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import getFormBody from '../utils/util';
import { useHistory } from 'react-router-dom';

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

function Signin() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/users/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem('token', data.data.token);
          history.push('/');
        }
      });
  };

  return (
    <div className='container'>
      <div className={classes.paper}>
        <Grid container>
          <Grid item md={6} sm={12}>
            <div className='left-part'>
              <h1>Sign In</h1>
              <p className='m-8 para'>Welcome, we missed you!</p>
              <div>
                <form className='form'>
                  <div className='m-8'>
                    <label className='label' for='email'>
                      Your Email
                    </label>
                    <br />
                    <div className='input-field'>
                      <input
                        type='email'
                        id='email'
                        placeholder='john@gmail.com'
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
                        onChange={handlePasswordChange}
                        placeholder='Enter your password'
                        value={password}
                        className={
                          password ? 'textfield border-red' : 'textfield'
                        }
                      ></input>
                      <span className='focus-border'></span>
                    </div>
                  </div>
                </form>
                <div className='extra-info'>
                  <div>
                    <FormControl component='fieldset'>
                      <FormControlLabel
                        value='female'
                        control={<Radio />}
                        label='Remember me'
                        style={{ color: '#B4B6C2' }}
                      />
                    </FormControl>
                  </div>
                  <div>
                    <p style={{ color: '#F0AE4B', cursor: 'pointer' }}>
                      Forgot Password?
                    </p>
                  </div>
                </div>
                <div style={{ marginTop: '14px' }}>
                  <button className='button' onClick={handleSignin}>
                    Sign In
                  </button>
                </div>
                <div className='decor'>
                  <div className='left'></div>
                  <div style={{ color: '#B4B6C2' }}>or continue with</div>
                  <div className='right'></div>
                </div>
                <div className='other-options'>
                  <button className='btn1 button'>sign in with Steam</button>
                  <button className='btn2 button'></button>
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
                    <Link to='/signup' style={{ textDecoration: 'none' }}>
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

export default Signin;
