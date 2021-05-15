import React from 'react';
import Card from 'react-bootstrap/Card';

const Icon = ({info}) => {
  return (
    <div>
      <Card>
        {/* <Card.Img variant="top" src="logo512.png" /> */}
        <Card.Body>
          <Card.Title>{info.title}</Card.Title>
          <Card.Text>{info.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Icon;
