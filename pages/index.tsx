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

        {/* <p>
          <Link href="/about">About</Link>
        </p> */}
      </div>
      {/* <div className={styles.buttom}>

        <h1 className={styles.heading2}>THIS IS A TEST OF SCSS</h1>
        <p>THis is p tag 2</p>
        <button>TEST</button>
      </div> */}
    </div>
  </Layout>
);

export default IndexPage;
