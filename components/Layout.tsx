import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import NavBar from "./shared/Dashboard/NavBar";
import SideBar from "./shared/Dashboard/SideBar";
import styles from "../styles/layouts/Layout.module.scss";
import AnalyticsCard from "./cards/AnalyticsCard";
import PageHeader from "../screens/UserDetailPage/PageHeader";
import { useQuery } from "react-query";
import { User } from "../interfaces";
// import { fetchUserData } from "../features/user/userActions2";


type AnalyticsData = {
  image: string;
  title: string;
  amount: string;
};

type Props = {
  children?: ReactNode;
  title?: string;
  isDetailPage: boolean;
};

// const Layout = ({ children, title = "This is the default title" }: Props) => {
const Layout = ({
  children,
  title = "This is the default title",
  isDetailPage = false,
}: Props) => {
  // const [mainDash] = useState(true);
  const [mainDash, setMainDash] = useState(!isDetailPage);
  // const [detialPage] = useState(false);

  useEffect(() => {
    // Update mainDash state when isDetailPage prop changes
    setMainDash(!isDetailPage);
  }, [isDetailPage]);

  // const { data, isLoading, isError, refetch } = useQuery<User[], Error>('users', fetchUserData, {
  //   enabled: false, // Disable automatic fetching
  // });
  // console.log(data, 'data DUMMY===@ CARD==')

  // const { data, isLoading, isError, refetch } = useQuery<User[], Error>('users', fetchUsers);
  // console.log(data, 'data ACTUAL=====')

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await refetch(); // Manually trigger the data fetching
  //     } catch (error) {
  //       // Handle error
  //     }
  //   };
  
  //   fetchData();
  // }, [refetch]);

  const analyticsData: AnalyticsData[] = [
    {
      image: "/assets/icons/AnalyticIcon1.webp",
      title: "USERS",
      amount: "2,453",
    },
    {
      image: "/assets/icons/AnalyticIcon2.webp",
      title: "ACTIVE USERS",
      amount: "2,453",
    },
    {
      image: "/assets/icons/AnalyticIcon3.webp",
      title: "USERS WITH LOANS",
      amount: "12,453",

    },
    {
      image: "/assets/icons/AnalyticIcon4.webp",
      title: "USERS WITH SAVINGS",
      amount: "102,453",
    },
    // image: '/assets/images/StorefrontSectionThree.webp',
  ];

  return (
    <div>
      {/* <h3>TEST</h3> */}
      <NavBar />
      <div className={styles.main}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            {/* <div className={styles.sidebar}> */}
            {/* <div className={styles.menu}> Sidebar menus</div> */}
            <SideBar />
          </div>
          <div className={styles.content}>
            {mainDash ? (
              <>
                <h1>Users</h1>
                <div className={styles.header}>
                  {analyticsData.map((data, index) => (
                    <AnalyticsCard key={index} data={data} />
                  ))}

{/* {analyticsData.map((data, index) => (
                    <AnalyticsCard key={index} data={data} />
                  ))} */}
                </div>
              </>
            ) : (
                <PageHeader />
            )}
            <div className={styles.body}>{children}</div>
          </div>
          {/* <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;

// // Layout component rendering AnalyticsCard
// import React, { ReactNode } from "react";
// import Head from "next/head";
// import NavBar from "./shared/Dashboard/NavBar";
// import SideBar from "./shared/Dashboard/SideBar";
// import styles from "../styles/Layout.module.scss";
// import AnalyticsCard from "./cards/AnalyticsCard";
// import Bell from "../assets/icons/bell.webp";
// import Image from "next/image";

// type AnalyticsData = {
//   image: string;
//   title: string;
//   amount: string;
// };

// type Props = {
//   children?: ReactNode;
//   title?: string;
// };

// const Layout = ({ children, title = "This is the default title" }: Props) => {
//   // Generate an array of 4 objects with sample data
//   const analyticsData: AnalyticsData[] = [
//     { image: "/assets/icons/bell.webp", title: "Users", amount: "2,453" },
//     { image: "/assets/icons/bell.webp", title: "Revenue", amount: "$5,678" },
//     { image: "/assets/icons/bell.webp", title: "Users2", amount: "2,453" },
//     { image: "/assets/icons/bell.webp", title: "Revenue2", amount: "$5,678" },

//   ];

//   return (
//     <div>
//       <NavBar />
//       <Image src={Bell} alt='' width={40} height={40} />

//       <div className={styles.main}>
//         <div className={styles.layout}>
//           <div>
//             <SideBar />
//           </div>
//           <div className={styles.content}>
//             {/* <h1>Dashboard</h1> */}
//             <div className={styles.header}>
//               {/* Render AnalyticsCard component for each data object */}
//               {analyticsData.map((data, index) => (
//                 <AnalyticsCard key={index} data={data} />
//               ))}
//             </div>
//             <div className={styles.body}>{children}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;
