import Head from "next/head";

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdn.sanity.io/" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io//" />
      </Head>
      <div className="antialiased text-gray-800 dark:bg-black dark:text-gray-400">
        <div />
        <div>{props.children}</div>

        <div />
      </div>
    </>
  );
};

export default Layout;
