import React, { ReactNode, useEffect, useState } from "react";
import styles from "../../../styles/layouts/Layout.module.scss";
import { Drawer } from "antd";
import { User } from "../../../interfaces";
import PageHeader from "../../../screens/userDetailPage/pageHeader";
import { AnalyticsData, useAnalyticsData } from "../../../utils/sample-data";
import AnalyticsCard from "../../card/AnalyticsCard";
import NavBar from "../../shared/navbar";
import SideBar from "../../shared/sidebar";

type Props = {
  children?: ReactNode;
  title?: string;
  isDetailPage: boolean;
  selectedOrganization: string,
  onOrganizationChange: (newOrganization: string) => void;
  onSearchResultsChange: (searcResult: User[]) => void;
  searchResults: User[]; // Define the searchResults prop
  pageTitle?: string; // Add pageTitle prop
  dummyVariable: number; 
  onDummyVariableChange: (newDummyVariable: number) => void; // Define the callback function prop
};

const Layout = ({
  children,
  title = "This is the default title",
  isDetailPage = false,
  selectedOrganization,
  onOrganizationChange,
  onSearchResultsChange,
  searchResults, // Use the searchResults prop in the component
  pageTitle = "Analytics", // Default to "Dashboard" if not provided
  dummyVariable,
  onDummyVariableChange, // Receive the callback function prop
  
}: Props) => {
  const [mainDash, setMainDash] = useState(!isDetailPage);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [data, setData] = useState<AnalyticsData[]>([]);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const fetchData = async () => {
      const analyticsData = await useAnalyticsData();
      setData(analyticsData);
    };

    fetchData();
  }, [dummyVariable, onDummyVariableChange]);
  // Close mobile menu
  const handleCloseMenu = () => setMobileMenu(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  useEffect(() => {
    setMainDash(!isDetailPage);
  }, [isDetailPage]);

  return (
    <div>
      <NavBar 
      handleOpenMenu={() => setMobileMenu(true)}
      // onSearchResultsChange={onSearchResultsChange}
      onSearchResultsChange={onSearchResultsChange} // Forward the prop to NavBar
      />
      <div className={styles.main}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            {/* ASIDE MOBILE */}
            {screenWidth <= 820 && (
              <Drawer
                onClose={handleCloseMenu}
                placement="left"
                open={mobileMenu}
                closable={true}
                width={260}
              >
            {/* <SideBar /> */}
            <SideBar
                  selectedOrganization={selectedOrganization}
                  onOrganizationChange={onOrganizationChange}
                />
              </Drawer>
            )}
            {/* ASIDE WEB */}
            <div className={styles.webDash}>
            {/* <SideBar /> */}
            <SideBar
                  selectedOrganization={selectedOrganization}
                  onOrganizationChange={onOrganizationChange}
                />
            </div>
          </div>
          <div 
          style={{
            marginTop:"60px"
          }} 
          className={styles.content}>
            {mainDash ? (
              <>
                {/* <h1>Users</h1> */}
                <h1>{pageTitle}</h1>
                <div className={styles.header}>
                  {data.map((data, index) => (
                    <AnalyticsCard key={index} data={data} />
                  ))}
                </div>
              </>
            ) : (
                <PageHeader />
            )}
            <div className={styles.body}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;