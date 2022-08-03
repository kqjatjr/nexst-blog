import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getPosts } from "../lib/notion";
import Image from "next/image";

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
}

const Home = ({ posts }: Props) => {
  const sortResult = posts.sort(
    (a, b) =>
      a.properties.createDate.created_time -
      b.properties.createDate.created_time,
  );

  console.log(posts, "!!!");
  console.log(sortResult);

  return (
    <div className={styles.container}>
      <Head>
        <title>RSUPPORT</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>RSUPPORT</h1>
        {posts.map((result, index) => {
          return (
            <div className={styles.cardHolder} key={index}>
              <div className={styles.cardContent}>
                {result.properties.thumbnail.files[0] && (
                  <Image
                    src={result.properties.thumbnail.files[0].file.url}
                    alt="thumbnail"
                    width={200}
                    height={200}
                  />
                )}
                <Link href={`/${result.id}`}>
                  <a className={styles.cardTitle}>
                    {result.properties.name?.title[0]?.plain_text}
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </main>

      <footer className={styles.footer}>ㅇㅇ</footer>
    </div>
  );
};

export default Home;
