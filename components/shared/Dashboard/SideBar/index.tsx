import React, { useState } from "react";
import styles from "../../../../styles/dashboard/Sidebar.module.scss";
import SelectTemplate from "../../Form/SelectTemplate";
import Briefcase from "../../../../public/assets/icons/Briefcase.png";
import Image from "next/image";
import Link from "next/link";
import { VENDOR_DASHBOARD_LINKS } from '../../../../navigations/links'
import { useRouter } from 'next/router';

interface LinkItem {
  TITLE: string;
  LINK: string;
  SLUG: string;
  ISDASHBOARD?: boolean;
  ISCUSTOMER?: boolean;
  ISBUSINESS?: boolean;
  ISSETTINGS?: boolean;
  ICON: (isActive: boolean) => JSX.Element;
}

const SideBar = () => {
  const [sideNav] = useState(true);
  const router = useRouter();

  // Group links based on their categories
  const dashboardLinks = VENDOR_DASHBOARD_LINKS.filter((link: LinkItem) => link.ISDASHBOARD);
  const customerLinks = VENDOR_DASHBOARD_LINKS.filter((link: LinkItem) => link.ISCUSTOMER);
  const businessLinks = VENDOR_DASHBOARD_LINKS.filter((link: LinkItem) => link.ISBUSINESS);
  const settingsLinks = VENDOR_DASHBOARD_LINKS.filter((link: LinkItem) => link.ISSETTINGS);

  const renderLinks = (links: LinkItem[]) => {
    return links.map((menu: LinkItem) => {
      const isActive = router.pathname === menu.LINK;

      const handleContent = () => (
        <div
          style={{
            backgroundColor: isActive ? '#F3FCFC' : 'white',
            borderLeft: isActive ? '3px solid #39CDCC' : 'white',
            display: "flex",
            flexDirection: "row",
            columnGap: "10px",
            paddingLeft: "20px",
            minHeight:"40px",
            // justifyContent:"center"
            alignItems:"center"
          }}>
          {menu.ICON(isActive)}
          <div
            style={{
              color: isActive ? '#213F7D' : '#8294B6',
            }}
            className={styles.menuTitle}>
            {menu.TITLE}
          </div>
        </div>
      )

      return (
        <div className={styles.items} key={menu.SLUG}>
          <Link className={styles.item} href={menu.LINK}>
            {handleContent()}
          </Link>
        </div>
      );
    });
  }

  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.brief}>
        <Image src={Briefcase} width={16} height={16} alt="Briefcase" />
        <SelectTemplate onChange={handleDropdownChange} />
      </div>
      <div className={styles.menu}>
      <div style={{
        // border:"1px solid red",
        marginBottom:"45px"
      }}>
          {/* <p>Dashboard</p> */}
          {renderLinks(dashboardLinks)}
        </div>
        <div>
          <p>CUSTOMERS</p>
          {renderLinks(customerLinks)}
        </div>
        <div>
          <p>BUSINESSES</p>
          {renderLinks(businessLinks)}
        </div>
        <div>
          <p>SETTINGS</p>
          {renderLinks(settingsLinks)}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
