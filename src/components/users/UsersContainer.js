import React from 'react';
import { Route } from 'react-router-dom';
import UserProfile from './UserProfile'
import withAuth from '../auth/withAuth'

function UsersContainer() {  
    return (
        <div className="container border border-amber-200 w-full">    
          {<h1>Users Data</h1>}
          <Route path={`/:customPath/`} component={withAuth(UserProfile)} />
        </div>
    );
};
export default UsersContainer;