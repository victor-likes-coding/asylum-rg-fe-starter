import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = ({ style }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="pointer" style={style} onClick={() => loginWithRedirect()}>
      Log In
    </div>
  );
};
