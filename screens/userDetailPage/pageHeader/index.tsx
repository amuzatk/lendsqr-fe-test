// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../../../styles/dashboard/PageHeader.module.scss";
// import BackIcon from "../../../public/assets/icons/BackIcon.png";
// import Image from "next/image";
// import { toastHandler } from "../../../helpers/toastHandler";
// import { User } from "../../../interfaces";

// const PageHeader = () => {
//   const router = useRouter();

//   // Extract userId from the router
//   const { userId } = router.query;
//   console.log(userId, 'userId');

//   // State to hold user data
//   const [userData, setUserData] = useState<User | null>(null); // Use the User type

//   useEffect(() => {
//     // Check if userId is available
//     if (userId !== undefined) {
//       // Get users from localStorage
//       const storedUsers = localStorage.getItem('users');

//       if (storedUsers) {
//         const parsedUsers = JSON.parse(storedUsers);
//         // Find the user with the matching ID from the stored data
//         const user = parsedUsers.find(
//           (user: { id: { toString: () => string | string[] } }) =>
//             user.id.toString() === userId
//         );

//         if (user) {
//           console.log(user, 'users pageHEADER localStorage <<===');
//           setUserData(user);
//         } else {
//           console.error('User not found');
//         }
//       } else {
//         console.error('Users not found in localStorage');
//       }
//     }
//   }, [userId]);

//   const handleBlacklistClick = () => {
//     if (userData) {
//       if (userData.status.array[0] === 'Blacklisted') {
//         toastHandler.error('This user is already blacklisted.');
//       } else {
//         // Your logic for handling Blacklist button click
//         // ...

//         // Show toast message
//         toastHandler.success('User blacklisted successfully');
//       }
//     }
//   };

//   const handleActivateClick = () => {
//     if (userData) {
//       if (userData.status.array[0] === 'Active') {
//         toastHandler.error('This user is already active.');
//       } else {
//         // Your logic for handling Activate button click
//         // ...

//         // Show toast message
//         toastHandler.success('User activated successfully');
//       }
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.top}>
//         <div className={styles.left}>
//           <div className={styles.back} onClick={router.back}>
//             <Image src={BackIcon} width={26.72} height={19.38} alt="BackIcon" />
//             <p>Back to Users </p>
//           </div>
//           <h1> User Details</h1>
//         </div>
//         <div className={styles.right}>
//           <button className={styles.blacklist} onClick={handleBlacklistClick}>
//             Blacklist User
//           </button>
//           <button className={styles.activate} onClick={handleActivateClick}>
//             Activate User
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageHeader;





import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../../styles/dashboard/PageHeader.module.scss";
import BackIcon from "../../../public/assets/icons/BackIcon.png";
import Image from "next/image";
import { toastHandler } from "../../../helpers/toastHandler";
import { User } from "../../../interfaces";
// import { User } from "@/types";
// import { User } from "../../../interfaces";

const PageHeader = () => {
  const router = useRouter();

  // Extract userId from the router
  const { userId } = router.query;
  console.log(userId, 'userId');

  // State to hold user data
  const [userData, setUserData] = useState<User | null>(null); // Use the User type

  useEffect(() => {
    // Check if userId is available
    if (userId !== undefined) {
      // Get users from localStorage
      const storedUsers = localStorage.getItem('users');

      if (storedUsers) {
        const parsedUsers = JSON.parse(storedUsers);
        // Find the user with the matching ID from the stored data
        const user = parsedUsers.find(
          (user: { id: { toString: () => string | string[] } }) =>
            user.id.toString() === userId
        );

        if (user) {
          console.log(user, 'users pageHEADER localStorage <<===');
          setUserData(user);
        } else {
          console.error('User not found');
        }
      } else {
        console.error('Users not found in localStorage');
      }
    }
  }, [userId]);

  const handleBlacklistClick = () => {
    if (userData) {
      if (userData.status.array[0] === 'Blacklisted') {
        toastHandler.error('This user is already blacklisted.');
      } else {
        // Your logic for handling Blacklist button click
        // ...

        // Show toast message
        toastHandler.success('User blacklisted successfully');

        // Close the Popover after success
        setTimeout(() => {
          router.back();
        }, 3000); // Delay of 3000 milliseconds (3 seconds)
      }
    }
  };

  const handleActivateClick = () => {
    if (userData) {
      if (userData.status.array[0] === 'Active') {
        toastHandler.error('This user is already active.');
      } else {
        // Your logic for handling Activate button click
        // ...

        // Show toast message
        toastHandler.success('User activated successfully');

        // Close the Popover after success
        setTimeout(() => {
          router.back();
        }, 3000); // Delay of 3000 milliseconds (3 seconds)
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.back} onClick={router.back}>
            <Image src={BackIcon} width={26.72} height={19.38} alt="BackIcon" />
            <p>Back to Users </p>
          </div>
          <h1> User Details</h1>
        </div>
        <div className={styles.right}>
          <button className={styles.blacklist} onClick={handleBlacklistClick}>
            Blacklist User
          </button>
          <button className={styles.activate} onClick={handleActivateClick}>
            Activate User
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;