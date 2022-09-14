import StyledMessageCard from "components/MessageCard/style";
import styled from "styled-components";

// chatList引用styledMessageCard组件 需要是样式包装过的
const ChatList = styled.div`
  ${StyledMessageCard} {
    margin-bottom: 20px; //设置单个card下边距
  }
`;

const StyledMessageList = styled.div`
  overflow-y: auto;
`;

export default StyledMessageList;
export { ChatList };
