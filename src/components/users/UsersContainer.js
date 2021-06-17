import React from 'react';
import { Route } from 'react-router-dom';
import UserProfile from './UserProfile'

function UsersContainer() {  
    return (
        <div className="container border border-amber-200 w-full"> 
          <Route path={`/:customPath/`} render={routerProps => <UserProfile {...routerProps}/>}/>
        </div>
    );
};
export default UsersContainer;