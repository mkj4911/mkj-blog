import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/Layout";
import { getPostsData } from "../lib/post";

// SSGの場合 (外部から一度だけデータを持ってくる)
export async function getStaticProps() {
  // getStaticProps!!
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

// SSRの場合 (データの更新が頻繁に行われる場合)
// export async function getServerSideProps(context) {
//   // getServerSideProps!!
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     },
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>Next.jsを勉強しています。好きな言語はJavascriptです。</p>
      </section>

      <section>
        <h2>📝mkj diary</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <a>
                  <img
                    src={`${thumbnail}`}
                    alt="thumbnail image"
                    className={styles.thumbnailImage}
                  />
                </a>
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
