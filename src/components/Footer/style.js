import styled from "styled-components";

import { animated } from "react-spring";

// suffix Icon的容器
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: -30px;
  & > * {
    margin-left: 16px;
  }
`;

// 自定义popover层
const StyledPopoverContent = styled.div`
  display: flex;
  & > * {
    margin: 0 8px;
    font-size: 16px; //可以作用到emoji上 因为是span
  }
`;

//添加动画 animated.footer
const StyledFooter = styled(animated.footer)`
  padding: 12px 30px;
  width: 100%;
`; //符合html语义化规则

export default StyledFooter;
export { IconContainer, StyledPopoverContent };
