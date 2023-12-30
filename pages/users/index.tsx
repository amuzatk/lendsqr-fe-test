import React from 'react';
import Layout from '../../components/Layout';
import UserInfo from '../../screens/UserInfo/UserInfo';
import UserInfo2 from '../../screens/UserInfo/UserInfo2';
import UserInfo3 from '../../screens/UserInfo/UserInfo3';
import Paginate from '../../screens/UserInfo/Pagination';



const UsersDashboard = () => {
  return (
    <Layout isDetailPage={false}>
      <div>
      <UserInfo3 />
      {/* <UserInfo2 /> */}
      {/* <UserInfo /> */}
      {/* <Paginate /> */}
      </div>
    </Layout>
  )
}

export default UsersDashboard
