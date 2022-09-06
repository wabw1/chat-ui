import Icon from "components/Icon";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import styled, { css } from "styled-components";

const BubbleTip = styled(Icon)`
  position: absolute;
  bottom: -15%;
  left: 0;
  z-index: 5; //越小越在下面
`;
const MessageText = styled(Text)``;

const Bubble = styled.div`
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 15px 22px;
  /* margin: 10px; */
  position: relative;
  border-radius: 100px;
  z-index: 10;
`;

const Time = styled(Paragraph).attrs({ type: "secondary" })`
  margin: 6px;
  margin-left: 24px;
  word-spacing: 1rem;
`;

// 消息样式变体
const typeVariants = {
  mine: css`
    ${Bubble} {
      background-color: ${({ theme }) => theme.primaryColor};
    }
    ${BubbleTip} {
      transform: rotateY(180deg);
      left: unset; //置空
      right: 0;

      path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }
    ${Time} {
      margin-left: 0;
      margin-right: 24px;
      text-align: right;
    }
    ${MessageText} {
      color: white;
    }
  `,
};

const StyledChatBubble = styled.div`
  display: flex;
  flex-direction: column;
  ${({ type }) => type && typeVariants[type]}; //
`;

export default StyledChatBubble;
export { Bubble, BubbleTip, MessageText, Time };
