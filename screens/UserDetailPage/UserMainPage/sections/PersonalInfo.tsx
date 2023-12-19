import React from "react";
import styles from '../../../../styles/dashboard/PersonalInfo.module.scss'
import { User } from "../../../../interfaces";

  const PersonalInfo: React.FC<{ userDetails: User }> = ({ userDetails }) => {
  // console.log(userDetails,'PersonalInfo <<<====>> PersonalInfo')
  const firstName = userDetails?.profile?.firstName;
  const lastName = userDetails?.profile?.lastName;
  const phoneNumber = userDetails?.profile?.phoneNumber;
  const gender = userDetails?.profile?.gender;
  const bvn = userDetails?.profile?.bvn;
  const email = userDetails?.email;
  


  return (
    <div className={styles.container}>
      <h1>Personal Information</h1>
      <div className={styles.main}>
        <div className={styles.first}>
          <div className={styles.cont}>
          <span className={styles.full}>Full Name</span>
            <span className={styles.name}>{firstName}  {lastName} </span>
            {/* <h6>FULL NAME</h6>
            <p>Grace Effiom</p> */}
          </div>
          <div className={styles.cont}>
          <span className={styles.full}>Marital Status</span>
          {/* marital status is missing in the api, to be generated */}
            <span className={styles.name}>Single</span>  
            {/* <h6>MARITAL STATUS</h6>
            <p>Single</p> */}
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.cont}>
          <span className={styles.full}>Phone Number</span>
            <span className={styles.name}>{phoneNumber}</span>
            {/* <h6>PHONE NUMBER</h6>
            <p>80967885433</p> */}
          </div>
          <div className={styles.cont}>
          <span className={styles.full}>Children</span>
          {/* no of children missing, to be generated */}
            <span className={styles.name}>None</span>
            {/* <h6>CHILDREN</h6>
            <p>None</p> */}
          </div>
        </div>
        <div className={styles.third}>
          <div className={styles.cont}>
          <span className={styles.full}>Email Address</span>
            {/* <span className={styles.name}>lendsqr@gmail.com</span> */}
            <span className={styles.name}>{email}</span>
            {/* <h6>EMAIL ADDRESS</h6>
            <p>lendsqr@gmail.com</p> */}
          </div>
          <div className={styles.cont}>
          <span className={styles.full}>Type of Residence</span>
          {/* type of residence missing */}
            <span className={styles.name}>Parent's Apartment</span>
            {/* <h6>TYPE OF RESIDENCE</h6>
            <p>Parent nbsp; s Apartment</p> */}
          </div>
        </div>
        <div className={styles.forth}>
          <div className={styles.cont}>
          <span className={styles.full}>BVN</span>
            <span className={styles.name}>{bvn}</span>
            {/* <h6>BVN</h6>
            <p>09087654432</p> */}
          </div>
        </div>
        <div className={styles.fifth}>
          <div className={styles.cont}>
          <span className={styles.full}>Gender</span>
            <span className={styles.name}>{gender}</span>
            {/* <h6>GENDER</h6>
            <p>Female</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
