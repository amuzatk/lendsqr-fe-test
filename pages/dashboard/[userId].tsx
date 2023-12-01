// pages/[userId].tsx
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const UserDetailsPage: React.FC = () => {
  const router = useRouter();
  const { userId } = router.query;

  // Fetch user details using the userId from the API or any data source
  // You can use this data to render the user details on the page

  return (

    <Layout isDetailPage={true}>

      <h1>User Details Page</h1>
      <p>User ID: {userId}</p>
      {/* Render other user details here */}
      </Layout>
  );
};

export default UserDetailsPage;