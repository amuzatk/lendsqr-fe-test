import React from 'react';
import Layout from '../../../components/Layout';
import VideoUploadForm from '../../../screens/TestVideo/Video';
import VideoUpload2 from '../../../screens/TestVideo/Video2';

const guarantors = () => {
  return (
    <Layout isDetailPage={false}>
        <div style={{marginTop:"20px"}}>
      <h1>Guarantors Page TESTING FORM</h1>
      {/* <VideoUploadForm /> */}
      <VideoUpload2 />
      </div>
    </Layout>
  )
}

export default guarantors
