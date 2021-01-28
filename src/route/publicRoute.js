import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => {
            return(
            props.location.state && Boolean(rest.userData) ?
            props.location.state.referer !== undefined&&
                <Redirect to={props.location.state.referer} exact />
            :
            rest.user?
                <Redirect to="/overview" />
            :
            <Component {...props} />
            )}} />
    );
};
const mapStateToProps =state=>({
    user:state.user,
    userData:state.userData
})
export default connect(mapStateToProps)(PublicRoute);