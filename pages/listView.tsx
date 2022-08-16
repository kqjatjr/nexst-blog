import Head from "next/head";
import { getPosts } from "../lib/notion";
import Container from "../components/Container";
import PostList from "../components/PostList";
import React, { ChangeEvent, useState, KeyboardEvent, useEffect } from "react";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import Link from "next/link";
import { NotionRenderer } from "react-notion-x";
import { NotionAPI } from "notion-client";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";
import { Pdf } from "react-notion-x/build/third-party/pdf";

type TMapList = {
  recordMap: [any];
  id: string;
};

export async function getServerSideProps() {
  let { results }: { results: any[] } = await getPosts();

  const done = results.filter(
    (post) => post.properties.status.status?.name === "Done",
  );

  const recordMapList = await done.reduce(async (acc, cur) => {
    const notion = new NotionAPI();
    const recordMap = await notion.getPage(cur.id);

    return acc;
  }, []);

  return {
    props: {
      posts: recordMapList,
      recordMapList: recordMapList,
    },
  };
}

interface Props {
  posts: any[];
  recordMapList: any[];
}

const ListView = ({ posts, recordMapList }: Props) => {
  const [postList, setPostList] = useState(posts || []);
  console.log(recordMapList);

  return (
    <Layout>
      <Head>
        <title>RSUPPORT</title>
      </Head>

      <NavBar />

      <div>
        <Link href="/" passHref>
          <button>그리드 뷰</button>
        </Link>
      </div>

      <Container>
        {posts.map((post) => {
          return (
            <NotionRenderer
              key={post.id}
              recordMap={post.recordMap}
              components={{
                Code,
                Collection,
                Equation,
                Modal,
                Pdf,
              }}
            />
          );
        })}
      </Container>
    </Layout>
  );
};

export default ListView;
