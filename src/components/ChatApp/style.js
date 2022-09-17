import styled, { css } from "styled-components";

// nav标签渲染
const Nav = styled.nav`
  flex-shrink: 0; // 禁止缩小

  // 添加动画样式
  position: relative;
  z-index: 100;
`;

const SideBar = styled.aside`
  min-width: 344px;
  max-width: 448px;
  height: 100vh;
  flex: 1;
  background: ${({ theme }) => theme.gradientGrey};
  /* padding: 20px; */
  overflow-y: auto;
  padding: 15px;

  // 动画设置样式
  position: relative;
  z-index: 50;
  > div {
    will-change: transform, opacity;
    position: absolute;
    width: 94%;
  }
`;

const Content = styled.main`
  flex: 2;
  position: relative; //视频需要绝对定位
`;

const Drawer = styled.div`
  max-width: 310px;
  width: 0; //默认为0 ，show==true为310

  // 设置动画
  transform: translateX(200px);
  transition: 0.4s;
  ${({ show }) =>
    show &&
    css`
      width: initial; // ????????? initial 是什么值
      transform: translateX(0px);
    `}
`;

const StyledChatApp = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

export default StyledChatApp;
export { Nav, SideBar, Content, Drawer };
