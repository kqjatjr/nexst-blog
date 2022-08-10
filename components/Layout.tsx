import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "./Footer";

const Layout = (props: any) => {
  return (
    <>
      <div>
        <div>{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
