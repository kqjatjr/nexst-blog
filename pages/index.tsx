import Head from "next/head";
import { getPosts } from "../lib/notion";
import Container from "../components/Container";
import PostList from "../components/PostList";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

export async function getServerSideProps() {
  let { results }: { results: any[] } = await getPosts();

  const done = results.filter(
    (post) => post.properties.status.status?.name === "Done",
  );

  return {
    props: {
      posts: done,
    },
  };
}

interface Props {
  posts: any[];
}

const Home = ({ posts }: Props) => {
  const [postList, setPostList] = useState(posts || []);

  useEffect(() => {
    const scroll = sessionStorage.getItem("scroll");
    console.log("home mounted");
    if (scroll) {
      window.scrollTo(0, Number(scroll));
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>RSUPPORT</title>
      </Head>
      <Container>
        <div className="min-h-[70vh]">
          <div className="grid gap-10 lg:gap-10 md:grid-cols-2">
            {postList.slice(0, 2).map((post) => (
              <PostList
                key={post.id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
            {postList.slice(2).map((post) => (
              <PostList key={post.id} post={post} aspect="square" />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
