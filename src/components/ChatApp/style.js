import styled, { css } from "styled-components";

// nav标签渲染
const Nav = styled.nav`
  flex-shrink: 0; // 禁止缩小
`;

const SideBar = styled.aside`
  min-width: 350px;
  max-width: 448px;
  height: 100vh;
  flex: 1;
  background: ${({ theme }) => theme.gradientGrey};
  padding: 10px;
  overflow-y: hidden;
`;

const Content = styled.main`
  flex: 2;
  position: relative; //视频需要绝对定位
`;

const Drawer = styled.div`
  max-width: 310px;
  width: 0; //默认为0 ，show==true为320
  ${({ show }) =>
    show &&
    css`
      width: 310px;
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
