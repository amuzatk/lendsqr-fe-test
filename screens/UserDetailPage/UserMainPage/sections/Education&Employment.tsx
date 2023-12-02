import React from "react";
import styles from '../../../../styles/dashboard/PersonalInfo.module.scss'

const EducationNEmployment = () => {
  return (
    <div className={styles.container}>
      <h1>Education and Employment</h1>
      <div className={styles.main}>
        <div className={styles.first}>
          <div>
            <h6>level of education</h6>
            <p>B.Sc</p>
          </div>
          <div>
            <h6>office email</h6>
            <p>kazeem@lendsqr.com</p>
          </div>
        </div>
        <div className={styles.second}>
          <div>
            <h6>employment status</h6>
            <p>Employed</p>
          </div>
          <div>
            <h6>Monthly income</h6>
            <p>₦400,000.00- ₦800,000.00</p>
          </div>
        </div>
        <div className={styles.third}>
          <div>
            <h6>sector of employment</h6>
            <p>FinTech</p>
          </div>
          <div>
            <h6>loan repayment</h6>
            <p>40,000</p>
          </div>
        </div>
        <div className={styles.forth}>
          <div>
            <h6>Duration of employment</h6>
            <p>2 years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationNEmployment;
