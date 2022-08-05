import Head from "next/head";
import { getPosts } from "../lib/notion";
import Container from "../components/Container";
import PostList from "../components/PostList";
import { ChangeEvent, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
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
  console.log(posts);
  const [postList, setPostList] = useState(posts);
  const [inputValue, setInputValue] = useState("");

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClickSearchBtn = () => {
    if (inputValue.trim().length === 0) {
      setPostList(posts);
    } else {
      const filterPost = posts.filter((post) =>
        post.properties.name.title[0].plain_text.includes(inputValue.trim()),
      );
      setPostList(filterPost);
    }
  };

  return (
    <Layout>
      <Head>
        <title>RSUPPORT</title>
      </Head>

      <NavBar
        value={inputValue}
        placeholder="검색어를 입력해 주세요"
        onChangeInputValue={handleChangeInputValue}
        onClickSearchBtn={handleClickSearchBtn}
      />

      <Container>
        <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
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
      </Container>
    </Layout>
  );
};

export default Home;
