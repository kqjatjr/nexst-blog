import Container from "../components/Container";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

const error = () => {
  return (
    <Layout>
      <NavBar />
      <Container className="min-h-[70vh] box-border">
        <div>500 ERROR</div>
      </Container>
    </Layout>
  );
};

export default error;
