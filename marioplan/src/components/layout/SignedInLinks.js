import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="#" onClick={props.signOut}>Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink></li>
        </ul>
    )
}
const mapToDispatchProps = (dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapToDispatchProps)(SignedInLinks);