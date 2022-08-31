// 圆形的通用样式

import { css } from "styled-components";


// 导出一个Circle函数
export const circle = (color, size="8px") => css`
/* content: ""; */
	height: ${size};
	width: ${size};
	border-radius: 50%;
	background-color: ${color};
`;