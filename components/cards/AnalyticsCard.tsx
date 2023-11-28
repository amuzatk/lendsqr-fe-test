// import React from "react";
// import styles from "../../styles/Analytics.module.scss";
// import Image from "next/image";
// import Bell from "../../assets/icons/bell.webp";

// const AnalyticsCard = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.main}>
//         <Image src={Bell} alt="Bell Icon" width={40} height={40} />
//         <p>Users</p>
//         <span className={styles.amount}>2,453</span>
//       </div>
//     </div>
//   );
// };

// export default AnalyticsCard;

// Updated AnalyticsCard component
import React from "react";
import styles from "../../styles/Analytics.module.scss";
import Image from "next/image";

interface AnalyticsCardProps {
  data: {
    image: string;
    title: string;
    amount: string;
  };
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ data }) => {
  const { image, title, amount } = data;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Image src={image} alt={`${title} Icon`} width={40} height={40} />
        <p>{title}</p>
        <span className={styles.amount}>{amount}</span>
      </div>
    </div>
  );
};

export default AnalyticsCard;
