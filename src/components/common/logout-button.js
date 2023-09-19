import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

export const LogoutButton = ({ style }) => {
  const { logout } = useAuth0();
  return (
    <div style={style} onClick={() => logout()}>
      Log out
    </div>
  );
};
