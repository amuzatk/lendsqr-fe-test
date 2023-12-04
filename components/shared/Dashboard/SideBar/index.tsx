// import React, {useState } from "react";
// import styles from "../../../../styles/dashboard/Sidebar.module.scss";
// import SelectTemplate from "../../Form/SelectTemplate";
// import Briefcase from "../../../../public/assets/icons/Briefcase.png";
// import Image from "next/image";
// import Link from "next/link";
// import { UserMenu } from "../../../../utils/sidebarData";
// // import { Link, useLocation, useNavigate } from "react-router-dom";

// // import Image from 'n'
// const SideBar = () => {
//   // const [sideNav] = useState(true)
//   // const location = useLocation();
//   // const navigate = useNavigate();

//   // const SidebarMenu = sideNav.isAdmin
//   // ? AdminMenu
//   // : user?.isDoctor
//   // ? DoctorMenu
//   // : UserMenu;
//   return (
//     <div className={styles.main}>
//       <div className={styles.brief}>
//         <Image src={Briefcase} width={16} height={16} alt="Briefcase" />
//         <SelectTemplate />
//       </div>
//       <div className="menu">
//             {  UserMenu.map((menu) => {
//               const isctive = location.pathname === menu.path;
//               return (
//                 <div
//                   className={`menu-item ${isctive && "active"}`}
//                   key={menu.path}
//                 >
//                   <i className={menu.icon}></i>
//                   <Link href={menu.path}>{menu.name}</Link>
//                 </div>
//               );
//             })}
//             {/* <div className="menu-item" onClick={logoutHandler}>
//               <i className="fa-solid fa-right-from-bracket"></i>
//               <Link to="/login">Logout</Link>
//             </div> */}
//           </div>
//     </div>
//   );
// };

// export default SideBar;

import React, { useState } from "react";
import styles from "../../../../styles/dashboard/Sidebar.module.scss";
import SelectTemplate from "../../Form/SelectTemplate";
import Briefcase from "../../../../public/assets/icons/Briefcase.png";
import Image from "next/image";
import Link from "next/link";
import { UserMenu } from "../../../../utils/sidebarData";
import { VENDOR_DASHBOARD_LINKS, NAV_TOP_2_LINKS} from '../../../../navigations/links'
import { useRouter } from 'next/router';

const SideBar = () => {
  const [sideNav] = useState(true);
  const router = useRouter();

  return (
    <div className={styles.main}>
      {/* <div className={styles.brief}>
        <Image src={Briefcase} width={16} height={16} alt="Briefcase" />
        <SelectTemplate />
      </div> */}
      <div className={styles.menu}>
      {VENDOR_DASHBOARD_LINKS.map((menu) => {
          const isActive = router.pathname === menu.LINK;
          // const isActive = route === nav.LINK;
          return (
            <div
          // className={nav ? [styles.menu, styles.active].join(" ") : styles.menu}
              // className={`menu-item ${isActive && "active"}`}
              className={isActive ?  styles.active : styles.menu}
              key={menu.LINK}
            >
              {/* <i className={menu.icon}></i> */}
              <Link href={menu.LINK}>{menu.TITLE}</Link>
            </div>
          );
        })}
        {/* {VENDOR_DASHBOARD_LINKS.map((menu) => {
          const isActive = router.pathname === menu.path;
          return (
            <div
              className={`menu-item ${isActive && "active"}`}
              key={menu.path}
            >
              <i className={menu.icon}></i>
              <Link href={menu.path}>{menu.name}</Link>
            </div>
          );
        })} */}
        {/* Example of a logout link */}
        {/* <div className="menu-item" onClick={logoutHandler}>
          <i className="fa-solid fa-right-from-bracket"></i>
          <Link href="/login">Logout</Link>
        </div> */}
      </div>
    </div>
  );
};

export default SideBar;
