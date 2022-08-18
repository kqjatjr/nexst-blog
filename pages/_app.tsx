import "../styles/globals.css";
import type { AppProps } from "next/app";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

const DEFAULT_SEO = {
  title: "RSUPPORT TECH BLOG",
  description: "알서포트 기술 블로그",
  canonical: "https://www.naver.com",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "url",
    title: "RSUPPORT TECH BLOG",
    site_name: "RSUPPORT TECH BLOG",
    images: [
      {
        url: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F2112%2F10339_2_2.9a8afd95__1080_790.jpg&w=1000&q=75",
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
      <ThemeProvider enableSystem={false}>
        <DefaultSeo {...DEFAULT_SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
