import React from 'react';
import Layout from '../../../components/Layout';
import VideoUploadForm from '../../../screens/TestVideo/Video';

const guarantors = () => {
  return (
    <Layout isDetailPage={false}>
        <div style={{marginTop:"20px"}}>
      <h1>Guarantors Page TESTING FORM</h1>
      <VideoUploadForm />
      </div>
    </Layout>
  )
}

export default guarantors
