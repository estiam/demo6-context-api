import React from 'react'
import UserContext from './Providers/UserContext';

const ConnectedUser = () => {
  return (
    <div style={{ border : "solid 5px #0000FF"}}>
      ConnectedUser
      <UserContext.Consumer>
        {({ user, changeUser }) => {
          return <div>{ user }</div>
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ConnectedUser;