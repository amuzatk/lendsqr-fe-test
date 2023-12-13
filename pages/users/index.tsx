import React from 'react';
import Layout from '../../components/Layout';
import UserInfo from '../../screens/UserInfo/UserInfo';

const UsersDashboard = () => {
  return (
    <Layout isDetailPage={false}>
      {/* <div 
      // style={{
      //   width:"100%", 
      //   border:"1px solid red"
      //   }}
        > */}
      <UserInfo />
      {/* </div> */}
    </Layout>
  )
}

export default UsersDashboard
