import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Login.module.scss";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Hello KAZMATICS, Welcome to Lendsqr 👋</h1>
        <p>THis is p tag 1</p>
        <button>Click Me</button>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
