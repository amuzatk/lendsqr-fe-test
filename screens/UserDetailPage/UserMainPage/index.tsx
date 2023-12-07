import React, { useState } from "react";
import { Tabs,Rate } from "antd";
import Image from "next/image";
import GeneralDetails from "./GeneralDetails";
import Document from "./Document";
import BankDetail from "./BankDetails";
import Loans from "./Loans";
import Savings from "./Savings";
import AppNSystem from "./App&System";
import styles from "../../../styles/dashboard/UserDetailMainPage.module.scss";
import image from "../../../public/assets/images/LoginUser.webp";
// import { User } from "../../../interfaces";
// import { currencyFormatter } from 'helpers';
import { currencyFormatter } from "../../../helpers";



const UserDetailMainPage = (userDetails) => {
  console.log(userDetails, "userDetails @ ==== props");
  const userPicture = userDetails?.profile?.avatar;
  console.log(userPicture,'userPIX')
  const [activeKey, setActiveKey] = useState("1");


  const items = [
    {
      label: "General Details ",
      key: "1",
      children: (
        <div>
          <GeneralDetails userDetails={userDetails} />
        </div>
      ),
    },

    {
      label: "Document",
      key: "3",
      children: (
        <div>
          <Document />
        </div>
      ),
    },
    {
      label: "Bank Details",
      key: "4",
      children: (
        <div>
          <BankDetail />
        </div>
      ),
    },
    {
      label: "Loans",
      key: "5",
      children: (
        <div>
          <Loans />
        </div>
      ),
    },
    {
      label: "Savings",
      key: "6",
      children: (
        <div>
          <Savings />
        </div>
      ),
    },
    {
      label: "App and System",
      key: "7",
      children: (
        <div>
          <AppNSystem />
        </div>
      ),
    },
  ];

  // Save selected tab
  const handleClikedTab = (key: string) => {
    setActiveKey(key);
  };
  return (
    <>
      <div className={styles.top}>
        <div className={styles.first}>
          <Image
            style={{ borderRadius: "50%" }}
            src={image}
            width={100}
            height={100}
            alt="avatar"
          />
          <div className={styles.inner}>
          <span className={styles.name}>Grace Effiom</span>
            <span className={styles.others}>LSQFf587g90</span>
          </div>
        </div>
        <div className={styles.second}>
        <span className={styles.user}>User's Tier</span>
            <span className={styles.rating}><Rate count={3} defaultValue={1} /></span>
        </div>
        <div className={styles.third}>

        <span className={styles.amount}>
          {currencyFormatter('en-NG', 'NGN', 200000)}
          </span>
            <span className={styles.bank}>9912345678/Providus Bank</span>
        </div>
      </div>
      {/* <TabStyle> */}
      <div className={styles.tab}>
        <Tabs
          defaultActiveKey="1"
          onTabClick={handleClikedTab}
          items={items ?? []}
          activeKey={activeKey}
        />
      </div>
    </>
  );
};

export default UserDetailMainPage;


// import React, { useState } from 'react';
// import styles from "../../../styles/dashboard/UserDetailMainPage.module.scss";
// import Document from "./Document";
// import BankDetail from "./BankDetails";
// import GeneralDetails from './GeneralDetails';

// const UserDetailMainPage = () => {
//   const [activeTab, setActiveTab] = useState('tab1');

//   const handleTabClick = (tabKey) => {
//     setActiveTab(tabKey);
//   };

//   return (
//     <div className={styles['custom-tabs-container']}>
//       <div className={styles['tabs-box']}>
//         <div className={styles.tabs}>
//           <div
//             className={`${styles.tab} ${activeTab === 'tab1' ? styles.active : ''}`}
//             onClick={() => handleTabClick('tab1')}
//           >
//             Tab 1
//           </div>
//           <div
//             className={`${styles.tab} ${activeTab === 'tab2' ? styles.active : ''}`}
//             onClick={() => handleTabClick('tab2')}
//           >
//             Tab 2
//           </div>
//           <div
//             className={`${styles.tab} ${activeTab === 'tab3' ? styles.active : ''}`}
//             onClick={() => handleTabClick('tab3')}
//           >
//             Tab 3
//           </div>
//           <div
//             className={`${styles.tab} ${activeTab === 'tab4' ? styles.active : ''}`}
//             onClick={() => handleTabClick('tab4')}
//           >
//             Tab 4
//           </div>
//           <div
//             className={`${styles.tab} ${activeTab === 'tab5' ? styles.active : ''}`}
//             onClick={() => handleTabClick('tab5')}
//           >
//             Tab 5
//           </div>
//         </div>
//       </div>

//       <div className={styles['content-box']}>
//         <div className={styles['tab-content']}>
//           {activeTab === 'tab1' && <BankDetail />}
//           {activeTab === 'tab2' && <Document />}
//           {activeTab === 'tab3' && <GeneralDetails />}
//           {activeTab === 'tab4' && <Document />}
//           {activeTab === 'tab5' && <GeneralDetails />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDetailMainPage;
