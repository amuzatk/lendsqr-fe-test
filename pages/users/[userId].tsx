// // pages/dashboard/[userId].tsx
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import Layout from '../../components/Layout';
// import axios from '../../lib/axiosConfig';
// import UserDetailMainPage from '../../screens/UserDetailPage/UserMainPage';
// import { User } from '../../interfaces';

// const UserDetailsPage: React.FC = () => {
//   const router = useRouter();
//   const { userId } = router.query;
//   // console.log(userId,'userId @@@ Detail page')
//   const [userDetails, setUserDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Check if userId is available before making the request
//     if (userId) {
//       // Define a function to fetch user details
//       const fetchUserDetails = async () => {
//         try {
//           // Dispatch an action to indicate the start of fetching
//           setLoading(true);

//           // Make a request to fetch user details using the userId
//           const response = await axios.get(`/users/${userId}`);

//           // Update the state with the fetched user details
//           setUserDetails(response.data);
//           // console.log(response.data,'DATA @@@ Detail page')

//           // Dispatch an action to indicate the success of fetching
//         } catch (error) {
//           // Handle errors, update the state with the error message
//           setError('Error fetching user details');
//         } finally {
//           // Dispatch an action to indicate the end of fetching
//           setLoading(false);
//         }
//       };

//       // Call the fetchUserDetails function
//       fetchUserDetails();
//     }
//   }, [userId]); // Run this effect when userId changes
// console.log(userDetails, 'USER DETAIL')
//   return (
//     <Layout isDetailPage={true}>
//       {/* <h2>User Details Page</h2> */}
//       {loading && <p>Loading user details...</p>}
//       {error && <p>Error: {error}</p>}
//       {userDetails && (
//         <>
//           {/* <p>User ID: {userId}</p> */}
//       <UserDetailMainPage userDetails={userDetails} />

//         </>
//       )}
//     </Layout>
//   );
// };

// export default UserDetailsPage;

// Import necessary modules
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import UserDetailMainPage from '../../screens/UserDetailPage/UserMainPage';
// import { generateMockData } from '<your-mock-data-path>'; // Update this with the correct path
import { generateMockData } from '../../features/user/userActions';
import Layout from '../../components/Layout';


// Your [userId].tsx component
const UserDetails = () => {
  // Initialize router
  const router = useRouter();
  
  // Extract userId from the router
  const { userId } = router.query;

  // State to hold user data
  const [userData, setUserData] = useState(null);

  // Fetch user data based on userId
  useEffect(() => {
    const mockData = generateMockData();

    // Check if userId is available and is a number
    if (userId && !isNaN(Number(userId))) {
      // Find the user with the matching ID from the mock data
      const user = mockData.find((user) => user.id === userId);
      console.log(user, 'user details @ [userId].tsx')

      if (user) {
        setUserData(user);
      } else {
        console.error('User not found');
      }
    }
  }, [userId]);

  // Render component based on user data
  return (
    <Layout isDetailPage={true}>
      {userData ? (
        // <div>
        //   <h1>User Details</h1>
        //   <p>User ID: {userId}</p>
        //   {/* Render other user details based on your data structure */}
        //   <p>OrgName: {userData.orgName} </p>
        //   {/* <p>Email: {userData.email}</p> */}
        //   {/* <p>Name: {userData.profile.firstName} {userData.profile.lastName}</p>
        //   <p>Email: {userData.email}</p> */}
        //   {/* Add more details as needed */}
        // </div>
      <UserDetailMainPage userDetails={userData} />
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
};

export default UserDetails;
