import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getPosts } from "../lib/notion";
import Container from "../components/Container";
import PostList from "../components/PostList";
import Layout from "../components/Layout";

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
  console.log(posts);
  return (
    <Layout>
      <Head>
        <title>RSUPPORT</title>
      </Head>

      <Container>
        <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
          {posts.slice(0, 2).map((post) => (
            <PostList
              key={post.id}
              post={post}
              aspect="landscape"
              preloadImage={true}
            />
          ))}
        </div>
        <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
          {posts.slice(2).map((post) => (
            <PostList key={post.id} post={post} aspect="square" />
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
