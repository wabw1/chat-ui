import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledAvatar, { StatusIcon } from 'components/Avatar/style';  // 修改组件里Avatar组件的样式

import styled from 'styled-components';
import { activeBar } from 'utils/mixins';


// 最外层的大容器（侧边栏）  nav标签渲染
const StyledNavBar = styled.nav`
	
	background-color: ${({theme})=> theme.darkPurple};
	// 布局grid 
	display: grid;
	grid-template-rows: 1fr 4fr;
	/* width: 100px; */
	width: ${({navSize})=> `${navSize}`};    // 自定义，也可以写死
	height: 100vh;
	padding: 30px 0;

	// 修改Avatar组件的样式，一定要引用StyledAvatar (包装过的)
	${StyledAvatar}{
		justify-self: center;
		${StatusIcon}{
			&::before{
				background-color: ${({theme})=> theme.darkPurple };
			}
		}
	}
`;


// MenuItem的容器，  grid布局
const MenuItems = styled.div`
	/* width: 100%; */
	display: grid;
	grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;   //前五个在74-88中间，最后一个占满剩下空间

`;  


// 带样式的单个MenuItem
const StyledMenuItem = styled.div`
	& > a{
		width: 100%;
		height: 74px;
		display: flex;
		justify-content: center;
		align-items: center;

		// 调用activeBar()
		// 不传参，默认选中
		${({active})=> active? activeBar(): activeBar({barWidth:0,shadowWidth:0})}   
		/* ${({active}) => (active? "" : `&::before,&::after{height: 0;}`)} // 非激活状态 */
	}
`;

// 带样式的单个图标 Icon
const MenuIcon = styled(FontAwesomeIcon)`
	/* font-size: ${({fontSize})=>`${fontSize}`};  // 自定义FontAwesomeIcon的size */
	color: white;
	font-size: 24px;
	opacity: ${({active})=> active? 1: 0.3};
`;  




export default StyledNavBar;
export {MenuIcon, StyledMenuItem, MenuItems};   //导出自定义样式


