import React, { useState } from 'react';
import UserContext from './UserContext';


const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const changeUser = user => {
    setUser(user);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        changeUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;