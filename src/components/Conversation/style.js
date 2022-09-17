import ChatBubble from "components/ChatBubble";
import styled from "styled-components";
import { animated } from "react-spring";
// 自定义conversations容器
const Conversations = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: start; //
  width: 100%;
  padding: 10px 15px;
  flex: 1; //   容器为浮动高度

  overflow-y: auto;
  & > * {
    margin: 10px 0;
  }
`;

// 自定义 我的会话气泡
const MyChatBubble = styled(ChatBubble).attrs({ type: "mine" })`
  align-self: flex-end;
`;

const StyledConversation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  & > *:last-child {
    align-self: end;
  }
  border: 1px solid ${({ theme }) => theme.greyBox};
`;

export default StyledConversation;
export { Conversations, MyChatBubble };
