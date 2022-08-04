import Head from "next/head";
import NavBar from "./NavBar";

const Layout = (props: any) => {
  return (
    <>
      <div>
        <NavBar />
        <div>{props.children}</div>

        <div />
      </div>
    </>
  );
};

export default Layout;
