import Head from "next/head";
import Container from "./Container";
import Footer from "./Footer";
import NavBar from "./NavBar";

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
