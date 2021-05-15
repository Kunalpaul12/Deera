import React from 'react';
import Card from 'react-bootstrap/Card';
import ImageUpload from '../imageUploader';

const Icon = ({info, style, uploadButtonStyle, uploadConatiner}) => {
  return (
    <div style={style}>
      <Card>
        <ImageUpload
          uploadButtonStyle={uploadButtonStyle}
          uploadConatiner={uploadConatiner}
        />
        <Card.Body>
          <Card.Title>{info.title}</Card.Title>
          <Card.Text>{info.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Icon;
