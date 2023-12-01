// pages/dashboard/[userId].tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import axios from '../../lib/axiosConfig';

const UserDetailsPage: React.FC = () => {
  const router = useRouter();
  const { userId } = router.query;
  console.log(userId,'userId @@@ Detail page')
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if userId is available before making the request
    if (userId) {
      // Define a function to fetch user details
      const fetchUserDetails = async () => {
        try {
          // Dispatch an action to indicate the start of fetching
          setLoading(true);

          // Make a request to fetch user details using the userId
          const response = await axios.get(`/users/${userId}`);

          // Update the state with the fetched user details
          setUserDetails(response.data);
          console.log(response.data,'DATA @@@ Detail page')

          // Dispatch an action to indicate the success of fetching
        } catch (error) {
          // Handle errors, update the state with the error message
          setError('Error fetching user details');
        } finally {
          // Dispatch an action to indicate the end of fetching
          setLoading(false);
        }
      };

      // Call the fetchUserDetails function
      fetchUserDetails();
    }
  }, [userId]); // Run this effect when userId changes

  return (
    <Layout isDetailPage={true}>
      <h2>User Details Page</h2>
      {loading && <p>Loading user details...</p>}
      {error && <p>Error: {error}</p>}
      {userDetails && (
        <>
          <p>User ID: {userId}</p>
          {/* Render other user details using userDetails */}
          {/* Example: userDetails.name, userDetails.email, etc. */}
        </>
      )}
    </Layout>
  );
};

export default UserDetailsPage;