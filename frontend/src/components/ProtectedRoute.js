import React from 'react';
import {Navigate} from 'react-router-dom';

export function ProtectedRoute( {element: Component, ...props}) {
    return (props.isAuthorized ? <Component {...props} /> : <Navigate to="/sign-in" />);
}
