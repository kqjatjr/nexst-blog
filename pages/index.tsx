import Head from "next/head";
import { getPosts } from "../lib/notion";
import Container from "../components/Container";
import PostList from "../components/PostList";
import React, { ChangeEvent, useState, KeyboardEvent, useEffect } from "react";
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
  const [postList, setPostList] = useState(posts || []);
  const [inputValue, setInputValue] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const scroll = sessionStorage.getItem("scroll");
    if (scroll) {
      window.scrollTo(0, Number(scroll));
    }
  }, []);

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClickLogo = () => {
    setPostList(posts);
    setInputValue("");
  };

  const handleKeyPressSesrchKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputValue.trim().length === 0) {
        setPostList(posts);
      } else {
        const filterPost = posts.filter((post) => {
          const curTitle =
            post.properties.name.title[0].plain_text.toUpperCase();
          const target = inputValue.trim().toUpperCase();
          return curTitle.includes(target);
        });
        setPostList(filterPost);
        setKeyword(inputValue);
      }
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
        onKeyPressSesrchKey={handleKeyPressSesrchKey}
        onClickLogo={handleClickLogo}
      />

      <Container>
        {postList.length > 0 ? (
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
        ) : (
          <div className="min-h-[70vh] flex justify-center">
            <span className="m-auto text-xl">
              <span className="font-bold text-red-500">{keyword}</span>에 관한
              검색결과가 없습니다.
            </span>
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default Home;
