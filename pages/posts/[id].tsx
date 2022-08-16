import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";
import { Pdf } from "react-notion-x/build/third-party/pdf";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import Container from "../../components/Container";
import { getPost } from "../../lib/notion";
import dayjs from "dayjs";
import Image from "next/image";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";

import Tag from "../../components/Tag";
import Link from "next/link";
import { useTheme } from "next-themes";

type TProps = {
  query: {
    id: string;
  };
};

export async function getServerSideProps({ query }: TProps) {
  try {
    const notion = new NotionAPI();
    const postId = query.id;
    const recordMap = await notion.getPage(postId);

    const target = await getPost(postId);

    return {
      props: {
        posts: recordMap,
        target,
      },
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
}

const Post = ({ posts, target }: any) => {
  const createdTime = dayjs(target.created_time).format("YYYY년 MM월 DD일");
  const { theme } = useTheme();

  console.log(theme);

  const thumbnail = target.cover?.external
    ? target.cover.external.url
    : target.cover?.file.url;

  if (target.properties.tag && !target.properties.tag.select) {
    target.properties.tag.select = {
      id: "defalt",
      name: "ETC",
      color: "default",
    };
  }

  return (
    <Layout>
      <NavBar />
      <div className="min-h-[80vh] pb-10">
        <Container className="!pt-0">
          <div className="max-w-screen-md mx-auto">
            <Link href="/" passHref>
              <button className="flex items-center hover:cursor-pointer">
                <span>글 목록</span>
              </button>
            </Link>
            <div className="text-center">
              {target.properties.tag.select && (
                <Tag tag={target.properties.tag.select} />
              )}
            </div>
            <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
              {target.properties.name.title[0] ? (
                <span>{target.properties.name.title[0].plain_text}</span>
              ) : (
                <span>{"제목을 입력해 주세요"}</span>
              )}
            </h1>
            <div className="flex justify-center mt-5  text-gray-500 ">
              <div className="flex gap-3 ml-auto">
                <div className="relative flex-shrink-0 w-10 h-10">
                  {target.properties.author.people[0] ? (
                    <Image
                      src={target.properties.author.people[0].avatar_url}
                      objectFit="cover"
                      layout="fill"
                      alt="썸네일 이미지"
                      className="rounded-full"
                    />
                  ) : (
                    <Image
                      src="https://www.rsupport.com/ko-kr/wp-content/uploads/sites/2/2017/04/favicon.ico"
                      objectFit="cover"
                      layout="fill"
                      alt=""
                      sizes="30px"
                      className="rounded-full"
                    />
                  )}
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-400">
                    {target.properties.author.people[0]
                      ? target.properties.author.people.length > 1
                        ? target.properties.author.people[0].name +
                          " 외 " +
                          (target.properties.author.people.length - 1) +
                          "명"
                        : target.properties.author.people[0].name
                      : "익명의 작성자"}
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <time className="text-gray-500 dark:text-gray-400">
                      {createdTime}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="relative z-0 max-w-screen-sm mx-auto overflow-hidden lg:rounded-lg aspect-video">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={"Thumbnail"}
              layout="fill"
              blurDataURL={thumbnail}
              objectFit="contain"
            />
          ) : (
            <Image
              src="https://www.rsupport.com/ko-kr/wp-content/uploads/sites/2/2015/11/rsupport.svg"
              alt={"Thumbnail"}
              sizes="80vw"
              layout="fill"
              className="transition-all"
            />
          )}
        </div>
        <div className="pb-10">
          <NotionRenderer
            recordMap={posts}
            darkMode={theme == "dark" && true}
            components={{
              Code,
              Collection,
              Equation,
              Modal,
              Pdf,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Post;
