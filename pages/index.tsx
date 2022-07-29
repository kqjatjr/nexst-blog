import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getPosts } from "../lib/notion";

export async function getServerSideProps() {
  let { results } = await getPosts();

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
  console.log(props);
  return (
    <div className={styles.container}>
      <Head>
        <title>RSUPPORT</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>RSUPPORT</h1>
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

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
