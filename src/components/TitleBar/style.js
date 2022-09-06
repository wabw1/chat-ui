import StyledIcon from "components/Icon/style";
import styled from "styled-components";

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

const StyledTitleBar = styled.div`
  display: grid;
  grid-template-columns: 62px 1fr 112px;
  // 最大高度
  max-height: 110px;
  padding: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.greyBox};
`;

export default StyledTitleBar;
export { Title, Actions };
