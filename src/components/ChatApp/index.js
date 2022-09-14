import React from "react";
import PropTypes from "prop-types";

import StyledChatApp, { Content, Nav, SideBar, Drawer } from "./style";
import NavBar from "components/NavBar";
import Conversation from "components/Conversation";
import MessageList from "components/MessageList";
import Profile from "components/Profile";

function ChatApp({ ...rest }) {
  return (
    <StyledChatApp {...rest}>
      <Nav>
        <NavBar />
      </Nav>
      <SideBar>
        <MessageList />
      </SideBar>
      <Content>
        <Conversation />
      </Content>
      <Drawer>
        <Profile />
      </Drawer>
    </StyledChatApp>
  );
}

ChatApp.propTypes = {
  children: PropTypes.any,
};

export default ChatApp;
