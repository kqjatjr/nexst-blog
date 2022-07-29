import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";
import { Pdf } from "react-notion-x/build/third-party/pdf";
import styles from "../styles/Home.module.css";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import { post } from "../lib/notion";

type TProps = {
  query: {
    id: string;
  };
};

export async function getServerSideProps({ query }: TProps) {
  const notion = new NotionAPI();
  const postId = query.id;
  const title = await post(postId);
  console.log(title);
  const recordMap = await notion.getPage(postId);

  return {
    props: {
      posts: recordMap,
    },
  };
}

const Post = ({ posts }: any) => {
  return (
    <div className={styles.blogPageHolder}>
      <div></div>
      <NotionRenderer
        recordMap={posts}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          Pdf,
        }}
      />
    </div>
  );
};

export default Post;
