import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'

const AuthorizedRoute = ({ component: Component, auth, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          !!auth.uid ? <Component {...props} /> : <Redirect to="/signin" />
        }
      />
    );
  };

const mapToStateProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapToStateProps)(AuthorizedRoute)