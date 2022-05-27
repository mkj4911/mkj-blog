import utilStyles from "../styles/utils.module.css";
import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <Layout>
      <article>
        <h1 className={utilStyles.headingX1}>ページが見つかりませんでした。</h1>
      </article>
    </Layout>
  );
}
