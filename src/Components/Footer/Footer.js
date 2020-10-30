import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      &copy; {new Date().getFullYear()} Copyright{" "}
      <a href="https://huzaifa-shuja.web.app/"> Huzaifa Shuja </a>
    </div>
  );
};

export default Footer;
