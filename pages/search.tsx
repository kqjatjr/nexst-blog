import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageContext } from "next/types";
import Layout from "../components/Layout";
import Container from "../components/Container";
import PostList from "../components/PostList";
import { getPosts } from "../lib/notion";

export async function getServerSideProps({ query }: NextPageContext) {
  const { q } = query;
  let { results }: { results: any[] } = await getPosts();

  const posts = results.filter(
    (post) => post.properties.status.status?.name === "Done",
  );

  const filteredPost = posts.filter((post) => {
    const curTitle = post.properties.name.title[0].plain_text.toUpperCase();
    return curTitle.includes(q);
  });

  return {
    props: {
      posts: filteredPost,
    },
  };
}

interface Props {
  posts: any[];
}

const Search = ({ posts }: Props) => {
  const { query } = useRouter();
  const { q } = query;
  return (
    <Layout>
      <Head>
        <title>RSUPPORT</title>
      </Head>
      <Container>
        {posts.length > 0 ? (
          <div className="min-h-[70vh]">
            <div className="grid gap-10 lg:gap-10 md:grid-cols-2">
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
          </div>
        ) : (
          <div className="min-h-[70vh] flex justify-center">
            <span className="m-auto text-xl">
              <span className="font-bold text-red-500">{q}</span>에 관한
              검색결과가 없습니다.
            </span>
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default Search;
