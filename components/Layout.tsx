import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = (props: any) => {
  return (
    <>
      <div>
        <NavBar />
        <div>{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
