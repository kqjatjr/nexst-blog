import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { cx } from "./Container";

type TPorps = {
  post: any;
  aspect: string;
  preloadImage?: boolean;
};

export default function PostList({ post, aspect }: TPorps) {
  const createdTime = dayjs(post.created_time).format("YYYY년 MM월 DD일");
  const thumbnail = post.cover?.external
    ? post.cover.external.url
    : post.cover?.file.url;

  return (
    <>
      <div className="cursor-pointer">
        <div
          className={cx(
            "relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800  hover:scale-105",
            aspect === "landscape" ? "aspect-video" : "aspect-square",
          )}
        >
          {post.cover ? (
            <Link href={`/${post.id}`}>
              <a>
                <Image
                  src={thumbnail}
                  alt={"Thumbnail"}
                  sizes="80vw"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  className="transition-all"
                />
              </a>
            </Link>
          ) : (
            <Image
              src="https://www.rsupport.com/ko-kr/wp-content/uploads/sites/2/2015/11/rsupport.svg"
              alt={"Thumbnail"}
              sizes="80vw"
              layout="fill"
              priority={true}
              className="transition-all"
            />
          )}
        </div>

        <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
          <span
            className="bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_10px] group-hover:bg-[length:100%_10px]"
          >
            {post.properties.name.title[0] ? (
              <Link href={`/${post.id}`} passHref>
                {post.properties.name.title[0].plain_text}
              </Link>
            ) : (
              "제목을 입력해 주세요"
            )}
          </span>
        </h2>

        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-5 h-5">
              {post.properties.author.people[0] ? (
                <Image
                  src={post.properties.author.people[0].avatar_url}
                  objectFit="cover"
                  layout="fill"
                  alt=""
                  sizes="30px"
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
            <span className="text-sm">
              {post.properties.author.people[0]
                ? post.properties.author.people.length > 1
                  ? post.properties.author.people[0].name +
                    " 외 " +
                    (post.properties.author.people.length - 1) +
                    "명"
                  : post.properties.author.people[0].name
                : "익명의 작성자"}
            </span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time className="text-sm">{createdTime}</time>
        </div>
      </div>
    </>
  );
}
