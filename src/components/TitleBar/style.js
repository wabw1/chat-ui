import StyledIcon from "components/Icon/style";
import styled from "styled-components";

import { animated } from "react-spring";

// 自定义样式容器
const Title = styled.div`
  display: grid;
`;

const Actions = styled.div`
  display: flex;
  // 横向均匀分布
  justify-content: space-between;
  align-items: center;
  ${StyledIcon} {
    cursor: pointer;
  }
`;

// 改成styled(animated.div)来渲染，就避免增加一层div
// const StyledTitleBar = styled.div`
const StyledTitleBar = styled(animated.div)`
  display: grid;
  grid-template-columns: 62px 1fr 112px;
  // 最大高度
  max-height: 110px;
  padding: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.greyBox};
`;

export default StyledTitleBar;
export { Title, Actions };
