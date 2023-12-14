import React from 'react';
import Layout from '../../components/Layout';
import UserInfo from '../../screens/UserInfo/UserInfo';
import UserInfo2 from '../../screens/UserInfo/UserInfo2';


const UsersDashboard = () => {
  return (
    <Layout isDetailPage={false}>
      <div>
      {/* <UserInfo /> */}
      <UserInfo2 />
      </div>
    </Layout>
  )
}

export default UsersDashboard
