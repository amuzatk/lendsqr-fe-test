import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import NavBar from "./shared/NavBar";
import SideBar from "./shared/SideBar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <NavBar />
  <div className={styles.main}>
    <div className={styles.layout}>
    <div >
      {/* <div className={styles.sidebar}> */}
        {/* <div className={styles.menu}> Sidebar menus</div> */}
        <SideBar />
      </div>
      <div className={styles.content}>
        <h1>Users</h1>
        {/* <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head> */}
        {/* <header>
          <nav>
            <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
            <Link href="/users">Users List</Link> |{" "}
            <a href="/api/users">Users API</a>
          </nav>
        </header> */}
        <div className={styles.header}>This is for Cards</div>
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

export default Layout;

// import React, { ReactNode } from 'react'
// import Link from 'next/link'
// import styles from '../styles/Layout.module.scss';
// import { UserMenu, AdminMenu } from "../utils/sidebarData";
// import { message, Badge } from "antd";

// type Props = {
//   children?: ReactNode
//   title?: string
// }
// const Layout = ({ children, title = 'This is the default title' }: Props) => {
//   const DoctorMenu = [
//     {
//       name: "Home",
//       path: "/",
//       icon: "fa-solid fa-house",
//     },
//     {
//       name: "Appointment",
//       path: "/doctor-appointments",
//       icon: "fa-solid fa-list",
//     },
//     {
//       name: "Profile",
//       icon: "fa-solid fa-user",
//     },
//   ];

//   return (
//     <div className={styles.main}>
//       <div className={styles.layout}>
//         <div className={styles.sidebar}>
//           <div className={styles.logo}>
//             <h6>MED-APP</h6>
//             <hr />
//           </div>
//           <div className={styles.menu}>
//             {UserMenu.map((menu) => {
//               const isctive = location.pathname === menu.path;
//               return (
//                 <div
//                   className={`styles.item ${isctive && styles.active}`}
//                   key={menu.path}
//                 >
//                   <i className={menu.icon}></i>
//                   <Link href={menu.path}>{menu.name}</Link>
//                 </div>
//               );
//             })}
//             <div className={styles.item} >
//               <i className="fa-solid fa-right-from-bracket"></i>
//               <Link href="/login">Logout</Link>

//             </div>
//           </div>
//         </div>
//         <div className={styles.content}>
//           <div className={styles.header}>
//             <div className={styles.headercontent} style={{ cursor: "pointer" }}>
//               <Badge>
//                 <i className="fa-sharp fa-solid fa-bell"></i>
//               </Badge>
//             </div>
//           </div>
//           <div className={styles.body}>
//             {children}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;
