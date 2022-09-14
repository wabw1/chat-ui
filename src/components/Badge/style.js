import styled, { css } from "styled-components";

import { circle } from "utils/mixins"; //辅助圆形导入

// 定义变体，是个对象，{名称: css表现}
const variants = {
  dot: css`
    position: relative;
    padding: 5px;
    &::after {
      display: ${({ show }) =>
        show ? "block" : "none"}; //show==true, 显示block否则none
      content: "";
      ${({ theme }) => circle(theme.red, "6px")}; // color,size
      position: absolute;
      right: 0;
      top: 0;
    }
  `,
  default: css`
    ${({ theme }) => circle(theme.red, "26px")}; //一个大圆片(无数字显示)
    // 布局为flex？
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.2),
      0px 6px 12px 0px rgba(0, 0, 0, 0.5);
    // 未读数为0的时候设置不显示
    /* ${({ showZero, count }) =>
      !showZero && count === 0 ? `visibility: hidden` : ""} */
    ${({ showZero, count }) => !showZero && count === 0 && `visibility: hidden`}
  `,
};

const Count = styled.div`
  // 白色 字体默认14px
  color: white;
  font-size: ${({ theme }) => theme.normal};
`;

const StyledBadge = styled.div`
  display: inline-block;
  ${({ variant }) => variants[variant]}
`;

export default StyledBadge;
// count组件导出
export { Count };
