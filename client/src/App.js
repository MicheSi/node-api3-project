import React from 'react';

import UserList from './components/UserList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>API3 Stretch</h1>
      <h2>List of Users</h2>
      <UserList />
    </div>
  );
}

export default App;
