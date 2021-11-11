import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './Signin';
import Home from './Home';
import Signup from './Signup';
import Profile from './Profile';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ProtectedRoute, ProtectedRoute2 } from './ProtectedRoute';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FEBB58',
    },
    secondary: {
      light: '#bb2726',
      main: '#bb2726',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
});

function App() {
  // render() {
  const token = localStorage.getItem('token');
  console.log('token', token);
  useEffect(() => {}, [token]);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <ProtectedRoute path='/signin' component={Signin} />
            <ProtectedRoute path='/signup' component={Signup} />
            <ProtectedRoute2 path='/profile' component={Profile} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
  // }
}

// function mapStateToProps(state) {
//   return {
//     auth: state.auth,
//   };
// }
export default App;
