import React from "react";
import PropTypes from "prop-types";

import StyledConversation, { Conversations, MyChatBubble } from "./style";
import TitleBar from "components/TitleBar";
import Footer from "components/Footer";
import ChatBubble from "components/ChatBubble";
import Emoji from "components/Emoji";
import VoiceMessage from "components/VoiceMessage";

function Conversation({ ...rest }) {
  return (
    <StyledConversation {...rest}>
      <TitleBar />
      <Conversations>
        <ChatBubble time="下午10:00">Hi, Bob, what r u doing?</ChatBubble>
        <MyChatBubble time="下午10:10">Set todos for the summer.</MyChatBubble>
        <ChatBubble time="下午10:20">
          <VoiceMessage time="00:21" />
        </ChatBubble>
        <MyChatBubble time="下午10:30">
          Cool!
          <Emoji label="cool"> 😎</Emoji>
        </MyChatBubble>
      </Conversations>
      <Footer />
    </StyledConversation>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
