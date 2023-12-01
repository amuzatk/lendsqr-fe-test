// import React from 'react';
// import styles from '../../../styles/Navbar.module.scss';

// const NavBar = () => {
//   return (
//     <div className={styles.main}>
//       This is for Navbar
//     </div>
//   )
// }

// export default NavBar

import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
} from "react-icons/ai";
import styles from "../../../../styles/dashboard/Navbar.module.scss";
import Logo from "../../../../public/assets/logo/logo.webp";
import Bell from "../../../../public/assets/icons/bell.webp";
import Dropdown from "../../../../public/assets/icons/Dropdown.webp";
import User from "../../../../public/assets/images/LoginUser.webp";
import Image from "next/image";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <a href="/">
      <Image src={Logo} alt="/" className={styles.log} />
      </a>
      <div className={styles.search}>
        <div className={styles.input}>
          <input type="text" placeholder="Search for anything" />
        </div>

        <div className={styles.icon}>
          <AiOutlineSearch />
        </div>
      </div>
      <nav>
        {/* <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu] }> */}
        <ul
          className={nav ? [styles.menu, styles.active].join(" ") : styles.menu}
        >
          <li className={styles.docs}>
            <a href="/">Docs</a>
          </li>
           <li>
            <Image src={Bell} alt="Bell Icon" width={26} height={26} />
          </li>
           <li className={styles.user}>
            <div className={styles.info}>
          <Image src={User} alt="Bell Icon" width={48} height={48} />

          <span className={styles.name}>
            Adedeji
          </span>
          <span className={styles.drop}>
          <Image src={Dropdown} alt="Bell Icon" width={20} height={20} />
          </span>
          </div>
          </li>
       
        </ul>
      </nav>
      <div className={styles.mobile_btn} onClick={() => setNav(!nav)}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};

export default NavBar;
