import Head from "next/head";
import styles from "./Layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useState, useEffect, useReducer } from "react";

const name = "mkj";
export const siteTitle = "mkj-blog";

function Layout({ children, home }) {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (e) => {
    setDarkTheme(e.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
        window.localStorage.setItem("check", "false");
      }
    }
  }, [darkTheme]);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form action="#">
        <label className="switch">
          <input type="checkbox" onChange={handleToggle} checked={darkTheme} />
          <span className="slider"></span>
        </label>
      </form>
      <header className={styles.header}>
        <div className={styles.imgCase}>
          <img src="/images/dice.jpg" className={styles.img1} />
          <img src="/images/logo.jpg" className={styles.img2} />
        </div>
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
