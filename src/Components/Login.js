import React from 'react'
import UserContext from './Providers/UserContext';

const Login = () => {
  return (
    <div style={{ border: 'solid 5px #FF00FF'}}>
      Login
      <UserContext.Consumer>
        {context => {
          console.log(context);
          return (
            <div>
              {context.user}
              <button onClick={() => context.changeUser('toto')}>SET USER</button>
            </div>
          )
        }}
      </UserContext.Consumer>

    </div>
  );
}

export default Login;