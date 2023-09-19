import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

export const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button variant="primary" className="btn-margin" onClick={() => logout()}>
      Log out
    </Button>
  );
};
