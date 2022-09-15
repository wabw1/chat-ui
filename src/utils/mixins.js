// 圆形的通用样式

import { css } from "styled-components";

// 导出一个Circle函数
export const circle = (color, size = "8px") => css`
  /* content: ""; */
  height: ${size};
  width: ${size};
  border-radius: 50%;
  background-color: ${color};
`;

// 导出阴影重叠的 选中状态
// 解构赋值给barWidth,shadowWidth 默认值为8/20
export const activeBar = ({
  barWidth = "8px",
  shadowWidth = "20px",
} = {}) => css`
  position: relative; //容器相对定位，内部绝对定位移到最left
  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    height: 100%;
    transition: 0.3s cubic-bezier(0.16, 1, 0.3, 1); //高度条过渡 自定义动画
  }
  &::before {
    width: ${barWidth}; //传进来的宽度
    background: linear-gradient(
      180deg,
      rgba(142, 197, 242, 1) 0%,
      rgba(79, 157, 222, 1) 100%
    ); //渐变色
  }
  &::after {
    width: ${shadowWidth};
    background: linear-gradient(
      270deg,
      rgba(41, 47, 76, 1) 0%,
      rgba(142, 197, 242, 1) 100%
    );
    opacity: 0.6;
  }
`;

//导出 card函数定义一组css样式
export const card = (radius = "6px", padding = "20px 30px") => css`
  background: ${({ theme }) => theme.background};
  box-shadow: 0px 18px 40px 0 rgba(0, 0, 0, 0.05); //阴影
  padding: ${padding};
  border-radius: ${radius};
  &:hover {
    box-shadow: 0px 18px 40px 0 rgba(0, 0, 0, 0.2); //阴影
    /* background: ${({ theme }) => theme.primaryColor};
    opacity: 0.2; */
  }
  transition: 0.4s;
`;
