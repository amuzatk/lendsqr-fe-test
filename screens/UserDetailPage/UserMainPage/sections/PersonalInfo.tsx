import React from "react";
import styles from '../../../../styles/dashboard/PersonalInfo.module.scss'

const PersonalInfo = () => {
  return (
    <div className={styles.container}>
      <h1>Personal Information</h1>
      <div className={styles.main}>
        <div className={styles.first}>
          <div className={styles.cont}>
          <span className={styles.full}>Full Name</span>
            <span className={styles.name}>Grace Effiom</span>
            {/* <h6>FULL NAME</h6>
            <p>Grace Effiom</p> */}
          </div>
          <div className={styles.cont}>
          <span className={styles.full}>Marital Status</span>
            <span className={styles.name}>Single</span>
            {/* <h6>MARITAL STATUS</h6>
            <p>Single</p> */}
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.cont}>
          <span className={styles.full}>Phone Number</span>
            <span className={styles.name}>07060780922</span>
            {/* <h6>PHONE NUMBER</h6>
            <p>80967885433</p> */}
          </div>
          <div className={styles.cont}>
          <span className={styles.full}>Children</span>
            <span className={styles.name}>None</span>
            {/* <h6>CHILDREN</h6>
            <p>None</p> */}
          </div>
        </div>
        <div className={styles.third}>
          <div className={styles.cont}>
          <span className={styles.full}>Email Address</span>
            <span className={styles.name}>lendsqr@gmail.com</span>
            {/* <h6>EMAIL ADDRESS</h6>
            <p>lendsqr@gmail.com</p> */}
          </div>
          <div className={styles.cont}>
          <span className={styles.full}>Type of Residence</span>
            <span className={styles.name}>Parent's Apartment</span>
            {/* <h6>TYPE OF RESIDENCE</h6>
            <p>Parent nbsp; s Apartment</p> */}
          </div>
        </div>
        <div className={styles.forth}>
          <div className={styles.cont}>
          <span className={styles.full}>BVN</span>
            <span className={styles.name}>9087654432</span>
            {/* <h6>BVN</h6>
            <p>09087654432</p> */}
          </div>
        </div>
        <div className={styles.fifth}>
          <div className={styles.cont}>
          <span className={styles.full}>Gender</span>
            <span className={styles.name}>Female</span>
            {/* <h6>GENDER</h6>
            <p>Female</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
