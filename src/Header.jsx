import React from "react";
import Navbar from "react-bootstrap/Navbar";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <ChatBubbleIcon className="logo"/>
            Kanye Quotes
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;
