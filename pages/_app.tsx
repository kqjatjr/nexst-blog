import "../styles/globals.css";
import type { AppProps } from "next/app";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
  title: "RSUPPORT TECH BLOG",
  description: "알서포트 기술 블로그",
  canonical: "https://www.carrotins.com",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "url",
    title: "RSUPPORT TECH BLOG",
    site_name: "RSUPPORT TECH BLOG",
    images: [
      {
        url: "https://www.rsupport.com/ko-kr/wp-content/uploads/sites/2/2015/11/rsupport.svg",
        width: 285,
        height: 167,
        alt: "썸네일 이미지",
      },
    ],
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
