import { Navbar, Nav } from "react-bootstrap";
import {Outlet,Link } from "react-router-dom";
import "./Header.css"
export const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>Shoester</Navbar.Brand>
        <Nav  >
          <Link style={{color:'#fff', textDecoration:'none'}} to="/home" ><Nav className="nav-text">Pricing</Nav></Link>
          <Link  style={{color:'#fff', textDecoration:'none',marginLeft:'7px'}} to="/about" ><Nav  className="nav-text">About</Nav></Link>
        </Nav>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Header;
