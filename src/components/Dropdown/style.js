import StyledSeperator from "components/Seperator/style";
import styled from "styled-components";

const DropdownItem = styled.div`
  margin: 12px 0;
`;

const DropdownContainer = styled.div`
  position: absolute;
  white-space: nowrap; //文字不换行
  background: ${({ theme }) => theme.background};
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.08);
  padding: 4px 26px;

  // 根据align设置相对定位
  ${({ align }) => align}:0;

  // 分割线样式
  ${StyledSeperator} {
    margin: -3px -26px;
    width: calc(100% + 52px); //填满长度
  }

  // 根据属性 决定是否显示
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

// 最外层容器 包括targetChildren 和 content(dropdown的东西)
const StyledDropdown = styled.div`
  position: relative;
  cursor: pointer;
`;

export default StyledDropdown;
export { DropdownContainer, DropdownItem };
