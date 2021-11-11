import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  var login = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!login) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export const ProtectedRoute2 = ({ component: Component, ...rest }) => {
  var login = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={(props) => {
        if (login) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
