import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getPost, getPosts } from "../lib/notion";
import Image from "next/image";
import { NotionRenderer } from "react-notion-x";
import { NotionAPI } from "notion-client";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";
import { Pdf } from "react-notion-x/build/third-party/pdf";

export async function getServerSideProps() {
  // let { results } = await getPosts();
  const notion = new NotionAPI();
  const rootID = "024b5d9706114ad3843dcc7920b6b213";
  const recordMap = await notion.getPage(rootID);

  return {
    props: {
      test: recordMap,
    },
  };
}

interface Props {
  test: any;
}

const Home = ({ test }: Props) => {
  return (
    <div>
      <NotionRenderer
        recordMap={test}
        fullPage={true}
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

export default Home;
