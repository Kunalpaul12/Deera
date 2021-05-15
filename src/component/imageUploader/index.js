import React, {useState} from 'react';
import ImageUploader from 'react-images-upload';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ImageUpload = ({uploadButtonStyle, uploadConatiner}) => {
  const [pictures, setPictures] = useState([]);
  const [per, setPer] = useState(0);
  const onDrop = (picture) => {
    setPictures(picture);
  };

  const LoadingBar = () => {
    return <ProgressBar striped variant="success" now={per} label={per} />;
  };

  const Upload = () => {
    if (pictures.length === 0) return null;
    if (per > 0) return LoadingBar();

    return (
      <div style={uploadConatiner}>
        <Button
          onClick={() => {
            setPer(90);
          }}
          style={uploadButtonStyle}
          variant="success">
          Upload
        </Button>
      </div>
    );
  };
  return (
    <div>
      <ImageUploader
        withIcon={true}
        withPreview={true}
        buttonText="Choose image"
        onChange={(d) => onDrop(d)}
        imgExtension={['.jpg', '.jpeg', '.png']}
        maxFileSize={5242880}
        singleImage={true}
      />
      {Upload()}
    </div>
  );
};

export default ImageUpload;
