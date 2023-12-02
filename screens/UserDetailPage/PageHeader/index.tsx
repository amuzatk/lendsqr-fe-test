import React from "react";
import { useRouter } from "next/router";
import styles from "../../../styles/dashboard/PageHeader.module.scss";
import BackIcon from "../../../public/assets/icons/BackIcon.png";
import Image from "next/image";

const PageHeader = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.back}  onClick={router.back}>
            <Image src={BackIcon} width={26.72} height={19.38} alt="BackIcon" />
            <p>Back to Users </p>
          </div>
          <h1> User Details</h1>
        </div>
        <div className={styles.right}>
          <button className={styles.blacklist}>Blacklist User</button>
          <button className={styles.activate}>Activate User</button>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default PageHeader;
