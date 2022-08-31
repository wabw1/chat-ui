// eslint-disable-next-line
import styled, { css } from 'styled-components'
import { circle } from 'utils/mixins';

// 辅助css函数 复用css代码 - 调用utils/circle()函数
const circleMixinFunc = (color,size) => css`
	content: "";
	display: block;
	position: absolute;
	${circle(color, size)};     //调用
`;



//外层容器
const StyledAvatar = styled.div`
	position: relative;
`;

// 状态（绿点）
const StatusIcon = styled.div`
	position: absolute;
	left: 2px;
	top:4px;

	&::before{
		${({size})=>circleMixinFunc('white',size)};
		transform: scale(2);
	}
	&::after{
		${({ theme,status, size }) => {
			if(status==="online"){
				return circleMixinFunc(theme.green, size)
			} else if(status==="offline"){
				return circleMixinFunc(theme.grey, size)
			}
		}}
	}
`;


// 头像方框
const AvatarClip = styled.div`
	height: ${({size})=> size};
	width: ${({size})=> size};
	border-radius: 50%;
	overflow: hidden;
`;

// 图  （跟父级元素保持一样大 
const AvatarImage = styled.img`
	width: 100%;
	height: 100%;   
	object-fit: cover;
	object-position: center;
`;



// 默认导出只能有一个
export default StyledAvatar;

export { StatusIcon, AvatarClip, AvatarImage };  //命名导出 可以无数个
