import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux"

const PrivateRoute = ({component: Component,history, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (


                // state.user && state.user.emailVerified?
                Boolean(rest.userData)?
                <Component {...props} />
                :
                <Redirect to="/"/>

            // :
            //  <Redirect to={{ pathname: "/login", state: { referer: props.location } }} />
            
        )} />
    );
};
const mapStateToProps =state=>({
    userData:state.userData
})
export default connect(mapStateToProps)(PrivateRoute);