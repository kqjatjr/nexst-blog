import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="My First Static Website" />
        <meta name="keywords" content="nextjs,static,website" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap"
          rel="stylesheet "
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
