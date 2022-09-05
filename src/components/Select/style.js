import styled from "styled-components";

import CaretDown from "assets/icons/caret_down.svg";
// import StyledOption from "components/Option/style";

const StyledSelect = styled.select`
  appearance: none; //   -moz-appearance, -webkit-appearance: 两个分别隐藏firefox/chrome
  ::-ms-expand {
    display: none; //ie隐藏
  }

  // 自定义下拉icon
  background-image: url(${CaretDown});
  background-repeat: no-repeat;
  background-position: right center;
  padding-right: 14px;
  border: none;
  cursor: pointer;
  ${({ theme }) => `color: ${theme.greyInput}`}; //两种写法都对
  font-size: ${({ theme }) => theme.normal};
`;

//修改下面的Option的样式 改不了option样式。
/* ${StyledOption} {
  background-color: red;
} */

export default StyledSelect;
