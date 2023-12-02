import React from "react";
import styles from '../../../../styles/dashboard/PersonalInfo.module.scss'

const Guarantor = () => {
  return (
    <div className={styles.container}>
      <h1>Guarantor</h1>
      <div className={styles.main}>
        <div className={styles.first}>
          <div>
            <h6>full Name</h6>
            <p>Debby Ogana</p>
          </div>
        </div>
        <div className={styles.second}>
          <div>
            <h6>Phone Number</h6>
            <p>07060780922</p>
          </div>
        </div>
        <div className={styles.third}>
          <div>
            <h6>Email Address</h6>
            <p>debby@gmail.com</p>
          </div>
        </div>
        <div className={styles.forth}>
          <div>
            <h6>Relationship</h6>
            <p>Sister</p>
          </div>
        </div>
        <div style={{visibility:"hidden"}} className={styles.fifth}>
          <div>
            <h6>GENDER</h6>
            <p>Female</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guarantor;
