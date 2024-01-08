// components/VideoUpload.js
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactPlayer from 'react-player';

const VideoUpload2 = () => {
  const [videoUrl, setVideoUrl] = useState('');

const onDrop = (acceptedFiles: any[]) => {
    const uploadedVideoFile = acceptedFiles[0];
    const uploadedVideoUrl = URL.createObjectURL(uploadedVideoFile);
    setVideoUrl(uploadedVideoUrl);
  };
  

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop a video file here, or click to select one</p>
      </div>
      {videoUrl && (
        <div>
          <p>Preview:</p>
          {/* <ReactPlayer url={videoUrl} controls /> */}
          {/* <ReactPlayer url={videoUrl} controls width="100%" height="auto" /> */}

          <ReactPlayer
  url={videoUrl}
  controls
  width="100%"
  height="auto"
  config={{
    file: {
      attributes: {
        controlsList: 'nodownload',
      },
    },
  }}
/>

        </div>
      )}
    </div>
  );
};

export default VideoUpload2;