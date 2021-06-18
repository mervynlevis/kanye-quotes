import React from "react";
import Nav from "react-bootstrap/Nav";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="https://github.com/mervynlevis">GitHub</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://api.kanye.rest">Kanye Rest API</Nav.Link>
        </Nav.Item>
      </Nav>
      <p>Mervyn Levis {year}</p>
    </div>
  );
}

export default Footer;
