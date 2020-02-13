import React from 'react';
import {Route, Switch} from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>API3 Stretch</h1>
      <h2>List of Users</h2>

      <Switch>
        <Route
         path='/users/:id'
         render={props => {
           return <UserDetails {...props} />
         }}
        />
        <Route path='/' component={UserList} />
      </Switch>
    </div>
  );
}

export default App;
