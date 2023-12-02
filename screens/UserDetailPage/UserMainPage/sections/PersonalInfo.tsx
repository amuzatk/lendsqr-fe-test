import React from "react";
import styles from '../../../../styles/dashboard/PersonalInfo.module.scss'

const PersonalInfo = () => {
  return (
    <div className={styles.container}>
      <h1>Personal Information</h1>
      <div className={styles.main}>
        <div className={styles.first}>
          <div>
            <h6>FULL NAME</h6>
            <p>Grace Effiom</p>
          </div>
          <div>
            <h6>MARITAL STATUS</h6>
            <p>Single</p>
          </div>
        </div>
        <div className={styles.second}>
          <div>
            <h6>PHONE NUMBER</h6>
            <p>80967885433</p>
          </div>
          <div>
            <h6>CHILDREN</h6>
            <p>None</p>
          </div>
        </div>
        <div className={styles.third}>
          <div>
            <h6>EMAIL ADDRESS</h6>
            <p>lendsqr@gmail.com</p>
          </div>
          <div>
            <h6>TYPE OF RESIDENCE</h6>
            <p>Parent nbsp; s Apartment</p>
          </div>
        </div>
        <div className={styles.forth}>
          <div>
            <h6>BVN</h6>
            <p>09087654432</p>
          </div>
        </div>
        <div className={styles.fifth}>
          <div>
            <h6>GENDER</h6>
            <p>Female</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
