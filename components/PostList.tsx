import Image from "next/image";
import Link from "next/link";
import { cx } from "./Container";

export default function PostList({ post, aspect }: any) {
  console.log(post);
  return (
    <>
      <div className="cursor-pointer">
        <div
          className={cx(
            "relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800  hover:scale-105",
            aspect === "landscape" ? "aspect-video" : "aspect-square",
          )}
        >
          <Link href={`/${post.id}`}>
            <a>
              {post.cover && (
                <Image
                  src={post.cover.external.url}
                  alt={"Thumbnail"}
                  sizes="80vw"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  className="transition-all"
                />
              )}
            </a>
          </Link>
        </div>
        <Link href={`/${post.id}`}>
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
              {post.properties.name.title[0].plain_text}
            </span>
          </h2>
        </Link>

        <div className="hidden">
          {post.excerpt && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
              {/* <Link href={`/post/${post.slug.current}`}>{post.excerpt}</Link> */}
            </p>
          )}
        </div>

        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-5 h-5">
              {post && (
                <Image
                  src={post.properties.author.people[0].avatar_url}
                  objectFit="cover"
                  layout="fill"
                  alt=""
                  sizes="30px"
                  className="rounded-full"
                />
              )}
            </div>
            <span className="text-sm">
              {post.properties.author.people[0].name}
            </span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time
            className="text-sm"
            dateTime={post?.publishedAt || post._createdAt}
          >
            시간
          </time>
        </div>
      </div>
    </>
  );
}
