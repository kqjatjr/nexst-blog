import Container from "./Container";
import ThemeSwitch from "./ThemeSwitch";

const Footer = () => {
  return (
    <Container className="footer footer-center p-4 bg-base-300 text-base-content min-h-[15vh] box-border	">
      <div>
        <p>Copyright © 2022 - RSUPPORT</p>
      </div>
      <ThemeSwitch />
    </Container>
  );
};

export default Footer;
