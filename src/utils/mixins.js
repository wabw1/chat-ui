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
export const activeBar = ({ barWidth = "8px", shadowWidth = "20px" } = {}) => css`
	position: relative;  //容器相对定位，内部绝对定位移到最left
	&::before, &::after{
		content: "";
		display: block;
		position: absolute;
		left: 0;
		height: 100%;
	}
	&::before{
		width: ${barWidth};   //传进来的宽度
		background: linear-gradient(
			180deg, 
			rgba(142,197,242,1) 0%, rgba(79,157,222,1) 100%
		);  //渐变色

	}
	&::after{
		width: ${shadowWidth};
		background: linear-gradient(
			270deg,
			rgba(41,47,76,1) 0%, rgba(142,197,242,1) 100%
		);
		opacity: 0.6;
	}
`;