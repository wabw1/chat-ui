import React from "react";
import PropTypes from "prop-types";

import StyledConversation, { Conversations, MyChatBubble } from "./style";
import TitleBar from "components/TitleBar";
import Footer from "components/Footer";
import ChatBubble from "components/ChatBubble";
import Emoji from "components/Emoji";
import VoiceMessage from "components/VoiceMessage";

// 导入动画
import { useSpring } from "react-spring";

function Conversation({ onAvatarClick, onVideoClick, ...rest }) {
  // 动画属性配置
  // titleBar 从上往下
  const tBarAnimeProps = useSpring({
    from: { opacity: 0, transform: "translate3d(0px,-50px,0px)" },
    opacity: 1,
    transform: "translate3d(0px,0px,0px)",
    delay: 200,
  });
  // conversation 从右往左
  const converAnimeProps = useSpring({
    from: { opacity: 0, transform: "translate3d(50px,0px,0px)" },
    opacity: 1,
    transform: "translate3d(0px,0px,0px)",
    delay: 400,
  });
  const footAnimeProps = useSpring({
    from: { opacity: 0, tranform: "translate3d(0px,50px,0px)" },
    opacity: 1,
    transform: "translate3d(0px,0px,0px)",
    delay: 700,
  });

  return (
    <StyledConversation {...rest}>
      {/* 继续传给TitleBar */}
      {/* tBar属性传给TitleBar */}
      <TitleBar
        onAvatarClick={onAvatarClick}
        onVideoClick={onVideoClick}
        animeProps={tBarAnimeProps}
      />
      <Conversations style={converAnimeProps}>
        {/*样式组件通过style传就可以*/}
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
      <Footer animeProps={footAnimeProps} />
    </StyledConversation>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
