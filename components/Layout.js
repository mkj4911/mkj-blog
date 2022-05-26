import Head from "next/head";
import styles from "./Layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "mkj";
export const siteTitle = "mkj-blog";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.imgCase}>
          <img src="/images/dice.jpg" className={styles.img1} />
          <img src="/images/logo.jpg" className={styles.img2} />
        </div>
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
