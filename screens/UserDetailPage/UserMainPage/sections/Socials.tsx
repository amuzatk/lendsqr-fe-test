import React from "react";
import styles from '../../../../styles/dashboard/PersonalInfo.module.scss'

const Socials = () => {
  return (
    <div className={styles.container}>
      <h1>Socials</h1>
      <div className={styles.main}>
        <div className={styles.first}>
          <div>
            <h6>Twitter</h6>
            <p>@grace_effiom</p>
          </div>
        </div>
        <div className={styles.second}>
          <div>
            <h6>Facebook</h6>
            <p>Grace Effiom</p>
          </div>
        </div>
        <div className={styles.third}>
          <div>
            <h6>Instagram</h6>
            <p>@grace_effiom</p>
          </div>
        </div>
        <div style={{visibility:"hidden"}} className={styles.forth}>
          <div>
            <h6>BVN</h6>
            <p>09087654432</p>
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

export default Socials;
