import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Col, Container, Row, Image } from 'react-bootstrap';

export const Profile = () => {
  const { user } = useAuth0();
  return (
    <Container className="mt-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left ">
        <Col>
          <Image src={user.picture} alt="Profile" roundedCircle />
        </Col>
      </Row>
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col>
          <h2>{user.name}</h2>
        </Col>
      </Row>
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </Col>
      </Row>
    </Container>
  );
};
