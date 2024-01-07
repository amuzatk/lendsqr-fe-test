import { useState } from 'react';

const VideoUploadForm = () => {
  const [videoPreview, setVideoPreview] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoFile: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'videoFile' && files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVideoPreview(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }

    setFormData({
      ...formData,
      [name]: name === 'videoFile' ? files[0] : value,
    });
  };

const handleSubmit = (e) => {
    e.preventDefault();
  
    // Convert video file to base64
    if (formData.videoFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = (reader.result as string).split(',')[1];
        console.log('Base64 Video Data:', base64Data);
      };
      reader.readAsDataURL(formData.videoFile);
    }
  
    // Log form data
    console.log('Form Data:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="videoFile">Upload Video:</label>
        <input
          type="file"
          id="videoFile"
          name="videoFile"
          accept="video/*"
          onChange={handleInputChange}
        />
      </div>
      {videoPreview && (
        <div>
          <label>Video Preview:</label>
          <video width="320" height="240" controls>
            <source src={videoPreview} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default VideoUploadForm;
