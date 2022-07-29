import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { posts } from "../lib/notion";

export async function getServerSideProps() {
  let { results } = await posts();

  return {
    props: {
      posts: results,
    },
  };
}

interface Props {
  posts: [any];
  check: any;
}

const Home = (props: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RSUPPORT</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>살자</h1>
        {props.posts.map((result, index) => {
          return (
            <div className={styles.cardHolder} key={index}>
              <div className={styles.cardContent}>
                <Link href={`/${result.id}`}>
                  <a className={styles.cardTitle}>
                    {result.properties.Name?.title[0]?.plain_text}
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </main>

      <footer className={styles.footer}>
        <p>Blog application</p>
      </footer>
    </div>
  );
};

export default Home;
