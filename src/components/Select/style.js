import styled, { css } from "styled-components";

import CaretDown from "assets/icons/caret_down.svg";
import CaretDown2 from "assets/icons/caretDown2.svg";
// import StyledOption from "components/Option/style";

//type变体
const typeVariants = {
  form: css`
    background-image: url(${CaretDown2});
  `,
};

//form 标签渲染? -- 待完成

const StyledSelect = styled.select`
  appearance: none; //   -moz-appearance, -webkit-appearance: 两个分别隐藏firefox/chrome
  ::-ms-expand {
    display: none; //ie隐藏
  }

  // 自定义下拉icon
  background-image: url(${CaretDown});
  ${({ type }) =>
    type && typeVariants[type]}; //会覆盖 所以要放到覆盖掉的属性下面
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
