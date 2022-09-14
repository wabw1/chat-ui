import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "components/Avatar";
import StyledAvatar from "components/Avatar/style";
import Button from "components/Button";
import StyledParagraph from "components/Paragraph/style";
import styled, { css } from "styled-components";
import { card } from "utils/mixins";

// 底部按钮div
const Actions = styled.div`
  grid-area: actions/title; /* actions所在行号 和title所在列号 */
  /* grid-area: 2/1/3/3; */ //等价

  justify-self: center; //这样只能在自己的grid-area里居中
  align-self: end;

  display: grid;
  grid-template-columns: 90px 90px 90px;
  /* grid-template-columns: repeat(3, 90px); */
`;

// 底部按钮
const Action = styled(Button).attrs({ size: "64px" })`
  font-size: 32px; //图标大小
  color: white; //图标颜色
  background: ${({ type, theme }) =>
    type === "hangoff" ? theme.red2 : theme.greyDark2};
`;

// 个人头像
const Self = styled(Avatar)`
  grid-area: self;
  //在右下角
  align-self: end;
  justify-self: end;
`;

// 最小化按钮 （这里重构了Button的rect样式的属性 新增加一个size，默认正方形，长方形再改)
const Minimise = styled(Button).attrs({ size: "62px" })`
  grid-area: title;
  /* position: absolute; */
  background-color: ${({ theme }) => theme.greyBg};
  justify-self: end;
  font-size: 46px;
  padding: 0;
`;

// 最小化后的界面
const VideoCallAlert = styled.div`
  width: max-content;

  display: grid;
  align-content: center;
  grid-template-areas:
    "av name name"
    "av action  icon";
  row-gap: 5px;
  column-gap: 10px;
  position: absolute;
  right: 0;
  top: 10vh;
  border: 1px solid ${({ theme }) => theme.greyBox};
  z-index: 200;
  ${card()}// 这里不好取Paragraph的，因为有很多个，所以写在macro里
  /* ${StyledAvatar} {
    grid-area: av;
  } */
`;

//外层容器
const StyledVideoCall = styled.div`
  height: 100vh;
  padding: 20px;
  padding-bottom: 40px;

  background-image: url(${({ src }) => src}); //居中显示背景图
  background-position: center;
  background-size: cover;

  display: grid; // grid布局
  grid-template-areas:
    "title title"
    "actions self";
`;

export default StyledVideoCall;
export { Actions, Action, Self, Minimise };
export { VideoCallAlert };
