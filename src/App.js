import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserContextProvider from './Components/Providers/UserContextProvider';
import Login from './Components/Login';
import ConnectedUser from './Components/ConnectedUser';

const App = () => {
  return (
    <main style={{border: 'solid 5px #00FF00'}}>
      Main
      <UserContextProvider>
        <Login />
        <ConnectedUser />
      </UserContextProvider>
    </main>
  );
}

export default App;
