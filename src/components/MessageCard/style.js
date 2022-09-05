import StyledAvatar from "components/Avatar/style";
import Badge from "components/Badge";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import styled, { css } from "styled-components";

//引入card的mixins
import { activeBar, card } from "utils/mixins";

// 使用Text组件，给属性size赋值"large" 就不需要从stoies里传递进参数，靠牛逼（好灵活。。杀了我）
const Name = styled(Text).attrs({ size: "large" })`
  grid-area: name;
`;

const Time = styled(Text).attrs({ size: "medium", type: "secondary" })`
  grid-area: time;
  justify-self: right;
`;

const Status = styled(Text).attrs({ size: "normal", type: "secondary" })`
  grid-area: status;
`;

//消息和未读数 容器
const Message = styled.div`
  grid-area: message;
  display: grid;
  grid-template-columns: 1fr 30px;
  align-items: center;
  // 已回复状态，更改columns布局
  ${({ replied }) =>
    replied &&
    css`
      grid-template-columns: 24px 1fr 30px;
    `}
`;

const MessageText = styled(Paragraph).attrs({ ellipsis: true })``;

const UnreadBadge = styled(Badge)`
  justify-self: right;
`; //未读数的⭕️

// 最外层容器 Grid布局
const StyledMessageCard = styled.div`
  // 调用card 一组背景色和边框
  ${card()}
  display: grid;
  grid-template-areas:
    "avatar name time"
    "avatar status status"
    "message message message";
  grid-template-columns: 64px 1fr 1fr; //第一列64px 剩下平分
  row-gap: 15px;
  background: ${({ theme }) => theme.background};
  transition: 0.4s;
  &:hover {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  }

  // 放头像
  ${StyledAvatar} {
    grid-area: avatar;
  }

  // 激活状态
  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.darkPurple};
      ${Name},${Time},${Status},${MessageText} {
        color: white;
      }
      ${Status}, ${Time} {
        opacity: 0.4;
      }
      ${activeBar({ barWidth: "4px", shadowWidth: "14px" })}
      //隐藏漏出去的条
		overflow: hidden;
    `}
`;

export default StyledMessageCard;
export { Name, Time, Status, Message, MessageText, UnreadBadge };
